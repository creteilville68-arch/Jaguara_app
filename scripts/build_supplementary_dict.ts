import fs from 'fs';
import path from 'path';

interface WordDef {
  term: string;
  wordFr: string;
  definitionPt: string;
  pos: 'noun_m' | 'noun_f' | 'noun_p' | 'verb_inf' | 'verb_conj' | 'adj' | 'adv' | 'place';
  ptTrans: string;
}

const words: Record<string, { pt: string; pos: WordDef['pos'] }> = {
  "11": { pt: "onze / 11", pos: "adj" },
  "champ-de-mars": { pt: "Champ-de-Mars (parque parisiense)", pos: "place" },
  "avant": { pt: "antes / antes de", pos: "adv" },
  "chaque": { pt: "cada", pos: "adj" },
  "illumine": { pt: "ilumina", pos: "verb_conj" },
  "scintille": { pt: "brilha / cintila", pos: "verb_conj" },
  "multi-villes": { pt: "múltiplas cidades / intercidades", pos: "adj" },
  "découvertes": { pt: "descobertas", pos: "noun_p" },
  "sacré-cœur": { pt: "Sacré-Cœur (basílica em Montmartre)", pos: "place" },
  "plein": { pt: "cheio / pleno", pos: "adj" },
  "air": { pt: "ar / ar livre", pos: "noun_m" },
  "morris": { pt: "Morris (colunas publicitárias em Paris)", pos: "place" },
  "affiches": { pt: "cartazes / pôsteres", pos: "noun_p" },
  "théâtre": { pt: "teatro", pos: "noun_m" },
  "davioud": { pt: "Davioud (arquiteto parisiense)", pos: "place" },
  "wallace": { pt: "Wallace (fontes de água em Paris)", pos: "place" },
  "boire": { pt: "beber", pos: "verb_inf" },
  "vivre": { pt: "viver", pos: "verb_inf" },
  "apprécier": { pt: "apreciar / gostar", pos: "verb_inf" },
  "détail": { pt: "detalhe", pos: "noun_m" },
  "vie": { pt: "vida", pos: "noun_f" },
  "quotidienne": { pt: "cotidiana / diária", pos: "adj" },
  "illuminent": { pt: "iluminam", pos: "verb_conj" },
  "observe": { pt: "observo / observa", pos: "verb_conj" },
  "artisanale": { pt: "artesanal", pos: "adj" },
  "goûter": { pt: "degustar / provar", pos: "verb_inf" },
  "juste": { pt: "justo / exatamente / apenas", pos: "adv" },
  "four": { pt: "forno / padaria", pos: "noun_m" },
  "fromager": { pt: "queijeiro / especialista em queijos", pos: "noun_m" },
  "conseille": { pt: "aconselha / recomenda", pos: "verb_conj" },
  "exceptionnel": { pt: "excepcional", pos: "adj" },
  "suggère": { pt: "sugere", pos: "verb_conj" },
  "vin": { pt: "vinho", pos: "noun_m" },
  "rouge": { pt: "vermelho / tinto", pos: "adj" },
  "pourquoi": { pt: "por que / por qual razão", pos: "adv" },
  "considérée": { pt: "considerada", pos: "adj" },
  "trésor": { pt: "tesouro", pos: "noun_m" },
  "mondial": { pt: "mundial", pos: "adj" },
  "montaigne": { pt: "Montaigne (avenida de luxo em Paris)", pos: "place" },
  "admirer": { pt: "admirar", pos: "verb_inf" },
  "haute": { pt: "alta", pos: "adj" },
  "artisanal": { pt: "artesanal", pos: "adj" },
  "mode": { pt: "moda", pos: "noun_f" },
  "créateurs": { pt: "criadores / estilistas", pos: "noun_p" },
  "révèle": { pt: "revela", pos: "verb_conj" },
  "style": { pt: "estilo", pos: "noun_m" },
  "prestigieuses": { pt: "prestigiadas / famosas", pos: "adj" },
  "jeune": { pt: "jovem", pos: "adj" },
  "sorbonne": { pt: "Sorbonne (histórica universidade em Paris)", pos: "place" },
  "discutent": { pt: "discutem / conversam", pos: "verb_conj" },
  "installe": { pt: "instala / senta", pos: "verb_conj" },
  "montant": { pt: "subindo", pos: "verb_conj" },
  "rends": { pt: "rendo (homenagem) / vou", pos: "verb_conj" },
  "hommage": { pt: "homenagem", pos: "noun_m" },
  "retourne": { pt: "volto / volta", pos: "verb_conj" },
  "pleine": { pt: "plena / cheia", pos: "adj" },
  "découvrir": { pt: "descobrir", pos: "verb_inf" },
  "installent": { pt: "instalam / sentam", pos: "verb_conj" },
  "inspiré": { pt: "inspirado", pos: "adj" },
  "tant": { pt: "tanto", pos: "adv" },
  "sommet": { pt: "topo / cume", pos: "noun_m" },
  "toits": { pt: "telhados", pos: "noun_p" },
  "orsay": { pt: "Orsay (Museu d'Orsay de arte impressionista)", pos: "place" },
  "installé": { pt: "instalado / situado", pos: "adj" },
  "monet": { pt: "Monet (famoso pintor impressionista)", pos: "place" },
  "renoir": { pt: "Renoir (famoso pintor impressionista)", pos: "place" },
  "degas": { pt: "Degas (famoso pintor e escultor impressionista)", pos: "place" },
  "couleurs": { pt: "cores", pos: "noun_p" },
  "découvre": { pt: "descubro / descobre", pos: "verb_conj" },
  "illustre": { pt: "ilustra", pos: "verb_conj" },
  "époque": { pt: "época", pos: "noun_f" },
  "reposer": { pt: "descansar / repousar", pos: "verb_inf" },
  "jardin": { pt: "jardim", pos: "noun_m" },
  "luxembourg": { pt: "Luxembourg (famoso jardim em Paris)", pos: "place" },
  "chaise": { pt: "cadeira", pos: "noun_f" },
  "traditionnelle": { pt: "tradicional", pos: "adj" },
  "lire": { pt: "ler", pos: "verb_inf" },
  "profitant": { pt: "aproveitando", pos: "verb_conj" },
  "autour": { pt: "ao redor / em volta", pos: "adv" },
  "central": { pt: "central", pos: "adj" },
  "enfants": { pt: "crianças / filhos", pos: "noun_p" },
  "font": { pt: "fazem", pos: "verb_conj" },
  "voile": { pt: "vela / barco a vela", pos: "noun_f" },
  "véritables": { pt: "verdadeiros(as)", pos: "adj" },
  "paix": { pt: "paz", pos: "noun_f" },
  "fondamental": { pt: "fundamental", pos: "adj" },
  "centre": { pt: "centro", pos: "noun_m" },
  "élève": { pt: "eleva / sobe", pos: "verb_conj" },
  "surmontée": { pt: "coroada / superada por", pos: "adj" },
  "doré": { pt: "dourado", pos: "adj" },
  "lis": { pt: "leio / lê", pos: "verb_conj" },
  "inscrite": { pt: "inscrita", pos: "adj" },
  "guider": { pt: "guiar / orientar", pos: "verb_inf" },
  "culture": { pt: "cultura", pos: "noun_f" },
  "parcours": { pt: "percurso / trajeto", pos: "noun_m" },
  "victor": { pt: "Victor (Victor Hugo, célebre escritor francês)", pos: "place" },
  "hugo": { pt: "Hugo (Victor Hugo, autor de Os Miseráveis)", pos: "place" },
  "marcel": { pt: "Marcel (Marcel Proust, célebre romancista francês)", pos: "place" },
  "proust": { pt: "Proust (autor de Em Busca do Tempo Perdido)", pos: "place" },
  "shakespeare": { pt: "Shakespeare (famosa livraria em Paris)", pos: "place" },
  "and": { pt: "and (parte de 'Shakespeare and Company')", pos: "place" },
  "company": { pt: "Company (livraria Shakespeare and Company)", pos: "place" },
  "notre-dame": { pt: "Notre-Dame (catedral de Paris)", pos: "place" },
  "saint-germain-des-prés": { pt: "Saint-Germain-des-Prés (bairro histórico parisiense)", pos: "place" },
  "pages": { pt: "páginas", pos: "noun_p" },
  "aide": { pt: "ajuda / auxílio", pos: "noun_f" },
  "profonde": { pt: "profunda", pos: "adj" },
  "avant-dernière": { pt: "penúltima", pos: "adj" },
  "défense": { pt: "La Défense (bairro financeiro moderno)", pos: "place" },
  "arche": { pt: "arco / Grande Arche", pos: "noun_f" },
  "montrent": { pt: "mostram", pos: "verb_conj" },
  "sait": { pt: "sabe", pos: "verb_conj" },
  "célébrer": { pt: "celebrar / comemorar", pos: "verb_inf" },
  "inventant": { pt: "inventando / criando", pos: "verb_conj" },
  "vécu": { pt: "vivido / experiência de vida", pos: "noun_m" }
};

function generateNaturalExamples(wordFr: string, ptTrans: string, pos: WordDef['pos']) {
  switch (pos) {
    case 'verb_inf':
      return [
        { level: "A1", fr: `J'aime beaucoup ${wordFr} à Paris.`, pt: `Eu gosto muito de ${ptTrans} em Paris.` },
        { level: "A2-B1", fr: `Nous allons ${wordFr} ensemble pendant notre promenade.`, pt: `Nós vamos ${ptTrans} juntos durante nosso passeio.` },
        { level: "B2", fr: `Il est toujours agréable de ${wordFr} dans les quartiers historiques.`, pt: `É sempre agradável ${ptTrans} nos bairros históricos.` },
        { level: "C1-C2", fr: `Prendre le temps de ${wordFr} permet d'apprécier la véritable richesse de la capitale.`, pt: `Reservar tempo para ${ptTrans} permite apreciar a verdadeira riqueza da capital.` }
      ];
    case 'verb_conj':
      return [
        { level: "A1", fr: `À Paris, cette scène ${wordFr} notre attention.`, pt: `Em Paris, esta cena ${ptTrans} nossa atenção.` },
        { level: "A2-B1", fr: `Quand le soleil brille, la ville ${wordFr} sous une lumière magnifique.`, pt: `Quando o sol brilha, a cidade ${ptTrans} sob uma luz magnífica.` },
        { level: "B2", fr: `Chaque matin, ce moment ${wordFr} l'élégance de la vie quotidienne.`, pt: `Toda manhã, este momento ${ptTrans} a elegância da vida cotidiana.` },
        { level: "C1-C2", fr: `À travers les époques, cette tradition ${wordFr} l'identité culturelle de la France.`, pt: `Através das épocas, esta tradição ${ptTrans} a identidade cultural da França.` }
      ];
    case 'noun_f':
      return [
        { level: "A1", fr: `C'est une très belle ${wordFr} dans ce quartier.`, pt: `É um(a) belo(a) ${ptTrans} neste bairro.` },
        { level: "A2-B1", fr: `Nous admirons cette ${wordFr} pendant notre visite de la ville.`, pt: `Nós admiramos este/esta ${ptTrans} durante nossa visita à cidade.` },
        { level: "B2", fr: `Dans la vie quotidienne, chaque ${wordFr} possède un charme unique.`, pt: `Na vida cotidiana, cada ${ptTrans} possui um charme único.` },
        { level: "C1-C2", fr: `La beauté de cette ${wordFr} enrichit le patrimoine historique français.`, pt: `A beleza deste/desta ${ptTrans} enriquece o patrimônio histórico francês.` }
      ];
    case 'noun_m':
      return [
        { level: "A1", fr: `C'est un magnifique ${wordFr} dans le centre de Paris.`, pt: `É um magnífico ${ptTrans} no centro de Paris.` },
        { level: "A2-B1", fr: `Nous découvrons ce ${wordFr} près de notre hôtel.`, pt: `Nós descobrimos este ${ptTrans} perto do nosso hotel.` },
        { level: "B2", fr: `Chaque ${wordFr} contribue à l'atmosphère authentique du quartier.`, pt: `Cada ${ptTrans} contribui para a atmosfera autêntica do bairro.` },
        { level: "C1-C2", fr: `L'élégance de ce ${wordFr} illustre parfaitement l'art de vivre parisien.`, pt: `A elegância deste ${ptTrans} ilustra perfeitamente a arte de viver parisiense.` }
      ];
    case 'noun_p':
      return [
        { level: "A1", fr: `Il y a de magnifiques ${wordFr} à Paris.`, pt: `Há magníficos(as) ${ptTrans} em Paris.` },
        { level: "A2-B1", fr: `Nous observons attentivement ces ${wordFr} pendant notre promenade.`, pt: `Nós observamos atentamente estes/estas ${ptTrans} durante nosso passeio.` },
        { level: "B2", fr: `La diversité de ces ${wordFr} apporte une vitalité unique à la ville.`, pt: `A diversidade destes/destas ${ptTrans} traz uma vitalidade única à cidade.` },
        { level: "C1-C2", fr: `À travers les siècles, ces ${wordFr} ont façonné l'identité de la capitale.`, pt: `Através dos séculos, estes/estas ${ptTrans} moldaram a identidade da capital.` }
      ];
    case 'adj':
      return [
        { level: "A1", fr: `C'est un lieu vraiment ${wordFr} à découvrir.`, pt: `É um local realmente ${ptTrans} para descobrir.` },
        { level: "A2-B1", fr: `Nous aimons cette atmosphère très ${wordFr} dans le quartier.`, pt: `Nós gostamos desta atmosfera muito ${ptTrans} no bairro.` },
        { level: "B2", fr: `Ce monument historique offre un cadre extrêmement ${wordFr} aux voyageurs.`, pt: `Este monumento histórico oferece um cenário extremamente ${ptTrans} aos viajantes.` },
        { level: "C1-C2", fr: `Le caractère profondément ${wordFr} de ce lieu reflète le raffinement français.`, pt: `O caráter profundamente ${ptTrans} deste local reflete o refinamento francês.` }
      ];
    case 'adv':
      return [
        { level: "A1", fr: `Nous venons ${wordFr} dans ce petit café.`, pt: `Nós vimos ${ptTrans} neste pequeno café.` },
        { level: "A2-B1", fr: `À Paris, on se promène ${wordFr} le long de la Seine.`, pt: `Em Paris, passeia-se ${ptTrans} ao longo do Sena.` },
        { level: "B2", fr: `Les Parisiens apprécient ${wordFr} la bonne gastronomie et l'art.`, pt: `Os parisienses apreciam ${ptTrans} a boa gastronomia e a arte.` },
        { level: "C1-C2", fr: `Cette tradition culturelle s'exprime ${wordFr} dans chaque quartier.`, pt: `Esta tradição cultural expressa-se ${ptTrans} em cada bairro.` }
      ];
    case 'place':
    default:
      return [
        { level: "A1", fr: `Nous visitons ${wordFr} pendant notre séjour à Paris.`, pt: `Nós visitamos ${ptTrans} durante nossa estadia em Paris.` },
        { level: "A2-B1", fr: `Une promenade près de ${wordFr} est toujours inoubliable.`, pt: `Um passeio perto de ${ptTrans} é sempre inesquecível.` },
        { level: "B2", fr: `L'histoire et la beauté de ${wordFr} fascinent les voyageurs du monde entier.`, pt: `A história e a beleza de ${ptTrans} fascinam os viajantes do mundo inteiro.` },
        { level: "C1-C2", fr: `Dans le paysage culturel français, ${wordFr} occupe une place emblématique.`, pt: `No cenário cultural francês, ${ptTrans} ocupa um lugar emblemático.` }
      ];
  }
}

let fileContent = `import { DictionaryEntry } from '../types';

export const LESSON_DICTIONARY_SUPPLEMENTARY: Record<string, DictionaryEntry> = {\n`;

for (const [key, info] of Object.entries(words)) {
  const ptTrans = info.pt.split(' / ')[0].replace(/ \([^)]+\)/g, '');
  const examples = generateNaturalExamples(key, ptTrans, info.pos);
  
  const entry = {
    term: key,
    wordFr: key,
    definitionPt: info.pt,
    difficultyLevel: "A2",
    examples
  };
  fileContent += `  "${key}": ${JSON.stringify(entry, null, 4).replace(/\n/g, '\n  ')},\n`;
}

fileContent += `};\n`;

const targetFile = path.join(process.cwd(), 'src/data/lessonDictionarySupplementary.ts');
fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log('Successfully created lessonDictionarySupplementary.ts with', Object.keys(words).length, 'entries!');
