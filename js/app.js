import { storage } from "./storage.js";
import { CASES } from "../data/cases.js";
import { TECHNIQUES } from "../data/techniques.js";
import { STORY_FRAGMENTS } from "../data/fragments.js";
import { ACTIVITIES } from "../data/activities.js";
import { THEMES } from "../data/themes.js";
import { READING_TEXTS } from "../data/readingTexts.js";
import * as UI from "./ui.js";

const DOM = {
  onboarding: document.getElementById("onboarding-root"),
  app: document.getElementById("app-root"),
  content: document.getElementById("app-content"),
  modal: document.getElementById("modal-root"),
  profileDropdown: document.getElementById("profile-dropdown"),
};

let currentCaseState = null;
let currentCaseStep = 0;

const renderOnboarding = () => {
  DOM.onboarding.style.display = "flex";
  DOM.onboarding.classList.add("onboarding-container");
  DOM.app.style.display = "none";

  DOM.onboarding.innerHTML = `
    <div class="onboarding-card">
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="font-size: 2rem; color: var(--primary); margin-bottom: 1rem;"><i class="fa-solid fa-feather-pointed"></i></div>
        <h1 style="font-size: 1.5rem; font-weight: 600;">Registro no Laboratório</h1>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Defina sua área de atuação primária.</p>
      </div>
      <div class="form-group">
        <label>Nome do Operador</label>
        <input type="text" id="onb-name" class="form-control" placeholder="Ex: Pedro">
      </div>
      <div class="form-group">
        <label>Setor de Especialidade</label>
        <select id="onb-genre" class="form-control">
          <option value="fantasia">Fantasia Escrita</option>
          <option value="misterio">Mistério e Investigação</option>
          <option value="ficcao">Ficção Científica</option>
          <option value="drama">Drama e Realismo</option>
        </select>
      </div>
      <button class="btn btn-primary" id="btn-register" style="margin-top: 1rem;">Iniciar Expediente <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;

  document.getElementById("btn-register").addEventListener("click", () => {
    const name = document.getElementById("onb-name").value.trim();
    const genre = document.getElementById("onb-genre").value;
    if (!name) return;

    storage.saveUser({ name, genre, registeredAt: new Date().toISOString() });
    DOM.onboarding.style.display = "none";
    DOM.app.style.display = "block";
    navigate("dashboard");
  });
};

const renderProfileDropdown = () => {
  const user = storage.getUser();
  if (!user) return;
  const t = THEMES[user.genre];
  DOM.profileDropdown.innerHTML = `
    <div style="border-bottom: 1px solid var(--border); padding-bottom: 1rem; margin-bottom: 1rem;">
      <h4 style="font-size: 1rem; margin-bottom: 0.2rem;">${user.name}</h4>
      <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">${t.role} de ${user.genre}</div>
    </div>
    <button class="btn btn-outline" data-action="logout" style="width: 100%; border-color: var(--danger); color: var(--danger);">Apagar Registro</button>
  `;
};

const navigate = (route) => {
  document
    .querySelectorAll(".main-nav a")
    .forEach((a) => a.classList.remove("active"));
  const activeLink = document.querySelector(
    `.main-nav a[data-route="${route}"]`,
  );
  if (activeLink) activeLink.classList.add("active");

  UI.updateNavLabels();

  if (route === "dashboard") DOM.content.innerHTML = UI.renderDashboard();
  if (route === "collection") DOM.content.innerHTML = UI.renderCollection();
  if (route === "newsletter") DOM.content.innerHTML = UI.renderNewsletter();
  if (route === "activities") DOM.content.innerHTML = UI.renderActivities();
  if (route === "story") DOM.content.innerHTML = UI.renderStory();
  if (route === "reading") DOM.content.innerHTML = UI.renderReadingTexts();
};

const handleGlobalClick = (e) => {
  if (e.target.matches(".note-area")) {
    e.target.addEventListener(
      "blur",
      (evt) => {
        const techId = evt.target.getAttribute("data-tech");
        storage.saveNote(techId, evt.target.value);
        UI.showToast("Anotação documentada no caderno.", "success");
      },
      { once: true },
    );
  }

  const target = e.target.closest("[data-action], [data-route]");

  if (e.target.closest("#nav-avatar")) {
    renderProfileDropdown();
    DOM.profileDropdown.classList.toggle("active");
    return;
  } else {
    DOM.profileDropdown.classList.remove("active");
  }

  if (!target) return;

  if (target.hasAttribute("data-route")) {
    e.preventDefault();
    navigate(target.getAttribute("data-route"));
    return;
  }

  const action = target.getAttribute("data-action");

  if (action === "start-case") {
    const id = target.getAttribute("data-id");
    currentCaseState = CASES.find((c) => c.id === id);
    currentCaseStep = 0;
    DOM.content.innerHTML = UI.renderCaseStep(
      currentCaseState,
      currentCaseStep,
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (action === "read-article") {
    const id = target.getAttribute("data-id");
    DOM.content.innerHTML = UI.renderArticle(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (action === "submit-case-diagnostic") {
    const selected = document.querySelector('input[name="case_opt"]:checked');
    if (!selected) {
      UI.showToast("Selecione um diagnóstico para continuar.", "error");
      return;
    }
    if (parseInt(selected.value) === currentCaseState.diagnosticCorrect) {
      currentCaseStep = 1;
      DOM.content.innerHTML = UI.renderCaseStep(
        currentCaseState,
        currentCaseStep,
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      UI.showToast("Diagnóstico incorreto. Reavalie a cena.", "error");
    }
  }

  if (action === "submit-case-rewrite-select") {
    const selected = document.querySelector('input[name="case_opt"]:checked');
    if (!selected) {
      UI.showToast("Selecione uma opção.", "error");
      return;
    }
    if (parseInt(selected.value) === currentCaseState.rewriteSelectionCorrect) {
      currentCaseStep = 2;
      DOM.content.innerHTML = UI.renderCaseStep(
        currentCaseState,
        currentCaseStep,
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      UI.showToast(
        "Esta não é a aplicação mais eficiente da técnica.",
        "error",
      );
    }
  }

  if (action === "next-case-step") {
    currentCaseStep = 3;
    DOM.content.innerHTML = UI.renderCaseStep(
      currentCaseState,
      currentCaseStep,
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (action === "finish-case") {
    const id = target.getAttribute("data-id");
    const text = document.getElementById("rewriteInput").value;

    if (!text.trim()) {
      UI.showToast("Insira sua reescrita para concluir o laudo.", "error");
      return;
    }

    storage.completeCase(id, text, []);

    const techUnblocked = storage.unlockTechnique(currentCaseState.techniqueId);
    const fragmentsUnlocked = storage.checkFragmentUnlocks(STORY_FRAGMENTS);

    UI.showToast("Laudo processado com sucesso.", "success");

    let modalContent = `A investigação foi concluída.`;
    if (techUnblocked) {
      const tech = TECHNIQUES[currentCaseState.techniqueId];
      modalContent += `<br><br><strong style="color:var(--primary);">✨ NOVA TÉCNICA DOCUMENTADA:</strong><br>${tech.name}<br><span style="font-size:0.8rem;">Consulte seu Caderno Pessoal.</span>`;
    }
    if (fragmentsUnlocked) {
      modalContent += `<br><br><strong style="color:var(--primary);">📜 ARQUIVO RECUPERADO:</strong><br>Um novo documento foi decifrado no Arquivo Perdido.`;
    }

    UI.showModal(
      "Investigação Concluída",
      modalContent,
      "Retornar",
      "close-modal",
    );
  }

  if (action === "close-modal") {
    DOM.modal.classList.remove("active");
    navigate("dashboard");
  }

  if (action === "logout") {
    storage.clearAll();
    window.location.reload();
  }

  if (action === "run-activity") {
    const id = target.getAttribute("data-id");
    DOM.content.innerHTML = UI.renderActivityForm(id, 0);
  }

  if (action === "submit-activity") {
    const id = target.getAttribute("data-id");
    const qIndex = parseInt(target.getAttribute("data-qindex"));
    const act = ACTIVITIES.find((a) => a.id === id);
    const q = act.questions[qIndex];

    const selected = document.querySelector('input[name="act_opt"]:checked');
    if (!selected) {
      UI.showToast("Selecione uma opção para emitir o laudo.", "error");
      return;
    }

    const isCorrect = parseInt(selected.value) === q.correct;

    if (isCorrect) {
      UI.showToast("Laudo Preciso. " + q.feedback, "success");

      if (qIndex + 1 === act.questions.length) {
        storage.completeActivity(id);
      }

      const btn = target;
      btn.disabled = true;
      btn.textContent = "Processando...";

      setTimeout(() => {
        DOM.content.innerHTML = UI.renderActivityForm(id, qIndex + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 3500);
    } else {
      UI.showToast(
        "Avaliação inconsistente. Analise a técnica novamente.",
        "error",
      );
    }
  }

  if (action === "start-dilema") {
    DOM.content.innerHTML = UI.renderDilemaNode("start");
  }

  if (action === "dilema-choice") {
    const nextNode = target.getAttribute("data-next");
    DOM.content.innerHTML = UI.renderDilemaNode(nextNode);
  }

  if (action === "investigate-fragment") {
    const id = target.getAttribute("data-id");
    DOM.content.innerHTML = UI.renderFragmentInvestigation(id);
  }

  if (action === "submit-fragment-investigation") {
    const id = target.getAttribute("data-id");
    const frag = STORY_FRAGMENTS.find((f) => f.id === id);
    const selected = document.querySelector('input[name="frag_opt"]:checked');

    if (!selected) return;

    if (parseInt(selected.value) === frag.investigation.correct) {
      UI.showToast(frag.investigation.feedback, "success");
      setTimeout(() => navigate("story"), 3500);
    } else {
      UI.showToast("Avaliação inconsistente.", "error");
    }
  }

  if (action === "start-reading") {
    const id = target.getAttribute("data-id");
    DOM.content.innerHTML = UI.renderReadingExecution(id, 0);
  }

  if (action === "submit-reading-answer") {
    const id = target.getAttribute("data-id");
    const qIndex = parseInt(target.getAttribute("data-qindex"));
    const rt = READING_TEXTS.find((r) => r.id === id);
    const q = rt.questions[qIndex];

    const selected = document.querySelector(
      'input[name="reading_opt"]:checked',
    );
    if (!selected) return;

    if (parseInt(selected.value) === q.correct) {
      UI.showToast(q.feedback, "success");
      setTimeout(() => {
        DOM.content.innerHTML = UI.renderReadingExecution(id, qIndex + 1);
      }, 3500);
    } else {
      UI.showToast("Análise incorreta do trecho.", "error");
    }
  }
};

const init = () => {
  const user = storage.getUser();
  if (!user) {
    renderOnboarding();
  } else {
    DOM.onboarding.style.display = "none";
    DOM.app.style.display = "block";
    navigate("dashboard");
  }
  document.addEventListener("click", handleGlobalClick);
};

init();
