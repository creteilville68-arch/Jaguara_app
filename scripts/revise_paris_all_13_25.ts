import fs from 'fs';
import path from 'path';

function saveLesson(lesson: any) {
  const filePath = path.join('src/data', `${lesson.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(lesson, null, 2), 'utf8');
  console.log(`[OK] Revised ${lesson.id}: ${lesson.vocabularyDictionary.length} terms | Level: ${lesson.level} | Title: ${lesson.titlePt}`);
}

// Lesson 13
saveLesson({
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
      "fr": "Je prends quelques photos pour mon carnet de voyage. C'est une journée parfaite pour pratiquer mon français et apprendre des adjectifs simples.",
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
      "definitionPt": "Passagem de ida e volta (substantivo masculino)",
      "definitionFr": "Nom masculin ; titre de transport valable pour aller à une destination et en revenir",
      "inflections": ["billet aller-retour", "billets aller-retour"],
      "ptTargets": ["passagem de ida e volta", "bilhete de ida e volta"],
      "examples": [
        { "level": "A1", "fr": "J'achète un billet aller-retour pour Versailles.", "pt": "Eu compro uma passagem de ida e volta para Versalhes." },
        { "level": "A2-B1", "fr": "Un billet aller-retour coûte moins cher que deux billets simples.", "pt": "Uma passagem de ida e volta custa menos do que duas passagens simples." },
        { "level": "B2", "fr": "N'oubliez pas de conserver votre billet aller-retour pour le contrôle.", "pt": "Não se esqueça de guardar sua passagem de ida e volta para o controle." },
        { "level": "C1-C2", "fr": "La tarification avantageuse du billet aller-retour facilite les excursions.", "pt": "A tarifação vantajosa do bilhete de ida e volta facilita as excursões." }
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
        { "level": "C1-C2", "fr": "Ces jardins somptueux incarnent la maîtrise de la nature par le paysagiste.", "pt": "Estes jardins suntuosos encarnam o domínio da natureza pelo paisagista." }
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
        { "level": "B2", "fr": "Les fontaines de Versailles sont animées par des jeux d'eau.", "pt": "As fontes de Versalhes são animadas por jogos de água." },
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
        { "level": "B2", "fr": "L'histoire de la reine Marie-Antoinette fascine les visiteurs.", "pt": "A história da rainha Maria Antonieta fascina os visitantes." },
        { "level": "C1-C2", "fr": "L'influence culturelle et artistique de la reine transforma l'étiquette.", "pt": "A influência cultural e artística da rainha transformou a etiqueta." }
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
        { "level": "C1-C2", "fr": "L'éclat rayonnant du soleil au couchant magnifie la perspective du canal.", "pt": "O brilho radiante do sol poente magnifica a perspectiva do canal." }
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

// Lesson 14: Viver em Paris - Mercados de Bairro, Frutas e Legumes (A1)
saveLesson({
  "id": "paris_lesson_14",
  "cityId": "paris",
  "domain": "Cotidiano & Viagem",
  "level": "Iniciante (A1)",
  "titleFr": "Vivre à Paris : Marchés de Quartier, Fruits et Légumes",
  "titlePt": "Viver em Paris : Mercados de Bairro, Frutas e Legumes (A1)",
  "subtitleFr": "Comment acheter des fruits, des légumes et du fromage au marché avec des phrases simples",
  "subtitlePt": "Como comprar frutas, legumes e queijos na feira de rua usando frases simples",
  "summaryPt": "Nesta Aula 14 de Paris (#1), Irlan explora uma feira de rua no seu bairro parisiense. O objetivo prático é dominar o vocabulário básico de compras de alimentos frescos: perguntar os preços dos quilos de maçã, tomate e queijo com frases claras de nível A1.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Ce matin, je vais au marché du quartier pour acheter des fruits et des légumes frais. Le soleil brille sur les petits bancs.",
      "pt": "Esta manhã, eu vou ao mercado do bairro para comprar frutas e legumes frescos. O sol brilha nas pequenas bancas."
    },
    {
      "id": 2,
      "fr": "Je demande au vendeur : « Bonjour monsieur, combien coûtent les pommes et les tomates, s'il vous plaît ? » Il répond avec un grand sourire.",
      "pt": "Eu pergunto ao vendedor: « Bom dia senhor, quanto custam as maçãs e os tomates, por favor ? » Ele responde com um grande sorriso."
    },
    {
      "id": 3,
      "fr": "J'achète un kilo de pommes rouges et un petit fromage français. Je mets tout dans mon sac en tissu.",
      "pt": "Eu compro um quilo de maçãs vermelhas e um pequeno queijo francês. Eu coloco tudo na minha sacola de tecido."
    },
    {
      "id": 4,
      "fr": "Je paie en espèces et je dis « merci beaucoup, bonne journée ! » Viver em Paris é simples quando falamos francês.",
      "pt": "Eu pago em dinheiro e digo « muito obrigado, tenha um bom dia ! » Viver em Paris é simples quando falamos francês."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "marché",
      "definitionPt": "Mercado, feira ao ar livre (substantivo masculino)",
      "definitionFr": "Nom masculin ; lieu public où l'on vend des produits alimentaires en plein air",
      "inflections": ["marché", "marchés"],
      "ptTargets": ["mercado", "feira", "mercados"],
      "examples": [
        { "level": "A1", "fr": "Je vais au marché ce matin.", "pt": "Eu vou ao mercado esta manhã." },
        { "level": "A2-B1", "fr": "Le marché du quartier est ouvert le mardi et le samedi.", "pt": "A feira do bairro fica aberta na terça e no sábado." },
        { "level": "B2", "fr": "Les Parisiens apprécient l'ambiance conviviale des marchés traditionnels.", "pt": "Os parisienses apreciam a atmosfera acolhedora dos mercados tradicionais." },
        { "level": "C1-C2", "fr": "L'effervescence matinale des marchés reflète l'attachement aux circuits courts et au terroir.", "pt": "A efervescência matinal dos mercados reflete o apego às cadeias curtas e ao produto artesanal." }
      ]
    },
    {
      "term": "quartier",
      "definitionPt": "Bairro (substantivo masculino)",
      "definitionFr": "Nom masculin ; division d'une ville",
      "inflections": ["quartier", "quartiers"],
      "ptTargets": ["bairro", "bairros"],
      "examples": [
        { "level": "A1", "fr": "J'habite dans un joli quartier.", "pt": "Eu moro em um lindo bairro." },
        { "level": "A2-B1", "fr": "Chaque quartier de Paris a sa propre atmosphère.", "pt": "Cada bairro de Paris tem sua própria atmosfera." },
        { "level": "B2", "fr": "La vie de quartier en France s'organise souvent autour de la boulangerie et de la place.", "pt": "A vida de bairro na França frequentemente se organiza ao redor da padaria e da praça." },
        { "level": "C1-C2", "fr": "L'identité urbaine de la capitale s'articule à travers la diversité de ses quartiers historiques.", "pt": "A identidade urbana da capital se articula através da diversidade de seus bairros históricos." }
      ]
    },
    {
      "term": "fruits",
      "definitionPt": "Frutas (substantivo masculino plural)",
      "definitionFr": "Nom masculin pluriel ; aliments sucrés produits par les arbres fruitiers",
      "inflections": ["fruit", "fruits"],
      "ptTargets": ["frutas", "fruta"],
      "examples": [
        { "level": "A1", "fr": "J'achète des fruits frais.", "pt": "Eu compro frutas frescas." },
        { "level": "A2-B1", "fr": "Au petit-déjeuner, je mange toujours des fruits de saison.", "pt": "No café da manhã, eu sempre como frutas da estação." },
        { "level": "B2", "fr": "Les fruits proposés sur les étals sont récoltés à maturité parfaite.", "pt": "As frutas oferecidas nas bancas são colhidas no ponto perfeito de maturação." },
        { "level": "C1-C2", "fr": "La diversité des fruits locaux témoigne de la richesse agronomique des régions françaises.", "pt": "A diversidade das frutas locais testemunha a riqueza agronômica das regiões francesas." }
      ]
    },
    {
      "term": "légumes",
      "definitionPt": "Legumes, verduras (substantivo masculino plural)",
      "definitionFr": "Nom masculin pluriel ; plantes potagères qui servent d'aliment",
      "inflections": ["légume", "légumes"],
      "ptTargets": ["legumes", "verduras"],
      "examples": [
        { "level": "A1", "fr": "Je cuisine avec des légumes verts.", "pt": "Eu cozinho com legumes verdes." },
        { "level": "A2-B1", "fr": "Il faut manger beaucoup de légumes pour être en bonne santé.", "pt": "É preciso comer muitos legumes para ter uma boa saúde." },
        { "level": "B2", "fr": "Les cuisiniers parisiens sélectionnent leurs légumes directement auprès des producteurs.", "pt": "Os cozinheiros parisienses selecionam seus legumes diretamente dos produtores." },
        { "level": "C1-C2", "fr": "La mise en valeur des légumes anciens constitue l'un des piliers de la gastronomie contemporaine.", "pt": "A valorização dos legumes antigos constitui um dos pilares da gastronomia contemporânea." }
      ]
    },
    {
      "term": "vendeur",
      "definitionPt": "Vendedor (substantivo masculino; feminino: vendeuse)",
      "definitionFr": "Nom masculin ; personne dont le métier est de vendre des marchandises",
      "inflections": ["vendeur", "vendeurs", "vendeuse", "vendeuses"],
      "ptTargets": ["vendedor", "vendedora", "vendedores"],
      "examples": [
        { "level": "A1", "fr": "Le vendeur est très sympathique.", "pt": "O vendedor é muito simpático." },
        { "level": "A2-B1", "fr": "Je demande le prix au vendeur du marché.", "pt": "Eu pergunto o preço ao vendedor do mercado." },
        { "level": "B2", "fr": "Ce vendeur de fromages conseille ses clients avec beaucoup de passion.", "pt": "Este vendedor de queijos aconselha seus clientes com muita paixão." },
        { "level": "C1-C2", "fr": "L'expertise du vendeur confère au commerce de proximité un rôle de conseil irremplaçable.", "pt": "A expertise do vendedor confere ao comércio de vizinhança um papel de conselho insubstituível." }
      ]
    },
    {
      "term": "prix",
      "definitionPt": "Preço, valor monetário (substantivo masculino)",
      "definitionFr": "Nom masculin ; valeur d'un objet en monnaie",
      "inflections": ["prix"],
      "ptTargets": ["preço", "valor", "preços"],
      "examples": [
        { "level": "A1", "fr": "Quel est le prix, s'il vous plaît ?", "pt": "Qual é o preço, por favor?" },
        { "level": "A2-B1", "fr": "Les prix des fruits au marché sont très raisonnables.", "pt": "Os preços das frutas no mercado são muito razoáveis." },
        { "level": "B2", "fr": "Le rapport qualité-prix de ces produits locaux est excellent.", "pt": "A relação custo-benefício destes produtos locais é excelente." },
        { "level": "C1-C2", "fr": "La transparence des prix affichés garantit une relation de confiance entre marchands et clients.", "pt": "A transparência dos preços expostos garante uma relação de confiança entre comerciantes e clientes." }
      ]
    },
    {
      "term": "pomme",
      "definitionPt": "Maçã (substantivo feminino)",
      "definitionFr": "Nom féminin ; fruit rond à chair croquante et sucrée",
      "inflections": ["pomme", "pommes"],
      "ptTargets": ["maçã", "maçãs"],
      "examples": [
        { "level": "A1", "fr": "Je mange une pomme rouge.", "pt": "Eu como uma maçã vermelha." },
        { "level": "A2-B1", "fr": "J'achète un kilo de pommes pour faire une tarte.", "pt": "Eu compro um quilo de maçãs para fazer uma torta." },
        { "level": "B2", "fr": "La Normandie est réputée pour ses nombreuses variétés de pommes.", "pt": "A Normandia é famosa por suas numerosas variedades de maçãs." },
        { "level": "C1-C2", "fr": "L'aromatique acidulée de cette pomme ancienne enrichit subtilement les desserts traditionnels.", "pt": "A aromática acidez desta maçã antiga enriquece sutilmente as sobremesas tradicionais." }
      ]
    },
    {
      "term": "tomate",
      "definitionPt": "Tomate (substantivo feminino em francês)",
      "definitionFr": "Nom féminin ; fruit rouge utilisé en légume dans la cuisine",
      "inflections": ["tomate", "tomates"],
      "ptTargets": ["tomate", "tomates"],
      "examples": [
        { "level": "A1", "fr": "Les tomates sont rouges et fraîches.", "pt": "Os tomates são vermelhos e frescos." },
        { "level": "A2-B1", "fr": "Je prépare une salade avec des tomates et des olives.", "pt": "Eu preparo uma salada com tomates e azeitonas." },
        { "level": "B2", "fr": "En été, les tomates du marché ont un goût sucré incomparable.", "pt": "No verão, os tomates do mercado têm um sabor doce incomparável." },
        { "level": "C1-C2", "fr": "La culture biologique des tomates en pleine terre garantit des qualités gustatives exceptionnelles.", "pt": "O cultivo biológico dos tomates no solo garante qualidades gustativas excepcionais." }
      ]
    },
    {
      "term": "fromage",
      "definitionPt": "Queijo (substantivo masculino)",
      "definitionFr": "Nom masculin ; aliment obtenu à partir du lait coagulé",
      "inflections": ["fromage", "fromages"],
      "ptTargets": ["queijo", "queijos"],
      "examples": [
        { "level": "A1", "fr": "J'aime le fromage français.", "pt": "Eu gosto do queijo francês." },
        { "level": "A2-B1", "fr": "En France, on mange souvent du fromage après le plat principal.", "pt": "Na França, come-se frequentemente queijo após o prato principal." },
        { "level": "B2", "fr": "Il existe plus de mille variétés de fromages en France.", "pt": "Existem mais de mil variedades de queijos na França." },
        { "level": "C1-C2", "fr": "L'affinage d'un grand fromage réclame une précision hygrométrique et un savoir-faire ancestral.", "pt": "A cura de um grande queijo exige uma precisão higrométrica e uma sabedoria ancestral." }
      ]
    },
    {
      "term": "acheter",
      "definitionPt": "Comprar (verbo)",
      "definitionFr": "Verbe ; acquérir un bien en échange d'argent",
      "inflections": ["achète", "achètes", "achetons", "achetez", "achètent", "acheté", "acheter"],
      "ptTargets": ["comprar", "compro", "compra", "compramos"],
      "examples": [
        { "level": "A1", "fr": "Je veux acheter des fruits.", "pt": "Eu quero comprar frutas." },
        { "level": "A2-B1", "fr": "Nous allons acheter des provisions pour le pique-nique.", "pt": "Nós vamos comprar provisões para o piquenique." },
        { "level": "B2", "fr": "Les habitants préfèrent acheter leurs aliments frais directement aux paysans.", "pt": "Os habitantes preferem comprar seus alimentos frescos diretamente dos camponeses." },
        { "level": "C1-C2", "fr": "Acheter responsablement s'inscrit dans une démarche éthique en faveur de l'artisanat local.", "pt": "Comprar de forma responsável insere-se em uma abordagem ética em favor do artesanato local." }
      ]
    },
    {
      "term": "sac",
      "definitionPt": "Sacola, bolsa, saco (substantivo masculino)",
      "definitionFr": "Nom masculin ; contenant souple servant à transporter des objets",
      "inflections": ["sac", "sacs"],
      "ptTargets": ["sacola", "saco", "bolsa"],
      "examples": [
        { "level": "A1", "fr": "Je mets mes fruits dans mon sac.", "pt": "Eu coloco minhas frutas na minha sacola." },
        { "level": "A2-B1", "fr": "J'ai toujours un sac en tissu quand je fais les courses.", "pt": "Eu sempre tenho uma sacola de tecido quando faço compras." },
        { "level": "B2", "fr": "Les commerçants ne distribuent plus de sacs en plastique à la caisse.", "pt": "Os comerciantes não distribuem mais sacolas plásticas no caixa." },
        { "level": "C1-C2", "fr": "L'usage généralisé du sac réutilisable participe activement à la préservation environnementale.", "pt": "O uso generalizado da sacola reutilizável participa ativamente da preservação ambiental." }
      ]
    },
    {
      "term": "frais",
      "definitionPt": "Fresco, frescos (adjetivo masculino; feminino: fraîche)",
      "definitionFr": "Adjectif ; qui vient d'être produit, cueilli ou récolté",
      "inflections": ["frais", "fraîche", "fraîches"],
      "ptTargets": ["fresco", "frescos", "fresca", "frescas"],
      "examples": [
        { "level": "A1", "fr": "Les légumes sont très frais.", "pt": "Os legumes são muito frescos." },
        { "level": "A2-B1", "fr": "Au marché, on trouve toujours du pain frais et du fromage.", "pt": "No mercado, encontra-se sempre pão fresco e queijo." },
        { "level": "B2", "fr": "La qualité d'un plat dépend avant tout de l'utilisation de produits frais.", "pt": "A qualidade de um prato depende acima de tudo do uso de produtos frescos." },
        { "level": "C1-C2", "fr": "La fraîcheur incomparable des denrées de saison exalte la finesse du patrimoine gastronomique.", "pt": "O frescor incomparável dos mantimentos da estação exalta a delicadeza do patrimônio gastronômico." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "question": "Onde Irlan vai esta manhã na Aula 14 de Paris?",
      "options": [
        "A uma loja de roupas no shopping.",
        "Ao mercado do bairro (marché du quartier) para comprar frutas e legumes frescos.",
        "A um hospital para fazer uma consulta."
      ],
      "correctIndex": 1,
      "explanation": "Irlan vai ao mercado de rua do seu bairro para comprar frutas e legumes frescos do nível A1."
    },
    {
      "question": "O que Irlan compra com o vendedor simpático do mercado?",
      "options": [
        "Um quilo de maçãs vermelhas (pommes) e um pequeno queijo francês (fromage).",
        "Uma televisão moderna e um rádio.",
        "Três quilos de peixe assado e um refrigerante."
      ],
      "correctIndex": 0,
      "explanation": "Irlan pede um quilo de maçãs vermelhas e compra um pequeno queijo francês, colocando tudo em sua sacola."
    },
    {
      "question": "Como se diz 'Quanto custam as maçãs, por favor?' em francês simples de A1?",
      "options": [
        "« Combien coûtent les pommes, s'il vous plaît ? »",
        "« Où est la station de métro ? »",
        "« Je voudrais une chambre à l'hôtel. »"
      ],
      "correctIndex": 0,
      "explanation": "Para perguntar o preço de itens no plural no nível A1, usa-se « Combien coûtent... s'il vous plaît ? »"
    }
  ]
});
