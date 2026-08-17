import fs from 'fs';
import path from 'path';

function saveLesson(lesson: any) {
  const filePath = path.join('src/data', `${lesson.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(lesson, null, 2), 'utf8');
  console.log(`[OK] Revised ${lesson.id}: ${lesson.vocabularyDictionary.length} terms | Level: ${lesson.level} | Title: ${lesson.titlePt}`);
}

// Lesson 23: Cafés Literários do Boulevard Saint-Germain
saveLesson({
  "id": "paris_lesson_23",
  "cityId": "paris",
  "domain": "Literatura & Café",
  "level": "Iniciante (A1)",
  "titleFr": "Cafés Littéraires de Saint-Germain : Lire, Écrire et Discuter (A1)",
  "titlePt": "Cafés Literários do Boulevard Saint-Germain : Ler, Escrever e Conversar (A1)",
  "subtitleFr": "Comment parler de lecture, d'écriture et de cafés littéraires simples à Paris",
  "subtitlePt": "Como falar de leitura, escrita e cafés literários simples em Paris",
  "summaryPt": "Nesta Aula 23 de Paris (#1), Irlan passeia pelo Boulevard Saint-Germain, famoso por seus cafés literários históricos como o Les Deux Magots e o Café de Flore. Ele observa leitores e escritores, aprende o vocabulário básico de A1 para ler, escrever, pedir um café e conversar com amigos, celebrando a tradição intelectual de Paris.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Aujourd'hui, je me promène sur le boulevard Saint-Germain pour découvrir les célèbres cafés littéraires de Paris.",
      "pt": "Hoje, eu passeio pelo Boulevard Saint-Germain para descobrir os famosos cafés literários de Paris."
    },
    {
      "id": 2,
      "fr": "J'entre dans un café historique où des écrivains aiment lire des livres et écrire des textes.",
      "pt": "Eu entro em um café histórico onde escritores gostam de ler livros e escrever textos."
    },
    {
      "id": 3,
      "fr": "Je commande un café chaud et je lis quelques pages d'un roman français très simple.",
      "pt": "Eu peço um café quente e leio algumas páginas de um romance francês muito simples."
    },
    {
      "id": 4,
      "fr": "C'est un endroit calme et agréable pour discuter avec des amis ou apprendre le français.",
      "pt": "É um lugar calmo e agradável para conversar com amigos ou aprender francês."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "boulevard",
      "definitionPt": "Avenida larga, bulevar (substantivo masculino)",
      "definitionFr": "Nom masculin ; large voie de communication urbaine souvent plantée d'arbres",
      "inflections": ["boulevard", "boulevards"],
      "ptTargets": ["avenida", "bulevar", "avenidas", "boulevard"],
      "examples": [
        { "level": "A1", "fr": "Le boulevard est très large et beau.", "pt": "A avenida é muito larga e bonita." },
        { "level": "A2-B1", "fr": "Nous marchons sur le boulevard Saint-Germain pour voir les cafés.", "pt": "Nós caminhamos pelo Boulevard Saint-Germain para ver os cafés." },
        { "level": "B2", "fr": "Les grands boulevards de la capitale abritent de nombreux théâtres et commerces.", "pt": "As grandes avenidas da capital abrigam muitos teatros e comércios." },
        { "level": "C1-C2", "fr": "La physionomie haussmannienne des boulevards témoigne des transformations architecturales du XIXe siècle.", "pt": "A fisionomia haussmanniana das avenidas testemunha as transformações arquitetônicas do século XIX." }
      ]
    },
    {
      "term": "café",
      "definitionPt": "Café, cafeteria (substantivo masculino)",
      "definitionFr": "Nom masculin ; boisson chaude ou établissement où l'on consomme des boissons",
      "inflections": ["café", "cafés"],
      "ptTargets": ["café", "cafés", "cafeteria"],
      "examples": [
        { "level": "A1", "fr": "Je bois un café chaud le matin.", "pt": "Eu bebo um café quente de manhã." },
        { "level": "A2-B1", "fr": "Nous allons dans un petit café pour discuter tranquillement.", "pt": "Nós vamos a um pequeno café para conversar tranquilamente." },
        { "level": "B2", "fr": "La culture des cafés parisiens favorise les échanges intellectuels et artistiques.", "pt": "A cultura dos cafés parisienses favorece as trocas intelectuais e artísticas." },
        { "level": "C1-C2", "fr": "Ces établissements emblématiques ont forgé la légende littéraire de la rive gauche.", "pt": "Esses estabelecimentos emblemáticos forjaram a lenda literária da margem esquerda." }
      ]
    },
    {
      "term": "écrivain",
      "definitionPt": "Escritor, autora (substantivo masculino ou feminino)",
      "definitionFr": "Nom ; personne qui écrit des livres, des romans ou des poèmes",
      "inflections": ["écrivain", "écrivains", "écrivaine", "écrivaines"],
      "ptTargets": ["escritor", "escritora", "escritores", "autora"],
      "examples": [
        { "level": "A1", "fr": "L'écrivain écrit un bon livre.", "pt": "O escritor escreve um bom livro." },
        { "level": "A2-B1", "fr": "De nombreux écrivains français ont vécu dans ce quartier.", "pt": "Muitos escritores franceses viveram neste bairro." },
        { "level": "B2", "fr": "Cet écrivain contemporain aborde des thèmes universels avec une plume sensible.", "pt": "Este escritor contemporâneo aborda temas universais com uma escrita sensível." },
        { "level": "C1-C2", "fr": "La posture engagée de l'écrivain au XXe siècle a profondément influencé le débat public.", "pt": "A postura engajada do escritor no século XX influenciou profundamente o debate público." }
      ]
    },
    {
      "term": "lire",
      "definitionPt": "Ler (verbo)",
      "definitionFr": "Verbe ; prendre connaissance du contenu d'un texte écrit",
      "inflections": ["lis", "lit", "lisons", "lisez", "lisent", "lu", "lire"],
      "ptTargets": ["ler", "leio", "lê", "lemos", "lido"],
      "examples": [
        { "level": "A1", "fr": "Je lis un petit livre en français.", "pt": "Eu leio um pequeno livro em francês." },
        { "level": "A2-B1", "fr": "Est-ce que tu aimes lire des romans pendant le week-end ?", "pt": "Você gosta de ler romances durante o fim de semana?" },
        { "level": "B2", "fr": "Lire régulièrement la presse francophone permet d'enrichir rapidement son vocabulaire.", "pt": "Ler regularmente a imprensa francófona permite enriquecer rapidamente o seu vocabulário." },
        { "level": "C1-C2", "fr": "La capacité à lire entre les lignes révèle la subtilité des intentions de l'auteur.", "pt": "A capacidade de ler entrelinhas revela a sutileza das intenções do autor." }
      ]
    },
    {
      "term": "livre",
      "definitionPt": "Livro (substantivo masculino)",
      "definitionFr": "Nom masculin ; ensemble de pages reliées contenant un texte",
      "inflections": ["livre", "livres"],
      "ptTargets": ["livro", "livros", "obra"],
      "examples": [
        { "level": "A1", "fr": "Le livre est sur la table du salon.", "pt": "O livro está sobre a mesa da sala." },
        { "level": "A2-B1", "fr": "J'ai acheté un nouveau livre dans la librairie historique.", "pt": "Eu comprei um novo livro na livraria histórica." },
        { "level": "B2", "fr": "Ce livre offre une réflexion passionnante sur l'histoire culturelle de Paris.", "pt": "Este livro oferece uma reflexão apaixonante sobre a história cultural de Paris." },
        { "level": "C1-C2", "fr": "L'édition originale de ce livre constitue une véritable pièce de collection littéraire.", "pt": "A edição original deste livro constitui uma verdadeira peça de coleção literária." }
      ]
    },
    {
      "term": "écrire",
      "definitionPt": "Escrever (verbo)",
      "definitionFr": "Verbe ; tracer des lettres ou composer un texte",
      "inflections": ["écris", "écrit", "écrivons", "écrivez", "écrivent", "écrit", "écrire"],
      "ptTargets": ["escrever", "escrevo", "escreve", "escrevemos", "escrito"],
      "examples": [
        { "level": "A1", "fr": "J'écris mon nom sur le cahier.", "pt": "Eu escrevo meu nome no caderno." },
        { "level": "A2-B1", "fr": "Elle écrit une carte postale à sa famille depuis Paris.", "pt": "Ela escreve um cartão-postal para sua família de Paris." },
        { "level": "B2", "fr": "Il est important d'écrire des phrases complètes pour bien structurer sa pensée.", "pt": "É importante escrever frases completas para estruturar bem o seu pensamento." },
        { "level": "C1-C2", "fr": "Écrire un essai littéraire exige à la fois rigueur stylistique et clarté conceptuelle.", "pt": "Escrever um ensaio literário exige tanto rigor estilístico quanto clareza conceitual." }
      ]
    },
    {
      "term": "texte",
      "definitionPt": "Texto (substantivo masculino)",
      "definitionFr": "Nom masculin ; ensemble de phrases constituant un écrit",
      "inflections": ["texte", "textes"],
      "ptTargets": ["texto", "textos", "redação"],
      "examples": [
        { "level": "A1", "fr": "Ce texte est court et facile.", "pt": "Este texto é curto e fácil." },
        { "level": "A2-B1", "fr": "Nous lisons un texte sur la vie quotidienne à Paris.", "pt": "Nós lemos um texto sobre a vida cotidiana em Paris." },
        { "level": "B2", "fr": "L'analyse du texte permet de comprendre le contexte historique de l'œuvre.", "pt": "A análise do texto permite compreender o contexto histórico da obra." },
        { "level": "C1-C2", "fr": "La densité sémantique de ce texte révèle une profonde érudition philosophique.", "pt": "A densidade semântica deste texto revela uma profunda erudição filosófica." }
      ]
    },
    {
      "term": "commander",
      "definitionPt": "Pedir, encomendar (verbo)",
      "definitionFr": "Verbe ; demander un produit ou une boisson dans un commerce ou un café",
      "inflections": ["commande", "commandes", "commandons", "commandez", "commandent", "commandé", "commander"],
      "ptTargets": ["pedir", "peço", "pede", "encomendar", "pedido"],
      "examples": [
        { "level": "A1", "fr": "Je commande un thé et un croissant.", "pt": "Eu peço um chá e um croissant." },
        { "level": "A2-B1", "fr": "Nous allons commander le déjeuner sur la terrasse.", "pt": "Nós vamos pedir o almoço no terraço." },
        { "level": "B2", "fr": "Vous pouvez commander vos livres directement auprès de la librairie indépendante.", "pt": "Você pode encomendar seus livros diretamente com a livraria independente." },
        { "level": "C1-C2", "fr": "La procédure pour commander des ouvrages rares nécessite une vérification préalable en catalogue.", "pt": "O procedimento para encomendar obras raras requer uma verificação prévia no catálogo." }
      ]
    },
    {
      "term": "page",
      "definitionPt": "Página (substantivo feminino)",
      "definitionFr": "Nom féminin ; chacun des deux côtés d'une feuille de papier dans un livre",
      "inflections": ["page", "pages"],
      "ptTargets": ["página", "páginas"],
      "examples": [
        { "level": "A1", "fr": "Je lis la première page du livre.", "pt": "Eu leio a primeira página do livro." },
        { "level": "A2-B1", "fr": "Ouvrez votre livre à la page dix pour l'exercice.", "pt": "Abram seu livro na página dez para o exercício." },
        { "level": "B2", "fr": "Chaque page du roman apporte de nouveaux détails sur le décor parisien.", "pt": "Cada página do romance traz novos detalhes sobre o cenário parisiense." },
        { "level": "C1-C2", "fr": "La mise en page soignée contribue à la clarté visuelle de l'édition scientifique.", "pt": "A diagramação cuidadosa contribui para a clareza visual da edição científica." }
      ]
    },
    {
      "term": "roman",
      "definitionPt": "Romance, livro de ficção (substantivo masculino)",
      "definitionFr": "Nom masculin ; œuvre littéraire de fiction en prose",
      "inflections": ["roman", "romans"],
      "ptTargets": ["romance", "romances", "livro de ficção"],
      "examples": [
        { "level": "A1", "fr": "C'est un bon roman d'amour.", "pt": "É um bom romance de amor." },
        { "level": "A2-B1", "fr": "Elle a fini de lire ce roman en trois jours.", "pt": "Ela terminou de ler este romance em três dias." },
        { "level": "B2", "fr": "Le roman explore les relations humaines dans le Paris de la Belle Époque.", "pt": "O romance explora as relações humanas na Paris da Belle Époque." },
        { "level": "C1-C2", "fr": "Cette œuvre s'impose comme un roman fondateur de la littérature existentialiste française.", "pt": "Esta obra se impõe como um romance fundador da literatura existencialista francesa." }
      ]
    },
    {
      "term": "endroit",
      "definitionPt": "Lugar, local (substantivo masculino)",
      "definitionFr": "Nom masculin ; lieu déterminé dans un espace",
      "inflections": ["endroit", "endroits"],
      "ptTargets": ["lugar", "local", "lugares", "locais"],
      "examples": [
        { "level": "A1", "fr": "C'est un bel endroit dans Paris.", "pt": "É um lindo lugar em Paris." },
        { "level": "A2-B1", "fr": "Nous cherchons un endroit calme pour lire l'après-midi.", "pt": "Nós procuramos um lugar calmo para ler à tarde." },
        { "level": "B2", "fr": "Ce café reste l'un des endroits les plus prisés par les étudiants et les artistes.", "pt": "Este café continua sendo um dos lugares mais procurados por estudantes e artistas." },
        { "level": "C1-C2", "fr": "La préservation de cet endroit emblématique relève de la protection du patrimoine urbain.", "pt": "A preservação deste lugar emblemático faz parte da proteção do patrimônio urbano." }
      ]
    },
    {
      "term": "discuter",
      "definitionPt": "Conversar, discutir (verbo)",
      "definitionFr": "Verbe ; échanger des idées ou des propos avec d'autres personnes",
      "inflections": ["discute", "discutes", "discutons", "discutez", "discutent", "discuté", "discuter"],
      "ptTargets": ["conversar", "converso", "conversa", "discutir", "debater"],
      "examples": [
        { "level": "A1", "fr": "Je discute avec mon ami au café.", "pt": "Eu converso com meu amigo no café." },
        { "level": "A2-B1", "fr": "Nous aimons discuter de musique et de cinéma le soir.", "pt": "Nós gostamos de conversar sobre música e cinema à noite." },
        { "level": "B2", "fr": "Les participants se réunissent pour discuter des projets culturels de la ville.", "pt": "Os participantes se reúnem para debater os projetos culturais da cidade." },
        { "level": "C1-C2", "fr": "Discuter avec ouverture d'esprit permet de surmonter les divergences théoriques les plus subtiles.", "pt": "Conversar com mente aberta permite superar as divergências teóricas mais sutis." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": 1,
      "type": "multiple_choice",
      "questionFr": "Où se promène Irlan pour découvrir les cafés littéraires ?",
      "questionPt": "Onde Irlan passeia para descobrir os cafés literários?",
      "options": [
        "Sur le boulevard Saint-Germain",
        "Au sommet de la Tour Eiffel",
        "Dans la gare d'Amiens",
        "Dans les jardins de Versailles"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "Irlan passeia pelo boulevard Saint-Germain, bairro famoso pelos seus cafés literários históricos em Paris."
    },
    {
      "id": 2,
      "type": "true_false",
      "questionFr": "Vrai ou Faux : Un 'écrivain' est une personne qui écrit des livres et des textes.",
      "questionPt": "Verdadeiro ou Falso : Um 'écrivain' é uma pessoa que escreve livros e textos.",
      "options": ["Vrai", "Faux"],
      "correctAnswerIndex": 0,
      "explanationPt": "'Écrivain' significa escritor(a), aquele que compõe livros, romances ou poemas."
    },
    {
      "id": 3,
      "type": "multiple_choice",
      "questionFr": "Que signifie le mot français 'livre' en portugais ?",
      "questionPt": "O que significa a palavra francesa 'livre' em português?",
      "options": [
        "Livro",
        "Lugar",
        "Janela",
        "Bilhete"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "'Livre' é um substantivo masculino que significa livro em português."
    },
    {
      "id": 4,
      "type": "fill_in_the_blank",
      "questionFr": "Je _____ un café chaud sur la terrasse du café.",
      "questionPt": "Eu peço um café quente no terraço do café.",
      "options": [
        "commande",
        "livre",
        "écrivain",
        "colline"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "O verbo 'commander' (na 1ª pessoa 'je commande') significa pedir ou encomendar algo em um café ou restaurante."
    },
    {
      "id": 5,
      "type": "multiple_choice",
      "questionFr": "Que font souvent les écrivains dans un café littéraire selon le texte ?",
      "questionPt": "O que os escritores frequentemente fazem em um café literário segundo o texto?",
      "options": [
        "Ils aiment lire des livres et écrire des textes",
        "Ils nagent dans la Seine",
        "Ils achètent des billets de train pour Lyon",
        "Ils cuisinent des croissants dans la rue"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "No café literário, os escritores gostam de ler livros e escrever textos ('lire des livres et écrire des textes')."
    },
    {
      "id": 6,
      "type": "true_false",
      "questionFr": "Vrai ou Faux : Le mot 'endroit' signifie 'lugar' ou 'local' em português.",
      "questionPt": "Verdadeiro ou Falso : A palavra 'endroit' significa 'lugar' ou 'local' em português.",
      "options": ["Vrai", "Faux"],
      "correctAnswerIndex": 0,
      "explanationPt": "'Endroit' é um substantivo masculino que traduz exatamente como lugar ou local em português."
    },
    {
      "id": 7,
      "type": "multiple_choice",
      "questionFr": "Quel est l'infinitif du verbe qui signifie 'ler' en français ?",
      "questionPt": "Qual é o infinitivo do verbo que significa 'ler' em francês?",
      "options": [
        "Lire",
        "Écrire",
        "Commander",
        "Discuter"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "'Lire' é o verbo ler ('je lis', 'tu lis', 'il lit')."
    },
    {
      "id": 8,
      "type": "fill_in_the_blank",
      "questionFr": "Je lis quelques _____ d'un roman français.",
      "questionPt": "Eu leio algumas páginas de um romance francês.",
      "options": [
        "pages",
        "endroits",
        "cafés",
        "boulevards"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "'Pages' (páginas) completa a frase corretamente ('quelques pages d'un roman')."
    },
    {
      "id": 9,
      "type": "multiple_choice",
      "questionFr": "Pourquoi le café est-il un endroit agréable selon Irlan ?",
      "questionPt": "Por que o café é um lugar agradável segundo Irlan?",
      "options": [
        "Pour discuter avec des amis ou apprendre le français",
        "Pour dormir pendant toute la journée",
        "Pour prendre le train à grande vitesse",
        "Pour faire des courses au supermarché"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "O café é um local calmo e agradável para conversar com amigos ('discuter avec des amis') ou aprender francês."
    },
    {
      "id": 10,
      "type": "true_false",
      "questionFr": "Vrai ou Faux : Un 'roman' est une obra literária de ficção, como um romance em português.",
      "questionPt": "Verdadeiro ou Falso : Um 'roman' é uma obra literária de ficção, como um romance em português.",
      "options": ["Vrai", "Faux"],
      "correctAnswerIndex": 0,
      "explanationPt": "Sim, 'roman' em francês refere-se a um romance, obra de ficção em prosa."
    }
  ]
});

// Lesson 24: Paris Moderna - La Défense
saveLesson({
  "id": "paris_lesson_24",
  "cityId": "paris",
  "domain": "Arquitetura & Cotidiano",
  "level": "Iniciante (A1)",
  "titleFr": "Paris Moderne à La Défense : Bâtiments, Chiffres et Horaires (A1)",
  "titlePt": "Paris Moderna - La Défense : Prédios, Números e Horários de Trabalho (A1)",
  "subtitleFr": "Explorer le quartier d'affaires et apprendre à parler des horaires et des nombres",
  "subtitlePt": "Explorar o bairro de negócios e aprender a falar de horários e números",
  "summaryPt": "Nesta Aula 24 de Paris (#1), Irlan pega o metrô em direção a La Défense, o bairro moderno de negócios de Paris. Ele observa os grandes arranha-céus e o famoso Grande Arco, treinando números, horários de trabalho e vocabulário prático de A1 sobre a rotina profissional e a arquitetura contemporânea.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Aujourd'hui, je prends le métro vers La Défense pour voir le grand quartier d'affaires de Paris.",
      "pt": "Hoje, eu pego o metrô em direção a La Défense para ver o grande bairro de negócios de Paris."
    },
    {
      "id": 2,
      "fr": "Il y a de grands immeubles modernes en verre et la célèbre Grande Arche blanche.",
      "pt": "Há grandes prédios modernos de vidro e o famoso Grande Arco branco."
    },
    {
      "id": 3,
      "fr": "Les employés commencent à travailler à neuf heures du matin et finissent à dix-sept heures.",
      "pt": "Os funcionários começam a trabalhar às nove horas da manhã e terminam às dezessete horas."
    },
    {
      "id": 4,
      "fr": "C'est un contraste intéressant avec les bâtiments historiques et anciens du centre de Paris.",
      "pt": "É um contraste interessante com os prédios históricos e antigos do centro de Paris."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "immeuble",
      "definitionPt": "Prédio, edifício (substantivo masculino)",
      "definitionFr": "Nom masculin ; bâtiment urbain comportant plusieurs étages",
      "inflections": ["immeuble", "immeubles"],
      "ptTargets": ["prédio", "edifício", "prédios", "edifícios"],
      "examples": [
        { "level": "A1", "fr": "L'immeuble est très haut et moderne.", "pt": "O prédio é muito alto e moderno." },
        { "level": "A2-B1", "fr": "Il habite au quatrième étage de cet immeuble parisien.", "pt": "Ele mora no quarto andar deste prédio parisiense." },
        { "level": "B2", "fr": "Les immeubles en verre du quartier de La Défense reflètent la lumière du soleil.", "pt": "Os edifícios de vidro do bairro de La Défense refletem a luz do sol." },
        { "level": "C1-C2", "fr": "La réhabilitation énergétique des immeubles anciens représente un défi technique majeur en milieu urbain.", "pt": "A reabilitação energética de edifícios antigos representa um importante desafio técnico em meio urbano." }
      ]
    },
    {
      "term": "moderne",
      "definitionPt": "Moderno, moderna (adjetivo)",
      "definitionFr": "Adjectif ; qui appartient au temps présent, qui est récent",
      "inflections": ["moderne", "modernes"],
      "ptTargets": ["moderno", "moderna", "modernos", "modernas"],
      "examples": [
        { "level": "A1", "fr": "C'est une ville très moderne.", "pt": "É uma cidade muito moderna." },
        { "level": "A2-B1", "fr": "J'aime l'architecture moderne et les grands ponts.", "pt": "Eu gosto da arquitetura moderna e das grandes pontes." },
        { "level": "B2", "fr": "Cette exposition présente l'évolution de l'art moderne au cours du vingtième siècle.", "pt": "Esta exposição apresenta a evolução da arte moderna durante o século vinte." },
        { "level": "C1-C2", "fr": "La métropole conjugue habilement son patrimoine séculaire avec une urbanisation résolument moderne.", "pt": "A metrópole combina habilmente seu patrimônio secular com uma urbanização resolutamente moderna." }
      ]
    },
    {
      "term": "verre",
      "definitionPt": "Vidro, copo (substantivo masculino)",
      "definitionFr": "Nom masculin ; matériau solide et transparent, ou récipient pour boire",
      "inflections": ["verre", "verres"],
      "ptTargets": ["vidro", "copo", "vidros", "copos"],
      "examples": [
        { "level": "A1", "fr": "La fenêtre est en verre transparent.", "pt": "A janela é de vidro transparente." },
        { "level": "A2-B1", "fr": "Je voudrais un verre d'eau fraîche, s'il vous plaît.", "pt": "Eu gostaria de um copo de água fresca, por favor." },
        { "level": "B2", "fr": "Les façades en verre permettent d'optimiser l'éclairage naturel dans les bureaux.", "pt": "As fachadas de vidro permitem otimizar a iluminação natural nos escritórios." },
        { "level": "C1-C2", "fr": "La transparence architecturale du verre symbolise souvent l'ouverture et la modernité des institutions.", "pt": "A transparência arquitetônica do vidro simboliza frequentemente a abertura e a modernidade das instituições." }
      ]
    },
    {
      "term": "employé",
      "definitionPt": "Funcionário, empregado (substantivo masculino ou feminino)",
      "definitionFr": "Nom ; personne qui travaille pour une entreprise ou un service",
      "inflections": ["employé", "employés", "employée", "employées"],
      "ptTargets": ["funcionário", "funcionária", "empregado", "empregados", "funcionários"],
      "examples": [
        { "level": "A1", "fr": "L'employé travaille dans un bureau.", "pt": "O funcionário trabalha em um escritório." },
        { "level": "A2-B1", "fr": "Les employés prennent le train tous les matins pour aller au travail.", "pt": "Os funcionários pegam o trem todas as manhãs para ir ao trabalho." },
        { "level": "B2", "fr": "L'entreprise propose des formations continues à l'ensemble de ses employés.", "pt": "A empresa oferece formações contínuas a todos os seus funcionários." },
        { "level": "C1-C2", "fr": "La valorisation des compétences de chaque employé constitue un levier essentiel de performance organisationnelle.", "pt": "A valorização das competências de cada funcionário constitui uma alavanca essencial de desempenho organizacional." }
      ]
    },
    {
      "term": "travailler",
      "definitionPt": "Trabalhar (verbo)",
      "definitionFr": "Verbe ; faire une activité professionnelle ou un effort soutenu",
      "inflections": ["travaille", "travailles", "travaillons", "travaillez", "travaillent", "travaillé", "travailler"],
      "ptTargets": ["trabalhar", "trabalho", "trabalha", "trabalhamos", "trabalhado"],
      "examples": [
        { "level": "A1", "fr": "Je travaille à Paris cette semaine.", "pt": "Eu trabalho em Paris esta semana." },
        { "level": "A2-B1", "fr": "Mon frère travaille dans une grande entreprise française.", "pt": "Meu irmão trabalha em uma grande empresa francesa." },
        { "level": "B2", "fr": "Travailler en équipe permet de résoudre plus facilement les problèmes complexes.", "pt": "Trabalhar em equipe permite resolver mais facilmente os problemas complexos." },
        { "level": "C1-C2", "fr": "La flexibilité des horaires a redéfini la manière dont nous concevons le fait de travailler aujourd'hui.", "pt": "A flexibilidade dos horários redefiniu a maneira como concebemos o ato de trabalhar hoje." }
      ]
    },
    {
      "term": "heure",
      "definitionPt": "Hora, horário (substantivo feminino)",
      "definitionFr": "Nom féminin ; unité de mesure du temps de soixante minutes",
      "inflections": ["heure", "heures"],
      "ptTargets": ["hora", "horas", "horário"],
      "examples": [
        { "level": "A1", "fr": "Il est neuf heures du matin.", "pt": "São nove horas da manhã." },
        { "level": "A2-B1", "fr": "À quelle heure arrive le train pour Amiens ?", "pt": "A que horas chega o trem para Amiens?" },
        { "level": "B2", "fr": "Nous avons convenu d'un rendez-vous à quatorze heures précises.", "pt": "Nós concordamos com um compromisso às quatorze horas em ponto." },
        { "level": "C1-C2", "fr": "La ponctualité exige une gestion rigoureuse de chaque heure de la journée de travail.", "pt": "A pontualidade exige uma gestão rigorosa de cada hora da jornada de trabalho." }
      ]
    },
    {
      "term": "matin",
      "definitionPt": "Manhã (substantivo masculino)",
      "definitionFr": "Nom masculin ; première partie de la journée, entre le lever du soleil et midi",
      "inflections": ["matin", "matins"],
      "ptTargets": ["manhã", "manhãs"],
      "examples": [
        { "level": "A1", "fr": "Le matin, je bois un café au lait.", "pt": "De manhã, eu bebo um café com leite." },
        { "level": "A2-B1", "fr": "Demain matin, nous visiterons le quartier moderne de La Défense.", "pt": "Amanhã de manhã, visitaremos o bairro moderno de La Défense." },
        { "level": "B2", "fr": "La lumière du matin offre d'excellentes conditions pour photographier les monuments.", "pt": "A luz da manhã oferece excelentes condições para fotografar os monumentos." },
        { "level": "C1-C2", "fr": "L'effervescence matinale des gares illustre le dynamisme quotidien de la métropole.", "pt": "A efervescência matinal das estações ilustra o dinamismo cotidiano da metrópole." }
      ]
    },
    {
      "term": "finir",
      "definitionPt": "Terminar, acabar (verbo)",
      "definitionFr": "Verbe ; arriver au terme d'une action ou d'une journée",
      "inflections": ["finis", "finit", "finissons", "finissez", "finissent", "fini", "finir"],
      "ptTargets": ["terminar", "termino", "termina", "acabar", "finalizar"],
      "examples": [
        { "level": "A1", "fr": "Je finis mon travail à cinq heures.", "pt": "Eu termino meu trabalho às cinco horas." },
        { "level": "A2-B1", "fr": "À quelle heure finissez-vous votre cours de français ?", "pt": "A que horas vocês terminam sua aula de francês?" },
        { "level": "B2", "fr": "Dès que j'aurai fini ce dossier, nous pourrons aller nous promener.", "pt": "Assim que eu tiver terminado este relatório, poderemos ir passear." },
        { "level": "C1-C2", "fr": "Savoir finir un projet dans les délais impartis témoigne d'une grande rigueur professionnelle.", "pt": "Saber terminar um projeto nos prazos estabelecidos testemunha um grande rigor profissional." }
      ]
    },
    {
      "term": "neuf",
      "definitionPt": "Nove (número) / novo (adjetivo)",
      "definitionFr": "Adjectif numéral invariable (9) ou adjectif qualificatif signifiant nouveau",
      "inflections": ["neuf", "neufs", "neuve", "neuves"],
      "ptTargets": ["nove", "novo", "nova", "novos"],
      "examples": [
        { "level": "A1", "fr": "Il est neuf heures du matin.", "pt": "São nove horas da manhã." },
        { "level": "A2-B1", "fr": "J'ai acheté un cahier neuf pour mes leçons de français.", "pt": "Eu comprei um caderno novo para minhas lições de francês." },
        { "level": "B2", "fr": "Le musée ouvre ses portes au public à neuf heures trente.", "pt": "O museu abre suas portas ao público às nove e meia." },
        { "level": "C1-C2", "fr": "L'inauguration de ces neuf immeubles marque une étape clé du renouvellement urbain.", "pt": "A inauguração destes nove edifícios marca uma etapa chave da renovação urbana." }
      ]
    },
    {
      "term": "contraste",
      "definitionPt": "Contraste, oposição visual ou cultural (substantivo masculino)",
      "definitionFr": "Nom masculin ; opposition marquée entre deux choses ou deux styles",
      "inflections": ["contraste", "contrastes"],
      "ptTargets": ["contraste", "oposição", "contrastes"],
      "examples": [
        { "level": "A1", "fr": "Il y a un grand contraste entre le moderne et l'ancien.", "pt": "Há um grande contraste entre o moderno e o antigo." },
        { "level": "A2-B1", "fr": "J'aime le contraste de couleurs dans ce beau quartier.", "pt": "Eu gosto do contraste de cores neste lindo bairro." },
        { "level": "B2", "fr": "Le contraste architectural entre le Louvre et sa pyramide de verre est saisissant.", "pt": "O contraste arquitetônico entre o Louvre e sua pirâmide de vidro é marcante." },
        { "level": "C1-C2", "fr": "Cet aménagement urbain joue subtilement sur le contraste des époques et des volumes.", "pt": "Este planejamento urbano joga sutilmente com o contraste das épocas e dos volumes." }
      ]
    },
    {
      "term": "ancien",
      "definitionPt": "Antigo, antiga (adjetivo)",
      "definitionFr": "Adjectif ; qui existe depuis longtemps, qui est d'une époque passée",
      "inflections": ["ancien", "anciens", "ancienne", "anciennes"],
      "ptTargets": ["antigo", "antiga", "antigos", "antigas"],
      "examples": [
        { "level": "A1", "fr": "C'est un ancien bâtiment historique.", "pt": "É um antigo prédio histórico." },
        { "level": "A2-B1", "fr": "Les rues anciennes du centre-ville ont beaucoup de charme.", "pt": "As ruas antigas do centro da cidade têm muito charme." },
        { "level": "B2", "fr": "Cette place réunit harmonieusement des façades anciennes et des commerces modernes.", "pt": "Esta praça reúne harmoniosamente fachadas antigas e comércios modernos." },
        { "level": "C1-C2", "fr": "La conservation du patrimoine ancien est primordiale pour maintenir l'identité culturelle de la cité.", "pt": "A conservação do patrimônio antigo é primordial para manter a identidade cultural da cidade." }
      ]
    },
    {
      "term": "centre",
      "definitionPt": "Centro (substantivo masculino)",
      "definitionFr": "Nom masculin ; milieu d'une ville ou point central d'une région",
      "inflections": ["centre", "centres"],
      "ptTargets": ["centro", "centros", "meio"],
      "examples": [
        { "level": "A1", "fr": "Mon hôtel est dans le centre de Paris.", "pt": "Meu hotel fica no centro de Paris." },
        { "level": "A2-B1", "fr": "Nous allons au centre-ville pour visiter les musées et les boutiques.", "pt": "Nós vamos ao centro da cidade para visitar os museus e as lojas." },
        { "level": "B2", "fr": "Le réseau de métro permet de relier rapidement la banlieue au centre historique.", "pt": "A rede de metrô permite ligar rapidamente a periferia ao centro histórico." },
        { "level": "C1-C2", "fr": "La revitalisation économique du centre urbain favorise la cohésion sociale et culturelle.", "pt": "A revitalização econômica do centro urbano favorece a coesão social e cultural." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": 1,
      "type": "multiple_choice",
      "questionFr": "Vers quel quartier Irlan prend-il le métro dans cette leçon ?",
      "questionPt": "Em direção a qual bairro Irlan pega o metrô nesta lição?",
      "options": [
        "La Défense",
        "Le Marais",
        "Montmartre",
        "Saint-Germain"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "Irlan pega o metrô em direção a La Défense, o grande bairro de negócios a oeste de Paris."
    },
    {
      "id": 2,
      "type": "true_false",
      "questionFr": "Vrai ou Faux : Un 'immeuble' est un prédio ou edifício em português.",
      "questionPt": "Verdadeiro ou Falso : Um 'immeuble' é um prédio ou edifício em português.",
      "options": ["Vrai", "Faux"],
      "correctAnswerIndex": 0,
      "explanationPt": "Sim, 'immeuble' é um substantivo masculino que traduz exatamente como prédio ou edifício em português."
    },
    {
      "id": 3,
      "type": "multiple_choice",
      "questionFr": "À quelle heure les employés commencent-ils à travailler selon le texte ?",
      "questionPt": "A que horas os funcionários começam a trabalhar segundo o texto?",
      "options": [
        "À neuf heures du matin (9h)",
        "À midi en point (12h)",
        "À quatre heures du matin (4h)",
        "À quatorze heures (14h)"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "Segundo o texto, os funcionários começam a trabalhar às nove horas da manhã ('à neuf heures du matin')."
    },
    {
      "id": 4,
      "type": "fill_in_the_blank",
      "questionFr": "Il y a de grands immeubles modernes en _____.",
      "questionPt": "Há grandes prédios modernos de vidro.",
      "options": [
        "verre",
        "café",
        "boulevard",
        "livre"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "'Verre' significa vidro em português ('en verre' = de vidro)."
    },
    {
      "id": 5,
      "type": "multiple_choice",
      "questionFr": "Que signifie le verbe 'travailler' en portugais ?",
      "questionPt": "O que significa o verbo 'travailler' em português?",
      "options": [
        "Trabalhar",
        "Viajar",
        "Dormir",
        "Cozinhar"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "'Travailler' é o verbo trabalhar em português ('je travaille', 'tu travailles')."
    },
    {
      "id": 6,
      "type": "true_false",
      "questionFr": "Vrai ou Faux : 'Finir' signifie começar em português.",
      "questionPt": "Verdadeiro ou Falso : 'Finir' significa começar em português.",
      "options": ["Vrai", "Faux"],
      "correctAnswerIndex": 1,
      "explanationPt": "Falso! 'Finir' significa terminar ou acabar em português. Começar em francês é 'commencer'."
    },
    {
      "id": 7,
      "type": "multiple_choice",
      "questionFr": "Quel est l'opposé de l'adjectif 'moderne' dans le vocabulaire de la leçon ?",
      "questionPt": "Qual é o oposto do adjetivo 'moderne' no vocabulário da lição?",
      "options": [
        "Ancien",
        "Verre",
        "Matin",
        "Heure"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "'Ancien' (antigo) é o oposto do adjetivo 'moderne' (moderno)."
    },
    {
      "id": 8,
      "type": "fill_in_the_blank",
      "questionFr": "Le _____ de Paris a des bâtiments historiques.",
      "questionPt": "O centro de Paris tem prédios históricos.",
      "options": [
        "centre",
        "verre",
        "employé",
        "matin"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "'Centre' (centro) completa corretamente a frase ('Le centre de Paris')."
    },
    {
      "id": 9,
      "type": "multiple_choice",
      "questionFr": "Que voit-on dans le quartier de La Défense selon Irlan ?",
      "questionPt": "O que vemos no bairro de La Défense segundo Irlan?",
      "options": [
        "De grands immeubles en verre et la Grande Arche blanche",
        "Des châteaux médiévaux et des fermes",
        "Des plages de sable doré et des bateaux",
        "Des champs de lavande et des vaches"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "Em La Défense, Irlan observa os grandes edifícios em vidro ('immeubles en verre') e o Grande Arco branco ('la Grande Arche blanche')."
    },
    {
      "id": 10,
      "type": "true_false",
      "questionFr": "Vrai ou Faux : Le mot 'heure' é um substantivo feminino em francês que significa hora ou horário.",
      "questionPt": "Verdadeiro ou Falso : A palavra 'heure' é um substantivo feminino em francês que significa hora ou horário.",
      "options": ["Vrai", "Faux"],
      "correctAnswerIndex": 0,
      "explanationPt": "Sim, 'heure' ('une heure') é um substantivo feminino em francês significando hora ou horário."
    }
  ]
});

// Lesson 25: O Adeus a Paris e o Embarque para Amiens
saveLesson({
  "id": "paris_lesson_25",
  "cityId": "paris",
  "domain": "Viagem & Transição",
  "level": "Iniciante (A1)",
  "titleFr": "L'Au Revoir à Paris et le Départ pour Amiens (#2) - À la Gare du Nord (A1)",
  "titlePt": "O Adeus a Paris e o Embarque para Amiens : Estações de Trem e Viagem (A1)",
  "subtitleFr": "Comment dire au revoir, faire sa valise et prendre le train à la gare",
  "subtitlePt": "Como dizer adeus, fazer a mala e pegar o trem na estação",
  "summaryPt": "Esta Aula 25 é o Grand Finale de Paris (#1) no nível Iniciante (A1)! Após 25 aulas imersivas na capital francesa, Irlan faz sua mala com cuidado, envia uma mensagem de gratidão à livreira Sophie e caminha até a Gare du Nord para embarcar em seu trem em direção a Amiens (#2), iniciando a próxima etapa da viagem pela França.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Pour mon dernier matin à Paris, je prépare ma valise dans ma chambre d'hôtel.",
      "pt": "Para minha última manhã em Paris, eu preparo minha mala no meu quarto de hotel."
    },
    {
      "id": 2,
      "fr": "J'envoie un message de remerciement à Sophie pour ses bons conseils sur les villes de France.",
      "pt": "Eu envio uma mensagem de agradecimento a Sophie por seus bons conselhos sobre as cidades da França."
    },
    {
      "id": 3,
      "fr": "Je marche jusqu'à la Gare du Nord avec mon billet de train dans la main.",
      "pt": "Eu caminho até a Gare du Nord com minha passagem de trem na mão."
    },
    {
      "id": 4,
      "fr": "Je dis au revoir à Paris et je monte dans le train pour Amiens, la deuxième ville de mon voyage.",
      "pt": "Eu digo adeus a Paris e subo no trem para Amiens, a segunda cidade da minha viagem."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "valise",
      "definitionPt": "Mala de viagem (substantivo feminino)",
      "definitionFr": "Nom féminin ; bagage rectangulaire servant à transporter des vêtements",
      "inflections": ["valise", "valises"],
      "ptTargets": ["mala", "malas", "bagagem"],
      "examples": [
        { "level": "A1", "fr": "Ma valise est bleue et légère.", "pt": "Minha mala é azul e leve." },
        { "level": "A2-B1", "fr": "Je dois faire ma valise avant de partir pour la gare.", "pt": "Eu devo fazer minha mala antes de partir para a estação." },
        { "level": "B2", "fr": "Nous avons rangé nos valises dans le compartiment à bagages du train.", "pt": "Nós guardamos nossas malas no compartimento de bagagens do trem." },
        { "level": "C1-C2", "fr": "La compacité de cette valise ergonomique facilite grandement les déplacements fréquents en train.", "pt": "A compacidade desta mala ergonômica facilita grandemente os deslocamentos frequentes de trem." }
      ]
    },
    {
      "term": "message",
      "definitionPt": "Mensagem, recado (substantivo masculino)",
      "definitionFr": "Nom masculin ; information écrite ou vocale transmise à une personne",
      "inflections": ["message", "messages"],
      "ptTargets": ["mensagem", "mensagens", "recado"],
      "examples": [
        { "level": "A1", "fr": "J'envoie un message à mon ami.", "pt": "Eu envio uma mensagem ao meu amigo." },
        { "level": "A2-B1", "fr": "Elle a écrit un gentil message pour dire merci.", "pt": "Ela escreveu uma mensagem gentil para dizer obrigado." },
        { "level": "B2", "fr": "Nous avons reçu un message confirmant l'heure de départ de notre train.", "pt": "Nós recebemos uma mensagem confirmando o horário de partida do nosso trem." },
        { "level": "C1-C2", "fr": "La clarté de ce message exprime parfaitement la gratitude du voyageur envers ses hôtes.", "pt": "A clareza desta mensagem expressa perfeitamente a gratidão do viajante para com seus anfitriões." }
      ]
    },
    {
      "term": "billet",
      "definitionPt": "Passagem, bilhete (substantivo masculino)",
      "definitionFr": "Nom masculin ; titre de transport ou petit morceau de papier officiel",
      "inflections": ["billet", "billets"],
      "ptTargets": ["passagem", "bilhete", "bilhetes", "passagens"],
      "examples": [
        { "level": "A1", "fr": "J'ai mon billet pour le train.", "pt": "Eu tenho minha passagem para o trem." },
        { "level": "A2-B1", "fr": "Où est-ce que je peux acheter un billet pour Amiens ?", "pt": "Onde eu posso comprar uma passagem para Amiens?" },
        { "level": "B2", "fr": "Pensez à valider votre billet avant de monter à bord du train.", "pt": "Lembre-se de validar sua passagem antes de subir a bordo do trem." },
        { "level": "C1-C2", "fr": "La dématérialisation des billets de train simplifie les procédures de contrôle en gare.", "pt": "A desmaterialização dos bilhetes de trem simplifica os procedimentos de controle na estação." }
      ]
    },
    {
      "term": "gare",
      "definitionPt": "Estação de trem (substantivo feminino)",
      "definitionFr": "Nom féminin ; ensemble de bâtiments et de quais où s'arrêtent les trains",
      "inflections": ["gare", "gares"],
      "ptTargets": ["estação de trem", "estação", "estações"],
      "examples": [
        { "level": "A1", "fr": "La gare est grande et moderne.", "pt": "A estação de trem é grande e moderna." },
        { "level": "A2-B1", "fr": "Nous prenons le train à la Gare du Nord à Paris.", "pt": "Nós pegamos o trem na Gare du Nord em Paris." },
        { "level": "B2", "fr": "Les gares parisiens constituent de véritables carrefours pour les voyageurs européens.", "pt": "As estações parisienses constituem verdadeiros cruzamentos para os viajantes europeus." },
        { "level": "C1-C2", "fr": "L'architecture monumentale du dix-neuvième siècle confère à cette gare un statut symbolique unique.", "pt": "A arquitetura monumental do século dezenove confere a esta estação um status simbólico único." }
      ]
    },
    {
      "term": "train",
      "definitionPt": "Trem (substantivo masculino)",
      "definitionFr": "Nom masculin ; moyen de transport ferroviaire composé de wagons",
      "inflections": ["train", "trains"],
      "ptTargets": ["trem", "trens"],
      "examples": [
        { "level": "A1", "fr": "Le train arrive à la gare.", "pt": "O trem chega à estação." },
        { "level": "A2-B1", "fr": "Nous voyageons en train pour aller à Amiens rapidement.", "pt": "Nós viajamos de trem para ir a Amiens rapidamente." },
        { "level": "B2", "fr": "Le train à grande vitesse permet de relier les villes françaises en peu de temps.", "pt": "O trem de alta velocidade permite ligar as cidades francesas em pouco tempo." },
        { "level": "C1-C2", "fr": "Le développement du réseau ferroviaire a transformé la perception des distances interrégionales.", "pt": "O desenvolvimento da rede ferroviária transformou a percepção das distâncias inter-regionais." }
      ]
    },
    {
      "term": "monter",
      "definitionPt": "Subir, entrar em um veículo (verbo)",
      "definitionFr": "Verbe ; aller vers le haut ou prendre place dans un train ou un bus",
      "inflections": ["monte", "montes", "montons", "montez", "montent", "monté", "monter"],
      "ptTargets": ["subir", "subo", "sobe", "entrar", "subido"],
      "examples": [
        { "level": "A1", "fr": "Je monte dans le train pour Amiens.", "pt": "Eu subo no trem para Amiens." },
        { "level": "A2-B1", "fr": "Les voyageurs montent dans le train avec leurs valises.", "pt": "Os viajantes sobem no trem com suas malas." },
        { "level": "B2", "fr": "Veuillez monter à bord avant la fermeture automatique des portes.", "pt": "Por favor, subam a bordo antes do fechamento automático das portas." },
        { "level": "C1-C2", "fr": "L'ordre d'embarquement invite les passagers à monter dans les wagons avec fluidité et sérénité.", "pt": "A ordem de embarque convida os passageiros a subir nos vagões com fluidez e serenidade." }
      ]
    },
    {
      "term": "au revoir",
      "definitionPt": "Adeus, até logo (expressão interjetiva)",
      "definitionFr": "Expression ; formule de politesse utilisée au moment de se quitter",
      "inflections": ["au revoir"],
      "ptTargets": ["adeus", "até logo", "tchau"],
      "examples": [
        { "level": "A1", "fr": "Je dis au revoir à mes amis.", "pt": "Eu digo adeus aos meus amigos." },
        { "level": "A2-B1", "fr": "Nous disons au revoir à Paris avec beaucoup de beaux souvenirs.", "pt": "Nós dizemos adeus a Paris com muitas lindas lembranças." },
        { "level": "B2", "fr": "Dire au revoir à une ville que l'on a tant aimée est toujours émouvant.", "pt": "Dizer adeus a uma cidade que tanto amamos é sempre emocionante." },
        { "level": "C1-C2", "fr": "Ce chaleureux au revoir marque symboliquement l'aboutissement du premier chapitre de son aventure.", "pt": "Este caloroso adeus marca simbolicamente a conclusão do primeiro capítulo de sua aventura." }
      ]
    },
    {
      "term": "voyage",
      "definitionPt": "Viagem (substantivo masculino)",
      "definitionFr": "Nom masculin ; déplacement d'une personne vers un lieu éloigné",
      "inflections": ["voyage", "voyages"],
      "ptTargets": ["viagem", "viagens", "jornada"],
      "examples": [
        { "level": "A1", "fr": "C'est un beau voyage en France.", "pt": "É uma bela viagem pela França." },
        { "level": "A2-B1", "fr": "Mon voyage commence à Paris et continue à Amiens.", "pt": "Minha viagem começa em Paris e continua em Amiens." },
        { "level": "B2", "fr": "Ce voyage linguistique permet d'explorer la diversité culturelle des régions françaises.", "pt": "Esta viagem linguística permite explorar a diversidade cultural das regiões francesas." },
        { "level": "C1-C2", "fr": "Le voyage constitue une expérience initiatique fondamentale pour l'enrichissement intellectuel et personnel.", "pt": "A viagem constitui uma experiência iniciática fundamental para o enriquecimento intelectual e pessoal." }
      ]
    },
    {
      "term": "chambre",
      "definitionPt": "Quarto (substantivo feminino)",
      "definitionFr": "Nom féminin ; pièce d'une maison ou d'un hôtel destinée au sommeil",
      "inflections": ["chambre", "chambres"],
      "ptTargets": ["quarto", "quartos", "aposento"],
      "examples": [
        { "level": "A1", "fr": "Ma chambre d'hôtel est propre et calme.", "pt": "Meu quarto de hotel é limpo e calmo." },
        { "level": "A2-B1", "fr": "Je prends mes bagages avant de quitter ma chambre.", "pt": "Eu pego minhas bagagens antes de deixar meu quarto." },
        { "level": "B2", "fr": "La chambre offre une vue agréable sur les toits parisiens.", "pt": "O quarto oferece uma vista agradável sobre os telhados parisienses." },
        { "level": "C1-C2", "fr": "L'aménagement sobre et raffiné de cette chambre illustre l'hospitalité de tradition française.", "pt": "A decoração sóbria e refinada deste quarto ilustra a hospitalidade de tradição francesa." }
      ]
    },
    {
      "term": "dernier",
      "definitionPt": "Último, última (adjetivo)",
      "definitionFr": "Adjectif ; qui vient après tous les autres dans le temps ou l'ordre",
      "inflections": ["dernier", "derniers", "dernière", "dernières"],
      "ptTargets": ["último", "última", "últimos", "últimas"],
      "examples": [
        { "level": "A1", "fr": "C'est mon dernier jour à Paris.", "pt": "É meu último dia em Paris." },
        { "level": "A2-B1", "fr": "Nous prenons le dernier train de la journée pour arriver à temps.", "pt": "Nós pegamos o último trem do dia para chegar a tempo." },
        { "level": "B2", "fr": "Pour cette dernière matinée, je souhaite profiter de l'atmosphère unique de la capitale.", "pt": "Para esta última manhã, desejo aproveitar a atmosfera única da capital." },
        { "level": "C1-C2", "fr": "Cette dernière étape parisienne scelle la fin réussie d'un séjour mémorable et instructif.", "pt": "Esta última etapa parisiense sela o fim bem-sucedido de uma estadia memorável e instrutiva." }
      ]
    },
    {
      "term": "préparer",
      "definitionPt": "Preparar, arrumar (verbo)",
      "definitionFr": "Verbe ; mettre en état, apprêter ou organiser quelque chose",
      "inflections": ["prépare", "prépares", "préparons", "préparez", "préparent", "préparé", "préparer"],
      "ptTargets": ["preparar", "preparo", "prepara", "arrumar", "preparado"],
      "examples": [
        { "level": "A1", "fr": "Je prépare ma valise ce matin.", "pt": "Eu preparo minha mala esta manhã." },
        { "level": "A2-B1", "fr": "Nous préparons notre prochain voyage pour Amiens avec enthousiasme.", "pt": "Nós preparamos nossa próxima viagem para Amiens com entusiasmo." },
        { "level": "B2", "fr": "Il est conseillé de bien préparer son itinéraire avant de prendre le train.", "pt": "É aconselhável preparar bem o seu itinerário antes de pegar o trem." },
        { "level": "C1-C2", "fr": "Préparer minutieusement un voyage permet d'appréhender sereinement la découverte de nouvelles villes.", "pt": "Preparar minuciosamente uma viagem permite encarar com serenidade a descoberta de novas cidades." }
      ]
    },
    {
      "term": "main",
      "definitionPt": "Mão (substantivo feminino)",
      "definitionFr": "Nom féminin ; partie du corps humain située au bout du bras",
      "inflections": ["main", "mains"],
      "ptTargets": ["mão", "mãos"],
      "examples": [
        { "level": "A1", "fr": "J'ai mon billet dans la main.", "pt": "Eu tenho minha passagem na mão." },
        { "level": "A2-B1", "fr": "Elle salue ses amis de la main en partant de la gare.", "pt": "Ela acena com a mão para seus amigos ao partir da estação." },
        { "level": "B2", "fr": "Gardez toujours vos documents de voyage à portée de main.", "pt": "Mantenha sempre seus documentos de viagem ao alcance da mão." },
        { "level": "C1-C2", "fr": "Ce geste chaleureux de la main symbolise un adieu empreint de gratitude et de courtoisie.", "pt": "Este gesto caloroso de mão simboliza um adeus repleto de gratidão e cortesia." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "id": 1,
      "type": "multiple_choice",
      "questionFr": "Vers quelle ville Irlan part-il en train après ses 25 leçons à Paris ?",
      "questionPt": "Para qual cidade Irlan parte de trem após suas 25 lições em Paris?",
      "options": [
        "Amiens",
        "Marseille",
        "Nice",
        "Bordeaux"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "Amiens (#2) é a segunda cidade da jornada de Irlan pelas onze cidades da França."
    },
    {
      "id": 2,
      "type": "true_false",
      "questionFr": "Vrai ou Faux : Une 'valise' est une bagagem de viagem ou mala em português.",
      "questionPt": "Verdadeiro ou Falso : Uma 'valise' é uma bagagem de viagem ou mala em português.",
      "options": ["Vrai", "Faux"],
      "correctAnswerIndex": 0,
      "explanationPt": "Sim, 'valise' é um substantivo feminino significando mala ou bagagem de viagem em português."
    },
    {
      "id": 3,
      "type": "multiple_choice",
      "questionFr": "Dans quelle gare Irlan prend-il son train pour Amiens ?",
      "questionPt": "Em qual estação de trem Irlan pega seu trem para Amiens?",
      "options": [
        "La Gare du Nord",
        "La Gare de Lyon",
        "La Gare Montparnasse",
        "La Gare d'Austerlitz"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "Irlan pega seu trem em direção ao norte da França na famosa Gare du Nord em Paris."
    },
    {
      "id": 4,
      "type": "fill_in_the_blank",
      "questionFr": "Je marche jusqu'à la gare avec mon _____ de train dans la main.",
      "questionPt": "Eu caminho até a estação com minha passagem de trem na mão.",
      "options": [
        "billet",
        "café",
        "roman",
        "immeuble"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "'Billet' significa passagem ou bilhete em português ('mon billet de train')."
    },
    {
      "id": 5,
      "type": "multiple_choice",
      "questionFr": "À qui Irlan envoie-t-il un message de remerciement selon le texte ?",
      "questionPt": "A quem Irlan envia uma mensagem de agradecimento segundo o texto?",
      "options": [
        "À Sophie, la libraire de Paris",
        "Au président de la République",
        "Au chauffeur de taxi",
        "Au chef cuisinier d'Amiens"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "Irlan envia uma mensagem de gratidão à livreira Sophie pelos seus conselhos valiosos sobre as cidades da França."
    },
    {
      "id": 6,
      "type": "true_false",
      "questionFr": "Vrai ou Faux : Le mot 'gare' est un substantivo feminino em francês que significa estação de trem.",
      "questionPt": "Verdadeiro ou Falso : A palavra 'gare' é um substantivo feminino em francês que significa estação de trem.",
      "options": ["Vrai", "Faux"],
      "correctAnswerIndex": 0,
      "explanationPt": "Sim, 'la gare' (estação de trem) é um substantivo feminino em francês."
    },
    {
      "id": 7,
      "type": "multiple_choice",
      "questionFr": "Que signifie le mot 'dernier' en portugais ?",
      "questionPt": "O que significa a palavra 'dernier' em português?",
      "options": [
        "Último / Última",
        "Primeiro / Primeira",
        "Novo / Nova",
        "Antigo / Antiga"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "'Dernier' ('dernier matin', 'dernière journée') significa último ou última em português."
    },
    {
      "id": 8,
      "type": "fill_in_the_blank",
      "questionFr": "Je dis _____ à Paris et je monte dans le train.",
      "questionPt": "Eu digo adeus a Paris e subo no trem.",
      "options": [
        "au revoir",
        "bonjour",
        "merci",
        "s'il vous plaît"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "'Au revoir' significa adeus, tchau ou até logo ('Je dis au revoir à Paris')."
    },
    {
      "id": 9,
      "type": "multiple_choice",
      "questionFr": "Où Irlan prépare-t-il sa valise le matin de son départ ?",
      "questionPt": "Onde Irlan prepara sua mala na manhã de sua partida?",
      "options": [
        "Dans sa chambre d'hôtel",
        "Dans le jardin du Luxembourg",
        "Au sommet du Sacré-Cœur",
        "Sur la terrasse d'un café"
      ],
      "correctAnswerIndex": 0,
      "explanationPt": "Segundo a primeira frase, ele prepara sua mala no seu quarto de hotel ('dans ma chambre d'hôtel')."
    },
    {
      "id": 10,
      "type": "true_false",
      "questionFr": "Vrai ou Faux : Le verbe 'monter' pode significar subir ou entrar em um trem ou veículo.",
      "questionPt": "Verdadeiro ou Falso : O verbo 'monter' pode significar subir ou entrar em um trem ou veículo.",
      "options": ["Vrai", "Faux"],
      "correctAnswerIndex": 0,
      "explanationPt": "Sim, em francês usamos o verbo 'monter' ('je monte dans le train', 'monter dans le bus') para entrar/subir em um veículo ou trem."
    }
  ]
});
