export const READING_TEXTS = [
  {
    id: "reading-01",
    title: "O Som da Ferrugem",
    difficulty: "intermediario",
    text: "<p>A placa do posto de gasolina balançava do lado de fora, rangendo metal contra metal a cada lufada de vento. Era o único som num raio de quilômetros, além da própria respiração de Elias. Ele estava agachado atrás do balcão de fórmica descascada, os joelhos doendo contra o piso de azulejos encardidos. O cheiro de gasolina velha e chuva iminente impregnava o ar denso.</p><p>Elias apertou o cabo da chave de roda. O suor tornava o metal escorregadio em suas palmas, obrigando-o a esfregar as mãos na calça jeans rasgada antes de segurar a ferramenta novamente. Ele fechou os olhos. <em>Réc. Réc. Réc.</em> A placa continuava sua contagem regressiva lá fora.</p><p>Foi então que o rangido da placa foi interrompido por um som diferente. O esmagar de cascalho. Alguém estava caminhando em direção à porta de vidro da loja de conveniência. O som parou bem na entrada. Uma silhueta escura bloqueou a pouca luz da lua que entrava no ambiente. Elias prendeu a respiração até seus pulmões queimarem. A maçaneta de alumínio começou a girar, devagar, o trinco gemendo sob a pressão.</p>",
    questions: [
      {
        id: "rt1-q1",
        type: "technique",
        prompt:
          "Qual recurso o autor utiliza para materializar o medo de Elias (Show, Don't Tell) em vez de apenas declará-lo?",
        options: [
          "O foco na placa do posto balançando lá fora.",
          "As reações autônomas e ações, como o suor escorregadio, limpar as mãos na calça e prender a respiração.",
          "O uso de adjetivos pesados como 'encardidos' e 'descascada'.",
        ],
        correct: 1,
        feedback:
          "Laudo correto. O autor não usa a palavra 'medo' em nenhum momento. O leitor deduz o pavor extremo através das respostas fisiológicas (suor, falta de ar) e do tique nervoso (esfregar as mãos).",
      },
      {
        id: "rt1-q2",
        type: "interpretative",
        prompt:
          "Qual é a função narrativa do som da placa balançando ('Réc. Réc. Réc.')?",
        options: [
          "É apenas um detalhe descritivo para preencher espaço na página.",
          "Estabelece a localização geográfica da cena.",
          "Funciona como um metrônomo que dita o ritmo da cena e amplia a ansiedade.",
        ],
        correct: 2,
        feedback:
          "Exato. Sons rítmicos em cenas de perigo atuam como marcações de tempo que escalam a tensão psicológica do personagem e do leitor.",
      },
      {
        id: "rt1-q3",
        type: "diagnostic",
        prompt:
          "Se o autor substituísse o último período por 'Elias percebeu que o assassino estava prestes a entrar e sentiu muito pânico', qual seria o diagnóstico?",
        options: [
          "Melhoria na clareza objetiva do texto.",
          "Exposição precoce e abstração, destruindo a tensão construída na maçaneta girando.",
          "Aceleração do ritmo narrativo, o que beneficiaria a cena de ação.",
        ],
        correct: 1,
        feedback:
          "Diagnóstico perfeito. A maçaneta girando é o ápice da tensão não resolvida. Dar a resposta pronta (assassino) e o laudo emocional (pânico) mataria o suspense na mesma hora.",
      },
    ],
  },
  {
    id: "reading-02",
    title: "O Último Jantar",
    difficulty: "avancado",
    text: "<p>Os talheres de prata tilintavam contra a porcelana francesa. O som ecoava pela sala de jantar vazia, preenchendo o abismo que se abrira entre os dois. Clara cortou um pedaço do robalo, sorrindo enquanto mastigava.</p><p>— As coisas vão melhorar no próximo trimestre — disse ela, gesticulando com a taça de vinho. — O conselho já aprovou o novo orçamento. Podemos finalmente comprar aquela casa na serra.</p><p>Vicente não levantou os olhos. Ele mantinha a atenção fixada no próprio prato, operando o garfo e a faca com a precisão cirúrgica de um relojoeiro. Separava as fibras da carne, alinhava as ervilhas, mas não levava nada à boca. A taça de vinho dele intocada.</p><p>— Você não está comendo — Clara observou, o sorriso vacilando por uma fração de segundo antes de retornar, um pouco mais rígido.</p><p>— Estou sem fome — a voz de Vicente soou oca. Ele soltou os talheres. O som metálico pareceu alto demais. Ele finalmente a encarou. Os olhos dele não tinham raiva, nem tristeza. Tinham a frieza de uma decisão já tomada. — Clara, a auditoria terminou esta tarde.</p><p>Clara paralisou. A taça em sua mão inclinou sutilmente. Uma gota de vinho tinto escorreu pela haste de cristal e caiu sobre a toalha de linho branco, espalhando-se rapidamente como uma ferida aberta.</p>",
    questions: [
      {
        id: "rt2-q1",
        type: "interpretative",
        prompt:
          "O comportamento de Vicente com a comida (separar as fibras, alinhar ervilhas, não comer) indica o quê no subtexto da cena?",
        options: [
          "Ele é uma pessoa metódica e muito exigente com a culinária.",
          "Ele está adiando o inevitável, utilizando um foco microscópico para não ter que encarar a esposa.",
          "Ele está tentando disfarçar que colocou algo na comida dela.",
        ],
        correct: 1,
        feedback:
          "Exato. A micro-ação obsessiva com a comida é um mecanismo de fuga psicológica. Revela a culpa e a dificuldade do personagem em iniciar o conflito direto.",
      },
      {
        id: "rt2-q2",
        type: "diagnostic",
        prompt:
          "A frase inicial de Clara ('As coisas vão melhorar... Podemos finalmente comprar aquela casa') cumpre qual objetivo mecânico?",
        options: [
          "Estabelece o poder aquisitivo dos personagens.",
          "Constrói ironia dramática, pois a esperança dela contrasta com a traição iminente que o leitor já suspeita pelo tom.",
          "Atrasa o andamento da história com diálogos irrelevantes.",
        ],
        correct: 1,
        feedback:
          "Correto. A projeção de um futuro feliz (casa na serra) por uma personagem inocente choca-se com a frieza do marido, criando uma ironia trágica pesada e aumentando a tensão do rompimento.",
      },
      {
        id: "rt2-q3",
        type: "technique",
        prompt:
          "A gota de vinho tinto manchando a toalha de linho branco no final é um exemplo visual de:",
        options: [
          "Metáfora e Foreshadowing visual para representar o dano irreversível e a 'ferida' na relação.",
          "Erro de continuidade de ação do autor.",
          "Exposição direta e literal dos sentimentos de Clara.",
        ],
        correct: 0,
        feedback:
          "Laudo preciso. A mancha irreversível no linho intocado espelha fisicamente o que a revelação da auditoria acabou de fazer com a vida dela. A destruição emocional foi traduzida em um evento material.",
      },
    ],
  },
];
