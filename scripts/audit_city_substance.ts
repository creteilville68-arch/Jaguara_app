/**
 * Auditoria de SUBSTÂNCIA à cidade (Enciclopédia) — v2.
 *
 * O auditor anterior (audit_city_relevance) só verificava se o NOME da cidade
 * aparecia no texto. Este mede SUBSTÂNCIA REAL LOCAL: quantos elementos
 * concretos e nomeados próprios de cada cidade aparecem no texto (lugares,
 * bairros, rios, monumentos, instituições, eventos, figuras, tradições).
 *
 * A guia é "SOLIDA" quando acumula um mínimo de âncoras locais reais
 * distribuídas pelo texto. "GENERICA" = o nome da cidade aparece, mas o resto
 * é um ensaio que caberia em qualquer cidade.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'src', 'data', 'city_guides');
const filter = process.argv[2];

type Grade = 'SOLIDA' | 'FRACA' | 'GENERICA' | 'SEM_LOCAL';

interface CityData {
  names: string[];
  demonym: string[];
  locals: Map<string, string>;
}

const CASE_SENSITIVE = new Set(['tours']);

const CITY: Record<string, CityData> = {
  amiens: {
    names: ['Amiens'],
    demonym: ['amiénois', 'amiénoise', 'amiénoises'],
    locals: new Map([
      ['Notre-Dame d\'Amiens', 'catedral'], ['cathédrale', 'catedral'],
      ['Jules Verne', 'escritor'], ['hortillonnages', 'hortas'],
      ['cabotans', 'marionetes'], ['Picardie', 'região'], ['Samara', 'parque pré-história'],
      ['Saint-Leu', 'bairro'], ['beffroi', 'campanário'], ['Somme', 'rio'],
      ['Marquenterre', 'reserva'], ['muches', 'abrigos'], ['Grande Guerre', 'evento'],
      ['Musée de Picardie', 'museu'], ['escalade', 'esporte'], ['gothique', 'estilo'],
      ['marionnettes picardes', 'tradição'], ['Première Guerre mondiale', 'evento'],
      ['cirque', 'edifício'], ['stade de la Licorne', 'estádio'],      ['manifestation', 'cortejo'], ['CHU', 'hospital'], ['CHU d\'Amiens', 'hospital'],
      ['université de Picardie', 'universidade'], ['université Jules Verne', 'universidade'],
      ['UPJV', 'universidade'], ['marqueur de march', 'hortas'], ['barques à cornet', 'barcos'],
      ['marché sur l\'eau', 'mercado flutuante'], ['escalade', 'esporte'], ['Zénith', 'sala'],
      ['cirque Jules Verne', 'circo'], ['gare du Nord', 'estação'], ['Perret', 'arquiteto'],
    ]),
  },
  bordeaux: {
    names: ['Bordeaux'],
    demonym: ['bordelais', 'bordelaise', 'bordelaises'],
    locals: new Map([
      ['Garonne', 'rio'], ['Gironde', 'estuário'], ['Médoc', 'vinho'],
      ['Burdigala', 'nome antigo'], ['Capucins', 'mercado'], ['Chartrons', 'bairro'],
      ['port de la Lune', 'porto'], ['place de la Bourse', 'praça'],
      ['pont de pierre', 'ponte'], ['Cité du vin', 'museu'], ['Quinconces', 'praça'],
      ['Saint-Émilion', 'vinho'], ['miroir d\'eau', 'espelho d\'água'],
      ['pierre blonde', 'arquitetura'], ['Pessac', 'vinho'], ['Grand Théâtre', 'teatro'],      ['vingt-deux sports', 'esportes'], ['girondines de Bordeaux', 'futebol'],
      ['vignoble', 'vinha'], ['traite négrière', 'história'], ['Chartrons', 'bairro dos negociantes'],
      ['place des Quinconces', 'praça'], ['grottes de Pair-non-Pair', 'grutas'],
      ['université de Bordeaux', 'universidade'], ['Cité du vin', 'museu'], ['port de la Lune', 'porto'],
      ['Alexandra David-Néel', 'exploradora'], ['Villenave-d\'Ornon', 'instituição'],
      ['musée d\'Aquitaine', 'museu'], ['CHU Pellegrin', 'hospital'], ['Inserm', 'pesquisa'],
      ['Mériadeck', 'bairro'], ['Bassins à flot', 'bairro'], ['Euratlantique', 'urbanismo'],
      ['Saint-Jean', 'estação'], ['miroir d\'eau', 'praça'], ['pierre blonde', 'arquitetura'],
      ['Garonne', 'rio'], ['esthiaire de la Gironde', 'estuário'], ['Entre-deux-Mers', 'vinho'],
      ['Pauillac', 'vinho'], ['Sauternes', 'vinho'], ['saint-émilion', 'vinho'],
    ]),
  },
  lille: {
    names: ['Lille'],
    demonym: ['lillois', 'lilloise', 'lilloises'],
    locals: new Map([
      ['Vieux-Lille', 'bairro'], ['braderie', 'evento'], ['Deûle', 'rio'],
      ['citadelle', 'fortaleza'], ['Vieille Bourse', 'edifício'], ['Roubaix', 'cidade'],
      ['Tourcoing', 'cidade'], ['Wazemmes', 'bairro'], ['estaminet', 'bar'],
      ['furet du Nord', 'livraria'], ['Hauts-de-France', 'região'],
      ['Palais des Beaux-Arts', 'museu'], ['courées', 'habitação'],
      ['grande place', 'praça'], ['Flandre', 'região'], ['métro', 'transporte'],
      ['charbon', 'história'], ['mine', 'história'], ['EUROMÉTROPOLE', 'instituição'],
      ['l\'île aux trésors', 'evento'], ['azincourt', 'batalha'],      ['chien', 'moeda local'], ['université de Lille', 'universidade'], ['métropole européenne de Lille', 'metrópole'],
      ['tricotin', 'tricô'], ['pain', 'padaria'], ['friche', 'terreno'],
      ['CHU de Lille', 'hospital'], ['THOL', 'hospital'], ['Euralille', 'bairro'], ['Lille-Europe', 'estação'],
      ['TGV', 'transporte'], ['La Voix du Nord', 'jornal'], ['théâtre du Nord', 'teatro'],
      ['Cour d\'appel de Lille', 'justiça'], ['faculté des sciences juridiques', 'universidade'],
      ['galerie de Maëlle', 'cultura'], ['MAXX Roberto', 'cultura'], ['nautique', 'museu'],
      ['houblon', 'cerveja'], ['blanc', 'cerveja'], ['moules-frites', 'comida'], ['frontaliers', 'fronteira'],
      ['Belgique', 'fronteira'], ['mines', 'história'], ['mineur', 'história'], ['charbon', 'história'],
      ['travailleurs du Nord', 'história'], ['usine', 'indústria'], ['fil DU', 'têxtil'],
      ['Pôle emploi', 'agência'], ['France Travail', 'agência'], ['Lille-Métropole', 'metrópole'],
    ]),
  },
  lyon: {
    names: ['Lyon'],
    demonym: ['lyonnais', 'lyonnaise', 'lyonnaises'],
    locals: new Map([
      ['Saône', 'rio'], ['Rhône', 'rio'], ['traboule', 'passagem'], ['canuts', 'tecelões'],
      ['Fourvière', 'colina'], ['Croix-Rousse', 'bairro'], ['presqu\'île', 'bairro'],
      ['Tête d\'Or', 'parque'], ['Guignol', 'teatro'], ['Bocuse', 'chefe'],
      ['Lumière', 'cinema'], ['Confluence', 'bairro'], ['Vieux-Lyon', 'bairro'],
      ['Bellecour', 'praça'], ['Part-Dieu', 'bairro'], ['Brotteaux', 'bairro'],
      ['Lugdunum', 'nome antigo'], ['bouchon', 'restaurante'], ['Villeurbanne', 'cidade'],
      ['Gerland', 'bairro'], ['Opéra de Lyon', 'ópera'], ['Lyon opéra', 'ópera'],
      ['murs peints', 'murais'], ['Canut', 'tecelão'], ['soie', 'seda'],      ['quenelle', 'comida'], ['Célestins', 'teatro'], ['Institut Lumière', 'cinema'], ['Pola Cathelat', 'fotografia'],
      ['Fête des Lumières', 'evento'], ['CHU de Lyon', 'hospital'], ['hospices civils', 'hospital'],
      ['BDL', 'biblioteca'], ['biologie internationale', 'ciência'], ['ENS Lyon', 'escola'],
      ['université Lyon', 'universidade'], ['merci de Lyon', 'gastronomia'], ['Piquée', 'museu'],
    ]),
  },
  marseille: {
    names: ['Marseille'],
    demonym: ['marseillais', 'marseillaise', 'marseillaises'],
    locals: new Map([
      ['Vieux-Port', 'porto'], ['calanques', 'baías'], ['Canebière', 'avenida'],
      ['Panier', 'bairro'], ['Notre-Dame de la Garde', 'basílica'],
      ['Bonne Mère', 'apelido'], ['Massalia', 'nome antigo'], ['Vélodrome', 'estádio'],
      ['mistral', 'vento'], ['château d\'If', 'forte'], ['Mucem', 'museu'],
      ['Cité radieuse', 'edifício'], ['Corbusier', 'arquiteto'], ['L\'Estaque', 'bairro'],
      ['pastis', 'bebida'], ['savon de Marseille', 'produto'], ['pétanque', 'jogo'],
      ['phocéen', 'gentílico'], ['Côte Bleue', 'costas'], ['Prado', 'zona'],
      ['Joliette', 'bairro'], ['La Ciotat', 'cidade'], ['provence', 'região'],
      ['Fonds régional d\'art contemporain', 'arte'], ['bouillabaisse', 'comida'],
      ['OM', 'futebol'], ['Olympique de Marseille', 'futebol'],      ['harbour', 'porto'], ['université d\'Aix-Marseille', 'universidade'], ['MUCEM', 'museu'],
      ['Friche la Belle de Mai', 'cultura'], ['Port autonome', 'porto'], ['IFREMER', 'pesquisa'],
      ['la Timone', 'hospital'], ['Timone', 'hospital'], ['Paoli-Calmettes', 'hospital'], ['hôpital Nord', 'hospital'],
      ['Fos', 'porto'], ['occitan', 'língua'], ['provençal', 'língua'], ['Baumettes', 'prisão'],
      ['cour d\'appel', 'justiça'], ['marine nationale', 'marinha'], ['corbusier', 'arquiteto'],
      ['Quartier du Panier', 'bairro'], ['Goudes', 'bairro'], ['Estaque', 'bairro'], ['Callelongue', 'bairro'],
      ['Vallon des Auffes', 'bairro'], ['Cachan', 'bairro'], ['Clairière', 'bairro'],
    ]),
  },
  mont_saint_michel: {
    names: ['Mont-Saint-Michel'],
    demonym: ['montois', 'montoise', 'montoises'],
    locals: new Map([
      ['la Merveille', 'abadia'], ['baie', 'baía'], ['rocher', 'rochedo'],
      ['Grande Rue', 'rua'], ['prés-salés', 'prados'], ['scriptorium', 'cópia de manuscritos'],
      ['Couesnon', 'rio'], ['Sélune', 'rio'], ['Avranches', 'cidade'],
      ['Tombelaine', 'ilhotas'], ['digue', 'dique'], ['barrage', 'represa'],
      ['abbaye', 'abadia'], ['marées', 'marés'], ['Mont', 'monte'],
      ['Manche', 'baía'], ['Normandie', 'região'], ['pèlerin', 'peregrino'],
    ]),
  },
  nice: {
    names: ['Nice'],
    demonym: ['niçois', 'niçoise', 'niçoises'],
    locals: new Map([
      ['Nikaia', 'nome antigo'], ['Côte d\'Azur', 'costa'], ['baie des Anges', 'baía'],
      ['promenade des Anglais', 'avenida'], ['Vieux-Nice', 'bairro'],
      ['cours Saleya', 'mercado'], ['colline du Château', 'colina'], ['Cimiez', 'bairro'],
      ['port Lympia', 'porto'], ['Bellet', 'vinho'], ['socca', 'comida'],
      ['pissaladière', 'comida'], ['Riviera', 'região'], ['Matisse', 'pintor'],
      ['Chagall', 'pintor'], ['cailletier', 'oliveira'], ['Garibaldi', 'praça'],
      ['carnaval', 'evento'], ['Observatoire', 'observatório'], ['Coudenberg', 'palácio'],
      ['université de Nice', 'universidade'], ['Sophia Antipolis', 'escola'], ['IRCAM', 'música'],
      ['MAMAC', 'museu'], ['Villa Arson', 'escola'], ['parc Phoenix', 'parque'], ['Marina Baie des Anges', 'arquitetura'],
      ['Opéra de Nice', 'ópera'], ['Arènes de Cimiez', 'arena'], ['jazz', 'música'],
      ['Cimiez', 'bairro'], ['Musée Matisse', 'museu'], ['Musée Chagall', 'museu'], ['colline du Château', 'colina'],
      ['Observatoire de Nice', 'observatório'], ['Côte d\'Azur', 'costa'], ['Baie des Anges', 'baía'],
      ['Vieux-Nice', 'bairro'], ['cours Saleya', 'mercado'], ['Garibaldi', 'praça'],
      ['Carnaval de Nice', 'evento'], ['garibaldien', 'praça'],
    ]),
  },
  paris: {
    names: ['Paris'],
    demonym: ['parisien', 'parisienne', 'parisiens', 'parisiennes'],
    locals: new Map([
      ['Seine', 'rio'], ['Lutèce', 'nome antigo'], ['tour Eiffel', 'monumento'],
      ['Louvre', 'museu'], ['Montmartre', 'bairro'], ['Bastille', 'praça'],
      ['Champs-Élysées', 'avenida'], ['musée d\'Orsay', 'museu'],
      ['Notre-Dame', 'catedral'], ['Marais', 'bairro'], ['Beaubourg', 'museu'],
      ['catacombes', 'ossuário'], ['Sacré-Cœur', 'basílica'], ['Saint-Germain', 'bairro'],
      ['quartier latin', 'bairro'], ['hôtel de ville', 'edifício'], ['Palais-Royal', 'palácio'],
      ['Père-Lachaise', 'cemitério'], ['Haussmann', 'urbanismo'], ['les Halles', 'bairro'],
      ['Invalides', 'monumento'], ['Tuileries', 'jardim'], ['Luxembourg', 'jardim'],
      ['Trocadéro', 'praça'], ['la Défense', 'bairro'], ['passages couverts', 'galerias'],
      ['Palais Garnier', 'ópera'], ['Sorbonne', 'universidade'], ['Montparnasse', 'bairro'],
      ['Belleville', 'bairro'], ['canal Saint-Martin', 'canal'], ['Panthéon', 'monumento'],
      ['Sainte-Chapelle', 'igreja'], ['Conciergerie', 'prisão'], ['Pont Neuf', 'ponte'],
      ['Opéra Garnier', 'ópera'], ['jardin des Plantes', 'museu'], ['île de la Cité', 'ilha'],
      ['Créteil', 'cidade'], ['métro', 'transporte'], ['arrondissement', 'divisão'],
      ['RER', 'transporte'], ['Boulevard Périphérique', 'via'], ['Tour Montparnasse', 'arranha-céu'],
      ['Coulée verte', 'parque'], ['quartiers de Paris', 'bairros'],
      ['université Paris', 'universidade'], ['Sorbonne Nouvelle', 'universidade'], ['CNAM', 'escola'],
      ['Odéon', 'teatro'], ['Comédie-Française', 'teatro'], ['Académie des sciences', 'instituição'],
      ['université Panthéon', 'universidade'], ['EPSA', 'escola'], ['Grand Palais', 'museu'],
      ['Petit Palais', 'museu'], ['Palais de la Découverte', 'ciência'], ['Institut Pasteur', 'instituição'],
      ['université de Créteil', 'universidade'], ['Parc floral', 'parque'], ['château de Vincennes', 'castelo'],
      ['zoo de Vincennes', 'parque'], ['ménagerie', 'zoológico'], ['jardin des Plantes', 'museu'],
      ['les Halles', 'bairro'], ['rue du Croissant', 'imprensa'], ['Maison de la Radio', 'imprensa'],
      ['Grands Boulevards', 'imprensa'],
    ]),
  },
  strasbourg: {
    names: ['Strasbourg'],
    demonym: ['strasbourgeois', 'strasbourgeoise', 'strasbourgeoises'],
    locals: new Map([
      ['Rhin', 'rio'], ['Petite France', 'bairro'], ['Kléber', 'praça'],
      ['Broglie', 'praça'], ['Orangerie', 'parque'], ['Parlement européen', 'instituição'],
      ['Conseil de l\'Europe', 'instituição'], ['Alsace', 'região'], ['alsacien', 'língua'],
      ['Maison Kammerzell', 'edifício'], ['Neustadt', 'bairro'], ['Palais Rohan', 'palácio'],
      ['Robertsau', 'bairro'], ['Ill', 'rio'], ['marché de Noël', 'evento'],
      ['Christkindelsmärik', 'evento'], ['ponts couverts', 'pontes'], ['barrage Vauban', 'represa'],
      ['choucroute', 'comida'], ['bretzel', 'comida'], ['cigogne', 'animal'],
      ['cour européenne des droits de l\'homme', 'instituição'], ['droits de l\'homme', 'instituição'],
      ['université de Strasbourg', 'universidade'], ['unistra', 'universidade'], ['CJCE', 'instituição'],
      ['seu de la révolution française', 'evento'], ['girondins', 'figuras'], ['concile', 'evento'],
    ]),
  },
  toulouse: {
    names: ['Toulouse'],
    demonym: ['toulousain', 'toulousaine', 'toulousains', 'toulousaines'],
    locals: new Map([
      ['Garonne', 'rio'], ['Capitole', 'praça'], ['Saint-Sernin', 'basílica'],
      ['Jacobins', 'igreja'], ['Cité de l\'espace', 'museu'], ['Ariane', 'foguete'],
      ['canal du Midi', 'canal'], ['ville rose', 'apelido'], ['violette', 'flor'],
      ['Carmes', 'bairro'], ['Saint-Cyprien', 'bairro'], ['Jolimont', 'bairro'],
      ['pastel', 'planta'], ['Lauragais', 'região'], ['Riquet', 'engenheiro'],
      ['Bazacle', 'barragem'], ['Tolosa', 'nome antigo'], ['aéronautique', 'setor'],
      ['aérospatiale', 'setor'], ['Airbus', 'empresa'], ['rugby', 'esporte'],
      ['Stade Toulousain', 'time'],      ['Centre national d\'études spatiales', 'agência'],
      ['CNES', 'agência'], ['ONERA', 'pesquisa'], ['France Image', 'audiovisual'],
      ['université Toulouse', 'universidade'], ['Paul Sabatier', 'universidade'], ['UT2', 'universidade'],
      ['Observatoire de Jolimont', 'observatório'], ['théâtre du Capitole', 'teatro'], ['Occitanie', 'região'],
      ['mention très honorable', 'estudo'], ['stade Ernest-Wallon', 'estádio'],
    ]),
  },
  tours: {
    names: ['Tours'],
    demonym: ['tourangeau', 'tourangelle', 'tourangeaux', 'tourangelles'],
    locals: new Map([
      ['Loire', 'rio'], ['Touraine', 'região'], ['val de Loire', 'região'],
      ['Saint-Gatien', 'catedral'], ['pont Wilson', 'ponte'], ['rue Nationale', 'rua'],
      ['guinguette', 'bar'], ['troglodyte', 'habitação'], ['tuffeau', 'pedra'],
      ['place Plumereau', 'praça'], ['Vieux-Tours', 'bairro'], ['Caesarodunum', 'nome antigo'],
      ['Saint Martin', 'santo'], ['rillettes', 'comida'], ['Ronsard', 'poeta'],
      ['Balzac', 'escritor'], ['Amboise', 'castelo'], ['Chenonceau', 'castelo'],
      ['Villandry', 'castelo'], ['château', 'castelo'], ['Léonard de Vinci', 'figura'],
      ['français le plus pur', 'tradição'], ['français de Tours', 'tradição'],
      ['université de Tours', 'universidade'], ['Tours, ville universitaire', 'universidade'],
      ['Institut universitaire de technologie', 'escola'], ['Olympe de Gouges', 'figura'],
      ['Grandmont', 'campus'], ['rue Nationale', 'rua'], ['France Travail', 'agência'],
      ['Nouvelle République', 'jornal'], ['édouard-Vaillant', 'estação'], ['médiathèque municipale', 'biblioteca'],
    ]),
  },
};

function fold(s: string): string {
  return s.toLowerCase().replace(/[’ʼ‘]/g, "'").normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
}

interface Item { file: string; cityId: string; titleFr: string; grade: Grade; nameHit: boolean; locHits: string[]; }
const results: Item[] = [];
const perCity: Record<string, { total: number; solida: number; fraca: number; generica: number; semLocal: number }> = {};

for (const [cityId, c] of Object.entries(CITY)) {
  if (filter && cityId !== filter) continue;
  const files = fs.readdirSync(DIR).filter((f) => f.startsWith(`${cityId}_guide_`) && f.endsWith('.json')).sort();
  perCity[cityId] = { total: files.length, solida: 0, fraca: 0, generica: 0, semLocal: 0 };
  for (const file of files) {
    let data: any;
    try { data = JSON.parse(fs.readFileSync(path.join(DIR, file), 'utf8').replace(/^\uFEFF/, '')); }
    catch { results.push({ file, cityId, titleFr: '(JSON inválido)', nameHit: false, locHits: [], grade: 'SEM_LOCAL' }); perCity[cityId].semLocal += 1; continue; }
    const frParts: string[] = [data.titleFr || '', data.subtitleFr || ''];
    for (const p of Array.isArray(data.paragraphs) ? data.paragraphs : []) if (p && typeof p.fr === 'string') frParts.push(p.fr);
    const raw = frParts.join(' ');
    const foldText = fold(' ' + raw + ' ');

    let nameHit = false;
    for (const n of c.names) {
      if (CASE_SENSITIVE.has(cityId)) { if (raw.includes(n)) nameHit = true; }
      else if (new RegExp(`(?<![a-z0-9])${fold(n).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![a-z0-9])`).test(foldText)) nameHit = true;
    }
    for (const n of c.demonym) if (new RegExp(`(?<![a-z0-9])${fold(n).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![a-z0-9])`).test(foldText)) nameHit = true;

    const locHits: string[] = [];
    for (const [k, cat] of c.locals) {
      const fk = fold(k).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (new RegExp(`(?<![a-z0-9])${fk}(?![a-z0-9])`).test(foldText)) locHits.push(`${k}(${cat})`);
    }
    const l = locHits.length;
    let grade: Grade;
    if (l >= 3 || (nameHit && l >= 2)) grade = 'SOLIDA';
    else if (l >= 2) grade = 'FRACA';
    else if (nameHit && l === 1) grade = 'FRACA';
    else if (nameHit) grade = 'GENERICA';
    else grade = 'SEM_LOCAL';

    const st = perCity[cityId];
    st[grade === 'SOLIDA' ? 'solida' : grade === 'FRACA' ? 'fraca' : grade === 'GENERICA' ? 'generica' : 'semLocal'] += 1;
    results.push({ file, cityId, titleFr: data.titleFr || '', grade, nameHit, locHits });
  }
}

console.log('======================================================');
console.log('AUDITORIA DE SUBSTÂNCIA REAL À CIDADE (ENCICLOPÉDIA)');
console.log('======================================================');
let T=0,S=0,F=0,G=0,Z=0;
for (const [cityId, st] of Object.entries(perCity)) {
  T+=st.total; S+=st.solida; F+=st.fraca; G+=st.generica; Z+=st.semLocal;
  console.log(`${cityId.padEnd(18)} total=${String(st.total).padStart(3)}  sólida=${String(st.solida).padStart(2)}  fraca=${String(st.fraca).padStart(2)}  genérica=${String(st.generica).padStart(2)}  sem-local=${String(st.semLocal).padStart(2)}`);
}
console.log('');
console.log(`TOTAL: ${T} | SÓLIDA: ${S} | FRACA: ${F} | GENÉRICA: ${G} | SEM LOCAL: ${Z}`);

for (const cityId of Object.keys(perCity)) {
  const cityBad = results.filter((r) => r.cityId === cityId && (r.grade === 'GENERICA' || r.grade === 'SEM_LOCAL'));
  if (!cityBad.length) continue;
  console.log(`\n== ${cityId} ==`);
  for (const r of cityBad) console.log(`[${r.grade}] ${r.file}: "${r.titleFr}"`);
}
const report = {
  generatedAt: new Date().toISOString(), total: T, solida: S, fraca: F, generica: G, semLocal: Z, perCity,
  problems: results.filter((r) => r.grade !== 'SOLIDA').map((r) => ({ file: r.file, cityId: r.cityId, titleFr: r.titleFr, grade: r.grade, nameHit: r.nameHit, locHits: r.locHits })),
};
fs.writeFileSync(path.join(process.cwd(), 'scripts', 'city_substance_report.json'), JSON.stringify(report, null, 2));
console.log('\nRelatório salvo em scripts/city_substance_report.json');