import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');

function loadLesson(id: number) {
  const filePath = path.join(DATA_DIR, `paris_lesson_${id}.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function saveLesson(id: number, data: any) {
  const filePath = path.join(DATA_DIR, `paris_lesson_${id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

console.log('=== Starting Paris Narrative 1-25 Harmonization ===');

// 1. Load original L3, L14, L25 and others
const l3 = loadLesson(3);
const l14 = loadLesson(14);
const l25 = loadLesson(25);

// 2. Fix Lesson 3: Change from departing/ticket to Amiens to buying the 11-City Rail Pass
l3.titleFr = "Crépuscule à la Tour Eiffel et le Passe de Train des 11 Villes";
l3.titlePt = "Crepúsculo na Torre Eiffel e o Passe de Trem das 11 Cidades";
l3.subtitleFr = "Admirer le coucher de soleil et organiser son passe ferroviaire pour la France";
l3.subtitlePt = "Admirar o pôr do sol e organizar seu passe ferroviário para a França";
l3.summaryPt = "Conectada às Lições 1 e 2, esta aula acompanha Irlan no entardecer na Torre Eiffel. Irlan revisa o mapa da livreira Sophie, adquire seu passe de trem multi-cidades e planeja suas próximas 25 experiências em Paris antes de seguir para o norte.";
l3.paragraphs = [
  {
    id: 1,
    fr: "Je m'assieds sur l'herbe du Champ-de-Mars et j'ouvre la carte que Sophie m'a donnée. Je regarde ma prochaine étape : la ville d'Amiens (#2), célèbre pour sa majestueuse cathédrale gótica.",
    pt: "Eu me sento na grama do Champ-de-Mars e abro o mapa que Sophie me deu. Eu olho minha próxima etapa : a cidade de Amiens (#2), célebre por sua majestosa catedral gótica."
  },
  {
    id: 2,
    fr: "Avant de quitter Paris, je veux explorer chaque quartier et chaque musée de la capitale.",
    pt: "Antes de deixar Paris, eu quero explorar cada bairro e cada museu da capital."
  },
  {
    id: 3,
    fr: "Au crépuscule, la Tour Eiffel s'illumine soudainement et scintille dans le ciel parisien.",
    pt: "No crepúsculo, a Torre Eiffel se ilumina de repente e brilha no céu parisiense."
  },
  {
    id: 4,
    fr: "Je valide mon passe de train multi-villes : je suis prêt pour toutes mes découvertes en France !",
    pt: "Eu valido meu passe de trem multi-cidades: estou pronto para todas as minhas descobertas na França!"
  }
];
saveLesson(3, l3);
console.log('✔ Updated Lesson 3: Rail pass planning instead of leaving.');

// 3. Swap L14 and L25 vocabulary & themes!
// L14 becomes "Viver em Paris - Mercados de Bairro e Cotidiano do Marais"
const l14New = {
  ...l25,
  id: "paris_lesson_14",
  level: "Intermediário (B1)",
  titleFr: "Vivre à Paris - Marchés de Quartier, Places et le Marais",
  titlePt: "Viver em Paris - Mercados de Bairro, Praças e o Marais",
  subtitleFr: "Découvrir la routine parisienne, les colonnes Morris et les fontaines Wallace",
  subtitlePt: "Descobrir a rotina parisiense, as colunas Morris e as fontes Wallace",
  summaryPt: "Esta Aula 14 (B1) acompanha Irlan vivenciando a rotina autêntica de Paris. Ele passeia pelas feiras ao ar livre, descobre o charme dos bairros residenciais, descansa em um banco Davioud perto de uma fonte Wallace e saboreia as tradições de bairro.",
  paragraphs: [
    {
      id: 1,
      fr: "Ce matin, j'explore mon arrondissement et je visite le marché en plein air du quartier.",
      pt: "Esta manhã, eu exploro meu arrondissement e visito o mercado ao ar livre do bairro."
    },
    {
      id: 2,
      fr: "Je m'arrête devant une colonne Morris pour regarder les affiches de théâtre et d'opéra.",
      pt: "Eu paro diante de uma coluna Morris para ver os cartazes de teatro e de ópera."
    },
    {
      id: 3,
      fr: "Je m'assieds sur un banc Davioud à côté d'une fontaine Wallace pour boire de l'eau fraîche.",
      pt: "Eu me sento em um banco Davioud ao lado de uma fonte Wallace para beber água fresca."
    },
    {
      id: 4,
      fr: "Vivre à Paris, c'est apprécier chaque détail subtil de la vie quotidienne de quartier.",
      pt: "Viver em Paris é apreciar cada detalhe sutil da vida cotidiana de bairro."
    }
  ]
};
saveLesson(14, l14New);
console.log('✔ Swapped Lesson 14: Now Parisian daily life & neighborhood markets.');

// L25 becomes "O Adeus de Irlan a Paris e a Partida para Amiens - Na Gare du Nord"
const l25New = {
  ...l14,
  id: "paris_lesson_25",
  level: "Avançado (C1)",
  titleFr: "L'Au Revoir à Paris et le Départ pour Amiens (#2) - À la Gare du Nord",
  titlePt: "O Adeus de Irlan a Paris e a Partida para Amiens (#2) - Na Gare du Nord",
  subtitleFr: "Faire sa valise, quitter l'hôtel et embarquer pour la deuxième ville de France",
  subtitlePt: "Fazer a mala, deixar o hotel e embarcar para a segunda cidade da França",
  summaryPt: "Esta Aula 25 (C1) é o Grand Finale de Paris (#1)! Após 25 aulas imersivas na capital, Irlan faz o check-out no hotel, envia uma mensagem de gratidão à livreira Sophie, caminha até a Gare du Nord e embarca em seu trem para Amiens (#2).",
  paragraphs: [
    {
      id: 1,
      fr: "Pour ma dernière matinée à Paris, je prépare ma valise avec soin après avoir vécu tant d'aventures.",
      pt: "Para minha última manhã em Paris, eu preparo minha mala com cuidado após ter vivido tantas aventuras."
    },
    {
      id: 2,
      fr: "J'envoie un message de remerciement à Sophie pour ses précieux conseils sur les onze villes de France.",
      pt: "Eu envio uma mensagem de agradecimento a Sophie por seus preciosos conselhos sobre as onze cidades da França."
    },
    {
      id: 3,
      fr: "Je prends mon dernier café au lait en terrasse et je dis au revoir à cette capitale inoubliable.",
      pt: "Eu tomo meu último café com leite no terraço e digo adeus a esta capital inesquecível."
    },
    {
      id: 4,
      fr: "À la Gare du Nord, je monte dans le wagon pour Amiens (#2) : ma grande aventure continue !",
      pt: "Na Gare du Nord, eu subo no vagão para Amiens (#2) : minha grande aventura continua!"
    }
  ]
};
saveLesson(25, l25New);
console.log('✔ Swapped Lesson 25: Now the GRAND FINALE where Irlan departs for Amiens (#2).');

// 4. Update Lessons 15 to 24 paragraphs to explicitly weave Irlan's journey into every lesson!
const narrativeUpdates: Record<number, { titleFr?: string; titlePt?: string; subtitleFr?: string; subtitlePt?: string; summaryPt: string; paragraphs: { id: number; fr: string; pt: string }[] }> = {
  15: {
    summaryPt: "Esta Aula 15 acompanhando Irlan ao prestigiado Opéra Garnier no coração de Paris. Você aprenderá vocabulário sobre música clássica, arquitetura teatral, espetáculos e a atmosfera cultural parisiense.",
    paragraphs: [
      { id: 1, fr: "Ce soir, je m'habille élégamment pour assister à un spectacle au célèbre Opéra Garnier.", pt: "Esta noite, eu me visto elegantemente para assistir a um espetáculo na famosa Ópera Garnier." },
      { id: 2, fr: "Dans le hall principal, j'admire le grand escalier en marbre et les lustres dorés qui illuminent la salle.", pt: "No saguão principal, eu admiro a grande escadaria em mármore e os lustres dourados que iluminam a sala." },
      { id: 3, fr: "Je trouve ma place et j'observe attentivement le magnifique teto peint par Marc Chagall.", pt: "Eu encontro meu lugar e observo atentamente o magnífico teto pintado por Marc Chagall." },
      { id: 4, fr: "L'orchestre commence une symphonie classique : l'acoustique de la salle est absolument parfaite.", pt: "A orquestra começa uma sinfonia clássica: a acústica da sala é absolutamente perfeita." }
    ]
  },
  16: {
    summaryPt: "Esta Aula 16 acompanha Irlan descobrindo a autêntica gastronomia parisiense, visitando uma queijaria tradicional, degustando vinhos em um bistrô e conversando com especialistas em sabores franceses.",
    paragraphs: [
      { id: 1, fr: "Ce matin, j'entre dans une boulangerie artisanale pour goûter une baguette tout juste sortie du four.", pt: "Esta manhã, eu entro em uma padaria artesanal para provar uma baguete recém-saída do forno." },
      { id: 2, fr: "Dans la fromagerie du quartier, le fromager me conseille un camembert crémeux et un comté exceptionnel.", pt: "Na queijaria do bairro, o queijeiro me aconselha um camembert cremoso e um comté excepcional." },
      { id: 3, fr: "Le sommelier d'un bistrot typique me suggère un vin rouge équilibré pour accompagner mon déjeuner.", pt: "O sommelier de um bistrô típico me sugere um vinho tinto equilibrado para acompanhar meu almoço." },
      { id: 4, fr: "Je comprends pourquoi la gastronomie parisienne est considérée comme un trésor mondial.", pt: "Eu compreendo por que a gastronomia parisiense é considerada um tesouro mundial." }
    ]
  },
  17: {
    summaryPt: "Esta Aula 17 acompanha Irlan pela elegante Avenue Montaigne, conhecendo a história da alta-costura parisiense, ateliês tradicionais e a refinada estética da moda de Paris.",
    paragraphs: [
      { id: 1, fr: "Je me promène sur l'Avenue Montaigne pour admirer les grandes maisons de haute couture de Paris.", pt: "Eu passeio pela Avenue Montaigne para admirar as grandes casas de alta-costura de Paris." },
      { id: 2, fr: "Dans les vitrines illuminées, j'observe des créations élégantes faites avec un savoir-faire artisanal unique.", pt: "Nas vitrines iluminadas, eu observo criações elegantes feitas com um saber-fazer artesanal único." },
      { id: 3, fr: "Je visite une exposition sur l'histoire de la mode et les grands créateurs parisiens.", pt: "Eu visito uma exposição sobre a história da moda e os grandes criadores parisienses." },
      { id: 4, fr: "Paris révèle ici son style incomparable : un équilibre parfait entre tradition et modernité.", pt: "Paris revela aqui seu estilo incomparável: um equilíbrio perfeito entre tradição e modernidade." }
    ]
  },
  18: {
    summaryPt: "Esta Aula 18 acompanha Irlan explorando o Quarteirão Latino, berço da Sorbonne e da efervescência acadêmica parisiense, caminhando por ruas históricas e livrarias de filosofia.",
    paragraphs: [
      { id: 1, fr: "Je traverse le Quartier Latin, célèbre pour ses universités prestigieuses et son ambiance jeune.", pt: "Eu atravesso o Quarteirão Latino, famoso por suas universidades prestigiosas e seu ambiente jovem." },
      { id: 2, fr: "Devant la Sorbonne, je regarde les étudiants qui discutent de littérature et de philosophie.", pt: "Diante da Sorbonne, eu observo os estudantes que discutem literatura e filosofia." },
      { id: 3, fr: "Je m'installe à la terrasse d'un café littéraire pour écrire mes notes en français.", pt: "Eu me instalo no terraço de um café literário para escrever minhas anotações em francês." },
      { id: 4, fr: "En montant vers le Panthéon, je rends hommage aux grands penseurs et écrivains de France.", pt: "Subindo em direção ao Panteão, eu presto homenagem aos grandes pensadores e escritores da França." }
    ]
  },
  19: {
    titleFr: "Montmartre de Jour - Les Portraitistes de la Place du Tertre",
    titlePt: "Montmartre de Dia - Os Retratistas da Place du Tertre",
    subtitleFr: "Observer la peinture en plein air et la tradition bohème de la colline",
    subtitlePt: "Observar a pintura ao ar livre e a tradição boêmia da colina",
    summaryPt: "Após visitar Montmartre à noite (Aula 11), Irlan retorna de dia nesta Aula 19 para explorar a Place du Tertre, observar os pintores e retratistas ao ar livre e entender a herança boêmia do bairro.",
    paragraphs: [
      { id: 1, fr: "Je retourne à Montmartre en pleine journée pour découvrir la célèbre Place du Tertre.", pt: "Eu retorno a Montmartre em pleno dia para descobrir a famosa Place du Tertre." },
      { id: 2, fr: "Des peintres et des portraitistes installent leurs chevalets en plein air face aux visiteurs.", pt: "Pintores e retratistas instalam seus cavaletes ao ar livre diante dos visitantes." },
      { id: 3, fr: "Je marche dans les ruelles pittoresques qui ont inspiré tant d'artistes bohémiens au siècle dernier.", pt: "Eu caminho pelas ruelas pitorescas que inspiraram tantos artistas boêmios no século passado." },
      { id: 4, fr: "Depuis le sommet de la butte, le panorama sur les toits de Paris est absolument féerique.", pt: "Do topo da colina, o panorama sobre os telhados de Paris é absolutamente mágico." }
    ]
  },
  20: {
    summaryPt: "Esta Aula 20 acompanha Irlan ao Museu de Orsay, localizado em uma monumental antiga estação ferroviária, onde ele contempla as obras-primas do Impressionismo francês.",
    paragraphs: [
      { id: 1, fr: "Je visite le Musée d'Orsay, magnifique musée installé dans une ancienne gare ferroviaire.", pt: "Eu visito o Museu de Orsay, magnífico museu instalado em uma antiga estação ferroviária." },
      { id: 2, fr: "J'admire les tableaux impressionnistes de Monet, Renoir et Degas aux couleurs lumineuses.", pt: "Eu admiro os quadros impressionistas de Monet, Renoir e Degas com cores luminosas." },
      { id: 3, fr: "Derrière la grande horloge du musée, je découvre une vue spectaculaire sur la Seine.", pt: "Atrás do grande relógio do museu, eu descubro uma vista espetacular sobre o Sena." },
      { id: 4, fr: "Cette collection illustre parfaitement la créativité et la liberté artistique de la Belle Époque.", pt: "Esta coleção ilustra perfeitamente a criatividade e a liberdade artística da Belle Époque." }
    ]
  },
  21: {
    summaryPt: "Esta Aula 21 acompanha Irlan em uma tarde relaxante pelos jardins históricos de Paris, como o Jardin du Luxembourg e o Jardin des Tuileries, lendo e observando as tradições locais.",
    paragraphs: [
      { id: 1, fr: "Après mes visites au musée, je vais me reposer au célèbre Jardin du Luxembourg.", pt: "Após minhas visitas ao museu, eu vou me repousar no famoso Jardim de Luxemburgo." },
      { id: 2, fr: "Je m'assieds sur une chaise verte traditionnelle pour lire un livre en profitant du soleil.", pt: "Eu me sento em uma cadeira verde tradicional para ler um livro aproveitando o sol." },
      { id: 3, fr: "Autour du grand bassin central, j'observe les enfants qui font naviguer de petits bateaux à voile.", pt: "Ao redor do grande espelho d'água central, eu observo as crianças que fazem navegar pequenos barcos a vela." },
      { id: 4, fr: "Ces jardins historiques sont de véritables havres de paix au cœur de l'animation parisienne.", pt: "Estes jardins históricos são verdadeiros refúgios de paz no coração da agitação parisiense." }
    ]
  },
  22: {
    summaryPt: "Esta Aula 22 acompanha Irlan até a Praça da Bastilha, onde ele compreende a importância da Revolução Francesa e o lema da república: Liberdade, Igualdade, Fraternidade.",
    paragraphs: [
      { id: 1, fr: "Je me rends sur la Place de la Bastille pour comprendre un chapitre fondamental de l'histoire française.", pt: "Eu vou até a Praça da Bastilha para compreender um capítulo fundamental da história francesa." },
      { id: 2, fr: "Au centre de la place s'élève la Colonne de Juillet surmontée par le Génie de la Liberté doré.", pt: "No centro da praça ergue-se a Coluna de Julho coroada pelo Gênio da Liberdade dourado." },
      { id: 3, fr: "Je lis la devise républicaine Liberté, Égalité, Fraternité inscrite sur les monuments de la ville.", pt: "Eu leio o lema republicano Liberdade, Igualdade, Fraternidade inscrito nos monumentos da cidade." },
      { id: 4, fr: "Ces idéaux historiques continuent de guider la culture démocratique et civique aujourd'hui.", pt: "Esses ideais históricos continuam guiando a cultura democrática e cívica hoje." }
    ]
  },
  23: {
    summaryPt: "Esta Aula 23 acompanha Irlan em um percurso literário por Paris, seguindo os passos de Victor Hugo, Marcel Proust e Albert Camus, e visitando livrarias históricas na margem esquerda.",
    paragraphs: [
      { id: 1, fr: "Aujourd'hui, je fais un parcours littéraire pour découvrir le Paris de Victor Hugo et Marcel Proust.", pt: "Hoje, eu faço um percurso literário para descobrir a Paris de Victor Hugo e Marcel Proust." },
      { id: 2, fr: "Je visite la célèbre librairie Shakespeare and Company face à la cathédrale Notre-Dame.", pt: "Eu visito a famosa livraria Shakespeare and Company de frente para a catedral Notre-Dame." },
      { id: 3, fr: "Dans un café de Saint-Germain-des-Prés, je lis quelques pages d'un roman français.", pt: "Em um café de Saint-Germain-des-Prés, eu leio algumas páginas de um romance francês." },
      { id: 4, fr: "La littérature m'aide à comprendre l'âme profonde et l'histoire romantique de la capitale.", pt: "A literatura me ajuda a compreender a alma profunda e a história romântica da capital." }
    ]
  },
  24: {
    summaryPt: "Esta Aula 24 acompanha Irlan ao distrito de La Défense, onde ele explora a Paris contemporânea, arranha-céus arrojados e o contraste com a arquitetura haussmanniana.",
    paragraphs: [
      { id: 1, fr: "Pour mon avant-dernière journée à Paris, je prends le métro en direction de La Défense.", pt: "Para meu penúltimo dia em Paris, eu pego o metrô em direção a La Défense." },
      { id: 2, fr: "J'admire La Grande Arche qui s'aligne parfaitement avec l'axe historique du Louvre.", pt: "Eu admiro a Grande Arche que se alinha perfeitamente com o eixo histórico do Louvre." },
      { id: 3, fr: "Les gratte-ciels en verre et en acier montrent une capitale résolument tournée vers le futur.", pt: "Os arranha-céus de vidro e aço mostram uma capital resolutamente voltada para o futuro." },
      { id: 4, fr: "Paris est une ville extraordinaire qui sait célébrer son passé tout en inventant sa modernité.", pt: "Paris é uma cidade extraordinária que sabe celebrar seu passado ao mesmo tempo que inventa sua modernidade." }
    ]
  }
};

for (const [idStr, update] of Object.entries(narrativeUpdates)) {
  const idNum = Number(idStr);
  const l = loadLesson(idNum);
  if (update.titleFr) l.titleFr = update.titleFr;
  if (update.titlePt) l.titlePt = update.titlePt;
  if (update.subtitleFr) l.subtitleFr = update.subtitleFr;
  if (update.subtitlePt) l.subtitlePt = update.subtitlePt;
  l.summaryPt = update.summaryPt;
  l.paragraphs = update.paragraphs;
  saveLesson(idNum, l);
  console.log(`✔ Updated Lesson ${idNum} narrative to feature Irlan.`);
}

console.log('=== Paris Narrative Harmonization Complete (1 to 25) ===');
