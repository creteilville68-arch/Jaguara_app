/**
 * Auditoria de relevância à cidade (Enciclopédia).
 *
 * Verifica que o texto de cada guia (`src/data/city_guides/<cidade>_guide_<N>.json`)
 * realmente tem relação com a cidade em que está inserido. Uma guia é considerada
 * ancorada quando, no título + subtítulo + parágrafos (fr):
 *   - aparece pelo menos 1 âncora FORTE (nome da cidade ou gentílico), OU
 *   - aparecem pelo menos 2 âncoras FRACAS distintas (pontos de referência,
 *     rios, bairros, monumentos, figuras históricas próprios da cidade).
 *
 * Guias que não mencionam a cidade nem nenhum elemento local são apontadas como
 * "sem âncora na cidade" — sinal de texto genérico ou copiado de outro contexto.
 *
 * Uso:
 *   bun run scripts/audit_city_relevance.ts            (todas as cidades)
 *   bun run scripts/audit_city_relevance.ts <cidade>   (ex.: amiens)
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'src', 'data', 'city_guides');
const filter = process.argv[2];

/**
 * Âncoras por cidade.
 *  - strong: nome da cidade (capitalizado) e gentílicos — prova direta.
 *  - weak:   nomes próprios locais (monumentos, rios, bairros, pessoas).
 * As listas são comparadas com o texto dobrado (minúsculas, sem acentos,
 * apóstrofos normalizados), exceto o nome da própria cidade quando ele é
 * também uma palavra comum do francês ("Tours" = torres), que é comparado
 * apenas na forma capitalizada original.
 */
interface CityAnchors {
  strong: string[];
  strongCaseSensitive?: string[];
  weak: string[];
}

const ANCHORS: Record<string, CityAnchors> = {
  amiens: {
    strong: ['amiens', 'amienois', 'amienoise', 'amienoises'],
    weak: [
      'hortillonnages', 'cabotans', 'picardie', 'picard', 'picarde', 'picards',
      'picardes', 'jules verne', 'muches', 'samara', 'saint-leu', 'beffroi',
      'somme', 'marquenterre', 'la somme',
    ],
  },
  bordeaux: {
    strong: ['bordeaux', 'bordelais', 'bordelaise', 'bordelaises'],
    weak: [
      'garonne', 'gironde', 'medoc', 'burdigala', 'capucins', 'chartrons',
      'port de la lune', 'place de la bourse', 'pont de pierre', 'cite du vin',
      'quinconces', 'saint-emilion', 'miroir d\'eau', 'pierre blonde', 'pessac',
      'le haillan', 'gradignan', 'bourse',
    ],
  },
  lille: {
    strong: ['lille', 'lillois', 'lilloise', 'lilloises'],
    weak: [
      'flandre', 'flandres', 'vieux-lille', 'braderie', 'deule', 'citadelle',
      'vieille bourse', 'roubaix', 'tourcoing', 'wazemmes', 'estaminet',
      'furet du nord', 'hauts-de-france', 'palais des beaux-arts', 'courées',
      'courées', 'l\'isle', 'grand-place', 'ch\'ti',
    ],
  },
  lyon: {
    strong: ['lyon', 'lyonnais', 'lyonnaise', 'lyonnaises'],
    weak: [
      'saone', 'rhone', 'traboule', 'traboules', 'canuts', 'fourviere',
      'croix-rousse', 'presqu\'ile', 'tete d\'or', 'guignol', 'bocuse',
      'lumiere', 'lumières', 'confluence', 'vieux-lyon', 'bellecour',
      'part-dieu', 'brotteaux', 'lugdunum', 'murs peints', 'bouchon',
      'bouchons', 'villeurbanne', 'gerland', 'opéra de lyon', 'canut',
    ],
  },
  marseille: {
    strong: ['marseille', 'marseillais', 'marseillaise', 'marseillaises'],
    weak: [
      'vieux-port', 'calanques', 'canebiere', 'panier', 'notre-dame de la garde',
      'bonne mere', 'massalia', 'velodrome', 'mistral', 'chateau d\'if', 'mucem',
      'la cite radieuse', 'le corbusier', 'l\'estaque', 'estaque', 'pastis',
      'savon de marseille', 'petanque', 'phoceen', 'phoceenne', 'cote bleue',
      'prado', 'joliette', 'la ciotat', 'provence',
    ],
  },
  mont_saint_michel: {
    strong: ['mont-saint-michel', 'mont saint michel'],
    weak: [
      'le mont', 'merveille', 'baie', 'rocher', 'grande rue', 'pres-sales',
      'scriptorium', 'couesnon', 'selune', 'avranches', 'normandie',
      'tombelaine', 'digue', 'barrage', 'abbaye',
    ],
  },
  nice: {
    strong: ['nice', 'nicois', 'nicoise', 'nicoises'],
    weak: [
      'nikaia', 'nicaia', 'cote d\'azur', 'baie des anges',
      'promenade des anglais', 'vieux-nice', 'cours saleya',
      'colline du chateau', 'cimiez', 'port lympia', 'bellet', 'socca',
      'pissaladiere', 'riviera', 'matisse', 'chagall', 'cailletier',
      'garibaldi', 'savoie',
    ],
  },
  paris: {
    // 'creteil' é âncora forte: é o bairro-casa do cânone (aula/guia 26).
    strong: ['paris', 'parisien', 'parisienne', 'parisiens', 'parisiennes', 'creteil'],
    weak: [
      'seine', 'lutece', 'tour eiffel', 'louvre', 'montmartre', 'bastille',
      'champs-elysees', 'musee d\'orsay', 'notre-dame', 'marais', 'beaubourg',
      'catacombes', 'sacre-coeur', 'saint-germain', 'quartier latin',
      'hotel de ville', 'palais royal', 'pere-lachaise', 'haussmann',
      'les halles', 'invalides', 'tuileries', 'jardin du luxembourg',
      'trocadero', 'la defense', 'passages couverts',
      'galerie vivienne', 'palais garnier', 'sorbonne', 'montparnasse',
      'belleville', 'canal saint-martin', 'pantheon', 'sainte-chapelle',
      'conciergerie', 'pont neuf', 'opera garnier', 'champs-elysees',
      'jardin des plantes', 'ile de la cite',
    ],
  },
  strasbourg: {
    strong: ['strasbourg', 'strasbourgeois', 'strasbourgeoise', 'strasbourgeoises'],
    weak: [
      'rhin', 'petite france', 'kleber', 'broglie', 'orangerie',
      'parlement europeen', 'conseil de l\'europe', 'alsace', 'alsacien',
      'alsacienne', 'alsaciens', 'alsaciennes', 'maison kammerzell', 'neustadt',
      'palais rohan', 'robertsau', 'ill', 'marche de noel',
      'christkindelsmarik', 'ponts couverts', 'barrage vauban',
      'choucroute', 'bretzel',
    ],
  },
  toulouse: {
    strong: ['toulouse', 'toulousain', 'toulousaine', 'toulousains', 'toulousaines'],
    weak: [
      'garonne', 'capitole', 'saint-sernin', 'jacobins', 'cite de l\'espace',
      'ariane', 'canal du midi', 'ville rose', 'violette', 'violettes',
      'carmes', 'saint-cyprien', 'jolimont', 'pastel', 'lauragais', 'riquet',
      'bazacle', 'tolosa', 'aeronautique', 'aerospatiale', 'le palais de justice',
      'pont neuf', 'halle aux grains',
    ],
  },
  tours: {
    strongCaseSensitive: ['Tours'],
    strong: ['tourangeau', 'tourangelle', 'tourangeaux', 'tourangelles'],
    weak: [
      'loire', 'touraine', 'val de loire', 'saint-gatien', 'pont wilson',
      'rue nationale', 'guinguette', 'guinguettes', 'troglodyte', 'tuffeau',
      'place plumereau', 'vieux-tours', 'caesarodunum', 'saint martin',
      'rillettes', 'ronsard', 'balzac', 'amboise', 'chenonceau', 'villandry',
      'azay-le-rideau', 'cheverny', 'langeais', 'saumur', 'blois', 'chambord',
      'leonard de vinci', 'vinci',
    ],
  },
};

function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’ʼ‘]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function countMatches(foldedText: string, anchors: string[]): string[] {
  const found: string[] = [];
  for (const a of anchors) {
    const fa = fold(a).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Fronteiras apenas de letra/dígito: apóstrofos ('d'Amiens'), hífens e
    // pontuação contam como separadores válidos.
    const re = new RegExp(`(?<![a-z0-9])${fa}(?![a-z0-9])`);
    if (re.test(foldedText)) found.push(a);
  }
  return found;
}

interface GuideResult {
  file: string;
  cityId: string;
  titleFr: string;
  strongHits: string[];
  weakHits: string[];
  status: 'OK' | 'FRACO' | 'SEM ANCORA';
}

const cities = Object.keys(ANCHORS).sort();
const results: GuideResult[] = [];
const perCity: Record<string, { total: number; fail: number; weak: number }> = {};

for (const city of cities) {
  if (filter && city !== filter) continue;
  const files = fs
    .readdirSync(DIR)
    .filter((f) => f.startsWith(`${city}_guide_`) && f.endsWith('.json'))
    .sort();
  perCity[city] = { total: files.length, fail: 0, weak: 0 };

  for (const file of files) {
    let data: any;
    try {
      data = JSON.parse(fs.readFileSync(path.join(DIR, file), 'utf8').replace(/^\uFEFF/, ''));
    } catch {
      results.push({ file, cityId: city, titleFr: '(JSON inválido)', strongHits: [], weakHits: [], status: 'SEM ANCORA' });
      perCity[city].fail += 1;
      continue;
    }

    const parts: string[] = [data.titleFr || '', data.subtitleFr || ''];
    for (const p of Array.isArray(data.paragraphs) ? data.paragraphs : []) {
      if (p && typeof p.fr === 'string') parts.push(p.fr);
    }
    const rawText = parts.join(' ');
    const foldedText = fold(rawText);

    const anchors = ANCHORS[city];
    const strongHits = countMatches(foldedText, anchors.strong);
    if (anchors.strongCaseSensitive) {
      for (const a of anchors.strongCaseSensitive) {
        if (rawText.includes(a)) strongHits.push(a);
      }
    }
    const weakHits = countMatches(foldedText, anchors.weak);

    let status: GuideResult['status'];
    if (strongHits.length >= 1) status = 'OK';
    else if (weakHits.length >= 2) status = 'OK';
    else if (weakHits.length === 1) status = 'FRACO';
    else status = 'SEM ANCORA';

    if (status === 'SEM ANCORA') perCity[city].fail += 1;
    else if (status === 'FRACO') perCity[city].weak += 1;

    results.push({ file, cityId: city, titleFr: data.titleFr || '', strongHits, weakHits, status });
  }
}

// ── Relatório ──────────────────────────────────────────────────────────────
console.log('==================================================');
console.log('AUDITORIA DE RELEVÂNCIA À CIDADE (ENCICLOPÉDIA)');
console.log('==================================================');
let total = 0;
let fail = 0;
let weak = 0;
for (const [city, st] of Object.entries(perCity)) {
  total += st.total;
  fail += st.fail;
  weak += st.weak;
  console.log(`${city.padEnd(18)} guias=${String(st.total).padStart(3)}  sem âncora=${String(st.fail).padStart(3)}  fracas=${String(st.weak).padStart(2)}`);
}
console.log('');
console.log(`Total: ${total} guias | SEM ÂNCORA: ${fail} | FRACAS (1 âncora local): ${weak} | OK: ${total - fail - weak}`);
console.log('');

const problems = results.filter((r) => r.status !== 'OK');
for (const r of problems) {
  console.log(`[${r.status}] ${r.file}: "${r.titleFr}"`);
  if (r.strongHits.length) console.log(`         fortes: ${r.strongHits.join(', ')}`);
  if (r.weakHits.length) console.log(`         locais: ${r.weakHits.join(', ')}`);
}

const report = {
  generatedAt: new Date().toISOString(),
  total,
  semAncora: fail,
  fracas: weak,
  perCity,
  problems: problems.map((r) => ({
    file: r.file,
    cityId: r.cityId,
    titleFr: r.titleFr,
    strongHits: r.strongHits,
    weakHits: r.weakHits,
    status: r.status,
  })),
};
fs.writeFileSync(path.join(process.cwd(), 'scripts', 'city_relevance_report.json'), JSON.stringify(report, null, 2));
console.log('');
console.log('Relatório completo salvo em scripts/city_relevance_report.json');
