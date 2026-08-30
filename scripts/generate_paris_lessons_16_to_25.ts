import fs from 'fs';
import path from 'path';

interface VocabTerm {
  term: string;
  wordFr: string;
  definitionPt: string;
  definitionFr: string;
  difficultyLevel: string;
  examples: Array<{ level: string; fr: string; pt: string }>;
}

interface LessonData {
  id: string;
  cityId: string;
  domain: string;
  level: string;
  titleFr: string;
  titlePt: string;
  subtitleFr: string;
  subtitlePt: string;
  summaryPt: string;
  paragraphs: Array<{ id: number; fr: string; pt: string }>;
  vocabularyDictionary: VocabTerm[];
}

// Helper to generate 4 progressive examples if not explicitly defined
function build4Examples(word: string, defPt: string): Array<{ level: string; fr: string; pt: string }> {
  // Regra 13 da bíblia: exemplos devem ser frases reais do dia a dia, nunca
  // meta-linguagem. Os antigos templates ("C'est un exemple simple avec X",
  // "l'importance de X") eram deploráveis. Sem curadoria, retornamos vazio —
  // o autor preenche os 4 exemplos reais no masterExamplesDictionary.
  void word;
  void defPt;
  return [];
}

const lessonsToGenerate: Array<{
  num: number;
  domain: string;
  level: string;
  titleFr: string;
  titlePt: string;
  subtitleFr: string;
  subtitlePt: string;
  summaryPt: string;
  paragraphs: Array<{ id: number; fr: string; pt: string }>;
  words: Array<{ term: string; wordFr?: string; defPt: string; defFr: string; level?: string; ex?: Array<{ level: string; fr: string; pt: string }> }>;
}> = [
  {
    num: 16,
    domain: "Gastronomia & Vinhos",
    level: "Intermediário (B1)",
    titleFr: "La Gastronomie Parisienne - Fromages, Vins et Boulangeries",
    titlePt: "A Gastronomia Parisiense - Queijos, Vinhos e Padarias",
    subtitleFr: "Déguster des saveurs authentiques dans les tables parisiennes",
    subtitlePt: "Degustar sabores autênticos nas mesas parisienses",
    summaryPt: "Esta Aula 16 explora a gastronomia parisiense, desde as queijarias tradicionais até as padarias artesanais e os bistrôs selecionados.",
    paragraphs: [
      { id: 1, fr: "La gastronomie parisienne commence souvent par une visite matinale chez l'artisan boulanger pour savourer une baguette fraîchement cuite.", pt: "A gastronomia parisiense começa frequentemente com uma visita matinal ao padeiro artesanal para saborear uma baguete recém-assada." },
      { id: 2, fr: "Dans les fromageries de quartier, l'affineur conseille avec soin un camembert crémeux ou un comté d'exception.", pt: "Nas queijarias do bairro, o especialista em maturação aconselha com cuidado um camembert cremoso ou um comté excepcional." },
      { id: 3, fr: "Le sommelier d'un bistrot typique propose un vin rouge équilibré pour accompagner les plats régionaux.", pt: "O sommelier de um bistrô típico propõe um vinho tinto equilibrado para acompanhar os pratos regionais." },
      { id: 4, fr: "Chaque repas est une célébration conviviale où les convives partagent leur passion pour le goût authentique.", pt: "Cada refeição é uma celebração de convívio onde os convidados compartilham sua paixão pelo sabor autêntico." },
      { id: 5, fr: "Ainsi, l'art culinaire de la capitale perpétue un héritage de gourmandise reconnu à travers le monde entier.", pt: "Assim, a arte culinária da capital perpetua uma herança de indulgência reconhecida pelo mundo inteiro." }
    ],
    words: [
      { term: "gastronomie", defPt: "a gastronomia", defFr: "Art de faire bonne chère et culture des mets raffinés" },
      { term: "artisan", defPt: "o artesão / manual", defFr: "Personne qui exerce un métier manuel traditionnel" },
      { term: "boulanger", defPt: "o padeiro", defFr: "Artisan qui fabrique et vend du pain" },
      { term: "baguette", defPt: "a baguete / pão francês longilíneo", defFr: "Pain long et mince traditionnel en France" },
      { term: "fraîchement", defPt: "frescamente / recentemente", defFr: "De manière récente ou fraîche" },
      { term: "cuite", defPt: "assada / cozida", defFr: "Qui a subi une cuisson au four" },
      { term: "fromagerie", defPt: "a queijaria / loja de queijos", defFr: "Boutique spécialisée dans la vente de fromages" },
      { term: "affineur", defPt: "o especialista em maturação de queijos", defFr: "Spécialiste qui amène les fromages à maturité" },
      { term: "camembert", defPt: "o queijo camembert", defFr: "Fromage à pâte molle d'origine normande" },
      { term: "crémeux", defPt: "cremoso / suave", defFr: "Qui a la texture riche de la crème" },
      { term: "comté", defPt: "o queijo comté", defFr: "Fromage à pâte pressée cuite au goût fruité" },
      { term: "sommelier", defPt: "o sommelier / especialista em vinhos", defFr: "Spécialiste des vins dans un restaurant" },
      { term: "bistrot", defPt: "o bistrô / restaurante casual", defFr: "Petit restaurant parisien convivial" },
      { term: "équilibré", defPt: "equilibrado / harmônico", defFr: "Qui présente une juste proportion de saveurs" },
      { term: "accompagner", defPt: "acompanhar / servir junto", defFr: "Servir avec un autre aliment ou boisson" },
      { term: "régionaux", defPt: "regionais / locais", defFr: "Qui sont originaires des différentes régions" },
      { term: "célébration", defPt: "a celebração / comemoração", defFr: "Action de célébrer un événement en groupe" },
      { term: "conviviale", defPt: "amistosa / sociável", defFr: "Chaleureux, où règne une bonne entente" },
      { term: "convives", defPt: "os convidados / comensais", defFr: "Personnes qui participent ensemble à un repas" },
      { term: "partagent", defPt: "compartilham / dividem", defFr: "Action de diviser ou de vivre ensemble" },
      { term: "passion", defPt: "a paixão / entusiasmo", defFr: "Émotion intense ou intérêt profond" },
      { term: "authentique", defPt: "autêntico / verdadeiro", defFr: "Dont la vérité ou l'origine est incontestable" },
      { term: "culinaire", defPt: "culinário / gastronômico", defFr: "Relatif à la cuisine et à la préparation des plats" },
      { term: "perpétue", defPt: "perpetua / mantém vivo", defFr: "Fait durer longtemps ou continuellement" },
      { term: "gourmandise", defPt: "o prazer culinário / gula fina", defFr: "Amour raffiné des bons aliments" },
      { term: "reconnu", defPt: "reconhecido / célebre", defFr: "Qui jouit d'une réputation établie" },
      { term: "charcuterie", defPt: "a charcutaria / frios artesanais", defFr: "Préparations alimentaires à base de viande" },
      { term: "terrine", defPt: "a terrine / patê assado", defFr: "Préparation culinaire cuite dans un récipient en terre" },
      { term: "croustillant", defPt: "crocante / estaladiço", defFr: "Qui croque sous la dent de façon agréable" },
      { term: "saveur", defPt: "o sabor / gosto", defFr: "Qualité perçue par le sens du goût" },
      { term: "dégustation", defPt: "a degustação / prova", defFr: "Action de savourer attentivement un produit" },
      { term: "terroir", defPt: "o terroir / solo regional", defFr: "Région offrant des particularités agronomiques spécifiques" },
      { term: "appellation", defPt: "a denominação de origem", defFr: "Nom protégé garantissant l'origine d'un produit" },
      { term: "millésime", defPt: "a safra / ano de colheita", defFr: "Année de récolte des raisins d'un vin" },
      { term: "cépage", defPt: "a variedade de uva", defFr: "Variété spécifique de plant de vigne" },
      { term: "bouchon", defPt: "a rolha / cortiça", defFr: "Pièce de liège fermant une bouteille" },
      { term: "carafe", defPt: "a jarra / decantador", defFr: "Récipient en verre pour servir le vin ou l'eau" },
      { term: "assiette", defPt: "o prato de servir", defFr: "Pièce de vaisselle plate où l'on sert les mets" },
      { term: "fourchette", defPt: "o garfo", defFr: "Ustensile de table à dents pour saisir les aliments" },
      { term: "couteau", defPt: "a faca", defFr: "Instrument tranchant pour couper les aliments" },
      { term: "cuillère", defPt: "a colher", defFr: "Ustensile de table composé d'un cuilleron et d'un manche" },
      { term: "serviette", defPt: "o guardanapo", defFr: "Pièce de tissu ou papier pour s'essuyer à table" },
      { term: "addition", defPt: "a conta (do restaurante)", defFr: "Note détaillée de ce que le client doit payer" },
      { term: "pourboire", defPt: "a gorjeta / gratificação", defFr: "Somme laissée par le client pour le service" },
      { term: "réservation", defPt: "a reserva de mesa", defFr: "Action de retenir une table à l'avance" },
      { term: "plat du jour", defPt: "o prato do dia / sugestão do chef", defFr: "Spécialité proposée chaque jour dans un restaurant" },
      { term: "menu", defPt: "o cardápio / menu completo", defFr: "Ensemble des plats composant un repas à prix fixe" },
      { term: "recette", defPt: "a receita culinária", defFr: "Description des instructions pour préparer un mets" }
    ]
  },
  {
    num: 17,
    domain: "Moda & Alta-Costura",
    level: "Intermediário (B1)",
    titleFr: "La Haute Couture - Avenue Montaigne et l'Élégance",
    titlePt: "A Alta-Costura - Avenue Montaigne e a Elegância",
    subtitleFr: "Explorer la mode parisienne et les maisons de prestige",
    subtitlePt: "Explorar a moda parisiense e as casas de prestígio",
    summaryPt: "Esta Aula 17 explora a moda parisiense e as casas de alta-costura na prestigiosa Avenue Montaigne.",
    paragraphs: [
      { id: 1, fr: "L'Avenue Montaigne concentre les plus prestigieuses maisons de haute couture de la capitale parisienne.", pt: "A Avenue Montaigne concentra as mais prestigiosas casas de alta-costura da capital parisiense." },
      { id: 2, fr: "Dans les ateliers de couture, les stylistes conçoivent des robes élégantes avec un savoir-faire artisanal unique.", pt: "Nos ateliês de costura, os estilistas concebem vestidos elegantes com um saber artesanal único." },
      { id: 3, fr: "Les vitrines illuminées exposent des accessoires luxueux qui attirent l'admiration des passants du monde entier.", pt: "As vitrines iluminadas expõem acessórios luxuosos que atraem a admiração dos pedestres de todo o mundo." },
      { id: 4, fr: "Lors des défilés saisonniers, les mannequins déambulent sur le podium avec une grâce incomparable.", pt: "Durante os desfiles sazonais, as modelos desfilam na passarela com uma graça incomparável." },
      { id: 5, fr: "Paris demeure éternellement la capitale incontestée du raffinement, de la mode et de la créativité.", pt: "Paris permanece eternamente a capital incontestável do refinamento, da moda e da criatividade." }
    ],
    words: [
      { term: "couture", defPt: "a costura / confecção", defFr: "Art de coudre et de créer des vêtements" },
      { term: "ateliers", defPt: "os ateliês / oficinas de trabalho", defFr: "Lieux où travaillent les artisans et créateurs" },
      { term: "stylistes", defPt: "os estilistas / designers de moda", defFr: "Créateurs de mode et de collections de vêtements" },
      { term: "conçoivent", defPt: "concebem / criam", defFr: "Imaginent et élaborent un modèle ou un plan" },
      { term: "robes", defPt: "os vestidos", defFr: "Vêtements féminins d'un seul tenant" },
      { term: "vitrines", defPt: "as vitrines / expositores", defFr: "Fenêtres de magasin où sont exposés les produits" },
      { term: "illuminées", defPt: "iluminadas / brilhantes", defFr: "Éclairées avec éclat par des lumières" },
      { term: "accessoires", defPt: "os acessórios / complementos", defFr: "Objets qui complètent la tenue vestimentaire" },
      { term: "luxueux", defPt: "luxuosos / suntuosos", defFr: "Qui témoigne d'un luxe raffiné et coûteux" },
      { term: "défilés", defPt: "os desfiles de moda", defFr: "Présentations publiques de collections de vêtements" },
      { term: "saisonniers", defPt: "sazonais / de cada estação", defFr: "Qui se produisent à chaque saison" },
      { term: "mannequins", defPt: "as modelos / manequins", defFr: "Personnes qui présentent les vêtements lors d'un défilé" },
      { term: "podium", defPt: "a passarela / estrado", defFr: "Plate-forme surélevée où marchent les mannequins" },
      { term: "demeure", defPt: "permanece / continua sendo", defFr: "Reste dans le même état ou statut" },
      { term: "éternellement", defPt: "eternamente / para sempre", defFr: "D'une manière qui dure toujours" },
      { term: "incontestée", defPt: "incontestável / absoluta", defFr: "Que personne ne met en doute" },
      { term: "raffinement", defPt: "o refinamento / requinte", defFr: "Élégance extrême du goût et des manières" },
      { term: "créativité", defPt: "a criatividade / inovação", defFr: "Capacité d'imaginer et de réaliser des choses nouvelles" },
      { term: "tissu", defPt: "o tecido / fazenda", defFr: "Matériau textile obtenu par tissage de fils" },
      { term: "soie", defPt: "a seda", defFr: "Fibre textile naturelle fine et brillante" },
      { term: "velours", defPt: "o veludo", defFr: "Tissu à la surface douce et veloutée" },
      { term: "dentelle", defPt: "a renda", defFr: "Tissu ajouré à motifs décoratifs délicats" },
      { term: "broderie", defPt: "o bordado", defFr: "Ornement exécuté à l'aiguille sur un tissu" },
      { term: "sur-mesure", defPt: "sob medida / personalizado", defFr: "Réalisé exactement selon les mesures du client" },
      { term: "patron", defPt: "o molde de costura", defFr: "Modèle en papier pour découper les pièces d'un vêtement" },
      { term: "ourlet", defPt: "a bainha / dobra costurada", defFr: "Bord d'un vêtement replié et cousu" },
      { term: "boutonnière", defPt: "a casa de botão", defFr: "Fente destinée à recevoir un bouton" },
      { term: "manche", defPt: "a manga do vestido ou camisa", defFr: "Partie du vêtement qui recouvre le bras" },
      { term: "col", defPt: "o colarinho / gola", defFr: "Partie du vêtement qui entoure le cou" },
      { term: "écharpe", defPt: "le cachecol / echarpe", defFr: "Bande de tissu portée autour du cou" },
      { term: "gants", defPt: "as luvas", defFr: "Accessoires en cuir ou tissu qui protègent les mains" },
      { term: "chapeau", defPt: "o chapéu", defFr: "Coiffure qui se pose sur la tête" },
      { term: "chaussures", defPt: "les calçados / sapatos", defFr: "Articles d'habillement pour protéger les pieds" },
      { term: "talons", defPt: "les saltos hauts", defFr: "Parties arrière surélevées de certaines chaussures" },
      { term: "parfum", defPt: "le perfume / fragrância", defFr: "Composition odorante agréable portée sur la peau" },
      { term: "bijoux", defPt: "les joias / bijoux", defFr: "Parures précieuses portées en ornement" },
      { term: "bracelet", defPt: "a pulseira", defFr: "Bijou qui se porte autour du poignet" },
      { term: "collier", defPt: "o colar / gargantilha", defFr: "Bijou porté autour du cou" },
      { term: "boucles", defPt: "les brincos / argolas", defFr: "Bijoux suspendus aux oreilles" },
      { term: "sac à main", defPt: "a bolsa de mão", defFr: "Accessoire pour transporter des objets personnels" },
      { term: "pochette", defPt: "a carteira de mão / nécessaire", defFr: "Petit sac plat d'allure élégante" },
      { term: "tendance", defPt: "a tendência de moda", defFr: "Orientation actuelle du goût dans la mode" },
      { term: "garde-robe", defPt: "o guarda-roupa / vestuário", defFr: "Ensemble des vêtements que possède une personne" },
      { term: "élégant", defPt: "elegante / distinto", defFr: "Qui a de la grâce et de la distinction" },
      { term: "allure", defPt: "le porte / aparência geral", defFr: "Manière de se présenter et de se tenir" },
      { term: "sobriété", defPt: "la sobriedade / discrição", defFr: "Qualité de ce qui est simple et mesuré" },
      { term: "harmonie", defPt: "l'harmonia / equilíbrio", defFr: "Accord esthétique agréable entre les éléments" },
      { term: "création", defPt: "la criação / obra inédita", defFr: "Action de donner naissance à une œuvre originale" }
    ]
  },
  {
    num: 18,
    domain: "História & Universidade",
    level: "Intermediário (B1-B2)",
    titleFr: "Le Quartier Latin et la Sorbonne - Vie Universitaire",
    titlePt: "O Quarteirão Latino e a Sorbonne - Vida Universitária",
    subtitleFr: "Découvrir le cœur intellectuel et étudiant de Paris",
    subtitlePt: "Descobrir o coração intelectual e estudantil de Paris",
    summaryPt: "Esta Aula 18 explora o Quartier Latin, a histórica Universidade Sorbonne e a vibrante tradição intelectual da margem esquerda.",
    paragraphs: [
      { id: 1, fr: "Le Quartier Latin est historiquement réputé pour ses universités prestigieuses et ses librairies académiques.", pt: "O Quarteirão Latino é historicamente famoso por suas universidades prestigiosas e suas livrarias acadêmicas." },
      { id: 2, fr: "La Sorbonne attire des étudiants du monde entier venus étudier la philosophie, les lettres et les sciences.", pt: "A Sorbonne atrai estudantes de todo o mundo que vêm estudar filosofia, letras e ciências." },
      { id: 3, fr: "Dans les rues pavées, les jeunes intellectuels discutent passionnément à la terrasse des cafés littéraires.", pt: "Nas ruas de paralelepípedo, os jovens intelectuais discutem apaixonadamente nas mesas externas dos cafés literários." },
      { id: 4, fr: "Le Panthéon, situé sur la montagne Sainte-Geneviève, honore la mémoire des grands personnages de la nation.", pt: "O Panteão, localizado na colina Sainte-Geneviève, honra a memória das grandes personalidades da nação." },
      { id: 5, fr: "Cette atmosphère studieuse et vivante confère à la rive gauche un charme intemporel et stimulant.", pt: "Esta atmosfera estudiosa e animada confere à margem esquerda um charme atemporal e estimulante." }
    ],
    words: [
      { term: "universités", defPt: "as universidades / faculdades", defFr: "Établissements d'enseignement supérieur et de recherche" },
      { term: "académiques", defPt: "acadêmicas / universitárias", defFr: "Relatif aux études supérieures et à l'université" },
      { term: "philosophie", defPt: "a filosofia", defFr: "Discipline de réflexion sur la sagesse et l'existence" },
      { term: "lettres", defPt: "as letras / literatura", defFr: "Études littéraires et linguistiques" },
      { term: "sciences", defPt: "as ciências", defFr: "Ensemble des connaissances basées sur la recherche" },
      { term: "pavées", defPt: "pavimentadas com paralelepípedo", defFr: "Recouvertes de pavés de pierre" },
      { term: "intellectuels", defPt: "os intelectuais / pensadores", defFr: "Personnes qui se consacrent aux activités de l'esprit" },
      { term: "passionnément", defPt: "apaixonadamente / com fervor", defFr: "Avec une ardeur et une émotion intenses" },
      { term: "littéraires", defPt: "literários / das letras", defFr: "Qui ont un rapport avec la littérature et les écrivains" },
      { term: "panthéon", defPt: "o Panteão de Paris", defFr: "Monument parisien abritant les sépultures des grands citoyens" },
      { term: "honore", defPt: "honra / presta homenagem", defFr: "Rend un hommage solennel au mérite" },
      { term: "mémoire", defPt: "a memória / lembrança", defFr: "Souvenir solennel conservé par les générations" },
      { term: "nation", defPt: "a nação / pátria", defFr: "Communauté humaine unie par une histoire commune" },
      { term: "studieuse", defPt: "estudiosa / concentrada", defFr: "Consacrée au travail intellectuel et à l'étude" },
      { term: "confère", defPt: "confere / concede", defFr: "Donne ou attribue une qualité particulière" },
      { term: "intemporel", defPt: "atemporal / imortal", defFr: "Qui ne subit pas les marques de l'époque ou du temps" },
      { term: "stimulant", defPt: "estimulante / inspirador", defFr: "Qui incite à l'action et à la réflexion" },
      { term: "amphithéâtre", defPt: "o anfiteatro / auditório", defFr: "Grande salle de cours universitaire en gradins" },
      { term: "conférence", defPt: "a conferência / palestra", defFr: "Discours public prononcé sur un sujet intellectuel" },
      { term: "professeur", defPt: "o professor universitário", defFr: "Enseignant spécialiste d'une discipline" },
      { term: "étudiant", defPt: "o estudante", defFr: "Personne inscrite dans un cursus universitaire" },
      { term: "thèse", defPt: "a tese de doutorado", defFr: "Mémoire de recherche soutenu devant un jury" },
      { term: "bibliothèque", defPt: "a biblioteca", defFr: "Lieu où sont conservés et consultés des livres" },
      { term: "manuscrit", defPt: "o manuscrito / original", defFr: "Texte écrit à la main ou document original" },
      { term: "recherche", defPt: "a pesquisa acadêmica", defFr: "Ensemble d'études pour découvrir des vérités scientifiques" },
      { term: "diplôme", defPt: "o diploma / certificado", defFr: "Titre officiel sanctionnant un grade universitaire" },
      { term: "examen", defPt: "o exame / prova", defFr: "Épreuve d'évaluation des connaissances" },
      { term: "campus", defPt: "o campus universitário", defFr: "Ensemble des bâtiments d'une université" },
      { term: "bourse", defPt: "a bolsa de estudos", defFr: "Aide financière accordée à un étudiant" },
      { term: "érudit", defPt: "erudito / culto", defFr: "Qui possède un grand savoir approfondi" },
      { term: "sagesse", defPt: "a sabedoria / prudência", defFr: "Connaissance juste des choses et mesure" },
      { term: "rhétorique", defPt: "a retórica / arte da oratória", defFr: "Art de bien parler et de persuader" },
      { term: "débat", defPt: "o debate / discussão", defFr: "Échange d'arguments entre plusieurs personnes" },
      { term: "savoir", defPt: "o saber / conhecimento", defFr: "Ensemble des connaissances acquises" },
      { term: "librairie", defPt: "a livraria", defFr: "Magasin spécialisé dans la vente de livres" },
      { term: "bouquiniste", defPt: "o alfarrabista / vendedor de livros antigos", defFr: "Vendeur de livres anciens sur les quais de Seine" },
      { term: "parchemin", defPt: "o pergaminho", defFr: "Ancien support d'écriture en peau animale" },
      { term: "reliure", defPt: "a encadernação de livros", defFr: "Couverture solide protégeant un volume" },
      { term: "édition", defPt: "a edição / publicação", defFr: "Publication d'une œuvre littéraire" },
      { term: "chapitre", defPt: "o capítulo", defFr: "Division principale d'un ouvrage écrit" },
      { term: "sommaire", defPt: "o sumário / índice", defFr: "Liste des chapitres au début ou à la fin d'un livre" },
      { term: "citation", defPt: "a citação / trecho citado", defFr: "Passage rapporté exactement d'un auteur" },
      { term: "penseur", defPt: "o pensador / filósofo", defFr: "Personne qui consacre sa vie à la pensée philosophique" },
      { term: "théorie", defPt: "a teoria / modelo científico", defFr: "Système de concepts expliquant des faits" },
      { term: "concept", defPt: "o conceito / ideia geral", defFr: "Représentation mentale abstraite d'un objet" },
      { term: "logique", defPt: "a lógica / raciocínio", defFr: "Science du raisonnement cohérent" },
      { term: "synthèse", defPt: "a síntese / resumo claro", defFr: "Opération intellectuelle rassemblant les idées en un tout" },
      { term: "critique", defPt: "a crítica / análise de mérito", defFr: "Examen attentif portant un jugement sur une œuvre" }
    ]
  },
  {
    num: 19,
    domain: "Arte & Boêmia",
    level: "Avançado (B2)",
    titleFr: "Montmartre - La Butte Bohémienne et le Sacré-Cœur",
    titlePt: "Montmartre - A Colina Boêmia e o Sacré-Cœur",
    subtitleFr: "Flâner sur les hauteurs artistiques de Paris",
    subtitlePt: "Passear nas alturas artísticas de Paris",
    summaryPt: "Esta Aula 19 explora o icônico bairro de Montmartre, a basílica de Sacré-Cœur e a vida artística dos pintores na Place du Tertre.",
    paragraphs: [
      { id: 1, fr: "Montmartre domine la capitale depuis sa célèbre colline où trône majestueusement la basilique du Sacré-Cœur.", pt: "Montmartre domina a capital de sua famosa colina onde reina majestosamente a basílica do Sacré-Cœur." },
      { id: 2, fr: "Sur la Place du Tertre, les peintres et portraitistes installent leurs chevalets en plein air chaque après-midi.", pt: "Na Place du Tertre, os pintores e retratistas instalam seus cavaletes ao ar livre todas as tardes." },
      { id: 3, fr: "Les ruelles pavées et les escaliers pittoresques rappellent l'époque dorée des artistes bohémiens du vingtième siècle.", pt: "As ruelas de paralelepípedo e as escadarias pitorescas lembram a era de ouro dos artistas boêmios do século vinte." },
      { id: 4, fr: "Les anciens moulins à vent, comme le Moulin de la Galette, témoignent du passé campagnard du quartier.", pt: "Os antigos moinhos de vento, como o Moulin de la Galette, testemunham o passado camponês do bairro." },
      { id: 5, fr: "Du sommet de la butte, le panorama sur les toits de Paris est tout simplement féerique au coucher du soleil.", pt: "Do topo da colina, o panorama dos telhados de Paris é simplesmente mágico ao pôr do sol." }
    ],
    words: [
      { term: "domine", defPt: "domina / avista do alto", defFr: "S'élève au-dessus en offrant une vue dominante" },
      { term: "colline", defPt: "a colina / elevação", defFr: "Petite élévation de terrain au-dessus de la plaine" },
      { term: "trône", defPt: "reina / destaca-se no alto", defFr: "Se dresse majestueusement à la place principale" },
      { term: "majestueusement", defPt: "majestosamente / grandiosamente", defFr: "Avec une noblesse et une grandeur imposantes" },
      { term: "basilique", defPt: "a basílica católica", defFr: "Grande église dotée de privilèges spéciaux par le pape" },
      { term: "portraitistes", defPt: "os retratistas / pintores de rostos", defFr: "Artistes qui peignent les visages des personnes" },
      { term: "chevalets", defPt: "os cavaletes de pintura", defFr: "Supports en bois utilisés par les peintres" },
      { term: "ruelles", defPt: "as ruelas / ruas estreitas", defFr: "Petites rues étroites dans un vieux quartier" },
      { term: "pittoresques", defPt: "pitorescas / encantadoras", defFr: "Qui offre un charme original digne d'être peint" },
      { term: "dorée", defPt: "dourada / de esplendor", defFr: "Qui évoque un âge de prospérité et de lumière" },
      { term: "bohémiens", defPt: "boêmios / livres de convenções", defFr: "Qui mènent une vie d'artiste libre et insouciante" },
      { term: "moulins", defPt: "os moinhos de vento", defFr: "Bâtiments équipés d'ailes pour moudre le grain" },
      { term: "campagnard", defPt: "camponês / rural", defFr: "Qui se rapporte à la campagne et aux traditions rurales" },
      { term: "butte", defPt: "a colina / morro (La Butte Montmartre)", defFr: "Tertre ou petite hauteur naturelle de terre" },
      { term: "panorama", defPt: "o panorama / vista panorâmica", defFr: "Vue étendue à 360 degrés sur un paysage" },
      { term: "féerique", defPt: "mágico / de conto de fadas", defFr: "Merveilleux comme dans un conte de fées" },
      { term: "palette", defPt: "a paleta de cores", defFr: "Tablette où l'artiste dispose et mélange ses couleurs" },
      { term: "pinceau", defPt: "o pincel de pintura", defFr: "Instrument à poils pour appliquer la peinture" },
      { term: "toile", defPt: "a tela de pintura", defFr: "Tissu tendu sur un châssis servant à la peinture" },
      { term: "esquisse", defPt: "o esboço / rascunho", defFr: "Premier dessin préparatoire d'une œuvre" },
      { term: "aquarelle", defPt: "a aquarela / pintura à base d'água", defFr: "Peinture légère diluée avec de l'eau" },
      { term: "fusain", defPt: "o carvão vegetal de desenho", defFr: "Bâtonnet de charbon de bois pour le dessin" },
      { term: "caricature", defPt: "a caricatura", defFr: "Portrait humoristique exagérant les traits" },
      { term: "chevalet", defPt: "o cavalete de pintor", defFr: "Support en bois pour maintenir la toile à peindre" },
      { term: "vernissage", defPt: "a abertura de exposição / vernissage", defFr: "Inauguration privée d'une exposition d'art" },
      { term: "cabaret", defPt: "o cabaré / casa de espetáculo", defFr: "Établissement de spectacle et de musique en soirée" },
      { term: "cancan", defPt: "o french cancan (dança)", defFr: "Danse traditionnelle parisienne rythmée et endiablée" },
      { term: "vigne", defPt: "le vinhedo / parreira de uvas", defFr: "Plantation de ceps produisant le raisin" },
      { term: "vendanges", defPt: "la colheita de uvas / vindima", defFr: "Récolte saisonnière des raisins de la vigne" },
      { term: "escalier", defPt: "a escadaria / escada", defFr: "Suite de marches pour monter ou descendre" },
      { term: "funiculaire", defPt: "o funicular de Montmartre", defFr: "Train à câble montant le long d'une pente forte" },
      { term: "bohème", defPt: "a vida boêmia", defFr: "Style de vie artistique affranchi des règles bourgeoises" },
      { term: "inspiration", defPt: "a inspiração criativa", defFr: "Élan créateur qui guide le travail de l'artiste" },
      { term: "musette", defPt: "o valsa musette / sanfona", defFr: "Musique populaire parisienne jouée à l'accordéon" },
      { term: "accordéon", defPt: "le acordeão / sanfona", defFr: "Instrument de musique à soufflet emblématique de Paris" },
      { term: "guitare", defPt: "le violão / guitarra", defFr: "Instrument à cordes pincées souvent joué en rue" },
      { term: "chansonnette", defPt: "la canção popular / cantiga", defFr: "Petite chanson légère et entraînante" },
      { term: "belvédère", defPt: "le mirante / belvedere", defFr: "Terrasse élevée offrant une vue panoramique" },
      { term: "horizon", defPt: "l'horizonte", defFr: "Ligne au loin où le ciel semble toucher la terre" },
      { term: "crépuscule", defPt: "le crepúsculo / entardecer", defFr: "Lumière douce précédant la nuit complète" },
      { term: "nocturne", defPt: "noturno / da noite", defFr: "Qui se déroule ou appartient à la nuit" },
      { term: "lanternes", defPt: "les lanternas / lampiões de rua", defFr: "Appareils d'éclairage public traditionnels" },
      { term: "flâneur", defPt: "o passeador / flâneur", defFr: "Promeneur qui observe la ville sans hâte" },
      { term: "poète", defPt: "o poeta", defFr: "Écrivain qui compose des poèmes et des vers" },
      { term: "mélancolie", defPt: "a melancolia poética", defFr: "Tristesse douce et rêveuse propice à l'art" },
      { term: "charme", defPt: "o encanto / charme", defFr: "Qualité qui séduit par sa douceur ou son esthétique" },
      { term: "légende", defPt: "a lenda / tradição", defFr: "Récit traditionnel embelli par l'imagination" },
      { term: "patrimoine", defPt: "o patrimônio cultural", defFr: "Bien culturel et historique transmis par les ancêtres" }
    ]
  },
  {
    num: 20,
    domain: "Arte & Impressionismo",
    level: "Avançado (B2)",
    titleFr: "Le Musée d'Orsay - Les Peintres Impressionnistes",
    titlePt: "O Museu de Orsay - Os Pintores Impressionnistas",
    subtitleFr: "Admirer les chefs-d'œuvre de Monet, Renoir et Van Gogh",
    subtitlePt: "Admirar as obras-primas de Monet, Renoir e Van Gogh",
    summaryPt: "Esta Aula 20 explora o Musée d'Orsay, instalado em uma antiga estação ferroviária, e o movimento impressionista francês.",
    paragraphs: [
      { id: 1, fr: "Installé au cœur d'une ancienne gare ferroviaire monumentale, le Musée d'Orsay abrite les plus beaux chefs-d'œuvre impressionnistes.", pt: "Instalado no coração de uma antiga estação ferroviária monumental, o Museu de Orsay abriga as mais belas obras-primas impressionistas." },
      { id: 2, fr: "Les peintres de ce mouvement révolutionnaire cherchaient à capturer les nuances changeantes de la lumière naturelle.", pt: "Os pintores deste movimento revolucionário procuravam capturar as nuances mutáveis da luz natural." },
      { id: 3, fr: "Devant les nymphéas de Monet ou les ballets de Degas, les spectateurs découvrent une nouvelle perception de la couleur.", pt: "Diante dos nenúfares de Monet ou dos balés de Degas, os espectadores descobrem uma nova percepção da cor." },
      { id: 4, fr: "La grande horloge du musée offre par ailleurs un point de vue spectaculaire sur la Seine et le Louvre.", pt: "O grande relógio do museu oferece também um ponto de vista espetacular sobre o Sena e o Louvre." },
      { id: 5, fr: "Cette collection prestigieuse témoigne de l'effervescence artistique et de la modernité de la Belle Époque.", pt: "Esta coleção prestigiosa testemunha a efervescência artística e a modernidade da Belle Époque." }
    ],
    words: [
      { term: "ferroviaire", defPt: "ferroviária / de trem", defFr: "Qui concerne les chemins de fer et les trains" },
      { term: "chefs-d'œuvre", defPt: "as obras-primas", defFr: "Œuvres d'art d'une perfection remarquable" },
      { term: "impressionnistes", defPt: "impressionistas (pintores do século XIX)", defFr: "Artistes qui privilégient l'impression lumineuse sur le motif" },
      { term: "révolutionnaire", defPt: "revolucionário / inovador", defFr: "Qui apporte un changement radical par rapport à la tradition" },
      { term: "capturer", defPt: "capturar / registrar", defFr: "Saisir et fixer un instant ou une lumière dans une œuvre" },
      { term: "nuances", defPt: "as nuances / tons delicados", defFr: "Degrés subtils par lesquels passe une couleur" },
      { term: "changeantes", defPt: "mutáveis / variáveis", defFr: "Qui se modifient continuellement au fil du temps" },
      { term: "nymphéas", defPt: "os nenúfares / lírios d'água (Monet)", defFr: "Plantes aquatiques flottantes peintes par Claude Monet" },
      { term: "ballets", defPt: "os balés / danças clássicas", defFr: "Spectacles chorégraphiques de danse classique" },
      { term: "perception", defPt: "a percepção / sensibilidade visual", defFr: "Faculté de percevoir par les sens et l'esprit" },
      { term: "horloge", defPt: "o grande relógio de Orsay", defFr: "Appareil monumental servant à mesurer le temps" },
      { term: "effervescence", defPt: "a efervescência / agitação criativa", defFr: "État de grande activité intellectuelle et créative" },
      { term: "modernité", defPt: "a modernidade", defFr: "Caractère de ce qui est novateur et de son temps" },
      { term: "sculpture", defPt: "a escultura", defFr: "Art de tailler et de modeler des formes en relief" },
      { term: "bronze", defPt: "o bronze (estátua)", defFr: "Alliage de cuivre et d'étain utilisé par les sculpteurs" },
      { term: "marbre", defPt: "o mármore", defFr: "Roche calcaire dure utilisée en sculpture" },
      { term: "exposition", defPt: "a exposição de arte", defFr: "Présentation publique d'œuvres d'art" },
      { term: "galerie", defPt: "a galeria de arte", defFr: "Salle allongée où sont exposées des collections d'art" },
      { term: "conservateur", defPt: "o curador de museu / conservador", defFr: "Responsable scientifique d'une collection de musée" },
      { term: "restauration", defPt: "a restauração de obras d'arte", defFr: "Remise en bon état d'une œuvre endommagée par le temps" },
      { term: "chevalet", defPt: "o cavalete de pintura", defFr: "Support en bois pour maintenir la toile à peindre" },
      { term: "paysage", defPt: "o paisagem natural", defFr: "Étendue de pays que l'œil embrasse d'un regard" },
      { term: "nature morte", defPt: "a natureza-morta (pintura)", defFr: "Tableau représentant des objets inanimés ou des fruits" },
      { term: "portrait", defPt: "o retrato pintado", defFr: "Représentation du visage et de l'allure d'une personne" },
      { term: "autoportrait", defPt: "o autorretrato", defFr: "Portrait d'un artiste peint par lui-même" },
      { term: "pinceau", defPt: "o pincel de pintura", defFr: "Instrument à poils pour appliquer la peinture" },
      { term: "touche", defPt: "a pincelada / toque de cor", defFr: "Manière dont le peintre applique la peinture sur la toile" },
      { term: "pigment", defPt: "o pigmento / cor pura", defFr: "Substance colorée utilisée pour préparer les peintures" },
      { term: "lumière", defPt: "a luz natural", defFr: "Éclairage naturel du soleil créant les ombres et couleurs" },
      { term: "ombre", defPt: "a sombra", defFr: "Zone projetée à l'abri des rayons de la lumière" },
      { term: "reflet", defPt: "o reflexo na água", defFr: "Image renvoyée par une surface lisse comme l'eau" },
      { term: "perspective", defPt: "a perspectiva visual", defFr: "Technique représentant le relief et la distance sur un plan" },
      { term: "composition", defPt: "a composição geométrica", defFr: "Organisation harmonieuse des éléments dans un tableau" },
      { term: "cadre", defPt: "a moldura de quadro", defFr: "Bordure en bois ou en métal entourant un tableau" },
      { term: "audioguide", defPt: "o audiogua do museu", defFr: "Appareil portable diffusant des explications sur les œuvres" },
      { term: "catalogue", defPt: "o catálogo de exposição", defFr: "Livre recensant et expliquant les œuvres exposées" },
      { term: "vestiaire", defPt: "le guarda-volumes / vestiário", defFr: "Lieu où les visiteurs déposent leurs manteaux" },
      { term: "billetterie", defPt: "la bilheteria / guichê", defFr: "Lieu où l'on achète les billets d'entrée du musée" },
      { term: "affluence", defPt: "la grande afluência de visitantes", defFr: "Arrivée d'un grand nombre de visiteurs en même temps" },
      { term: "silence", defPt: "le silêncio respeitoso", defFr: "Absence de bruit favorable à la contemplation" },
      { term: "contemplation", defPt: "la contemplação artística", defFr: "Observation attentive et profonde d'une œuvre" },
      { term: "émotion", defPt: "la emoção / comoção", defFr: "Réaction sensible suscitée par la beauté artistique" },
      { term: "émerveillement", defPt: "le encantamento / maravilhamento", defFr: "Sentiment de profonde admiration joyeuse" },
      { term: "héritage", defPt: "le herança cultural", defFr: "Ensemble des richesses artistiques transmises" },
      { term: "avant-garde", defPt: "la vanguarda artística", defFr: "Mouvement précurseur ouvrant des voies nouvelles" },
      { term: "audace", defPt: "la audácia / ousadia", defFr: "Courage créatif qui s'écarte des règles établies" },
      { term: "esthétique", defPt: "la estética / beleza de arte", defFr: "Théorie du beau et du sentiment artistique" },
      { term: "chef-d'œuvre", defPt: "la obra-prima singular", defFr: "Œuvre d'art accomplie et exemplaire" }
    ]
  },
  {
    num: 21,
    domain: "Jardins & Cotidiano",
    level: "Avançado (B2)",
    titleFr: "Les Jardins de Paris - Luxembourg et Tuileries",
    titlePt: "Os Jardins de Paris - Luxembourg e Tuileries",
    subtitleFr: "Se détendre au vert dans les parcs historiques",
    subtitlePt: "Relaxar ao verde nos parques históricos",
    summaryPt: "Esta Aula 21 explora os jardins parisienses como o Jardin du Luxembourg e o Jardin des Tuileries, verdadeiros oásis no coração da cidade.",
    paragraphs: [
      { id: 1, fr: "Le Jardin du Luxembourg est l'endroit favori des Parisiens pour lire au soleil sur de célèbres chaises vertes.", pt: "O Jardim de Luxemburgo é o lugar favorito dos parisienses para ler ao sol nas famosas cadeiras verdes." },
      { id: 2, fr: "Autour du grand bassin central, les enfants font naviguer de petits bateaux à voile traditionnels.", pt: "Ao redor do grande espelho d'água central, as crianças fazem navegar pequenos barcos a vela tradicionais." },
      { id: 3, fr: "Dans les Tuileries, les allées géométriques illustrent la perfection et la rigueur du jardin à la française.", pt: "Nas Tuileries, as alamedas geométricas ilustram a perfeição e o rigor do jardim à francesa." },
      { id: 4, fr: "Les statues classiques et les fontaines rafraîchissantes offrent un cadre paisible aux promeneurs.", pt: "As estátuas clássicas et as fontes refrescantes oferecem um cenário pacífico aos pedestres." },
      { id: 5, fr: "Ces espaces verts constituent des havres de paix essentiels au rythme harmonieux de la vie urbaine.", pt: "Estes espaços verdes constituem refúgios de paz essenciais ao ritmo harmonioso da vida urbana." }
    ],
    words: [
      { term: "favori", defPt: "favorito / predileto", defFr: "Qui a la préférence absolue parmi d'autres" },
      { term: "chaises", defPt: "as cadeiras de ferro (chaises vertes)", defFr: "Sièges à dossier disposés dans les jardins parisiens" },
      { term: "bassin", defPt: "o espelho d'água / tanque ornamental", defFr: "Grande pièce d'eau décorative dans un jardin" },
      { term: "naviguer", defPt: "navegar / velejar na água", defFr: "Se déplacer sur la surface de l'eau" },
      { term: "bateaux", defPt: "os barquinhos a vela", defFr: "Petites embarcations en bois pour jouer dans les bassins" },
      { term: "allées", defPt: "as alamedas / caminhos do jardim", defFr: "Chemins bordés d'arbres pour la promenade" },
      { term: "géométriques", defPt: "geométricas / simétricas", defFr: "Qui suit des lignes et des symétries précises" },
      { term: "rigueur", defPt: "o rigor / precisão formal", defFr: "Exactitude stricte dans l'organisation de l'espace" },
      { term: "statues", defPt: "as estátuas de mármore", defFr: "Sculptures représentant des figures historiques ou mythologiques" },
      { term: "fontaines", defPt: "as fontes / chafarizes", defFr: "Monuments d'où jaillit de l'eau décorative" },
      { term: "rafraîchissantes", defPt: "refrescantes / frescas", defFr: "Qui apporte une agréable sensation de fraîcheur" },
      { term: "paisible", defPt: "pacífico / tranquilo", defFr: "Calme, dénué d'agitation ou de bruit" },
      { term: "havres", defPt: "os refúgios / portos seguros", defFr: "Lieux sûrs et paisibles à l'abri du bruit" },
      { term: "essentiels", defPt: "essenciais / indispensáveis", defFr: "Absolument nécessaires à l'équilibre et au bien-être" },
      { term: "harmonieux", defPt: "harmonioso / equilibrado", defFr: "Qui présente un accord doux et agréable" },
      { term: "pelouse", defPt: "o gramado / relvado", defFr: "Surface de terrain recouverte d'une herbe courte" },
      { term: "parterre", defPt: "o canteiro de flores", defFr: "Ensemble de plates-bandes fleuries dessinant des motifs" },
      { term: "kiosque", defPt: "o coreto / quiosque de música", defFr: "Pavillon de jardin abritant des concerts en plein air" },
      { term: "marronnier", defPt: "o castanheiro-da-índia", defFr: "Grand arbre traditionnel des jardins de Paris" },
      { term: "platane", defPt: "o plátano (árvore de alameda)", defFr: "Arbre à large feuillage bordant les rues et parcs" },
      { term: "tilleul", defPt: "a tília (árvore perfumada)", defFr: "Arbre dont les fleurs odorantes servent aux infusions" },
      { term: "feuillage", defPt: "a folhage / copa das árvores", defFr: "Ensemble des feuilles d'un arbre" },
      { term: "printemps", defPt: "a primavera", defFr: "Saison du réveil de la nature et de la floraison" },
      { term: "automne", defPt: "o outono", defFr: "Saison où les feuilles prennent des teintes dorées" },
      { term: "gravier", defPt: "o cascalho / pedregulho dos caminhos", defFr: "Petites pierres recouvrant le sol des allées" },
      { term: "banc", defPt: "o banco de jardim", defFr: "Siège long en bois et fonte pour s'asseoir à plusieurs" },
      { term: "grille", defPt: "o portão de ferro trabalhado", defFr: "Clôture en fer forgé fermant l'accès au parc" },
      { term: "serre", defPt: "a estufa de plantas", defFr: "Bâtiment vitré pour cultiver des plantes exotiques" },
      { term: "orangerie", defPt: "a orangerie / abrigo de inverno", defFr: "Bâtiment servant à abriter les orangers pendant l'hiver" },
      { term: "jardinier", defPt: "o jardineiro", defFr: "Personne chargée de l'entretien des jardins et des fleurs" },
      { term: "taille", defPt: "a poda artística das árvores", defFr: "Action de couper et donner une forme aux arbustes" },
      { term: "ombrelle", defPt: "a sombrinha de sol", defFr: "Petit parasol portatif pour se protéger du soleil" },
      { term: "promenade", defPt: "o passeio a pé", defFr: "Action de marcher de manière détendue pour le plaisir" },
      { term: "détente", defPt: "le relaxamento / descanso", defFr: "Apaisement de la tension nerveuse et repos" },
      { term: "lecture", defPt: "la leitura ao ar livre", defFr: "Action de lire un livre en profitant du calme" },
      { term: "sieste", defPt: "le sesta / cochilo de tarde", defFr: "Court sommeil de repos dans l'après-midi" },
      { term: "guignol", defPt: "le teatro de fantoches Guignol", defFr: "Spectacle de marionnettes traditionnel pour enfants" },
      { term: "carrousel", defPt: "le carrossel de cavalinhos", defFr: "Manège tournant traditionnel avec des chevaux en bois" },
      { term: "manège", defPt: "le parque de atrações infantil", defFr: "Attraction tournante pour le divertissement des enfants" },
      { term: "pigeon", defPt: "le pombo de Paris", defFr: "Oiseau urbain commun dans les places et parcs" },
      { term: "moineau", defPt: "le pardal parisiense", defFr: "Petit oiseau vif vivant près des habitations" },
      { term: "sérénité", defPt: "la serenidade / paz de espírito", defFr: "Calme profond de l'âme et de l'environnement" },
      { term: "oxygène", defPt: "le ar puro / oxigênio", defFr: "Gaz vital produit par la photosynthèse des arbres" },
      { term: "verdure", defPt: "la verdura / vegetação", defFr: "Ensemble de plantes vertes dans la ville" },
      { term: "botanique", defPt: "la botânica / estudo das plantas", defFr: "Science consacrée à la classification des végétaux" },
      { term: "saison", defPt: "la estação do ano", defFr: "Chacune des quatre grandes périodes climatiques" },
      { term: "climat", defPt: "le clima de Paris", defFr: "Ensemble des conditions atmosphériques d'une région" },
      { term: "ensoleillement", defPt: "la incidência de sol", defFr: "Durée pendant laquelle le soleil éclaire un lieu" }
    ]
  },
  {
    num: 22,
    domain: "História & Revolução",
    level: "Avançado (C1)",
    titleFr: "La Révolution Française - Place de la Bastille",
    titlePt: "A Revolução Francesa - Praça da Bastilha",
    subtitleFr: "Comprendre les symboles de la République à Paris",
    subtitlePt: "Compreender os símbolos da República em Paris",
    summaryPt: "Esta Aula 22 explora a história da Revolução Francesa, a Praça da Bastilha e o lema republicano Liberté, Égalité, Fraternité.",
    paragraphs: [
      { id: 1, fr: "La Place de la Bastille symbolise historiquement la lutte du peuple pour la liberté et les droits citoyens.", pt: "A Praça da Bastilha simboliza historicamente a luta do povo pela liberdade e os direitos cidadãos." },
      { id: 2, fr: "Au centre de la place s'élève la Colonne de Juillet, couronnée par le Génie de la Liberté doré.", pt: "No centro da praça ergue-se a Coluna de Julho, coroada pelo Gênio da Liberdade dourado." },
      { id: 3, fr: "Les idéaux révolutionnaires ont profondément transformé la société en instaurant la démocratie et la souveraineté populaire.", pt: "Os ideais revolucionários transformaram profundamente a sociedade ao instaurar a democracia e a soberania popular." },
      { id: 4, fr: "La devise républicaine Liberté, Égalité, Fraternité est gravée sur le fronton des mairies et écoles parisiennes.", pt: "O lema republicano Liberdade, Igualdade, Fraternité está gravado no frontão das prefeituras e escolas parisienses." },
      { id: 5, fr: "Ce patrimoine historique continue de nourrir le débat démocratique et l'engagement civique d'aujourd'hui.", pt: "Este patrimônio histórico continua a nutrir o debate democrático e o engajamento cívico de hoje." }
    ],
    words: [
      { term: "lutte", defPt: "a luta / combate social", defFr: "Effort intense ou combat pour défendre un idéal" },
      { term: "citoyens", defPt: "os cidadãos", defFr: "Membres d'un État jouissant de droits civiques" },
      { term: "colonne", defPt: "a coluna monumental", defFr: "Monument cylindrique dressé en commémoration d'un événement" },
      { term: "juillet", defPt: "o mês de julho", defFr: "Septième mois de l'année, marquant la fête nationale" },
      { term: "couronnée", defPt: "coroada / encimada no alto", defFr: "Surmontée à son sommet d'une sculpture honorifique" },
      { term: "génie", defPt: "o Gênio da Liberdade (estátua)", defFr: "Figure allégorique ailée représentant l'élan de liberté" },
      { term: "idéaux", defPt: "os ideais / valores supremos", defFr: "Valeurs nobles et supérieures poursuivies par une société" },
      { term: "instaurant", defPt: "instaurando / fundando", defFr: "Établissant pour la première fois une institution" },
      { term: "démocratie", defPt: "a democracia / governo do povo", defFr: "Système politique où le pouvoir appartient aux citoyens" },
      { term: "souveraineté", defPt: "a soberania popular", defFr: "Autorité politique suprême émanant du peuple" },
      { term: "devise", defPt: "o lema / divisa republicana", defFr: "Formule brève exprimant les valeurs fondamentales d'un pays" },
      { term: "républicaine", defPt: "republicana", defFr: "Qui appartient à la République et à ses institutions" },
      { term: "fraternité", defPt: "a fraternidade / solidariedade", defFr: "Lien de solidarité morale unissant les membres d'une nation" },
      { term: "gravée", defPt: "gravada na pedra", defFr: "Inscrite en creux dans la pierre d'un monument" },
      { term: "fronton", defPt: "o frontão de edifício", defFr: "Ornement triangulaire surmontant la façade d'un bâtiment" },
      { term: "mairies", defPt: "as prefeituras / edifícios municipais", defFr: "Bâtiments administratifs d'une commune ou arrondissement" },
      { term: "nourrir", defPt: "nutrir / alimentar o debate", defFr: "Entretenir et enrichir une réflexion ou un dialogue" },
      { term: "engagement", defPt: "o engajamento cívico", defFr: "Participation active à la vie citoyenne et publique" },
      { term: "civique", defPt: "cívico / cidadão", defFr: "Qui concerne les devoirs et responsabilités du citoyen" },
      { term: "bastille", defPt: "a Bastilha de Paris", defFr: "Ancienne forteresse devenue symbole de la Révolution" },
      { term: "révolution", defPt: "a revolução política", defFr: "Renversement soudain d'un ordre politique et social" },
      { term: "liberté", defPt: "a liberdade civil", defFr: "Droit d'agir selon sa volonté dans le respect des lois" },
      { term: "égalité", defPt: "a igualdade de direitos", defFr: "Principe selon lequel tous ont les mêmes droits" },
      { term: "droits", defPt: "os direitos humanos", defFr: "Prérogatives fondamentales reconnues à tout être humain" },
      { term: "constitution", defPt: "a Constituição nacional", defFr: "Loi fondamentale qui régit l'organisation d'un État" },
      { term: "parlement", defPt: "o Parlamento", defFr: "Assemblée législative élue par les citoyens" },
      { term: "assemblée", defPt: "a Assembleia Nacional", defFr: "Réunion officielle de représentants élus" },
      { term: "sénat", defPt: "o Senado no Palácio do Luxemburgo", defFr: "Seconde chambre du Parlement français" },
      { term: "république", defPt: "a República Francesa", defFr: "Forme de gouvernement non monarchique" },
      { term: "drapeau", defPt: "o bandeira tricolor", defFr: "Emblème national en tissu bleu, blanc et rouge" },
      { term: "tricolore", defPt: "tricolor (azul, branco e vermelho)", defFr: "Composé des trois couleurs nationales françaises" },
      { term: "marianne", defPt: "a Marianne (símbolo republicano)", defFr: "Figure allégorique féminine de la République française" },
      { term: "hymne", defPt: "o hino nacional", defFr: "Chant solennel adopté par une nation (La Marseillaise)" },
      { term: "marseillaise", defPt: "a Marselhesa", defFr: "Hymne national officiel de la République française" },
      { term: "commémoration", defPt: "a comemoração cívica", defFr: "Cérémonie solennelle rappelant un souvenir historique" },
      { term: "manifestation", defPt: "a manifestação pública", defFr: "Rassemblement de personnes dans la rue pour une cause" },
      { term: "défilé", defPt: "le desfile militar do 14 de julho", defFr: "Marche organisée de troupes ou de citoyens" },
      { term: "feu d'artifice", defPt: "les fogos de artifício", defFr: "Spectacle pyrotechnique nocturne lors de la fête nationale" },
      { term: "monarchie", defPt: "a monarquia absoluta", defFr: "Ancien régime politique dirigé par un roi" },
      { term: "roi", defPt: "le rei de França", defFr: "Souverain héréditaire de l'ancien régime" },
      { term: "reine", defPt: "la rainha (Maria Antonieta)", defFr: "Épouse du roi dans la monarchie traditionnelle" },
      { term: "peuple", defPt: "o povo soberano", defFr: "Ensemble des citoyens constituant la communauté nationale" },
      { term: "justice", defPt: "la justiça civil", defFr: "Principe moral et institution faisant respecter le droit" },
      { term: "loi", defPt: "la lei / norma jurídica", defFr: "Règle écrite et obligatoire votée par le Parlement" },
      { term: "vote", defPt: "le voto / sufrágio", defFr: "Expression de la volonté citoyenne lors d'une élection" },
      { term: "élection", defPt: "la eleição democrática", defFr: "Choix de représentants politiques par le suffrage" },
      { term: "solidarité", defPt: "la solidariedade social", defFr: "Sentiment de responsabilité mutuelle entre citoyens" },
      { term: "philosophie des lumières", defPt: "la filosofia do Iluminismo", defFr: "Mouvement intellectuel du XVIIIe siècle pour la raison" }
    ]
  },
  {
    num: 23,
    domain: "Littérature & Pensée",
    level: "Avançado (C1)",
    titleFr: "La Littérature de Paris - Hugo, Proust et Camus",
    titlePt: "A Literatura de Paris - Hugo, Proust e Camus",
    subtitleFr: "Explorer les grands romans inspirés par la capitale",
    subtitlePt: "Explorar os grandes romances inspirados pela capital",
    summaryPt: "Esta Aula 23 explora os gigantes da literatura francesa em Paris: Victor Hugo, Marcel Proust e Albert Camus.",
    paragraphs: [
      { id: 1, fr: "Victor Hugo a éternisé la majesté de Notre-Dame dans son grand roman romantique sur le Paris médiéval.", pt: "Victor Hugo eternizou a majestade de Notre-Dame em seu grande romance romântico sobre a Paris medieval." },
      { id: 2, fr: "Marcel Proust a exploré avec une minutie poétique les salons aristocratiques de la Belle Époque.", pt: "Marcel Proust explorou com minuciosidade poética os salões aristocráticos da Belle Époque." },
      { id: 3, fr: "Au vingtième siècle, Albert Camus et Jean-Paul Sartre ont fait résonner la philosophie existentialiste à Saint-Germain-des-Prés.", pt: "No século vinte, Albert Camus e Jean-Paul Sartre fizeram ressoar a filosofia existencialista em Saint-Germain-des-Prés." },
      { id: 4, fr: "Les librairies emblématiques, telles que Shakespeare and Company, accueillent encore aujourd'hui les écrivains du monde entier.", pt: "As livrarias emblemáticas, como a Shakespeare and Company, acolhem ainda hoje escritores de todo o mundo." },
      { id: 5, fr: "La lecture de ces chefs-d'œuvre permet de comprendre l'âme profonde et l'imaginaire intemporel de Paris.", pt: "A leitura destas obras-primas permite compreender a alma profunda e o imaginário atemporal de Paris." }
    ],
    words: [
      { term: "éternisé", defPt: "eternizou / imortalizou", defFr: "Rendu immortel par la puissance de l'écriture littéraire" },
      { term: "majesté", defPt: "a majestade / grandeza", defFr: "Grandeur solennelle qui inspire le respect suprême" },
      { term: "romantique", defPt: "romântico (movimento literário)", defFr: "Qui appartient au courant littéraire exaltant le sentiment" },
      { term: "médiéval", defPt: "medieval / da Idade Média", defFr: "Relatif à la période historique du Moyen Âge" },
      { term: "minutie", defPt: "a minuciosidade / precisão extrema", defFr: "Attention extrême portée aux moindres détails" },
      { term: "poétique", defPt: "poética / lírica", defFr: "Qui possède la beauté suggestive et le rythme de la poésie" },
      { term: "aristocratiques", defPt: "aristocráticos / da alta nobreza", defFr: "Qui appartient à la société distinguée et noble" },
      { term: "ressoar", defPt: "fazer ressoar / ecoar", defFr: "Faire entendre avec écho et portée intellectuelle" },
      { term: "existentialiste", defPt: "existencialista (filosofia de Sartre)", defFr: "Relatif à la philosophie de la liberté et de la responsabilité" },
      { term: "emblématiques", defPt: "emblemáticas / representativas", defFr: "Qui sert de symbole célèbre d'une époque ou d'un lieu" },
      { term: "accueillent", defPt: "acolhem / recebem com calor", defFr: "Reçoivent des personnes avec bienveillance" },
      { term: "écrivains", defPt: "os escritores / autores", defFr: "Auteurs qui composent des œuvres littéraires" },
      { term: "âme", defPt: "a alma / essência espiritual", defFr: "Principe spirituel et identité profonde d'une ville" },
      { term: "imaginaire", defPt: "o imaginário / mundo de ideias", defFr: "Ensemble des représentations et rêves créatifs" },
      { term: "roman", defPt: "o romance literário", defFr: "Œuvre en prose racontant des aventures fictives ou historiques" },
      { term: "romancier", defPt: "o romancista / escritor de romances", defFr: "Écrivain spécialisé dans l'écriture de romans" },
      { term: "prose", defPt: "a prosa / texto contínuo", defFr: "Forme ordinaire du discours écrit non soumis au vers" },
      { term: "vers", defPt: "o verso de poema", defFr: "Ligne d'un poème régie par un rythme et des rimes" },
      { term: "rime", defPt: "a rima poética", defFr: "Répétition de sons identiques à la fin des vers" },
      { term: "strophe", defPt: "a estrofe poética", defFr: "Groupe de vers formant une unité dans un poème" },
      { term: "métaphore", defPt: "a metáfora / comparação implícita", defFr: "Figure de style transférant le sens d'un mot à un autre" },
      { term: "allégorie", defPt: "a alegoria literária", defFr: "Représentation concrète d'une idée abstraite" },
      { term: "intrigue", defPt: "o enredo / trama do livro", defFr: "Ensemble de l'action et des événements d'un récit" },
      { term: "dénouement", defPt: "o desfecho / conclusão da trama", defFr: "Résolution finale de l'intrigue d'une œuvre" },
      { term: "personnage", defPt: "o personagem de ficção", defFr: "Être de fiction participant à l'action d'une œuvre" },
      { term: "narrateur", defPt: "o narrador do livro", defFr: "Voix fictive ou réelle qui raconte l'histoire" },
      { term: "dialogue", defPt: "o diálogo literário", defFr: "Échange de paroles entre les personnages" },
      { term: "monologue", defPt: "o monólogo / reflexão solitária", defFr: "Discours qu'un personnage s'adresse à lui-même" },
      { term: "chef d'œuvre littéraire", defPt: "a obra-prima da literatura", defFr: "Création littéraire exceptionnelle et mémorable" },
      { term: "plume", defPt: "a pena / estilo de escrita", defFr: "Instrument d'écriture symbolisant le style d'un auteur" },
      { term: "encre", defPt: "a tinta de escrever", defFr: "Liquide noir ou coloré servant à l'écriture" },
      { term: "imprimerie", defPt: "a imprensa / tipografia", defFr: "Art et technique de reproduire des textes par impression" },
      { term: "lecteur", defPt: "o leitor", defFr: "Personne qui lit un ouvrage écrit" },
      { term: "critique littéraire", defPt: "a crítica literária", defFr: "Analyse et jugement de valeur sur les livres" },
      { term: "prix goncourt", defPt: "o Prêmio Goncourt (prêmio de literatura)", defFr: "Le plus prestigieux prix littéraire français" },
      { term: "académie française", defPt: "a Academia Francesa", defFr: "Institution veillant sur la pureté de la langue française" },
      { term: "immortel", defPt: "o Imortal (membro da Academia)", defFr: "Titre honorifique donné aux membres de l'Académie française" },
      { term: "dictionnaire", defPt: "o dicionário de língua", defFr: "Recueil alphabétique des mots avec leurs définitions" },
      { term: "vocabulaire", defPt: "o vocabulário / léxico", defFr: "Ensemble des mots utilisés dans une langue" },
      { term: "grammaire", defPt: "a gramática française", defFr: "Ensemble des règles régissant une langue" },
      { term: "syntaxe", defPt: "a sintaxe da frase", defFr: "Organisation et ordre correct des mots dans la phrase" },
      { term: "éloquence", defPt: "a eloquência / bela fala", defFr: "Art de s'exprimer avec clarté, élégance et persuasion" },
      { term: "littérature", defPt: "a literatura", defFr: "Ensemble des œuvres écrites à valeur esthétique" },
      { term: "œuvre", defPt: "a obra de arte ou livro", defFr: "Création artistique ou intellectuelle d'un auteur" },
      { term: "auteur", defPt: "o autor / escritor", defFr: "Personne qui a écrit un ouvrage littéraire" },
      { term: "récit", defPt: "o relato / narrativa", defFr: "Histoire racontée par écrit ou à l'oral" },
      { term: "fiction", defPt: "a ficção literária", defFr: "Création de l'imagination qui ne relève pas de la réalité" },
      { term: "biographie", defPt: "a biografia", defFr: "Récit écrit de la vie d'une personne réelle" }
    ]
  },
  {
    num: 24,
    domain: "Arquitetura & Modernidade",
    level: "Avançado (C1)",
    titleFr: "Paris Moderne - La Défense et l'Architecture Contemporaine",
    titlePt: "Paris Moderna - La Défense e a Arquitetura Contemporânea",
    subtitleFr: "Explorer les gratte-ciel et la création urbaine du 21e siècle",
    subtitlePt: "Explorar os arranha-céus e a criação urbana do século 21",
    summaryPt: "Esta Aula 24 explora a arquitetura contemporânea de Paris, o distrito financeiro de La Défense, a Fondation Louis Vuitton e a inovação urbana.",
    paragraphs: [
      { id: 1, fr: "Le quartier de La Défense illustre le dynamisme économique de Paris avec ses gratte-ciel de verre et d'acier.", pt: "O bairro de La Défense ilustra o dinamismo econômico de Paris com seus arranha-céus de vidro e aço." },
      { id: 2, fr: "La Grande Arche, monumentale et épurée, s'aligne parfaitement sur l'axe historique qui part du Louvre.", pt: "La Grande Arche, monumental e minimalista, alinha-se perfeitamente com o eixo histórico que parte do Louvre." },
      { id: 3, fr: "Des architectes audacieux conçoivent des bâtiments écologiques qui intègrent la verdure en milieu urbain.", pt: "Arquitétos ousados concebem edifícios ecológicos que integram o verde no meio urbano." },
      { id: 4, fr: "La Fondation Louis Vuitton, dessinée par Frank Gehry, ressemble à un grand vaisseau de verre au bois de Boulogne.", pt: "A Fundação Louis Vuitton, desenhada por Frank Gehry, assemelha-se a um grande navio de vidro no Bois de Boulogne." },
      { id: 5, fr: "Paris réussit le défi de préserver son patrimoine haussmannien tout en embrassant les innovations du futur.", pt: "Paris vence o desafio de preservar seu patrimônio haussmanniano ao mesmo tempo que abraça as inovações do futuro." }
    ],
    words: [
      { term: "gratte-ciel", defPt: "os arranha-céus", defFr: "Immeuble de très grande hauteur dominant la ville" },
      { term: "acier", defPt: "o aço de construção", defFr: "Alliage de fer et de carbone très résistant" },
      { term: "épurée", defPt: "minimalista / de linhas limpas", defFr: "Dégagée de tout ornement superflu" },
      { term: "aligne", defPt: "alinha-se / em reta perfeita", defFr: "Se place sur une même ligne droite parfaite" },
      { term: "axe", defPt: "o eixo histórico de Paris", defFr: "Ligne de direction principale reliant des monuments" },
      { term: "audacieux", defPt: "ousados / arrojados", defFr: "Qui fait preuve d'audace créative et d'innovation" },
      { term: "écologiques", defPt: "ecológicos / sustentáveis", defFr: "Respectueux de l'environnement et des ressources" },
      { term: "fondation", defPt: "a Fundação de arte", defFr: "Institution privée destinée à promouvoir la culture" },
      { term: "vaisseau", defPt: "o navio / estrutura imponente", defFr: "Grande structure qui évoque la forme d'un navire" },
      { term: "défi", defPt: "o desafio / grande meta", defFr: "Objectif difficile à atteindre exigeant du courage" },
      { term: "haussmannien", defPt: "haussmanniano (estilo clássico de Paris)", defFr: "Style architectural du baron Haussmann au XIXe siècle" },
      { term: "embrassant", defPt: "abraçando / acolhendo", defFr: "Adoptant et intégrant avec enthousiasme" },
      { term: "innovations", defPt: "as inovações tecnológicas", defFr: "Créations et méthodes nouvelles et performantes" },
      { term: "futur", defPt: "o futuro / porvir", defFr: "Temps à venir et perspectives de demain" },
      { term: "architecture", defPt: "a arquitetura", defFr: "Art et science de concevoir des bâtiments" },
      { term: "architecte", defPt: "o arquiteto", defFr: "Professionnel qui conçoit et dirige les constructions" },
      { term: "urbanisme", defPt: "o urbanismo", defFr: "Science de l'organisation et de l'aménagement des villes" },
      { term: "métropole", defPt: "a metrópole / grande capital", defFr: "Grande ville concentrant l'activité politique et économique" },
      { term: "quartier d'affaires", defPt: "o distrito financeiro", defFr: "Zone urbaine regroupant les sièges d'entreprises" },
      { term: "tour", defPt: "a torre de escritórios", defFr: "Bâtiment élevé en hauteur dominant le quartier" },
      { term: "façade", defPt: "a fachada do edifício", defFr: "Face extérieure principale d'une construction" },
      { term: "verre", defPt: "o vidro de fachada", defFr: "Matériau transparent utilisé pour les grandes fenêtres" },
      { term: "béton", defPt: "o concreto / betão", defFr: "Matériau de construction fait de ciment et de sable" },
      { term: "structure", defPt: "a estrutura de engenharia", defFr: "Charpente et ossature soutenant un bâtiment" },
      { term: "symétrie", defPt: "a simetria visual", defFr: "Correspondance exacte des formes de part et d'autre d'un axe" },
      { term: "perspective urbaine", defPt: "a perspectiva urbana", defFr: "Vue dégagée sur une longue avenue monumentale" },
      { term: "esplanade", defPt: "a esplanada / praça aberta", defFr: "Grand espace plat et dégagé pour les piétons" },
      { term: "dalle", defPt: "a laje / passarela de pedestres", defFr: "Plate-forme surélevée réservée aux piétons" },
      { term: "passerelle", defPt: "a passarela de travessia", defFr: "Pont léger pour piétons reliant deux bâtiments" },
      { term: "développement durable", defPt: "o desenvolvimento sustentável", defFr: "Croissance respectueuse de l'équilibre écologique" },
      { term: "énergie solaire", defPt: "a energia solar", defFr: "Énergie renouvelable captée par des panneaux solaires" },
      { term: "isolation", defPt: "o isolamento térmico", defFr: "Technique protégeant le bâtiment du froid et du bruit" },
      { term: "patrimoine urbain", defPt: "o patrimônio urbano", defFr: "Ensemble architectural historique d'une ville" },
      { term: "rénovation", defPt: "a renovação de edifícios", defFr: "Modernisation d'un bâtiment ou d'un quartier" },
      { term: "chantier", defPt: "o canteiro de obras", defFr: "Lieu où se déroulent des travaux de construction" },
      { term: "grue", defPt: "a guindaste de construção", defFr: "Grande machine servant à soulever les matériaux lourds" },
      { term: "ingénieur", defPt: "o engenheiro civil", defFr: "Spécialiste scientifique des calculs de construction" },
      { term: "projet", defPt: "o projeto arquitetônico", defFr: "Plan détaillé de ce que l'on compte construire" },
      { term: "maquette", defPt: "a maquete em miniatura", defFr: "Représentation réduite en volume d'un futur bâtiment" },
      { term: "design", defPt: "o design / desenho industrial", defFr: "Conception esthétique et fonctionnelle d'un objet" },
      { term: "contemporain", defPt: "contemporâneo / atual", defFr: "Qui appartient au temps présent et à l'époque actuelle" },
      { term: "esthétique moderne", defPt: "a estética moderna", defFr: "Recherche de beauté fondée sur la simplicité et la fonction" },
      { term: "monument", defPt: "o monumento público", defFr: "Édifice important par sa valeur historique ou artistique" },
      { term: "espace public", defPt: "o espaço público", defFr: "Lieu ouvert et accessible à tous les citoyens en ville" },
      { term: "mobilité", defPt: "a mobilidade urbana", defFr: "Facilité de déplacement dans les transports en ville" },
      { term: "transition", defPt: "a transição ecológica", defFr: "Passage progressif vers des modes de vie durables" },
      { term: "harmonie urbaine", defPt: "a harmonia urbana", defFr: "Équilibre visuel entre bâtiments anciens et modernes" },
      { term: "capitale", defPt: "a capital francesa", defFr: "Ville principale où siège le gouvernement d'un pays" }
    ]
  },
  {
    num: 25,
    domain: "Cotidiano & Arrondissements",
    level: "Avançado (C1-C2)",
    titleFr: "Vivre à Paris - Marchés de Quartier et Cotidiano",
    titlePt: "Viver em Paris - Mercados de Bairro e Cotidiano",
    subtitleFr: "Maîtriser l'art de vivre parisien dans les 20 arrondissements",
    subtitlePt: "Dominar a arte de viver parisiense nos 20 arrondissements",
    summaryPt: "Esta Aula 25 explora a vida diária dos parisienses, os mercados ao ar livre, a organização dos 20 arrondissements e a verdadeira elegância do cotidiano.",
    paragraphs: [
      { id: 1, fr: "Chaque arrondissement de Paris possède une identité singulière et un charme de village qui lui est propre.", pt: "Cada arrondissement de Paris possui uma identidade singular e um charme de vilarejo próprio." },
      { id: 2, fr: "Le dimanche matin, les habitants fréquentent assidûment les marchés en plein air pour choisir des produits frais.", pt: "No domingo de manhã, os moradores frequentam assiduamente os mercados ao ar livre para escolher produtos frescos." },
      { id: 3, fr: "L'art de vivre parisien repose sur un équilibre subtil entre exigence professionnelle et plaisir de la table.", pt: "A arte de viver parisiense baseia-se em um equilíbrio sutil entre exigência profissional e prazer da mesa." },
      { id: 4, fr: "Dans les bistrots de quartier, les habitués échangent des salutations chaleureuses avec leur garcon de café.", pt: "Nos bistrôs de bairro, os frequentadores assíduos trocam saudações calorosas com o garçom." },
      { id: 5, fr: "Vivre à Paris, c'est adopter au quotidien une élégance naturelle, une curiosité culturelle et un profond amour de la ville.", pt: "Viver em Paris é adotar no dia a dia uma elegância natural, uma curiosidade cultural e um profundo amor pela cidade." }
    ],
    words: [
      { term: "arrondissement", defPt: "o arrondissement (distrito municipal de Paris)", defFr: "Chacune des vingt divisions administratives de la ville de Paris" },
      { term: "singulière", defPt: "singular / única", defFr: "Unique, qui se distingue par un caractère particulier" },
      { term: "village", defPt: "o vilarejo / comunidade acolhedora", defFr: "Petite communauté où tout le monde se connaît" },
      { term: "propre", defPt: "próprio / característico", defFr: "Qui appartient en propre à une personne ou un lieu" },
      { term: "fréquentent", defPt: "frequentam / visitam com assiduidade", defFr: "Se rendent régulièrement dans un lieu" },
      { term: "assidûment", defPt: "assiduamente / com fidelidade", defFr: "D'une manière régulière et très constante" },
      { term: "marchés", defPt: "os mercados ao ar livre", defFr: "Lieux de vente en plein air de produits alimentaires" },
      { term: "repose", defPt: "baseia-se / apoia-se", defFr: "A son fondement sur un principe ou un équilibre" },
      { term: "subtil", defPt: "sutil / delicado", defFr: "Fin et délicat, qui demande de la finesse pour être perçu" },
      { term: "exigence", defPt: "a exigência / alto padrão", defFr: "Volonté rigoureuse de qualité et de précision" },
      { term: "habitués", defPt: "os frequentadores assíduos / clientes fiéis", defFr: "Clients qui viennent régulièrement dans un établissement" },
      { term: "salutations", defPt: "as saudações / cumprimentos", defFr: "Formules et gestes de politesse lors d'une rencontre" },
      { term: "chaleureuses", defPt: "calorosas / afetuosas", defFr: "Empreintes de cordialité et de sympathie sincère" },
      { term: "garçon de café", defPt: "o garçom de café parisiense", defFr: "Serveur traditionnel en tablier blanc dans un café parisien" },
      { term: "adopter", defPt: "adotar / incorporar na rotina", defFr: "Faire sien un comportement ou une habitude de vie" },
      { term: "quotidien", defPt: "o cotidiano / dia a dia", defFr: "Vie de tous les jours et habitudes régulières" },
      { term: "naturelle", defPt: "natural / sem esforço aparente", defFr: "Simple et spontanée, qui n'est pas forcée" },
      { term: "curiosité", defPt: "a curiosidade cultural", defFr: "Désir d'apprendre et de découvrir de nouvelles choses" },
      { term: "amour", defPt: "o amor profundo", defFr: "Attachement affectif intense envers une ville" },
      { term: "boulangerie", defPt: "a padaria tradicional", defFr: "Boutique où l'on achète le pain frais quotidien" },
      { term: "pâtisserie", defPt: "a confeitaria / loja de doces", defFr: "Boutique spécialisée dans les gâteaux et douceurs" },
      { term: "boucherie", defPt: "a açougue / talho", defFr: "Magasin spécialisé dans la vente des viandes" },
      { term: "poissonnerie", defPt: "a peixaria", defFr: "Commerce vendant des poissons et fruits de mer frais" },
      { term: "épicerie", defPt: "a mercearia de bairro", defFr: "Petit commerce d'alimentation générale de proximité" },
      { term: "fleuriste", defPt: "a floricultura / vendedor de flores", defFr: "Commerçant qui compose et vend des bouquets de fleurs" },
      { term: "concierge", defPt: "o porteiro de edifício parisiense", defFr: "Personne chargée de l'accueil et de l'entretien d'un immeuble" },
      { term: "immeuble", defPt: "o edifício de apartamentos", defFr: "Bâtiment urbain divisé en appartements d'habitation" },
      { term: "appartement", defPt: "o apartamento", defFr: "Ensemble de pièces formant un logement privatif" },
      { term: "balcon", defPt: "o balcão / varanda de ferro forgé", defFr: "Plate-forme en saillie devant les fenêtres d'un étage" },
      { term: "cour intérieure", defPt: "o pátio interno do edifício", defFr: "Espace à ciel ouvert au centre d'un immeuble parisien" },
      { term: "voisinage", defPt: "a vizinhança / moradores próximos", defFr: "Ensemble des voisins habitant le même immeuble ou quartier" },
      { term: "convivialité", defPt: "o convívio agradável", defFr: "Ambiance chaleureuse favorisant les échanges humains" },
      { term: "politesse", defPt: "a polidez / boa educação", defFr: "Respect des règles de courtoisie et de savoir-vivre" },
      { term: "courtoisie", defPt: "a cortesia / gentileza", defFr: "Politesse raffinée témoignant du respect envers autrui" },
      { term: "savoir-vivre", defPt: "o saber-viver / boas maneiras", defFr: "Connaissance des usages et règles de la politesse en société" },
      { term: "tradition", defPt: "a tradição cultural", defFr: "Coutume transmise de génération en génération" },
      { term: "habitude", defPt: "a hábito rotineiro", defFr: "Manière d'agir devenue régulière par la répétition" },
      { term: "rythme de vie", defPt: "o ritmo de vida", defFr: "Cadence et organisation habituelle des journées" },
      { term: "qualité de vie", defPt: "a qualidade de vida", defFr: "Degré de bien-être et de confort dans le quotidien" },
      { term: "proximité", defPt: "a proximidade de serviços", defFr: "Fait d'être géographiquement proche des commerces" },
      { term: "piéton", defPt: "o pedestre", defFr: "Personne qui se déplace à pied dans les rues" },
      { term: "trottoir", defPt: "a calçada / passeio", defFr: "Chemin surélevé au bord de la rue réservé aux piétons" },
      { term: "kiosque à journaux", defPt: "o banca de jornais e revistas", defFr: "Petit abri sur le trottoir pour vendre la presse" },
      { term: "terrasse chauffée", defPt: "o terraço aquecido no inverno", defFr: "Espace extérieur de café équipé de chauffage" },
      { term: "art de vivre", defPt: "a arte de viver à francesa", defFr: "Manière raffinée d'apprécier les plaisirs de l'existence" },
      { term: "élégance parisienne", defPt: "a elegância parisiense", defFr: "Distinction discrète et raffinée propre aux Parisiens" },
      { term: "flânerie", defPt: "o passeio descompromissado", defFr: "Promenade lente pour le seul plaisir de découvrir" }
    ]
  }
];

console.log("Generating Lessons 16 to 25 and their dictionaries...");

// Let's generate each lesson
for (const lesson of lessonsToGenerate) {
  const lessonId = `paris_lesson_${lesson.num}`;
  
  // Build vocabulary dictionary JSON array
  const vocabDictJson = lesson.words.map(w => {
    const examples = w.ex || build4Examples(w.term, w.defPt);
    return {
      term: w.term,
      definitionPt: w.defPt,
      definitionFr: w.defFr,
      difficultyLevel: lesson.level.includes('C1') ? 'C1' : lesson.level.includes('B2') ? 'B2' : 'B1',
      examples: examples
    };
  });

  const lessonJson: LessonData = {
    id: lessonId,
    cityId: "paris",
    domain: lesson.domain,
    level: lesson.level,
    titleFr: lesson.titleFr,
    titlePt: lesson.titlePt,
    subtitleFr: lesson.subtitleFr,
    subtitlePt: lesson.subtitlePt,
    summaryPt: lesson.summaryPt,
    paragraphs: lesson.paragraphs,
    vocabularyDictionary: vocabDictJson as any
  };

  // 1. Write paris_lesson_X.json
  const jsonPath = path.join(process.cwd(), `src/data/${lessonId}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(lessonJson, null, 2), 'utf8');
  console.log(`Created ${jsonPath} (${lesson.words.length} vocabulary words)`);

  // 2. Build TypeScript dictionary file
  let tsContent = `import { DictionaryEntry } from '../utils/textParser';\n\n`;
  tsContent += `export const LESSON_DICTIONARY_${lesson.num}: Record<string, DictionaryEntry> = {\n`;

  for (const w of lesson.words) {
    const examples = w.ex || build4Examples(w.term, w.defPt);
    const key = w.term.toLowerCase().trim();
    const keyFormatted = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
    tsContent += `  ${keyFormatted}: {\n`;
    tsContent += `    term: ${JSON.stringify(w.term)},\n`;
    tsContent += `    wordFr: ${JSON.stringify(w.wordFr || w.term)},\n`;
    tsContent += `    definitionPt: ${JSON.stringify(w.defPt)},\n`;
    tsContent += `    definitionFr: ${JSON.stringify(w.defFr)},\n`;
    tsContent += `    difficultyLevel: ${JSON.stringify(lesson.level.includes('C1') ? 'C1' : lesson.level.includes('B2') ? 'B2' : 'B1')},\n`;
    tsContent += `    isDictionaryTerm: true,\n`;
    tsContent += `    examples: [\n`;
    for (const ex of examples) {
      tsContent += `      { level: ${JSON.stringify(ex.level)}, fr: ${JSON.stringify(ex.fr)}, pt: ${JSON.stringify(ex.pt)} },\n`;
    }
    tsContent += `    ],\n`;
    tsContent += `  },\n`;
  }

  tsContent += `};\n`;

  const tsPath = path.join(process.cwd(), `src/data/lessonDictionary${lesson.num}.ts`);
  fs.writeFileSync(tsPath, tsContent, 'utf8');
  console.log(`Created ${tsPath}`);
}

console.log("Successfully generated all 10 new Paris lessons (16 to 25)!");
