export const STORY_FRAGMENTS = [
  {
    id: "fragment-01",
    title: "Bilhete",
    author: "Mário Quintana",
    unlockRequirement: { casesSolved: 1 },
    content:
      "<p style='font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; line-height: 1.8; margin-bottom: 1.5rem;'>Se tu me amas, ama-me baixinho<br>Não o grites de cima dos telhados<br>Deixa em paz os passarinhos<br>Deixa em paz a mim!<br>Se me queres,<br>enfim,<br>tem de ser bem devagarinho, Amada,<br>que a vida é breve, e o amor mais breve ainda...</p><div style='background: #fafafa; border-left: 4px solid var(--primary); padding: 1.5rem; margin-top: 2rem;'><p style='font-size: 0.9rem; text-transform: uppercase; font-weight: 600; color: var(--primary); margin-bottom: 0.5rem;'>Contexto do Perito</p><p style='font-size: 1rem; color: var(--text-dark); margin: 0;'>Quintana destila a essência do sentimento através da contenção. O poema não é sobre a ausência ou frieza do amor, mas sobre a preservação heroica de sua fragilidade contra o ruído e o espetáculo do mundo externo.</p></div>",
    investigation: {
      question:
        "Qual mecanismo de contraste o autor utiliza para materializar a fragilidade dessa emoção?",
      options: [
        "A imposição de ordens diretas para criar um tom de autoridade sobre a amada.",
        "A oposição física entre o escândalo (telhados/gritar) e a miudeza (baixinho/passarinhos).",
        "A ausência de métrica e rimas ricas nos versos finais.",
      ],
      correct: 1,
      feedback:
        "Diagnóstico perfeito. O contraste físico espacial entre o alto e o baixo transforma um conceito completamente abstrato em algo tátil, vulnerável e humano.",
    },
  },
  {
    id: "fragment-02",
    title: "A Cartomante",
    author: "Machado de Assis",
    unlockRequirement: { casesSolved: 2 },
    content:
      "<p style='font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; line-height: 1.8; margin-bottom: 1.5rem;'>— Hamlet observa a Horácio que há mais cousas no céu e na terra do que sonha a nossa filosofia. Era a mesma explicação que dava a bela Rita ao moço Camilo, numa sexta-feira de novembro de 1869, quando este ria dela, por ter ido na véspera consultar uma cartomante.</p><div style='background: #fafafa; border-left: 4px solid var(--primary); padding: 1.5rem; margin-top: 2rem;'><p style='font-size: 0.9rem; text-transform: uppercase; font-weight: 600; color: var(--primary); margin-bottom: 0.5rem;'>Contexto do Perito</p><p style='font-size: 1rem; color: var(--text-dark); margin: 0;'>A abertura de um dos maiores contos da literatura brasileira. Machado funde o peso de Shakespeare à banalidade do cotidiano carioca para preparar secretamente o terreno de uma tragédia passional.</p></div>",
    investigation: {
      question:
        "Como Machado utiliza o Gerenciamento de Tensão (Foreshadowing) já no primeiro parágrafo?",
      options: [
        "Omitindo o nome da cartomante para gerar dúvida sobre a identidade dela.",
        "Utilizando a data exata (1869) para ancorar a cena em um realismo jornalístico impecável.",
        "Opondo o peso trágico de Hamlet ao riso cético de Camilo, antecipando que o rapaz pagará por sua arrogância.",
      ],
      correct: 2,
      feedback:
        "Exato. A ironia dramática é instaurada imediatamente. O leitor que conhece o peso da frase shakespeariana sente a tensão no riso de Camilo, pois sabe que as consequências da incredulidade costumam ser fatais na literatura.",
    },
  },
  {
    id: "fragment-03",
    title: "Amor",
    author: "Clarice Lispector",
    unlockRequirement: { casesSolved: 3 },
    content:
      "<p style='font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; line-height: 1.8; margin-bottom: 1.5rem;'>O cego mascava chicles.<br>Um homem cego mascava chicles.<br>Ana ainda teve tempo de pensar por um segundo que os irmãos viriam jantar — o coração bateu-lhe violento, espaçado. Inclinou-se para a frente e viu o cego mascando chicles com os dentes de chumbo.</p><div style='background: #fafafa; border-left: 4px solid var(--primary); padding: 1.5rem; margin-top: 2rem;'><p style='font-size: 0.9rem; text-transform: uppercase; font-weight: 600; color: var(--primary); margin-bottom: 0.5rem;'>Contexto do Perito</p><p style='font-size: 1rem; color: var(--text-dark); margin: 0;'>Ana é uma dona de casa cuja vida meticulosamente organizada desmorona no bonde. Clarice Lispector utiliza o choque com uma cena absurdamente corriqueira para implodir o estado psicológico da personagem, provocando uma epifania violenta.</p></div>",
    investigation: {
      question:
        "Por que a mastigação do cego atua como um recurso de 'Show, Don't Tell' para iniciar a crise interna da protagonista?",
      options: [
        "O movimento mecânico, escuro e ininterrupto reflete e expõe bruscamente o vazio alienante da própria rotina de Ana.",
        "Cria uma quebra de expectativa, indicando que o cego será o vilão do conto.",
        "Destaca a desigualdade social no ambiente do bonde, provocando remorso imediato.",
      ],
      correct: 0,
      feedback:
        "Laudo brilhante. A mastigação cega não possui um propósito final produtivo, é puro movimento mecânico. Funciona como um espelho esmagador: Ana percebe a automatização anestesiada da sua própria vida.",
    },
  },
];
