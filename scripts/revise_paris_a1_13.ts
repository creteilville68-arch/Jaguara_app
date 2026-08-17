import fs from 'fs';
import path from 'path';

// Helper to write JSON file
function writeLesson(id: number, data: any) {
  const filePath = path.join('src/data', `paris_lesson_${id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Successfully rewrote Lesson ${id} (${data.vocabularyDictionary.length} A1 terms): ${data.titlePt}`);
}

// Lesson 13: Versailles
writeLesson(13, {
  "id": "paris_lesson_13",
  "cityId": "paris",
  "domain": "Cotidiano & Viagem",
  "level": "Iniciante (A1)",
  "titleFr": "Un Jour à Versailles : Transports, Jardins et Couleurs",
  "titlePt": "Um Dia em Versalhes : Transportes, Jardins e Cores (A1)",
  "subtitleFr": "Une courte excursion au célèbre palais pour s'entraîner avec les transports, les directions et les couleurs",
  "subtitlePt": "Um passeio curto ao famoso palácio para treinar meios de transporte, direções e cores",
  "summaryPt": "Nesta Aula 13 de Paris (#1), Irlan pega um trem urbano (RER) para visitar o famoso Palácio de Versalhes. É uma excelente oportunidade para treinar o vocabulário de transportes, comprar passagens de ida e volta, e descrever as cores e formas dos grandes jardins com adjetivos simples do nível A1.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Aujourd'hui, je prends le train RER pour aller à Versailles. J'achète un billet aller-retour au guichet de la gare. Le voyage dure environ trente minutes.",
      "pt": "Hoje, eu pego o trem RER para ir a Versalhes. Eu compro uma passagem de ida e volta no guichê da estação. A viagem dura cerca de trinta minutos."
    },
    {
      "id": 2,
      "fr": "J'arrive devant le grand château. La porte est dorée et magnifique. Beaucoup de touristes attendent pour visiter les salles royales et voir les miroirs.",
      "pt": "Eu chego diante do grande palácio. A porta é dourada e magnífica. Muitos turistas esperam para visitar as salas reais e ver os espelhos."
    },
    {
      "id": 3,
      "fr": "Après la visite intérieure, je me promène dans les immenses jardins verts. Il y a de belles fontaines et des arbres bien alignés sous le soleil.",
      "pt": "Após a visita interna, eu passeio pelos imensos jardins verdes. Há belas fontes e árvores bem alinhadas sob o sol."
    },
    {
      "id": 4,
      "fr": "Je prends quelques photos pour mon carnet de voyage. C'est une journée parfaite pour pratiquer mon français et apprendre des adjetifs simples.",
      "pt": "Eu tiro algumas fotos para o meu caderno de viagem. É um dia perfeito para praticar meu francês e aprender adjetivos simples."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "château",
      "definitionPt": "Castelo, palácio (substantivo masculino)",
      "definitionFr": "Nom masculin ; grande demeure seigneuriale ou royale",
      "inflections": ["château", "châteaux"],
      "ptTargets": ["castelo", "palácio", "castelos"],
      "examples": [
        { "level": "A1", "fr": "Le château de Versailles est très grand.", "pt": "O palácio de Versalhes é muito grande." },
        { "level": "A2-B1", "fr": "Nous visitons le château et ses jardins historiques.", "pt": "Nós visitamos o castelo e seus jardins históricos." },
        { "level": "B2", "fr": "Ce château témoigne de la grandeur de la monarchie française.", "pt": "Este castelo testemunha a grandeza da monarquia francesa." },
        { "level": "C1-C2", "fr": "L'harmonie architecturale du château illustre l'apogée du style classique.", "pt": "A harmonia arquitetônica do palácio ilustra o apogeu do estilo clássico." }
      ]
    },
    {
      "term": "billet aller-retour",
      "definitionPt": "Passagem de ida e volta, bilhete de ida e volta (substantivo masculino)",
      "definitionFr": "Nom masculin ; titre de transport valable pour aller à une destination et en revenir",
      "inflections": ["billet aller-retour", "billets aller-retour"],
      "ptTargets": ["passagem de ida e volta", "bilhete de ida e volta"],
      "examples": [
        { "level": "A1", "fr": "J'achète un billet aller-retour pour Versailles.", "pt": "Eu compro uma passagem de ida e volta para Versalhes." },
        { "level": "A2-B1", "fr": "Un billet aller-retour coûte moins cher que deux billets simples.", "pt": "Uma passagem de ida e volta custa menos do que duas passagens simples." },
        { "level": "B2", "fr": "N'oubliez pas de conserver votre billet aller-retour pour le contrôle.", "pt": "Não se esqueça de guardar sua passagem de ida e volta para o controle." },
        { "level": "C1-C2", "fr": "La tarification avantageuse du billet aller-retour facilite les excursions en banlieue.", "pt": "A tarifação vantajosa do bilhete de ida e volta facilita as excursões no subúrbio." }
      ]
    },
    {
      "term": "jardin",
      "definitionPt": "Jardim (substantivo masculino)",
      "definitionFr": "Nom masculin ; espace vert aménagé avec des plantes, des fleurs et des arbres",
      "inflections": ["jardin", "jardins"],
      "ptTargets": ["jardim", "jardins"],
      "examples": [
        { "level": "A1", "fr": "Le jardin est vert et calme.", "pt": "O jardim é verde e calmo." },
        { "level": "A2-B1", "fr": "J'aime me promener dans les jardins royaux de Versailles.", "pt": "Eu gosto de passear nos jardins reais de Versalhes." },
        { "level": "B2", "fr": "La conception géométrique de ce jardin suit les règles de l'art paysager.", "pt": "A concepção geométrica deste jardim segue as regras da arte paisagística." },
        { "level": "C1-C2", "fr": "Ces jardins somptueux incarnent la maîtrise absolue de la nature par le paysagiste.", "pt": "Estes jardins suntuosos encarnam o domínio absoluto da natureza pelo paisagista." }
      ]
    },
    {
      "term": "fontaine",
      "definitionPt": "Fonte, chafariz (substantivo feminino)",
      "definitionFr": "Nom féminin ; bassin d'où jaillit de l'eau décorative",
      "inflections": ["fontaine", "fontaines"],
      "ptTargets": ["fonte", "chafariz", "fontes"],
      "examples": [
        { "level": "A1", "fr": "Il y a une belle fontaine dans le parc.", "pt": "Há uma bela fonte no parque." },
        { "level": "A2-B1", "fr": "Les touristes prennent des photos devant la fontaine.", "pt": "Os turistas tiram fotos diante da fonte." },
        { "level": "B2", "fr": "Les fontaines de Versailles sont animées par des jeux d'eau spectaculaires.", "pt": "As fontes de Versalhes são animadas por jogos de água espetaculares." },
        { "level": "C1-C2", "fr": "L'hydraulique complexe qui alimente ces fontaines relève du génie technique.", "pt": "A hidráulica complexa que alimenta estas fontes é obra de gênio técnico." }
      ]
    },
    {
      "term": "doré",
      "definitionPt": "Dourado (adjetivo masculino; feminino: dorée)",
      "definitionFr": "Adjectif ; qui a la couleur brillante de l'or",
      "inflections": ["doré", "dorée", "dorés", "dorées"],
      "ptTargets": ["dourado", "dourada", "dourados"],
      "examples": [
        { "level": "A1", "fr": "La grande porte est dorée.", "pt": "A grande porta é dourada." },
        { "level": "A2-B1", "fr": "Les détails dorés brillent sous le soleil du matin.", "pt": "Os detalhes dourados brilham sob o sol da manhã." },
        { "level": "B2", "fr": "Les ornements dorés soulignent le luxe des appartements royaux.", "pt": "Os ornamentos dourados realçam o luxo dos aposentos reais." },
        { "level": "C1-C2", "fr": "L'éclat doré des moulures reflète la somptuosité de la cour du Roi-Soleil.", "pt": "O brilho dourado das molduras reflete a suntuosidade da corte do Rei Sol." }
      ]
    },
    {
      "term": "roi",
      "definitionPt": "Rei (substantivo masculino)",
      "definitionFr": "Nom masculin ; souverain d'un royaume",
      "inflections": ["roi", "rois"],
      "ptTargets": ["rei", "reis"],
      "examples": [
        { "level": "A1", "fr": "Louis XIV est un roi célèbre.", "pt": "Luís XIV é um rei famoso." },
        { "level": "A2-B1", "fr": "Le roi vivait dans ce grand palais avec sa famille.", "pt": "O rei morava neste grande palácio com sua família." },
        { "level": "B2", "fr": "Le règne de ce roi a marqué profondément l'histoire de France.", "pt": "O reinado deste rei marcou profundamente a história da França." },
        { "level": "C1-C2", "fr": "La figure absolutiste du roi incarnait l'autorité suprême de l'État.", "pt": "A figura absolutista do rei encarnava a autoridade suprema do Estado." }
      ]
    },
    {
      "term": "reine",
      "definitionPt": "Rainha (substantivo feminino)",
      "definitionFr": "Nom féminin ; souveraine d'un royaume ou épouse du roi",
      "inflections": ["reine", "reines"],
      "ptTargets": ["rainha", "rainhas"],
      "examples": [
        { "level": "A1", "fr": "La reine avait un joli jardin.", "pt": "A rainha tinha um lindo jardim." },
        { "level": "A2-B1", "fr": "Les appartements de la reine sont très décorés.", "pt": "Os aposentos da rainha são muito decorados." },
        { "level": "B2", "fr": "L'histoire de la reine Marie-Antoinette fascine les visiteurs du monde entier.", "pt": "A história da rainha Maria Antonieta fascina os visitantes do mundo inteiro." },
        { "level": "C1-C2", "fr": "L'influence culturelle et artistique de la reine transforma l'étiquette de la cour.", "pt": "A influência cultural e artística da rainha transformou a etiqueta da corte." }
      ]
    },
    {
      "term": "miroir",
      "definitionPt": "Espelho (substantivo masculino)",
      "definitionFr": "Nom masculin ; surface polie qui reflète l'image",
      "inflections": ["miroir", "miroirs"],
      "ptTargets": ["espelho", "espelhos"],
      "examples": [
        { "level": "A1", "fr": "Je regarde le grand miroir.", "pt": "Eu olhe para o grande espelho." },
        { "level": "A2-B1", "fr": "La galerie des miroirs est la pièce la plus célèbre du château.", "pt": "A galeria dos espelhos é o cômodo mais famoso do castelo." },
        { "level": "B2", "fr": "Les miroirs reflètent la lumière du jardin à travers les fenêtres.", "pt": "Os espelhos refletem a luz do jardim através das janelas." },
        { "level": "C1-C2", "fr": "La disposition symétrique des miroirs créait une illusion d'infini architectural.", "pt": "A disposição simétrica dos espelhos criava uma ilusão de infinito arquitetônico." }
      ]
    },
    {
      "term": "arbre",
      "definitionPt": "Árvore (substantivo masculino)",
      "definitionFr": "Nom masculin ; grande plante ligneuse",
      "inflections": ["arbre", "arbres"],
      "ptTargets": ["árvore", "árvores"],
      "examples": [
        { "level": "A1", "fr": "Il y a un grand arbre vert.", "pt": "Há uma grande árvore verde." },
        { "level": "A2-B1", "fr": "Les arbres du parc donnent de l'ombre en été.", "pt": "As árvores do parque dão sombra no verão." },
        { "level": "B2", "fr": "Les jardiniers taillent les arbres pour conserver des formes géométriques.", "pt": "Os jardineiros podam as árvores para conservar formas geométricas." },
        { "level": "C1-C2", "fr": "L'alignement rigoureux des arbres séculaires structure la perspective du domaine.", "pt": "O alinhamento rigoroso das árvores seculares estrutura a perspectiva da propriedade." }
      ]
    },
    {
      "term": "soleil",
      "definitionPt": "Sol (substantivo masculino)",
      "definitionFr": "Nom masculin ; astre qui éclaire et chauffe la Terre",
      "inflections": ["soleil", "soleils"],
      "ptTargets": ["sol"],
      "examples": [
        { "level": "A1", "fr": "Le soleil brille aujourd'hui.", "pt": "O sol brilha hoje." },
        { "level": "A2-B1", "fr": "Nous nous promenons dans les jardins sous le soleil.", "pt": "Nós passeamos nos jardins sob o sol." },
        { "level": "B2", "fr": "Louis XIV avait choisi le soleil comme symbole de son pouvoir royal.", "pt": "Luís XIV havia escolhido o sol como símbolo de seu poder real." },
        { "level": "C1-C2", "fr": "L'éclat rayonnant du soleil au couchant magnifie la perspective du grand canal.", "pt": "O brilho radiante do sol poente magnifica a perspectiva do grande canal." }
      ]
    },
    {
      "term": "visiter",
      "definitionPt": "Visitar (verbo)",
      "definitionFr": "Verbe ; aller voir un lieu, un monument ou une personne",
      "inflections": ["visite", "visites", "visitons", "visitez", "visitent", "visité", "visiter"],
      "ptTargets": ["visitar", "visito", "visita"],
      "examples": [
        { "level": "A1", "fr": "Je veux visiter le château.", "pt": "Eu quero visitar o castelo." },
        { "level": "A2-B1", "fr": "Nous allons visiter les salles principales cet après-midi.", "pt": "Nós vamos visitar as salas principais esta tarde." },
        { "level": "B2", "fr": "Pour visiter tranquillement le domaine, il est préférable de réserver à l'avance.", "pt": "Para visitar tranquilamente o parque, é preferível reservar com antecedência." },
        { "level": "C1-C2", "fr": "Visiter ces lieux permet de mieux appréhender le raffinement de l'époque classique.", "pt": "Visitar estes locais permite compreender melhor o refinamento da época clássica." }
      ]
    },
    {
      "term": "journée",
      "definitionPt": "Dia, duração de um dia (substantivo feminino)",
      "definitionFr": "Nom féminin ; espace de temps qui s'écoule du matin au soir",
      "inflections": ["journée", "journées"],
      "ptTargets": ["dia", "duração do dia", "jornada"],
      "examples": [
        { "level": "A1", "fr": "C'est une belle journée à Versailles.", "pt": "É um belo dia em Versalhes." },
        { "level": "A2-B1", "fr": "Nous passons toute la journée à explorer le parc.", "pt": "Nós passamos o dia inteiro explorando o parque." },
        { "level": "B2", "fr": "Cette journée ensoleillée nous a permis de découvrir tous les bosquets.", "pt": "Este dia ensolarado nos permitiu descobrir todos os bosques." },
        { "level": "C1-C2", "fr": "Au terme d'une journée riche en découvertes, le voyageur regagna Paris émerveillé.", "pt": "Ao final de um dia rico em descobertas, o viajante regressou a Paris maravilhado." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "question": "Como Irlan viaja de Paris até o Palácio de Versalhes nesta lição?",
      "options": [
        "De avião a partir do aeroporto Charles de Gaulle.",
        "De trem RER com um bilhete de ida e volta (billet aller-retour).",
        "De barco pelo rio Sena."
      ],
      "correctIndex": 1,
      "explanation": "Irlan pega o trem RER na estação e compra uma passagem de ida e volta para chegar a Versalhes em cerca de trinta minutos."
    },
    {
      "question": "Como é descrita a porta principal de entrada do palácio no texto A1?",
      "options": [
        "É uma porta dourada e magnífica (dorée et magnifique).",
        "É uma porta de vidro azul.",
        "É uma porta pequena de madeira preta."
      ],
      "correctIndex": 0,
      "explanation": "No texto A1, Irlan observa que a grande porta do castelo é dourada e magnífica."
    },
    {
      "question": "O que Irlan faz depois de visitar o interior do palácio e ver os espelhos?",
      "options": [
        "Ele volta imediatamente para o hotel para dormir.",
        "Ele passeia pelos imensos jardins verdes com fontes e árvores.",
        "Ele vai ao cinema no centro de Paris."
      ],
      "correctIndex": 1,
      "explanation": "Após a visita interna, Irlan passeia pelos imensos jardins verdes, admirando as belas fontes e árvores bem alinhadas."
    }
  ]
});
