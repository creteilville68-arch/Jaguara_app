/**
 * Enriquece as 11 novas guias da enciclopédia (guide 23) com as palavras-alvo
 * que já têm 4 exemplos curados no masterExamples (ALL_MASTER_EXAMPLES).
 *
 * O parser casa termos compostos apenas via dicionário da guia (termo +
 * inflections), então cada palavra-alvo vira uma entrada de vocabulário com:
 *  - term: termo canônico do banco (ex.: "le réseau social")
 *  - inflections: formas encontradas no texto da própria guia (plural,
 *    conjugações comuns, sem artigo)
 *  - examples: os 4 exemplos curados já existentes (sem reescrever nada)
 *  - definitionPt: tradução do banco
 */
import fs from 'fs';
import { fold, ALL_MASTER_EXAMPLES } from '../src/utils/clickableParser';
import { lookupWordBankEntry } from '../src/data/wordBankLookup';

const GUIDE_DIR = 'src/data/city_guides';

const ARTICLE = /^(le|la|les|l'|un|une|des|d')\s+/i;

/** Verbos irregulares comuns usados nas frases das guias. */
const IRREGULAR: Record<string, string> = {
  rend: 'rendre',
  tient: 'tenir', tiennent: 'tenir',
  fait: 'faire', font: 'faire',
  souhaite: 'souhaiter', souhaitent: 'souhaiter',
  paie: 'payer', payent: 'payer', paient: 'payer',
  perd: 'perdre', perdent: 'perdre',
  met: 'mettre', mettent: 'mettre',
  prend: 'prendre', prennent: 'prendre',
  donne: 'donner', donnent: 'donner',
  porte: 'porter', portent: 'porter',
  décline: 'décliner', déclinent: 'décliner',
  compose: 'composer', composent: 'composer',
  indique: 'indiquer', indiquent: 'indiquer',
  appelle: 'appeler', appellent: 'appeler',
  répare: 'réparer', réparent: 'réparer',
  travaille: 'travailler', travaillent: 'travailler',
  dépose: 'déposer', déposent: 'déposer',
  échange: 'échanger', échangent: 'échanger',
  marie: 'marier', marient: 'marier',
  calme: 'calmer', calment: 'calmer',
  promet: 'promettre', promettent: 'promettre',
  règle: 'régler', règlent: 'régler',
  verse: 'verser', versent: 'verser',
  achète: 'acheter', achètent: 'acheter',
  préfère: 'préférer', préfèrent: 'préférer',
  essaie: 'essayer', essaient: 'essayer',
  ressemble: 'ressembler', ressemblent: 'ressembler',
  garde: 'garder', gardent: 'garder',
  monte: 'monter', montent: 'monter',
  tombe: 'tomber', tombent: 'tomber',
  demande: 'demander', demandent: 'demander',
  cherche: 'chercher', cherchent: 'chercher',
  écoute: 'écouter', écoutent: 'écouter',
  regarde: 'regarder', regardent: 'regarder',
  arrive: 'arriver', arrivent: 'arriver',
  reste: 'rester', restent: 'rester',
  passe: 'passer', passent: 'passer',
  suit: 'suivre', suivent: 'suivre',
  écrit: 'écrire', écrivent: 'écrire',
  lit: 'lire', lisent: 'lire',
  boit: 'boire', boivent: 'boire',
  dort: 'dormir', dorment: 'dormir',
  part: 'partir', partent: 'partir',
  sort: 'sortir', sortent: 'sortir',
  vient: 'venir', viennent: 'venir',
  revient: 'revenir', reviennent: 'revenir',
  devient: 'devenir', deviennent: 'devenir',
  voit: 'voir', voient: 'voir',
  sait: 'savoir', savent: 'savoir',
  connaît: 'connaître', connaissent: 'connaître',
  comprend: 'comprendre', comprennent: 'comprendre',
  apprend: 'apprendre', apprennent: 'apprendre',
  répond: 'répondre', répondent: 'répondre',
  entend: 'entendre', entendent: 'entendre',
  vend: 'vendre', vendent: 'vendre',
  descend: 'descendre', descendent: 'descendre',
  ouvre: 'ouvrir', ouvrent: 'ouvrir',
  couvre: 'couvrir', couvrent: 'couvrir',
  offre: 'offrir', offrent: 'offrir',
  souffre: 'souffrir', souffrent: 'souffrir',
  croit: 'croire', croient: 'croire',
  plaît: 'plaire', plaisent: 'plaire',
  vit: 'vivre', vivent: 'vivre',
};

function pluralize(word: string): string {
  if (/al$/.test(word)) return word.slice(0, -2) + 'aux';
  if (/eau$/.test(word) || /eu$/.test(word)) return word + 'x';
  if (/s$/.test(word) || /x$/.test(word)) return word;
  return word + 's';
}

function verbConjugations(infinitive: string): string[] {
  const out = new Set<string>([infinitive]);
  if (/er$/.test(infinitive)) {
    const stem = infinitive.replace(/er$/, '');
    out.add(stem + 'e');
    out.add(stem + 'es');
    out.add(stem + 'ent');
  } else if (/ir$/.test(infinitive)) {
    const stem = infinitive.replace(/ir$/, '');
    out.add(stem + 'it');
    out.add(stem + 'is');
    out.add(stem + 'issent');
  } else if (/re$/.test(infinitive)) {
    const stem = infinitive.replace(/re$/, '');
    out.add(stem + 'd');
    out.add(stem + 'ent');
  }
  return [...out];
}

/** Gera as formas de superfície prováveis de um termo canônico do banco. */
function surfaceVariants(term: string): string[] {
  const clean = term.replace(/[’ʼ‘]/g, "'").trim();
  const out = new Set<string>([clean, clean.toLowerCase()]);
  const articleless = clean.replace(ARTICLE, '');
  out.add(articleless);
  out.add(articleless.toLowerCase());

  const words = articleless.split(/\s+/);

  // Plural nominal: "le réseau social" -> "les réseaux sociaux"
  const pluralWords = words.map((w) => (/(er|ir|re)$/.test(w) ? w : pluralize(w)));
  out.add(pluralWords.join(' '));
  out.add('les ' + pluralWords.join(' '));
  out.add('des ' + pluralWords.join(' '));

  // Conjugação do primeiro verbo em frases verbais: "rendre hommage" -> "rend hommage"
  if (words.length >= 2) {
    const first = words[0];
    const rest = words.slice(1).join(' ');
    const verbForms = new Set<string>(verbConjugations(first));
    if (IRREGULAR[first]) verbForms.add(IRREGULAR[first]);
    for (const vf of verbForms) out.add(vf + ' ' + rest);
    // Lemma da última palavra (pouco comum, mas cobre "se calmer" -> "se calment")
    const last = words[words.length - 1];
    const lm = IRREGULAR[last];
    if (lm) out.add(words.slice(0, -1).join(' ') + ' ' + lm);
  }

  // Reflexivos: "se calmer" -> "se calme", "se calment"; "s'y résoudre" fixo
  const refl = clean.match(/^(se|s')\s+(.+)$/i);
  if (refl) {
    const particle = /^s'/.test(clean) ? "s'" : 'se ';
    const verbPart = refl[2];
    const forms = new Set<string>(verbConjugations(verbPart));
    if (IRREGULAR[verbPart]) forms.add(IRREGULAR[verbPart]);
    for (const f of forms) out.add(particle + f);
  }

  return [...out];
}

/** Palavras-alvo por guia (as que escrevi nos parágrafos, formas canônicas do banco). */
const GUIDE_TARGETS: Record<string, string[]> = {
  paris: ['la ville intelligente', 'la transformation numérique', "l'exploitation des données", "l'intelligence artificielle", 'la vie privée', 'la surveillance de masse', 'les données personnelles', 'le téléphone portable', "la page d'accueil", 'la barre de recherche', "la barre d'outils", 'la connexion internet', 'la connexion sécurisée', 'le commerce électronique', "le système d'exploitation", 'la mise à jour', 'le virus informatique', 'le logiciel espion', "le nom d'utilisateur", 'la bande-annonce', 'le film comique', 'le film dramatique', "le film d'action", 'le jeu vidéo', 'la chaîne de télévision', 'le haut-parleur', 'se déconnecter', "l'espace personnel", 'le réseau social', "le nombre d'abonnés", "la liberté d'expression", 'la neutralité du net', "l'obsolescence programmée", 'le vélo en libre-service', 'la propreté urbaine', 'la rénovation urbaine', "l'aménagement urbain"],
  amiens: ['la collectivité territoriale', 'le conseiller municipal', 'la participation citoyenne', "l'ordre du jour", 'le compte rendu', 'le guichet administratif', "l'état civil", "l'acte de naissance", "la carte d'identité", "la carte d'électeur", 'la carte vitale', 'la cotisation sociale', 'la retraite complémentaire', 'le droit de vote', 'les droits civiques', 'la démocratie directe', 'donner son avis', 'se renseigner', 'porter plainte', "l'aide sociale", 'le soutien scolaire', "l'entretien d'embauche", "l'expérience professionnelle", 'le savoir-faire', 'la reconversion professionnelle', 'se reconvertir', "l'emploi précaire", 'les horaires flexibles', 'travailler à temps partiel', 'décliner une invitation', 'la date limite', 'la création d\'entreprise', 'la bourse d\'études', 'la salle d\'attente', 'le panneau indicateur', 'indiquer le chemin', 'faire demi-tour', 'le passage piéton'],
  lille: ['le café-restaurant', 'le café gourmand', 'la bière pression', 'la bibliothèque municipale', 'le groupe de discussion', 'le groupe de musique', 'la cuisine équipée', 'la plaque de cuisson', 'le micro-ondes', 'le grille-pain', 'la trousse de toilette', 'la lampe de chevet', 'la table basse', 'en désordre', 'la descente de lit', 'le couvre-lit', 'accrocher un tableau', 'la carte de débit', 'la carte de crédit', 'payer en espèces', 'déposer de l\'argent', 'le reçu', 'le porte-monnaie', 'le sac en plastique', 'échanger un article', 'la chambre d\'hôtes', 'le service en chambre', 'le titre de transport', 'la carte de transport', 'la place assise', 'la place côté couloir', 'le rond-point', 'la zone piétonne', 'la station-service', 'le pull-over', 'le nœud papillon', 'les boucles d\'oreilles', 'la pince à épiler', 'la lime à ongles', 'le vernis à ongles', 'se raser', 'le rouge à lèvres', 'composer le code', 'le coffre-fort'],
  'mont-saint-michel': ["l'habitat naturel", "l'aire marine protégée", 'la conservation de la nature', 'la forêt dense', 'le sous-bois', 'la chauve-souris', 'la chute d\'eau', "l'énergie éolienne", "l'hydrogène vert", "l'économie d'énergie", 'la dégradation des sols', "l'élévation du niveau de la mer", 'la fonte des glaciers', "l'empreinte carbone", "l'association écologiste", 'la valorisation des déchets', 'les engrais chimiques', 'les produits bio', "l'eau potable", 'le champ de blé', 'le commerce équitable', 'le geste éco-citoyen', 'mettre en péril', 'la protection de la nature', 'le bulletin météo', 'il y a du brouillard', 'prendre un parapluie', 'la promenade en bateau', 'le croissant au beurre', "l'œuf à la coque", 'les petits pois', 'se perdre', 'la demi-heure', 'quelque part', 'se calmer', 'respirer profondément', 'culminer', 'se mouiller', 'se régaler', 'le pain d\'épices'],
  tours: ['le climat tempéré', 'le climat continental', 'le climat aride', "l'hygiène de vie", "l'activité physique", 'le bilan de santé', 'la tension artérielle', 'en mauvaise santé', 'le mal de gorge', 'quotidien', 'appeler les secours', 'la voiture particulière', 'tomber en panne', 'faire appel à un plombier', "la fuite d'eau", 'réparer un appareil', "la panne d'électricité", 'le chauffage central', 'le double vitrage', 'au cas où', 'à condition que', 'le bien-être', 'perdre du poids', 'la régulation émotionnelle', 'la pleine conscience', 'avoir le moral', 'perdre patience', "l'état d'âme", 'se contrôler', 'se maîtriser', 'la crainte', 'le vécu', 'la mémoire individuelle', 'profondément enraciné', "s'y résoudre", 'de façon à', 'avoir faim', 'avoir raison', 'se tromper', 'se disputer', 'se distraire', 'peu de', 'jusqu\'à', 'de manière à', 'de sorte que'],
  bordeaux: ["le hors-d'œuvre", 'la pâte brisée', 'la presse écrite', 'en outre', "l'offre d'emploi", "la main-d'œuvre", 'le pouvoir d\'achat', 'le taux d\'intérêt', 'la création d\'entreprise', 'le capital', 'la fraude fiscale', 'la responsabilité pénale', 'la responsabilité civile', 'la responsabilité contractuelle', "la présomption d'innocence", 'la preuve matérielle', "l'abus de droit", 'la contre-expertise', 'la contre-preuve', 'le crédit d\'impôt', 'le libre-échange', "l'exode rural", 'la zone rurale', "le taux d'audience", 'les travaux de rénovation', "l'austérité budgétaire"],
  toulouse: ['la recherche scientifique', 'la recherche fondamentale', 'la recherche appliquée', 'la recherche-action', 'la recherche-développement', 'le financement de la recherche', "l'archive ouverte", 'la propriété intellectuelle', 'la mécanique quantique', "l'attraction universelle", 'la matière noire', 'la géante rouge', 'la naine blanche', 'la géométrie différentielle', 'la sélection naturelle', 'la liaison chimique', 'la marge d\'erreur', 'mettre en évidence', "l'esprit d'analyse", 'la pensée critique', "l'argument d'autorité", 'la logique formelle', 'le faux dilemme', 'remettre en question', 'le fait', 'le sous-entendu', 'le non-dit', 'équivoque', 'la rhétorique', 'les sciences exactes', 'la compréhension orale', 'la compétence linguistique', "l'interprétation simultanée", "l'expression idiomatique", 'la figure de style', 'le genre littéraire', 'la langue morte', 'la curiosité intellectuelle', 'la réalité virtuelle', 'la résolution de problèmes'],
  lyon: ['le don du sang', "l'espérance de vie", 'la maladie contagieuse', 'la résistance aux antibiotiques', 'le micro-organisme', 'la membrane cellulaire', "l'insuffisance rénale", 'le suivi', 'le séjour hospitalier', 'le consentement éclairé', "le comité d'éthique", "l'atteinte", 'la santé mentale', 'le sans-abri', 'la mixité sociale', 'le sentiment d\'appartenance', 'le vivre-ensemble', 'le rejet de l\'autre', 'la clinique', "l'arcade sourcilière"],
  marseille: ["l'équipe nationale", 'le carton jaune', 'le hors-jeu', 'le match nul', "la cérémonie d'ouverture", "la médaille d'or", "la médaille d'argent", 'la médaille de bronze', 'le saut en longueur', 'retracer', 'le passé', 'le présent', 'parvenir à', 'tenir bon', 'soulever les foules'],
  strasbourg: ["l'intégration régionale", 'le conseil régional', "l'administration centrale", "l'aménagement du territoire", 'la gestion publique', 'les droits sociaux', "la liberté d'association", 'le parti', 'le parti pris', 'les relations internationales', 'le droit international', 'le bloc de constitutionnalité', "la cour d'appel", 'la voie de recours', 'le renvoi en correctionnelle', "l'exécution forcée", 'la haute trahison', 'gracier un condamné', 'la saisie-attribution', 'la saisie-vente', 'la guerre froide', 'la monarchie absolue', 'la tolérance religieuse', "l'appareil d'État", 'pérenniser un acquis'],
  nice: ['le vol direct', "la piste d'atterrissage", 'la compagnie aérienne', "l'offre spéciale", 'les vacances scolaires', "l'assurance voyage", "la chambre d'hôtes", 'le centre-ville', 'la couverture supplémentaire', 'déjeuner', 'le passe-temps', 'le dessin animé', "le musée d'art", "le parc d'attractions", 'sportif', "le pilote d'avion", 'la ligne d\'horizon', 'la galerie marchande', "le magasin d'usine", 'la livraison gratuite', 'un morceau de', 'un pot de', 'mettre de la crème solaire', 'les cheveux bouclés', 'les cheveux roux', 'les yeux marron', 'de taille moyenne', 'la tenue', 'se précipiter', 'la comédie musicale', "l'exposition permanente", 'le catalogue raisonné', 'rendre hommage', "l'aperçu", "l'ouverture d'esprit", 'souhaiter bonne chance', 'se marier', 'tenir une promesse', 'le petit-fils', 'le dé', 'le nid d\'abeilles', 'adulte', 'critique', 'louche', 'la fin', 'en version originale', 'avant-dernier', 'le grain de beauté'],
};

let totalAdded = 0;
for (const [cityId, targets] of Object.entries(GUIDE_TARGETS)) {
  const file = `${GUIDE_DIR}/${cityId.replace(/-/g, '_')}_guide_23.json`;
  if (!fs.existsSync(file)) {
    console.log(`SKIP ${cityId}: arquivo não existe`);
    continue;
  }
  const guide = JSON.parse(fs.readFileSync(file, 'utf8'));
  const text = (guide.paragraphs || []).map((p: any) => p?.fr || '').join('\n').toLowerCase();
  const existing = new Set((guide.vocabularyDictionary || []).map((e: any) => fold(String(e.term))));

  let added = 0;
  const missing = [];
  for (const target of targets) {
    const articleless = target.replace(ARTICLE, '');
    const bank = lookupWordBankEntry(articleless) || lookupWordBankEntry(target);

    // Chave de curadoria: tenta o alvo, o alvo sem artigo, o termo do banco e o
    // termo do banco sem artigo — o lookup do banco às vezes resolve o termo
    // errado (bande-annonce -> la bande), mas a curadoria existe na chave certa.
    const bankTerm = bank?.term || target;
    const keyCandidates = [
      fold(target),
      fold(articleless),
      fold(bankTerm),
      fold(bankTerm.replace(ARTICLE, '')),
    ];
    let key = '';
    let curated: { level: string; fr: string; pt: string }[] | undefined;
    for (const k of [...new Set(keyCandidates)]) {
      const c = ALL_MASTER_EXAMPLES[k];
      if (c && c.length === 4) {
        key = k;
        curated = c;
        break;
      }
    }
    if (!key || !curated) {
      missing.push(`[sem-cura] ${target} (termo-banco: ${bankTerm})`);
      continue;
    }
    if (existing.has(key)) continue;
    // Termo canônico: a própria chave curada (com artigo), que é a forma do banco.
    const term = key;
    const pt =
      bank && fold(bank.term) === fold(term)
        ? bank.pt
        : lookupWordBankEntry(term)?.pt || lookupWordBankEntry(articleless)?.pt || '';
    const variants = surfaceVariants(term)
      .map((v) => v.toLowerCase())
      .filter((v) => text.includes(v));
    const inflections = [...new Set([term, term.replace(ARTICLE, ''), ...variants])].slice(0, 8);

    guide.vocabularyDictionary.push({
      term,
      definitionPt: bank.pt,
      definitionFr: `Terme du lexique français : « ${term.replace(ARTICLE, '')} ».`,
      inflections,
      ptTargets: [bank.pt.replace(/^o |^a |^os |^as |^um |^uma /i, '')],
      examples: curated.map((e: any) => ({ level: e.level, fr: e.fr, pt: e.pt })),
    });
    existing.add(key);
    added++;
  }
  fs.writeFileSync(file, JSON.stringify(guide, null, 2) + '\n');
  totalAdded += added;
  console.log(`${cityId}: +${added} entradas curadas adicionadas`);
  for (const m of missing) console.log(`   ⚠ ${m}`);
}
console.log(`\nTOTAL adicionadas: ${totalAdded}`);
