import fs from 'fs';
import path from 'path';
import { LESSON_DICTIONARY } from '../src/data/lessonDictionary';

const extraParisWords = [
  { term: "arrondissement municipal", wordFr: "arrondissement municipal", defPt: "distrito municipal de Paris", defFr: "Division administrative locale de la ville de Paris" },
  { term: "boulevard périphérique", wordFr: "boulevard périphérique", defPt: "anel viário ao redor de Paris", defFr: "Voie rapide urbaine faisant le tour de la capitale" },
  { term: "quais de seine", wordFr: "quais de Seine", defPt: "as margens do rio Sena", defFr: "Berges aménagées le long du fleuve à Paris" },
  { term: "bateau-mouche", wordFr: "bateau-mouche", defPt: "barco de passeio no rio Sena", defFr: "Embarcation touristique navigant sur la Seine" },
  { term: "colonne morris", wordFr: "colonne Morris", defPt: "coluna de cartazes de teatro e cinema", defFr: "Mobilier urbain cylindrique pour l'affichage des spectacles" },
  { term: "fontaine wallace", wordFr: "fontaine Wallace", defPt: "fonte pública de água potável em Paris", defFr: "Point d'eau potable public en fonte verte dans les rues" },
  { term: "banc davioud", wordFr: "banc Davioud", defPt: "banco tradicional de parque parisiense", defFr: "Banc public parisien à double assise en bois et fonte" },
  { term: "passage couvert", wordFr: "passage couvert", defPt: "galeria comercial coberta com teto de vidro", defFr: "Galerie marchande historique couverte d'une verrière" },
  { term: "verrière", wordFr: "verrière", defPt: "teto ou estrutura de vidro", defFr: "Grand vitrage servant de toiture ou de paroi" },
  { term: "brasserie parisienne", wordFr: "brasserie parisienne", defPt: "cervejaria / restaurante tradicional parisiense", defFr: "Grand restaurant typique servant à toute heure" },
  { term: "zinc", wordFr: "zinc", defPt: "o balcão do bar (le zinc)", defFr: "Comptoir d'un café parisien traditionnellement en zinc" },
  { term: "croissant au beurre", wordFr: "croissant au beurre", defPt: "croissant amanteigado", defFr: "Viennoiserie feuilletée au beurre en forme de croissant" },
  { term: "pain au chocolat", wordFr: "pain au chocolat", defPt: "pão folhado recheado com chocolate", defFr: "Viennoiserie feuilletée contenant des barres de chocolat" },
  { term: "éclair au chocolat", wordFr: "éclair au chocolat", defPt: "bomba de chocolate / éclair", defFr: "Pâtisserie allongée en pâte à choux fourrée à la crème" },
  { term: "macaron", wordFr: "macaron", defPt: "macaron (doce francês)", defFr: "Petit gâteau rond à base de poudre d'amande et ganache" },
  { term: "mille-feuille", wordFr: "mille-feuille", defPt: "mil-folhas (doce com creme de confeiteiro)", defFr: "Pâtisserie faite de couches de pâte feuilletée et crème" },
  { term: "café au lait", wordFr: "café au lait", defPt: "café com leite", defFr: "Boisson chaude composant le petit-déjeuner parisien" },
  { term: "express", wordFr: "express", defPt: "café expresso curto", defFr: "Café noir très serré servi dans une petite tasse" },
  { term: "noisette", wordFr: "noisette (café)", defPt: "café expresso com um pingo de leite", defFr: "Café express additionné d'une goutte de lait" },
  { term: "carafe d'eau", wordFr: "carafe d'eau", defPt: "jarra de água da casa (gratuita)", defFr: "Eau du robinet servie gratuitement à table" },
  { term: "plat du terroir", wordFr: "plat du terroir", defPt: "prato tradicional regional", defFr: "Spécialité culinaire liée aux traditions d'une région" },
  { term: "blanquette de veau", wordFr: "blanquette de veau", defPt: "ensopado tradicional de vitela ao molho branco", defFr: "Plat traditionnel de veau mijoté dans une sauce blanche" },
  { term: "bœuf bourguignon", wordFr: "bœuf bourguignon", defPt: "carne de boi cozida ao vinho tinto", defFr: "Ragoût de bœuf mijoté au vin rouge de Bourgogne" },
  { term: "soupe à l'oignon", wordFr: "soupe à l'oignon", defPt: "sopa de cebola gratinada", defFr: "Soupe traditionnelle gratinée avec du fromage et croûtons" },
  { term: "croque-monsieur", wordFr: "croque-monsieur", defPt: "sanduíche quente de presunto e queijo gratinado", defFr: "Sandwich chaud au jambon et fromage fondu" },
  { term: "croque-madame", wordFr: "croque-madame", defPt: "sanduíche quente com ovo frito por cima", defFr: "Croque-monsieur surmonté d'un œuf au plat" },
  { term: "salade niçoise", wordFr: "salade niçoise", defPt: "salada tradicional de Nice com atum e azeitonas", defFr: "Salade de crudités, thon, œufs durs et olives niçoises" },
  { term: "quiche lorraine", wordFr: "quiche lorraine", defPt: "torta salgada com bacon e creme", defFr: "Tarte salée aux lardons et à l'appareil aux œufs" },
  { term: "crêpe au sucre", wordFr: "crêpe au sucre", defPt: "crepe doce com açúcar", defFr: "Fine galette de pâte de froment saupoudrée de sucre" },
  { term: "galette complète", wordFr: "galette complète", defPt: "crepe salgado de trigo sarraceno com presunto, queijo e ovo", defFr: "Crêpe au sarrasin garnie de jambon, œuf et fromage" },
  { term: "métropolitain", wordFr: "métropolitain", defPt: "o metrô de Paris", defFr: "Réseau de chemin de fer souterrain de la capitale" },
  { term: "carnet de tickets", wordFr: "carnet de tickets", defPt: "bloco de passagens de metrô", defFr: "Ensemble de billets de transport vendus ensemble" },
  { term: "carte navigo", wordFr: "carte Navigo", defPt: "cartão de transporte de Paris", defFr: "Titre de transport électronique pour l'Île-de-France" },
  { term: "station de métro", wordFr: "station de métro", defPt: "estação de metrô", defFr: "Arrêt souterrain du réseau métropolitain parisien" },
  { term: "bouche de métro", wordFr: "bouche de métro", defPt: "entrada/saída da estação de metrô na rua", defFr: "Entrée d'une station de métro sur le trottoir" },
  { term: "grand magasin", wordFr: "grand magasin", defPt: "loja de departamentos tradicional (ex: Galeries Lafayette)", defFr: "Vaste commerce à plusieurs étages vendant divers articles" },
  { term: "solde", wordFr: "solde", defPt: "a liquidação / promoção de temporada", defFr: "Vente de marchandises à prix réduit en fin de saison" },
  { term: "vitrine de noël", wordFr: "vitrine de Noël", defPt: "vitrine decorada de Natal", defFr: "Décoration animée des magasins pendant les fêtes" }
];

// Let's filter only terms not currently in LESSON_DICTIONARY
const existingKeys = new Set(Object.keys(LESSON_DICTIONARY).map(k => k.toLowerCase().trim()));
const newWords = extraParisWords.filter(w => !existingKeys.has(w.term.toLowerCase().trim()));

console.log(`Adding ${newWords.length} new unique Parisian words to lesson 25...`);

// 1. Update paris_lesson_25.json
const lesson25Path = path.join(process.cwd(), 'src/data/paris_lesson_25.json');
const lesson25Data = JSON.parse(fs.readFileSync(lesson25Path, 'utf8'));

for (const w of newWords) {
  const examples = [
    { level: "A1", fr: `C'est un exemple avec ${w.term}.`, pt: `É um exemplo com ${w.defPt}.` },
    { level: "A2-B1", fr: `À Paris, nous voyons souvent ${w.term}.`, pt: `Em Paris, nós vemos frequentemente ${w.defPt}.` },
    { level: "B2", fr: `L'expérience de ${w.term} fait partie du charme parisien.`, pt: `A experiência de ${w.defPt} faz parte do charme parisiense.` },
    { level: "C1-C2", fr: `Dans la tradition urbaine, ${w.term} illustre le patrimoine de la capitale.`, pt: `Na tradição urbana, ${w.defPt} ilustra o patrimônio da capital.` }
  ];
  lesson25Data.vocabularyDictionary.push({
    term: w.term,
    definitionPt: w.defPt,
    definitionFr: w.defFr,
    difficultyLevel: "C1",
    examples
  });
}

fs.writeFileSync(lesson25Path, JSON.stringify(lesson25Data, null, 2), 'utf8');

// 2. Update lessonDictionary25.ts
let tsContent = fs.readFileSync(path.join(process.cwd(), 'src/data/lessonDictionary25.ts'), 'utf8');
// remove trailing `};`
tsContent = tsContent.replace(/};\s*$/, '');

for (const w of newWords) {
  const examples = [
    { level: "A1", fr: `C'est un exemple avec ${w.term}.`, pt: `É um exemplo com ${w.defPt}.` },
    { level: "A2-B1", fr: `À Paris, nous voyons souvent ${w.term}.`, pt: `Em Paris, nós vemos frequentemente ${w.defPt}.` },
    { level: "B2", fr: `L'expérience de ${w.term} fait partie du charme parisien.`, pt: `A experiência de ${w.defPt} faz parte do charme parisiense.` },
    { level: "C1-C2", fr: `Dans la tradition urbaine, ${w.term} illustre le patrimoine de la capitale.`, pt: `Na tradição urbana, ${w.defPt} ilustra o patrimônio da capital.` }
  ];
  const key = w.term.toLowerCase().trim();
  const keyFormatted = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
  tsContent += `  ${keyFormatted}: {\n`;
  tsContent += `    term: ${JSON.stringify(w.term)},\n`;
  tsContent += `    wordFr: ${JSON.stringify(w.wordFr || w.term)},\n`;
  tsContent += `    definitionPt: ${JSON.stringify(w.defPt)},\n`;
  tsContent += `    definitionFr: ${JSON.stringify(w.defFr)},\n`;
  tsContent += `    difficultyLevel: "C1",\n`;
  tsContent += `    isDictionaryTerm: true,\n`;
  tsContent += `    examples: [\n`;
  for (const ex of examples) {
    tsContent += `      { level: ${JSON.stringify(ex.level)}, fr: ${JSON.stringify(ex.fr)}, pt: ${JSON.stringify(ex.pt)} },\n`;
  }
  tsContent += `    ],\n`;
  tsContent += `  },\n`;
}

tsContent += `};\n`;
fs.writeFileSync(path.join(process.cwd(), 'src/data/lessonDictionary25.ts'), tsContent, 'utf8');

console.log("Successfully added extra words to Lesson 25!");
