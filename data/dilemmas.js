export const PEDAGOGICAL_DILEMMAS = {
  start: {
    text: "Você está escrevendo uma cena de investigação. O detetive Silas acaba de encontrar um cofre escondido atrás de um quadro. Como você inicia a construção desta cena?",
    choices: [
      {
        text: "A) Descrever o modelo, o peso de ferro fundido e as dimensões exatas do cofre para que o leitor o visualize.",
        next: "describe_safe",
      },
      {
        text: "B) Focar na poeira recém-perturbada ao redor da fechadura e na respiração curta de Silas ao tocá-la.",
        next: "focus_silas",
      },
    ],
  },
  describe_safe: {
    text: "Você gastou dois parágrafos detalhando o cofre. O leitor agora possui os dados técnicos, mas o ritmo da cena caiu drasticamente e a tensão se dissipou. Silas começa a tentar abrir a porta de aço. Como a ação segue?",
    choices: [
      {
        text: "A) Ele usa a senha que encontrou mais cedo e abre imediatamente, mantendo o foco no objetivo da trama.",
        next: "open_easy",
      },
      {
        text: "B) Ele gira a combinação lentamente, mas, ao chegar no terceiro número, ouve o estalo de um assoalho no corredor.",
        next: "hear_steps",
      },
    ],
  },
  focus_silas: {
    text: "Decisão correta. Ao focar na poeira perturbada, você utilizou a materialidade para inferir que alguém esteve ali há pouco tempo. O leitor sente o perigo imediato. Silas tenta abrir o cofre. O que acontece agora?",
    choices: [
      {
        text: "A) A senha que ele deduziu no capítulo anterior funciona de primeira. A pesada porta cede com um clique.",
        next: "open_easy",
      },
      {
        text: "B) Ele erra a combinação. Na segunda tentativa, a maçaneta da porta principal do cômodo começa a girar.",
        next: "hear_steps",
      },
    ],
  },
  open_easy: {
    text: "O cofre se abre sem resistência. Lá dentro, repousa uma única carta selada com cera vermelha. É a prova definitiva que ele buscava. Como você estrutura a revelação da prova para o leitor?",
    choices: [
      {
        text: "A) Narrar Silas quebrando o selo e, no parágrafo seguinte, inserir o texto integral da carta para o leitor ler.",
        next: "direct_end",
      },
      {
        text: "B) Descrever Silas lendo apenas a primeira linha, empalidecendo subitamente e enfiando a carta no bolso do casaco.",
        next: "foreshadow_end",
      },
    ],
  },
  hear_steps: {
    text: "O som de alguém se aproximando eleva o risco ao máximo. O tempo do detetive acabou. O cofre cede no último segundo e ele agarra a carta selada em cera. A porta do quarto se abre violentamente.",
    choices: [
      {
        text: "A) Silas rompe a cera e lê a carta o mais rápido possível para saber o que está escrito antes de lutar.",
        next: "read_danger",
      },
      {
        text: "B) Silas amassa a carta no bolso sem ler absolutamente nada, saca o seu revólver e rola para trás da mesa.",
        next: "hide_danger",
      },
    ],
  },
  direct_end: {
    title: "Exposição Precoce",
    explanation:
      "Você encerrou o mistério rápido demais. Ao revelar o conteúdo do documento de imediato, a informação é entregue antes que a expectativa alcance seu ápice, esvaziando a carga dramática da recompensa.",
    technique: "Gerenciamento de Tensão",
    end: true,
  },
  foreshadow_end: {
    title: "Retenção e Antecipação",
    explanation:
      "Excelente estrutura. A reação fisiológica (empalidecer) combinada com a ocultação imediata cria uma promessa narrativa brutal. O leitor sabe que a carta é terrível, mas precisará virar a página para descobrir o porquê.",
    technique: "Gerenciamento de Tensão",
    end: true,
  },
  read_danger: {
    title: "Quebra de Verossimilhança",
    explanation:
      "Sob ameaça iminente de morte, o instinto humano é puramente de sobrevivência. Forçar o personagem a parar a cena de perigo para ler um documento quebra a imersão e destrói o realismo da ameaça externa.",
    technique: "Pacing (Ritmo) e Verossimilhança",
    end: true,
  },
  hide_danger: {
    title: "Priorização de Conflito",
    explanation:
      "Avaliação perfeita. Você colocou a urgência da sobrevivência acima da necessidade de entregar informações narrativas. Isso protege o realismo da cena de ação e, de quebra, prolonga o mistério da carta.",
    technique: "Pacing (Ritmo) e Verossimilhança",
    end: true,
  },
};
