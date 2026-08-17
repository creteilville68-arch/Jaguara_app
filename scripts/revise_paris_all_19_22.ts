import fs from 'fs';
import path from 'path';

function saveLesson(lesson: any) {
  const filePath = path.join('src/data', `${lesson.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(lesson, null, 2), 'utf8');
  console.log(`[OK] Revised ${lesson.id}: ${lesson.vocabularyDictionary.length} terms | Level: ${lesson.level} | Title: ${lesson.titlePt}`);
}

// Lesson 19: Montmartre de Dia
saveLesson({
  "id": "paris_lesson_19",
  "cityId": "paris",
  "domain": "Cultura & Arte",
  "level": "Iniciante (A1)",
  "titleFr": "Montmartre de Jour : Portraits, Visages et Descriptions Simples",
  "titlePt": "Montmartre de Dia : Retratos, Rostos e Descrições Simples (A1)",
  "subtitleFr": "Comment décrire des visages, des yeux et des expressions avec les peintres de la Place du Tertre",
  "subtitlePt": "Como descrever rostos, olhos e expressões com os pintores da Place du Tertre",
  "summaryPt": "Nesta Aula 19 de Paris (#1), Irlan sobe a colina de Montmartre durante o dia para visitar a animada Place du Tertre. Ele observa os artistas plásticos pintando retratos ao ar livre e aprende vocabulário prático de nível A1 para descrever o rosto, os olhos, o sorriso e as cores, treinando adjetivos de descrição física.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Aujourd'hui, je vais sur la colline de Montmartre pour voir la célèbre Place du Tertre sous le soleil.",
      "pt": "Hoje, eu vou à colina de Montmartre para ver a famosa Place du Tertre sob o sol."
    },
    {
      "id": 2,
      "fr": "Beaucoup d'artistes et de peintres font des portraits. Ils dessinent le visage, les yeux et le sourire des visiteurs.",
      "pt": "Muitos artistas e pintores fazem retratos. Eles desenham o rosto, os olhos e o sorriso dos visitantes."
    },
    {
      "id": 3,
      "fr": "Je regarde un peintre qui utilise du blanc et du bleu pour faire un beau dessin. C'est très impressionnant.",
      "pt": "Eu olhe para um pintor que usa branco e azul para fazer um lindo desenho. É muito impressionante."
    },
    {
      "id": 4,
      "fr": "Montmartre est un quartier magique. C'est le lieu parfait pour apprendre à décrire une personne en français.",
      "pt": "Montmartre é um bairro mágico. É o lugar perfeito para aprender a descrever uma pessoa em francês."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "colline",
      "definitionPt": "Colina, morro (substantivo feminino)",
      "definitionFr": "Nom féminin ; petite élévation de terrain de forme arrondie",
      "inflections": ["colline", "collines"],
      "ptTargets": ["colina", "morro", "colinas"],
      "examples": [
        { "level": "A1", "fr": "La colline est haute et verte.", "pt": "A colina é alta e verde." },
        { "level": "A2-B1", "fr": "Nous montons sur la colline de Montmartre pour voir la vue.", "pt": "Nós subimos na colina de Montmartre para ver a vista." },
        { "level": "B2", "fr": "Depuis le sommet de la colline, on découvre un panorama exceptionnel sur Paris.", "pt": "Do topo da colina, descobre-se um panorama excepcional sobre Paris." },
        { "level": "C1-C2", "fr": "La topographie escarpée de la colline confère à ce faubourg un charme pittoresque.", "pt": "A topografia íngreme da colina confere a este bairro um charme pitoresco." }
      ]
    },
    {
      "term": "peintre",
      "definitionPt": "Pintor, pintora (substantivo masculino ou feminino)",
      "definitionFr": "Nom ; artiste qui pratique l'art de la peinture",
      "inflections": ["peintre", "peintres"],
      "ptTargets": ["pintor", "pintora", "pintores"],
      "examples": [
        { "level": "A1", "fr": "Le peintre fait un beau portrait.", "pt": "O pintor faz um belo retrato." },
        { "level": "A2-B1", "fr": "Les peintres de Montmartre travaillent souvent en plein air.", "pt": "Os pintores de Montmartre trabalham frequentemente ao ar livre." },
        { "level": "B2", "fr": "Ce peintre célèbre a habité à Montmartre pendant de nombreuses années.", "pt": "Este pintor famoso morou em Montmartre por muitos anos." },
        { "level": "C1-C2", "fr": "La touche libre et lumineuse du peintre traduit l'effervescence artistique de l'époque.", "pt": "A pincelada livre e luminosa do pintor traduz a efervescência artística da época." }
      ]
    },
    {
      "term": "dessin",
      "definitionPt": "Desenho, ilustração (substantivo masculino)",
      "definitionFr": "Nom masculin ; représentation graphique sur une surface",
      "inflections": ["dessin", "dessins"],
      "ptTargets": ["desenho", "desenhos", "ilustração"],
      "examples": [
        { "level": "A1", "fr": "C'est un joli dessin.", "pt": "É um lindo desenho." },
        { "level": "A2-B1", "fr": "L'artiste réalise un dessin au crayon en dix minutes.", "pt": "O artista realiza um desenho a lápis em dez minutos." },
        { "level": "B2", "fr": "La précision des traits de ce dessin témoigne d'une grande maîtrise technique.", "pt": "A precisão dos traços deste desenho testemunha um grande domínio técnico." },
        { "level": "C1-C2", "fr": "L'expressivité de ce dessin préparatoire révèle la spontanéité créative du maître.", "pt": "A expressividade deste desenho preparatório revela a espontaneidade criativa do mestre." }
      ]
    },
    {
      "term": "portrait",
      "definitionPt": "Retrato (substantivo masculino)",
      "definitionFr": "Nom masculin ; représentation du visage d'une personne",
      "inflections": ["portrait", "portraits"],
      "ptTargets": ["retrato", "retratos"],
      "examples": [
        { "level": "A1", "fr": "Je regarde un portrait sur la place.", "pt": "Eu olhe para um retrato na praça." },
        { "level": "A2-B1", "fr": "Beaucoup de touristes demandent un portrait en souvenir de Paris.", "pt": "Muitos turistas pedem um retrato como lembrança de Paris." },
        { "level": "B2", "fr": "Le portraitiste capte habilement l'expression et le caractère de son modèle.", "pt": "O retratista capta habilmente a expressão e o caráter de seu modelo." },
        { "level": "C1-C2", "fr": "La pénétration psychologique de ce portrait en fait un chef-d'œuvre du genre.", "pt": "A penetração psicológica deste retrato faz dele uma obra-prima do gênero." }
      ]
    },
    {
      "term": "visage",
      "definitionPt": "Rosto, face (substantivo masculino)",
      "definitionFr": "Nom masculin ; partie antérieure de la tête humaine",
      "inflections": ["visage", "visages"],
      "ptTargets": ["rosto", "face", "rostos"],
      "examples": [
        { "level": "A1", "fr": "Il a un visage sympathique.", "pt": "Ele tem um rosto simpático." },
        { "level": "A2-B1", "fr": "L'artiste dessine le visage avec beaucoup de détails.", "pt": "O artista desenha o rosto com muitos detalhes." },
        { "level": "B2", "fr": "La lumière du soleil du matin éclaire doucement le visage du modèle.", "pt": "A luz do sol da manhã ilumina suavemente o rosto do modelo." },
        { "level": "C1-C2", "fr": "L'harmonie des proportions du visage confère au portrait une grâce intemporelle.", "pt": "A harmonia das proporções do rosto confere ao retrato uma graça atemporal." }
      ]
    },
    {
      "term": "yeux",
      "definitionPt": "Olhos (substantivo masculino plural; singular: œil)",
      "definitionFr": "Nom masculin pluriel ; organes de la vision (singulier : œil)",
      "inflections": ["œil", "yeux"],
      "ptTargets": ["olhos", "olho"],
      "examples": [
        { "level": "A1", "fr": "Elle a de grands yeux bleus.", "pt": "Ela tem grandes olhos azuis." },
        { "level": "A2-B1", "fr": "Les yeux sont la partie la plus expressive du portrait.", "pt": "Os olhos são a parte mais expressiva do retrato." },
        { "level": "B2", "fr": "Le peintre accorde une attention particulière à l'éclat des yeux.", "pt": "O pintor dedica uma atenção especial ao brilho dos olhos." },
        { "level": "C1-C2", "fr": "La profondeur du regard et la vivacité des yeux transmettent l'émotion du sujet.", "pt": "A profundidade do olhar e a vivacidade dos olhos transmitem a emoção do sujeito." }
      ]
    },
    {
      "term": "sourire",
      "definitionPt": "Sorriso (substantivo masculino) / Sorrir (verbo)",
      "definitionFr": "Nom masculin ; expression de joie sur le visage par un mouvement des lèvres",
      "inflections": ["sourire", "sourires"],
      "ptTargets": ["sorriso", "sorrir", "sorrisos"],
      "examples": [
        { "level": "A1", "fr": "Il a un beau sourire.", "pt": "Ele tem um belo sorriso." },
        { "level": "A2-B1", "fr": "Le sourire du modèle rend le dessin très chaleureux.", "pt": "O sorriso do modelo torna o desenho muito acolhedor." },
        { "level": "B2", "fr": "Un simple sourire facilite souvent le contact avec les commerçants à Paris.", "pt": "Um simples sorriso facilita muitas vezes o contato com os comerciantes em Paris." },
        { "level": "C1-C2", "fr": "La subtilité de ce sourire esquissé évoque le mystère des portraits de la Renaissance.", "pt": "A sutileza deste sorriso esboçado evoca o mistério dos retratos da Renascença." }
      ]
    },
    {
      "term": "blanc",
      "definitionPt": "Branco, branca (adjetivo masculino; feminino: blanche)",
      "definitionFr": "Adjectif ; de la couleur de la neige ou du lait",
      "inflections": ["blanc", "blanche", "blancs", "blanches"],
      "ptTargets": ["branco", "branca", "brancos", "brancas"],
      "examples": [
        { "level": "A1", "fr": "Le papier est blanc.", "pt": "O papel é branco." },
        { "level": "A2-B1", "fr": "La basilique blanche du Sacré-Cœur brille sous le soleil.", "pt": "A basílica branca do Sacré-Cœur brilha sob o sol." },
        { "level": "B2", "fr": "L'artiste utilise le blanc pour donner de la lumière à son tableau.", "pt": "O artista usa o branco para dar luz ao seu quadro." },
        { "level": "C1-C2", "fr": "L'éclat immaculé de la pierre blanche confère au monument son identité visuelle.", "pt": "O brilho imaculado da pedra branca confere ao monumento sua identidade visual." }
      ]
    },
    {
      "term": "place",
      "definitionPt": "Praça, lugar (substantivo feminino)",
      "definitionFr": "Nom féminin ; espace public découvert entouré de bâtiments",
      "inflections": ["place", "places"],
      "ptTargets": ["praça", "lugar", "praças"],
      "examples": [
        { "level": "A1", "fr": "La place est animée aujourd'hui.", "pt": "A praça está animada hoje." },
        { "level": "A2-B1", "fr": "La Place du Tertre est le point de rencontre des peintres de Montmartre.", "pt": "A Place du Tertre é o ponto de encontro dos pintores de Montmartre." },
        { "level": "B2", "fr": "Les terrasses autour de la place sont idéales pour observer l'animation.", "pt": "Os terraços ao redor da praça são ideais para observar a animação." },
        { "level": "C1-C2", "fr": "La configuration pittoresque de cette place préserve l'authenticité villageoise de la butte.", "pt": "A configuração pitoresca desta praça preserva a autenticidade bucólica da colina." }
      ]
    },
    {
      "term": "voir",
      "definitionPt": "Ver, enxergar (verbo)",
      "definitionFr": "Verbe ; percevoir par les yeux",
      "inflections": ["vois", "voit", "voyons", "voyez", "voient", "vu", "voir"],
      "ptTargets": ["ver", "vejo", "vê", "vemos"],
      "examples": [
        { "level": "A1", "fr": "Je veux voir les portraits.", "pt": "Eu quero ver os retratos." },
        { "level": "A2-B1", "fr": "Nous pouvons voir toute la ville depuis le haut de la colline.", "pt": "Nós podemos ver toda a cidade do alto da colina." },
        { "level": "B2", "fr": "Il faut absolument voir ce quartier historique lors de son séjour à Paris.", "pt": "É obrigatório ver este bairro histórico durante sua estadia em Paris." },
        { "level": "C1-C2", "fr": "Voir ces artistes au travail permet de comprendre la vivacité du patrimoine artistique.", "pt": "Ver estes artistas trabalhando permite compreender a vivacidade do patrimônio artístico." }
      ]
    },
    {
      "term": "beau",
      "definitionPt": "Belo, bonito (adjetivo masculino; bel devant voyelle; feminino: belle)",
      "definitionFr": "Adjectif ; qui plaît à la vue ou à l'esprit par son harmonie",
      "inflections": ["beau", "bel", "belle", "beaux", "belles"],
      "ptTargets": ["belo", "bonito", "linda", "belos"],
      "examples": [
        { "level": "A1", "fr": "C'est un beau dessin.", "pt": "É um belo desenho." },
        { "level": "A2-B1", "fr": "Il fait un beau soleil au-dessus de Paris.", "pt": "Está um belo sol acima de Paris." },
        { "level": "B2", "fr": "Ce monument historique offre un beau témoignage de l'art du XIXe siècle.", "pt": "Este monumento histórico oferece um belo testemunho da arte do século XIX." },
        { "level": "C1-C2", "fr": "L'harmonie esthétique du lieu illustre le concept classique du beau dans toute sa noblesse.", "pt": "A harmonia estética do local ilustra o conceito clássico do belo em toda a sua nobreza." }
      ]
    },
    {
      "term": "dessiner",
      "definitionPt": "Desenhar, traçar (verbo)",
      "definitionFr": "Verbe ; représenter des objets ou des figures par des traits",
      "inflections": ["dessine", "dessines", "dessinons", "dessinez", "dessinent", "dessiné", "dessiner"],
      "ptTargets": ["desenhar", "desenho", "desenha"],
      "examples": [
        { "level": "A1", "fr": "Il dessine un visage.", "pt": "Ele desenha um rosto." },
        { "level": "A2-B1", "fr": "L'artiste aime dessiner les monuments célèbres de Paris.", "pt": "O artista gosta de desenhar os monumentos famosos de Paris." },
        { "level": "B2", "fr": "Savoir dessiner un portrait en quelques minutes demande beaucoup d'expérience.", "pt": "Saber desenhar um retrato em poucos minutos exige muita experiência." },
        { "level": "C1-C2", "fr": "La vivacité du trait qui dessine la silhouette révèle la virtuosité du dessinateur.", "pt": "A vivacidade do traço que desenha a silhueta revela a virtuosidade do desenhista." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "question": "Para qual colina de Paris Irlan vai durante o dia nesta Aula 19?",
      "options": [
        "Para a colina de Montmartre, onde fica a Place du Tertre.",
        "Para a colina de Belleville.",
        "Para o Jardim de Versalhes."
      ],
      "correctIndex": 0,
      "explanation": "Irlan visita a colina de Montmartre (colline de Montmartre) para observar os artistas na Place du Tertre."
    },
    {
      "question": "O que os artistas e pintores da Place du Tertre estão fazendo no texto A1?",
      "options": [
        "Eles fazem retratos (portraits), desenhando o rosto, os olhos e o sorriso dos visitantes.",
        "Eles consertam bicicletas antigas.",
        "Eles cantam músicas de rock."
      ],
      "correctIndex": 0,
      "explanation": "Na história A1, os pintores desenham retratos dos visitantes ao ar livre, captando o rosto, olhos e sorriso."
    },
    {
      "question": "Quais cores Irlan observa que o pintor usa em seu desenho na lição?",
      "options": [
        "Branco e azul (blanc et bleu).",
        "Amarelo e cinza.",
        "Roxo e marrom."
      ],
      "correctIndex": 0,
      "explanation": "Irlan nota que o pintor usa branco e azul para fazer um belo desenho."
    }
  ]
});

// Lesson 20: Musée d'Orsay
saveLesson({
  "id": "paris_lesson_20",
  "cityId": "paris",
  "domain": "Cultura & Arte",
  "level": "Iniciante (A1)",
  "titleFr": "Le Musée d'Orsay : Couleurs, Impressionnisme et Adjectifs Visuels",
  "titlePt": "O Museu de Orsay : Cores, Impressionismo e Adjetivos Visuais (A1)",
  "subtitleFr": "Vocabulaire des couleurs, de la lumière et des sensations simples devant les tableaux impressionnistes",
  "subtitlePt": "Vocabulário de cores, luzes e sensações simples diante dos quadros impressionistas",
  "summaryPt": "Nesta Aula 20 de Paris (#1), Irlan visita o espetacular Museu de Orsay, localizado em uma antiga estação de trem às margens do Sena. Ele aprende a descrever quadros impressionistas com vocabulário prático do nível A1: as cores amarela, verde e azul, a luz, o relógio e a beleza das pinturas.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Je visite le Musée d'Orsay au bord de la Seine. C'est une ancienne grande gare de train avec une célèbre horloge.",
      "pt": "Eu visito o Museu de Orsay às margens do Sena. É uma antiga grande estação de trem com um famoso relógio."
    },
    {
      "id": 2,
      "fr": "Dans les salles, j'admire les tableaux des peintres impressionnistes. Les couleurs sont très vives et lumineuses.",
      "pt": "Nas salas, eu admiro os quadros dos pintores impressionistas. As cores são muito vivas e luminosas."
    },
    {
      "id": 3,
      "fr": "Il y a beaucoup de jaune, de vert et de bleu dans les paysages de nature et de fleurs.",
      "pt": "Há muito amarelo, verde e azul nas paisagens de natureza e de flores."
    },
    {
      "id": 4,
      "fr": "La lumière entre par les grandes fenêtres. Ce musée est un plaisir pour les yeux et pour apprendre le français.",
      "pt": "A luz entra pelas grandes janelas. Este museu é um prazer para os olhos e para aprender francês."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "musée",
      "definitionPt": "Museu (substantivo masculino)",
      "definitionFr": "Nom masculin ; lieu où sont rassemblées des œuvres d'art ou de science",
      "inflections": ["musée", "musées"],
      "ptTargets": ["museu", "museus"],
      "examples": [
        { "level": "A1", "fr": "Le Musée d'Orsay est très grand.", "pt": "O Museu de Orsay é muito grande." },
        { "level": "A2-B1", "fr": "Nous achetons nos billets pour visiter le musée ce matin.", "pt": "Nós compramos nossos ingressos para visitar o museu esta manhã." },
        { "level": "B2", "fr": "Ce musée abrite la plus importante collection de peinture impressionniste au monde.", "pt": "Este museu abriga a mais importante coleção de pintura impressionista do mundo." },
        { "level": "C1-C2", "fr": "La réhabilitation de cette ancienne gare en musée constitue une réussite muséographique majeure.", "pt": "A reabilitação desta antiga estação em museu constitui um êxito museográfico maior." }
      ]
    },
    {
      "term": "gare",
      "definitionPt": "Estação de trem, gare (substantivo feminino)",
      "definitionFr": "Nom féminin ; ensemble des bâtiments destinés au service des trains",
      "inflections": ["gare", "gares"],
      "ptTargets": ["estação de trem", "estação", "gare"],
      "examples": [
        { "level": "A1", "fr": "C'est une ancienne gare.", "pt": "É uma antiga estação de trem." },
        { "level": "A2-B1", "fr": "Le Musée d'Orsay était autrefois une grande gare ferroviaire.", "pt": "O Museu de Orsay era antigamente uma grande estação ferroviária." },
        { "level": "B2", "fr": "L'architecture métallique de la gare a été conservée lors de la création du musée.", "pt": "A arquitetura metálica da estação foi conservada durante a criação do museu." },
        { "level": "C1-C2", "fr": "La monumentalité de la nef centrale rappelle la splendeur industrielle des grandes gares du XIXe siècle.", "pt": "A monumentalidade da nave central lembra o esplendor industrial das grandes estações do século XIX." }
      ]
    },
    {
      "term": "tableau",
      "definitionPt": "Quadro, tela, pintura (substantivo masculino)",
      "definitionFr": "Nom masculin ; œuvre de peinture exécutée sur un support encadré",
      "inflections": ["tableau", "tableaux"],
      "ptTargets": ["quadro", "tela", "quadros", "pintura"],
      "examples": [
        { "level": "A1", "fr": "J'admire ce beau tableau.", "pt": "Eu admiro este belo quadro." },
        { "level": "A2-B1", "fr": "Les tableaux impressionnistes utilisent beaucoup de couleurs claires.", "pt": "Os quadros impressionistas usam muitas cores claras." },
        { "level": "B2", "fr": "Ce tableau célèbre représente un jardin fleuri près de Paris.", "pt": "Este quadro famoso representa um jardim florido perto de Paris." },
        { "level": "C1-C2", "fr": "La composition novatrice de ce tableau révolutionna les conventions académiques de son temps.", "pt": "A composição inovadora deste quadro revolucionou as convenções acadêmicas do seu tempo." }
      ]
    },
    {
      "term": "peinture",
      "definitionPt": "Pintura, arte de pintar (substantivo feminino)",
      "definitionFr": "Nom féminin ; art de représenter des images avec des couleurs sur une surface",
      "inflections": ["peinture", "peintures"],
      "ptTargets": ["pintura", "pinturas"],
      "examples": [
        { "level": "A1", "fr": "J'aime la peinture française.", "pt": "Eu gosto da pintura francesa." },
        { "level": "A2-B1", "fr": "Nous étudions l'histoire de la peinture impressionniste.", "pt": "Nós estudamos a história da pintura impressionista." },
        { "level": "B2", "fr": "La peinture du XIXe siècle a cherché à capturer les effets de lumière.", "pt": "A pintura do século XIX procurou captar os efeitos da luz." },
        { "level": "C1-C2", "fr": "L'évolution esthétique de la peinture témoigne d'un dialogue constant avec la modernité.", "pt": "A evolução estética da pintura testemunha um diálogo constante com a modernidade." }
      ]
    },
    {
      "term": "lumière",
      "definitionPt": "Luz, iluminação (substantivo feminino)",
      "definitionFr": "Nom féminin ; rayonnement qui rend les objets visibles",
      "inflections": ["lumière", "lumières"],
      "ptTargets": ["luz", "iluminação", "luzes"],
      "examples": [
        { "level": "A1", "fr": "La lumière est belle ce matin.", "pt": "A luz está linda esta manhã." },
        { "level": "A2-B1", "fr": "La lumière entre par la grande horloge du musée.", "pt": "A luz entra pelo grande relógio do museu." },
        { "level": "B2", "fr": "Les peintres impressionnistes étaient fascinés par les changements de lumière.", "pt": "Os pintores impressionistas eram fascinados pelas mudanças de luz." },
        { "level": "C1-C2", "fr": "La maîtrise des jeux de lumière confère à la toile une atmosphère poétique saisissante.", "pt": "O domínio dos jogos de luz confere à tela uma atmosfera poética cativante." }
      ]
    },
    {
      "term": "jaune",
      "definitionPt": "Amarelo, amarela (adjetivo invariável no gênero; substantivo masculino)",
      "definitionFr": "Adjectif ; de la couleur de l'or ou du citron",
      "inflections": ["jaune", "jaunes"],
      "ptTargets": ["amarelo", "amarela", "amarelos", "amarelas"],
      "examples": [
        { "level": "A1", "fr": "Le soleil est jaune.", "pt": "O sol é amarelo." },
        { "level": "A2-B1", "fr": "Il y a beaucoup de jaune dans les champs de blé peints par les artistes.", "pt": "Há muito amarelo nos campos de trigo pintados pelos artistas." },
        { "level": "B2", "fr": "Le jaune apporte une sensation de chaleur et d'énergie dans cette composition.", "pt": "O amarelo traz uma sensação de calor e energia nesta composição." },
        { "level": "C1-C2", "fr": "L'éclat intense des nuances de jaune sublime la vibration chromatique du paysage.", "pt": "O brilho intenso das nuances de amarelo sublima a vibração cromática da paisagem." }
      ]
    },
    {
      "term": "vert",
      "definitionPt": "Verde (adjetivo masculino; feminino: verte)",
      "definitionFr": "Adjectif ; de la couleur de l'herbe ou des feuilles",
      "inflections": ["vert", "verte", "verts", "vertes"],
      "ptTargets": ["verde", "verdes"],
      "examples": [
        { "level": "A1", "fr": "L'arbre est vert.", "pt": "A árvore é verde." },
        { "level": "A2-B1", "fr": "Les peintres aiment utiliser le vert pour dessiner la nature et les jardins.", "pt": "Os pintores gostam de usar o verde para desenhar a natureza e os jardins." },
        { "level": "B2", "fr": "Les différentes teintes de vert reflètent la richesse végétale de la campagne.", "pt": "Os diferentes tons de verde refletem a riqueza vegetal do campo." },
        { "level": "C1-C2", "fr": "La subtilité harmonique des gammes de vert renforce le réalisme atmosphérique de l'œuvre.", "pt": "A sutileza harmônica das gamas de verde fortalece o realismo atmosférico da obra." }
      ]
    },
    {
      "term": "bleu",
      "definitionPt": "Azul (adjetivo masculino; feminino: bleue)",
      "definitionFr": "Adjectif ; de la couleur du ciel clair ou de la mer",
      "inflections": ["bleu", "bleue", "bleus", "bleues"],
      "ptTargets": ["azul", "azuis"],
      "examples": [
        { "level": "A1", "fr": "Le ciel de Paris est bleu.", "pt": "O céu de Paris é azul." },
        { "level": "A2-B1", "fr": "La Seine apparaît en bleu clair dans ce tableau historique.", "pt": "O Sena aparece em azul claro neste quadro histórico." },
        { "level": "B2", "fr": "Le bleu est utilisé pour suggérer la profondeur de l'eau et du ciel.", "pt": "O azul é utilizado para sugerir a profundidade da água e do céu." },
        { "level": "C1-C2", "fr": "La richesse chromatique des pigments bleus confère une intensité dramatique à l'horizon.", "pt": "A riqueza cromática dos pigmentos azuis confere uma intensidade dramática ao horizonte." }
      ]
    },
    {
      "term": "grand",
      "definitionPt": "Grande, alto (adjetivo masculino; feminino: grande)",
      "definitionFr": "Adjectif ; de dimension supérieure à la moyenne",
      "inflections": ["grand", "grande", "grands", "grandes"],
      "ptTargets": ["grande", "grandes", "alto"],
      "examples": [
        { "level": "A1", "fr": "C'est un grand musée.", "pt": "É um grande museu." },
        { "level": "A2-B1", "fr": "La grande horloge du musée offre une vue magnifique sur la ville.", "pt": "O grande relógio do museu oferece uma vista magnífica da cidade." },
        { "level": "B2", "fr": "Les grands formats de peinture impressionnent toujours les visiteurs en salle.", "pt": "Os grandes formatos de pintura sempre impressionam os visitantes na sala." },
        { "level": "C1-C2", "fr": "La monumentalité de ce grand hall structure parfaitement le parcours muséal.", "pt": "A monumentalidade deste grande saguão estrutura perfeitamente o percurso museológico." }
      ]
    },
    {
      "term": "admirer",
      "definitionPt": "Admirar, contemplar (verbo)",
      "definitionFr": "Verbe ; regarder avec un sentiment de plaisir et d'émerveillement",
      "inflections": ["admire", "admires", "admirons", "admirez", "admirent", "admiré", "admirer"],
      "ptTargets": ["admirar", "admiro", "admira", "contemplar"],
      "examples": [
        { "level": "A1", "fr": "J'admire les tableaux.", "pt": "Eu admiro os quadros." },
        { "level": "A2-B1", "fr": "Nous passons des heures à admirer les peintures de Claude Monet.", "pt": "Nós passamos horas admirando as pinturas de Claude Monet." },
        { "level": "B2", "fr": "Les visiteurs du monde entier viennent admirer les chefs-d'œuvre de cette collection.", "pt": "Visitantes do mundo inteiro vêm admirar as obras-primas desta coleção." },
        { "level": "C1-C2", "fr": "Admirer ces créations permet d'appréhender la rupture esthétique menée par les impressionnistes.", "pt": "Admirar estas criações permite compreender a ruptura estética liderada pelos impressionistas." }
      ]
    },
    {
      "term": "fleuve",
      "definitionPt": "Rio de grande porte que deságua no mar (substantivo masculino)",
      "definitionFr": "Nom masculin ; cours d'eau important qui se jette dans la mer",
      "inflections": ["fleuve", "fleuves"],
      "ptTargets": ["rio", "rio de grande porte"],
      "examples": [
        { "level": "A1", "fr": "La Seine est un grand fleuve.", "pt": "O Sena é um grande rio." },
        { "level": "A2-B1", "fr": "Le Musée d'Orsay est situé au bord du fleuve, au centre de Paris.", "pt": "O Museu de Orsay está localizado às margens do rio, no centro de Paris." },
        { "level": "B2", "fr": "Les bateaux naviguent sur le fleuve en passant sous les ponts historiques.", "pt": "Os barcos navegam pelo rio passando sob as pontes históricas." },
        { "level": "C1-C2", "fr": "La géographie du fleuve a guidé le développement urbain et monumental de la capitale.", "pt": "A geografia do rio guiou o desenvolvimento urbano e monumental da capital." }
      ]
    },
    {
      "term": "horloge",
      "definitionPt": "Relógio de parede ou de monumento (substantivo feminino)",
      "definitionFr": "Nom féminin ; appareil de mesure du temps fixe ou monumental",
      "inflections": ["horloge", "horloges"],
      "ptTargets": ["relógio", "relógios"],
      "examples": [
        { "level": "A1", "fr": "Je regarde la grande horloge.", "pt": "Eu olhe para o grande relógio." },
        { "level": "A2-B1", "fr": "La célèbre horloge du musée donne sur le fleuve de la Seine.", "pt": "O famoso relógio do museu dá para o rio Sena." },
        { "level": "B2", "fr": "Cette horloge historique rappelle le passé ferroviaire de ce magnifique édifice.", "pt": "Este relógio histórico lembra o passado ferroviário deste magnífico edifício." },
        { "level": "C1-C2", "fr": "Le cadran vitré de la grande horloge compose un cadre théâtral sur le paysage parisien.", "pt": "O mostrador envidraçado do grande relógio compõe uma moldura teatral sobre a paisagem parisiense." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "question": "Onde está localizado o Museu de Orsay e o que esse edifício era antigamente?",
      "options": [
        "Está localizado às margens do Sena e era uma antiga grande estação de trem (ancienne grande gare de train).",
        "Está localizado na Torre Eiffel e era uma fábrica de pães.",
        "Está localizado no aeroporto e era uma escola primária."
      ],
      "correctIndex": 0,
      "explanation": "No texto A1, Irlan explica que o Museu de Orsay era uma antiga grande estação de trem às margens do rio Sena."
    },
    {
      "question": "Quais cores Irlan menciona ver nas paisagens e flores dos quadros impressionistas?",
      "options": [
        "Amarelo, verde e azul (jaune, vert et bleu).",
        "Preto e cinza escuro.",
        "Roxo, marrom e laranja."
      ],
      "correctIndex": 0,
      "explanation": "Irlan observa muito amarelo, verde e azul nas paisagens luminosas pintadas pelos artistas."
    },
    {
      "question": "Qual elemento histórico do edifício do museu é mencionado na lição?",
      "options": [
        "Um famoso relógio (célèbre horloge) pelo qual entra a luz.",
        "Uma piscina olímpica de vidro.",
        "Uma estátua de bronze de Napoleão."
      ],
      "correctIndex": 0,
      "explanation": "O museu conserva o famoso grande relógio (horloge) de sua época como estação de trem."
    }
  ]
});

// Lesson 21: Jardins de Paris
saveLesson({
  "id": "paris_lesson_21",
  "cityId": "paris",
  "domain": "Cotidiano & Viagem",
  "level": "Iniciante (A1)",
  "titleFr": "Les Jardins de Paris : Nature, Saisons et Promenades",
  "titlePt": "Os Jardins de Paris : Natureza, Estações do Ano e Passeios (A1)",
  "subtitleFr": "Apprenez les noms des saisons, des arbres et des activités en plein air au Jardin du Luxembourg",
  "subtitlePt": "Aprenda os nomes das estações do ano, árvores e atividades ao ar livre no Jardim de Luxemburgo",
  "summaryPt": "Nesta Aula 21 de Paris (#1), Irlan descansa e caminha pelo famoso Jardin du Luxembourg. Ele aprende vocabulário prático de nível A1 para falar sobre as estações do ano, flores, árvores e atividades ao ar livre, sentando-se nas tradicionais cadeiras verdes para observar as crianças com seus barquinhos de vela.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Après mes visites, je vais me promener au célèbre Jardin du Luxembourg dans le centre de Paris.",
      "pt": "Após minhas visitas, eu vou passear no famoso Jardim de Luxemburgo no centro de Paris."
    },
    {
      "id": 2,
      "fr": "Je m'assieds sur une chaise verte traditionnelle pour lire et me reposer au soleil.",
      "pt": "Eu me sento em uma cadeira verde tradicional para ler e me descansar ao sol."
    },
    {
      "id": 3,
      "fr": "Au printemps et en été, il y a de belles fleurs et de grands arbres. En automne, les feuilles deviennent jaunes.",
      "pt": "Na primavera e no verão, há belas flores e grandes árvores. No outono, as folhas ficam amarelas."
    },
    {
      "id": 4,
      "fr": "Près du bassin, les enfants jouent avec de petits bateaux à voile. C'est un jardin calme et très agréable.",
      "pt": "Perto do tanque de água, as crianças brincam com pequenos barcos a vela. É um jardim calmo e muito agradável."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "jardin",
      "definitionPt": "Jardim, parque (substantivo masculino)",
      "definitionFr": "Nom masculin ; terrain où l'on cultive des plantes, des fleurs, des arbres",
      "inflections": ["jardin", "jardins"],
      "ptTargets": ["jardim", "jardins", "parque"],
      "examples": [
        { "level": "A1", "fr": "Le jardin est calme.", "pt": "O jardim é calmo." },
        { "level": "A2-B1", "fr": "Le Jardin du Luxembourg est très populaire auprès des Parisiens.", "pt": "O Jardim de Luxemburgo é muito popular entre os parisienses." },
        { "level": "B2", "fr": "Ce grand jardin public offre un espace de repos idéal en plein cœur de la ville.", "pt": "Este grande jardim público oferece um espaço de repouso ideal no coração da cidade." },
        { "level": "C1-C2", "fr": "L'ordonnancement harmonieux des parterres perpétue la tradition du jardin à la française.", "pt": "A organização harmônica dos canteiros perpetua a tradição do jardim à francesa." }
      ]
    },
    {
      "term": "fleur",
      "definitionPt": "Flor (substantivo feminino)",
      "definitionFr": "Nom féminin ; production colorée et odorante des plantes",
      "inflections": ["fleur", "fleurs"],
      "ptTargets": ["flor", "flores"],
      "examples": [
        { "level": "A1", "fr": "La fleur est rouge.", "pt": "A flor é vermelha." },
        { "level": "A2-B1", "fr": "Au printemps, les jardins sont remplis de fleurs de toutes les couleurs.", "pt": "Na primavera, os jardins estão cheios de flores de todas as cores." },
        { "level": "B2", "fr": "Les jardiniers municipaux renouvellent régulièrement les massifs de fleurs.", "pt": "Os jardineiros municipais renovam regularmente os canteiros de flores." },
        { "level": "C1-C2", "fr": "L'éclat chromatique de ces fleurs de saison enrichit la perspective botanique du domaine.", "pt": "O brilho cromático destas flores da estação enriquece a perspectiva botânica do parque." }
      ]
    },
    {
      "term": "chaise",
      "definitionPt": "Cadeira (substantivo feminino)",
      "definitionFr": "Nom féminin ; siège à dossier sans bras pour une personne",
      "inflections": ["chaise", "chaises"],
      "ptTargets": ["cadeira", "cadeiras"],
      "examples": [
        { "level": "A1", "fr": "Je prends une chaise verte.", "pt": "Eu pego uma cadeira verde." },
        { "level": "A2-B1", "fr": "Les chaises vertes du Luxembourg sont célèbres dans le monde entier.", "pt": "As cadeiras verdes do Luxemburgo são famosas no mundo inteiro." },
        { "level": "B2", "fr": "Vous pouvez déplacer librement votre chaise pour vous installer au soleil.", "pt": "Você pode deslocar livremente sua cadeira para se sentar ao sol." },
        { "level": "C1-C2", "fr": "La silhouette métallique de cette chaise constitue un emblème intemporel des jardins parisiens.", "pt": "A silhueta metálica desta cadeira constitui um emblema atemporal dos jardins parisienses." }
      ]
    },
    {
      "term": "printemps",
      "definitionPt": "Primavera (substantivo masculino)",
      "definitionFr": "Nom masculin ; saison qui se situe entre l'hiver et l'été",
      "inflections": ["printemps"],
      "ptTargets": ["primavera"],
      "examples": [
        { "level": "A1", "fr": "J'aime le printemps à Paris.", "pt": "Eu gosto da primavera em Paris." },
        { "level": "A2-B1", "fr": "Au printemps, les arbres fleurissent et les journées sont plus longues.", "pt": "Na primavera, as árvores florescem e os dias são mais longos." },
        { "level": "B2", "fr": "Le printemps est une période idéale pour visiter les parcs et jardins de France.", "pt": "A primavera é um período ideal para visitar os parques e jardins da França." },
        { "level": "C1-C2", "fr": "La douceur printanière invite à la promenade sous la ramure naissante des marronniers.", "pt": "A amenidade primaveril convida ao passeio sob as folhagens nascentes dos castanheiros." }
      ]
    },
    {
      "term": "été",
      "definitionPt": "Verão (substantivo masculino)",
      "definitionFr": "Nom masculin ; saison la plus chaude de l'année",
      "inflections": ["été", "étés"],
      "ptTargets": ["verão", "verões"],
      "examples": [
        { "level": "A1", "fr": "Il fait chaud en été.", "pt": "Faz calor no verão." },
        { "level": "A2-B1", "fr": "En été, les jardins ferment plus tard le soir.", "pt": "No verão, os jardins fecham mais tarde à noite." },
        { "level": "B2", "fr": "Beaucoup de Parisiens profitent de l'été pour lire à l'ombre des grands arbres.", "pt": "Muitos parisienses aproveitam o verão para ler à sombra das grandes árvores." },
        { "level": "C1-C2", "fr": "La luminosité intense de l'été sublime le contraste entre les allées claires et les frondaisons.", "pt": "A luminosidade intensa do verão realça o contraste entre as alamedas claras e as folhagens." }
      ]
    },
    {
      "term": "automne",
      "definitionPt": "Outono (substantivo masculino)",
      "definitionFr": "Nom masculin ; saison qui succède à l'été et précède l'hiver",
      "inflections": ["automne", "automnes"],
      "ptTargets": ["outono", "outonos"],
      "examples": [
        { "level": "A1", "fr": "En automne, il y a du vent.", "pt": "No outono, há vento." },
        { "level": "A2-B1", "fr": "En automne, les feuilles des arbres deviennent rouges et jaunes.", "pt": "No outono, as folhas das árvores ficam vermelhas e amarelas." },
        { "level": "B2", "fr": "L'automne apporte une atmosphère poétique et calme dans les parcs de la capitale.", "pt": "O outono traz uma atmosfera poética e calma aos parques da capital." },
        { "level": "C1-C2", "fr": "La palette ocre et dorée de l'automne confère aux jardins une mélancolie raffinée.", "pt": "A paleta ocre e dourada do outono confere aos jardins uma melancolia refinada." }
      ]
    },
    {
      "term": "hiver",
      "definitionPt": "Inverno (substantivo masculino)",
      "definitionFr": "Nom masculin ; saison la plus froide de l'année",
      "inflections": ["hiver", "hivers"],
      "ptTargets": ["inverno", "invernos"],
      "examples": [
        { "level": "A1", "fr": "Il fait froid en hiver.", "pt": "Faz frio no inverno." },
        { "level": "A2-B1", "fr": "En hiver, il est agréable de se promener avec un bon manteau chaud.", "pt": "No inverno, é agradável passear com um bom casaco quente." },
        { "level": "B2", "fr": "Parfois en hiver, une légère couche de neige recouvre les statues du jardin.", "pt": "Às vezes no inverno, uma leve camada de neve cobre as estátuas do jardim." },
        { "level": "C1-C2", "fr": "La rigueur hivernale dessine l'architecture géométrique des arbres dénudés.", "pt": "A rigidez invernal desenha a arquitetura geométrica das árvores nuas." }
      ]
    },
    {
      "term": "promener (se)",
      "definitionPt": "Passear, caminhar por lazer (verbo pronominal)",
      "definitionFr": "Verbe pronominal ; aller sans but précis pour se détendre",
      "inflections": ["me promène", "te promènes", "se promène", "nous promenons", "vous promenez", "se promènent", "promené", "se promener"],
      "ptTargets": ["passear", "caminhar", "passeio", "passeamos"],
      "examples": [
        { "level": "A1", "fr": "Je me promène dans le parc.", "pt": "Eu passeio no parque." },
        { "level": "A2-B1", "fr": "Nous aimons nous promener le dimanche après-midi.", "pt": "Nós gostamos de passear no domingo à tarde." },
        { "level": "B2", "fr": "Se promener dans les jardins historiques est un véritable art de vivre à Paris.", "pt": "Passear nos jardins históricos é uma verdadeira arte de viver em Paris." },
        { "level": "C1-C2", "fr": "Se promener sans hâte au fil des allées favorise la sérénité intellectuelle.", "pt": "Passear sem pressa pelas alamedas favorece a serenidade intelectual." }
      ]
    },
    {
      "term": "reposer (se)",
      "definitionPt": "Descansar, repousar (verbo pronominal)",
      "definitionFr": "Verbe pronominal ; cesser toute activité fatigante pour retrouver ses forces",
      "inflections": ["me repose", "te reposes", "se repose", "nous reposons", "vous reposez", "se reposent", "reposé", "se reposer"],
      "ptTargets": ["descansar", "repousar", "descanso", "descansamos"],
      "examples": [
        { "level": "A1", "fr": "Je me repose au soleil.", "pt": "Eu me descanso ao sol." },
        { "level": "A2-B1", "fr": "Après une longue marche, je vais me reposer sur un banc.", "pt": "Depois de uma longa caminhada, eu vou me descansar em um banco." },
        { "level": "B2", "fr": "Le jardin public offre un lieu paisible pour se reposer en fin de journée.", "pt": "O jardim público oferece um local tranquilo para descansar no final do dia." },
        { "level": "C1-C2", "fr": "Se reposer dans ce cadre arboré permet d'échapper à l'effervescence urbaine.", "pt": "Descansar neste ambiente arborizado permite escapar da efervescência urbana." }
      ]
    },
    {
      "term": "enfant",
      "definitionPt": "Criança (substantivo masculino ou feminino)",
      "definitionFr": "Nom ; être humain dans l'âge de l'enfance",
      "inflections": ["enfant", "enfants"],
      "ptTargets": ["criança", "crianças", "menino", "menina"],
      "examples": [
        { "level": "A1", "fr": "L'enfant joue dans le parc.", "pt": "A criança brinca no parque." },
        { "level": "A2-B1", "fr": "Les enfants adorent faire naviguer de petits bateaux sur le bassin.", "pt": "As crianças adoram fazer navegar pequenos barcos no tanque de água." },
        { "level": "B2", "fr": "Ce jardin propose de nombreuses activités en plein air pour les enfants.", "pt": "Este jardim oferece muitas atividades ao ar livre para as crianças." },
        { "level": "C1-C2", "fr": "Les cris joyeux des enfants animent le bassin central d'une vivacité intemporelle.", "pt": "Os gritos alegres das crianças animam o espelho d'água central com uma vivacidade atemporal." }
      ]
    },
    {
      "term": "bateau",
      "definitionPt": "Barco, barquinho (substantivo masculino)",
      "definitionFr": "Nom masculin ; embarcation destinée à naviguer sur l'eau",
      "inflections": ["bateau", "bateaux"],
      "ptTargets": ["barco", "barcos", "barquinho"],
      "examples": [
        { "level": "A1", "fr": "C'est un petit bateau.", "pt": "É um pequeno barco." },
        { "level": "A2-B1", "fr": "Les enfants louent des petits bateaux à voile au Jardin du Luxembourg.", "pt": "As crianças alugam pequenos barcos a vela no Jardim de Luxemburgo." },
        { "level": "B2", "fr": "La tradition des petits bateaux en bois sur le bassin existe depuis des décennies.", "pt": "A tradição dos pequenos barcos de madeira no tanque existe há décadas." },
        { "level": "C1-C2", "fr": "La silhouette gracieuse de ce bateau à voile perpétue la poésie ludique du jardin.", "pt": "A silhueta graciosa deste barco a vela perpetua a poética lúdica do jardim." }
      ]
    },
    {
      "term": "saison",
      "definitionPt": "Estação do ano (substantivo feminino)",
      "definitionFr": "Nom féminin ; chacune des quatre grandes divisions de l'année",
      "inflections": ["saison", "saisons"],
      "ptTargets": ["estação", "estação do ano", "estações"],
      "examples": [
        { "level": "A1", "fr": "Il y a quatre saisons.", "pt": "Há quatro estações do ano." },
        { "level": "A2-B1", "fr": "Chaque saison apporte de nouvelles couleurs dans les parcs de Paris.", "pt": "Cada estação traz novas cores nos parques de Paris." },
        { "level": "B2", "fr": "Le changement de saison transforme le paysage et la lumière de la capitale.", "pt": "A mudança de estação transforma a paisagem e a luz da capital." },
        { "level": "C1-C2", "fr": "La succession harmonique des saisons rythme la vie botanique et esthétique du domaine.", "pt": "A sucessão harmônica das estações dita o ritmo da vida botânica e estética da propriedade." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "question": "Onde Irlan vai para passear e relaxar nesta Aula 21 de Paris?",
      "options": [
        "Ao famoso Jardim de Luxemburgo (Jardin du Luxembourg) no centro de Paris.",
        "A uma estação de metrô subterrânea.",
        "Ao aeroporto Charles de Gaulle."
      ],
      "correctIndex": 0,
      "explanation": "Na história A1, Irlan escolhe passear e relaxar ao sol no famoso Jardin du Luxembourg."
    },
    {
      "question": "Em que tipo de cadeira Irlan se senta no jardim?",
      "options": [
        "Em uma cadeira verde tradicional (chaise verte traditionnelle).",
        "Em uma cadeira de balanço de madeira.",
        "Em um sofá de couro vermelho."
      ],
      "correctIndex": 0,
      "explanation": "Irlan senta-se em uma tradicional cadeira verde de metal do Jardim de Luxemburgo."
    },
    {
      "question": "O que as crianças fazem perto do tanque de água (bassin) do jardim?",
      "options": [
        "Brincam com pequenos barcos a vela (petits bateaux à voile).",
        "Jogam futebol com uma bola pesada.",
        "Pintam as paredes de azul."
      ],
      "correctIndex": 0,
      "explanation": "Perto do tanque de água, Irlan observa as crianças brincando com pequenos barquinhos a vela."
    }
  ]
});

// Lesson 22: Praça da Bastilha
saveLesson({
  "id": "paris_lesson_22",
  "cityId": "paris",
  "domain": "Literatura & História",
  "level": "Iniciante (A1)",
  "titleFr": "La Place de la Bastille : Monuments, Histoire et Directions",
  "titlePt": "Praça da Bastilha : Monumentos, História e Direções no A1",
  "subtitleFr": "Apprenez à situer des monuments et des lieux historiques avec un vocabulaire simple de niveau A1",
  "subtitlePt": "Aprenda a localizar monumentos e datas históricas com vocabulário simples do nível A1",
  "summaryPt": "Nesta Aula 22 de Paris (#1), Irlan visita a famosa Praça da Bastilha, um lugar simbólico da história francesa. Ele treina o vocabulário básico de nível A1 para orientar-se na cidade: o centro, a direita, a esquerda, as grandes colunas e como falar sobre datas e festas importantes com frases curtas.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Je marche vers la Place de la Bastille. C'est un lieu très important pour l'histoire de France.",
      "pt": "Eu caminho em direção à Praça da Bastilha. É um lugar muito importante para a história da França."
    },
    {
      "id": 2,
      "fr": "Au centre de la place, il y a une grande colonne avec une statue dorée. À droite, il y a le nouvel opéra moderne.",
      "pt": "No centro da praça, há uma grande coluna com uma estátua dourada. À direita, há a nova ópera moderna."
    },
    {
      "id": 3,
      "fr": "Beaucoup de gens se retrouvent ici le quatorze juillet pour la grande fête nationale française.",
      "pt": "Muitas pessoas se reúnem aqui no dia catorze de julho para a grande festa nacional francesa."
    },
    {
      "id": 4,
      "fr": "Je regarde mon plan de Paris. C'est facile de situer les grands monuments avec un vocabulaire simple.",
      "pt": "Eu olhe para o meu mapa de Paris. É fácil localizar os grandes monumentos com um vocabulário simples."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "place",
      "definitionPt": "Praça, local (substantivo feminino)",
      "definitionFr": "Nom féminin ; espace public découvert dans une ville",
      "inflections": ["place", "places"],
      "ptTargets": ["praça", "praças", "local"],
      "examples": [
        { "level": "A1", "fr": "La Place de la Bastille est grande.", "pt": "A Praça da Bastilha é grande." },
        { "level": "A2-B1", "fr": "Nous avons rendez-vous au centre de la place à quatorze heures.", "pt": "Nós temos encontro no centro da praça às catorze horas." },
        { "level": "B2", "fr": "Cette place historique symbolise la liberté des citoyens français.", "pt": "Esta praça histórica simboliza a liberdade dos cidadãos franceses." },
        { "level": "C1-C2", "fr": "L'agencement de la place favorise les rassemblements civiques et commémoratifs.", "pt": "A disposição da praça favorece os encontros cívicos e comemorativos." }
      ]
    },
    {
      "term": "monument",
      "definitionPt": "Monumento (substantivo masculino)",
      "definitionFr": "Nom masculin ; ouvrage architectural destiné à perpétuer un souvenir",
      "inflections": ["monument", "monuments"],
      "ptTargets": ["monumento", "monumentos"],
      "examples": [
        { "level": "A1", "fr": "C'est un beau monument.", "pt": "É um belo monumento." },
        { "level": "A2-B1", "fr": "Paris compte de nombreux monuments historiques célèbres.", "pt": "Paris conta com muitos monumentos históricos famosos." },
        { "level": "B2", "fr": "La préservation des monuments anciens est essentielle pour le patrimoine culturel.", "pt": "A preservação dos monumentos antigos é essencial para o patrimônio cultural." },
        { "level": "C1-C2", "fr": "Ce monument emblématique témoigne des aspirations républicaines de la nation.", "pt": "Este monumento emblemático testemunha as aspirações republicanas da nação." }
      ]
    },
    {
      "term": "colonne",
      "definitionPt": "Coluna, pilar monumental (substantivo feminino)",
      "definitionFr": "Nom féminin ; support vertical ou monument en forme de pilier",
      "inflections": ["colonne", "colonnes"],
      "ptTargets": ["coluna", "colunas", "pilar"],
      "examples": [
        { "level": "A1", "fr": "Je vois une haute colonne au centre.", "pt": "Eu vejo uma alta coluna no centro." },
        { "level": "A2-B1", "fr": "La Colonne de Juillet s'élève au milieu de la Place de la Bastille.", "pt": "A Coluna de Julho ergue-se no meio da Praça da Bastilha." },
        { "level": "B2", "fr": "Au sommet de la colonne se trouve une statue dorée qui brille au soleil.", "pt": "No topo da coluna encontra-se uma estátua dourada que brilha ao sol." },
        { "level": "C1-C2", "fr": "L'élancement vertical de la colonne confère à la place une solennité mémorielle.", "pt": "O impulso vertical da coluna confere à praça uma solenidade de memória." }
      ]
    },
    {
      "term": "histoire",
      "definitionPt": "História (substantivo feminino)",
      "definitionFr": "Nom féminin ; récit des événements passés d'un peuple ou d'une personne",
      "inflections": ["histoire", "histoires"],
      "ptTargets": ["história", "histórias"],
      "examples": [
        { "level": "A1", "fr": "J'aime l'histoire de France.", "pt": "Eu gosto da história da França." },
        { "level": "A2-B1", "fr": "Cette place a joué un grand rôle dans l'histoire française.", "pt": "Esta praça teve um grande papel na história francesa." },
        { "level": "B2", "fr": "Connaître l'histoire de la ville aide à mieux comprendre ses monuments.", "pt": "Conhecer a história da cidade ajuda a compreender melhor seus monumentos." },
        { "level": "C1-C2", "fr": "L'étude rigoureuse de l'histoire éclaire les fondements politiques de la République.", "pt": "O estudo rigoroso da história esclarece os fundamentos políticos da República." }
      ]
    },
    {
      "term": "liberté",
      "definitionPt": "Liberdade (substantivo feminino)",
      "definitionFr": "Nom féminin ; état d'une personne qui n'est pas soumise à une servitude",
      "inflections": ["liberté", "libertés"],
      "ptTargets": ["liberdade", "liberdades"],
      "examples": [
        { "level": "A1", "fr": "La liberté est très importante.", "pt": "A liberdade é muito importante." },
        { "level": "A2-B1", "fr": "La devise de la France est : Liberté, Égalité, Fraternité.", "pt": "O lema da França é: Liberdade, Igualdade, Fraternidade." },
        { "level": "B2", "fr": "Le Génie de la Liberté domine la place pour célébrer les droits des citoyens.", "pt": "O Gênio da Liberdade domina a praça para celebrar os direitos dos cidadãos." },
        { "level": "C1-C2", "fr": "La conquête des libertés fondamentales constitue le socle de l'idéal républicain.", "pt": "A conquista das liberdades fundamentais constitui a base do ideal republicano." }
      ]
    },
    {
      "term": "centre",
      "definitionPt": "Centro, meio (substantivo masculino)",
      "definitionFr": "Nom masculin ; point situé au milieu d'un espace",
      "inflections": ["centre", "centres"],
      "ptTargets": ["centro", "meio"],
      "examples": [
        { "level": "A1", "fr": "La colonne est au centre de la place.", "pt": "A coluna está no centro da praça." },
        { "level": "A2-B1", "fr": "Le centre de Paris est très bien desservi par le métro.", "pt": "O centro de Paris é muito bem atendido pelo metrô." },
        { "level": "B2", "fr": "Nous avons loué un appartement situé au centre historique de la ville.", "pt": "Nós alugamos um apartamento localizado no centro histórico da cidade." },
        { "level": "C1-C2", "fr": "La convergence des grands axes urbains place ce monument au centre du dispositif de communication.", "pt": "A convergência dos grandes eixos urbanos coloca este monumento no centro do sistema de tráfego." }
      ]
    },
    {
      "term": "droite",
      "definitionPt": "Direita (substantivo feminino; adjetivo)",
      "definitionFr": "Nom féminin ; côté opposé au côté du cœur",
      "inflections": ["droite"],
      "ptTargets": ["direita"],
      "examples": [
        { "level": "A1", "fr": "L'opéra est à droite.", "pt": "A ópera fica à direita." },
        { "level": "A2-B1", "fr": "Prenez la première rue à droite pour aller au musée.", "pt": "Pegue a primeira rua à direita para ir ao museu." },
        { "level": "B2", "fr": "En sortant de la station, le théâtre se trouve immédiatement sur votre droite.", "pt": "Ao sair da estação, o teatro fica imediatamente à sua direita." },
        { "level": "C1-C2", "fr": "L'alignement architectural sur l'aile droite équilibre la symétrie générale du quartier.", "pt": "O alinhamento arquitetônico na ala direita equilibra a simetria geral do bairro." }
      ]
    },
    {
      "term": "gauche",
      "definitionPt": "Esquerda (substantivo feminino; adjetivo)",
      "definitionFr": "Nom féminin ; côté du corps où se trouve le cœur",
      "inflections": ["gauche"],
      "ptTargets": ["esquerda"],
      "examples": [
        { "level": "A1", "fr": "La rue est à gauche.", "pt": "A rua fica à esquerda." },
        { "level": "A2-B1", "fr": "Tournez à gauche après le feu rouge pour trouver la pharmacie.", "pt": "Vire à esquerda depois do sinal vermelho para encontrar a farmácia." },
        { "level": "B2", "fr": "Sur la rive gauche de la Seine, on trouve de nombreuses universités.", "pt": "Na margem esquerda do Sena, encontram-se muitas universidades." },
        { "level": "C1-C2", "fr": "Le développement culturel de la rive gauche a durablement marqué l'histoire littéraire parisienne.", "pt": "O desenvolvimento cultural da margem esquerda marcou de forma duradoura a história literária parisiense." }
      ]
    },
    {
      "term": "gens",
      "definitionPt": "Pessoas, gente (substantivo masculino plural)",
      "definitionFr": "Nom masculin pluriel ; les personnes en général",
      "inflections": ["gens"],
      "ptTargets": ["pessoas", "gente"],
      "examples": [
        { "level": "A1", "fr": "Il y a beaucoup de gens ici.", "pt": "Há muitas pessoas aqui." },
        { "level": "A2-B1", "fr": "Les gens aiment se rencontrer sur la place le week-end.", "pt": "As pessoas gostam de se encontrar na praça no fim de semana." },
        { "level": "B2", "fr": "La convivialité des gens du quartier rend le séjour très agréable.", "pt": "A cordialidade das pessoas do bairro torna a estadia muito agradável." },
        { "level": "C1-C2", "fr": "L'engagement civique des gens participe au dynamisme démocratique de la cité.", "pt": "O engajamento cívico das pessoas participa do dinamismo democrático da cidade." }
      ]
    },
    {
      "term": "fête",
      "definitionPt": "Festa, comemoração (substantivo feminino)",
      "definitionFr": "Nom féminin ; célébration publique ou privée de joie",
      "inflections": ["fête", "fêtes"],
      "ptTargets": ["festa", "comemoração", "festas"],
      "examples": [
        { "level": "A1", "fr": "C'est une grande fête.", "pt": "É uma grande festa." },
        { "level": "A2-B1", "fr": "Le quatorze juillet est la fête nationale en France.", "pt": "O catorze de julho é a festa nacional na França." },
        { "level": "B2", "fr": "Pendant la fête de la musique, des concerts ont lieu dans toutes les rues.", "pt": "Durante a festa da música, ocorrem concertos em todas as ruas." },
        { "level": "C1-C2", "fr": "Les festivités commémoratives renforcent le sentiment d'appartenance à la communauté nationale.", "pt": "As festividades comemorativas fortalecem o sentimento de pertencer à comunidade nacional." }
      ]
    },
    {
      "term": "ville",
      "definitionPt": "Cidade (substantivo feminino)",
      "definitionFr": "Nom féminin ; agglomération urbaine",
      "inflections": ["ville", "villes"],
      "ptTargets": ["cidade", "cidades"],
      "examples": [
        { "level": "A1", "fr": "Paris est une grande ville.", "pt": "Paris é uma grande cidade." },
        { "level": "A2-B1", "fr": "Nous allons visiter onze villes françaises pendant notre voyage.", "pt": "Nós vamos visitar onze cidades francesas durante nossa viagem." },
        { "level": "B2", "fr": "Chaque ville de France possède sa propre histoire et ses traditions.", "pt": "Cada cidade da França possui sua própria história e suas tradições." },
        { "level": "C1-C2", "fr": "Le rayonnement culturel de la ville attire des chercheurs et artistes internationaux.", "pt": "O prestígio cultural da cidade atrai pesquisadores e artistas internacionais." }
      ]
    },
    {
      "term": "important",
      "definitionPt": "Importante (adjetivo masculino; feminino: importante)",
      "definitionFr": "Adjectif ; qui a une grande valeur, une grande influence",
      "inflections": ["important", "importante", "importants", "importantes"],
      "ptTargets": ["importante", "importantes"],
      "examples": [
        { "level": "A1", "fr": "C'est un lieu important.", "pt": "É um lugar importante." },
        { "level": "A2-B1", "fr": "La Bastille est un symbole très important pour les Français.", "pt": "A Bastilha é um símbolo muito importante para os franceses." },
        { "level": "B2", "fr": "Il est important d'apprendre les expressions de direction en voyage.", "pt": "É importante aprender as expressões de direção em viagem." },
        { "level": "C1-C2", "fr": "Ce monument joue un rôle mémoriel important dans la conscience nationale.", "pt": "Este monumento desempenha um papel de memória importante na consciência nacional." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "question": "Qual é a praça histórica que Irlan visita nesta Aula 22 de Paris?",
      "options": [
        "A Praça da Bastilha (Place de la Bastille).",
        "A Praça da Concórdia.",
        "A Praça de Saint-Marc."
      ],
      "correctIndex": 0,
      "explanation": "Na história A1, Irlan caminha em direção à Praça da Bastilha, um local muito importante para a história da França."
    },
    {
      "question": "O que há no centro da Praça da Bastilha descrito no texto A1?",
      "options": [
        "Uma grande coluna com uma estátua dourada (grande colonne avec une statue dorée).",
        "Um grande aquário subterrâneo.",
        "Um campo de tênis coberto."
      ],
      "correctIndex": 0,
      "explanation": "No centro da praça suntuosa encontra-se uma grande coluna (a Coluna de Julho) coroada por uma estátua dourada."
    },
    {
      "question": "Em que data muitas pessoas se reúnem na praça para a festa nacional francesa?",
      "options": [
        "No dia catorze de julho (quatorze juillet).",
        "No dia primeiro de abril.",
        "No dia vinte e cinco de dezembro."
      ],
      "correctIndex": 0,
      "explanation": "O dia catorze de julho é a grande data da festa nacional francesa mencionada por Irlan em sua lição A1."
    }
  ]
});
