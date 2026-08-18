/**
 * French morphology engine for the coverage counter.
 *
 * The counter must recognize real French, not just dictionary lemmas:
 * conjugations (je vais, nous allions), plurals (les eaux), feminine
 * forms (active), elisions (j'écoute, s'appelle, qu'elle), reflexive
 * verbs (se lever, s'asseoir), irregular verbs (être, aller, faire...)
 * and verb phrases (faire les courses → fais les courses).
 *
 * Matching strategy: every bank term is expanded into its plausible
 * inflected forms; the lesson texts are tokenized (with elided prefixes
 * stripped) into word n-grams; a term is "covered" when any of its
 * expanded forms appears as an exact n-gram in the texts.
 */

// ---------------------------------------------------------------------------
// Normalization
// ---------------------------------------------------------------------------

export function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/[’ʼ‘]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

const ARTICLE_PREFIXES = [
  'le ', 'la ', 'les ', "l'", 'un ', 'une ', 'des ', 'du ', 'de la ', "de l'",
  'au ', 'aux ', 'mon ', 'ma ', 'mes ', 'ton ', 'ta ', 'tes ', 'son ', 'sa ',
  'ses ', 'notre ', 'nos ', 'votre ', 'vos ', 'leur ', 'leurs ',
];

export function stripArticles(s: string): string {
  const f = fold(s).trim();
  for (const p of ARTICLE_PREFIXES) {
    if (f.startsWith(fold(p)) && f.length > fold(p).length) {
      return f.slice(fold(p).length).trim();
    }
  }
  return f;
}

// ---------------------------------------------------------------------------
// Tokenization (text and candidates share this)
// ---------------------------------------------------------------------------

const ELISION_PREFIXES = ["qu'", "j'", "l'", "d'", "n'", "s'", "c'", "m'", "t'", "jusqu'"];

function stripElision(token: string): string {
  for (const e of ELISION_PREFIXES) {
    if (token.startsWith(e) && token.length > e.length) return token.slice(e.length);
  }
  return token;
}

export function tokenizeText(raw: string): string[] {
  return fold(raw)
    .split(/[^a-z0-9']+/)
    .filter(Boolean)
    .map(stripElision);
}

export function buildNgramSet(tokens: string[], maxN = 8): Set<string> {
  const set = new Set<string>();
  for (let n = 1; n <= maxN; n++) {
    for (let i = 0; i + n <= tokens.length; i++) {
      set.add(tokens.slice(i, i + n).join(' '));
    }
  }
  return set;
}

// ---------------------------------------------------------------------------
// Verb conjugation
// ---------------------------------------------------------------------------

interface VerbForms {
  je: string[];
  tu: string[];
  il: string[];
  nous: string[];
  vous: string[];
  ils: string[];
  imparfait: string[]; // [je, tu, il, nous, vous, ils]
  futur: string[]; // [je, tu, il, nous, vous, ils]
  participe: string[];
  gerund: string[];
  extra: string[];
}

const IRREGULAR_VERBS: Record<string, VerbForms> = {
  être: {
    je: ['suis', 'serais'], tu: ['es'], il: ['est', 'serait'], nous: ['sommes'], vous: ['êtes'], ils: ['sont', 'seraient'],
    imparfait: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'], futur: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'],
    participe: ['été'], gerund: ['étant'], extra: ['sois', 'soit', 'soyons', 'soyez', 'soient'],
  },
  avoir: {
    je: ['ai', 'aurais'], tu: ['as'], il: ['a', 'aurait'], nous: ['avons'], vous: ['avez'], ils: ['ont', 'auraient'],
    imparfait: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'], futur: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
    participe: ['eu'], gerund: ['ayant'], extra: ['aie', 'ait', 'ayons', 'ayez', 'aient'],
  },
  aller: {
    je: ['vais', 'irais'], tu: ['vas'], il: ['va', 'irait'], nous: ['allons'], vous: ['allez'], ils: ['vont', 'iraient'],
    imparfait: ['allais', 'allais', 'allait', 'allions', 'alliez', 'allaient'], futur: ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'],
    participe: ['allé', 'allée', 'allés', 'allées'], gerund: ['allant'], extra: ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'],
  },
  faire: {
    je: ['fais', 'ferais'], tu: ['fais'], il: ['fait', 'ferait'], nous: ['faisons'], vous: ['faites'], ils: ['font', 'feraient'],
    imparfait: ['faisais', 'faisais', 'faisait', 'faisions', 'faisiez', 'faisaient'], futur: ['ferai', 'feras', 'fera', 'ferons', 'ferez', 'feront'],
    participe: ['fait', 'faite', 'faits', 'faites'], gerund: ['faisant'], extra: ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'],
  },
  pouvoir: {
    je: ['peux', 'pourrais'], tu: ['peux'], il: ['peut', 'pourrait'], nous: ['pouvons'], vous: ['pouvez'], ils: ['peuvent', 'pourraient'],
    imparfait: ['pouvais', 'pouvais', 'pouvait', 'pouvions', 'pouviez', 'pouvaient'], futur: ['pourrai', 'pourras', 'pourra', 'pourrons', 'pourrez', 'pourront'],
    participe: ['pu'], gerund: ['pouvant'], extra: ['puisse', 'puisses', 'puisse', 'puissions', 'puissiez', 'puissent'],
  },
  vouloir: {
    je: ['veux', 'voudrais'], tu: ['veux'], il: ['veut', 'voudrait'], nous: ['voulons'], vous: ['voulez'], ils: ['veulent', 'voudraient'],
    imparfait: ['voulais', 'voulais', 'voulait', 'voulions', 'vouliez', 'voulaient'], futur: ['voudrai', 'voudras', 'voudra', 'voudrons', 'voudrez', 'voudront'],
    participe: ['voulu', 'voulue', 'voulus', 'voulues'], gerund: ['voulant'], extra: ['veuille', 'veuillent'],
  },
  devoir: {
    je: ['dois', 'devrais'], tu: ['dois'], il: ['doit', 'devrait'], nous: ['devons'], vous: ['devez'], ils: ['doivent', 'devraient'],
    imparfait: ['devais', 'devais', 'devait', 'devions', 'deviez', 'devaient'], futur: ['devrai', 'devras', 'devra', 'devrons', 'devrez', 'devront'],
    participe: ['dû', 'due', 'dus', 'dues'], gerund: ['devant'], extra: ['doive', 'doivent'],
  },
  venir: {
    je: ['viens', 'viendrais'], tu: ['viens'], il: ['vient', 'viendrait'], nous: ['venons'], vous: ['venez'], ils: ['viennent', 'viendraient'],
    imparfait: ['venais', 'venais', 'venait', 'venions', 'veniez', 'venaient'], futur: ['viendrai', 'viendras', 'viendra', 'viendrons', 'viendrez', 'viendront'],
    participe: ['venu', 'venue', 'venus', 'venues'], gerund: ['venant'], extra: ['vienne', 'viennent'],
  },
  tenir: {
    je: ['tiens', 'tiendrais'], tu: ['tiens'], il: ['tient', 'tiendrait'], nous: ['tenons'], vous: ['tenez'], ils: ['tiennent', 'tiendraient'],
    imparfait: ['tenais', 'tenais', 'tenait', 'tenions', 'teniez', 'tenaient'], futur: ['tiendrai', 'tiendras', 'tiendra', 'tiendrons', 'tiendrez', 'tiendront'],
    participe: ['tenu', 'tenue', 'tenus', 'tenues'], gerund: ['tenant'], extra: ['tienne', 'tiennent'],
  },
  voir: {
    je: ['vois', 'verrais'], tu: ['vois'], il: ['voit', 'verrait'], nous: ['voyons'], vous: ['voyez'], ils: ['voient', 'verraient'],
    imparfait: ['voyais', 'voyais', 'voyait', 'voyions', 'voyiez', 'voyaient'], futur: ['verrai', 'verras', 'verra', 'verrons', 'verrez', 'verront'],
    participe: ['vu', 'vue', 'vus', 'vues'], gerund: ['voyant'], extra: ['voie', 'voient'],
  },
  prendre: {
    je: ['prends', 'prendrais'], tu: ['prends'], il: ['prend', 'prendrait'], nous: ['prenons'], vous: ['prenez'], ils: ['prennent', 'prendraient'],
    imparfait: ['prenais', 'prenais', 'prenait', 'prenions', 'preniez', 'prenaient'], futur: ['prendrai', 'prendras', 'prendra', 'prendrons', 'prendrez', 'prendront'],
    participe: ['pris', 'prise', 'pris', 'prises'], gerund: ['prenant'], extra: ['prenne', 'prennent'],
  },
  mettre: {
    je: ['mets', 'mettrais'], tu: ['mets'], il: ['met', 'mettrait'], nous: ['mettons'], vous: ['mettez'], ils: ['mettent', 'mettraient'],
    imparfait: ['mettais', 'mettais', 'mettait', 'mettions', 'mettiez', 'mettaient'], futur: ['mettrai', 'mettras', 'mettra', 'mettrons', 'mettrez', 'mettront'],
    participe: ['mis', 'mise', 'mis', 'mises'], gerund: ['mettant'], extra: ['mette', 'mettent'],
  },
  dire: {
    je: ['dis', 'dirais'], tu: ['dis'], il: ['dit', 'dirait'], nous: ['disons'], vous: ['dites'], ils: ['disent', 'diraient'],
    imparfait: ['disais', 'disais', 'disait', 'disions', 'disiez', 'disaient'], futur: ['dirai', 'diras', 'dira', 'dirons', 'direz', 'diront'],
    participe: ['dit', 'dite', 'dits', 'dites'], gerund: ['disant'], extra: ['dise', 'disent'],
  },
  savoir: {
    je: ['sais', 'saurais'], tu: ['sais'], il: ['sait', 'saurait'], nous: ['savons'], vous: ['savez'], ils: ['savent', 'sauraient'],
    imparfait: ['savais', 'savais', 'savait', 'savions', 'saviez', 'savaient'], futur: ['saurai', 'sauras', 'saura', 'saurons', 'saurez', 'sauront'],
    participe: ['su', 'sue', 'sus', 'sues'], gerund: ['sachant'], extra: ['sache', 'sachent'],
  },
  partir: {
    je: ['pars', 'partirais'], tu: ['pars'], il: ['part', 'partirait'], nous: ['partons'], vous: ['partez'], ils: ['partent', 'partiraient'],
    imparfait: ['partais', 'partais', 'partait', 'partions', 'partiez', 'partaient'], futur: ['partirai', 'partiras', 'partira', 'partirons', 'partirez', 'partiront'],
    participe: ['parti', 'partie', 'partis', 'parties'], gerund: ['partant'], extra: ['parte', 'partent'],
  },
  sortir: {
    je: ['sors', 'sortirais'], tu: ['sors'], il: ['sort', 'sortirait'], nous: ['sortons'], vous: ['sortez'], ils: ['sortent', 'sortiraient'],
    imparfait: ['sortais', 'sortais', 'sortait', 'sortions', 'sortiez', 'sortaient'], futur: ['sortirai', 'sortiras', 'sortira', 'sortirons', 'sortirez', 'sortiront'],
    participe: ['sorti', 'sortie', 'sortis', 'sorties'], gerund: ['sortant'], extra: ['sorte', 'sortent'],
  },
  dormir: {
    je: ['dors', 'dormirais'], tu: ['dors'], il: ['dort', 'dormirait'], nous: ['dormons'], vous: ['dormez'], ils: ['dorment', 'dormiraient'],
    imparfait: ['dormais', 'dormais', 'dormait', 'dormions', 'dormiez', 'dormaient'], futur: ['dormirai', 'dormiras', 'dormira', 'dormirons', 'dormirez', 'dormiront'],
    participe: ['dormi'], gerund: ['dormant'], extra: ['dorme', 'dorment'],
  },
  courir: {
    je: ['cours', 'courrais'], tu: ['cours'], il: ['court', 'courrait'], nous: ['courons'], vous: ['courez'], ils: ['courent', 'courraient'],
    imparfait: ['courais', 'courais', 'courait', 'courions', 'couriez', 'couraient'], futur: ['courrai', 'courras', 'courra', 'courrons', 'courrez', 'courront'],
    participe: ['couru', 'courue', 'courus', 'courues'], gerund: ['courant'], extra: ['coure', 'courent'],
  },
  ouvrir: {
    je: ['ouvre', 'ouvrirais'], tu: ['ouvres'], il: ['ouvre', 'ouvrirait'], nous: ['ouvrons'], vous: ['ouvrez'], ils: ['ouvrent', 'ouvriraient'],
    imparfait: ['ouvrais', 'ouvrais', 'ouvrait', 'ouvrions', 'ouvriez', 'ouvraient'], futur: ['ouvrirai', 'ouvriras', 'ouvrira', 'ouvrirons', 'ouvrirez', 'ouvriront'],
    participe: ['ouvert', 'ouverte', 'ouverts', 'ouvertes'], gerund: ['ouvrant'], extra: ['ouvre', 'ouvrent'],
  },
  couvrir: {
    je: ['couvre', 'couvrirais'], tu: ['couvres'], il: ['couvre', 'couvrirait'], nous: ['couvrons'], vous: ['couvrez'], ils: ['couvrent', 'couvriraient'],
    imparfait: ['couvrais', 'couvrais', 'couvrait', 'couvrions', 'couvriez', 'couvraient'], futur: ['couvrirai', 'couvriras', 'couvrira', 'couvrirons', 'couvrirez', 'couvriront'],
    participe: ['couvert', 'couverte', 'couverts', 'couvertes'], gerund: ['couvrant'], extra: ['couvre', 'couvrent'],
  },
  offrir: {
    je: ['offre', 'offrirais'], tu: ['offres'], il: ['offre', 'offrirait'], nous: ['offrons'], vous: ['offrez'], ils: ['offrent', 'offriraient'],
    imparfait: ['offrais', 'offrais', 'offrait', 'offrions', 'offriez', 'offraient'], futur: ['offrirai', 'offriras', 'offrira', 'offrirons', 'offrirez', 'offriront'],
    participe: ['offert', 'offerte', 'offerts', 'offertes'], gerund: ['offrant'], extra: ['offre', 'offrent'],
  },
  recevoir: {
    je: ['reçois', 'recevrais'], tu: ['reçois'], il: ['reçoit', 'recevrait'], nous: ['recevons'], vous: ['recevez'], ils: ['reçoivent', 'recevraient'],
    imparfait: ['recevais', 'recevais', 'recevait', 'recevions', 'receviez', 'recevaient'], futur: ['recevrai', 'recevras', 'recevra', 'recevrons', 'recevrez', 'recevront'],
    participe: ['reçu', 'reçue', 'reçus', 'reçues'], gerund: ['recevant'], extra: ['reçoive', 'reçoivent'],
  },
  apercevoir: {
    je: ['aperçois', 'apercevrais'], tu: ['aperçois'], il: ['aperçoit', 'apercevrait'], nous: ['apercevons'], vous: ['apercevez'], ils: ['aperçoivent', 'apercevraient'],
    imparfait: ['apercevais', 'apercevais', 'apercevait', 'apercevions', 'aperceviez', 'apercevaient'], futur: ['apercevrai', 'apercevras', 'apercevra', 'apercevrons', 'apercevrez', 'apercevront'],
    participe: ['aperçu', 'aperçue', 'aperçus', 'aperçues'], gerund: ['apercevant'], extra: ['aperçoive', 'aperçoivent'],
  },
  décevoir: {
    je: ['déçois', 'décevrais'], tu: ['déçois'], il: ['déçoit', 'décevrait'], nous: ['décevons'], vous: ['décevez'], ils: ['déçoivent', 'décevraient'],
    imparfait: ['décevais', 'décevais', 'décevait', 'décevions', 'déceviez', 'décevaient'], futur: ['décevrai', 'décevras', 'décevra', 'décevrons', 'décevrez', 'décevront'],
    participe: ['déçu', 'déçue', 'déçus', 'déçues'], gerund: ['décevant'], extra: ['déçoive', 'déçoivent'],
  },
  boire: {
    je: ['bois', 'boirais'], tu: ['bois'], il: ['boit', 'boirait'], nous: ['buvons'], vous: ['buvez'], ils: ['boivent', 'boiraient'],
    imparfait: ['buvais', 'buvais', 'buvait', 'buvions', 'buviez', 'buvaient'], futur: ['boirai', 'boiras', 'boira', 'boirons', 'boirez', 'boiront'],
    participe: ['bu', 'bue', 'bus', 'bues'], gerund: ['buvant'], extra: ['boive', 'boivent'],
  },
  écrire: {
    je: ['écris', 'écrirais'], tu: ['écris'], il: ['écrit', 'écrirait'], nous: ['écrivons'], vous: ['écrivez'], ils: ['écrivent', 'écriraient'],
    imparfait: ['écrivais', 'écrivais', 'écrivait', 'écrivions', 'écriviez', 'écrivaient'], futur: ['écrirai', 'écriras', 'écrira', 'écrirons', 'écrirez', 'écriront'],
    participe: ['écrit', 'écrite', 'écrits', 'écrites'], gerund: ['écrivant'], extra: ['écrive', 'écrivent'],
  },
  lire: {
    je: ['lis', 'lirais'], tu: ['lis'], il: ['lit', 'lirait'], nous: ['lisons'], vous: ['lisez'], ils: ['lisent', 'liraient'],
    imparfait: ['lisais', 'lisais', 'lisait', 'lisions', 'lisiez', 'lisaient'], futur: ['lirai', 'liras', 'lira', 'lirons', 'lirez', 'liront'],
    participe: ['lu', 'lue', 'lus', 'lues'], gerund: ['lisant'], extra: ['lise', 'lisent'],
  },
  croire: {
    je: ['crois', 'croirais'], tu: ['crois'], il: ['croit', 'croirait'], nous: ['croyons'], vous: ['croyez'], ils: ['croient', 'croiraient'],
    imparfait: ['croyais', 'croyais', 'croyait', 'croyions', 'croyiez', 'croyaient'], futur: ['croirai', 'croiras', 'croira', 'croirons', 'croirez', 'croiront'],
    participe: ['cru', 'crue', 'crus', 'crues'], gerund: ['croyant'], extra: ['croie', 'croient'],
  },
  connaître: {
    je: ['connais', 'connaîtrais'], tu: ['connais'], il: ['connaît', 'connaîtrait'], nous: ['connaissons'], vous: ['connaissez'], ils: ['connaissent', 'connaîtraient'],
    imparfait: ['connaissais', 'connaissais', 'connaissait', 'connaissions', 'connaissiez', 'connaissaient'], futur: ['connaîtrai', 'connaîtras', 'connaîtra', 'connaîtrons', 'connaîtrez', 'connaîtront'],
    participe: ['connu', 'connue', 'connus', 'connues'], gerund: ['connaissant'], extra: ['connaisse', 'connaissent'],
  },
  vivre: {
    je: ['vis', 'vivrais'], tu: ['vis'], il: ['vit', 'vivrait'], nous: ['vivons'], vous: ['vivez'], ils: ['vivent', 'vivraient'],
    imparfait: ['vivais', 'vivais', 'vivait', 'vivions', 'viviez', 'vivaient'], futur: ['vivrai', 'vivras', 'vivra', 'vivrons', 'vivrez', 'vivront'],
    participe: ['vécu', 'vécue', 'vécus', 'vécues'], gerund: ['vivant'], extra: ['vive', 'vivent'],
  },
  suivre: {
    je: ['suis', 'suivrais'], tu: ['suis'], il: ['suit', 'suivrait'], nous: ['suivons'], vous: ['suivez'], ils: ['suivent', 'suivraient'],
    imparfait: ['suivais', 'suivais', 'suivait', 'suivions', 'suiviez', 'suivaient'], futur: ['suivrai', 'suivras', 'suivra', 'suivrons', 'suivrez', 'suivront'],
    participe: ['suivi', 'suivie', 'suivis', 'suivies'], gerund: ['suivant'], extra: ['suive', 'suivent'],
  },
  envoyer: {
    je: ['envoie', 'enverrais'], tu: ['envoies'], il: ['envoie', 'enverrait'], nous: ['envoyons'], vous: ['envoyez'], ils: ['envoient', 'enverraient'],
    imparfait: ['envoyais', 'envoyais', 'envoyait', 'envoyions', 'envoyiez', 'envoyaient'], futur: ['enverrai', 'enverras', 'enverra', 'enverrons', 'enverrez', 'enverront'],
    participe: ['envoyé', 'envoyée', 'envoyés', 'envoyées'], gerund: ['envoyant'], extra: ['envoie', 'envoient'],
  },
  essayer: {
    je: ['essaie', 'essaierais'], tu: ['essaies'], il: ['essaie', 'essaierait'], nous: ['essayons'], vous: ['essayez'], ils: ['essaient', 'essaieraient'],
    imparfait: ['essayais', 'essayais', 'essayait', 'essayions', 'essayiez', 'essayaient'], futur: ['essaierai', 'essaieras', 'essaiera', 'essaierons', 'essaierez', 'essaieront'],
    participe: ['essayé', 'essayée', 'essayés', 'essayées'], gerund: ['essayant'], extra: ['essaie', 'essaient'],
  },
  payer: {
    je: ['paie', 'paierais'], tu: ['paies'], il: ['paie', 'paierait'], nous: ['payons'], vous: ['payez'], ils: ['paient', 'paieraient'],
    imparfait: ['payais', 'payais', 'payait', 'payions', 'payiez', 'payaient'], futur: ['paierai', 'paieras', 'paiera', 'paierons', 'paierez', 'paieront'],
    participe: ['payé', 'payée', 'payés', 'payées'], gerund: ['payant'], extra: ['paie', 'paient'],
  },
  appeler: {
    je: ['appelle', 'appellerais'], tu: ['appelles'], il: ['appelle', 'appellerait'], nous: ['appelons'], vous: ['appelez'], ils: ['appellent', 'appelleraient'],
    imparfait: ['appelais', 'appelais', 'appelait', 'appelions', 'appeliez', 'appelaient'], futur: ['appellerai', 'appelleras', 'appellera', 'appellerons', 'appellerez', 'appelleront'],
    participe: ['appelé', 'appelée', 'appelés', 'appelées'], gerund: ['appelant'], extra: ['appelle', 'appellent'],
  },
  rappeler: {
    je: ['rappelle', 'rappellerais'], tu: ['rappelles'], il: ['rappelle', 'rappellerait'], nous: ['rappelons'], vous: ['rappelez'], ils: ['rappellent', 'rappelleraient'],
    imparfait: ['rappelais', 'rappelais', 'rappelait', 'rappelions', 'rappeliez', 'rappelaient'], futur: ['rappellerai', 'rappelleras', 'rappellera', 'rappellerons', 'rappellerez', 'rappelleront'],
    participe: ['rappelé', 'rappelée', 'rappelés', 'rappelées'], gerund: ['rappelant'], extra: ['rappelle', 'rappellent'],
  },
  acheter: {
    je: ['achète', 'achèterais'], tu: ['achètes'], il: ['achète', 'achèterait'], nous: ['achetons'], vous: ['achetez'], ils: ['achètent', 'achèteraient'],
    imparfait: ['achetais', 'achetais', 'achetait', 'achetions', 'achetiez', 'achetaient'], futur: ['achèterai', 'achèteras', 'achètera', 'achèterons', 'achèterez', 'achèteront'],
    participe: ['acheté', 'achetée', 'achetés', 'achetées'], gerund: ['achetant'], extra: ['achète', 'achètent'],
  },
  jeter: {
    je: ['jette', 'jetterais'], tu: ['jettes'], il: ['jette', 'jetterait'], nous: ['jetons'], vous: ['jetez'], ils: ['jettent', 'jetteraient'],
    imparfait: ['jetais', 'jetais', 'jetait', 'jetions', 'jetiez', 'jetaient'], futur: ['jetterai', 'jetteras', 'jettera', 'jetterons', 'jetterez', 'jetteront'],
    participe: ['jeté', 'jetée', 'jetés', 'jetées'], gerund: ['jetant'], extra: ['jette', 'jettent'],
  },
  espérer: {
    je: ['espère', 'espérerais'], tu: ['espères'], il: ['espère', 'espérerait'], nous: ['espérons'], vous: ['espérez'], ils: ['espèrent', 'espéreraient'],
    imparfait: ['espérais', 'espérais', 'espérait', 'espérions', 'espériez', 'espéraient'], futur: ['espérerai', 'espéreras', 'espérera', 'espérerons', 'espérerez', 'espéreront'],
    participe: ['espéré', 'espérée', 'espérés', 'espérées'], gerund: ['espérant'], extra: ['espère', 'espèrent'],
  },
  préférer: {
    je: ['préfère', 'préférerais'], tu: ['préfères'], il: ['préfère', 'préférerait'], nous: ['préférons'], vous: ['préférez'], ils: ['préfèrent', 'préféreraient'],
    imparfait: ['préférais', 'préférais', 'préférait', 'préférions', 'préfériez', 'préféraient'], futur: ['préférerai', 'préféreras', 'préférera', 'préférerons', 'préférerez', 'préféreront'],
    participe: ['préféré', 'préférée', 'préférés', 'préférées'], gerund: ['préférant'], extra: ['préfère', 'préfèrent'],
  },
  falloir: {
    je: [], tu: [], il: ['faut', 'faudrait'], nous: [], vous: [], ils: [],
    imparfait: ['', '', 'fallait', '', '', ''], futur: ['', '', 'faudra', '', '', ''], participe: ['fallu'], gerund: [], extra: ['faille'],
  },
  valoir: {
    je: ['vaux', 'vaudrais'], tu: ['vaux'], il: ['vaut', 'vaudrait'], nous: ['valons'], vous: ['valez'], ils: ['valent', 'vaudraient'],
    imparfait: ['valais', 'valais', 'valait', 'valions', 'valiez', 'valaient'], futur: ['vaudrai', 'vaudras', 'vaudra', 'vaudrons', 'vaudrez', 'vaudront'],
    participe: ['valu'], gerund: ['valant'], extra: ['vaille', 'vaillent'],
  },
  pleuvoir: {
    je: [], tu: [], il: ['pleut', 'pleuvrait'], nous: [], vous: [], ils: [],
    imparfait: ['', '', 'pleuvait', '', '', ''], futur: ['', '', 'pleuvra', '', '', ''], participe: ['plu'], gerund: ['pleuvant'], extra: ['pleuve'],
  },
  battre: {
    je: ['bats', 'battrais'], tu: ['bats'], il: ['bat', 'battrait'], nous: ['battons'], vous: ['battez'], ils: ['battent', 'battraient'],
    imparfait: ['battais', 'battais', 'battait', 'battions', 'battiez', 'battaient'], futur: ['battrai', 'battras', 'battra', 'battrons', 'battrez', 'battront'],
    participe: ['battu', 'battue', 'battus', 'battues'], gerund: ['battant'], extra: ['batte', 'battent'],
  },
  paraître: {
    je: ['parais', 'paraîtrais'], tu: ['parais'], il: ['paraît', 'paraîtrait'], nous: ['paraissons'], vous: ['paraissez'], ils: ['paraissent', 'paraîtraient'],
    imparfait: ['paraissais', 'paraissais', 'paraissait', 'paraissions', 'paraissiez', 'paraissaient'], futur: ['paraîtrai', 'paraîtras', 'paraîtra', 'paraîtrons', 'paraîtrez', 'paraîtront'],
    participe: ['paru', 'parue', 'parus', 'parues'], gerund: ['paraissant'], extra: ['paraisse', 'paraissent'],
  },
  servir: {
    je: ['sers', 'servirais'], tu: ['sers'], il: ['sert', 'servirait'], nous: ['servons'], vous: ['servez'], ils: ['servent', 'serviraient'],
    imparfait: ['servais', 'servais', 'servait', 'servions', 'serviez', 'servaient'], futur: ['servirai', 'serviras', 'servira', 'servirons', 'servirez', 'serviront'],
    participe: ['servi', 'servie', 'servis', 'servies'], gerund: ['servant'], extra: ['serve', 'servent'],
  },
  sentir: {
    je: ['sens', 'sentirais'], tu: ['sens'], il: ['sent', 'sentirait'], nous: ['sentons'], vous: ['sentez'], ils: ['sentent', 'sentiraient'],
    imparfait: ['sentais', 'sentais', 'sentait', 'sentions', 'sentiez', 'sentaient'], futur: ['sentirai', 'sentiras', 'sentira', 'sentirons', 'sentirez', 'sentiront'],
    participe: ['senti', 'sentie', 'sentis', 'senties'], gerund: ['sentant'], extra: ['sente', 'sentent'],
  },
  mentir: {
    je: ['mens', 'mentirais'], tu: ['mens'], il: ['ment', 'mentirait'], nous: ['mentons'], vous: ['mentez'], ils: ['mentent', 'mentiraient'],
    imparfait: ['mentais', 'mentais', 'mentait', 'mentions', 'mentiez', 'mentaient'], futur: ['mentirai', 'mentiras', 'mentira', 'mentirons', 'mentirez', 'mentiront'],
    participe: ['menti'], gerund: ['mentant'], extra: ['mente', 'mentent'],
  },
  rire: {
    je: ['ris', 'rirais'], tu: ['ris'], il: ['rit', 'rirait'], nous: ['rions'], vous: ['riez'], ils: ['rient', 'riraient'],
    imparfait: ['riais', 'riais', 'riait', 'riions', 'riiez', 'riaient'], futur: ['rirai', 'riras', 'rira', 'rirons', 'rirez', 'riront'],
    participe: ['ri'], gerund: ['riant'], extra: ['rie', 'rient'],
  },
  sourire: {
    je: ['souris', 'sourirais'], tu: ['souris'], il: ['sourit', 'sourirait'], nous: ['sourions'], vous: ['souriez'], ils: ['sourient', 'souriraient'],
    imparfait: ['souriais', 'souriais', 'souriait', 'souriions', 'souriiez', 'souriaient'], futur: ['sourirai', 'souriras', 'sourira', 'sourirons', 'sourirez', 'souriront'],
    participe: ['souri'], gerund: ['souriant'], extra: ['sourie', 'sourient'],
  },
  mourir: {
    je: ['meurs', 'mourrais'], tu: ['meurs'], il: ['meurt', 'mourrait'], nous: ['mourons'], vous: ['mourez'], ils: ['meurent', 'mourraient'],
    imparfait: ['mourais', 'mourais', 'mourait', 'mourions', 'mouriez', 'mouraient'], futur: ['mourrai', 'mourras', 'mourra', 'mourrons', 'mourrez', 'mourront'],
    participe: ['mort', 'morte', 'morts', 'mortes'], gerund: ['mourant'], extra: ['meure', 'meurent'],
  },
  naître: {
    je: ['nais', 'naîtrais'], tu: ['nais'], il: ['naît', 'naîtrait'], nous: ['naissons'], vous: ['naissez'], ils: ['naissent', 'naîtraient'],
    imparfait: ['naissais', 'naissais', 'naissait', 'naissions', 'naissiez', 'naissaient'], futur: ['naîtrai', 'naîtras', 'naîtra', 'naîtrons', 'naîtrez', 'naîtront'],
    participe: ['né', 'née', 'nés', 'nées'], gerund: ['naissant'], extra: ['naisse', 'naissent'],
  },
  asseoir: {
    je: ['assieds', 'assiérai', 'assoirai'], tu: ['assieds'], il: ['assied', 'assiéra', 'assoira'], nous: ['asseyons'], vous: ['asseyez'], ils: ['asseyent', 'assiéront', 'assoient'],
    imparfait: ['asseyais', 'asseyais', 'asseyait', 'asseyions', 'asseyiez', 'asseyaient'], futur: ['assiérai', 'assiéras', 'assiéra', 'assiéront', 'assiérez', 'assiéront'],
    participe: ['assis', 'assise', 'assis', 'assises'], gerund: ['asseyant'], extra: ['asseye', 'asseyent'],
  },
  fuir: {
    je: ['fuis', 'fuirais'], tu: ['fuis'], il: ['fuit', 'fuirait'], nous: ['fuyons'], vous: ['fuyez'], ils: ['fuient', 'fuiraient'],
    imparfait: ['fuyais', 'fuyais', 'fuyait', 'fuyions', 'fuyiez', 'fuyaient'], futur: ['fuirai', 'fuiras', 'fuira', 'fuirons', 'fuirez', 'fuiront'],
    participe: ['fui'], gerund: ['fuyant'], extra: ['fuie', 'fuient'],
  },
  cueillir: {
    je: ['cueille', 'cueillerais'], tu: ['cueilles'], il: ['cueille', 'cueillerait'], nous: ['cueillons'], vous: ['cueillez'], ils: ['cueillent', 'cueilleraient'],
    imparfait: ['cueillais', 'cueillais', 'cueillait', 'cueillions', 'cueilliez', 'cueillaient'], futur: ['cueillerai', 'cueilleras', 'cueillera', 'cueillerons', 'cueillerez', 'cueilleront'],
    participe: ['cueilli', 'cueillie', 'cueillis', 'cueillies'], gerund: ['cueillant'], extra: ['cueille', 'cueillent'],
  },
  bouillir: {
    je: ['bous', 'bouillirais'], tu: ['bous'], il: ['bout', 'bouillirait'], nous: ['bouillons'], vous: ['bouillez'], ils: ['bouillent', 'bouilliraient'],
    imparfait: ['bouillais', 'bouillais', 'bouillait', 'bouillions', 'bouilliez', 'bouillaient'], futur: ['bouillirai', 'bouilliras', 'bouillira', 'bouillirons', 'bouillirez', 'bouilliront'],
    participe: ['bouilli'], gerund: ['bouillant'], extra: ['bouille', 'bouillent'],
  },
};

const DERIVED_PREFIXES = ['com', 'ap', 'per', 'ad', 'sur', 're', 'de', 'in', 'trans', 'pré', 'pro', 'entre', 'contre', 'par', 'dis', 'inter', 'ob', 'sou', 'sus', 'ac', 'tra', 'retro', 'auto', 'co'];

function prefixForms(base: VerbForms, prefix: string): VerbForms {
  const p = (arr: string[]) => arr.map((f) => (f ? prefix + f : f));
  return {
    je: p(base.je), tu: p(base.tu), il: p(base.il), nous: p(base.nous), vous: p(base.vous), ils: p(base.ils),
    imparfait: p(base.imparfait), futur: p(base.futur), participe: p(base.participe), gerund: p(base.gerund), extra: p(base.extra),
  };
}

function conjugateEr(inf: string): VerbForms | null {
  const root = inf.slice(0, -2);
  if (root.length < 2) return null;
  const gerund = [root + 'ant'];
  let nousP = root + 'ons';
  let nousI = root + 'ions';
  let imp = [root + 'ais', root + 'ais', root + 'ait', root + 'ions', root + 'iez', root + 'aient'];
  if (root.endsWith('g')) {
    nousP = root + 'eons';
    nousI = root + 'ions';
    imp = [root + 'eais', root + 'eais', root + 'eait', root + 'eions', root + 'eiez', root + 'eaient'];
  } else if (root.endsWith('c')) {
    nousP = root + 'çons';
    nousI = root + 'cions';
    imp = [root + 'çais', root + 'çais', root + 'çait', root + 'çions', root + 'çiez', root + 'çaient'];
  }
  let je = root + 'e', tu = root + 'es', il = root + 'e', ils = root + 'ent';
  if (root.endsWith('y')) {
    const yRoot = root.slice(0, -1) + 'i';
    je = yRoot + 'e'; tu = yRoot + 'es'; il = yRoot + 'e'; ils = yRoot + 'ent';
  } else if (root.includes('é') && root.lastIndexOf('é') > 0) {
    const èRoot = root.slice(0, root.lastIndexOf('é')) + 'è' + root.slice(root.lastIndexOf('é') + 1);
    je = èRoot + 'e'; tu = èRoot + 'es'; il = èRoot + 'e'; ils = èRoot + 'ent';
  }
  return {
    je: [je, root + 'ais', root + 'erai', root + 'erais'],
    tu: [tu, root + 'ais', root + 'eras'],
    il: [il, root + 'ait', root + 'era', root + 'erait'],
    nous: [nousP, nousI, root + 'erons'],
    vous: [root + 'ez', root + 'iez', root + 'erez'],
    ils: [ils, root + 'aient', root + 'eront'],
    imparfait: imp,
    futur: [root + 'erai', root + 'eras', root + 'era', root + 'erons', root + 'erez', root + 'eront'],
    participe: [root + 'é', root + 'ée', root + 'és', root + 'ées'],
    gerund,
    extra: [],
  };
}

function conjugateIrRegularGroup(inf: string): VerbForms | null {
  // 2nd-group -ir (finir, grandir, choisir, réussir...): -issant
  const root = inf.slice(0, -2);
  if (root.length < 2) return null;
  return {
    je: [root + 'is', root + 'issais', root + 'irai', root + 'irais'],
    tu: [root + 'is', root + 'issais', root + 'iras'],
    il: [root + 'it', root + 'issait', root + 'ira', root + 'irait'],
    nous: [root + 'issons', root + 'issions', root + 'irons'],
    vous: [root + 'issez', root + 'issiez', root + 'irez'],
    ils: [root + 'issent', root + 'issaient', root + 'iront'],
    imparfait: [root + 'issais', root + 'issais', root + 'issait', root + 'issions', root + 'issiez', root + 'issaient'],
    futur: [root + 'irai', root + 'iras', root + 'ira', root + 'irons', root + 'irez', root + 'iront'],
    participe: [root + 'i', root + 'ie', root + 'is', root + 'ies'],
    gerund: [root + 'issant'],
    extra: [],
  };
}

function conjugateUir(inf: string): VerbForms | null {
  // conduire, traduire, construire, réduire, cuire...: conduis/conduit/conduisons
  const root = inf.slice(0, -3) + 'i';
  if (root.length < 2) return null;
  return {
    je: [root + 's', root + 'sais', root + 'rai', root + 'rais'],
    tu: [root + 's', root + 'sais', root + 'ras'],
    il: [root + 't', root + 'sait', root + 'ra', root + 'rait'],
    nous: [root + 'sons', root + 'sions', root + 'rons'],
    vous: [root + 'sez', root + 'siez', root + 'rez'],
    ils: [root + 'sent', root + 'saient', root + 'ront'],
    imparfait: [root + 'sais', root + 'sais', root + 'sait', root + 'sions', root + 'siez', root + 'saient'],
    futur: [root + 'rai', root + 'ras', root + 'ra', root + 'rons', root + 'rez', root + 'ront'],
    participe: [root + 't', root + 'te', root + 'ts', root + 'tes'],
    gerund: [root + 'sant'],
    extra: [],
  };
}

function conjugateRe(inf: string): VerbForms | null {
  // vendre, attendre, entendre, répondre, perdre, descendre...: vends/vend/vendons
  const root = inf.slice(0, -2);
  if (root.length < 2) return null;
  return {
    je: [root + 's', root + 'ais', root + 'rai', root + 'rais'],
    tu: [root + 's', root + 'ais', root + 'ras'],
    il: [root, root + 't', root + 'ait', root + 'ra', root + 'rait'],
    nous: [root + 'ons', root + 'ions', root + 'rons'],
    vous: [root + 'ez', root + 'iez', root + 'rez'],
    ils: [root + 'ent', root + 'aient', root + 'ront'],
    imparfait: [root + 'ais', root + 'ais', root + 'ait', root + 'ions', root + 'iez', root + 'aient'],
    futur: [root + 'rai', root + 'ras', root + 'ra', root + 'rons', root + 'rez', root + 'ront'],
    participe: [root + 'u', root + 'ue', root + 'us', root + 'ues'],
    gerund: [root + 'ant'],
    extra: [],
  };
}

function conjugateVerb(inf: string): VerbForms | null {
  if (IRREGULAR_VERBS[inf]) return IRREGULAR_VERBS[inf];
  for (const p of DERIVED_PREFIXES) {
    const base = inf.slice(p.length);
    if (IRREGULAR_VERBS[base]) return prefixForms(IRREGULAR_VERBS[base], p);
  }
  if (inf.endsWith('er')) return conjugateEr(inf);
  if (inf.endsWith('uir')) return conjugateUir(inf);
  if (inf.endsWith('ir')) return conjugateIrRegularGroup(inf);
  if (inf.endsWith('re')) return conjugateRe(inf);
  return null;
}

function isVerbInfinitive(word: string): boolean {
  return IRREGULAR_VERBS[word] !== undefined
    || word.endsWith('er') || word.endsWith('ir') || word.endsWith('re') || word.endsWith('oir') || word.endsWith('uir');
}

// ---------------------------------------------------------------------------
// Noun / adjective inflection
// ---------------------------------------------------------------------------

const FUNCTION_WORDS = new Set(['de', 'à', 'en', 'du', 'des', 'au', 'aux', 'le', 'la', 'les', 'un', 'une', "l'", "d'", 'et', 'ou', 'sur', 'dans', 'pour', 'avec', 'sans', 'sous', 'chez', 'entre', 'vers', 'par', 'depuis', 'jusque', 'que', 'qui', 'quoi', 'dont', 'où', 'y', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'ce', 'cet', 'cette', 'ces']);

function pluralizeWord(word: string): string {
  if (word.length < 3) return word;
  if (/[sxz]$/.test(word)) return word;
  if (/(eau|au|eu)$/.test(word)) return word + 'x';
  if (word.endsWith('al')) return word.slice(0, -2) + 'aux';
  if (word.endsWith('ail')) return word.slice(0, -3) + 'aux';
  if (word.endsWith('ou')) return word + 's';
  return word + 's';
}

function feminizeWord(word: string): string {
  if (word.length < 3) return word;
  if (word.endsWith('er')) return word.slice(0, -2) + 'ère';
  if (word.endsWith('teur')) return word.slice(0, -4) + 'trice';
  if (word.endsWith('eur')) return word.slice(0, -3) + 'euse';
  if (word.endsWith('if')) return word.slice(0, -2) + 'ive';
  if (word.endsWith('eux')) return word.slice(0, -3) + 'euse';
  if (word.endsWith('ien')) return word.slice(0, -3) + 'ienne';
  if (word.endsWith('en')) return word + 'ne';
  if (word.endsWith('on')) return word + 'ne';
  if (word.endsWith('el')) return word + 'le';
  if (word.endsWith('eil')) return word.slice(0, -3) + 'eille';
  if (word.endsWith('an')) return word + 'ne';
  if (word.endsWith('et')) return word.slice(0, -2) + 'ette';
  if (word.endsWith('c')) return word + 'he';
  if (word.endsWith('f')) return word.slice(0, -1) + 've';
  if (word.endsWith('s')) return word.slice(0, -1) + 'se';
  return word + 'e';
}

const WRAP_ARTICLES = [
  'le ', 'la ', 'les ', 'un ', 'une ', 'des ', 'du ', 'de la ', 'au ', 'aux ',
  'mon ', 'ma ', 'mes ', 'ton ', 'ta ', 'tes ', 'son ', 'sa ', 'ses ',
  'notre ', 'nos ', 'votre ', 'vos ', 'leur ', 'leurs ',
];

function wrapArticles(phrase: string, out: Set<string>): void {
  out.add(phrase);
  const startsVowel = /^[aeiouh]/.test(phrase);
  for (const a of WRAP_ARTICLES) out.add(a + phrase);
  if (startsVowel) {
    out.add("l'" + phrase);
    out.add("de l'" + phrase);
  }
}

function inflectNounPhrase(stripped: string, out: Set<string>): void {
  if (!stripped) return;
  const tokens = stripped.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return;

  const last = tokens[tokens.length - 1];
  const base = tokens.join(' ');
  wrapArticles(base, out);

  const pluralTokens = tokens.map((t) => (FUNCTION_WORDS.has(t) ? t : pluralizeWord(t)));
  const plural = pluralTokens.join(' ');
  if (plural !== base) wrapArticles(plural, out);

  const fem = tokens.slice(0, -1).concat(feminizeWord(last)).join(' ');
  if (fem !== base) wrapArticles(fem, out);
  const femPlural = tokens.slice(0, -1).concat(pluralizeWord(feminizeWord(last))).join(' ');
  if (femPlural !== fem && femPlural !== plural) wrapArticles(femPlural, out);
}

// ---------------------------------------------------------------------------
// Full expansion for a bank term
// ---------------------------------------------------------------------------

export function expandFrenchForms(term: string): string[] {
  const folded = fold(term).trim();
  const out = new Set<string>();
  const push = (s?: string) => {
    if (s && s.length >= 2) out.add(s);
  };

  if (!folded) return [];
  push(folded);
  push(stripArticles(folded));

  const phrase = folded.split(/\s+/).filter(Boolean);
  if (phrase.length >= 1) {
    const first = phrase[0];

    // Reflexive: "se lever", "s'asseoir", "se rendre compte"
    if (first === 'se' && phrase.length >= 2) {
      const bare = phrase[1];
      const rest = phrase.slice(2);
      const forms = conjugateVerb(bare);
      if (forms) {
        for (const f of [...forms.je, ...forms.il, ...forms.ils, ...forms.imparfait, ...forms.futur, ...forms.gerund, ...forms.extra]) {
          push(f ? `se ${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
          push(f ? `s'${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
        }
        for (const f of forms.je) push(f ? `me ${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
        for (const f of forms.tu) push(f ? `te ${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
        for (const f of forms.nous) push(f ? `nous ${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
        for (const f of forms.vous) push(f ? `vous ${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
        // passé composé (être auxiliaire): me suis levé / s'est levé / nous sommes levés
        const aux = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];
        const pro = ['me', 'te', 'se', 'nous', 'vous', 'se'];
        for (let i = 0; i < 6; i++) {
          for (const f of forms.participe) {
            push(`${pro[i]} ${aux[i]} ${f}${rest.length ? ' ' + rest.join(' ') : ''}`);
            if (i === 2 && /^[aeiouh]/.test(aux[i])) push(`s'${aux[i]} ${f}${rest.length ? ' ' + rest.join(' ') : ''}`);
            if (i === 0 && /^[aeiouh]/.test(f)) push(`m'${aux[i]} ${f}${rest.length ? ' ' + rest.join(' ') : ''}`);
          }
        }
      }
    } else if (first.startsWith("s'") && first.length > 2) {
      const bare = first.slice(2);
      const rest = phrase.slice(1);
      const forms = conjugateVerb(bare);
      if (forms) {
        for (const f of [...forms.je, ...forms.il, ...forms.ils, ...forms.imparfait, ...forms.futur, ...forms.gerund, ...forms.extra]) {
          push(f ? `s'${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
        }
        for (const f of forms.je) push(f ? `me ${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
        for (const f of forms.tu) push(f ? `te ${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
        for (const f of forms.nous) push(f ? `nous ${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
        for (const f of forms.vous) push(f ? `vous ${f}${rest.length ? ' ' + rest.join(' ') : ''}` : undefined);
        const aux = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];
        const pro = ['me', 'te', 'se', 'nous', 'vous', 'se'];
        for (let i = 0; i < 6; i++) {
          for (const f of forms.participe) {
            push(`${pro[i]} ${aux[i]} ${f}${rest.length ? ' ' + rest.join(' ') : ''}`);
            if (i === 2) push(`s'${aux[i]} ${f}${rest.length ? ' ' + rest.join(' ') : ''}`);
            if (i === 0 && /^[aeiouh]/.test(f)) push(`m'${aux[i]} ${f}${rest.length ? ' ' + rest.join(' ') : ''}`);
          }
        }
      }
    } else if (isVerbInfinitive(first)) {
      // Verb phrase or bare verb: conjugate the first word, keep the rest.
      const rest = phrase.slice(1);
      const forms = conjugateVerb(first);
      if (forms) {
        const tail = rest.length ? ' ' + rest.join(' ') : '';
        for (const group of [forms.je, forms.tu, forms.il, forms.nous, forms.vous, forms.ils, forms.imparfait, forms.futur, forms.gerund, forms.extra]) {
          for (const f of group) push(f + tail);
        }
        for (const f of forms.participe) push(f + tail);
        // article variants of the noun part of verb phrases: "faire les courses" → "fais des courses"
        if (rest.length > 1) {
          const restPhrase = rest.join(' ');
          const restStripped = stripArticles(restPhrase);
          for (const group of [forms.je, forms.tu, forms.il, forms.nous, forms.vous, forms.ils, forms.imparfait, forms.futur]) {
            for (const f of group) push(f + ' ' + restStripped);
          }
          const last = rest[rest.length - 1];
          const pluralizedRest = rest.map((t) => (FUNCTION_WORDS.has(t) ? t : pluralizeWord(t))).join(' ');
          for (const f of forms.je) push(f + ' ' + pluralizedRest);
        }
      }
    }
  }

  // Noun / adjective inflections (plurals, feminines, article wraps).
  inflectNounPhrase(stripArticles(folded), out);

  return Array.from(out);
}

// ---------------------------------------------------------------------------
// Coverage check against an n-gram index
// ---------------------------------------------------------------------------

export function termIsCovered(term: string, ngrams: Set<string>): boolean {
  const forms = expandFrenchForms(term);
  for (const c of forms) {
    const key = tokenizeText(c).join(' ');
    if (key && ngrams.has(key)) return true;
  }
  return false;
}
