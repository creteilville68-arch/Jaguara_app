/**
 * Utility to normalize French words and inflections to their canonical root lemma.
 * This ensures the Banco Mestre deduplicates by lemma rather than raw inflected strings,
 * serving as the master foundation for tracking the 15.400 lemma target across the 11 cities.
 */

// Common inflection-to-lemma mapping table for high-frequency verbs, nouns, and adjectives
const COMMON_LEMMA_MAP: Record<string, string> = {
  // Verbs: arriver
  "arriver": "arriver",
  "arrivé": "arriver",
  "arrivée": "arriver",
  "arrivés": "arriver",
  "arrivées": "arriver",
  "suis arrivé": "arriver",
  "est arrivé": "arriver",
  "sommes arrivés": "arriver",
  "arrive": "arriver",
  "arrivons": "arriver",

  // Verbs: être
  "être": "être",
  "suis": "être",
  "est": "être",
  "sommes": "être",
  "êtes": "être",
  "sont": "être",
  "été": "être",

  // Verbs: avoir
  "avoir": "avoir",
  "ai": "avoir",
  "as": "avoir",
  "a": "avoir",
  "avons": "avoir",
  "avez": "avoir",
  "ont": "avoir",
  "eu": "avoir",

  // Verbs: aller
  "aller": "aller",
  "vais": "aller",
  "vas": "aller",
  "va": "aller",
  "allons": "aller",
  "allez": "aller",
  "vont": "aller",
  "allé": "aller",
  "allée": "aller",

  // Verbs: marcher, commander, trouver, rencontrer, chercher, demander
  "marche": "marcher",
  "marchons": "marcher",
  "marché": "marcher",
  "marcher": "marcher",
  "commande": "commander",
  "commandé": "commander",
  "commandons": "commander",
  "commander": "commander",
  "trouve": "trouver",
  "trouvé": "trouver",
  "trouver": "trouver",
  "rencontre": "rencontrer",
  "rencontré": "rencontrer",
  "rencontrer": "rencontrer",
  "cherche": "chercher",
  "cherché": "chercher",
  "chercher": "chercher",
  "demande": "demander",
  "demandé": "demander",
  "demander": "demander",

  // Nouns & Plurals
  "ville": "ville",
  "villes": "ville",
  "la ville": "ville",
  "une ville": "ville",
  "des villes": "ville",
  "carnet": "carnet",
  "carnets": "carnet",
  "le carnet": "carnet",
  "un carnet": "carnet",
  "des carnets": "carnet",
  "café": "café",
  "cafés": "café",
  "le café": "café",
  "un café": "café",
  "librairie": "librairie",
  "librairies": "librairie",
  "la librairie": "librairie",
  "une librairie": "librairie",
  "carte": "carte",
  "cartes": "carte",
  "la carte": "carte",
  "une carte": "carte",
  "chemin": "chemin",
  "chemins": "chemin",
  "le chemin": "chemin",
  "rencontres": "rencontre",
  "crépuscule": "crépuscule",
  "le crépuscule": "crépuscule",
  "billet": "billet",
  "billets": "billet",
  "le billet": "billet",
  "un billet": "billet",
  "train": "train",
  "trains": "train",
  "le train": "train",
  "un train": "train",
  "progrès": "progrès",
  "le progrès": "progrès",
  "des progrès": "progrès"
};

/**
 * Strips leading French articles and prepositions when determining a lemma
 */
function stripFrenchArticles(word: string): string {
  if (!word) return "";
  let cleaned = word.trim().toLowerCase().replace(/[’ʼ‘]/g, "'");
  
  // Remove trailing punctuation
  cleaned = cleaned.replace(/[.,!?;:]+/g, "").trim();

  // Remove common articles if it's a noun phrase
  const prefixes = [
    "le ", "la ", "les ", "l'", "un ", "une ", "des ",
    "au ", "aux ", "du ", "de la ", "de l'", "des ",
    "mon ", "ma ", "mes ", "ton ", "ta ", "tes ", "son ", "sa ", "ses "
  ];

  for (const prefix of prefixes) {
    if (cleaned.startsWith(prefix) && cleaned.length > prefix.length) {
      cleaned = cleaned.slice(prefix.length).trim();
      break;
    }
  }

  return cleaned;
}

/**
 * Given a French word, phrase, or inflection, returns the canonical base lemma.
 * If an explicitLemma is provided, it is prioritized and normalized.
 */
export function normalizeToLemma(wordFr: string, explicitLemma?: string): string {
  if (explicitLemma && explicitLemma.trim().length > 0) {
    const normExplicit = stripFrenchArticles(explicitLemma);
    if (COMMON_LEMMA_MAP[normExplicit]) {
      return COMMON_LEMMA_MAP[normExplicit];
    }
    return normExplicit.toLowerCase().trim();
  }

  const clean = wordFr.trim().toLowerCase();
  if (COMMON_LEMMA_MAP[clean]) {
    return COMMON_LEMMA_MAP[clean];
  }

  const stripped = stripFrenchArticles(clean);
  if (COMMON_LEMMA_MAP[stripped]) {
    return COMMON_LEMMA_MAP[stripped];
  }

  // Basic regular plural stripping for standard French nouns
  if (stripped.length > 3 && stripped.endsWith("s") && !stripped.endsWith("ss") && !stripped.endsWith("is") && !stripped.endsWith("us")) {
    const singular = stripped.slice(0, -1);
    if (COMMON_LEMMA_MAP[singular]) {
      return COMMON_LEMMA_MAP[singular];
    }
    return singular;
  }

  return stripped || clean;
}
