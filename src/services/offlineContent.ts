import { Curiosity, LocationExperience, MapLocation } from '../types/map';

/**
 * Offline content generators.
 * The app is 100% local: every former AI feature now derives its content
 * deterministically from the location / lesson data already bundled in the app.
 */

const CITY_PT_NAMES: Record<string, string> = {
  paris: 'Paris',
  amiens: 'Amiens',
  lille: 'Lille',
  'mont-saint-michel': 'Mont Saint-Michel',
  tours: 'Tours',
  bordeaux: 'Bordeaux',
  toulouse: 'Toulouse',
  lyon: 'Lyon',
  marseille: 'Marseille',
  strasbourg: 'Strasbourg',
  nice: 'Nice',
};

function cityLabel(cityId: string): string {
  return CITY_PT_NAMES[cityId] || cityId;
}

const CATEGORY_VOCABULARY: Record<string, Array<{ wordFr: string; wordPt: string; phonetic: string }>> = {
  History: [
    { wordFr: 'le monument', wordPt: 'o monumento', phonetic: 'lə mɔnymɑ̃' },
    { wordFr: 'le patrimoine', wordPt: 'o patrimônio', phonetic: 'lə patrimwan' },
    { wordFr: 'visiter', wordPt: 'visitar', phonetic: 'vizite' },
  ],
  Art: [
    { wordFr: 'le tableau', wordPt: 'o quadro', phonetic: 'lə tablo' },
    { wordFr: 'la peinture', wordPt: 'a pintura', phonetic: 'la pɛ̃tyʁ' },
    { wordFr: 'admirer', wordPt: 'admirar', phonetic: 'admiʁe' },
  ],
  Gastronomy: [
    { wordFr: 'le plat', wordPt: 'o prato', phonetic: 'lə pla' },
    { wordFr: 'goûter', wordPt: 'provar', phonetic: 'gute' },
    { wordFr: 'délicieux', wordPt: 'delicioso', phonetic: 'delisjø' },
  ],
  Architecture: [
    { wordFr: 'le bâtiment', wordPt: 'o edifício', phonetic: 'lə bɑtimɑ̃' },
    { wordFr: 'la façade', wordPt: 'a fachada', phonetic: 'la fasad' },
    { wordFr: 'construire', wordPt: 'construir', phonetic: 'kɔ̃stʁɥiʁ' },
  ],
  Literature: [
    { wordFr: 'le livre', wordPt: 'o livro', phonetic: 'lə livʁ' },
    { wordFr: 'l\u2019écrivain', wordPt: 'o escritor', phonetic: 'lekʁivɛ̃' },
    { wordFr: 'lire', wordPt: 'ler', phonetic: 'liʁ' },
  ],
  Transit: [
    { wordFr: 'la gare', wordPt: 'a estação', phonetic: 'la ɡaʁ' },
    { wordFr: 'le train', wordPt: 'o trem', phonetic: 'lə tʁɛ̃' },
    { wordFr: 'voyager', wordPt: 'viajar', phonetic: 'vwajaʒe' },
  ],
  Leisure: [
    { wordFr: 'se promener', wordPt: 'passear', phonetic: 'sə pʁɔmne' },
    { wordFr: 'le parc', wordPt: 'o parque', phonetic: 'lə paʁk' },
    { wordFr: 'découvrir', wordPt: 'descobrir', phonetic: 'dekuvʁiʁ' },
  ],
};

export function buildLocalLocationExperience(location: MapLocation, cityName: string): LocationExperience {
  const nameFr = location.frenchName || location.name;
  const city = cityLabel(cityName);
  const vocab = CATEGORY_VOCABULARY[location.category] || CATEGORY_VOCABULARY.History;

  return {
    locationId: location.id,
    locationName: location.name,
    cityName,
    culturalInsightPt: `${location.fullDesc || location.shortDesc} Localizado em ${city}, é um ponto de referência essencial para compreender a França e enriquecer o vocabulário em contexto.`,
    culturalInsightFr: `${nameFr} est un lieu emblématique de ${city}, riche en histoire et en culture française.`,
    bilingualSentences: [
      {
        pt: `Este lugar histórico fica no coração de ${city}.`,
        fr: `Ce lieu historique se trouve au cœur de ${city}.`,
        note: 'Vocabulário: au cœur de = no coração de',
      },
      {
        pt: 'Os visitantes apreciam a atmosfera única e a cultura local.',
        fr: "Les visiteurs apprécient l'atmosphère unique et la culture locale.",
        note: "Gramática: verbo apprécier no presente (présent de l'indicatif)",
      },
    ],
    vocabulary: vocab.map((v) => ({
      wordFr: v.wordFr,
      wordPt: v.wordPt,
      phonetic: v.phonetic,
      exampleFr: `Je découvre ${v.wordFr} à ${nameFr}.`,
      examplePt: `Eu descubro ${v.wordPt} em ${location.name}.`,
    })),
    grammarTip: {
      ruleTitle: 'Artigos e Preposições de Lugar',
      explanationPt:
        'Em francês usamos "à" para cidades e "en"/"au" para países e regiões. Observe os artigos le/la/les antes dos substantivos.',
      exampleFr: `Je suis à ${city}, en France.`,
      examplePt: `Eu estou em ${city}, na França.`,
      practiceQuestion: `Como se diz "Eu moro em ${city}"?`,
      options: [`J'habite à ${city}`, `J'habite en ${city}`, `J'habite au ${city}`],
      correctIndex: 0,
    },
    shadowingPhrases: [
      { id: '1', fr: `Bienvenue à ${nameFr} !`, pt: `Bem-vindo a ${location.name}!` },
      { id: '2', fr: `C'est un endroit magnifique à visiter.`, pt: 'É um lugar magnífico para visitar.' },
    ],
    mentorPromptContext: `O usuário está explorando ${location.name} em ${city}.`,
  };
}

const MENTOR_GREETINGS = ['bonjour', 'salut', 'bonsoir', 'coucou', 'oi', 'ola', 'olá', 'bom dia', 'boa tarde', 'boa noite'];
const MENTOR_HOW_ARE_YOU = ['comment', 'ça va', 'como vai', 'como você está', 'comment allez'];
const MENTOR_THANKS = ['merci', 'obrigad'];
const MENTOR_BYE = ['au revoir', 'à bientôt', 'tchau', 'adeus', 'bonne nuit'];
const MENTOR_WHERE = ['où', 'ou est', 'onde', 'où se trouve', 'comment aller'];
const MENTOR_NAME = ['je m\'appelle', 'mon nom', 'meu nome', 'je suis', 'eu sou'];

export function getLocalMentorReply(
  userText: string,
  cityName: string,
  locationName?: string
): { responseFr: string; responsePt: string; correction: null; suggestedNextTopic: string } {
  const lower = userText.toLowerCase().trim();
  const city = cityLabel(cityName);
  const place = locationName ? ` à ${locationName}` : ` à ${city}`;

  if (MENTOR_GREETINGS.some((k) => lower.includes(k))) {
    return {
      responseFr: `Bonjour ! C'est un plaisir de vous retrouver${place}. Nous allons continuer à progresser en français ensemble.`,
      responsePt: `Olá! É um prazer reencontrá-lo${locationName ? ` em ${locationName}` : ` em ${city}`}. Vamos continuar progredindo em francês juntos.`,
      correction: null,
      suggestedNextTopic: 'Pergunte sobre a história do local ou peça uma recomendação em francês.',
    };
  }

  if (MENTOR_HOW_ARE_YOU.some((k) => lower.includes(k))) {
    return {
      responseFr: `Je vais très bien, merci ! Et vous, comment allez-vous aujourd'hui ?`,
      responsePt: 'Eu estou muito bem, obrigado! E você, como vai hoje?',
      correction: null,
      suggestedNextTopic: 'Conte como foi seu dia em francês.',
    };
  }

  if (MENTOR_THANKS.some((k) => lower.includes(k))) {
    return {
      responseFr: `Avec plaisir ! Continuez comme ça, votre français progresse à chaque étape.`,
      responsePt: 'Com prazer! Continue assim, seu francês progride a cada etapa.',
      correction: null,
      suggestedNextTopic: 'Peça para praticar uma frase nova sobre sua viagem.',
    };
  }

  if (MENTOR_BYE.some((k) => lower.includes(k))) {
    return {
      responseFr: `Au revoir et à bientôt sur le Mapa da Memória ! Bonne continuation.`,
      responsePt: 'Até logo e até breve no Mapa da Memória! Boa continuação.',
      correction: null,
      suggestedNextTopic: 'Na próxima vez, pratique uma nova expressão de viagem.',
    };
  }

  if (MENTOR_WHERE.some((k) => lower.includes(k))) {
    return {
      responseFr: `Pour trouver votre chemin, dites : « Où se trouve la gare, s'il vous plaît ? » ou « Comment aller au centre-ville ? »`,
      responsePt: 'Para pedir informação, diga: « Onde fica a estação, por favor? » ou « Como ir ao centro da cidade? »',
      correction: null,
      suggestedNextTopic: 'Pratique as frases de direção em voz alta.',
    };
  }

  if (MENTOR_NAME.some((k) => lower.includes(k))) {
    return {
      responseFr: `Enchanté ! Moi, je suis Irlan, votre mentor de français. Je vous accompagne jusqu'à Nice.`,
      responsePt: 'Muito prazer! Eu sou Irlan, seu mentor de francês. Eu o acompanho até Nice.',
      correction: null,
      suggestedNextTopic: 'Pergunte sobre a próxima cidade da trilha.',
    };
  }

  return {
    responseFr: `Très bien ! N'oubliez pas : chaque mot que vous touchez ouvre une fenêtre avec 4 exemples (A1 à C2) que vous pouvez ajouter à vos Flashcards.`,
    responsePt: 'Muito bem! Não se esqueça: cada palavra que você toca abre uma janela com 4 exemplos (A1 a C2) que você pode adicionar aos seus Flashcards.',
    correction: null,
    suggestedNextTopic: `Pergunte sobre ${city} ou pratique une phrase avec un nouveau mot.`,
  };
}

const CURIOSITY_BANK: Record<string, Curiosity> = {
  paris: {
    id: 'curiosity_paris',
    cityName: 'Paris',
    locationName: 'Tour Eiffel',
    title: 'A Cor Original da Torre Eiffel',
    factPt:
      'Quando foi construída em 1889, a Torre Eiffel era pintada de vermelho-marrom. Ela já foi amarela e hoje usa o exclusivo "brun de la Tour Eiffel".',
    relatedWords: [
      { fr: 'la peinture', pt: 'a pintura' },
      { fr: 'construire', pt: 'construir' },
      { fr: 'la couleur', pt: 'a cor' },
    ],
    miniQuiz: {
      question: 'De que cor era originalmente a Torre Eiffel em 1889?',
      options: ['Vermelho-marrom', 'Azul celeste', 'Dourado brilhante'],
      correctIndex: 0,
      explanation: 'Ela foi pintada de vermelho-marrom para proteger o ferro da oxidação.',
    },
  },
  nice: {
    id: 'curiosity_nice',
    cityName: 'Nice',
    locationName: 'Promenade des Anglais',
    title: 'O Passeio dos Ingleses',
    factPt:
      'A Promenade des Anglais recebeu esse nome por causa dos ingleses abastados que passavam o inverno em Nice no século XIX.',
    relatedWords: [
      { fr: 'la promenade', pt: 'o passeio' },
      { fr: 'la mer', pt: 'o mar' },
      { fr: 'se détendre', pt: 'relaxar' },
    ],
    miniQuiz: {
      question: 'Por que a avenida à beira-mar de Nice se chama "Promenade des Anglais"?',
      options: ['Por causa dos ingleses que passavam o inverno ali', 'Porque foi construída por um engenheiro inglês', 'Por causa de um rei inglês'],
      correctIndex: 0,
      explanation: 'O nome homenageia os turistas ingleses que frequentavam Nice no século XIX.',
    },
  },
  strasbourg: {
    id: 'curiosity_strasbourg',
    cityName: 'Strasbourg',
    locationName: 'Cathédrale de Strasbourg',
    title: 'Uma Catedral que Já Foi a Mais Alta do Mundo',
    factPt:
      'A catedral de Estrasburgo foi o edifício mais alto do mundo entre 1647 e 1874, com sua torre de 142 metros.',
    relatedWords: [
      { fr: 'la cathédrale', pt: 'a catedral' },
      { fr: 'la flèche', pt: 'a torre/agulha' },
      { fr: 'le sommet', pt: 'o topo' },
    ],
    miniQuiz: {
      question: 'Qual recorde a catedral de Estrasburgo já deteve?',
      options: ['Edifício mais alto do mundo', 'Maior sino do mundo', 'Primeira catedral de vidro'],
      correctIndex: 0,
      explanation: 'Sua torre de 142 metros a tornou o edifício mais alto do mundo por mais de dois séculos.',
    },
  },
  lyon: {
    id: 'curiosity_lyon',
    cityName: 'Lyon',
    locationName: 'Vieux Lyon',
    title: 'Os Traboules Secretos de Lyon',
    factPt:
      'Lyon é famosa pelos "traboules", passagens secretas entre edifícios usadas historicamente pelos tecelões de seda.',
    relatedWords: [
      { fr: 'le passage', pt: 'a passagem' },
      { fr: 'la soie', pt: 'a seda' },
      { fr: 'secret', pt: 'secreto' },
    ],
    miniQuiz: {
      question: 'O que são os "traboules" de Lyon?',
      options: ['Passagens secretas entre edifícios', 'Mercados de rua', 'Barcos tradicionais'],
      correctIndex: 0,
      explanation: 'São passagens internas que conectam ruas e pátios, criadas na época dos tecelões de seda.',
    },
  },
  marseille: {
    id: 'curiosity_marseille',
    cityName: 'Marseille',
    locationName: 'Vieux-Port',
    title: 'O Porto Mais Antigo da França',
    factPt:
      'O Vieux-Port de Marseille é o porto mais antigo da França, ativo há mais de 2.600 anos desde sua fundação pelos gregos.',
    relatedWords: [
      { fr: 'le port', pt: 'o porto' },
      { fr: 'la mer', pt: 'o mar' },
      { fr: 'fonder', pt: 'fundar' },
    ],
    miniQuiz: {
      question: 'Há quanto tempo o Vieux-Port de Marseille está em atividade?',
      options: ['Mais de 2.600 anos', 'Cerca de 500 anos', 'Menos de 200 anos'],
      correctIndex: 0,
      explanation: 'Fundado pelos gregos por volta de 600 a.C., é o porto mais antigo da França.',
    },
  },
  bordeaux: {
    id: 'curiosity_bordeaux',
    cityName: 'Bordeaux',
    locationName: 'Place de la Bourse',
    title: 'O Espelho d\u2019Água de Bordeaux',
    factPt:
      'O Miroir d\u2019eau, em frente à Place de la Bourse, é o maior espelho d\u2019água do mundo, com 3.450 m².',
    relatedWords: [
      { fr: 'le miroir', pt: 'o espelho' },
      { fr: 'l\u2019eau', pt: 'a água' },
      { fr: 'refléter', pt: 'refletir' },
    ],
    miniQuiz: {
      question: 'O que é o Miroir d\u2019eau de Bordeaux?',
      options: ['O maior espelho d\u2019água do mundo', 'Um lago natural', 'Uma fonte histórica'],
      correctIndex: 0,
      explanation: 'Com 3.450 m², é o maior espelho d\u2019água do mundo, refletindo a Place de la Bourse.',
    },
  },
  toulouse: {
    id: 'curiosity_toulouse',
    cityName: 'Toulouse',
    locationName: 'Basilique Saint-Sernin',
    title: 'A Cidade Rosa',
    factPt:
      'Toulouse é chamada de "la ville rose" por causa dos tijolos rosados usados em seus edifícios históricos.',
    relatedWords: [
      { fr: 'la brique', pt: 'o tijolo' },
      { fr: 'rose', pt: 'rosa' },
      { fr: 'la basilique', pt: 'a basílica' },
    ],
    miniQuiz: {
      question: 'Por que Toulouse é chamada de "la ville rose"?',
      options: ['Pelos tijolos rosados dos edifícios', 'Pelos jardins de rosas', 'Pelo céu ao entardecer'],
      correctIndex: 0,
      explanation: 'Os edifícios históricos usam tijolos de tom rosado característicos da região.',
    },
  },
  lille: {
    id: 'curiosity_lille',
    cityName: 'Lille',
    locationName: 'Grand-Place',
    title: 'A Influência Flamenga de Lille',
    factPt:
      'A Grand-Place de Lille, com sua arquitetura flamenga colorida, reflete a história da cidade entre a França e a Flandres.',
    relatedWords: [
      { fr: 'la place', pt: 'a praça' },
      { fr: 'flamand', pt: 'flamengo' },
      { fr: 'coloré', pt: 'colorido' },
    ],
    miniQuiz: {
      question: 'Qual influência arquitetônica marca a Grand-Place de Lille?',
      options: ['Flamenga', 'Romana', 'Mourisca'],
      correctIndex: 0,
      explanation: 'Os edifícios coloridos da Grand-Place mostram a forte influência flamenga da cidade.',
    },
  },
  'mont-saint-michel': {
    id: 'curiosity_montsaintmichel',
    cityName: 'Mont Saint-Michel',
    locationName: 'Abbaye du Mont Saint-Michel',
    title: 'Uma Ilha que Aparece e Desaparece',
    factPt:
      'O Mont Saint-Michel vira uma ilha na maré alta e se conecta ao continente na maré baixa, com as marés mais fortes da Europa.',
    relatedWords: [
      { fr: 'la marée', pt: 'a maré' },
      { fr: 'l\u2019abbaye', pt: 'a abadia' },
      { fr: 'l\u2019île', pt: 'a ilha' },
    ],
    miniQuiz: {
      question: 'Por que o Mont Saint-Michel vira uma ilha?',
      options: ['Pelas marés muito fortes', 'Por estar sempre isolado', 'Por uma ponte móvel'],
      correctIndex: 0,
      explanation: 'As marés da região estão entre as mais fortes da Europa, isolando o monte na maré alta.',
    },
  },
  tours: {
    id: 'curiosity_tours',
    cityName: 'Tours',
    locationName: 'Vieux Tours',
    title: 'O Francês Mais Puro da França',
    factPt:
      'A região de Tours é tradicionalmente considerada o berço do francês "mais puro", por isso é muito procurada por estudantes de idiomas.',
    relatedWords: [
      { fr: 'la prononciation', pt: 'a pronúncia' },
      { fr: 'pur', pt: 'puro' },
      { fr: 'étudier', pt: 'estudar' },
    ],
    miniQuiz: {
      question: 'Por que Tours é procurada por estudantes de francês?',
      options: ['Pelo francês considerado o mais puro', 'Pelas praias', 'Pelos castelos de gelo'],
      correctIndex: 0,
      explanation: 'A região é conhecida pela pronúncia clara, considerada referência do francês padrão.',
    },
  },
  amiens: {
    id: 'curiosity_amiens',
    cityName: 'Amiens',
    locationName: 'Cathédrale d\u2019Amiens',
    title: 'A Maior Catedral Gótica da França',
    factPt:
      'A catedral de Amiens é a maior catedral gótica da França em volume interior, com cerca de 200.000 m³.',
    relatedWords: [
      { fr: 'la cathédrale', pt: 'a catedral' },
      { fr: 'gothique', pt: 'gótico' },
      { fr: 'le volume', pt: 'o volume' },
    ],
    miniQuiz: {
      question: 'Qual título a catedral de Amiens possui?',
      options: ['Maior catedral gótica da França', 'Catedral mais antiga da França', 'Menor catedral da França'],
      correctIndex: 0,
      explanation: 'Ela é a maior catedral gótica francesa em volume interior.',
    },
  },
};

export function getLocalCuriosity(cityName: string): Curiosity {
  if (CURIOSITY_BANK[cityName]) {
    return CURIOSITY_BANK[cityName];
  }
  return CURIOSITY_BANK.paris;
}

const CITY_KEYWORDS: Record<string, string[]> = {
  paris: ['paris', 'louvre', 'seine', 'tour eiffel', 'marais', 'notre-dame'],
  amiens: ['amiens', 'cathédrale', 'somme'],
  lille: ['lille', 'flandre', 'grand-place', 'nord'],
  'mont-saint-michel': ['mont saint-michel', 'mont-saint-michel', 'abbaye', 'normandie', 'marée'],
  tours: ['tours', 'loire', 'château', 'châteaux'],
  bordeaux: ['bordeaux', 'vin', 'vignoble', 'gironde'],
  toulouse: ['toulouse', 'ville rose', 'aéronautique', 'airbus', 'garonne'],
  lyon: ['lyon', 'rhône', 'gastronomie', 'soie', 'traboule'],
  marseille: ['marseille', 'vieux-port', 'port', 'méditerranée', 'calanque'],
  strasbourg: ['strasbourg', 'alsace', 'noël', 'cathédrale', 'rhin'],
  nice: ['nice', 'côte', 'riviera', 'mer', 'promenade', 'azur'],
};

export function analyzeLessonLocally(title: string, content: string, domain: string) {
  const text = `${title} ${content}`.toLowerCase();
  let suggestedCityId = 'paris';
  for (const [cityId, keywords] of Object.entries(CITY_KEYWORDS)) {
    if (keywords.some((k) => text.includes(k))) {
      suggestedCityId = cityId;
      break;
    }
  }

  // Extract simple unique French-looking words for the "words learned" chips.
  const words = Array.from(
    new Set(
      (content.match(/[\p{L}àâäéèêëîïôöùûüçœ-]+/gu) || [])
        .map((w) => w.toLowerCase())
        .filter((w) => w.length > 2 && w.length < 20)
    )
  ).slice(0, 6);

  return {
    suggestedCityId,
    domain: domain || 'Cotidiano',
    wordsLearned: words.length ? words : ['français', 'étude'],
    summaryPt: `Texto analisado localmente e vinculado a ${cityLabel(suggestedCityId)} no Mapa da Memória.`,
  };
}
