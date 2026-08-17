import fs from 'fs';
import path from 'path';

function saveLesson(lesson: any) {
  const filePath = path.join('src/data', `${lesson.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(lesson, null, 2), 'utf8');
  console.log(`[OK] Revised ${lesson.id}: ${lesson.vocabularyDictionary.length} terms | Level: ${lesson.level} | Title: ${lesson.titlePt}`);
}

// Lesson 15: Opéra Garnier
saveLesson({
  "id": "paris_lesson_15",
  "cityId": "paris",
  "domain": "Cultura & Arte",
  "level": "Iniciante (A1)",
  "titleFr": "L'Opéra Garnier : Musique, Émotions et Spectacles au Quotidien",
  "titlePt": "A Ópera Garnier : Música, Emoções e Espetáculos no Cotidiano (A1)",
  "subtitleFr": "Une soirée au théâtre pour apprendre le vocabulaire de la musique, des horaires et des sentiments",
  "subtitlePt": "Uma noite no teatro para aprender vocabulário de música, horários e sentimentos",
  "summaryPt": "Nesta Aula 15 de Paris (#1), Irlan assiste a um espetáculo de ópera e balé no magnífico Opéra Garnier. Ele pratica como perguntar o horário das apresentações, localizar seu assento na sala de concertos e expressar suas emoções ao ouvir música clássica, tudo usando estruturas essenciais do nível A1.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Ce soir, je vais à l'Opéra Garnier pour écouter un concert. Le grand bâtiment est illuminé au cœur de Paris.",
      "pt": "Esta noite, eu vou à Ópera Garnier para escutar um concerto. O grande edifício está iluminado no coração de Paris."
    },
    {
      "id": 2,
      "fr": "Je monte le grand escalier en marbre. Je cherche mon siège dans la salle rouge et or. Le spectacle commence à vingt heures.",
      "pt": "Eu subo a grande escadaria de mármore. Eu procuro meu assento na sala vermelha e dourada. O espetáculo começa às vinte horas."
    },
    {
      "id": 3,
      "fr": "Les musiciens jouent une musique très belle et douce. Je suis content et ému d'entendre ces mélodies célèbres.",
      "pt": "Os músicos tocam uma música muito bela e suave. Eu estou contente e emocionado de ouvir essas melodias famosas."
    },
    {
      "id": 4,
      "fr": "À la fin, le public applaudit les artistes avec enthousiasme. C'est une nuit inoubliable de mon voyage en France.",
      "pt": "No final, o público aplaude os artistas com entusiasmo. É uma noite inesquecível da minha viagem à França."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "opéra",
      "definitionPt": "Ópera, teatro de ópera (substantivo masculino)",
      "definitionFr": "Nom masculin ; théâtre destiné aux représentations d'opéras et de ballets",
      "inflections": ["opéra", "opéras"],
      "ptTargets": ["ópera"],
      "examples": [
        { "level": "A1", "fr": "L'Opéra Garnier est un beau bâtiment.", "pt": "A Ópera Garnier é um belo edifício." },
        { "level": "A2-B1", "fr": "Nous achetons des billets pour aller à l'opéra samedi soir.", "pt": "Nós compramos ingressos para ir à ópera no sábado à noite." },
        { "level": "B2", "fr": "L'acoustique de cette salle d'opéra est reconnue dans le monde entier.", "pt": "A acústica desta sala de ópera é reconhecida no mundo inteiro." },
        { "level": "C1-C2", "fr": "L'architecture éclectique de l'Opéra Garnier symbolise l'exubérance artistique du Second Empire.", "pt": "A arquitetura eclética da Ópera Garnier simboliza a exuberância artística do Segundo Império." }
      ]
    },
    {
      "term": "musique",
      "definitionPt": "Música (substantivo feminino)",
      "definitionFr": "Nom féminin ; art de combiner des sons d'une manière agréable à l'oreille",
      "inflections": ["musique", "musiques"],
      "ptTargets": ["música", "músicas"],
      "examples": [
        { "level": "A1", "fr": "J'aime écouter de la musique.", "pt": "Eu gosto de escutar música." },
        { "level": "A2-B1", "fr": "Cette musique classique m'aide à me concentrer pendant mes études.", "pt": "Esta música clássica me ajuda a me concentrar durante meus estudos." },
        { "level": "B2", "fr": "La musique orchestrale éveille de profondes émotions chez les auditeurs.", "pt": "A música orquestral desperta profundas emoções nos ouvintes." },
        { "level": "C1-C2", "fr": "La polyphonie subtile de cette composition témoigne de l'excellence de la musique symphonique.", "pt": "A polifonia sutil desta composição testemunha a excelência da música sinfônica." }
      ]
    },
    {
      "term": "spectacle",
      "definitionPt": "Espetáculo, apresentação (substantivo masculino)",
      "definitionFr": "Nom masculin ; représentation publique théâtrale ou musicale",
      "inflections": ["spectacle", "spectacles"],
      "ptTargets": ["espetáculo", "apresentação", "espetáculos"],
      "examples": [
        { "level": "A1", "fr": "Le spectacle commence à vingt heures.", "pt": "O espetáculo começa às vinte horas." },
        { "level": "A2-B1", "fr": "Le spectacle de balé était magnifique ce soir.", "pt": "O espetáculo de balé estava magnífico esta noite." },
        { "level": "B2", "fr": "Les spectateurs ont applaudi le spectacle pendant plus de dix minutes.", "pt": "Os espectadores aplaudiram o espetáculo por mais de dez minutos." },
        { "level": "C1-C2", "fr": "La mise en scène contemporaine de ce spectacle renouvelle l'approche des grands classiques.", "pt": "A encenação contemporânea deste espetáculo renova a abordagem dos grandes clássicos." }
      ]
    },
    {
      "term": "salle",
      "definitionPt": "Sala, salão (substantivo feminino)",
      "definitionFr": "Nom féminin ; pièce d'un édifice réservée au public",
      "inflections": ["salle", "salles"],
      "ptTargets": ["sala", "salão", "salas"],
      "examples": [
        { "level": "A1", "fr": "La salle est grande et rouge.", "pt": "A sala é grande e vermelha." },
        { "level": "A2-B1", "fr": "Je cherche mon numéro de place à l'intérieur de la salle.", "pt": "Eu procuro o número do meu lugar dentro da sala." },
        { "level": "B2", "fr": "Toute la salle s'est levée pour applaudir la soprano.", "pt": "Toda a sala se levantou para aplaudir a soprano." },
        { "level": "C1-C2", "fr": "L'ornementation fastueuse de la grande salle subjugue l'ensemble de l'auditoire.", "pt": "A ornamentação suntuosa do grande salão fascina todo o auditório." }
      ]
    },
    {
      "term": "escalier",
      "definitionPt": "Escadaria, escada (substantivo masculino)",
      "definitionFr": "Nom masculin ; suite de marches permettant de monter ou descendre",
      "inflections": ["escalier", "escaliers"],
      "ptTargets": ["escada", "escadaria", "escadas"],
      "examples": [
        { "level": "A1", "fr": "Je monte le grand escalier.", "pt": "Eu subo a grande escadaria." },
        { "level": "A2-B1", "fr": "Le grand escalier en marbre est idéal pour prendre des photos.", "pt": "A grande escadaria em mármore é ideal para tirar fotos." },
        { "level": "B2", "fr": "L'escalier principal servait autrefois de lieu de rencontre mondaine avant le concert.", "pt": "A escadaria principal servia antigamente de ponto de encontro social antes do concerto." },
        { "level": "C1-C2", "fr": "La perspective théâtrale de ce monumental escalier illustre la virtuosité de Charles Garnier.", "pt": "A perspectiva teatral desta monumental escadaria ilustra o virtuosismo de Charles Garnier." }
      ]
    },
    {
      "term": "écouter",
      "definitionPt": "Escutar, ouir com atenção (verbo)",
      "definitionFr": "Verbe ; prêter attention pour entendre des sons",
      "inflections": ["écoute", "écoutes", "écoutons", "écoutez", "écoutent", "écouté", "écouter"],
      "ptTargets": ["escutar", "escuto", "escuta", "ouvir"],
      "examples": [
        { "level": "A1", "fr": "J'écoute un concert de musique.", "pt": "Eu escuto um concerto de música." },
        { "level": "A2-B1", "fr": "Nous écoutons attentivement les indications du guide au musée.", "pt": "Nós escutamos atentamente as instruções do guia no museu." },
        { "level": "B2", "fr": "Il est important d'écouter les nuances vocales des artistes lyriques.", "pt": "É importante escutar as nuances vocais dos artistas líricos." },
        { "level": "C1-C2", "fr": "Écouter cette œuvre en direct permet de saisir la profondeur harmonique du compositeur.", "pt": "Escutar esta obra ao vivo permite captar a profundidade harmônica do compositor." }
      ]
    },
    {
      "term": "soir",
      "definitionPt": "Noite, entardecer (substantivo masculino)",
      "definitionFr": "Nom masculin ; fin de la journée et commencement de la nuit",
      "inflections": ["soir", "soirs"],
      "ptTargets": ["noite", "entardecer", "tarde"],
      "examples": [
        { "level": "A1", "fr": "Ce soir, je vais au théâtre.", "pt": "Esta noite, eu vou ao teatro." },
        { "level": "A2-B1", "fr": "Paris est très illuminée le soir après le coucher du soleil.", "pt": "Paris fica muito iluminada à noite após o pôr do sol." },
        { "level": "B2", "fr": "Les représentations de l'opéra ont lieu généralement le soir en semaine.", "pt": "As apresentações da ópera acontecem geralmente à noite durante a semana." },
        { "level": "C1-C2", "fr": "À la tombée du soir, l'atmosphère féerique des grands boulevards s'éveille.", "pt": "Anoitecendo, a atmosfera feérica das grandes avenidas desperta." }
      ]
    },
    {
      "term": "artiste",
      "definitionPt": "Artista (substantivo masculino ou feminino)",
      "definitionFr": "Nom ; personne qui crée ou interprète une œuvre d'art",
      "inflections": ["artiste", "artistes"],
      "ptTargets": ["artista", "artistas"],
      "examples": [
        { "level": "A1", "fr": "L'artiste chante très bien.", "pt": "O artista canta muito bem." },
        { "level": "A2-B1", "fr": "Les artistes saluent le public à la fin du spectacle.", "pt": "Os artistas saúdam o público ao final do espetáculo." },
        { "level": "B2", "fr": "De nombreux artistes de talent se produisent sur la scène parisienne.", "pt": "Muitos artistas talentosos se apresentam no palco parisiense." },
        { "level": "C1-C2", "fr": "L'interprétation magistrale de l'artiste consacra son rayonnement international.", "pt": "A interpretação magistral do artista consagrou sua notoriedade internacional." }
      ]
    },
    {
      "term": "siège",
      "definitionPt": "Assento, cadeira, lugar sentado (substantivo masculino)",
      "definitionFr": "Nom masculin ; meuble ou place pour s'asseoir dans une salle",
      "inflections": ["siège", "sièges"],
      "ptTargets": ["assento", "cadeira", "poltrona"],
      "examples": [
        { "level": "A1", "fr": "Je cherche mon siège numéro dix.", "pt": "Eu procuro meu assento número dez." },
        { "level": "A2-B1", "fr": "Les sièges de cette salle de spectacle sont très confortables.", "pt": "Os assentos desta sala de espetáculos são muito confortáveis." },
        { "level": "B2", "fr": "Veuillez rejoindre votre siège avant l'extinction des lumières.", "pt": "Por favor, dirija-se ao seu assento antes que as luzes se apaguem." },
        { "level": "C1-C2", "fr": "Depuis le balcon, chaque siège offre une visibilité optimale sur la fosse d'orchestre.", "pt": "Do balcão, cada assento oferece uma visibilidade ideal sobre o fosso da orquestra." }
      ]
    },
    {
      "term": "content",
      "definitionPt": "Contente, feliz (adjetivo masculino; feminino: contente)",
      "definitionFr": "Adjectif ; qui ressent de la joie et de la satisfaction",
      "inflections": ["content", "contente", "contents", "contentes"],
      "ptTargets": ["contente", "feliz", "satisfeito"],
      "examples": [
        { "level": "A1", "fr": "Je suis très content ce soir.", "pt": "Eu estou muito contente esta noite." },
        { "level": "A2-B1", "fr": "Nous sommes contents de visiter ce monument historique.", "pt": "Nós estamos contentes de visitar este monumento histórico." },
        { "level": "B2", "fr": "Les spectateurs étaient contents de découvrir une nouvelle production théâtrale.", "pt": "Os espectadores ficaram satisfeitos em descobrir uma nova produção teatral." },
        { "level": "C1-C2", "fr": "Le critique se montra particulièrement content de la précision technique de l'orchestre.", "pt": "O crítico mostrou-se particularmente satisfeito com a precisão técnica da orquestra." }
      ]
    },
    {
      "term": "commencer",
      "definitionPt": "Começar, iniciar (verbo)",
      "definitionFr": "Verbe ; débuter une action ou un événement",
      "inflections": ["commence", "commences", "commençons", "commencez", "commencent", "commencé", "commencer"],
      "ptTargets": ["começar", "começo", "começa", "iniciar"],
      "examples": [
        { "level": "A1", "fr": "Le concert commence maintenant.", "pt": "O concerto começa agora." },
        { "level": "A2-B1", "fr": "Nous devons arriver avant que le spectacle commence.", "pt": "Nós devemos chegar antes que o espetáculo comece." },
        { "level": "B2", "fr": "Les portes ferment cinq minutes avant que la représentation ne commence.", "pt": "As portas fecham cinco minutos antes que a apresentação comece." },
        { "level": "C1-C2", "fr": "Dès les premières notes qui commencent l'ouverture, le silence se fait dans la salle.", "pt": "Assim que soam as primeiras notas que iniciam a abertura, o silêncio toma conta da sala." }
      ]
    },
    {
      "term": "applaudir",
      "definitionPt": "Aplaudir, bater palmas (verbo)",
      "definitionFr": "Verbe ; battre des mains pour exprimer son admiration",
      "inflections": ["applaudis", "applaudit", "applaudissons", "applaudissez", "applaudissent", "applaudi", "applaudir"],
      "ptTargets": ["aplaudir", "aplaude", "aplaudem", "bater palmas"],
      "examples": [
        { "level": "A1", "fr": "Le public applaudit les musiciens.", "pt": "O público aplaude os músicos." },
        { "level": "A2-B1", "fr": "Nous applaudissons chaleureusement à la fin de la chanson.", "pt": "Nós aplaudimos calorosamente no final da canção." },
        { "level": "B2", "fr": "Les spectateurs enthousiastes ont applaudi l'orchestre debout.", "pt": "Os espectadores entusiasmados aplaudiram a orquestra em pé." },
        { "level": "C1-C2", "fr": "L'auditoire unanime ne cessa d'applaudir la performance exceptionnelle de la cantatrice.", "pt": "O auditório unânime não cessava de aplaudir a performance excepcional da cantora." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "question": "A que horas começa o espetáculo na Ópera Garnier nesta lição A1?",
      "options": [
        "Às sete da manhã (sept heures).",
        "Às vinte horas (vingt heures / 8h da noite).",
        "À meia-noite."
      ],
      "correctIndex": 1,
      "explanation": "No texto A1, Irlan menciona que o espetáculo começa às vinte horas (20h)."
    },
    {
      "question": "Como Irlan se sente ao escutar a música clássica tocada pelos músicos?",
      "options": [
        "Ele se sente contente e emocionado (content et ému).",
        "Ele se sente cansado e com dor de cabeça.",
        "Ele se sente triste e quer ir embora."
      ],
      "correctIndex": 0,
      "explanation": "Irlan afirma que fica contente e emocionado ao escutar aquelas melodias famosas."
    },
    {
      "question": "O que o público faz ao final da apresentação musical?",
      "options": [
        "Sai correndo em silêncio.",
        "Aplaude os artistas com entusiasmo (applaudit les artistes).",
        "Pede o reembolso dos bilhetes."
      ],
      "correctIndex": 1,
      "explanation": "No final da apresentação, o público aplaude os artistas com muito entusiasmo."
    }
  ]
});

// Lesson 16: Gastronomia Parisiense
saveLesson({
  "id": "paris_lesson_16",
  "cityId": "paris",
  "domain": "Gastronomia & Vinhos",
  "level": "Iniciante (A1)",
  "titleFr": "La Gastronomie Parisienne : Fromages, Pains et Saveurs Pratiques",
  "titlePt": "A Gastronomia Parisiense : Queijos, Pães e Sabores Práticos (A1)",
  "subtitleFr": "Vocabulaire pratique pour demander du pain frais, des fromages et des boissons dans les boutiques du quartier",
  "subtitlePt": "Vocabulário prático para pedir pão fresco, queijos e bebidas nas lojas de bairro",
  "summaryPt": "Nesta Aula 16 de Paris (#1), Irlan entra no dia a dia gastronômico do seu bairro. Ele aprende a pedir um pão fresco na padaria, escolher um pedaço de queijo camembert na loja de queijos e pedir uma refeição simples em um bistrot tradicional, usando vocabulário útil e direto do nível A1.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Ce matin, j'entre dans une boulangerie pour acheter une baguette fraîche et un croissant chaud.",
      "pt": "Esta manhã, eu entro em uma padaria para comprar uma baguete fresca e um croissant quente."
    },
    {
      "id": 2,
      "fr": "Ensuite, je vais à la fromagerie. Je demande : « Bonjour, je voudrais un morceau de fromage camembert, s'il vous plaît. »",
      "pt": "Em seguida, eu vou à loja de queijos. Eu peço: « Bom dia, eu gostaria de um pedaço de queijo camembert, por favor. »"
    },
    {
      "id": 3,
      "fr": "À midi, je m'assieds à une petite table de bistrot pour manger mon repas et boire un verre d'eau.",
      "pt": "Ao meio-dia, eu me sento em uma pequena mesa de bistrô para comer minha refeição e beber um copo de água."
    },
    {
      "id": 4,
      "fr": "La nourriture en France est délicieuse. C'est un plaisir de découvrir la gastronomie parisienne chaque jour.",
      "pt": "A comida na França é deliciosa. É um prazer descobrir a gastronomia parisiense a cada dia."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "baguette",
      "definitionPt": "Baguete, pão francês longo (substantivo feminino)",
      "definitionFr": "Nom féminin ; pain long et mince typique de la France",
      "inflections": ["baguette", "baguettes"],
      "ptTargets": ["baguete", "pão"],
      "examples": [
        { "level": "A1", "fr": "J'achète une baguette à la boulangerie.", "pt": "Eu compro uma baguete na padaria." },
        { "level": "A2-B1", "fr": "Une baguette fraîche est parfaite pour le petit-déjeuner.", "pt": "Uma baguete fresca é perfeita para o café da manhã." },
        { "level": "B2", "fr": "La baguette traditionnelle est inscrite au patrimoine culturel de la France.", "pt": "A baguete tradicional está inscrita no patrimônio cultural da França." },
        { "level": "C1-C2", "fr": "Le croustillant de la croûte d'une baguette artisanale distingue le véritable savoir-faire boulanger.", "pt": "A crocância da casca de uma baguete artesanal distingue o verdadeiro saber artesanal do padeiro." }
      ]
    },
    {
      "term": "fromagerie",
      "definitionPt": "Loja de queijos, queijaria (substantivo feminino)",
      "definitionFr": "Nom féminin ; commerce spécialisé dans la vente de fromages",
      "inflections": ["fromagerie", "fromageries"],
      "ptTargets": ["loja de queijos", "queijaria"],
      "examples": [
        { "level": "A1", "fr": "Je vais à la fromagerie du quartier.", "pt": "Eu vou à loja de queijos do bairro." },
        { "level": "A2-B1", "fr": "Dans la fromagerie, il y a des queijos de toutes les régions de France.", "pt": "Na loja de queijos, há queijos de todas as regiões da França." },
        { "level": "B2", "fr": "Le fromager de cette fromagerie affine ses fromages dans sa cave.", "pt": "O queijeiro desta queijaria cura seus queijos em sua adega." },
        { "level": "C1-C2", "fr": "La sélection proposée par cette fromagerie d'exception illustre la richesse des terroirs français.", "pt": "A seleção oferecida por esta queijaria de exceção ilustra a riqueza das regiões francesas." }
      ]
    },
    {
      "term": "repas",
      "definitionPt": "Refeição (substantivo masculino)",
      "definitionFr": "Nom masculin ; nourriture prise à des heures déterminées",
      "inflections": ["repas"],
      "ptTargets": ["refeição", "refeições"],
      "examples": [
        { "level": "A1", "fr": "C'est un bon repas.", "pt": "É uma boa refeição." },
        { "level": "A2-B1", "fr": "En France, le repas du midi est souvent un moment convivial.", "pt": "Na França, a refeição do almoço é frequentemente um momento agradável." },
        { "level": "B2", "fr": "Partager un repas au bistrot permet de découvrir les spécialités locales.", "pt": "Compartilhar uma refeição no bistrô permite descobrir as especialidades locais." },
        { "level": "C1-C2", "fr": "Le repas gastronomique des Français constitue un rituel social et culturel majeur.", "pt": "A refeição gastronômica dos franceses constitui um ritual social e cultural maior." }
      ]
    },
    {
      "term": "table",
      "definitionPt": "Mesa (substantivo feminino)",
      "definitionFr": "Nom féminin ; meuble composé d'un plateau sur des pieds",
      "inflections": ["table", "tables"],
      "ptTargets": ["mesa", "mesas"],
      "examples": [
        { "level": "A1", "fr": "Je m'assieds à une petite table.", "pt": "Eu me sento em uma pequena mesa." },
        { "level": "A2-B1", "fr": "Le serveur nous montre une table près de la fenêtre.", "pt": "O garçom nos mostra uma mesa perto da janela." },
        { "level": "B2", "fr": "Il est recommandé de réserver une table dans ce bistrot très populaire.", "pt": "É recomendável reservar uma mesa neste bistrô muito popular." },
        { "level": "C1-C2", "fr": "L'art de dresser la table contribue au raffinement de la gastronomie française.", "pt": "A arte de arrumar a mesa contribui para o refinamento da gastronomia francesa." }
      ]
    },
    {
      "term": "délicieux",
      "definitionPt": "Delicioso, saboroso (adjetivo masculino; feminino: délicieuse)",
      "definitionFr": "Adjectif ; qui a un goût très agréable",
      "inflections": ["délicieux", "délicieuse", "délicieuses"],
      "ptTargets": ["delicioso", "deliciosa", "deliciosos", "deliciosas"],
      "examples": [
        { "level": "A1", "fr": "Le fromage est délicieux.", "pt": "O queijo é delicioso." },
        { "level": "A2-B1", "fr": "Ce croissant chaud au beurre est vraiment délicieux.", "pt": "Este croissant quente com manteiga é realmente delicioso." },
        { "level": "B2", "fr": "Le chef a préparé un plat délicieux avec des légumes de saison.", "pt": "O chef preparou um prato delicioso com legumes da estação." },
        { "level": "C1-C2", "fr": "L'accord subtil des saveurs rend cet entremets absolument délicieux en bouche.", "pt": "A harmonia sutil dos sabores torna esta sobremesa absolutamente deliciosa ao paladar." }
      ]
    },
    {
      "term": "manger",
      "definitionPt": "Comer (verbo)",
      "definitionFr": "Verbe ; absorber des aliments solides",
      "inflections": ["mange", "manges", "mangeons", "mangez", "mangent", "mangé", "manger"],
      "ptTargets": ["comer", "como", "come"],
      "examples": [
        { "level": "A1", "fr": "Je mange un croissant.", "pt": "Eu como um croissant." },
        { "level": "A2-B1", "fr": "Nous allons manger au bistrot à midi.", "pt": "Nós vamos comer no bistrô ao meio-dia." },
        { "level": "B2", "fr": "Manger des produits locaux est une excellente façon de découvrir une région.", "pt": "Comer produtos locais é uma excelente forma de descobrir uma região." },
        { "level": "C1-C2", "fr": "L'art de bien manger en France associe plaisir gustatif et convivialité.", "pt": "A arte de comer bem na França associa prazer gustativo e convívio." }
      ]
    },
    {
      "term": "boire",
      "definitionPt": "Beber, tomar líquidos (verbo)",
      "definitionFr": "Verbe ; avaler un liquide",
      "inflections": ["bois", "boit", "buvons", "buvez", "boivent", "bu", "boire"],
      "ptTargets": ["beber", "bebo", "bebe", "tomar"],
      "examples": [
        { "level": "A1", "fr": "Je bois de l'eau fraîche.", "pt": "Eu bebo água fresca." },
        { "level": "A2-B1", "fr": "Les Français aiment boire un café après le déjeuner.", "pt": "Os franceses gostam de tomar um café depois do almoço." },
        { "level": "B2", "fr": "Il est conseillé de boire suffisamment d'eau pendant ses promenades en ville.", "pt": "É aconselhável beber bastante água durante os passeios pela cidade." },
        { "level": "C1-C2", "fr": "Boire avec modération permet d'apprécier la subtilité des crus de la région.", "pt": "Beber com moderação permite apreciar a sutileza dos vinhos da região." }
      ]
    },
    {
      "term": "nourriture",
      "definitionPt": "Comida, alimento (substantivo feminino)",
      "definitionFr": "Nom féminin ; ce qui sert à se nourrir",
      "inflections": ["nourriture", "nourritures"],
      "ptTargets": ["comida", "alimento", "alimentação"],
      "examples": [
        { "level": "A1", "fr": "La nourriture est très bonne ici.", "pt": "A comida é muito boa aqui." },
        { "level": "A2-B1", "fr": "J'adore la nourriture française traditionnelle.", "pt": "Eu adoro a comida francesa tradicional." },
        { "level": "B2", "fr": "La qualité de la nourriture sur les marchés parisiens est remarquable.", "pt": "A qualidade da comida nas feiras parisienses é notável." },
        { "level": "C1-C2", "fr": "La diversité de la nourriture reflète le patrimoine agricole des provinces françaises.", "pt": "A diversidade da alimentação reflete o patrimônio agrícola das províncias francesas." }
      ]
    },
    {
      "term": "morceau",
      "definitionPt": "Pedaço, porção (substantivo masculino)",
      "definitionFr": "Nom masculin ; partie d'un tout coupé ou brisé",
      "inflections": ["morceau", "morceaux"],
      "ptTargets": ["pedaço", "porção", "pedaços"],
      "examples": [
        { "level": "A1", "fr": "Je voudrais un morceau de fromage.", "pt": "Eu gostaria de um pedaço de queijo." },
        { "level": "A2-B1", "fr": "Peux-tu me couper un petit morceau de pain ?", "pt": "Você pode me cortar um pequeno pedaço de pão?" },
        { "level": "B2", "fr": "Le fromager prépare un morceau de comté affiné pour la dégustation.", "pt": "O queijeiro prepara um pedaço de queijo comté curado para a degustação." },
        { "level": "C1-C2", "fr": "Chaque morceau de ce dessert artisanal révèle une harmonie de textures parfaite.", "pt": "Cada pedaço desta sobremesa artesanal revela uma perfeita harmonia de texturas." }
      ]
    },
    {
      "term": "midi",
      "definitionPt": "Meio-dia, hora do almoço (substantivo masculino)",
      "definitionFr": "Nom masculin ; milieu de la journée (12h00)",
      "inflections": ["midi"],
      "ptTargets": ["meio-dia", "hora do almoço"],
      "examples": [
        { "level": "A1", "fr": "Il est midi, j'ai faim.", "pt": "É meio-dia, eu estou com fome." },
        { "level": "A2-B1", "fr": "À midi, les bistrots se remplissent de clients.", "pt": "Ao meio-dia, os bistrôs se enchem de clientes." },
        { "level": "B2", "fr": "Nous avons rendez-vous à midi précis devant la boulangerie.", "pt": "Nós temos encontro às doze em ponto em frente à padaria." },
        { "level": "C1-C2", "fr": "La pause de midi représente en France une parenthèse sacrée dédiée au repas.", "pt": "A pausa do meio-dia representa na França um parêntese sagrado dedicado à refeição." }
      ]
    },
    {
      "term": "eau",
      "definitionPt": "Água (substantivo feminino)",
      "definitionFr": "Nom féminin ; liquide transparent et inodore nécessaire à la vie",
      "inflections": ["eau", "eaux"],
      "ptTargets": ["água", "águas"],
      "examples": [
        { "level": "A1", "fr": "Je voudrais un verre d'eau, s'il vous plaît.", "pt": "Eu gostaria de um copo de água, por favor." },
        { "level": "A2-B1", "fr": "Au bistrot, on demande souvent une carafe d'eau.", "pt": "No bistrô, pede-se frequentemente uma jarra de água." },
        { "level": "B2", "fr": "L'eau potable de Paris est de très bonne qualité.", "pt": "A água potável de Paris é de muito boa qualidade." },
        { "level": "C1-C2", "fr": "La pureté cristalline de cette eau minérale s'accorde parfaitement aux mets délicats.", "pt": "A pureza cristalina desta água mineral harmoniza-se perfeitamente com pratos delicados." }
      ]
    },
    {
      "term": "plaisir",
      "definitionPt": "Prazer, satisfação (substantivo masculino)",
      "definitionFr": "Nom masculin ; sensation agréable, joie",
      "inflections": ["plaisir", "plaisirs"],
      "ptTargets": ["prazer", "satisfação"],
      "examples": [
        { "level": "A1", "fr": "C'est un plaisir de visiter Paris.", "pt": "É um prazer visitar Paris." },
        { "level": "A2-B1", "fr": "J'ai beaucoup de plaisir à apprendre le français chaque jour.", "pt": "Eu tenho muito prazer em aprender francês todos os dias." },
        { "level": "B2", "fr": "Le plaisir de la table est une composante essentielle de la culture française.", "pt": "O prazer da mesa é uma parte essencial da cultura francesa." },
        { "level": "C1-C2", "fr": "Cet établissement cultive le plaisir de la gastronomie dans le respect des traditions.", "pt": "Este estabelecimento cultiva o prazer da gastronomia no respeito às tradições." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "question": "O que Irlan compra primeiro nesta lição matinal (Aula 16)?",
      "options": [
        "Uma baguete fresca e um croissant quente na padaria (boulangerie).",
        "Uma caixa de chocolates e um chá preto.",
        "Um bolo de aniversário de morango."
      ],
      "correctIndex": 0,
      "explanation": "Na história A1, Irlan vai primeiro à padaria para comprar uma baguete fresca e um croissant quente."
    },
    {
      "question": "O que Irlan pede quando entra na loja de queijos (fromagerie)?",
      "options": [
        "Um pedaço de queijo camembert (un morceau de fromage camembert).",
        "Um quilo de manteiga sem sal.",
        "Três garrafas de leite fresco."
      ],
      "correctIndex": 0,
      "explanation": "Ele pede educadamente: « Bonjour, je voudrais un morceau de fromage camembert, s'il vous plaît. »"
    },
    {
      "question": "Onde Irlan se senta para almoçar ao meio-dia?",
      "options": [
        "No banco do metrô em movimento.",
        "Em uma pequena mesa de bistrô (petite table de bistrot) para comer e beber água.",
        "Na escadaria de uma igreja."
      ],
      "correctIndex": 1,
      "explanation": "Ao meio-dia (midi), Irlan se senta a uma pequena mesa de bistrô para saborear sua refeição e tomar água."
    }
  ]
});

// Lesson 17: Moda em Paris
saveLesson({
  "id": "paris_lesson_17",
  "cityId": "paris",
  "domain": "Cotidiano & Viagem",
  "level": "Iniciante (A1)",
  "titleFr": "Mode à Paris : Avenue Montaigne, Couleurs et Vêtements",
  "titlePt": "Moda em Paris : Avenue Montaigne, Cores e Roupas (A1)",
  "subtitleFr": "Apprenez à décrire des vêtements, des couleurs et des tailles en vous promenant sur les avenues de Paris",
  "subtitlePt": "Aprenda a descrever roupas, cores e tamanhos passeando pelas avenidas de Paris",
  "summaryPt": "Nesta Aula 17 de Paris (#1), Irlan caminha pela elegante Avenue Montaigne. Ele observa as vitrines das lojas de roupas parisienses e aprende vocabulário prático e útil de nível A1 para descrever cores, vestidos, casacos e sapatos, treinando a concordância simples entre adjetivos e substantivos.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Aujourd'hui, je me promène sur la célèbre Avenue Montaigne pour regarder les boutiques de mode.",
      "pt": "Hoje, eu passeio pela famosa Avenue Montaigne para olhar as lojas de moda."
    },
    {
      "id": 2,
      "fr": "Dans la vitrine, je vois une belle robe rouge, un grand manteau noir et des chaussures élégantes.",
      "pt": "Na vitrine, eu vejo um lindo vestido vermelho, um grande casaco preto e sapatos elegantes."
    },
    {
      "id": 3,
      "fr": "Je rentre dans un magasin et je demande : « Bonjour madame, avez-vous ce manteau en taille moyenne, s'il vous plaît ? »",
      "pt": "Eu entro em uma loja e pergunto: « Bom dia senhora, a senhora tem este casaco em tamanho médio, por favor ? »"
    },
    {
      "id": 4,
      "fr": "Paris est la capitale de l'élégance. J'aime apprendre les noms des vêtements et des couleurs en français.",
      "pt": "Paris é a capital da elegância. Eu gosto de aprender os nomes das roupas e das cores em francês."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "avenue",
      "definitionPt": "Avenida (substantivo feminino)",
      "definitionFr": "Nom féminin ; grande rue urbaine souvent plantée d'arbres",
      "inflections": ["avenue", "avenues"],
      "ptTargets": ["avenida", "avenidas"],
      "examples": [
        { "level": "A1", "fr": "L'avenue est large et belle.", "pt": "A avenida é larga e linda." },
        { "level": "A2-B1", "fr": "L'Avenue Montaigne est célèbre pour ses boutiques de mode.", "pt": "A Avenue Montaigne é famosa por suas lojas de moda." },
        { "level": "B2", "fr": "Nous nous promenons sur cette avenue bordée d'arbres historiques.", "pt": "Nós passeamos nesta avenida arborizada e histórica." },
        { "level": "C1-C2", "fr": "La perspective architecturale de cette prestigieuse avenue illustre l'urbanisme haussmannien.", "pt": "A perspectiva arquitetônica desta prestigiada avenida ilustra o urbanismo haussmanniano." }
      ]
    },
    {
      "term": "robe",
      "definitionPt": "Vestido (substantivo feminino)",
      "definitionFr": "Nom féminin ; vêtement féminin d'une seule pièce",
      "inflections": ["robe", "robes"],
      "ptTargets": ["vestido", "vestidos"],
      "examples": [
        { "level": "A1", "fr": "C'est une robe rouge.", "pt": "É um vestido vermelho." },
        { "level": "A2-B1", "fr": "J'aime beaucoup cette robe légère pour l'été.", "pt": "Eu gosto muito deste vestido leve para o verão." },
        { "level": "B2", "fr": "Les créateurs de mode présentent des robes élégantes pendant le défilé.", "pt": "Os estilistas apresentam vestidos elegantes durante o desfile." },
        { "level": "C1-C2", "fr": "La fluidité de la soie confère à cette robe de soirée un raffinement incomparable.", "pt": "A fluidez da seda confere a este vestido de gala um requinte incomparável." }
      ]
    },
    {
      "term": "manteau",
      "definitionPt": "Casaco, sobretudo (substantivo masculino)",
      "definitionFr": "Nom masculin ; vêtement d'hiver à manches longues que l'on porte sur les autres vêtements",
      "inflections": ["manteau", "manteaux"],
      "ptTargets": ["casaco", "sobretudo", "casacos"],
      "examples": [
        { "level": "A1", "fr": "Je porte un manteau noir.", "pt": "Eu uso um casaco preto." },
        { "level": "A2-B1", "fr": "En hiver, un bon manteau en laine est indispensable à Paris.", "pt": "No inverno, um bom casaco de lã é indispensável em Paris." },
        { "level": "B2", "fr": "La coupe classique de ce manteau protège efficacement contre le vent et le froid.", "pt": "O corte clássico deste casaco protege eficazmente contra o vento e o frio." },
        { "level": "C1-C2", "fr": "L'intemporelle élégance du manteau long symbolise le chic urbain parisien.", "pt": "A atemporal elegância do sobretudo longo simboliza o chique urbano parisiense." }
      ]
    },
    {
      "term": "chaussures",
      "definitionPt": "Sapatos, calçados (substantivo feminino plural)",
      "definitionFr": "Nom féminin pluriel ; articles d'habillement qui protègent les pieds",
      "inflections": ["chaussure", "chaussures"],
      "ptTargets": ["sapatos", "calçados", "sapato"],
      "examples": [
        { "level": "A1", "fr": "J'ai des chaussures confortables.", "pt": "Eu tenho sapatos confortáveis." },
        { "level": "A2-B1", "fr": "Il faut de bonnes chaussures pour marcher dans les rues de Paris.", "pt": "São necessários bons sapatos para caminhar nas ruas de Paris." },
        { "level": "B2", "fr": "Ces chaussures en cuir sont fabriquées par des artisans de talent.", "pt": "Estes sapatos de couro são fabricados por artesãos talentosos." },
        { "level": "C1-C2", "fr": "La précision du montage confère à ces chaussures un confort et une durabilité exemplaires.", "pt": "A precisão da montagem confere a estes calçados um conforto e durabilidade exemplares." }
      ]
    },
    {
      "term": "couleur",
      "definitionPt": "Cor (substantivo feminino)",
      "definitionFr": "Nom féminin ; impression que produit la lumière sur l'œil",
      "inflections": ["couleur", "couleurs"],
      "ptTargets": ["cor", "cores"],
      "examples": [
        { "level": "A1", "fr": "J'aime la couleur bleue.", "pt": "Eu gosto da cor azul." },
        { "level": "A2-B1", "fr": "Cette boutique propose des vêtements de toutes les couleurs.", "pt": "Esta loja oferece roupas de todas as cores." },
        { "level": "B2", "fr": "L'harmonie des couleurs est un élément essentiel de l'élégance vestimentaire.", "pt": "A harmonia das cores é um elemento essencial da elegância no vestuário." },
        { "level": "C1-C2", "fr": "La subtilité chromatique des nuances automnales enrichit la collection de mode.", "pt": "A sutileza cromática das nuances outonais enriquece a coleção de moda." }
      ]
    },
    {
      "term": "rouge",
      "definitionPt": "Vermelho, vermelha (adjetivo invariável no gênero; substantivo masculino)",
      "definitionFr": "Adjectif ; de la couleur du sang ou du coquelicot",
      "inflections": ["rouge", "rouges"],
      "ptTargets": ["vermelho", "vermelha", "vermelhos", "vermelhas"],
      "examples": [
        { "level": "A1", "fr": "La robe est rouge.", "pt": "O vestido é vermelho." },
        { "level": "A2-B1", "fr": "J'aime beaucoup cette écharpe rouge pour l'hiver.", "pt": "Eu gosto muito deste cachecol vermelho para o inverno." },
        { "level": "B2", "fr": "Le rouge est une couleur vive qui attire facilement le regard dans une vitrine.", "pt": "O vermelho é uma cor viva que atrai facilmente o olhar em uma vitrine." },
        { "level": "C1-C2", "fr": "Cette teinte de rouge profond confère une présence dramatique et raffinée à la tenue.", "pt": "Este tom de vermelho profundo confere uma presença dramática e refinada ao traje." }
      ]
    },
    {
      "term": "noir",
      "definitionPt": "Preto, preta (adjetivo masculino; feminino: noire)",
      "definitionFr": "Adjectif ; qui est de la couleur la plus sombre",
      "inflections": ["noir", "noire", "noirs", "noires"],
      "ptTargets": ["preto", "preta", "pretos", "pretas"],
      "examples": [
        { "level": "A1", "fr": "Mon manteau est noir.", "pt": "Meu casaco é preto." },
        { "level": "A2-B1", "fr": "La petite robe noire est un classique de la mode à Paris.", "pt": "O pretinho básico é um clássico da moda em Paris." },
        { "level": "B2", "fr": "Porter des vêtements noirs apporte souvent une note d'élégance intemporelle.", "pt": "Usar roupas pretas traz com frequência uma nota de elegância atemporal." },
        { "level": "C1-C2", "fr": "La rigueur graphique du noir sublime l'équilibre géométrique de la coupe.", "pt": "A rigidez gráfica do preto sublima o equilíbrio geométrico do corte." }
      ]
    },
    {
      "term": "vitrine",
      "definitionPt": "Vitrine, escaparate (substantivo feminino)",
      "definitionFr": "Nom féminin ; grande vitre d'un magasin derrière laquelle on expose les articles",
      "inflections": ["vitrine", "vitrines"],
      "ptTargets": ["vitrine", "vitrines"],
      "examples": [
        { "level": "A1", "fr": "Je regarde la jolie vitrine.", "pt": "Eu olho para a linda vitrine." },
        { "level": "A2-B1", "fr": "Les vitrines des magasins parisiens sont très bien décorées.", "pt": "As vitrines das lojas parisienses são muito bem decoradas." },
        { "level": "B2", "fr": "Les passants s'arrêtent pour admirer les créations présentées en vitrine.", "pt": "Os pedestres param para admirar as criações apresentadas na vitrine." },
        { "level": "C1-C2", "fr": "La scénographie soignée de cette vitrine reflète l'excellence de la haute couture.", "pt": "A cenografia caprichada desta vitrine reflete a excelência da alta-costura." }
      ]
    },
    {
      "term": "mode",
      "definitionPt": "Moda (substantivo feminino)",
      "definitionFr": "Nom féminin ; manière de se vêtir, de se comporter propre à une époque",
      "inflections": ["mode", "modes"],
      "ptTargets": ["moda", "modas"],
      "examples": [
        { "level": "A1", "fr": "Paris est la ville de la mode.", "pt": "Paris é a cidade da moda." },
        { "level": "A2-B1", "fr": "J'aime suivre la mode et découvrir les nouvelles collections.", "pt": "Eu gosto de seguir a moda e descobrir as novas coleções." },
        { "level": "B2", "fr": "L'industrie de la mode joue un rôle majeur dans l'économie et la culture française.", "pt": "A indústria da moda desempenha um papel importante na economia e na cultura francesa." },
        { "level": "C1-C2", "fr": "L'évolution historique de la mode reflète les mutations esthétiques de la société.", "pt": "A evolução histórica da moda reflete as transformações estéticas da sociedade." }
      ]
    },
    {
      "term": "taille",
      "definitionPt": "Tamanho, numeração de roupa (substantivo feminino)",
      "definitionFr": "Nom féminin ; dimension d'un vêtement ou stature d'une personne",
      "inflections": ["taille", "tailles"],
      "ptTargets": ["tamanho", "numeração", "medida"],
      "examples": [
        { "level": "A1", "fr": "Quelle est votre taille ?", "pt": "Qual é o seu tamanho?" },
        { "level": "A2-B1", "fr": "Je cherche ce manteau en taille moyenne.", "pt": "Eu procuro este casaco em tamanho médio." },
        { "level": "B2", "fr": "Les tailles de vêtements peuvent varier d'un pays à un autre.", "pt": "Os tamanhos de roupas podem variar de um país para outro." },
        { "level": "C1-C2", "fr": "L'exactitude de la taille garantit un tombé impeccable du vêtement sur la silhouette.", "pt": "A exatidão da numeração garante um caimento impecável da roupa na silhueta." }
      ]
    },
    {
      "term": "magasin",
      "definitionPt": "Loja, estabelecimento comercial (substantivo masculino)",
      "definitionFr": "Nom masculin ; établissement commercial où l'on vend des marchandises",
      "inflections": ["magasin", "magasins"],
      "ptTargets": ["loja", "estabelecimento", "lojas"],
      "examples": [
        { "level": "A1", "fr": "Le magasin est ouvert.", "pt": "A loja está aberta." },
        { "level": "A2-B1", "fr": "Je rentre dans le magasin pour essayer une veste.", "pt": "Eu entro na loja para experimentar uma jaqueta." },
        { "level": "B2", "fr": "Les grands magasins de Paris attirent chaque jour des milliers de visiteurs.", "pt": "Les grands magasins de Paris atraem todos os dias milhares de visitantes." },
        { "level": "C1-C2", "fr": "L'architecture intérieure de ce magasin historique perpétue le luxe commercial parisien.", "pt": "A arquitetura interior desta loja histórica perpetua o luxo comercial parisiense." }
      ]
    },
    {
      "term": "élégant",
      "definitionPt": "Elegante (adjetivo masculino; feminino: élégante)",
      "definitionFr": "Adjectif ; qui a de la grâce, du raffinement et du goût",
      "inflections": ["élégant", "élégante", "élégants", "élégantes"],
      "ptTargets": ["elegante", "elegantes", "refinado"],
      "examples": [
        { "level": "A1", "fr": "Le manteau est très élégant.", "pt": "O casaco é muito elegante." },
        { "level": "A2-B1", "fr": "Les Parisiens portent souvent des tenues sobres et élégantes.", "pt": "Os parisienses costumam usar trajes sobrios e elegantes." },
        { "level": "B2", "fr": "Cette marque propose un style élégant adapté à toutes les occasions.", "pt": "Esta marca oferece um estilo elegante adaptado a todas as ocasiões." },
        { "level": "C1-C2", "fr": "Le raffinement discret de ce vêtement incarne la quintessence d'un style élégant.", "pt": "O requinte discreto desta vestimenta encarna a quintessência de um estilo elegante." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "question": "Em qual avenida Irlan passeia nesta Aula 17 para olhar as vitrines?",
      "options": [
        "Avenue des Champs-Élysées.",
        "Avenue Montaigne, famosa por suas lojas de moda (boutiques de mode).",
        "Boulevard Saint-Michel."
      ],
      "correctIndex": 1,
      "explanation": "Irlan caminha pela prestigiosa Avenue Montaigne para observar as roupas nas vitrines."
    },
    {
      "question": "Quais roupas Irlan vê expostas na vitrine durante seu passeio?",
      "options": [
        "Um vestido vermelho (robe rouge), um grande casaco preto (manteau noir) e sapatos elegantes.",
        "Uma calça jeans velha e um boné verde.",
        "Um pijama amarelo e meias brancas."
      ],
      "correctIndex": 0,
      "explanation": "Na história A1, Irlan observa na vitrine um vestido vermelho, um grande casaco preto e sapatos elegantes."
    },
    {
      "question": "O que Irlan pergunta ao entrar no estabelecimento comercial?",
      "options": [
        "« Avez-vous ce manteau en taille moyenne, s'il vous plaît ? »",
        "« Quel est le nom de cette station de métro ? »",
        "« Où se trouve la tour Eiffel ? »"
      ],
      "correctIndex": 0,
      "explanation": "Irlan pratica como pedir uma numeração ou tamanho em francês A1 perguntando se eles têm aquele casaco em tamanho médio."
    }
  ]
});

// Lesson 18: Quartier Latin & Sorbonne
saveLesson({
  "id": "paris_lesson_18",
  "cityId": "paris",
  "domain": "Literatura & História",
  "level": "Iniciante (A1)",
  "titleFr": "Le Quartier Latin et la Sorbonne : Étudiants, Livres et Études",
  "titlePt": "O Quarteirão Latino e a Sorbonne : Estudantes, Livros e Estudos (A1)",
  "subtitleFr": "Vocabulaire des études, des livres et de la vie universitaire dans le cœur étudiant de Paris",
  "subtitlePt": "Vocabulário de estudos, livros e vida universitária no coração estudantil de Paris",
  "summaryPt": "Nesta Aula 18 de Paris (#1), Irlan explora o histórico Quarteirão Latino, perto da famosa universidade da Sorbonne. Ele aprende vocabulário prático de nível A1 para falar sobre estudos, livros, bibliotecas e estudantes, sentado em um café literário com seu caderno de notas.",
  "paragraphs": [
    {
      "id": 1,
      "fr": "Je marche dans le Quartier Latin, près de la célèbre université de la Sorbonne. Il y a beaucoup d'étudiants dans la rue.",
      "pt": "Eu caminho no Quarteirão Latino, perto da famosa universidade da Sorbonne. Há muitos estudantes na rua."
    },
    {
      "id": 2,
      "fr": "Les jeunes étudient dans les bibliothèques et achètent des livres dans les petites librairies du quartier.",
      "pt": "Os jovens estudam nas bibliotecas e compram livros nas pequenas livrarias do bairro."
    },
    {
      "id": 3,
      "fr": "Je m'installe à la table d'un café sympa. J'ouvre mon cahier et j'écris des nouveaux mots en français.",
      "pt": "Eu me sento na mesa de um café legal. Eu abro meu caderno e escrevo palavras novas em francês."
    },
    {
      "id": 4,
      "fr": "Apprendre une langue est une grande aventure. J'aime l'ambiance intellectuelle et jeune de cette partie de Paris.",
      "pt": "Aprender uma língua é uma grande aventura. Eu gosto da atmosfera intelectual e jovem desta parte de Paris."
    }
  ],
  "vocabularyDictionary": [
    {
      "term": "étudiant",
      "definitionPt": "Estudante (substantivo masculino; feminino: étudiante)",
      "definitionFr": "Nom ; personne qui fait des études supérieures",
      "inflections": ["étudiant", "étudiante", "étudiants", "étudiantes"],
      "ptTargets": ["estudante", "estudantes", "aluno"],
      "examples": [
        { "level": "A1", "fr": "Il est étudiant à Paris.", "pt": "Ele é estudante em Paris." },
        { "level": "A2-B1", "fr": "Les étudiants se retrouvent au café après les cours.", "pt": "Os estudantes se encontram no café depois das aulas." },
        { "level": "B2", "fr": "Le Quartier Latin attire depuis le Moyen Âge des étudiants de toute l'Europe.", "pt": "O Quarteirão Latino atrai desde a Idade Média estudantes de toda a Europa." },
        { "level": "C1-C2", "fr": "La communauté étudiante insuffle un dynamisme intellectuel permanent à ce quartier historique.", "pt": "A comunidade estudantil insufla um dinamismo intelectual permanente a este bairro histórico." }
      ]
    },
    {
      "term": "université",
      "definitionPt": "Universidade (substantivo feminino)",
      "definitionFr": "Nom féminin ; établissement d'enseignement supérieur",
      "inflections": ["université", "universités"],
      "ptTargets": ["universidade", "universidades"],
      "examples": [
        { "level": "A1", "fr": "La Sorbonne est une grande université.", "pt": "A Sorbonne é uma grande universidade." },
        { "level": "A2-B1", "fr": "Je veux étudier à l'université l'année prochaine.", "pt": "Eu quero estudar na universidade no ano que vem." },
        { "level": "B2", "fr": "Cette université propose des cours renommés en littérature et en histoire.", "pt": "Esta universidade oferece cursos famosos em literatura e história." },
        { "level": "C1-C2", "fr": "Le rayonnement international de l'université contribue à l'excellence académique française.", "pt": "O prestígio internacional da universidade contribui para a excelência acadêmica francesa." }
      ]
    },
    {
      "term": "livre",
      "definitionPt": "Livro (substantivo masculino)",
      "definitionFr": "Nom masculin ; ouvrage imprimé réuni sous une reliure",
      "inflections": ["livre", "livres"],
      "ptTargets": ["livro", "livros"],
      "examples": [
        { "level": "A1", "fr": "J'achète un bon livre en français.", "pt": "Eu compro um bom livro em francês." },
        { "level": "A2-B1", "fr": "J'aime lire un livre le soir avant de dormir.", "pt": "Eu gosto de ler um livro à noite antes de dormir." },
        { "level": "B2", "fr": "Les librairies du Quartier Latin possèdent un vaste choix de livres historiques.", "pt": "As livrarias do Quarteirão Latino possuem uma vasta escolha de livros históricos." },
        { "level": "C1-C2", "fr": "La lecture de ce livre fondamental éclaire l'évolution de la pensée humaniste.", "pt": "A leitura deste livro fundamental esclarece a evolução do pensamento humanista." }
      ]
    },
    {
      "term": "lire",
      "definitionPt": "Ler (verbo)",
      "definitionFr": "Verbe ; déchiffrer par les yeux un texte écrit",
      "inflections": ["lis", "lit", "lisons", "lisez", "lisent", "lu", "lire"],
      "ptTargets": ["ler", "leio", "lê", "lemos"],
      "examples": [
        { "level": "A1", "fr": "Je lis un livre dans le jardin.", "pt": "Eu leio um livro no jardim." },
        { "level": "A2-B1", "fr": "Nous aimons lire des romans en français pour enrichir notre vocabulaire.", "pt": "Nós gostamos de ler romances em francês para enriquecer nosso vocabulário." },
        { "level": "B2", "fr": "Lire chaque jour permet d'améliorer rapidement sa compréhension écrite.", "pt": "Ler todos os dias permite melhorar rapidamente sua compreensão escrita." },
        { "level": "C1-C2", "fr": "Lire les grands classiques permet d'appréhender la subtilité stylistique de la langue.", "pt": "Ler os grandes clássicos permite compreender a sutileza estilística do idioma." }
      ]
    },
    {
      "term": "étudier",
      "definitionPt": "Estudar (verbo)",
      "definitionFr": "Verbe ; appliquer son esprit pour apprendre ou comprendre quelque chose",
      "inflections": ["étudie", "étudies", "étudions", "étudiez", "étudient", "étudié", "étudier"],
      "ptTargets": ["estudar", "estudo", "estuda", "estudamos"],
      "examples": [
        { "level": "A1", "fr": "J'étudie le français chaque jour.", "pt": "Eu estudo francês todos os dias." },
        { "level": "A2-B1", "fr": "Les étudiants étudient dans le calme à la bibliothèque.", "pt": "Os estudantes estudam em silêncio na biblioteca." },
        { "level": "B2", "fr": "Il est motivant d'étudier une langue en voyageant dans le pays.", "pt": "É motivador estudar um idioma viajando pelo país." },
        { "level": "C1-C2", "fr": "Étudier les racines historiques et linguistiques offre une perspective culturelle globale.", "pt": "Estudar as raízes históricas e linguísticas oferece uma perspectiva cultural global." }
      ]
    },
    {
      "term": "bibliothèque",
      "definitionPt": "Biblioteca (substantivo feminino)",
      "definitionFr": "Nom féminin ; lieu où sont conservés et consultés des livres",
      "inflections": ["bibliothèque", "bibliothèques"],
      "ptTargets": ["biblioteca", "bibliotecas"],
      "examples": [
        { "level": "A1", "fr": "La bibliothèque est calme et grande.", "pt": "A biblioteca é calma e grande." },
        { "level": "A2-B1", "fr": "Je vais à la bibliothèque pour réviser mes leçons de grammaire.", "pt": "Eu vou à biblioteca para revisar minhas lições de gramática." },
        { "level": "B2", "fr": "Les bibliothèques universitaires du quartier sont toujours remplies de lecteurs.", "pt": "As bibliotecas universitárias do bairro estão sempre cheias de leitores." },
        { "level": "C1-C2", "fr": "L'architecture solennelle de cette bibliothèque invite à la concentration intellectuelle.", "pt": "A arquitetura solene desta biblioteca convida à concentração intelectual." }
      ]
    },
    {
      "term": "jeune",
      "definitionPt": "Jovem (adjetivo invariável no gênero; substantivo)",
      "definitionFr": "Adjectif ; qui est dans la première période de la vie",
      "inflections": ["jeune", "jeunes"],
      "ptTargets": ["jovem", "jovens"],
      "examples": [
        { "level": "A1", "fr": "C'est une ville très jeune.", "pt": "É uma cidade muito jovem." },
        { "level": "A2-B1", "fr": "Les jeunes se promènent dans le Quartier Latin l'après-midi.", "pt": "Os jovens passeiam no Quarteirão Latino à tarde." },
        { "level": "B2", "fr": "Ce quartier historique conserve un esprit dynamique et jeune.", "pt": "Este bairro histórico conserva um espírito dinâmico e jovem." },
        { "level": "C1-C2", "fr": "L'élan créatif de la jeune génération renouvelle la vie artistique parisienne.", "pt": "O impulso criativo da jovem geração renova a vida artística parisiense." }
      ]
    },
    {
      "term": "café",
      "definitionPt": "Café, cafeteria (substantivo masculino)",
      "definitionFr": "Nom masculin ; établissement public où l'on prend des boissons ou boisson chaude",
      "inflections": ["café", "cafés"],
      "ptTargets": ["café", "cafeteria", "cafés"],
      "examples": [
        { "level": "A1", "fr": "Je m'installe dans un café.", "pt": "Eu me sento em um café." },
        { "level": "A2-B1", "fr": "Nous buvons un café en terrasse pour regarder les passants.", "pt": "Nós tomamos um café no terraço para olhar as pessoas passando." },
        { "level": "B2", "fr": "Les cafés parisiens ont été des lieux de débat célèbres pour les écrivains.", "pt": "Os cafés parisienses foram locais de debate célebres para os escritores." },
        { "level": "C1-C2", "fr": "L'atmosphère conviviale et littéraire du café favorise la réflexion intellectuelle.", "pt": "A atmosfera agradável e literária do café favorece a reflexão intelectual." }
      ]
    },
    {
      "term": "cahier",
      "definitionPt": "Caderno, bloco de anotações (substantivo masculino)",
      "definitionFr": "Nom masculin ; assemblage de feuilles de papier cousues ou collées",
      "inflections": ["cahier", "cahiers"],
      "ptTargets": ["caderno", "cadernos", "bloco"],
      "examples": [
        { "level": "A1", "fr": "J'ouvre mon cahier de français.", "pt": "Eu abro meu caderno de francês." },
        { "level": "A2-B1", "fr": "J'écris tous les nouveaux verbes dans mon cahier de voyage.", "pt": "Eu escrevo todos os verbos novos no meu caderno de viagem." },
        { "level": "B2", "fr": "Un cahier bien organisé facilite grandement la révision du vocabulaire.", "pt": "Um caderno bem organizado facilita muito a revisão do vocabulário." },
        { "level": "C1-C2", "fr": "Le cahier d'impressions du voyageur consigne au jour le jour son évolution linguistique.", "pt": "O caderno de impressões do viajante registra dia a dia sua evolução linguística." }
      ]
    },
    {
      "term": "écrire",
      "definitionPt": "Escrever, anotar (verbo)",
      "definitionFr": "Verbe ; tracer des signes graphiques pour représenter des mots",
      "inflections": ["écris", "écrit", "écrivons", "écrivez", "écrivent", "écrit", "écrire"],
      "ptTargets": ["escrever", "escrevo", "escreve", "anotar"],
      "examples": [
        { "level": "A1", "fr": "J'écris des mots en français.", "pt": "Eu escrevo palavras em francês." },
        { "level": "A2-B1", "fr": "Je veux écrire une lettre à ma famille ce soir.", "pt": "Eu quero escrever uma carta para minha família esta noite." },
        { "level": "B2", "fr": "Écrire quotidiennement renforce la mémorisation des structures grammaticales.", "pt": "Escrever diariamente fortalece a memorização das estruturas gramaticais." },
        { "level": "C1-C2", "fr": "La rigueur de l'écrit consolide la clarté et la nuance de l'expression littéraire.", "pt": "A precisão da escrita consolida a clareza e a nuance da expressão literária." }
      ]
    },
    {
      "term": "rue",
      "definitionPt": "Rua (substantivo feminino)",
      "definitionFr": "Nom féminin ; voie de circulation dans une agglomération",
      "inflections": ["rue", "rues"],
      "ptTargets": ["rua", "ruas"],
      "examples": [
        { "level": "A1", "fr": "Il y a beaucoup de monde dans la rue.", "pt": "Há muita gente na rua." },
        { "level": "A2-B1", "fr": "Nous nous promenons dans les petites rues du Quartier Latin.", "pt": "Nós passeamos nas pequenas ruas do Quarteirão Latino." },
        { "level": "B2", "fr": "Les rues animées de ce quartier regorgent de librairies et de bistrots.", "pt": "As ruas movimentadas deste bairro estão repletas de livrarias e bistrôs." },
        { "level": "C1-C2", "fr": "L'alignement pittoresque des rues pavées évoque le charme du Paris médiéval.", "pt": "O alinhamento pitoresco das ruas de paralelepípedos evoca o charme do Paris medieval." }
      ]
    },
    {
      "term": "langue",
      "definitionPt": "Língua, idioma (substantivo feminino)",
      "definitionFr": "Nom féminin ; système de signes vocaux et écrits utilisé par une communauté",
      "inflections": ["langue", "langues"],
      "ptTargets": ["língua", "idioma", "línguas"],
      "examples": [
        { "level": "A1", "fr": "Le français est une belle langue.", "pt": "O francês é uma bela língua." },
        { "level": "A2-B1", "fr": "Apprendre une langue demande un peu de pratique chaque jour.", "pt": "Aprender uma língua exige um pouco de prática todos os dias." },
        { "level": "B2", "fr": "La maîtrise d'une langue étrangère ouvre de nouvelles perspectives culturelles.", "pt": "O domínio de uma língua estrangeira abre novas perspectivas culturais." },
        { "level": "C1-C2", "fr": "La subtilité lexicale de cette langue permet une précision d'expression remarquable.", "pt": "A sutileza lexical desta língua permite uma notável precisão de expressão." }
      ]
    }
  ],
  "quizQuestions": [
    {
      "question": "Em qual bairro universitário Irlan passeia nesta Aula 18?",
      "options": [
        "No Quarteirão Latino (Quartier Latin), perto da famosa universidade da Sorbonne.",
        "Em La Défense.",
        "Em Montmartre."
      ],
      "correctIndex": 0,
      "explanation": "Irlan explora o Quarteirão Latino, no centro estudantil de Paris perto da Sorbonne."
    },
    {
      "question": "O que os jovens estudantes fazem nas bibliotecas e livrarias do bairro?",
      "options": [
        "Eles estudam nas bibliotecas (étudient dans les bibliothèques) e compram livros.",
        "Eles jogam futebol dentro das livrarias.",
        "Eles cozinham pizzas."
      ],
      "correctIndex": 0,
      "explanation": "No texto A1, Irlan observa que os jovens estudam em silêncio nas bibliotecas e compram livros nas livrarias."
    },
    {
      "question": "O que Irlan faz quando se senta à mesa de um café?",
      "options": [
        "Ele abre seu caderno e escreve palavras novas em francês (écrit des nouveaux mots).",
        "Ele vai dormir na cadeira.",
        "Ele chama um táxi para o aeroporto."
      ],
      "correctIndex": 0,
      "explanation": "Sentado à mesa do café, Irlan abre seu caderno de anotações para escrever novas palavras em francês."
    }
  ]
});
