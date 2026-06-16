export const CASES = [
  {
    id: "c1",
    title: "O Salão Vazio",
    techniqueId: "showDontTell",
    icon: "fa-chess-rook",
    difficulty: "iniciante",
    context:
      "O herói acaba de invadir as ruínas de um templo esquecido em busca de um artefato.",
    originalText:
      "O grande salão estava completamente abandonado e sujo há muitos anos.",

    diagnosticQuestion: "Qual o principal erro narrativo neste trecho?",
    diagnosticOptions: [
      "Falta de ação do protagonista explorando o local.",
      "O texto emite um laudo em vez de fornecer evidências físicas do abandono.",
      "Uso incorreto do tempo verbal 'estava'.",
    ],
    diagnosticCorrect: 1,
    diagnosisExplanation:
      "O autor roubou do leitor a oportunidade de deduzir. 'Abandonado' e 'sujo' são abstrações (laudos), não matéria literária. A técnica Show, Don't Tell exige evidências sensoriais.",

    rewriteSelectionQuestion:
      "Com base no diagnóstico, qual das opções abaixo aplica corretamente a técnica para demonstrar o abandono?",
    rewriteSelectionOptions: [
      "Era evidente que ninguém pisava ali há muitas décadas, dada a quantidade imensa de sujeira e o cheiro ruim.",
      "O salão era extremamente escuro, frio e dava uma sensação de solidão terrível.",
      "Uma grossa camada de poeira cobria os mosaicos rachados do chão. Entre as pilastras, teias de aranha espessas balançavam.",
    ],
    rewriteSelectionCorrect: 2,
    correctionAnalysis:
      "A poeira, as rachaduras e as teias substituem a palavra 'sujo' e comprovam a passagem do tempo e a falta de presença humana sem precisar usar as etiquetas literais do autor.",

    challengeText: "A masmorra subterrânea era muito fria e escura.",
  },
  {
    id: "c2",
    title: "A Carta Final",
    techniqueId: "tension",
    icon: "fa-envelope",
    difficulty: "intermediario",
    context:
      "Um burocrata abre uma correspondência que pode selar sua demissão do conselho.",
    originalText:
      "Ele abriu a carta já sabendo de sua demissão. Leu o papel rapidamente, com o coração acelerado.",

    diagnosticQuestion: "Por que a tensão desta cena não funciona?",
    diagnosticOptions: [
      "O resultado foi antecipado prematuramente, quebrando o suspense da ação de ler.",
      "A reação fisiológica ('coração acelerado') é um clichê de tensão mal utilizado.",
      "Falta a descrição do remetente e da cor do envelope da carta.",
    ],
    diagnosticCorrect: 0,
    diagnosisExplanation:
      "Ao anunciar o desfecho antes do processo de descoberta, a tensão desaparece. O Gerenciamento de Tensão exige que o leitor sinta a ansiedade de buscar a resposta junto com o personagem.",

    rewriteSelectionQuestion:
      "Qual reescrita recupera a carga dramática utilizando a retenção de informação?",
    rewriteSelectionOptions: [
      "Ele abriu o envelope lentamente. Pegou a carta, respirou fundo e começou a ler cada palavra, confirmando que estava demitido.",
      "Deslizou a lâmina sob o selo de cera. Desdobrou o pergaminho devagar. Seus olhos pularam o preâmbulo formal, buscando diretamente a última linha onde a decisão o aguardava.",
      "Com as mãos tremendo muito, ele rasgou o envelope e descobriu o que mais temia: estava fora do conselho.",
    ],
    rewriteSelectionCorrect: 1,
    correctionAnalysis:
      "A reescrita foca na mecânica da ação (lâmina, cera, pular o preâmbulo). O tempo da cena foi esticado, retendo a informação e forçando o leitor a esperar ansiosamente pelo veredito.",

    challengeText:
      "Ela atendeu o telefone já esperando a pior notícia possível do hospital.",
  },
  {
    id: "c3",
    title: "O Perdão do Rei",
    techniqueId: "showDontTell",
    icon: "fa-crown",
    difficulty: "avancado",
    context:
      "Para evitar uma guerra civil, o rei é obrigado a perdoar publicamente o lorde que traiu sua família.",
    originalText:
      "O rei perdoou o lorde na frente de toda a corte, mas por dentro estava furioso e com nojo de ter que fazer aquilo.",

    diagnosticQuestion:
      "Por que essa descrição falha em transmitir a carga política da cena?",
    diagnosticOptions: [
      "O narrador não deveria saber o que o rei sente em um cenário político.",
      "Falta um monólogo interno do rei explicando seus motivos e seu plano de vingança.",
      "A exposição direta do conflito interno elimina a dissonância psicológica da cena.",
    ],
    diagnosticCorrect: 2,
    diagnosisExplanation:
      "A dissonância entre o que o personagem faz (perdoar) e o que ele sente (ódio) é a base do subtexto literário. Explicar o sentimento como uma etiqueta destrói a sutileza e a atmosfera de perigo.",

    rewriteSelectionQuestion:
      "Qual das opções constrói o ódio contido através do contraste físico?",
    rewriteSelectionOptions: [
      "O rei olhou para o lorde com muito ódio nos olhos e disse as palavras de perdão de forma grosseira.",
      "O rei estendeu a mão e pousou-a sobre o ombro do traidor. A voz soou branda, mas os dedos reais apertaram a armadura com tanta força que os nós ficaram brancos.",
      "Ele queria matar o lorde ali mesmo. A corte inteira podia perceber a raiva latejando em seu rosto quando concedeu o perdão forçado.",
    ],
    rewriteSelectionCorrect: 1,
    correctionAnalysis:
      "A fala diplomática e pacífica contrasta violentamente com a tensão autônoma do corpo (nós brancos contra a armadura). O ódio reprimido se torna palpável pela linguagem corporal, confiando na dedução do leitor.",

    challengeText:
      "A imperatriz sorriu amigavelmente para a embaixadora inimiga, embora a detestasse profundamente.",
  },
];
