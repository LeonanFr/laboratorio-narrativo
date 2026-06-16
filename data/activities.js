export const ACTIVITIES = [
  {
    id: "diag-01",
    type: "diagnostic",
    title: "Oficina de Diagnóstico Rápido",
    description:
      "Identifique a principal falha estrutural em trechos isolados.",
    questions: [
      {
        prompt:
          "O salão subterrâneo era assustador e macabro. O herói sentiu um pavor indescritível ao entrar.",
        options: [
          "Exposição direta e abstração de sentimentos",
          "Falta de um conflito externo claro na cena",
          "Problema na fluidez e ritmo das frases",
        ],
        correct: 0,
        feedback:
          "Termos como 'assustador' e 'pavor indescritível' são laudos. O medo deve ser construído através de estímulos físicos, não informado.",
      },
      {
        prompt:
          "— Como você sabe, capitão, estamos em guerra contra o império há dez anos — disse o soldado, limpando a espada.",
        options: [
          "O diálogo não possui *tags* de ação suficientes",
          "Uso de diálogo artificial para despejar exposição no leitor",
          "Falta de detalhamento no cenário",
        ],
        correct: 1,
        feedback:
          "Pessoas reais não explicam o que o outro já sabe (síndrome do 'As you know, Bob'). É um atalho preguiçoso para informar o passado do mundo.",
      },
      {
        prompt:
          "Ele abriu o baú sabendo que encontraria apenas pedras. E lá estavam elas, frias e cinzentas.",
        options: [
          "Excesso de adjetivação",
          "Quebra prematura de tensão e expectativa",
          "O personagem principal não demonstra emoção",
        ],
        correct: 1,
        feedback:
          "Ao antecipar a descoberta antes da ação de abrir o baú, a cena perdeu qualquer carga dramática ou curiosidade que pudesse ter gerado.",
      },
      {
        prompt:
          "A rainha era uma mulher cruel, mesquinha e que odiava a população pobre do reino.",
        options: [
          "Caracterização feita por laudo do narrador, sem ações",
          "O parágrafo é muito curto para apresentar um personagem",
          "Falta de diálogo para comprovar a crueldade",
        ],
        correct: 0,
        feedback:
          "A crueldade é uma escolha moral. O leitor precisa ver a rainha tomando uma atitude cruel para acreditar nisso, não apenas ouvir do narrador.",
      },
      {
        prompt:
          "Eles lutaram bravamente e a batalha foi épica do início ao fim, cheia de emoção e golpes mortais.",
        options: [
          "O ponto de vista (POV) está distante demais",
          "Uso de resumo abstrato em vez de construir uma cena material",
          "Falta de consequências emocionais",
        ],
        correct: 1,
        feedback:
          "Dizer que a batalha foi 'épica' e 'cheia de emoção' não cria a imagem da luta na mente do leitor. Faltam os golpes, o suor, a dificuldade e o som da cena.",
      },
      {
        prompt:
          "De repente, um monstro apareceu do nada e começou a atacar todos os aldeões desprevenidos.",
        options: [
          "Falta de foreshadowing (plantar pistas) e transição abrupta",
          "O ataque não possui motivação clara",
          "O número de aldeões não foi especificado",
        ],
        correct: 0,
        feedback:
          "'De repente' e 'apareceu do nada' costumam indicar falha no sequenciamento narrativo. Uma pista sutil anterior ancoraria melhor o choque.",
      },
      {
        prompt:
          "Kael estava exausto após caminhar o dia inteiro sob o sol escaldante do deserto.",
        options: [
          "Falta de conflito secundário",
          "O adjetivo 'escaldante' é obsoleto",
          "Falha em Show, Don't Tell para demonstrar o estado físico",
        ],
        correct: 2,
        feedback:
          "Em vez de dizer que Kael está exausto, seria mais imersivo mostrar a respiração pesada, a visão turva ou o peso das pernas arrastando na areia.",
      },
      {
        prompt:
          "Mariana gritou. — Eu te odeio profundamente por ter mentido sobre o testamento! — Ela estava furiosa.",
        options: [
          "Diálogo *on-the-nose* (direto demais) e redundância",
          "O verbo 'gritou' não deveria ser usado na mesma frase que a fala",
          "A personagem reage de forma muito exagerada",
        ],
        correct: 0,
        feedback:
          "O texto comete dois erros: Mariana fala o subtexto em voz alta (o que soa artificial) e a frase 'Ela estava furiosa' é redundante, já que o grito já demonstrou a emoção.",
      },
    ],
  },
  {
    id: "compare-01",
    type: "comparison",
    title: "Comparação de Evidências",
    description:
      "Analise duas abordagens e aponte qual soluciona melhor o desafio narrativo.",
    questions: [
      {
        versionA: "Elara estava com muito frio na floresta.",
        versionB:
          "Elara abraçou os próprios braços, sentindo os tremores curtos que lhe batiam os dentes.",
        options: [
          "A versão A é mais direta e clara.",
          "A versão B produz inferência física da temperatura e do desconforto.",
          "Ambas são adequadas dependendo do capítulo.",
        ],
        correct: 1,
        feedback:
          "A versão B materializa o frio no corpo do personagem, ativando a Teoria da Simulação Corpórea no cérebro do leitor.",
      },
      {
        versionA: "O interrogatório a deixou extremamente nervosa.",
        versionB:
          "Ela escondeu as mãos debaixo da mesa, onde a unha do polegar arrancava silenciosamente a pele do indicador.",
        options: [
          "A versão A mantém o mistério sobre a culpa dela.",
          "A versão B cria empatia através da demonstração de um tique nervoso.",
          "A versão B tem detalhes demais que atrapalham o ritmo.",
        ],
        correct: 1,
        feedback:
          "Ato falhos e linguagem corporal sob a mesa revelam o nervosismo sem que o leitor se sinta recebendo um laudo médico do narrador.",
      },
      {
        versionA:
          "O dragão acordou e o cavaleiro sentiu que morreria ali mesmo.",
        versionB:
          "O som da respiração da fera fez as moedas vibrarem no chão de pedra. O cavaleiro engoliu a seco, o gosto de cobre invadindo a boca.",
        options: [
          "A versão B usa vibração e paladar para antecipar o perigo.",
          "A versão A constrói uma tensão psicológica mais eficiente.",
          "Nenhuma das alternativas constrói tensão.",
        ],
        correct: 0,
        feedback:
          "O som que afeta o ambiente (moedas) e a reação fisiológica involuntária (gosto de metal/adrenalina) escalam o risco sem precisar afirmar que ele vai morrer.",
      },
      {
        versionA:
          "O castelo era absurdamente imenso e majestoso, deixando todos impressionados.",
        versionB:
          "Para enxergar o topo da torre mais alta, os mercadores precisavam inclinar a cabeça até os chapéus caírem na terra.",
        options: [
          "A versão B utiliza uma métrica de interação física para transmitir escala.",
          "A versão A usa os adjetivos corretos para fantasia.",
          "A versão B é confusa e tira o foco do castelo.",
        ],
        correct: 0,
        feedback:
          "Mostrar a escala obrigando os personagens a alterarem suas posturas (inclinar a cabeça até o chapéu cair) dá uma noção de grandeza muito superior a 'absurdamente imenso'.",
      },
      {
        versionA:
          "Lian acordou sentindo uma dor insuportável no ferimento do ombro.",
        versionB:
          "Lian tentou apoiar a mão no chão para levantar. Seu braço cedeu, a visão escureceu nas bordas e ele vomitou no tapete.",
        options: [
          "A versão A é mais poética.",
          "A versão B mostra o limite físico sendo rompido pelo choque da dor.",
          "A versão A descreve a anatomia da dor de forma superior.",
        ],
        correct: 1,
        feedback:
          "Dor extrema causa reações autônomas (fraqueza muscular, perda de visão periférica, náusea). Mostrar essas reações faz o leitor sentir a dor do personagem.",
      },
      {
        versionA:
          "A notícia do fim da guerra trouxe uma onda de alívio e alegria profunda para os moradores da vila.",
        versionB:
          "O padeiro largou a massa no chão enfarinhado, cobriu o rosto com as mãos calejadas e soluçou até perder o ar.",
        options: [
          "A versão A foca no coletivo, sendo mais grandiosa.",
          "A versão B microfoca no alívio de um indivíduo comum para ancorar a emoção.",
          "A versão B descreve tristeza, não alegria.",
        ],
        correct: 1,
        feedback:
          "Emoções coletivas são difíceis de processar. O choro incontrolável de um trabalhador traduz o peso monumental do fim da guerra de forma íntima e empática.",
      },
      {
        versionA:
          "A carruagem estava muito rápida e corria perigo de capotar na estrada esburacada.",
        versionB:
          "A madeira da cabine estalava a cada buraco. A mala de couro no teto despencou, rolando ladeira abaixo, mas o cocheiro não diminuiu.",
        options: [
          "A versão B evidencia a velocidade inconsequente através da destruição de objetos.",
          "A versão A estabelece o perigo claramente para o leitor.",
          "A versão B é lenta e tira a urgência da cena de ação.",
        ],
        correct: 0,
        feedback:
          "Detalhes de ação (madeira estalando, itens se perdendo, recusa do cocheiro em parar) compõem a urgência da cena cineticamente.",
      },
      {
        versionA:
          "Ele tentou mentir para o guarda, mas estava visivelmente suando e hesitando.",
        versionB:
          "Ele tentou mentir para o guarda. O 'sim' arranhou na garganta, saindo uma oitava mais agudo do que o normal.",
        options: [
          "A versão A utiliza o clichê do suor de forma funcional.",
          "A versão B escolhe um detalhe minúsculo, mas autêntico, de nervosismo vocal.",
          "A versão A e a versão B possuem exatamente a mesma força.",
        ],
        correct: 1,
        feedback:
          "O suor é um sintoma visual saturado na literatura. O detalhe auditivo da voz falhando ou subindo o tom transmite a quebra de confiança com muito mais frescor.",
      },
    ],
  },
];
