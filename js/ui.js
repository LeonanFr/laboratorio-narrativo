import { storage } from "./storage.js";
import { THEMES } from "../data/themes.js";
import { CASES } from "../data/cases.js";
import { TECHNIQUES } from "../data/techniques.js";
import { NEWSLETTER_ARTICLES } from "../data/articles.js";
import { STORY_FRAGMENTS } from "../data/fragments.js";
import { ACTIVITIES } from "../data/activities.js";
import { PEDAGOGICAL_DILEMMAS } from "../data/dilemmas.js";
import { READING_TEXTS } from "../data/readingTexts.js";

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-btn");
  const nav = document.getElementById("main-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });

    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }
});

const getTheme = () => {
  const user = storage.getUser();
  return user ? THEMES[user.genre] : THEMES.drama;
};

export const updateNavLabels = () => {
  const p = storage.getProgress();
  document.getElementById("cases-val").textContent = p.casesCompleted.length;
};

export const showToast = (message, type = "success") => {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML =
    type === "success"
      ? `<i class="fa-solid fa-check-circle"></i> ${message}`
      : type === "error"
        ? `<i class="fa-solid fa-circle-xmark"></i> ${message}`
        : `<i class="fa-solid fa-circle-info"></i> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

export const showModal = (title, content, btnText, callbackAction) => {
  const root = document.getElementById("modal-root");
  const inner = document.getElementById("modal-content");
  inner.innerHTML = `
    <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">${title}</h2>
    <p style="color: var(--text-muted); margin-bottom: 2rem;">${content}</p>
    <button class="btn btn-primary" data-action="${callbackAction}">${btnText}</button>
  `;
  root.classList.add("active");
};

export const renderDashboard = () => {
  const user = storage.getUser();
  const prog = storage.getProgress();
  const t = getTheme();

  const completed = prog.casesCompleted.length;
  const featuredArticle = NEWSLETTER_ARTICLES[0];

  return `
    <div class="header-section">
      <h1>Saudações, ${t.role} ${user.name.split(" ")[0]}.</h1>
      <p>Painel central de operações textuais.</p>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <i class="fa-solid fa-magnifying-glass stat-icon"></i>
        <div class="stat-value">${completed}</div>
        <div class="stat-label">${t.task}s Analisados</div>
      </div>
      <div class="stat-card">
        <i class="fa-solid fa-key stat-icon"></i>
        <div class="stat-value">${prog.techniquesUnlocked.length}</div>
        <div class="stat-label">Técnicas Documentadas</div>
      </div>
      <div class="stat-card">
        <i class="fa-solid fa-scroll stat-icon"></i>
        <div class="stat-value">${prog.fragmentsUnlocked.length}</div>
        <div class="stat-label">Documentos Recuperados</div>
      </div>
    </div>

    <h3 class="section-title">Estudo Recomendado</h3>
    <div class="featured-article-card">
      <div class="featured-icon">
        <i class="fa-solid ${featuredArticle.coverIcon}"></i>
      </div>
      <div class="featured-content">
        <div class="featured-meta">Tempo de leitura: ${featuredArticle.readTime} min</div>
        <h4>${featuredArticle.title}</h4>
        <p>${featuredArticle.subtitle}</p>
        <button class="btn btn-outline btn-auto featured-btn" data-action="read-article" data-id="${featuredArticle.id}">Ler Artigo Completo</button>
      </div>
    </div>

    <h3 class="section-title">Investigações Práticas</h3>
    <div class="cases-container">
      ${
        CASES.filter((c) => !prog.casesCompleted.includes(c.id))
          .map(
            (c) => `
        <div class="case-card">
          <div class="case-card-info">
            <div class="case-icon">
              <i class="fa-solid ${c.icon}"></i>
            </div>
            <div>
              <div class="case-meta">${t.task} Disponível · Nível: ${c.difficulty}</div>
              <h4>${c.title}</h4>
            </div>
          </div>
          <button class="btn btn-primary btn-auto" data-action="start-case" data-id="${c.id}">${t.action} <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      `,
          )
          .join("") ||
        `<p style="color: var(--text-muted);">Todos os ${t.task.toLowerCase()}s atuais foram concluídos.</p>`
      }
    </div>
  `;
};

export const renderNewsletter = () => `
  <div class="editorial-header">
    <h1>Arquivo de Estudos</h1>
    <p style="color: var(--text-muted); margin-top: 1rem; font-size: 1.1rem;">Artigos e aprofundamentos teóricos baseados em técnicas narrativas.</p>
  </div>
  <div class="newsletter-grid">
    ${NEWSLETTER_ARTICLES.map(
      (art) => `
      <div class="newsletter-card" data-action="read-article" data-id="${art.id}">
        <div class="newsletter-card-icon">
          <i class="fa-solid ${art.coverIcon}"></i>
        </div>
        <div class="newsletter-card-content">
          <div class="newsletter-card-meta">Tempo de Leitura: ${art.readTime} min</div>
          <h3>${art.title}</h3>
          <p>${art.subtitle}</p>
        </div>
        <div class="newsletter-card-arrow">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    `,
    ).join("")}
  </div>
`;

export const renderActivities = () => `
  <div class="header-section">
    <h1>Laboratórios Práticos</h1>
    <p>Exercícios focados em diagnóstico e estruturação.</p>
  </div>
  <div class="activities-grid">
    <div class="card">
      <h3 style="margin-bottom: 1rem;"><i class="fa-solid fa-stethoscope"></i> Oficina de Diagnóstico</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem;">Identifique problemas rápidos em frases soltas.</p>
      <button class="btn btn-outline" data-action="run-activity" data-id="diag-01">Iniciar Oficina</button>
    </div>
    <div class="card">
      <h3 style="margin-bottom: 1rem;"><i class="fa-solid fa-code-compare"></i> Comparação de Evidências</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem;">Analise duas abordagens para a mesma cena.</p>
      <button class="btn btn-outline" data-action="run-activity" data-id="compare-01">Analisar Evidências</button>
    </div>
    <div class="card">
      <h3 style="margin-bottom: 1rem;"><i class="fa-solid fa-route"></i> Dilema Pedagógico</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem;">Tome decisões estruturais em um caso guiado.</p>
      <button class="btn btn-outline" data-action="start-dilema">Iniciar Dilema</button>
    </div>
  </div>
`;

export const renderArticle = (articleId) => {
  const art = NEWSLETTER_ARTICLES.find((a) => a.id === articleId);
  if (!art) return "";
  return `
    <div style="margin-bottom: 2rem;">
      <button class="btn btn-outline" style="width: auto; border: none; padding: 0; margin-bottom: 2rem; color: var(--text-muted);" data-action="route" data-route="newsletter">
        <i class="fa-solid fa-arrow-left"></i> Voltar ao Arquivo de Estudos
      </button>
      <div style="text-align: center; margin-bottom: 3rem;">
        <div style="color: var(--primary); font-weight: 600; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 1rem;">${art.readTime} Minutos de Leitura</div>
        <h1 style="font-family: var(--font-serif); font-size: 2.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-dark);">${art.title}</h1>
        <p style="color: var(--text-muted); font-size: 1.2rem; max-width: 700px; margin: 0 auto;">${art.subtitle}</p>
      </div>
    </div>
    <div class="card" style="border: none; background: transparent; padding: 0;">
      <div class="editorial-content">
        ${art.content}
      </div>
    </div>
    <div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border);">
      <button class="btn btn-primary" style="width: auto;" data-action="route" data-route="activities">
        <i class="fa-solid fa-flask"></i> Praticar no Laboratório
      </button>
    </div>
  `;
};

export const renderCaseStep = (caso, step) => {
  const tech = TECHNIQUES[caso.techniqueId];
  let contentHtml = "";

  if (step === 0) {
    contentHtml = `
      <div style="margin-bottom: 2rem;">
        <span style="font-size: 0.85rem; font-weight: 600; color: var(--primary); text-transform: uppercase;">Evidência Principal</span>
        <div class="reading-text-box" style="margin-top: 0.5rem; margin-bottom: 0;">"${caso.originalText}"</div>
      </div>
      <h3 style="margin-bottom: 1rem; font-size: 1.2rem;">${caso.diagnosticQuestion}</h3>
      <div class="options-container" style="margin-top: 0;">
        ${caso.diagnosticOptions
          .map(
            (opt, idx) => `
          <label class="option-label">
            <input type="radio" name="case_opt" value="${idx}">
            <span>${opt}</span>
          </label>
        `,
          )
          .join("")}
      </div>
      <button class="btn btn-primary" data-action="submit-case-diagnostic" style="margin-top: 1rem;">Confirmar Diagnóstico</button>
    `;
  } else if (step === 1) {
    contentHtml = `
      <div style="background: #e6f7e6; padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--success); margin-bottom: 2.5rem;">
        <strong style="color: var(--success); display: block; margin-bottom: 0.5rem;"><i class="fa-solid fa-check-circle"></i> Laudo Correto</strong>
        <p style="color: #2d3748;">${caso.diagnosisExplanation}</p>
      </div>
      <h3 style="margin-bottom: 1rem; font-size: 1.2rem;">${caso.rewriteSelectionQuestion}</h3>
      <div class="options-container" style="margin-top: 0;">
        ${caso.rewriteSelectionOptions
          .map(
            (opt, idx) => `
          <label class="option-label">
            <input type="radio" name="case_opt" value="${idx}">
            <span>${opt}</span>
          </label>
        `,
          )
          .join("")}
      </div>
      <button class="btn btn-primary" data-action="submit-case-rewrite-select" style="margin-top: 1rem;">Avaliar Correção</button>
    `;
  } else if (step === 2) {
    contentHtml = `
      <div style="background: #e6f7e6; padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--success); margin-bottom: 2.5rem;">
        <strong style="color: var(--success); display: block; margin-bottom: 0.5rem;"><i class="fa-solid fa-check-circle"></i> Aplicação Validada</strong>
        <p style="font-family: var(--font-serif); font-size: 1.15rem; color: #2d3748; font-style: italic; margin-bottom: 1rem;">"${caso.rewriteSelectionOptions[caso.rewriteSelectionCorrect]}"</p>
        <p style="color: #4a5568; margin-bottom: 1.5rem;"><strong>Análise do Perito:</strong> ${caso.correctionAnalysis}</p>
        <div style="background: rgba(255,255,255,0.6); padding: 1rem; border-radius: 6px;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--primary); text-transform: uppercase; display: block; margin-bottom: 0.2rem;">Técnica Identificada</span>
          <strong style="font-size: 1.1rem; color: var(--text-dark);">${tech.name}</strong>
        </div>
      </div>
      <button class="btn btn-primary" data-action="next-case-step">Ir para Prática Livre <i class="fa-solid fa-arrow-right"></i></button>
    `;
  } else if (step === 3) {
    contentHtml = `
      <div style="margin-bottom: 2rem;">
        <p style="color: var(--text-muted); margin-bottom: 1rem;">Agora é sua vez. Aplique a técnica <strong>${tech.name}</strong> para corrigir o trecho abaixo.</p>
        <div style="background: #fafafa; padding: 1.5rem; border: 1px solid var(--border); border-radius: 8px; margin-bottom: 1.5rem;">
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--primary); text-transform: uppercase;">Trecho Base</span>
          <p style="font-family: var(--font-serif); font-size: 1.15rem; margin-top: 0.5rem; color: var(--text-dark);">"${caso.challengeText}"</p>
        </div>
      </div>
      <textarea id="rewriteInput" class="form-control" style="min-height: 150px; font-family: var(--font-serif); font-size: 1.1rem; margin-bottom: 1.5rem;" placeholder="Sua versão aplicando a técnica..."></textarea>
      <button class="btn btn-primary" data-action="finish-case" data-id="${caso.id}">Assinar Laudo e Concluir</button>
    `;
  }

  return `
    <div class="card">
      <button class="btn btn-outline" style="width: auto; border: none; padding: 0; margin-bottom: 1.5rem; color: var(--text-muted);" data-action="route" data-route="dashboard">
        <i class="fa-solid fa-arrow-left"></i> Abortar Investigação
      </button>
      <div style="margin-bottom: 2.5rem; border-bottom: 1px solid var(--border); padding-bottom: 1.5rem;">
        <div style="font-size: 0.85rem; color: var(--primary); font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem;">Caso ${caso.id.replace("c", "")} · Nível: ${caso.difficulty}</div>
        <h2 style="font-size: 2rem; font-weight: 600; margin-bottom: 1rem; font-family: var(--font-serif);">${caso.title}</h2>
        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;"><strong>Contexto:</strong> ${caso.context}</p>
      </div>
      ${contentHtml}
    </div>
  `;
};

export const renderCollection = () => {
  const prog = storage.getProgress();

  if (prog.techniquesUnlocked.length === 0) {
    return `
      <div class="card" style="text-align: center; padding: 4rem 2rem;">
        <i class="fa-solid fa-book-journal-whills" style="font-size: 3rem; color: var(--border); margin-bottom: 1.5rem;"></i>
        <h2 style="margin-bottom: 1rem;">Caderno Vazio</h2>
        <p style="color: var(--text-muted);">Conclua investigações de casos para documentar fichas técnicas no seu acervo.</p>
      </div>
    `;
  }

  return `
    <div style="margin-bottom: 2rem;">
      <h1 style="font-size: 1.8rem; font-weight: 500;">Coleção Pessoal</h1>
      <p style="color: var(--text-muted);">Suas fichas de referência estrutural e anotações periciais.</p>
    </div>
    <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem;">
      ${prog.techniquesUnlocked
        .map((techId) => {
          const tech = TECHNIQUES[techId];
          const note = storage.getNote(techId);
          return `
          <div class="card" style="background: #fff; border-left: 4px solid var(--primary); padding: 2.5rem;">
            
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
              <div>
                <div style="font-size: 0.85rem; color: var(--primary); text-transform: uppercase; font-weight: 600; margin-bottom: 0.3rem;">${tech.category} · Nível: ${tech.difficulty}</div>
                <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem; font-family: var(--font-serif);">${tech.name}</h3>
              </div>
            </div>
            
            <p style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 1.5rem; font-weight: 500;">${tech.summary}</p>
            
            <div style="background: var(--bg-main); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
              <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.8rem; font-weight: 600;"><i class="fa-solid fa-microscope"></i> Definição Técnica</h4>
              <p style="color: var(--text-dark); line-height: 1.7; font-size: 1.05rem; margin: 0;">${tech.description}</p>
            </div>

            <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 1rem; font-weight: 600;"><i class="fa-solid fa-code-compare"></i> Comparação de Evidências</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
              <div style="background: #fde8e8; padding: 1.5rem; border-radius: 8px; border-top: 3px solid var(--danger);">
                <div style="color: var(--danger); font-size: 0.8rem; text-transform: uppercase; font-weight: 700; margin-bottom: 0.8rem;">Aplicação Falha</div>
                <p style="font-family: var(--font-serif); font-style: italic; color: #5c2b2b; font-size: 1.1rem; margin: 0;">"${tech.examples.bad}"</p>
              </div>
              <div style="background: #e6f7e6; padding: 1.5rem; border-radius: 8px; border-top: 3px solid var(--success);">
                <div style="color: var(--success); font-size: 0.8rem; text-transform: uppercase; font-weight: 700; margin-bottom: 0.8rem;">Aplicação Eficiente</div>
                <p style="font-family: var(--font-serif); font-style: italic; color: #235423; font-size: 1.1rem; margin: 0;">"${tech.examples.good}"</p>
              </div>
            </div>

            <label style="font-weight: 600; font-size: 0.95rem; color: var(--text-dark); display: block; margin-bottom: 0.8rem;"><i class="fa-solid fa-pen-nib"></i> Anotações do Perito:</label>
            <textarea class="note-area" data-action="save-note" data-tech="${techId}" placeholder="Anote suas percepções sobre quando e como usar essa técnica...">${note}</textarea>
          
          </div>
        `;
        })
        .join("")}
    </div>
  `;
};

export const renderActivityForm = (activityId, qIndex = 0) => {
  const act = ACTIVITIES.find((a) => a.id === activityId);
  if (!act) return "";

  if (qIndex >= act.questions.length) {
    return `
      <div class="card" style="text-align: center; padding: 4rem 2rem;">
        <i class="fa-solid fa-clipboard-check" style="font-size: 3rem; color: var(--success); margin-bottom: 1.5rem;"></i>
        <h2 style="margin-bottom: 1rem;">Oficina Concluída</h2>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">Você executou o diagnóstico de todos os ${act.questions.length} laudos desta atividade.</p>
        <button class="btn btn-primary" data-action="route" data-route="activities" style="width: auto;">Retornar ao Painel</button>
      </div>
    `;
  }

  const q = act.questions[qIndex];
  const progressBadge = `Questão ${qIndex + 1}/${act.questions.length}`;

  if (act.type === "diagnostic") {
    return `
      <div class="card">
        <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; margin-bottom: 1rem; display: flex; justify-content: space-between;">
          <span>${act.title}</span>
          <span>${progressBadge}</span>
        </div>
        <div class="reading-text-box">"${q.prompt}"</div>
        <p style="margin-bottom: 1rem; font-weight: 500;">Qual a falha ou característica narrativa principal neste trecho?</p>
        <div class="options-container" style="margin-top: 0;">
          ${q.options
            .map(
              (opt, idx) => `
            <label class="option-label">
              <input type="radio" name="act_opt" value="${idx}">
              <span>${opt}</span>
            </label>
          `,
            )
            .join("")}
        </div>
        <button class="btn btn-primary" data-action="submit-activity" data-id="${act.id}" data-qindex="${qIndex}">Confirmar Laudo</button>
      </div>
    `;
  }

  if (act.type === "comparison") {
    return `
      <div class="card">
        <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; margin-bottom: 1rem; display: flex; justify-content: space-between;">
          <span>${act.title}</span>
          <span>${progressBadge}</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
          <div style="padding: 1.5rem; background: #fafafa; border: 1px solid var(--border); border-radius: 8px;">
            <strong style="color: var(--primary); font-size: 0.9rem; text-transform: uppercase;">Evidência A:</strong><br><br><span style="font-family: var(--font-serif); font-size: 1.1rem;">"${q.versionA}"</span>
          </div>
          <div style="padding: 1.5rem; background: #fafafa; border: 1px solid var(--border); border-radius: 8px;">
            <strong style="color: var(--primary); font-size: 0.9rem; text-transform: uppercase;">Evidência B:</strong><br><br><span style="font-family: var(--font-serif); font-size: 1.1rem;">"${q.versionB}"</span>
          </div>
        </div>
        <p style="margin-bottom: 1rem; font-weight: 500;">Qual sua avaliação como Perito sobre as abordagens acima?</p>
        <div class="options-container" style="margin-top: 0;">
          ${q.options
            .map(
              (opt, idx) => `
            <label class="option-label">
              <input type="radio" name="act_opt" value="${idx}">
              <span>${opt}</span>
            </label>
          `,
            )
            .join("")}
        </div>
        <button class="btn btn-primary" data-action="submit-activity" data-id="${act.id}" data-qindex="${qIndex}">Confirmar Avaliação</button>
      </div>
    `;
  }
};

export const renderDilemaNode = (nodeId) => {
  const node = PEDAGOGICAL_DILEMMAS[nodeId];
  if (!node) return "";

  if (node.end) {
    return `
      <div class="card">
        <h2 style="margin-bottom: 1rem;">Laudo: ${node.title}</h2>
        <div class="reading-text-box">${node.explanation}</div>
        <p style="margin-bottom: 2rem; color: var(--text-muted);">Técnica associada: <strong>${node.technique}</strong></p>
        <button class="btn btn-primary" data-action="route" data-route="activities">Retornar às Atividades</button>
      </div>
    `;
  }

  return `
    <div class="card">
      <div style="font-family: var(--font-serif); font-size: 1.2rem; line-height: 1.8; margin-bottom: 2rem;">
        ${node.text}
      </div>
      <div>
        ${node.choices
          .map(
            (c) => `
          <div class="minigame-choice" data-action="dilema-choice" data-next="${c.next}">${c.text}</div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
};

export const renderStory = () => {
  const prog = storage.getProgress();
  return `
    <div style="margin-bottom: 2rem;">
      <h1 style="font-size: 1.8rem; font-weight: 500;">O Arquivo Perdido</h1>
      <p style="color: var(--text-muted);">O Laboratório reconstrói fragmentos literários perdidos conforme você analisa casos.</p>
    </div>
    
    <div>
      ${STORY_FRAGMENTS.map((f) => {
        const isUnlocked = prog.fragmentsUnlocked.includes(f.id);
        if (isUnlocked) {
          return `
            <div class="manuscript-card">
              <h3 style="margin-bottom: 0.2rem; font-family: var(--font-sans);">${f.title}</h3>
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; font-family: var(--font-sans);">${f.author}</p>
              <div class="fragment-content">${f.content}</div>
              <button class="btn btn-outline" style="width: auto; background: white;" data-action="investigate-fragment" data-id="${f.id}">
                <i class="fa-solid fa-magnifying-glass"></i> Investigar Fragmento
              </button>
            </div>
          `;
        } else {
          return `
            <div class="manuscript-card">
              <div class="locked-fragment">
                <h3 style="margin-bottom: 0.2rem; font-family: var(--font-sans);">${f.title}</h3>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; font-family: var(--font-sans);">${f.author}</p>
                <div class="fragment-content">Lorem ipsum dolor sit amet<br>consectetur adipiscing elit<br>Aliquam at porttitor sem.</div>
              </div>
              <div class="unlock-overlay">
                <i class="fa-solid fa-lock" style="font-size: 1.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <p style="font-weight: 500;">Requer ${f.unlockRequirement.casesSolved} caso(s) investigado(s).</p>
              </div>
            </div>
          `;
        }
      }).join("")}
    </div>
  `;
};

export const renderFragmentInvestigation = (fragmentId) => {
  const f = STORY_FRAGMENTS.find((x) => x.id === fragmentId);
  const q = f.investigation;
  return `
    <div class="card">
      <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 1rem;">Investigação de Fragmento</div>
      <div class="reading-text-box">${f.content}</div>
      <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem;">${q.question}</h3>
      <div class="options-container" style="margin-top: 0;">
        ${q.options
          .map(
            (opt, idx) => `
          <label class="option-label">
            <input type="radio" name="frag_opt" value="${idx}">
            <span>${opt}</span>
          </label>
        `,
          )
          .join("")}
      </div>
      <button class="btn btn-primary" data-action="submit-fragment-investigation" data-id="${f.id}">Concluir Avaliação</button>
    </div>
  `;
};

export const renderReadingTexts = () => `
  <div style="margin-bottom: 2rem;">
    <h1 style="font-size: 1.8rem; font-weight: 500;">Leitura Crítica</h1>
    <p style="color: var(--text-muted);">Diagnóstico em textos completos e análises estruturais.</p>
  </div>
  <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
    ${READING_TEXTS.map(
      (rt) => `
      <div class="card" style="margin-bottom: 0;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h4 style="font-size: 1.1rem; font-weight: 500; margin-bottom: 0.3rem;">${rt.title}</h4>
            <div style="font-size: 0.85rem; color: var(--text-muted);">Dificuldade: ${rt.difficulty}</div>
          </div>
          <button class="btn btn-primary" style="width: auto;" data-action="start-reading" data-id="${rt.id}">Analisar Texto</button>
        </div>
      </div>
    `,
    ).join("")}
  </div>
`;

export const renderReadingExecution = (readingId, qIndex = 0) => {
  const rt = READING_TEXTS.find((r) => r.id === readingId);
  const q = rt.questions[qIndex];
  if (!q) {
    return `
      <div class="card">
        <h2 style="margin-bottom: 1rem;">Análise Concluída</h2>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">A leitura crítica do texto foi documentada no arquivo.</p>
        <button class="btn btn-primary" data-action="route" data-route="reading">Voltar ao Acervo</button>
      </div>
    `;
  }
  return `
    <div class="card">
      <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 1rem;">Leitura Crítica · Questão ${qIndex + 1}/${rt.questions.length}</div>
      <div class="reading-text-box">${rt.text}</div>
      <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem;">${q.prompt}</h3>
      <div class="options-container" style="margin-top: 0;">
        ${q.options
          .map(
            (opt, idx) => `
          <label class="option-label">
            <input type="radio" name="reading_opt" value="${idx}">
            <span>${opt}</span>
          </label>
        `,
          )
          .join("")}
      </div>
      <button class="btn btn-primary" data-action="submit-reading-answer" data-id="${rt.id}" data-qindex="${qIndex}">Avaliar Trecho</button>
    </div>
  `;
};
