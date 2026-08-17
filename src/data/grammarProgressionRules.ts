/**
 * REGRA DE EXCELÊNCIA — EVOLUÇÃO DAS CIDADES, TEMPOS VERBAIS E COMPETÊNCIAS GRAMATICAIS (A1 AO C2)
 *
 * Esta matriz pedagógica estabelece a evolução canônica da aventura do Irlan pelas 11 cidades
 * da França no mapa interativo (de Paris a Nice), cobrindo todos os níveis do Quadro Europeu
 * Comum de Referência para as Línguas (CEFR: A1 a C2).
 *
 * ORDEM CANÔNICA DA TRILHA (uma única ordem, da mais básica à mais avançada):
 * #1 Paris (A1) → #2 Amiens (A1/A2) → #3 Lille (A2) → #4 Mont Saint-Michel (A2/B1) →
 * #5 Tours (B1) → #6 Bordeaux (B1+) → #7 Toulouse (B2) → #8 Lyon (B2+) →
 * #9 Marseille (C1) → #10 Strasbourg (C1+) → #11 Nice (C2).
 * Os níveis aqui espelham exatamente os níveis exibidos nas aulas (arquivos *_lesson_*.json)
 * e na trilha da interface (LessonsView). A geografia real da França não importa: importa que
 * haja UMA ordem pedagógica progressiva e que a história do Irlan se conecte de cidade em cidade.
 *
 * REGRAS INEGOCIÁVEIS DE EXCELÊNCIA PARA TODOS OS CONTEÚDOS E AULAS:
 * 1. ETAPA GRAMÁTICA (2 PONTOS POR AULA):
 *    - Cada aula deve ter exatamente 2 pontos gramaticais (grammarTip.points com 2 itens).
 *    - Cada ponto gramatical OBRIGATORIAMENTE nasce de uma frase autêntica que apareceu no
 *      texto da própria aula (exampleFr do parágrafo de leitura).
 *    - Os exercícios de fixação devem sempre exigir a forma correta em francês (lacuna,
 *      conjugação, concordância), nunca teoria abstrata em português.
 *    - As opções erradas devem ser distratores verossímeis (erros reais cometidos por estudantes).
 *
 * 2. ETAPA QUIZ (5 PERGUNTAS POR AULA):
 *    - Q1: Completar lacuna com a palavra/verbo correto em francês a partir de uma frase do texto.
 *    - Q2: Reordenar uma frase embaralhada (sintaxe e ordem canônica do francês) da própria aula.
 *    - Q3: Tradução de uma frase curta do português para o francês trabalhando a estrutura aprendida.
 *    - Q4: Achar o erro em uma frase quase correta em francês (concordância, conjugação ou preposição).
 *    - Q5: Compreensão geral do texto/contexto cultural (a única que pode ser em português).
 */

export interface CityGrammarProgression {
  cityId: string;
  cityName: string;
  nodeNumber: number;
  cefrLevel: string;
  vocabularyTarget: number;
  totalLessons: number;
  narrativeThemePt: string;
  primaryTenses: string[];
  grammarFocusPt: string[];
  syntaxCompetenciesPt: string[];
  irlanEvolutionPt: string;
}

export const TOTAL_CLICKABLE_WORDS_GOAL = 15400;
export const CITY_CLICKABLE_WORDS_GOAL = 1400;

export const FRANCE_GRAMMAR_PROGRESSION_MATRIX: CityGrammarProgression[] = [
  {
    cityId: 'paris',
    cityName: 'Paris',
    nodeNumber: 1,
    cefrLevel: 'Iniciante (A1)',
    vocabularyTarget: 1400,
    totalLessons: 49,
    narrativeThemePt: 'O Desembarque, A Rotina Urbana e a Primeiríssima Imersão.',
    primaryTenses: [
      'Présent de l\'Indicatif (Verbos dos 1º, 2º e 3º grupos no presente: être, avoir, aller, faire, descendre, prendre, voir)',
      'Impératif Présent (básico para direções e placas)'
    ],
    grammarFocusPt: [
      'Artigos definidos, indefinidos e partitivos (le, la, les, un, une, des, du, de la)',
      'Pronomes sujeitos (je, tu, il, elle, nous, vous, ils, elles) e pronomes tônicos (moi, toi, lui)',
      'Estruturas de localização e preposições de lugar (à, de, en, dans, sur, sous, devant, derrière)',
      'Concordância básica em gênero e número de adjetivos comuns'
    ],
    syntaxCompetenciesPt: [
      'Construção sujeito + verbo + complemento',
      'Uso da negação básica (ne ... pas)',
      'Perguntas com entonação e com "est-ce que"'
    ],
    irlanEvolutionPt: 'Irlan é um observador que relata o que vê, compra bilhetes, pega o metrô, pede comida e interage no momento presente ("Je suis...", "Je vois...", "Je prends...").'
  },
  {
    cityId: 'amiens',
    cityName: 'Amiens',
    nodeNumber: 2,
    cefrLevel: 'Iniciante em Transição (A1/A2)',
    vocabularyTarget: 1400,
    totalLessons: 25,
    narrativeThemePt: 'A Arquitetura Gótica, Canais e a Inspiração Literária de Jules Verne.',
    primaryTenses: [
      'Présent de l\'Indicatif (aprofundamento em verbos irregulares de movimento e percepção: marcher, traverser, contempler, apercevoir, s\'asseoir)',
      'Futur Proche (aller + infinitif: "Je vais visiter la cathédrale")'
    ],
    grammarFocusPt: [
      'Adjetivos qualificativos e sua posição na frase (antes ou depois do substantivo: majestueuse cathédrale, petit café)',
      'Perguntas simples e interrogação com est-ce que, où, comment, pourquoi',
      'Expressões de tempo imediato (maintenant, tout à l\'heure, aujourd\'hui)'
    ],
    syntaxCompetenciesPt: [
      'Uso correto de c\'est vs il/elle est',
      'Concordância de adjetivos em -eux / -euse',
      'Ordem da frase com advérbios curtos'
    ],
    irlanEvolutionPt: 'Irlan começa a planejar seus próximos passos na cidade ("Je vais explorer...") e a descrever com mais detalhes estéticos o que observa ao redor da Catedral.'
  },
  {
    cityId: 'lille',
    cityName: 'Lille',
    nodeNumber: 3,
    cefrLevel: 'Básico (A2)',
    vocabularyTarget: 1400,
    totalLessons: 25,
    narrativeThemePt: 'A Calorosa Cultura do Norte, o Comércio Flamango e as Feiras (Braderie).',
    primaryTenses: [
      'Passé Composé avec AVOIR (primeira introdução ao passado: j\'ai visité, j\'ai mangé, j\'ai acheté)',
      'Passé Composé avec ÊTRE (verbos de movimento: je suis arrivé, je suis allé, je suis parti)'
    ],
    grammarFocusPt: [
      'A distinção entre auxiliar avoir e être no Passé Composé',
      'Concordância do particípio passado com o sujeito nos verbos com être',
      'Advérbios de tempo e sequência no passado (hier, d\'abord, ensuite, enfin)'
    ],
    syntaxCompetenciesPt: [
      'Estrutura do passado composto em frases afirmativas e negativas',
      'Uso de pronomes com verbos reflexivos básicos (je me suis promené)',
      'Marcadores cronológicos para narrar eventos do dia'
    ],
    irlanEvolutionPt: 'Irlan não apenas narra o que está fazendo, mas começa a relatar o que aconteceu mais cedo no dia ou no dia anterior, contando pequenas histórias de suas conversas no Norte.'
  },
  {
    cityId: 'mont-saint-michel',
    cityName: 'Mont Saint-Michel',
    nodeNumber: 4,
    cefrLevel: 'Básico (A2/B1)',
    vocabularyTarget: 1400,
    totalLessons: 47,
    narrativeThemePt: 'O Fenômeno das Marés, a Abadia Medieval e as Lendas Normandas.',
    primaryTenses: [
      'L\'Imparfait de l\'Indicatif (descrição no passado, cenários, clima e hábitos: le vent soufflait, la marée montait, la baie était calme)',
      'Contraste Passé Composé vs. Imparfait (ação pontual vs. pano de fundo descritivo)'
    ],
    grammarFocusPt: [
      'Conectores temporais e de oposição (pendant que, quand, lorsque, soudain, mais)',
      'Pronomes reflexivos no passado (il s\'approchait, nous nous arrêtions)',
      'Descrição de paisagens e estados físicos/emocionais no passado'
    ],
    syntaxCompetenciesPt: [
      'Uso harmônico de Imparfait e Passé Composé na mesma narrativa',
      'Expressão de duração e repetição no passado',
      'Adjetivos de sensação, clima e atmosfera'
    ],
    irlanEvolutionPt: 'A narrativa ganha profundidade atmosférica. Irlan descreve a maré subindo em torno do monte enquanto relata os passos dos monges medievais e suas próprias reflexões.'
  },
  {
    cityId: 'tours',
    cityName: 'Tours',
    nodeNumber: 5,
    cefrLevel: 'Intermediário (B1)',
    vocabularyTarget: 1400,
    totalLessons: 47,
    narrativeThemePt: 'O Berço da Língua Francesa Pura, o Rio Loire e os Castelos Renascentistas.',
    primaryTenses: [
      'Futur Simple (je visiterai, nous découvrirons, la ville sera...)',
      'Impératif avec pronoms (instruções e orientações elegantes)'
    ],
    grammarFocusPt: [
      'Pronomes relativos simples (qui, que, où, dont)',
      'Comparações e superlativos (plus élégant que, le plus beau château, moins rapide que)',
      'A expressão de projetos futuros, previsões e itinerários'
    ],
    syntaxCompetenciesPt: [
      'Subordinação de frases com pronomes relativos',
      'Estruturas comparativas com adjetivos e advérbios',
      'Concordância em orações subordinadas adjetivas'
    ],
    irlanEvolutionPt: 'Irlan, no coração do francês mais puro da Turena, passa a articular frases complexas unidas por pronomes relativos e a projetar sua viagem com o Futuro Simples.'
  },
  {
    cityId: 'bordeaux',
    cityName: 'Bordeaux',
    nodeNumber: 6,
    cefrLevel: 'Intermediário (B1+)',
    vocabularyTarget: 1400,
    totalLessons: 47,
    narrativeThemePt: 'A Elegância Clássica, os Grands Crus, o Comércio Marítimo e a Praça da Bolsa.',
    primaryTenses: [
      'Conditionnel Présent (polidez, hipóteses simples, conselhos e desejos: je voudrais, il faudrait, nous pourrions déguster)',
      'Gérondif & Participe Présent (en marchant le long de la Garonne, en observant le Miroir d\'eau)'
    ],
    grammarFocusPt: [
      'A expressão de polidez requintada (savoir-vivre)',
      'Pronomes complementos diretos e indiretos (le, la, les, lui, leur) e sua posição na frase',
      'Expressão simultânea de duas ações com en + gerúndio'
    ],
    syntaxCompetenciesPt: [
      'Ordem dos pronomes duplos antes do verbo (je le lui donne)',
      'Frases condicionais de cortesia e sugestão',
      'Conectores de causa e finalidade (pour que, afin de, grâce à)'
    ],
    irlanEvolutionPt: 'As interações de Irlan em adegas, livrarias e bistrôs tornam-se altamente corteses e nuançadas, utilizando o Condicional Presente para expressar impressões de forma refinada.'
  },
  {
    cityId: 'toulouse',
    cityName: 'Toulouse',
    nodeNumber: 7,
    cefrLevel: 'Intermediário (B2)',
    vocabularyTarget: 1400,
    totalLessons: 56,
    narrativeThemePt: 'A Cidade Rosa, a Indústria Aeroespacial, o Canal du Midi e o Sotaque do Sul.',
    primaryTenses: [
      'Plus-que-parfait de l\'Indicatif (a anterioridade no passado: j\'avais déjà lu, les ingénieurs avaient construit)',
      'Conditionnel Passé (hipóteses não réalisées no passado e arrependimentos: j\'aurais aimé voir, nous aurions pu)'
    ],
    grammarFocusPt: [
      'Os pronomes adverbiais EN e Y (substituindo lugares e complementos com de e à: j\'y vais, j\'en viens, j\'en ai vu)',
      'Estruturas causais e explicativas (parce que, puisque, comme, à cause de)',
      'Correlação temporal entre ações passadas distantes e recentes'
    ],
    syntaxCompetenciesPt: [
      'Substituição de sintagmas nominais por EN e Y sem perda de clareza',
      'Frases condicionais no passado (Si j\'avais su, serais venu)',
      'Argumentação técnica e histórica acessível'
    ],
    irlanEvolutionPt: 'Irlan passa a relacionar eventos históricos com acontecimentos anteriores (Plus-que-parfait) e a dominar os pronomes EN e Y para uma fala fluida e sem repetições.'
  },
  {
    cityId: 'lyon',
    cityName: 'Lyon',
    nodeNumber: 8,
    cefrLevel: 'Intermediário (B2+)',
    vocabularyTarget: 1400,
    totalLessons: 56,
    narrativeThemePt: 'A Capital Gastronômica, os Segredos das Traboules da Resistência e o Cinema dos Irmãos Lumière.',
    primaryTenses: [
      'Concordância dos Tempos no Discurso Indireto (Si + Imparfait -> Conditionnel; Si + Plus-que-parfait -> Conditionnel Passé)',
      'Subjonctif Passé (je suis content qu\'il ait découvert ce bouchon, bien qu\'il soit venu hier)'
    ],
    grammarFocusPt: [
      'Frases condicionais completas (as três condicionais da língua francesa)',
      'Acentuação retórica e topicalização (C\'est à Lyon que..., Ce dont je me souviens, c\'est...)',
      'Vocabulário abstrato, sensorial e crítica gastronômica/histórica'
    ],
    syntaxCompetenciesPt: [
      'Concordância rigorosa de tempos em discursos complexos',
      'Estruturas enfáticas e clivadas (c\'est... qui/que)',
      'Argumentação sobre cultura, memória histórica e estética'
    ],
    irlanEvolutionPt: 'Irlan articula resenhas, análises históricas sobre a Resistência Francesa e discussões filosóficas sobre o cinema, dominando a lógica de causa, efeito e condição.'
  },
  {
    cityId: 'marseille',
    cityName: 'Marseille',
    nodeNumber: 9,
    cefrLevel: 'Avançado (C1)',
    vocabularyTarget: 1400,
    totalLessons: 10,
    narrativeThemePt: 'O Porto Milenar, o Caldeirão do Mediterrâneo, as Calanques e o Mistério de Monte Cristo.',
    primaryTenses: [
      'Subjonctif Présent (necessidade, vontade, dúvida, emoção e julgamento: il faut que je comprenne, bien que la mer soit agitée, je veux que nous allions)',
      'Voz Passiva (le port a été fondé par les Phocéens, les navires sont guidés par le phare)'
    ],
    grammarFocusPt: [
      'Conjunções que exigem o Subjuntivo (bien que, pour que, avant que, à condition que, sans que)',
      'Discurso indireto no presente e no passado (il m\'a dit qu\'il connaissait...)',
      'Expressão de concessão e oposição (pourtant, cependant, malgré, en revanche)'
    ],
    syntaxCompetenciesPt: [
      'Alternância entre Modo Indicativo (certeza/fato) e Modo Subjuntivo (subjetividade/dúvida)',
      'Transformação da voz ativa na voz passiva com agência',
      'Relato de discursos e conversas longas em discurso indireto'
    ],
    irlanEvolutionPt: 'Em Marselha, a linguagem de Irlan expressa sentimentos subjetivos, debates socioculturais, dúvidas e desejos utilizando o Subjuntivo de forma natural e precisa.'
  },
  {
    cityId: 'strasbourg',
    cityName: 'Strasbourg',
    nodeNumber: 10,
    cefrLevel: 'Avançado (C1+)',
    vocabularyTarget: 1400,
    totalLessons: 10,
    narrativeThemePt: 'A Fronteira Franco-Alemã, o Parlamento Europeu, o Humanismo e o Bairro La Petite France.',
    primaryTenses: [
      'Passé Simple (Reconhecimento Literário & Histórico em crônicas e placas: il naquit, la ville devint, ils firent)',
      'Futur Antérieur (ações concluídas no futuro ou suposições: dès que j\'aurai visité le Parlement, ils auront compris)'
    ],
    grammarFocusPt: [
      'Nominalização (transformar frases verbais em substantivos densos: la construction de la cathédrale, la signature du traité)',
      'Conectores argumentativos avançados (néanmoins, toutefois, par conséquent, en outre, de surcroît)',
      'O contraste entre estilo jornalístico/institucional europeu e prosa literária'
    ],
    syntaxCompetenciesPt: [
      'Leitura e análise de crônicas e documentos formais no Passé Simple',
      'Redação acadêmica e institucional em francês',
      'Sintaxe compacta por meio da nominalização'
    ],
    irlanEvolutionPt: 'Irlan compreende textos oficiais europeus, crônicas históricas no Passé Simple e argumenta com conectores lógicos de alta formalidade sobre diplomacia e cultura.'
  },
  {
    cityId: 'nice',
    cityName: 'Nice',
    nodeNumber: 11,
    cefrLevel: 'Avançado (C2)',
    vocabularyTarget: 1400,
    totalLessons: 10,
    narrativeThemePt: 'A Luz do Mediterrâneo, a Arte de Matisse e Chagall, a Riviera e o Encerramento da Trilha.',
    primaryTenses: [
      'Nuances Modais & Estilísticas Avançadas (uso retórico do Conditionnel de rumeur, infinitivos preposicionados complexos)',
      'Subjonctif Imparfait (reconhecimento na literatura clássica) e consolidação total de todos os tempos verbais'
    ],
    grammarFocusPt: [
      'Domínio das sutilezas lexicais, falsos cognatos cultos, ironia, humor e subtexto',
      'Figuras de linguagem em francês (metáfora, litote, eufemismo, antítese)',
      'Resolução de ambiguidades e escrita literária de padrão nativo'
    ],
    syntaxCompetenciesPt: [
      'Apreciação de textos literários, poéticos e filosóficos sem esforço',
      'Expressão espontânea com flexibilidade estilística e precisão de matiz',
      'Compreensão de todas as variedades de registro (formal, coloquial, literário)'
    ],
    irlanEvolutionPt: 'No Grand Finale em Nice, Irlan expressa ideias com a elegância, precisão e naturalidade de um pensador francófono, capaz de apreciar a poesia e a filosofia com maestria.'
  }
];

/**
 * Retorna as regras gramaticais e a evolução canônica para uma determinada cidade.
 */
export function getCityGrammarProgression(cityId: string): CityGrammarProgression | undefined {
  return FRANCE_GRAMMAR_PROGRESSION_MATRIX.find(
    c => c.cityId.toLowerCase() === cityId.toLowerCase()
  );
}

/**
 * PLANO DE DISTRIBUIÇÃO DAS AULAS PELAS 11 CIDADES (meta: 15.400 palavras).
 *
 * Diretriz do projeto: NÃO criar novas cidades; distribuir MAIS aulas em cada uma
 * das cidades existentes, na proporção das palavras necessárias para a passagem
 * de nível no francês (CEFR): A1 ≈ 1.000 · A2 ≈ 1.000 · B1 ≈ 2.000 ·
 * B2 ≈ 2.500 · C1 ≈ 3.500 · C2 ≈ 5.400 (soma = 15.400).
 *
 * Cada cidade cobre um nível (ou transição) da trilha Paris (#1) → Nice (#11).
 * A densidade (palavras novas por aula) cresce LEVEMENTE nos níveis avançados
 * (A1–A2: 12 · B1–B2: 14 · C1: 14 · C2: 16), conforme a orientação do usuário:
 * as aulas não devem ficar densas, apenas um pouco mais nos níveis altos.
 */
export interface CityLessonPlan {
  cityId: string;
  level: string;
  wordTarget: number;
  wordsPerLesson: number;
  targetLessons: number;
  currentLessons: number;
}

export const LESSON_DISTRIBUTION_PLAN: CityLessonPlan[] = [
  { cityId: 'paris', level: 'A1', wordTarget: 1000, wordsPerLesson: 12, targetLessons: 84, currentLessons: 49 },
  { cityId: 'amiens', level: 'A1/A2', wordTarget: 500, wordsPerLesson: 12, targetLessons: 42, currentLessons: 25 },
  { cityId: 'lille', level: 'A2', wordTarget: 500, wordsPerLesson: 12, targetLessons: 42, currentLessons: 25 },
  { cityId: 'mont-saint-michel', level: 'A2/B1', wordTarget: 600, wordsPerLesson: 12, targetLessons: 50, currentLessons: 47 },
  { cityId: 'tours', level: 'B1', wordTarget: 700, wordsPerLesson: 12, targetLessons: 58, currentLessons: 47 },
  { cityId: 'bordeaux', level: 'B1+', wordTarget: 700, wordsPerLesson: 12, targetLessons: 58, currentLessons: 47 },
  { cityId: 'toulouse', level: 'B2', wordTarget: 1250, wordsPerLesson: 14, targetLessons: 90, currentLessons: 56 },
  { cityId: 'lyon', level: 'B2+', wordTarget: 1250, wordsPerLesson: 14, targetLessons: 90, currentLessons: 56 },
  { cityId: 'marseille', level: 'C1', wordTarget: 1750, wordsPerLesson: 14, targetLessons: 125, currentLessons: 75 },
  { cityId: 'strasbourg', level: 'C1+', wordTarget: 1750, wordsPerLesson: 14, targetLessons: 125, currentLessons: 20 },
  { cityId: 'nice', level: 'C2', wordTarget: 5400, wordsPerLesson: 16, targetLessons: 338, currentLessons: 10 },
];

/** Soma das metas de palavras por cidade = 15.400 (igual à meta do banco). */
export function getLessonPlanTotalWords(): number {
  return LESSON_DISTRIBUTION_PLAN.reduce((sum, p) => sum + p.wordTarget, 0);
}
