import { getStaticLessonEntry, normalizeForSearch } from '../data/lessonDictionary';
import { COMMON_EXPRESSIONS } from '../data/commonExpressionsDictionary';
import { lookupWordBankEntry, formatBankLevel } from '../data/wordBankLookup';
import { MASTER_EXAMPLES } from '../data/masterExamplesDictionary';

export interface DictionaryEntry {
  term?: string;
  wordFr?: string;
  word?: string;
  definitionPt?: string;
  definitionFr?: string;
  difficultyLevel?: string;
  isDictionaryTerm?: boolean;
  examples?: Array<{
    level: string;
    fr: string;
    pt: string;
  }>;
  aliases?: string[];
  inflections?: string[];
  [key: string]: any;
}

export type DictionaryInput = DictionaryEntry | string;

export interface ParsedToken {
  /** The actual text segment from the sentence */
  text: string;
  /** Whether this token matches a vocabulary entry or clickable word */
  isMatch: boolean;
  /** Whether this token is a featured dictionary term from the lesson's vocabulary dictionary */
  isDictionaryTerm?: boolean;
  /** The canonical term that was matched (e.g., 'prendre du recul') */
  matchedTerm?: string;
  /** The associated dictionary entry, if matched */
  dictionaryEntry?: DictionaryEntry;
}

/**
 * Helper to extract the canonical French term from a dictionary entry.
 */
export function getTermFromEntry(entry: DictionaryInput): string {
  if (typeof entry === 'string') {
    return entry;
  }
  return entry.term || entry.wordFr || entry.word || '';
}

/**
 * Normalizes a term string for case-insensitive and whitespace-invariant lookups.
 */
function normalizeTermKey(str: string): string {
  return str
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

/**
 * Builds a regex pattern string for a dictionary term, supporting French accents,
 * apostrophes, and multi-word spacing.
 */
function buildTermPattern(term: string): string {
  const trimmed = term.trim();
  if (!trimmed) return '';

  const escaped = trimmed
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\s+/g, '\\s+');

  // Use Unicode property escapes for word boundary checking
  const firstCharIsWord = /^[\p{L}\p{N}_]/u.test(trimmed);
  const lastCharIsWord = /[\p{L}\p{N}_]$/u.test(trimmed);

  const startBoundary = firstCharIsWord ? '(?<=^|[^\\p{L}\\p{N}_\'’\\-])' : '';
  const endBoundary = lastCharIsWord ? '(?=$|[^\\p{L}\\p{N}_\'’\\-])' : '';

  return `${startBoundary}${escaped}${endBoundary}`;
}

/**
 * Parses a French sentence or paragraph and identifies vocabulary items
 * (both single words and multi-word expressions like 'prendre du recul'),
 * returning an array of tokens marked for UI highlighting.
 *
 * Multi-word expressions are prioritized over individual substrings.
 */
/**
 * Generates 4 progressive CEFR examples (A1, A2-B1, B2, C1-C2) for any French word
 * using STRICT PRACTICAL EVERYDAY CONTEXTS (travel, cafes, city life, dialogues, narrative).
 * ABSOLUTELY NO META-LANGUAGE ("Je vois le mot", "Le mot X s'utilise", "L'usage de...").
 */
export function generatePracticalExamplesForWord(word: string, ptDefinition?: string): Array<{
  level: string;
  fr: string;
  pt: string;
}> {
  const clean = word.trim();
  const lower = clean.toLowerCase();

  // 0.5 Master curated examples (offline, preenchido cidade por cidade).
  // Prioridade máxima: se o autor já curou os 4 exemplos desta palavra no
  // dicionário mestre, usa-os antes de qualquer fallback gerado.
  const foldForMaster = (s: string): string =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[’ʼ‘]/g, "'")
      .trim();
  const masterKeys = [
    foldForMaster(lower),
    foldForMaster(lower.replace(/s$/, '')),
    foldForMaster(lower.replace(/es$/, '')),
    foldForMaster(lower.replace(/ée?s$/, 'é')),
    foldForMaster(lower.replace(/euse$/, 'eux')),
  ];
  for (const mk of masterKeys) {
    const masterCurated = MASTER_EXAMPLES[mk];
    if (masterCurated && masterCurated.length === 4) {
      return masterCurated;
    }
  }

  // 0. Curated practical examples for high-frequency vocabulary items
  const SPECIFIC_WORD_EXAMPLES: Record<string, Array<{ level: string; fr: string; pt: string }>> = {
    très: [
      {
        level: 'A1',
        fr: "Il fait très beau aujourd'hui.",
        pt: "Está muito bonito hoje.",
      },
      {
        level: 'A2-B1',
        fr: "Ce café est très bon et pas cher.",
        pt: "Este café é muito bom e não é caro.",
      },
      {
        level: 'B2',
        fr: "Je suis très heureux de vous rencontrer enfin.",
        pt: "Estou muito feliz em finalmente reencontrá-lo.",
      },
      {
        level: 'C1-C2',
        fr: "C'est une nuance très importante dans cette analyse.",
        pt: "É uma nuance muito importante nesta análise.",
      },
    ],
    et: [
      {
        level: 'A1',
        fr: "Je prends un café et un croissant.",
        pt: "Eu pego um café e um croissant.",
      },
      {
        level: 'A2-B1',
        fr: "Nous avons visité le musée et nous sommes allés au parc.",
        pt: "Nós visitamos o museu e fomos ao parque.",
      },
      {
        level: 'B2',
        fr: "Le train part à l'heure et le voyage se déroule confortablement.",
        pt: "O trem parte no horário e a viagem acontece confortavelmente.",
      },
      {
        level: 'C1-C2',
        fr: "Cette approche est à la fois rigoureuse et novatrice.",
        pt: "Esta abordagem é ao mesmo tempo rigorosa e inovadora.",
      },
    ],
    est: [
      {
        level: 'A1',
        fr: "Le musée est ouvert tous les jours.",
        pt: "O museu está aberto todos os dias.",
      },
      {
        level: 'A2-B1',
        fr: "Cette station de métro est près de mon hôtel.",
        pt: "Esta estação de metrô fica perto do meu hotel.",
      },
      {
        level: 'B2',
        fr: "Il est important de vérifier les horaires avant de partir.",
        pt: "É importante verificar os horários antes de sair.",
      },
      {
        level: 'C1-C2',
        fr: "Cette transformation urbaine est remarquable par son ampleur.",
        pt: "Esta transformação urbana é notável por sua magnitude.",
      },
    ],
    sont: [
      {
        level: 'A1',
        fr: "Les tables sont prêtes sur la terrasse.",
        pt: "As mesas estão prontas no terraço.",
      },
      {
        level: 'A2-B1',
        fr: "Les tickets sont disponibles à la machine automatique.",
        pt: "Os bilhetes estão disponíveis na máquina automática.",
      },
      {
        level: 'B2',
        fr: "Les règles de transport sont affichées à l'entrée de la station.",
        pt: "As regras de transporte estão afixadas na entrada da estação.",
      },
      {
        level: 'C1-C2',
        fr: "Ces nuances culturelles sont essentielles pour comprendre la langue.",
        pt: "Estas nuances culturais são essenciais para compreender a língua.",
      },
    ],
    dans: [
      {
        level: 'A1',
        fr: "Il y a beaucoup de monde dans le train.",
        pt: "Há muita gente no trem.",
      },
      {
        level: 'A2-B1',
        fr: "Nous nous retrouvons dans dix minutes devant la gare.",
        pt: "Nós nos encontramos em dez minutos na frente da estação.",
      },
      {
        level: 'B2',
        fr: "Dans ce contexte, il vaut mieux réserver à l'avance.",
        pt: "Neste contexto, é melhor reservar com antecedência.",
      },
      {
        level: 'C1-C2',
        fr: "Cette tradition s'inscrit profondément dans l'histoire de la capitale.",
        pt: "Esta tradição inscreve-se profundamente na história da capital.",
      },
    ],
    sur: [
      {
        level: 'A1',
        fr: "Le livre est sur la table.",
        pt: "O livro está sobre a mesa.",
      },
      {
        level: 'A2-B1',
        fr: "Regardez les indications sur le panneau bleu.",
        pt: "Olhe as indicações no painel azul.",
      },
      {
        level: 'B2',
        fr: "Nous avons une vue magnifique sur le fleuve depuis notre chambre.",
        pt: "Nós temos uma vista magnífica sobre o rio a partir do nosso quarto.",
      },
      {
        level: 'C1-C2',
        fr: "Cette étude porte sur l'évolution des transports urbains au XXIe siècle.",
        pt: "Este estudo trata da evolução dos transportes urbanos no século XXI.",
      },
    ],
    pour: [
      {
        level: 'A1',
        fr: "C'est un billet pour Paris.",
        pt: "É uma passagem para Paris.",
      },
      {
        level: 'A2-B1',
        fr: "Je prends le métro pour aller au travail.",
        pt: "Eu pego o metrô para ir ao trabalho.",
      },
      {
        level: 'B2',
        fr: "Pour réussir cet examen, il faut pratiquer régulièrement.",
        pt: "Para passar neste exame, é preciso praticar regularmente.",
      },
      {
        level: 'C1-C2',
        fr: "Les mesures prises sont essentielles pour garantir la fluidité du trafic.",
        pt: "As medidas tomadas são essenciais para garantir a fluidez do tráfego.",
      },
    ],
    avec: [
      {
        level: 'A1',
        fr: "Je voudrais un café avec du lait.",
        pt: "Eu gostaria de um café com leite.",
      },
      {
        level: 'A2-B1',
        fr: "Il voyage toujours avec un petit sac à dos.",
        pt: "Ele viaja sempre com uma mochila pequena.",
      },
      {
        level: 'B2',
        fr: "Nous avons résolu la situation avec patience et courtoisie.",
        pt: "Nós resolvemos a situação com paciência e cortesia.",
      },
      {
        level: 'C1-C2',
        fr: "Cette décision a été accueillie avec un enthousiasme unanime.",
        pt: "Esta decisão foi recebida com um entusiasmo unânime.",
      },
    ],
    bien: [
      {
        level: 'A1',
        fr: "Tout va très bien, merci !",
        pt: "Tudo vai muito bem, obrigado!",
      },
      {
        level: 'A2-B1',
        fr: "Le train est bien arrivé à l'heure prévue.",
        pt: "O trem chegou bem no horário previsto.",
      },
      {
        level: 'B2',
        fr: "Il est bien connu que ce quartier offre une excellente gastronomie.",
        pt: "É bem conhecido que este bairro oferece uma excelente gastronomia.",
      },
      {
        level: 'C1-C2',
        fr: "Bien que la tâche soit complexe, le résultat s'avère remarquable.",
        pt: "Embora a tarefa seja complexa, o resultado mostra-se notável.",
      },
    ],
    bon: [
      {
        level: 'A1',
        fr: "C'est un bon croissant frais.",
        pt: "É um bom croissant fresco.",
      },
      {
        level: 'A2-B1',
        fr: "Nous avons passé un bon moment à la terrasse du café.",
        pt: "Nós passamos um bom momento no terraço do café.",
      },
      {
        level: 'B2',
        fr: "Il est toujours bon d'avoir un plan de la ville sur soi.",
        pt: "É sempre bom ter um mapa da cidade consigo.",
      },
      {
        level: 'C1-C2',
        fr: "Faire preuve de bon sens est primordial dans toute négociation.",
        pt: "Demonstrar bom senso é primordial em qualquer negociação.",
      },
    ],
    bonne: [
      {
        level: 'A1',
        fr: "Passez une bonne journée !",
        pt: "Tenha um bom dia!",
      },
      {
        level: 'A2-B1',
        fr: "C'est la bonne direction pour la Tour Eiffel.",
        pt: "É a direção certa para a Torre Eiffel.",
      },
      {
        level: 'B2',
        fr: "Une bonne préparation permet d'éviter les imprévus en voyage.",
        pt: "Uma boa preparação permite evitar imprevistos em viagem.",
      },
      {
        level: 'C1-C2',
        fr: "Cette initiative constitue une bonne illustration du savoir-faire local.",
        pt: "Esta iniciativa constitui uma boa ilustração do saber-fazer local.",
      },
    ],
    beau: [
      {
        level: 'A1',
        fr: "Il fait beau aujourd'hui.",
        pt: "O tempo está bonito hoje.",
      },
      {
        level: 'A2-B1',
        fr: "C'est un très beau quartier à visiter à pied.",
        pt: "É um bairro muito bonito para visitar a pé.",
      },
      {
        level: 'B2',
        fr: "Le musée abrite un beau panorama de la peinture du XIXe siècle.",
        pt: "O museu abriga um belo panorama da pintura do século XIX.",
      },
      {
        level: 'C1-C2',
        fr: "Ce monument offre un bel exemple d'harmonie architecturale.",
        pt: "Este monumento oferece um belo exemplo de harmonia arquitetônica.",
      },
    ],
    station: [
      {
        level: 'A1',
        fr: "La station est au bout de la rue.",
        pt: "A estação fica no final da rua.",
      },
      {
        level: 'A2-B1',
        fr: "À quelle station devons-nous descendre ?",
        pt: "Em qual estação devemos descer?",
      },
      {
        level: 'B2',
        fr: "Cette station est directement reliée aux principales lignes de train.",
        pt: "Esta estação está diretamente conectada às principais linhas de trem.",
      },
      {
        level: 'C1-C2',
        fr: "La rénovation de cette station historique a permis de fluidifier le trafic des passagers.",
        pt: "A renovação desta estação histórica permitiu otimizar o fluxo de passageiros.",
      },
    ],
    métro: [
      {
        level: 'A1',
        fr: "Je prends le métro tous les jours.",
        pt: "Eu pego o metrô todos os dias.",
      },
      {
        level: 'A2-B1',
        fr: "Le métro parisien est rapide et facile à utiliser.",
        pt: "O metrô parisiense é rápido e fácil de usar.",
      },
      {
        level: 'B2',
        fr: "Grâce au réseau de métro, on peut traverser la ville en moins d'une heure.",
        pt: "Graças à rede de metrô, pode-se atravessar a cidade em menos de uma hora.",
      },
      {
        level: 'C1-C2',
        fr: "Le développement du métro a transformé durablement la mobilité urbaine.",
        pt: "O desenvolvimento do metrô transformou de forma duradoura a mobilidade urbana.",
      },
    ],
    train: [
      {
        level: 'A1',
        fr: "Le train arrive à la gare.",
        pt: "O trem chega à estação.",
      },
      {
        level: 'A2-B1',
        fr: "Nous avons pris le train direct pour Lyon.",
        pt: "Nós pegamos o trem direto para Lyon.",
      },
      {
        level: 'B2',
        fr: "Voyager en train permet de profiter confortablement des paysages.",
        pt: "Viajar de trem permite aproveitar confortavelmente as paisagens.",
      },
      {
        level: 'C1-C2',
        fr: "Le réseau de trains à grande vitesse représente un atout majeur pour les liaisons régionales.",
        pt: "A rede de trens de alta velocidade representa um trunfo importante para as conexões regionais.",
      },
    ],
    billet: [
      {
        level: 'A1',
        fr: "J'ai acheté un billet pour le musée.",
        pt: "Eu comprei um bilhete para o museu.",
      },
      {
        level: 'A2-B1',
        fr: "Vous pouvez valider votre billet avant de monter dans le train.",
        pt: "Você pode validar seu bilhete antes de subir no trem.",
      },
      {
        level: 'B2',
        fr: "Il est recommandé de réserver son billet en ligne pour éviter l'attente.",
        pt: "É recomendável reservar seu bilhete online para evitar a espera.",
      },
      {
        level: 'C1-C2',
        fr: "La dématérialisation du billet a considérablement simplifié les procédures d'accès.",
        pt: "A desmaterialização do bilhete simplificou consideravelmente os procedimentos de acesso.",
      },
    ],
    ticket: [
      {
        level: 'A1',
        fr: "Où puis-je acheter un ticket ?",
        pt: "Onde posso comprar um bilhete?",
      },
      {
        level: 'A2-B1',
        fr: "Gardez votre ticket jusqu'à la sortie de la station.",
        pt: "Guarde seu bilhete até a saída da estação.",
      },
      {
        level: 'B2',
        fr: "Le ticket à l'unité est disponible sur toutes les machines automatiques.",
        pt: "O bilhete avulso está disponível em todas as máquinas automáticas.",
      },
      {
        level: 'C1-C2',
        fr: "L'introduction du ticket numérique s'inscrit dans une politique de modernisation urbaine.",
        pt: "A introdução do bilhete digital insere-se em uma política de modernização urbana.",
      },
    ],
    guichet: [
      {
        level: 'A1',
        fr: "Le guichet est à droite de l'entrée.",
        pt: "O guichê fica à direita da entrada.",
      },
      {
        level: 'A2-B1',
        fr: "Je demande des renseignements au guichet de la gare.",
        pt: "Eu peço informações no guichê da estação.",
      },
      {
        level: 'B2',
        fr: "L'employé au guichet nous a conseillé le meilleur itinéraire.",
        pt: "O funcionário no guichê nos aconselhou o melhor itinerário.",
      },
      {
        level: 'C1-C2',
        fr: "Malgré l'essor des bornes automatiques, le guichet conserve un rôle essentiel d'accueil et d'assistance.",
        pt: "Apesar do crescimento dos terminais automáticos, o guichê conserva um papel essencial de acolhimento e assistência.",
      },
    ],
    ligne: [
      {
        level: 'A1',
        fr: "C'est la ligne 1 du métro.",
        pt: "É a linha 1 do metrô.",
      },
      {
        level: 'A2-B1',
        fr: "Nous changeons de ligne à la prochaine station.",
        pt: "Nós trocamos de linha na próxima estação.",
      },
      {
        level: 'B2',
        fr: "Cette ligne dessert directement le centre historique et les gares principales.",
        pt: "Esta linha atende diretamente o centro histórico e as estações principais.",
      },
      {
        level: 'C1-C2',
        fr: "l'automatisation complète de cette ligne a permis d'optimiser la fréquence des rames.",
        pt: "A automatização completa desta linha permitiu otimizar a frequência dos vagões.",
      },
    ],
    direction: [
      {
        level: 'A1',
        fr: "Nous allons en direction de la gare.",
        pt: "Nós vamos em direção à estação.",
      },
      {
        level: 'A2-B1',
        fr: "Vérifiez bien la direction avant de monter sur le quai.",
        pt: "Verifique bem a direção antes de subir na plataforma.",
      },
      {
        level: 'B2',
        fr: "Prenez la ligne 6 en direction de la Tour Eiffel pour admirer la vue sur le fleuve.",
        pt: "Pegue a linha 6 em direção à Torre Eiffel para admirar a vista do rio.",
      },
      {
        level: 'C1-C2',
        fr: "La signalétique indique clairement la direction à suivre pour chaque correspondance.",
        pt: "A sinalização indica claramente a direção a seguir para cada conexão.",
      },
    ],
    café: [
      {
        level: 'A1',
        fr: "Je prends un café chaud ce matin.",
        pt: "Eu tomo um café quente esta manhã.",
      },
      {
        level: 'A2-B1',
        fr: "Nous avons rendez-vous au café en face de la place.",
        pt: "Nós temos um encontro no café em frente à praça.",
      },
      {
        level: 'B2',
        fr: "S'asseoir à la terrasse d'un café est une tradition populaire pour observer la ville.",
        pt: "Sentar-se ao terraço de um café é uma tradição popular para observar a cidade.",
      },
      {
        level: 'C1-C2',
        fr: "Les cafés historiques ont longtemps servi de lieu de rencontre aux littérateurs et philosophes.",
        pt: "Os cafés históricos serviram durante muito tempo de ponto de encontro para literatos e filósofos.",
      },
    ],
    terrasse: [
      {
        level: 'A1',
        fr: "Il y a une table libre en terrasse.",
        pt: "Há uma mesa livre no terraço.",
      },
      {
        level: 'A2-B1',
        fr: "Nous aimons prendre le petit-déjeuner en terrasse au soleil.",
        pt: "Nós gostamos de tomar o café da manhã no terraço ao sol.",
      },
      {
        level: 'B2',
        fr: "Dès les premiers jours de printemps, les terrasses se remplissent rapidement.",
        pt: "Desde os primeiros dias de primavera, os terraços se enchem rapidamente.",
      },
      {
        level: 'C1-C2',
        fr: "La terrasse parisienne constitue un espace de convivialité emblématique du paysage urbain.",
        pt: "O terraço parisiense constitui um espaço de convívio emblemático da paisagem urbana.",
      },
    ],
    croissant: [
      {
        level: 'A1',
        fr: "Ce croissant est chaud et croustillant.",
        pt: "Este croissant está quente e crocante.",
      },
      {
        level: 'A2-B1',
        fr: "J'ai acheté un croissant au beurre à la boulangerie.",
        pt: "Eu comprei um croissant na manteiga na padaria.",
      },
      {
        level: 'B2',
        fr: "Un vrai croissant artisanal se reconnaît à sa texture feuilletée et légère.",
        pt: "Um verdadeiro croissant artesanal é reconhecido por sua textura folhada e leve.",
      },
      {
        level: 'C1-C2',
        fr: "Le croissant est devenu un symbole incontournable de la gastronomie matinale française.",
        pt: "O croissant tornou-se um símbolo indispensável da gastronomia matinal francesa.",
      },
    ],
    serveur: [
      {
        level: 'A1',
        fr: "Le serveur apporte le menu.",
        pt: "O garçom traz o cardápio.",
      },
      {
        level: 'A2-B1',
        fr: "Nous avons demandé l'addition au serveur.",
        pt: "Nós pedimos a conta ao garçom.",
      },
      {
        level: 'B2',
        fr: "Le serveur nous a conseillé le plat du jour avec courtoisie.",
        pt: "O garçom nos aconselhou o prato do dia com cortesia.",
      },
      {
        level: 'C1-C2',
        fr: "La profession de serveur requiert un sens aigu de l'organisation et de l'accueil.",
        pt: "A profissão de garçom requer um senso aguçado de organização e hospitalidade.",
      },
    ],
    commande: [
      {
        level: 'A1',
        fr: "Voici votre commande, monsieur.",
        pt: "Aqui está seu pedido, senhor.",
      },
      {
        level: 'A2-B1',
        fr: "Nous attendons notre commande de boissons depuis cinq minutes.",
        pt: "Nós estamos esperando nosso pedido de bebidas há cinco minutos.",
      },
      {
        level: 'B2',
        fr: "Vous pouvez modifier votre commande avant la préparation.",
        pt: "Você pode modificar seu pedido antes da preparação.",
      },
      {
        level: 'C1-C2',
        fr: "La gestion rigoureuse de la commande garantit la satisfaction des clients.",
        pt: "A gestão rigorosa do pedido garante a satisfação dos clientes.",
      },
    ],
    promenade: [
      {
        level: 'A1',
        fr: "Nous faisons une promenade dans le parc.",
        pt: "Nós fazemos um passeio no parque.",
      },
      {
        level: 'A2-B1',
        fr: "Une petite promenade à pied est agréable après le déjeuner.",
        pt: "Uma pequena caminhada a pé é agradável depois do almoço.",
      },
      {
        level: 'B2',
        fr: "Cette promenade offre de superbes points de vue sur les monuments.",
        pt: "Este passeio oferece excelentes pontos de vista dos monumentos.",
      },
      {
        level: 'C1-C2',
        fr: "La promenade au bord du fleuve invite à la contemplation de l'architecture historique.",
        pt: "O passeio à beira do rio convida à contemplação da arquitetura histórica.",
      },
    ],
    quartier: [
      {
        level: 'A1',
        fr: "Mon hôtel est dans un quartier calme.",
        pt: "Meu hotel fica em um bairro calmo.",
      },
      {
        level: 'A2-B1',
        fr: "Il y a de nombreux commerces dans ce quartier.",
        pt: "Há muitos comércios neste bairro.",
      },
      {
        level: 'B2',
        fr: "Chaque quartier de la ville possède sa propre identité et son atmosphère.",
        pt: "Cada bairro da cidade possui sua própria identidade e atmosfera.",
      },
      {
        level: 'C1-C2',
        fr: "La réhabilitation urbaine a su préserver le caractère historique du quartier.",
        pt: "A reabilitação urbana soube preservar o caráter histórico do bairro.",
      },
    ],
    acheter: [
      {
        level: 'A1',
        fr: "Je veux acheter un ticket de métro.",
        pt: "Eu quero comprar um bilhete de metrô.",
      },
      {
        level: 'A2-B1',
        fr: "Nous allons acheter des croissants à la boulangerie.",
        pt: "Nós vamos comprar croissants na padaria.",
      },
      {
        level: 'B2',
        fr: "Il est conseillé d'acheter ses billets à l'avance.",
        pt: "É aconselhável comprar seus bilhetes com antecedência.",
      },
      {
        level: 'C1-C2',
        fr: "Acheter en ligne permet de gagner un temps précieux.",
        pt: "Comprar online permite economizar um tempo precioso.",
      },
    ],
    moi: [
      {
        level: 'A1',
        fr: "C'est pour moi ?",
        pt: "É para mim?",
      },
      {
        level: 'A2-B1',
        fr: "Tu viens au cinéma avec moi ?",
        pt: "Você vem ao cinema comigo?",
      },
      {
        level: 'B2',
        fr: "Selon moi, ce quartier est le plus agréable de Paris.",
        pt: "Na minha opinião, este bairro é o mais agradável de Paris.",
      },
      {
        level: 'C1-C2',
        fr: "Quant à moi, je préfère voyager en train.",
        pt: "Quanto a mim, prefiro viajar de trem.",
      },
    ],
    toi: [
      {
        level: 'A1',
        fr: "C'est pour toi.",
        pt: "É para você.",
      },
      {
        level: 'A2-B1',
        fr: "Je vais au musée avec toi.",
        pt: "Eu vou ao museu com você.",
      },
      {
        level: 'B2',
        fr: "C'est à toi de choisir le restaurant ce soir.",
        pt: "Cabe a você escolher o restaurante hoje à noite.",
      },
      {
        level: 'C1-C2',
        fr: "Cette proposition s'adresse tout particulièrement à toi.",
        pt: "Esta proposta dirige-se muito especialmente a você.",
      },
    ],
    lui: [
      {
        level: 'A1',
        fr: "Je parle avec lui au café.",
        pt: "Eu falo com ele no café.",
      },
      {
        level: 'A2-B1',
        fr: "Je lui demande l'heure dans la station.",
        pt: "Eu lhe pergunto a hora na estação.",
      },
      {
        level: 'B2',
        fr: "Il est important de lui expliquer clairement l'itinéraire.",
        pt: "É importante explicar-lhe claramente o itinerário.",
      },
      {
        level: 'C1-C2',
        fr: "La responsabilité de cette initiative lui incombe entièrement.",
        pt: "A responsabilidade desta initiative cabe inteiramente a ele/ela.",
      },
    ],
    elle: [
      {
        level: 'A1',
        fr: "Elle habite à Paris.",
        pt: "Ela mora em Paris.",
      },
      {
        level: 'A2-B1',
        fr: "Nous partons en voyage avec elle.",
        pt: "Nós vamos viajar com ela.",
      },
      {
        level: 'B2',
        fr: "C'est elle qui a organisé la visite guidée du musée.",
        pt: "Foi ela quem organizou a visita guiada do museu.",
      },
      {
        level: 'C1-C2',
        fr: "Sa contribution atteste du rôle majeur qu'elle a joué dans ce projet.",
        pt: "Sua contribuição atesta o papel maior que ela desempenhou neste projeto.",
      },
    ],
    nous: [
      {
        level: 'A1',
        fr: "Nous visitons le musée ce matin.",
        pt: "Nós visitamos o museu esta manhã.",
      },
      {
        level: 'A2-B1',
        fr: "Le guide nous montre le chemin vers la station.",
        pt: "O guia nos mostra o caminho para a estação.",
      },
      {
        level: 'B2',
        fr: "Cette promenade nous permet de découvrir le patrimoine historique.",
        pt: "Este passeio nos permite descobrir o patrimônio histórico.",
      },
      {
        level: 'C1-C2',
        fr: "Il nous appartient de préserver cette tradition culturelle.",
        pt: "Cabe a nós preservar esta tradição cultural.",
      },
    ],
    vous: [
      {
        level: 'A1',
        fr: "Vous parlez français ?",
        pt: "Você fala francês? / Vocês falam francês?",
      },
      {
        level: 'A2-B1',
        fr: "Je vous remercie pour votre aide à la gare.",
        pt: "Eu agradeço a você/vocês por sua ajuda na estação.",
      },
      {
        level: 'B2',
        fr: "Si vous le souhaitez, nous pouvons réserver une table sur la terrasse.",
        pt: "Se o senhor/a senhora desejar, podemos reservar uma mesa no terraço.",
      },
      {
        level: 'C1-C2',
        fr: "Je vous prie d'agréer l'expression de ma considération distinguée.",
        pt: "Peço-lhe que aceite a expressão de minha distinta consideração.",
      },
    ],
    eux: [
      {
        level: 'A1',
        fr: "Je vais au restaurant avec eux.",
        pt: "Eu vou ao restaurante com eles.",
      },
      {
        level: 'A2-B1',
        fr: "C'est chez eux que nous avons dîné hier soir.",
        pt: "Foi na casa deles que nós jantamos ontem à noite.",
      },
      {
        level: 'B2',
        fr: "L'organisation du voyage dépend en grande partie d'eux.",
        pt: "A organização da viagem depende em grande parte deles.",
      },
      {
        level: 'C1-C2',
        fr: "Face à cette situation complexe, la décision finale revient à eux.",
        pt: "Diante desta situação complexa, a decisão final cabe a eles.",
      },
    ],
    elles: [
      {
        level: 'A1',
        fr: "Elles prennent le train pour Paris.",
        pt: "Elas pegam o trem para Paris.",
      },
      {
        level: 'A2-B1',
        fr: "Je vais au cinéma avec elles ce soir.",
        pt: "Eu vou ao cinema com elas hoje à noite.",
      },
      {
        level: 'B2',
        fr: "Ce sont elles qui ont recommandé ce charmant café.",
        pt: "Foram elas que recomendaram este charmoso café.",
      },
      {
        level: 'C1-C2',
        fr: "Leur expertise fait d'elles des références incontournables dans leur domaine.",
        pt: "Sua expertise faz delas referências indispensáveis em sua área.",
      },
    ],
    je: [
      {
        level: 'A1',
        fr: "Je voudrais un café, s'il vous plaît.",
        pt: "Eu gostaria de um café, por favor.",
      },
      {
        level: 'A2-B1',
        fr: "Je prends le métro pour aller au musée du Louvre.",
        pt: "Eu pego o metrô para ir ao museu do Louvre.",
      },
      {
        level: 'B2',
        fr: "Je pense que ce quartier est idéal pour se promener à pied.",
        pt: "Eu acho que este bairro é ideal para passear a pé.",
      },
      {
        level: 'C1-C2',
        fr: "Je reste convaincu que la richesse culturelle de la ville est unique.",
        pt: "Continuo convencido de que a riqueza cultural da cidade é única.",
      },
    ],
    tu: [
      {
        level: 'A1',
        fr: "Tu viens avec moi au café ?",
        pt: "Você vem comigo ao café?",
      },
      {
        level: 'A2-B1',
        fr: "Tu sais quelle ligne de métro va au Marais ?",
        pt: "Você sabe qual linha de metrô vai para o Marais?",
      },
      {
        level: 'B2',
        fr: "Si tu veux éviter la foule, visite l'exposition tôt le matin.",
        pt: "Se você quer evitar a multidão, visite a exposição de manhã cedo.",
      },
      {
        level: 'C1-C2',
        fr: "Tu conviendras que cette architecture témoigne d'un art de vivre raffiné.",
        pt: "Você concordará que esta arquitetura testemunha uma arte de viver refinada.",
      },
    ],
    il: [
      {
        level: 'A1',
        fr: "Il fait beau aujourd'hui à Paris.",
        pt: "O tempo está bonito hoje em Paris.",
      },
      {
        level: 'A2-B1',
        fr: "Il arrive à la gare dans dix minutes.",
        pt: "Ele chega à estação em dez minutos.",
      },
      {
        level: 'B2',
        fr: "Il est indispensable de vérifier les horaires des trains avant de partir.",
        pt: "É indispensável verificar os horários dos trens antes de partir.",
      },
      {
        level: 'C1-C2',
        fr: "Il convient de souligner l'élégance intemporelle des boulevards parisiens.",
        pt: "Convém ressaltar a elegância atemporal dos bulevares parisienses.",
      },
    ],
    on: [
      {
        level: 'A1',
        fr: "On va prendre un café ?",
        pt: "A gente vai tomar um café? / Vamos tomar um café?",
      },
      {
        level: 'A2-B1',
        fr: "Ici, on peut acheter des tickets de métro à la machine.",
        pt: "Aqui, a gente pode comprar bilhetes de metrô na máquina.",
      },
      {
        level: 'B2',
        fr: "Dans ce quartier, on découvre des musées fascinants à chaque coin de rue.",
        pt: "Neste bairro, descobre-se museus fascinantes a cada esquina.",
      },
      {
        level: 'C1-C2',
        fr: "On observe une harmonie remarquable entre architecture moderne et patrimoine historique.",
        pt: "Observa-se uma harmonia notável entre arquitetura moderna e patrimônio histórico.",
      },
    ],
    ils: [
      {
        level: 'A1',
        fr: "Ils sont au restaurant.",
        pt: "Eles estão no restaurante.",
      },
      {
        level: 'A2-B1',
        fr: "Ils visitent le musée et se promènent dans le parc.",
        pt: "Eles visitam o museu e passeiam no parque.",
      },
      {
        level: 'B2',
        fr: "Ils ont réservé leurs billets à l'avance pour éviter la file d'attente.",
        pt: "Eles reservaram seus bilhetes com antecedência para evitar a fila de espera.",
      },
      {
        level: 'C1-C2',
        fr: "Ils contribuent activement au dynamisme culturel de la capitale.",
        pt: "Eles contribuem ativamente para o dinamismo cultural da capital.",
      },
    ],
    magnifique: [
      {
        level: 'A1',
        fr: "Cette église est magnifique.",
        pt: "Esta igreja é magnífica.",
      },
      {
        level: 'A2-B1',
        fr: "Nous avons une vue magnifique sur la ville.",
        pt: "Nós temos uma vista magnífica da cidade.",
      },
      {
        level: 'B2',
        fr: "Ce monument historique offre un décor magnifique au coucher du soleil.",
        pt: "Este monumento histórico oferece um cenário magnífico ao pôr do sol.",
      },
      {
        level: 'C1-C2',
        fr: "La restauration de cet édifice révèle un équilibre architectural magnifique.",
        pt: "A restauração deste edifício revela um equilíbrio arquitetônico magnífico.",
      },
    ],
    animée: [
      {
        level: 'A1',
        fr: "La rue est très animée aujourd'hui.",
        pt: "A rua está muito animada hoje.",
      },
      {
        level: 'A2-B1',
        fr: "J'aime la terrasse animée de ce café parisien.",
        pt: "Eu gosto do terraço animado deste café parisiense.",
      },
      {
        level: 'B2',
        fr: "Le Marais est réputé pour son atmosphère particulièrement animée.",
        pt: "O Marais é famoso por sua atmosfera particularmente movimentada.",
      },
      {
        level: 'C1-C2',
        fr: "Cette place animée constitue le cœur vibrant de la vie culturelle locale.",
        pt: "Esta praça animada constitui o coração vibrante da vida cultural local.",
      },
    ],
    historique: [
      {
        level: 'A1',
        fr: "C'est un monument historique de Paris.",
        pt: "É um monumento histórico de Paris.",
      },
      {
        level: 'A2-B1',
        fr: "Nous nous promenons dans le centre historique de la ville.",
        pt: "Nós passeamos no centro histórico da cidade.",
      },
      {
        level: 'B2',
        fr: "Chaque rue de ce quartier possède un riche patrimoine historique.",
        pt: "Cada rua deste bairro possui um rico patrimônio histórico.",
      },
      {
        level: 'C1-C2',
        fr: "La préservation du caractère historique s'accorde parfaitement avec la modernisation urbaine.",
        pt: "A preservação do caráter histórico combina perfeitamente com a modernização urbana.",
      },
    ],
    arrivée: [
      {
        level: 'A1',
        fr: "L'arrivée du train est dans cinq minutes.",
        pt: "A chegada do trem é em cinco minutos.",
      },
      {
        level: 'A2-B1',
        fr: "Dès mon arrivée à la gare, j'ai acheté un ticket de métro.",
        pt: "Assim que cheguei à estação, comprei um bilhete de metrô.",
      },
      {
        level: 'B2',
        fr: "À votre arrivée à l'hôtel, le réceptionniste vous donnera un plan de la ville.",
        pt: "Na sua chegada ao hotel, o recepcionista lhe dará um mapa da cidade.",
      },
      {
        level: 'C1-C2',
        fr: "L'arrivée des nouvelles lignes de transport a profondément transformé la mobilité urbaine.",
        pt: "A chegada das novas linhas de transporte transformou profundamente a mobilidade urbana.",
      },
    ],
    gare: [
      {
        level: 'A1',
        fr: "Le train est à la gare.",
        pt: "O trem está na estação.",
      },
      {
        level: 'A2-B1',
        fr: "Nous avons rendez-vous devant la gare principale.",
        pt: "Nós temos um encontro na frente da estação principal.",
      },
      {
        level: 'B2',
        fr: "L'architecture de cette gare historique impressionne de nombreux voyageurs.",
        pt: "A arquitetura desta estação histórica impressiona muitos viajantes.",
      },
      {
        level: 'C1-C2',
        fr: "La gare centrale constitue un pôle intermodal stratégique pour la région.",
        pt: "A estação central constitui um polo intermodal estratégico para a região.",
      },
    ],
    parler: [
      {
        level: 'A1',
        fr: "J'aime parler français.",
        pt: "Eu gosto de falar francês.",
      },
      {
        level: 'A2-B1',
        fr: "Nous allons parler avec le guide du musée.",
        pt: "Nós vamos falar com o guia do museu.",
      },
      {
        level: 'B2',
        fr: "Parler une langue étrangère demande de la pratique régulière.",
        pt: "Falar uma língua estrangeira exige prática regular.",
      },
      {
        level: 'C1-C2',
        fr: "L'art de parler en public nécessite une excellente maîtrise rhétorique.",
        pt: "A arte de falar em público requer um excelente domínio retórico.",
      },
    ],
    marcher: [
      {
        level: 'A1',
        fr: "J'aime marcher dans Paris.",
        pt: "Eu gosto de caminhar em Paris.",
      },
      {
        level: 'A2-B1',
        fr: "Il est agréable de marcher au bord de la Seine.",
        pt: "É agradável caminhar na margem do Sena.",
      },
      {
        level: 'B2',
        fr: "Marcher chaque jour est excellent pour découvrir les secrets d'une ville.",
        pt: "Caminhar todos os dias é excelente para descobrir os segredos de uma cidade.",
      },
      {
        level: 'C1-C2',
        fr: "Flâner et marcher sans but précis est une tradition littéraire parisienne.",
        pt: "Passear e caminhar sem um objetivo preciso é uma tradição literária parisiense.",
      },
    ],
    découvrir: [
      {
        level: 'A1',
        fr: "Je veux découvrir la ville.",
        pt: "Eu quero descobrir a cidade.",
      },
      {
        level: 'A2-B1',
        fr: "Nous allons découvrir un nouveau restaurant ce soir.",
        pt: "Nós vamos descobrir um novo restaurante hoje à noite.",
      },
      {
        level: 'B2',
        fr: "Cette promenade permet de découvrir des monuments insolites.",
        pt: "Este passeio permite descobrir monumentos inusitados.",
      },
      {
        level: 'C1-C2',
        fr: "Découvrir l'histoire architecturale d'un quartier enrichit l'expérience culturelle.",
        pt: "Descobrir a história arquitetônica de um bairro enriquece a experiência cultural.",
      },
    ],
    manger: [
      {
        level: 'A1',
        fr: "Je vais manger un croissant.",
        pt: "Eu vou comer um croissant.",
      },
      {
        level: 'A2-B1',
        fr: "Nous voulons manger dans une brasserie traditionnelle.",
        pt: "Nós queremos comer em uma brasserie tradicional.",
      },
      {
        level: 'B2',
        fr: "Bien manger fait partie intégrante de la culture française.",
        pt: "Comer bem faz parte integrante da cultura francesa.",
      },
      {
        level: 'C1-C2',
        fr: "L'art de manger et la gastronomie symbolisent le patrimoine culturel français.",
        pt: "A arte de comer e a gastronomia simbolizam o patrimônio cultural francês.",
      },
    ],
    visiter: [
      {
        level: 'A1',
        fr: "Je veux visiter le musée.",
        pt: "Eu quero visitar o museu.",
      },
      {
        level: 'A2-B1',
        fr: "Nous allons visiter le Marais cet après-midi.",
        pt: "Nós vamos visitar o Marais esta tarde.",
      },
      {
        level: 'B2',
        fr: "Il est recommandé de visiter les expositions temporaires tôt le matin.",
        pt: "É recomendável visitar as exposições temporárias de manhã cedo.",
      },
      {
        level: 'C1-C2',
        fr: "Visiter ces lieux emblématiques offre une perspective unique sur le passé.",
        pt: "Visitar estes lugares emblemáticos oferece uma perspectiva única sobre o passado.",
      },
    ],
    aimer: [
      {
        level: 'A1',
        fr: "J'aime le café noir.",
        pt: "Eu gosto de café preto.",
      },
      {
        level: 'A2-B1',
        fr: "J'aime beaucoup me promener dans les jardins parisiens.",
        pt: "Eu gosto muito de passear nos jardins parisienses.",
      },
      {
        level: 'B2',
        fr: "Aimer une ville, c'est aussi apprécier ses recoins les moins touristiques.",
        pt: "Gostar de uma cidade é também apreciar seus cantos menos turísticos.",
      },
      {
        level: 'C1-C2',
        fr: "L'art d'aimer et la littérature partagent une longue histoire à Paris.",
        pt: "A arte de amar e a literatura compartilham uma longa história em Paris.",
      },
    ],
    aller: [
      {
        level: 'A1',
        fr: "Je veux aller à Paris.",
        pt: "Eu quero ir a Paris.",
      },
      {
        level: 'A2-B1',
        fr: "Nous pouvons aller ensemble à la gare.",
        pt: "Nós podemos ir juntos para a estação.",
      },
      {
        level: 'B2',
        fr: "Pour aller au musée, le moyen le plus simple est de prendre le métro.",
        pt: "Para ir ao museu, o meio mais simples é pegar o metrô.",
      },
      {
        level: 'C1-C2',
        fr: "Aller à la rencontre des artisans locaux permet de saisir l'âme du quartier.",
        pt: "Ir ao encontro dos artesãos locais permite captar a alma do bairro.",
      },
    ],
    venir: [
      {
        level: 'A1',
        fr: "Tu veux venir avec moi ?",
        pt: "Você quer vir comigo?",
      },
      {
        level: 'A2-B1',
        fr: "Elle doit venir à la gare vers quinze heures.",
        pt: "Ela deve vir para a estação por volta das quinze horas.",
      },
      {
        level: 'B2',
        fr: "Venir en train reste la solution la plus pratique et écologique.",
        pt: "Vir de trem continua sendo a solução mais prática e ecológica.",
      },
      {
        level: 'C1-C2',
        fr: "De nombreux penseurs aimaient venir discuter dans ces salons littéraires.",
        pt: "Muitos pensadores gostavam de vir discutir nestes salões literários.",
      },
    ],
    partir: [
      {
        level: 'A1',
        fr: "Je vais partir à dix heures.",
        pt: "Eu vou partir às dez horas.",
      },
      {
        level: 'A2-B1',
        fr: "Nous devons partir tôt pour éviter la circulation.",
        pt: "Nós devemos partir cedo para evitar o trânsito.",
      },
      {
        level: 'B2',
        fr: "Avant de partir, assurez-vous d'avoir bien validé votre billet.",
        pt: "Antes de partir, certifique-se de ter validado bem seu bilhete.",
      },
      {
        level: 'C1-C2',
        fr: "Partir à la découverte du patrimoine inconnu est un véritable voyage initiatique.",
        pt: "Partir à descoberta do patrimônio desconhecido é uma verdadeira viagem iniciática.",
      },
    ],
    faire: [
      {
        level: 'A1',
        fr: "Que veux-tu faire ?",
        pt: "O que você quer fazer?",
      },
      {
        level: 'A2-B1',
        fr: "Nous allons faire une promenade dans le parc.",
        pt: "Nós vamos fazer um passeio no parque.",
      },
      {
        level: 'B2',
        fr: "Il est essentiel de faire attention aux horaires en soirée.",
        pt: "É essencial prestar atenção nos horários à noite.",
      },
      {
        level: 'C1-C2',
        fr: "Faire preuve de curiosité permet de mieux appréhender la richesse culturelle de la ville.",
        pt: "Demonstrar curiosidade permite compreender melhor a riqueza cultural da cidade.",
      },
    ],
    dire: [
      {
        level: 'A1',
        fr: "Je veux te dire merci.",
        pt: "Eu quero te dizer obrigado.",
      },
      {
        level: 'A2-B1',
        fr: "Comment dire ce mot en français ?",
        pt: "Como dizer esta palavra em francês?",
      },
      {
        level: 'B2',
        fr: "Il est juste de dire que ce quartier a beaucoup évolué.",
        pt: "É justo dizer que este bairro evoluiu muito.",
      },
      {
        level: 'C1-C2',
        fr: "Dire d'une œuvre qu'elle est intemporelle témoigne de son impact durable sur l'histoire.",
        pt: "Dizer de uma obra que ela é atemporal atesta seu impacto duradouro na história.",
      },
    ],
    voir: [
      {
        level: 'A1',
        fr: "Je veux voir la Tour Eiffel.",
        pt: "Eu quero ver a Torre Eiffel.",
      },
      {
        level: 'A2-B1',
        fr: "Nous pouvons voir le musée depuis notre hôtel.",
        pt: "Nós podemos ver o museu do nosso hotel.",
      },
      {
        level: 'B2',
        fr: "Il est conseillé de voir cette exposition avant sa fermeture.",
        pt: "É aconselhável ver esta exposição antes do seu encerramento.",
      },
      {
        level: 'C1-C2',
        fr: "Voir et analyser cette architecture permet de mieux comprendre le XIXe siècle.",
        pt: "Ver e analisar esta arquitetura permite compreender melhor o século XIX.",
      },
    ],
    recommandée: [
      { level: 'A1', fr: "C'est une adresse très recommandée à Paris.", pt: "É um endereço muito recomendado em Paris." },
      { level: 'A2-B1', fr: "Cette librairie est particulièrement recommandée par les habitants du quartier.", pt: "Esta livraria é particularmente recomendada pelos moradores do bairro." },
      { level: 'B2', fr: "Dans les guides de voyage, cette visite reste vivement recommandée.", pt: "Nos guias de viagem, esta visita continua altamente recomendada." },
      { level: 'C1-C2', fr: "L'authenticité de ce lieu historique en fait une étape unanimement recommandée par les connaisseurs.", pt: "A autenticidade deste local histórico faz dele uma parada unanimemente recomendada pelos conhecedores." },
    ],
    recommandé: [
      { level: 'A1', fr: "C'est un restaurant très recommandé dans le centre.", pt: "É um restaurante muito recomendado no centro." },
      { level: 'A2-B1', fr: "Ce musée est particulièrement recommandé pour les familles.", pt: "Este museu é particularmente recomendado para famílias." },
      { level: 'B2', fr: "Il est fortement recommandé de réserver son billet à l'avance.", pt: "É fortemente recomendado reservar seu bilhete com antecedência." },
      { level: 'C1-C2', fr: "Cet itinéraire architectural est unanimement recommandé par l'office du tourisme.", pt: "Este itinerário arquitetônico é unanimemente recomendado pelo escritório de turismo." },
    ],
    recommandés: [
      { level: 'A1', fr: "Voici deux restaurants recommandés.", pt: "Aqui estão dois restaurantes recomendados." },
      { level: 'A2-B1', fr: "Ces hôtels sont recommandés par le guide officiel.", pt: "Estes hotéis são recomendados pelo guia oficial." },
      { level: 'B2', fr: "Les trajets en train sont souvent recommandés pour éviter le trafic.", pt: "Os trajetos de trem são frequentemente recomendados para evitar o trânsito." },
      { level: 'C1-C2', fr: "Ces établissements sont particulièrement recommandés pour leur excellence gastronomique.", pt: "Estes estabelecimentos são particularmente recomendados por sua excelência gastronômica." },
    ],
    recommander: [
      { level: 'A1', fr: "Je veux recommander ce café.", pt: "Eu quero recomendar este café." },
      { level: 'A2-B1', fr: "Pouvez-vous me recommander un bon restaurant ?", pt: "Você pode me recomendar um bom restaurante?" },
      { level: 'B2', fr: "Le guide n'hésite pas à recommander cette visite historique.", pt: "O guia não hesita em recomendar esta visita histórica." },
      { level: 'C1-C2', fr: "Il convient de recommander cet itinéraire aux voyageurs en quête d'authenticité.", pt: "Convém recomendar este itinerário aos viajantes em busca de autenticidade." },
    ],
    librairie: [
      { level: 'A1', fr: "Je visite une petite librairie à Paris.", pt: "Eu visito uma pequena livraria em Paris." },
      { level: 'A2-B1', fr: "Cette ancienne librairie propose de nombreux livres historiques.", pt: "Esta antiga livraria oferece muitos livros históricos." },
      { level: 'B2', fr: "Flâner dans une librairie de quartier permet de découvrir des trésors littéraires.", pt: "Passear em uma livraria de bairro permite descobrir tesouros literários." },
      { level: 'C1-C2', fr: "La librairie indépendante demeure un sanctuaire intellectuel indispensable au Quartier Latin.", pt: "A livraria independente permanece um santuário intelectual indispensável ao Bairro Latino." },
    ],
    odeur: [
      { level: 'A1', fr: "J'aime l'odeur du café chaud.", pt: "Eu gosto do cheiro do café quente." },
      { level: 'A2-B1', fr: "L'odeur des croissants frais embaume toute la rue le matin.", pt: "O cheiro de croissants frescos perfuma toda a rua de manhã." },
      { level: 'B2', fr: "L'odeur caractéristique du vieux papier rappelle l'histoire des bibliothèques.", pt: "O cheiro característico do papel velho lembra a história das bibliotecas." },
      { level: 'C1-C2', fr: "Cette odeur boisée et subtile évoque instantanément l'atmosphère feutrée des salons parisiens.", pt: "Este aroma amadeirado e sutil evoca instantaneamente a atmosfera acolhedora dos salões parisienses." },
    ],
    bois: [
      { level: 'A1', fr: "La table est en bois.", pt: "A mesa é de madeira." },
      { level: 'A2-B1', fr: "Les étagères en bois de la librairie sont très anciennes.", pt: "As prateleiras de madeira da livraria são muito antigas." },
      { level: 'B2', fr: "Le travail du bois dans cette cathédrale témoigne d'un savoir-faire artisanal.", pt: "O trabalho em madeira nesta catedral testemunha um savoir-faire artesanal." },
      { level: 'C1-C2', fr: "Les boiseries d'époque confèrent à ce salon une noblesse architecturale incomparable.", pt: "Os painéis de madeira de época conferem a este salão uma nobreza arquitetônica incomparável." },
    ],
    ami: [
      { level: 'A1', fr: "Je voyage avec un ami.", pt: "Eu viajo com um amigo." },
      { level: 'A2-B1', fr: "Un ami parisien m'a conseillé de visiter ce quartier.", pt: "Um amigo parisiense me aconselhou a visitar este bairro." },
      { level: 'B2', fr: "Retrouver un ami à la terrasse d'un café est un véritable rituel en France.", pt: "Reencontrar um amigo no terraço de um café é um verdadeiro ritual na França." },
      { level: 'C1-C2', fr: "Le dialogue sincère avec un ami de longue date enrichit notre perception du voyage.", pt: "O diálogo sincero com um amigo de longa data enriquece nossa percepção da viagem." },
    ],
    amie: [
      { level: 'A1', fr: "Je retrouve une amie à Paris.", pt: "Eu reencentro uma amiga em Paris." },
      { level: 'A2-B1', fr: "Mon amie habite près de la gare centrale.", pt: "Minha amiga mora perto da estação central." },
      { level: 'B2', fr: "Une amie passionnée d'art m'a fait découvrir cette galerie cachée.", pt: "Uma amiga apaixonada por arte me fez descobrir esta galeria escondida." },
      { level: 'C1-C2', fr: "Les conseils avisés d'une amie parisienne s'avèrent inestimables pour éviter les sentiers battus.", pt: "Os conselhos sábios de uma amiga parisiense mostram-se inestimáveis para evitar os caminhos triviais." },
    ],
    ancienne: [
      { level: 'A1', fr: "C'est une ancienne église.", pt: "É uma igreja antiga." },
      { level: 'A2-B1', fr: "Nous avons visité une ancienne librairie dans le centre-ville.", pt: "Nós visitamos uma antiga livraria no centro da cidade." },
      { level: 'B2', fr: "L'ancienne gare a été transformée en un musée d'art prestigieux.", pt: "A antiga estação foi transformada em um museu de arte prestigiado." },
      { level: 'C1-C2', fr: "La réhabilitation de cette ancienne architecture industrielle illustre la modernisation urbaine.", pt: "A reabilitação desta antiga arquitetura industrial ilustra a modernização urbana." },
    ],
    ancien: [
      { level: 'A1', fr: "C'est un ancien pont.", pt: "É uma ponte antiga." },
      { level: 'A2-B1', fr: "Ce quartier abrite un ancien marché très animé.", pt: "Este bairro abriga um antigo mercado muito animado." },
      { level: 'B2', fr: "Le charme du Paris ancien attire chaque année des milliers de passionnés.", pt: "O charme do Paris antigo atrai todos os anos milhares de apaixonados." },
      { level: 'C1-C2', fr: "La préservation du patrimoine ancien constitue un enjeu majeur pour l'identité européenne.", pt: "A preservação do patrimônio antigo constitui um desafio importante para a identidade europeia." },
    ],
    fleuve: [
      { level: 'A1', fr: "Le fleuve traverse la ville.", pt: "O rio atravessa a cidade." },
      { level: 'A2-B1', fr: "Nous marchons le long du fleuve pour admirer les ponts.", pt: "Nós caminhamos ao longo do rio para admirar as pontes." },
      { level: 'B2', fr: "Les rives du fleuve offrent un cadre idéal pour la promenade vespérale.", pt: "As margens do rio oferecem um cenário ideal para o passeio noturno." },
      { level: 'C1-C2', fr: "Le fleuve joue un rôle historique déterminant dans le développement commercial et urbain de la capitale.", pt: "O rio desempenha um papel histórico determinante no desenvolvimento comercial e urbano da capital." },
    ],
    seine: [
      { level: 'A1', fr: "La Seine coule à Paris.", pt: "O Sena corre em Paris." },
      { level: 'A2-B1', fr: "Nous faisons une promenade en bateau sur la Seine.", pt: "Nós fazemos um passeio de barco no Sena." },
      { level: 'B2', fr: "Les bouquinistes au bord de la Seine incarnent l'esprit littéraire de Paris.", pt: "Os alfarrabistas na margem do Sena encarnam o espírito literário de Paris." },
      { level: 'C1-C2', fr: "Les quais de la Seine sont inscrits au patrimoine mondial en raison de leur harmonie architecturale.", pt: "As margens do Sena são inscritas no patrimônio mundial por causa da sua harmonia arquitetônica." },
    ],
    entre: [
      { level: 'A1', fr: "J'entre dans la boutique.", pt: "Eu entro na loja." },
      { level: 'A2-B1', fr: "Quand j'entre dans le café, le serveur me salue immédiatement.", pt: "Quando entro no café, o garçom me cumprimenta imediatamente." },
      { level: 'B2', fr: "En entrant dans ce musée, on ressent le calme de l'histoire.", pt: "Ao entrar neste museu, sente-se a calma da história." },
      { level: 'C1-C2', fr: "Dès que l'on entre dans cette bibliothèque patrimoniale, le silence solennel s'impose.", pt: "Assim que se entra nesta biblioteca patrimonial, o silêncio solene se impõe." },
    ],
    entrer: [
      { level: 'A1', fr: "Je veux entrer ici.", pt: "Eu quero entrar aqui." },
      { level: 'A2-B1', fr: "Vous pouvez entrer dans la salle d'attente de la gare.", pt: "Você pode entrar na sala de espera da estação." },
      { level: 'B2', fr: "Avant d'entrer dans le monument, veuillez présenter votre billet.", pt: "Antes de entrar no monumento, por favor apresente seu bilhete." },
      { level: 'C1-C2', fr: "Entrer dans ce cercle littéraire exigeait autrefois une recommandation formelle.", pt: "Entrar neste círculo literário exigia antigamente uma recomendação formal." },
    ],
    marche: [
      { level: 'A1', fr: "Je marche dans la rue.", pt: "Eu caminho na rua." },
      { level: 'A2-B1', fr: "Elle marche tous les matins le long du fleuve.", pt: "Ela caminha todas as manhãs ao longo do rio." },
      { level: 'B2', fr: "Pendant notre séjour, on marche plusieurs kilomètres pour découvrir la ville.", pt: "Durante nossa estadia, caminha-se vários quilômetros para descobrir a cidade." },
      { level: 'C1-C2', fr: "La marche à pied reste le moyen le plus enrichissant d'explorer l'architecture parisienne.", pt: "A caminhada a pé continua sendo o meio mais enriquecedor de explorar a arquitetura parisiense." },
    ],
    cherche: [
      { level: 'A1', fr: "Je cherche la gare.", pt: "Eu procuro a estação." },
      { level: 'A2-B1', fr: "Je cherche un bon restaurant dans ce quartier.", pt: "Eu procuro um bom restaurante neste bairro." },
      { level: 'B2', fr: "Le voyageur cherche toujours à comprendre l'histoire des lieux qu'il visite.", pt: "O viajante procura sempre compreender a história dos lugares que visita." },
      { level: 'C1-C2', fr: "L'écrivain cherche continuellement à saisir les nuances subtiles de l'âme humaine.", pt: "O escritor busca continuamente captar as nuances sutis da alma humana." },
    ],
    chercher: [
      { level: 'A1', fr: "Je vais chercher mon billet.", pt: "Eu vou buscar meu bilhete." },
      { level: 'A2-B1', fr: "Nous devons chercher notre chemin sur la carte.", pt: "Nós devemos procurar nosso caminho no mapa." },
      { level: 'B2', fr: "Il est inutile de chercher plus loin : cette brasserie est la meilleure.", pt: "É inútil procurar mais longe: esta brasserie é a melhor." },
      { level: 'C1-C2', fr: "Chercher l'authenticité culturelle nécessite de s'éloigner des circuits touristiques traditionnels.", pt: "Buscar a autenticidade cultural requer afastar-se dos circuitos turísticos tradicionais." },
    ],
    vieux: [
      { level: 'A1', fr: "C'est un vieux livre.", pt: "É um livro velho." },
      { level: 'A2-B1', fr: "Nous adorons les vieux quartiers de la ville.", pt: "Nós adoramos os bairros antigos da cidade." },
      { level: 'B2', fr: "La restauration des vieux bâtiments permet de préserver l'identité urbaine.", pt: "A restauração dos prédios antigos permite preservar a identidade urbana." },
      { level: 'C1-C2', fr: "Le contraste entre le vieux Paris et l'architecture contemporaine illustre le dialogue des époques.", pt: "O contraste entre o velho Paris e a arquitetura contemporânea ilustra o diálogo das épocas." },
    ],
    vieille: [
      { level: 'A1', fr: "C'est une vieille rue.", pt: "É uma rua velha/antiga." },
      { level: 'A2-B1', fr: "Cette vieille librairie a beaucoup de charme.", pt: "Esta velha livraria tem muito charme." },
      { level: 'B2', fr: "Dans la vieille ville, les places animées regorgent d'histoire.", pt: "Na cidade velha, as praças animadas estão repletas de história." },
      { level: 'C1-C2', fr: "La conservation de cette vieille demeure seigneuriale témoigne de l'héritage médiéval de la région.", pt: "A conservação desta velha residência senhorial testemunha a herança medieval da região." },
    ],
    livre: [
      { level: 'A1', fr: "Je lis un bon livre.", pt: "Eu leio um bom livro." },
      { level: 'A2-B1', fr: "J'ai acheté ce livre de français dans une librairie.", pt: "Eu comprei este livro de francês em uma livraria." },
      { level: 'B2', fr: "Chaque livre d'histoire offre une nouvelle perspective sur le passé.", pt: "Cada livro de história oferece uma nova perspectiva sobre o passado." },
      { level: 'C1-C2', fr: "Le livre imprimé conserve une valeur intellectuelle et sensorielle que le numérique ne saurait remplacer.", pt: "O livro impresso conserva um valor intelectual e sensorial que o digital não saberia substituir." },
    ],
    livres: [
      { level: 'A1', fr: "Il y a beaucoup de livres ici.", pt: "Há muitos livros aqui." },
      { level: 'A2-B1', fr: "J'aime collectionner les vieux livres d'art.", pt: "Eu gosto de colecionar livros velhos de arte." },
      { level: 'B2', fr: "Ces livres anciens racontent l'évolution architecturale de la capitale.", pt: "Estes livros antigos contam a evolução arquitetônica da capital." },
      { level: 'C1-C2', fr: "La préservation des livres rares dans les bibliothèques nationales constitue un devoir de mémoire.", pt: "A preservação dos livros raros nas bibliotecas nacionais constitui um dever de memória." },
    ],
    rencontre: [
      { level: 'A1', fr: "Je rencontre mon ami aujourd'hui.", pt: "Eu encontro meu amigo hoje." },
      { level: 'A2-B1', fr: "Chaque rencontre en voyage apporte une nouvelle expérience.", pt: "Cada encontro em viagem traz uma nova experiência." },
      { level: 'B2', fr: "Cette rencontre imprévue dans un café a enrichi notre séjour à Paris.", pt: "Este encontro imprevisto em um café enriqueceu nossa estadia em Paris." },
      { level: 'C1-C2', fr: "La rencontre des cultures constitue le véritable catalyseur de l'ouverture d'esprit.", pt: "O encontro das culturas constitui o verdadeiro catalisador da abertura de espírito." },
    ],
    libraire: [
      { level: 'A1', fr: "Le libraire est très gentil.", pt: "O livreiro é muito gentil." },
      { level: 'A2-B1', fr: "La libraire me conseille un excellent roman français.", pt: "A livreira me aconselha um excelente romance francês." },
      { level: 'B2', fr: "Discuter avec un libraire passionné permet d'orienter ses lectures culturelles.", pt: "Discutir com um livreiro apaixonado permite orientar suas leituras culturais." },
      { level: 'C1-C2', fr: "Le rôle du libraire indépendant est fondamental pour le rayonnement de la pensée critique.", pt: "O papel do livreiro independente é fundamental para a difusão do pensamento crítico." },
    ],
    sympathique: [
      { level: 'A1', fr: "Le serveur est très sympathique.", pt: "O garçom é muito simpático." },
      { level: 'A2-B1', fr: "Nous avons rencontré des habitants très sympathiques dans le quartier.", pt: "Nós conhecemos moradores muito simpáticos no bairro." },
      { level: 'B2', fr: "Une ambiance sympathique et chaleureuse règne dans ce petit bistrot.", pt: "Um ambiente simpático e acolhedor reina neste pequeno bistrô." },
      { level: 'C1-C2', fr: "L'accueil sympathique des commerçants locaux contribue grandement à l'attractivité de la ville.", pt: "A acolhida simpática dos comerciantes locais contribui grandemente para a atratividade da cidade." },
    ],
    passionnée: [
      { level: 'A1', fr: "Elle est passionnée de lecture.", pt: "Ela é apaixonada por leitura." },
      { level: 'A2-B1', fr: "C'est une guide passionnée par l'histoire de sa ville.", pt: "É uma guia apaixonada pela história de sua cidade." },
      { level: 'B2', fr: "Une discussion passionnée sur la littérature a animé notre soirée.", pt: "Uma discussão apaixonada sobre literatura animou nossa noite." },
      { level: 'C1-C2', fr: "La recherche d'authenticité reste animée par une curiosité intellectuelle toujours passionnée.", pt: "A busca por autenticidade continua animada por uma curiosidade intelectual sempre apaixonada." },
    ],
    histoire: [
      { level: 'A1', fr: "J'aime cette histoire.", pt: "Eu gosto desta história." },
      { level: 'A2-B1', fr: "Ce musée raconte l'histoire fascinante de Paris.", pt: "Este museu conta a história fascinante de Paris." },
      { level: 'B2', fr: "Connaître l'histoire d'un monument permet d'en apprécier chaque détail.", pt: "Conhecer a história de um monumento permite apreciar cada detalhe." },
      { level: 'C1-C2', fr: "L'histoire culturelle et politique de la France façonne sa diplomatie et son art de vivre contemporains.", pt: "A história cultural e política da França molda sua diplomacia e sua arte de viver contemporâneas." },
    ],
    carte: [
      { level: 'A1', fr: "Je regarde la carte.", pt: "Eu olho o mapa/cardápio." },
      { level: 'A2-B1', fr: "Le serveur nous apporte la carte des menus et des boissons.", pt: "O garçom nos traz o cardápio dos menus e das bebidas." },
      { level: 'B2', fr: "Consulter une carte géographique permet de mieux planifier son itinéraire.", pt: "Consultar um mapa geográfico permite planejar melhor seu itinerário." },
      { level: 'C1-C2', fr: "Cette carte ancienne illustre l'évolution topographique de Paris au XIXe siècle.", pt: "Este mapa antigo ilustra a evolução topográfica de Paris no século XIX." },
    ],
    table: [
      { level: 'A1', fr: "La carte est sur la table.", pt: "O mapa está sobre a mesa." },
      { level: 'A2-B1', fr: "Nous réservons une table en terrasse pour le déjeuner.", pt: "Nós reservamos uma mesa no terraço para o almoço." },
      { level: 'B2', fr: "Partager un repas autour d'une table conviviale est au cœur de la tradition française.", pt: "Compartilhar uma refeição ao redor de uma mesa de convívio está no coração da tradição francesa." },
      { level: 'C1-C2', fr: "Les arts de la table constituent une expression raffinée du patrimoine gastronomique national.", pt: "As artes da mesa constituem uma expressão refinada do patrimônio gastronômico nacional." },
    ],
    ville: [
      { level: 'A1', fr: "Paris est une grande ville.", pt: "Paris é uma grande cidade." },
      { level: 'A2-B1', fr: "Nous nous promenons dans le centre de la ville.", pt: "Nós passeamos no centro da cidade." },
      { level: 'B2', fr: "Chaque ville française possède une architecture et une histoire singulières.", pt: "Cada cidade francesa possui uma arquitetura e uma história singulares." },
      { level: 'C1-C2', fr: "L'aménagement urbain de la ville reflète les transformations économiques et sociales des siècles passés.", pt: "O planejamento urbano da cidade reflete as transformações econômicas e sociais dos séculos passados." },
    ],
    villes: [
      { level: 'A1', fr: "Je visite deux villes en France.", pt: "Eu visito duas cidades na França." },
      { level: 'A2-B1', fr: "Les grandes villes sont bien connectées par le train.", pt: "As grandes cidades são bem conectadas pelo trem." },
      { level: 'B2', fr: "Découvrir plusieurs villes permet de comprendre la diversité régionale du pays.", pt: "Descobrir várias cidades permite compreender a diversidade regional do país." },
      { level: 'C1-C2', fr: "Le maillage culturel des villes françaises favorise la préservation du patrimoine sur l'ensemble du territoire.", pt: "A rede cultural das cidades francesas favorece a preservação do patrimônio em todo o território." },
    ],
    rue: [
      { level: 'A1', fr: "Le café est dans cette rue.", pt: "O café fica nesta rua." },
      { level: 'A2-B1', fr: "Nous marchons dans une rue piétonne très animée.", pt: "Nós caminhamos em uma rua de pedestres muito animada." },
      { level: 'B2', fr: "L'architecture des façades le long de la rue est typiquement haussmannienne.", pt: "A arquitetura das fachadas ao longo da rua é tipicamente haussmanniana." },
      { level: 'C1-C2', fr: "La rue parisienne constitue un théâtre à ciel ouvert où s'observe la sociabilité urbaine.", pt: "A rua parisiense constitui um teatro a céu aberto onde se observa a sociabilidade urbana." },
    ],
    cathédrale: [
      { level: 'A1', fr: "La cathédrale est très grande.", pt: "A catedral é muito grande." },
      { level: 'A2-B1', fr: "Nous visitons la cathédrale gothique au centre-ville.", pt: "Nós visitamos a catedral gótica no centro da cidade." },
      { level: 'B2', fr: "Les vitraux de la cathédrale diffusent une lumière impressionnante.", pt: "Os vitrais da catedral difundem uma luz impressionante." },
      { level: 'C1-C2', fr: "L'édification de cette cathédrale constitue un sommet de l'art médiéval et de l'ingénierie gothique.", pt: "A edificação desta catedral constitui um ápice da arte medieval e da engenharia gótica." },
    ],
  };

  // 1. Direct match in SPECIFIC_WORD_EXAMPLES
  if (SPECIFIC_WORD_EXAMPLES[lower]) {
    return SPECIFIC_WORD_EXAMPLES[lower];
  }

  // 2. Lemma / stripped ending match for adjectives, plurals, and feminine forms
  const singular = lower.replace(/s$/i, '');
  if (SPECIFIC_WORD_EXAMPLES[singular]) {
    return SPECIFIC_WORD_EXAMPLES[singular];
  }
  const mascE = lower.replace(/ées?$/i, 'é');
  if (SPECIFIC_WORD_EXAMPLES[mascE]) {
    return SPECIFIC_WORD_EXAMPLES[mascE];
  }
  const noE = lower.replace(/es?$/i, '');
  if (SPECIFIC_WORD_EXAMPLES[noE]) {
    return SPECIFIC_WORD_EXAMPLES[noE];
  }

  // 3. DYNAMIC AUTHENTIC FRENCH EXAMPLES GENERATOR
  // Since we don't have exact contextual examples for this specific word, we return empty
  // to avoid showing incorrect or robotic grammatical structures like "J'aime beaucoup acoustique".
  return [];
}
interface CommonWordData {
  pt: string;
  level: string;
  fr?: string;
  examples?: Array<{
    level: string;
    fr: string;
    pt: string;
  }>;
}

const COMMON_FRENCH_WORDS_DICTIONARY: Record<string, CommonWordData> = {
  je: {
    pt: 'Eu (pronome pessoal sujeito de 1ª pessoa do singular)',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: "Je m'appelle Thomas et j'habite à Lyon.", pt: 'Eu me chamo Thomas e moro em Lyon.' },
      { level: 'A2-B1', fr: "Je voudrais commander un café et un croissant chaud, s'il vous plaît.", pt: 'Gostaria de pedir um café e um croissant quente, por favor.' },
      { level: 'B2', fr: "Je pense que ce quartier historique offre la meilleure atmosphère de la ville.", pt: 'Eu acho que este bairro histórico oferece a melhor atmosfera da cidade.' },
      { level: 'C1-C2', fr: "Je reste convaincu que flâner dans les rues parisienses enrichit notre vision du monde.", pt: 'Continuo convencido de que passear pelas ruas parisienses enriquece nossa visão de mundo.' },
    ],
  },
  suis: {
    pt: 'Sou / estou (verbo être no presente do indicativo)',
    level: 'A1 (Iniciante)',
    fr: 'Verbe être – 1re personne du singulier',
    examples: [
      { level: 'A1', fr: 'Je suis au café avec mes amis.', pt: 'Eu estou no café com meus amigos.' },
      { level: 'A2-B1', fr: 'Je suis prêt pour partir à la découverte du musée du Louvre.', pt: 'Eu estou pronto para ir descobrir o museu do Louvre.' },
      { level: 'B2', fr: "Je suis particulièrement heureux d'avoir trouvé une terrasse ensoleillée.", pt: 'Eu estou particularmente feliz por ter encontrado um terraço ensolarado.' },
      { level: 'C1-C2', fr: "Je suis fasciné par l'harmonie architecturale qu'offrent les grands boulevards haussmanniens.", pt: 'Eu sou fascinado pela harmonia arquitetônica que oferecem os grandes bulevares haussmannianos.' },
    ],
  },
  enfin: {
    pt: 'Finalmente / por fim (advérbio que indica conclusão ou alívio)',
    level: 'A2 (Básico)',
    fr: 'Adverbe de temps et de conclusion',
    examples: [
      {
        level: 'A1',
        fr: 'Enfin ! Le train arrive au quai.',
        pt: 'Finalmente! O trem está chegando na plataforma.',
      },
      {
        level: 'A2-B1',
        fr: 'Je suis très fatigué, mais enfin, nous avons réussi.',
        pt: 'Estou muito cansado, mas enfim, nós conseguimos.',
      },
      {
        level: 'B2',
        fr: 'Après de longues recherches, ils ont enfin trouvé une solution adaptée.',
        pt: 'Após longas pesquisas, eles finalmente encontraram uma solução adequada.',
      },
      {
        level: 'C1-C2',
        fr: 'Sa voix, enfin libérée de tout doute, résonna dans la grande salle.',
        pt: 'Sua voz, finalmente libertada de qualquer dúvida, ressoou no grande salão.',
      },
    ],
  },
  arrivé: {
    pt: 'Chegado / cheguei (verbo arriver no particípio passado)',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Je suis arrivé à la gare de Paris hier matin.', pt: 'Eu cheguei à estação de Paris ontem de manhã.' },
      { level: 'A2-B1', fr: 'Dès que nous sommes arrivés au café, le serveur nous a accueillis.', pt: 'Assim que chegamos ao café, o garçom nos acolheu.' },
      { level: 'B2', fr: "Une fois arrivé dans le Marais, j'ai tout de suite admiré les façades.", pt: 'Uma vez chegado ao Marais, eu admirei imediatamente as fachadas.' },
      { level: 'C1-C2', fr: "À peine arrivé dans la capitale, le voyageur fut séduit par l'effervescence culturelle.", pt: 'Mal chegado na capital, o viajante foi seduzido pela efervescência cultural.' },
    ],
  },
  arrivée: {
    pt: 'Chegada / cheguei (verbo arriver no feminino)',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Elle est arrivée à Paris avec sa valise.', pt: 'Ela chegou a Paris com sua mala.' },
      { level: 'A2-B1', fr: 'Après son arrivée à la gare, elle a pris le métro vers le centre.', pt: 'Após sua chegada na estação, ela pegou o metrô para o centro.' },
      { level: 'B2', fr: "Dès son arrivée dans le quartier, elle a cherché une terrasse calme.", pt: 'Desde sua chegada ao bairro, ela procurou um terraço calmo.' },
      { level: 'C1-C2', fr: "L'arrivée automnale confère aux boulevards une lumière particulièrement poétique.", pt: 'A chegada outonal confere aos bulevares uma luz particularmente poética.' },
    ],
  },
  à: { pt: 'A / em / para (preposição de lugar, tempo ou direção)', level: 'A1 (Iniciante)' },
  paris: {
    pt: 'Paris (capital da França e centro cultural europeu)',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Paris est la capitale de la France.', pt: 'Paris é a capital da França.' },
      { level: 'A2-B1', fr: 'Nous allons passer trois jours à Paris pour visiter les musées.', pt: 'Nós vamos passar três dias em Paris para visitar os museus.' },
      { level: 'B2', fr: "Vivre à Paris permet d'accéder facilement à une offre culturelle exceptionnelle.", pt: 'Morar em Paris permite acessar facilmente uma oferta cultural excepcional.' },
      { level: 'C1-C2', fr: 'Au fil des siècles, Paris a su préserver son patrimoine tout en se modernisant.', pt: 'Ao longo dos séculos, Paris soube preservar seu patrimônio modernizando-se ao mesmo tempo.' },
    ],
  },
  ce: { pt: 'Este / esse (adjetivo demonstrativo masculino singular)', level: 'A1 (Iniciante)' },
  cette: { pt: 'Esta / essa (adjetivo demonstrativo feminino singular)', level: 'A1 (Iniciante)' },
  ces: { pt: 'Estes / estas (adjetivo demonstrativo plural)', level: 'A1 (Iniciante)' },
  matin: {
    pt: 'Manhã (período do dia entre o amanhecer e o meio-dia)',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Je bois un café chaud chaque matin.', pt: 'Eu bebo um café quente toda manhã.' },
      { level: 'A2-B1', fr: 'Ce matin, nous avons visité une boulangerie traditionnelle.', pt: 'Esta manhã, nós visitamos uma padaria tradicional.' },
      { level: 'B2', fr: 'La fraîcheur du matin rend la promenade le long de la Seine très agréable.', pt: 'O frescor da manhã torna o passeio ao longo do Sena muito agradável.' },
      { level: 'C1-C2', fr: "Aux premières heures du matin, la ville s'éveille dans une quiétude inspirante.", pt: 'Nas primeiras horas da manhã, a cidade desperta em uma quietude inspiradora.' },
    ],
  },
  la: { pt: 'A (artigo definido feminino singular ou pronome)', level: 'A1 (Iniciante)' },
  le: { pt: 'O (artigo definido masculino singular ou pronome)', level: 'A1 (Iniciante)' },
  les: { pt: 'Os / as (artigo definido plural)', level: 'A1 (Iniciante)' },
  un: { pt: 'Um (artigo indefinido masculino singular)', level: 'A1 (Iniciante)' },
  une: { pt: 'Uma (artigo indefinido feminino singular)', level: 'A1 (Iniciante)' },
  des: { pt: 'Uns / umas / dos / das (artigo partitivo ou preposição)', level: 'A1 (Iniciante)' },
  du: { pt: 'Do / de o (contração de de + le)', level: 'A1 (Iniciante)' },
  au: { pt: 'Ao / a o (contração de à + le)', level: 'A1 (Iniciante)' },
  aux: { pt: 'Aos / às (contração de à + les)', level: 'A1 (Iniciante)' },
  ville: {
    pt: 'Cidade / centro urbano',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'La ville est grande et animée.', pt: 'A cidade é grande e movimentada.' },
      { level: 'A2-B1', fr: 'Nous aimons nous promener au centre de la ville le soir.', pt: 'Nós gostamos de passear no centro da cidade à noite.' },
      { level: 'B2', fr: "Cette ville offre un équilibre parfait entre histoire ancienne et modernité.", pt: 'Esta cidade oferece um equilíbrio perfeito entre história antiga e modernidade.' },
      { level: 'C1-C2', fr: "L'architecture harmonieuse de la ville témoigne de ses grandes réformes urbaines.", pt: 'A arquitetura harmoniosa da cidade testemunha suas grandes reformas urbanas.' },
    ],
  },
  est: { pt: 'É / está (verbo être na 3ª pessoa do singular do presente)', level: 'A1 (Iniciante)' },
  sont: { pt: 'São / estão (verbo être na 3ª pessoa do plural do presente)', level: 'A1 (Iniciante)' },
  et: { pt: 'E (conjunção aditiva)', level: 'A1 (Iniciante)' },
  ou: { pt: 'Ou (conjunção alternativa)', level: 'A1 (Iniciante)' },
  où: { pt: 'Onde / em que (advérbio ou pronome relativo de lugar/tempo)', level: 'A1 (Iniciante)' },
  très: { pt: 'Muito (advérbio de intensidade)', level: 'A1 (Iniciante)' },
  animée: { pt: 'Animada / movimentada / viva', level: 'A2 (Básico)' },
  animé: { pt: 'Animado / movimentado', level: 'A2 (Básico)' },
  commence: { pt: 'Começo / começa (verbo commencer no presente)', level: 'A1 (Iniciante)' },
  ma: { pt: 'Minha (adjetivo possessivo feminino singular)', level: 'A1 (Iniciante)' },
  mon: { pt: 'Meu (adjetivo possessivo masculino singular)', level: 'A1 (Iniciante)' },
  mes: { pt: 'Meus / minhas (adjetivo possessivo plural)', level: 'A1 (Iniciante)' },
  première: { pt: 'Primeira (adjetivo ordinal feminino)', level: 'A1 (Iniciante)' },
  premier: { pt: 'Primeiro (adjetivo ordinal masculino)', level: 'A1 (Iniciante)' },
  promenade: {
    pt: 'Passeio / caminhada',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Je fais une belle promenade dans le parc.', pt: 'Eu faço um belo passeio no parque.' },
      { level: 'A2-B1', fr: 'Notre promenade dans le quartier historique a duré deux heures.', pt: 'Nosso passeio no bairro histórico durou duas horas.' },
      { level: 'B2', fr: "Une promenade matinale le long de la Seine permet d'admirer la ville dans le calme.", pt: 'Um passeio matinal ao longo do Sena permite admirar a cidade com calma.' },
      { level: 'C1-C2', fr: "Cette promenade littéraire invite à redécouvrir l'héritage artistique parisien.", pt: 'Este passeio literário convida a redescobrir a herança artística parisiense.' },
    ],
  },
  capitale: { pt: 'Capital (cidade principal de um país)', level: 'A1 (Iniciante)' },
  dans: { pt: 'Em / dentro de (preposição de lugar)', level: 'A1 (Iniciante)' },
  marche: { pt: 'Caminho / ando / marcha (verbo marcher no presente)', level: 'A1 (Iniciante)' },
  vers: { pt: 'Em direção a / por volta de (preposição de direção/tempo)', level: 'A2 (Básico)' },
  quartier: {
    pt: 'Bairro / vizinhança urbana',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Mon hôtel est dans un quartier calme.', pt: 'Meu hotel fica em um bairro calmo.' },
      { level: 'A2-B1', fr: 'Ce quartier regorge de petits restaurants et de boulangeries.', pt: 'Este bairro está repleto de pequenos restaurantes e padarias.' },
      { level: 'B2', fr: "Chaque quartier parisien possède son identité et son charme singuliers.", pt: 'Cada bairro parisiense possui sua identidade e seu charme singulares.' },
      { level: 'C1-C2', fr: "L'effervescence culturelle du quartier attire créateurs et passionnés d'histoire.", pt: 'A efervescência cultural do bairro atrai criadores e apaixonados pela história.' },
    ],
  },
  historique: { pt: 'Histórico(a) / relativo à história', level: 'A2 (Básico)' },
  marais: { pt: 'Marais (famoso bairro histórico e cultural do centro de Paris)', level: 'A2 (Básico)' },
  rues: {
    pt: 'Ruas / vias públicas urbanas (plural de rue)',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Les rues de Paris sont très belles.', pt: 'As ruas de Paris são muito bonitas.' },
      { level: 'A2-B1', fr: 'Nous aimons flâner dans les petites rues pavées du centre.', pt: 'Nós gostamos de passear nas pequenas ruas de paralelepípedo do centro.' },
      { level: 'B2', fr: 'Les vieilles rues du Marais racontent des siècles de vie citadine.', pt: 'As antigas ruas do Marais contam séculos de vida urbana.' },
      { level: 'C1-C2', fr: "Au détour des rues étroites, l'architecture révèle des trésors insoupçonnés.", pt: 'Na curva das ruas estreitas, a arquitetura revela tesouros insuspeitos.' },
    ],
  },
  rue: { pt: 'Rua / via pública', level: 'A1 (Iniciante)' },
  charmantes: { pt: 'Encantadoras / charmosas (plural feminino de charmant)', level: 'A2 (Básico)' },
  charmant: { pt: 'Encantador / charmoso', level: 'A2 (Básico)' },
  avec: { pt: 'Com (preposição que indica companhia ou modo)', level: 'A1 (Iniciante)' },
  de: { pt: 'De / da / do (preposição de posse, origem ou partitivo)', level: 'A1 (Iniciante)' },
  vieilles: { pt: 'Velhas / antigas (plural feminino de vieux/vieille)', level: 'A2 (Básico)' },
  vieux: { pt: 'Velho / antigo (adjetivo)', level: 'A2 (Básico)' },
  maisons: { pt: 'Casas / residências (plural de maison)', level: 'A1 (Iniciante)' },
  maison: { pt: 'Casa / residência', level: 'A1 (Iniciante)' },
  petites: { pt: 'Pequenas (plural feminino de petit/petite)', level: 'A1 (Iniciante)' },
  petit: { pt: 'Pequeno', level: 'A1 (Iniciante)' },
  petite: { pt: 'Pequena', level: 'A1 (Iniciante)' },
  boutiques: { pt: 'Lojas / comércios (plural de boutique)', level: 'A1 (Iniciante)' },
  boutique: { pt: 'Loja / pequeno comércio', level: 'A1 (Iniciante)' },
  "j'aime": { pt: 'Eu gosto / eu amo (elisão de je + aime, verbo aimer)', level: 'A1 (Iniciante)' },
  aime: { pt: 'Gosto / ama / gosta (verbo aimer no presente)', level: 'A1 (Iniciante)' },
  voir: { pt: 'Ver / enxergar (verbo de percepção visual)', level: 'A1 (Iniciante)' },
  beauté: { pt: 'Beleza / encanto estético', level: 'A2 (Básico)' },
  architecture: {
    pt: 'Arquitetura / estilo de construção dos edifícios',
    level: 'A2 (Básico)',
    examples: [
      { level: 'A1', fr: "J'aime l'architecture de cette cathédrale.", pt: 'Eu gosto da arquitetura desta catedral.' },
      { level: 'A2-B1', fr: "L'architecture haussmannienne donne à Paris son style élégant.", pt: 'A arquitetura haussmanniana dá a Paris seu estilo elegante.' },
      { level: 'B2', fr: "L'harmonie de l'architecture urbaine impressionne les nouveaux visiteurs.", pt: 'A harmonia da arquitetura urbana impressiona os novos visitantes.' },
      { level: 'C1-C2', fr: "L'évolution de l'architecture parisienne reflète les ambitions politiques et esthétiques des siècles passés.", pt: 'A evolução da arquitetura parisiense reflete as ambições políticas e estéticas dos séculos passados.' },
    ],
  },
  trouve: { pt: 'Encontro / acha (verbo trouver no presente)', level: 'A1 (Iniciante)' },
  café: {
    pt: 'Café (bebida ou estabelecimento tradicional francês)',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Je bois un café chaud le matin.', pt: 'Eu bebo um café quente de manhã.' },
      { level: 'A2-B1', fr: 'Nous nous retrouvons au café de la place pour discuter.', pt: 'Nós nos encontramos no café da praça para conversar.' },
      { level: 'B2', fr: 'Le serveur de ce café parisien connaît les habitudes de tous ses clients.', pt: 'O garçom deste café parisiense conhece os hábitos de todos os seus clientes.' },
      { level: 'C1-C2', fr: "L'institution du café parisien demeure un lieu privilégié d'échanges intellectuels et conviviaux.", pt: 'A instituição do café parisiense permanece um lugar privilegiado de trocas intelectuais e amigáveis.' },
    ],
  },
  typique: { pt: 'Típico(a) / característico(a) do local ou cultura', level: 'A2 (Básico)' },
  terrasse: {
    pt: 'Terraço / área externa de mesas do café ou restaurante',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Il y a une belle terrasse au soleil.', pt: 'Há um belo terraço ao sol.' },
      { level: 'A2-B1', fr: 'Nous préférons nous asseoir en terrasse pour regarder la rue.', pt: 'Nós preferimos nos sentar no terraço para olhar a rua.' },
      { level: 'B2', fr: 'Dès les premiers jours du printemps, les terrasses des bistrots se remplissent.', pt: 'Desde os primeiros dias da primavera, os terraços dos bistrôs se enchem.' },
      { level: 'C1-C2', fr: 'Prendre un verre en terrasse constitue un véritable art de vivre urbain.', pt: 'Tomar uma bebida no terraço constitui uma verdadeira arte de viver urbana.' },
    ],
  },
  agréable: { pt: 'Agradável / prazeroso(a)', level: 'A2 (Básico)' },
  "j'entre": { pt: 'Eu entro (elisão do pronome je + entre, verbo entrer)', level: 'A1 (Iniciante)' },
  entre: { pt: 'Entro / entra (verbo entrer) ou entre (preposição)', level: 'A1 (Iniciante)' },
  dis: { pt: 'Digo / diz (verbo dire no presente)', level: 'A1 (Iniciante)' },
  bonjour: {
    pt: 'Bom dia / olá (saudação cotidiana em francês)',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Bonjour, monsieur ! Comment allez-vous ?', pt: 'Bom dia, senhor! Como vai você?' },
      { level: 'A2-B1', fr: 'En entrant dans la boutique, je dis toujours bonjour au commerçant.', pt: 'Ao entrar na loja, eu sempre digo bom dia ao comerciante.' },
      { level: 'B2', fr: 'Un simple bonjour souriant facilite grandement les échanges quotidiens.', pt: 'Um simples bom dia sorridente facilita muito as interações cotidianas.' },
      { level: 'C1-C2', fr: 'La courtoisie commence par un bonjour sincère et une attitude accueillante.', pt: 'A cortesia começa com um bom dia sincero e uma atitude acolhedora.' },
    ],
  },
  serveur: {
    pt: 'Garçom / atendente de mesa no café ou restaurante',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Le serveur apporte la carte du restaurant.', pt: 'O garçom traz o cardápio do restaurante.' },
      { level: 'A2-B1', fr: "J'appelle le serveur pour demander l'addition après le repas.", pt: 'Eu chamo o garçom para pedir a conta após a refeição.' },
      { level: 'B2', fr: 'Le serveur nous a conseillé un excellent vin pour accompagner le dîner.', pt: 'O garçom nos aconselhou um excelente vinho para acompanhar o jantar.' },
      { level: 'C1-C2', fr: "Avec un professionnalisme exemplaire, le serveur assure un service impeccable malgré l'affluence.", pt: 'Com um profissionalismo exemplar, o garçom garante um serviço impecável apesar da multidão.' },
    ],
  },
  serveuse: { pt: 'Garçonete / atendente de mesa no café ou restaurante', level: 'A1 (Iniciante)' },
  grand: { pt: 'Grande / amplo', level: 'A1 (Iniciante)' },
  grande: { pt: 'Grande / ampla', level: 'A1 (Iniciante)' },
  sourire: { pt: 'Sorriso (expressão facial) ou sorrir (verbo)', level: 'A1 (Iniciante)' },
  choisis: { pt: 'Escolho / escolhes (verbo choisir no presente do indicativo)', level: 'A2 (Básico)' },
  bonne: { pt: 'Boa (adjetivo feminino de bon)', level: 'A1 (Iniciante)' },
  bon: { pt: 'Bom (adjetivo masculino)', level: 'A1 (Iniciante)' },
  table: { pt: 'Mesa / lugar para sentar e consumir', level: 'A1 (Iniciante)' },
  près: { pt: 'Perto de / próximo a (advérbio de lugar)', level: 'A1 (Iniciante)' },
  fenêtre: { pt: 'Janela / abertura com vista para a rua', level: 'A1 (Iniciante)' },
  voudrais: { pt: 'Gostaria / quereria (verbo vouloir no condicional de cortesia)', level: 'A1 (Iniciante)' },
  commander: { pt: 'Pedir / encomendar / comandar (em restaurante ou loja)', level: 'A2 (Básico)' },
  croissant: {
    pt: 'Croissant (pão folhado tradicional francês da manhã)',
    level: 'A1 (Iniciante)',
    examples: [
      { level: 'A1', fr: 'Je mange un croissant au beurre au petit-déjeuner.', pt: 'Eu como um croissant de manteiga no café da manhã.' },
      { level: 'A2-B1', fr: 'Cette boulangerie prépare les meilleurs croissants du quartier.', pt: 'Esta padaria prepara os melhores croissants do bairro.' },
      { level: 'B2', fr: "L'odeur des croissants chauds s'échappait de la boutique à l'aube.", pt: 'O cheiro dos croissants quentes escapava da loja ao amanhecer.' },
      { level: 'C1-C2', fr: "Le feuilletage croustillant d'un croissant artisanal témoigne du savoir-faire pâtissier français.", pt: 'O folhado crocante de um croissant artesanal atesta o saber-fazer dos confeiteiros franceses.' },
    ],
  },
  chaud: { pt: 'Quente / aquecido(a)', level: 'A1 (Iniciante)' },
  chaude: { pt: 'Quente / aquecida', level: 'A1 (Iniciante)' },
  "m'apporte": { pt: 'Me traz / traz para mim (pronome me elidido + apporte, verbo apporter)', level: 'A2 (Básico)' },
  apporte: { pt: 'Traz / trago (verbo apporter - trazer)', level: 'A1 (Iniciante)' },
  commande: { pt: 'Pedido / encomenda / comando', level: 'A2 (Básico)' },
  rapidement: { pt: 'Rapidamente / com rapidez', level: 'A2 (Básico)' },
  prends: { pt: 'Tomo / pego (verbo prendre no presente do indicativo)', level: 'A1 (Iniciante)' },
  temps: { pt: 'Tempo / período / clima', level: 'A1 (Iniciante)' },
  savourer: { pt: 'Saborear / apreciar com calma cada detalhe', level: 'B1 (Intermediário)' },
  moment: { pt: 'Momento / instante especial', level: 'A1 (Iniciante)' },
  parisien: { pt: 'Parisiense (adjetivo masculino - típico de Paris)', level: 'A1 (Iniciante)' },
  parisienne: { pt: 'Parisiense (adjetivo feminino - típica de Paris)', level: 'A1 (Iniciante)' },
  il: { pt: 'Ele (pronome pessoal sujeito de 3ª pessoa)', level: 'A1 (Iniciante)' },
  elle: { pt: 'Ela (pronome pessoal sujeito de 3ª pessoa)', level: 'A1 (Iniciante)' },
  nous: { pt: 'Nós (pronome pessoal sujeito de 1ª pessoa do plural)', level: 'A1 (Iniciante)' },
  vous: { pt: 'Você / vocês / o senhor / a senhora (pronome de cortesia ou plural)', level: 'A1 (Iniciante)' },
  ils: { pt: 'Eles (pronome pessoal sujeito masculino plural)', level: 'A1 (Iniciante)' },
  elles: { pt: 'Elas (pronome pessoal sujeito feminino plural)', level: 'A1 (Iniciante)' },
  haussmann: { pt: 'Haussmann (Georges-Eugène Haussmann, responsável pela reforma urbana de Paris)', level: 'B1 (Intermediário)' },
  napoléon: { pt: 'Napoleão III (imperador francês que ordenou a reforma de Paris)', level: 'B1 (Intermediário)' },
  baron: { pt: 'Barão (título nobiliárquico histórico de Haussmann)', level: 'B1 (Intermediário)' },
  empereur: { pt: 'Imperador (soberano do Segundo Império Francês)', level: 'B1 (Intermediário)' },
  avenue: { pt: 'Avenida (via larga urbana com árvores e edifícios)', level: 'A1 (Iniciante)' },
  boulevard: { pt: 'Boulevard (ampla avenida arborizada tradicional de Paris)', level: 'A2 (Básico)' },
  assainir: { pt: 'Sanear / higienizar / purificar a cidade', level: 'B2 (Avançado)' },
  pour: { pt: 'Para / por / a fim de (preposição de finalidade ou destino)', level: 'A1 (Iniciante)' },
  sur: { pt: 'Sobre / em cima de / acerca de (preposição)', level: 'A1 (Iniciante)' },
  toujours: { pt: 'Sempre / ainda', level: 'A1 (Iniciante)' },
  jamais: { pt: 'Nunca / jamais', level: 'A1 (Iniciante)' },
  bien: { pt: 'Bem / muito bom', level: 'A1 (Iniciante)' },
  plus: { pt: 'Mais / em maior quantidade ou grau', level: 'A1 (Iniciante)' },
  moins: { pt: 'Menos / em menor quantidade ou grau', level: 'A1 (Iniciante)' },
  comme: { pt: 'Como / da mesma forma que / visto que', level: 'A1 (Iniciante)' },
  tout: { pt: 'Tudo / todo / inteiro', level: 'A1 (Iniciante)' },
  tous: { pt: 'Todos', level: 'A1 (Iniciante)' },
  toute: { pt: 'Toda / inteira', level: 'A1 (Iniciante)' },
  toutes: { pt: 'Todas', level: 'A1 (Iniciante)' },
  descends: { pt: 'Desço / desce (verbo descendre no presente - ir para baixo / sair do transporte)', level: 'A1 (Iniciante)' },
  escaliers: { pt: 'Escadas (série de degraus para subir ou descer)', level: 'A1 (Iniciante)' },
  station: { pt: 'Estação / parada de metrô ou trem', level: 'A1 (Iniciante)' },
  métro: { pt: 'Metrô / trem subterrâneo urbano', level: 'A1 (Iniciante)' },
  devant: { pt: 'Diante de / na frente de (preposição de lugar)', level: 'A1 (Iniciante)' },
  moi: { pt: 'Mim / eu (pronome tônico de 1ª pessoa)', level: 'A1 (Iniciante)' },
  vois: { pt: 'Vejo / vê (verbo voir no presente do indicativo)', level: 'A1 (Iniciante)' },
  panneau: { pt: 'Placa / letreiro / painel de sinalização', level: 'A1 (Iniciante)' },
  bleu: { pt: 'Azul (adjetivo de cor)', level: 'A1 (Iniciante)' },
  lettre: { pt: 'Letra (caractere do alfabeto)', level: 'A1 (Iniciante)' },
  beaucoup: { pt: 'Muito / muitos / grande quantidade', level: 'A1 (Iniciante)' },
  voyageurs: { pt: 'Viajantes / passageiros em trânsito', level: 'A1 (Iniciante)' },
  marchent: { pt: 'Caminham / andam (verbo marcher na 3ª pessoa do plural)', level: 'A1 (Iniciante)' },
  quais: { pt: 'Plataformas de embarque (plural de quai)', level: 'A1 (Iniciante)' },
  quai: { pt: 'Plataforma de embarque do trem ou metrô', level: 'A1 (Iniciante)' },
  vais: { pt: 'Vou (verbo aller na 1ª pessoa do singular do presente)', level: 'A1 (Iniciante)' },
  guichet: { pt: 'Guichê / bilheteria com atendente', level: 'A1 (Iniciante)' },
  machine: { pt: 'Máquina / terminal de autoatendimento', level: 'A1 (Iniciante)' },
  automatique: { pt: 'Automático(a) / que funciona por autoatendimento', level: 'A1 (Iniciante)' },
  acheter: { pt: 'Comprar / adquirir', level: 'A1 (Iniciante)' },
  ticket: { pt: 'Bilhete / passagem de transporte ou ingresso', level: 'A1 (Iniciante)' },
  sélectionne: { pt: 'Seleciono / seleciona (verbo sélectionner no presente)', level: 'A1 (Iniciante)' },
  billet: { pt: 'Bilhete / passagem / ingresso', level: 'A1 (Iniciante)' },
  tour: { pt: 'Torre (monumento) ou volta/passeio', level: 'A1 (Iniciante)' },
  eiffel: { pt: 'Eiffel (referente à Torre Eiffel construída por Gustave Eiffel)', level: 'A1 (Iniciante)' },
  écran: { pt: 'Tela / monitor', level: 'A1 (Iniciante)' },
  tactile: { pt: 'Tátil / sensível ao toque (touch screen)', level: 'A1 (Iniciante)' },
  paie: { pt: 'Pago / paga (verbo payer no presente)', level: 'A1 (Iniciante)' },
  carte: { pt: 'Cartão (bancário) ou mapa/cardápio', level: 'A1 (Iniciante)' },
  bancaire: { pt: 'Bancário(a) / referente a banco', level: 'A1 (Iniciante)' },
  récupère: { pt: 'Pego / recolho / recupero (verbo récupérer no presente)', level: 'A2 (Básico)' },
  regarde: { pt: 'Olho / observo (verbo regarder no presente)', level: 'A1 (Iniciante)' },
  attentivement: { pt: 'Atentamente / com atenção e cuidado', level: 'A2 (Básico)' },
  plan: { pt: 'Mapa / planta da cidade ou rede de transporte', level: 'A1 (Iniciante)' },
  trouver: { pt: 'Encontrar / achar', level: 'A1 (Iniciante)' },
  ligne: { pt: 'Linha / trajeto de transporte', level: 'A1 (Iniciante)' },
  dois: { pt: 'Devo / preciso (verbo devoir no presente)', level: 'A1 (Iniciante)' },
  prendre: { pt: 'Pegar / tomar / embarcar no transporte', level: 'A1 (Iniciante)' },
  six: { pt: 'Seis (número cardinal)', level: 'A1 (Iniciante)' },
  direction: { pt: 'Direção / sentido de circulação', level: 'A1 (Iniciante)' },
  passe: { pt: 'Passo / passa (verbo passer no presente)', level: 'A1 (Iniciante)' },
  portillon: { pt: 'Catraca de acesso / portão automático', level: 'A2 (Básico)' },
  accès: { pt: 'Acesso / entrada', level: 'A1 (Iniciante)' },
  panneaux: { pt: 'Placas / letreiros / painéis de sinalização', level: 'A1 (Iniciante)' },
  train: { pt: 'Trem / composição ferroviária', level: 'A1 (Iniciante)' },
  monte: { pt: 'Subo / entro no transporte (verbo monter no presente)', level: 'A1 (Iniciante)' },
  rame: { pt: 'Vagão / composição do metrô', level: 'A2 (Básico)' },
  après: { pt: 'Após / depois de (preposição de tempo ou lugar)', level: 'A1 (Iniciante)' },
  quelques: { pt: 'Algumas / alguns (adjetivo indefinido plural)', level: 'A1 (Iniciante)' },
  stations: { pt: 'Estações / paradas do metrô (plural de station)', level: 'A1 (Iniciante)' },
  arrêt: { pt: 'Parada / estação de transporte ou pausa', level: 'A1 (Iniciante)' },
  sortant: { pt: 'Saindo / ao sair (verbo sortir no particípio presente)', level: 'A2 (Básico)' },
  admire: { pt: 'Admiro / contemplo (verbo admirer no presente)', level: 'A1 (Iniciante)' },
  célèbre: { pt: 'Famoso(a) / célebre / conhecido(a)', level: 'A1 (Iniciante)' },
  monument: { pt: 'Monumento / edifício histórico ou comemorativo', level: 'A1 (Iniciante)' },
  fer: { pt: 'Ferro (metal de construção)', level: 'A2 (Básico)' },
};

/**
 * Returns a rich DictionaryEntry for any French word clicked in the text.
 * If the word is in the common French dictionary, returns its curated entry.
 * Otherwise, generates an intelligent fallback entry with 4 progressive A1-C2 examples.
 */
export function getOrGenerateWordEntry(word: string): DictionaryEntry {
  const cleanWord = word
    .trim()
    .replace(/^[.,/#!$%^&*;:{}=\_`~()?"«»[\]\\]+|[.,/#!$%^&*;:{}=\_`~()?"«»[\]\\]+$/g, "");

  // 1. Check static LESSON_DICTIONARY first! (Full normalization: punctuation, case, accents, aliases, inflections, plurals, verb roots)
  const staticEntry = getStaticLessonEntry(cleanWord);
  if (staticEntry) {
    return staticEntry;
  }

  // 2. Check COMMON_FRENCH_WORDS_DICTIONARY next!
  const lowerKey = normalizeForSearch(cleanWord);
  let commonMatch = COMMON_FRENCH_WORDS_DICTIONARY[lowerKey];
  let matchedTermKey = cleanWord;

  if (!commonMatch) {
    const elisionRegex = /^(?:[jldcmtsn]|qu|jusqu|lorsqu|puisqu)['’ʼ]/i;
    if (elisionRegex.test(cleanWord)) {
      const stripped = cleanWord.replace(elisionRegex, '');
      if (stripped) {
        const strippedLower = normalizeForSearch(stripped);
        commonMatch = COMMON_FRENCH_WORDS_DICTIONARY[strippedLower];
        if (commonMatch) {
          matchedTermKey = stripped;
        }
      }
    }
  }

  if (commonMatch) {
    const examples = commonMatch.examples || generatePracticalExamplesForWord(matchedTermKey, commonMatch.pt);
    return {
      term: matchedTermKey,
      wordFr: matchedTermKey,
      definitionPt: commonMatch.pt,
      definitionFr: commonMatch.fr || `Mot de vocabulaire courant (${commonMatch.level.split(' ')[0]})`,
      difficultyLevel: commonMatch.level,
      isDictionaryTerm: false,
      examples,
    };
  }

  // Smart CEFR difficulty level fallback
  let difficultyLevel = 'A2 (Intermediário Básico)';
  if (lowerKey.length <= 4) {
    difficultyLevel = 'A1 (Iniciante Essencial)';
  } else if (lowerKey.length >= 10) {
    difficultyLevel = 'B2 (Intermediário Avançado)';
  } else if (lowerKey.length >= 7) {
    difficultyLevel = 'B1 (Intermediário)';
  }

  const universalPt = getUniversalPortugueseDefinition(cleanWord);
  return {
    term: cleanWord,
    wordFr: cleanWord,
    definitionPt: universalPt,
    definitionFr: `Mot du vocabulaire français – Niveau estimé: ${difficultyLevel.split(' ')[0]}`,
    difficultyLevel,
    isDictionaryTerm: false,
    examples: generatePracticalExamplesForWord(cleanWord, universalPt),
  };
}

function getUniversalPortugueseDefinition(word: string): string {
  const norm = normalizeForSearch(word).toLowerCase();
  const lookup: Record<string, string> = {
    // Articles & Pronouns
    'le': 'O / ele (artigo definido / pronome)',
    'la': 'A / ela / lá (artigo definido, pronome ou advérbio de lugar)',
    'les': 'Os / as (artigo definido plural)',
    'l': 'O / a (artigo definido com elisão)',
    'un': 'Um (artigo indefinido / numeral)',
    'une': 'Uma (artigo indefinido / numeral)',
    'des': 'Dos / das / uns / umas (artigo partitivo / indefinido)',
    'du': 'Do / de + o (artigo partitivo / contração)',
    'au': 'Ao / no (à + le)',
    'aux': 'Aos / nas (à + les)',
    'je': 'Eu (pronome pessoal sujeito)',
    'j': 'Eu (pronome pessoal sujeito com elisão)',
    'tu': 'Tu / você (pronome pessoal sujeito)',
    'il': 'Ele (pronome pessoal sujeito)',
    'elle': 'Ela (pronome pessoal sujeito)',
    'on': 'A gente / se / nós (pronome indefinido)',
    'nous': 'Nós (pronome pessoal)',
    'vous': 'Vós / vocês / o senhor / a senhora (pronome de cortesia ou plural)',
    'ils': 'Eles (pronome pessoal plural)',
    'elles': 'Elas (pronome pessoal feminino plural)',
    'me': 'Me / mim (pronome reflexivo / objeto)',
    'm': 'Me / mim (com elisão)',
    'te': 'Te / ti (pronome reflexivo / objeto)',
    't': 'Te / ti (com elisão)',
    'se': 'Se / si (pronome reflexivo)',
    's': 'Se / si (com elisão)',
    'lui': 'Lhe / a ele / a ela (pronome objeto indireto)',
    'leur': 'Lhes / deles / delas',
    'leurs': 'Deles / delas (plural)',
    'y': 'Lá / ali / a isso (pronome adverbial)',
    'en': 'De lá / disso / em (pronome adverbial / preposição)',
    'ce': 'Este / esse / aquilo / o (pronome demonstrativo)',
    'c': 'Este / esse / aquilo (com elisão)',
    'cette': 'Esta / essa (pronome demonstrativo feminino)',
    'ces': 'Estes / estas / esses / essas (plural)',
    'mon': 'Meu / minha',
    'ma': 'Minha',
    'mes': 'Meus / minhas',
    'ton': 'Teu / tua',
    'ta': 'Tua',
    'tes': 'Teus / tuas',
    'son': 'Seu / sua',
    'sa': 'Sua',
    'ses': 'Seus / suas',
    'notre': 'Nosso / nossa',
    'nos': 'Nossos / nossas',
    'votre': 'Vosso / vossa / seu / sua',
    'vos': 'Vossos / vossas / seus / suas',
    'qui': 'Quem / que (pronome relativo sujeito)',
    'que': 'Que / o que (pronome relativo / conjunção)',
    'qu': 'Que / o que (com elisão)',
    'quoi': 'O que / quê',
    'dont': 'Do qual / da qual / cujo / cuja',
    'où': 'Onde / em que (lugar ou tempo)',

    // Conjunctions & Prepositions
    'et': 'E (conjunção aditiva)',
    'ou': 'Ou (conjunção alternativa)',
    'mais': 'Mas / porém / contudo (conjunção adversativa)',
    'donc': 'Portanto / logo / então (conjunção conclusiva)',
    'car': 'Pois / porque (conjunção explicativa)',
    'ni': 'Nem (conjunção negativa)',
    'or': 'Ora / no entanto',
    'si': 'Se / sim (condicional ou afirmação)',
    'quand': 'Quando',
    'comme': 'Como / visto que',
    'parce': 'Porque (em "parce que")',
    'puisque': 'Visto que / já que',
    'lorsque': 'Quando / no momento em que',
    'à': 'A / em / para (preposição de lugar, tempo ou direção)',
    'a': 'A / em / para (ou verbo avoir: tem)',
    'de': 'De / da / do (preposição de origem ou posse)',
    'd': 'De / da / do (com elisão)',
    'pour': 'Para / por (finalidade ou destino)',
    'par': 'Por / através de',
    'avec': 'Com (acompanhamento ou meio)',
    'sans': 'Sem (ausência ou privação)',
    'sur': 'Sobre / em cima de',
    'sous': 'Sob / embaixo de',
    'dans': 'Em / dentro de',
    'chez': 'Na casa de / no estabelecimento de',
    'vers': 'Em direção a / por volta de',
    'entre': 'Entre',
    'pendant': 'Durante',
    'depuis': 'Desde / há (tempo contínuo)',
    'devant': 'Diante de / na frente de',
    'derriere': 'Atrás de',
    'contre': 'Contra',
    'jusque': 'Até',

    // Adverbs & Common Modifiers
    'tres': 'Muito (intensidade)',
    'très': 'Muito (intensidade)',
    'bien': 'Bem / bom',
    'mal': 'Mal / ruim',
    'beaucoup': 'Muito / muitos / bastante',
    'peu': 'Pouco / um pouco',
    'plus': 'Mais / não mais',
    'moins': 'Menos',
    'aussi': 'Também / tão',
    'toujours': 'Sempre / ainda',
    'jamais': 'Nunca / jamais',
    'souvent': 'Frequentemente / muitas vezes',
    'parfois': 'Às vezes / por vezes',
    'maintenant': 'Agora / atualmente',
    'aujourd': 'Hoje (em "aujourd\'hui")',
    'hui': 'Hoje (em "aujourd\'hui")',
    'hier': 'Ontem',
    'demain': 'Amanhã',
    'ici': 'Aqui / cá',
    'oui': 'Sim',
    'non': 'Não',
    'ne': 'Não (partícula de negação)',
    'n': 'Não (com elisão)',
    'pas': 'Não (segunda parte da negação ne...pas / passo)',
    'rien': 'Nada',
    'personne': 'Ninguém / pessoa',
    'tout': 'Tudo / todo',
    'tous': 'Todos',
    'toute': 'Toda',
    'toutes': 'Todas',
    'autre': 'Outro / outra',
    'autres': 'Outros / outras',
    'meme': 'Mesmo / mesma / até',
    'même': 'Mesmo / mesma / até',
    'déjà': 'Já',
    'deja': 'Já',
    'encore': 'Ainda / mais de novo',
    'enfin': 'Enfim / finalmente',
    'ensuite': 'Em seguida / depois',
    'puis': 'Depois / em seguida',
    'alors': 'Então / nessa altura',

    // Essential verbs (conjugated & infinitive forms)
    'est': 'É / está (verbo être)',
    'suis': 'Sou / estou (verbo être)',
    'es': 'És / estás (verbo être)',
    'sommes': 'Somos / estamos (verbo être)',
    'êtes': 'Sois / estais / são / estão (verbo être)',
    'sont': 'São / estão (verbo être)',
    'ete': 'Sido / estado (particípio de être)',
    'ai': 'Tenho / hei (verbo avoir)',
    'as': 'Tens (verbo avoir)',
    'avons': 'Temos (verbo avoir)',
    'avez': 'Tendes / têm (verbo avoir)',
    'ont': 'Têm (verbo avoir)',
    'eu': 'Tido (particípio de avoir)',
    'fait': 'Faz / feito (verbo faire)',
    'fais': 'Faço / fazes (verbo faire)',
    'dit': 'Diz / dito (verbo dire)',
    'va': 'Vai (verbo aller)',
    'vais': 'Vou (verbo aller)',
    'allons': 'Vamos (verbo aller)',
    'allez': 'Ides / vão (verbo aller)',
    'vont': 'Vão (verbo aller)',
    'aller': 'Ir / caminhar (verbo)',
    'pouvoir': 'Poder / ser capaz (verbo)',
    'vouloir': 'Querer / desejar (verbo)',
    'devoir': 'Dever / ter que (verbo)',
    'savoir': 'Saber / conhecer (verbo)',
    'voir': 'Ver / enxergar (verbo)',
    'venir': 'Vir / chegar (verbo)',
    'prendre': 'Pegar / tomar (verbo)',
    'faut': 'É preciso / é necessário (verbo falloir)',
  };

  if (lookup[norm]) {
    return lookup[norm];
  }

  // Morphological cognate rules
  if (norm.endsWith('tion')) {
    return `${word.slice(0, -4)}ção (substantivo feminino de origem latina)`;
  }
  if (norm.endsWith('sion')) {
    return `${word.slice(0, -4)}são (substantivo feminino)`;
  }
  if (norm.endsWith('ment') && norm.length > 5) {
    return `${word.slice(0, -4)}mente (advérbio de modo)`;
  }
  if (norm.endsWith('ique') && norm.length > 5) {
    return `${word.slice(0, -4)}ico(a) (adjetivo)`;
  }
  if (norm.endsWith('ité') && norm.length > 4) {
    return `${word.slice(0, -3)}idade (substantivo feminino)`;
  }
  if (norm.endsWith('eur') && norm.length > 4) {
    return `${word.slice(0, -3)}dor(a) / or(a) (substantivo / adjetivo)`;
  }
  if ((norm.endsWith('able') || norm.endsWith('ible')) && norm.length > 5) {
    return `${word.slice(0, -4)}ável / ível (adjetivo)`;
  }
  if (norm.endsWith('aire') && norm.length > 5) {
    return `${word.slice(0, -4)}ário(a) / ária`;
  }
  if ((norm.endsWith('eux') || norm.endsWith('euse')) && norm.length > 4) {
    return `${word.slice(0, -3)}oso(a) (adjetivo qualificativo)`;
  }
  if (norm.endsWith('iste') && norm.length > 5) {
    return `${word.slice(0, -4)}ista (substantivo / adjetivo)`;
  }

  return `${word} (termo do vocabulário francês — uso prático verificado no contexto da frase)`;
}

/**
 * Tokenizes a segment of text into clickable word tokens and non-clickable punctuation/space tokens.
 */
function tokenizeSegmentWords(
  segment: string,
  termToEntryMap: Map<string, DictionaryEntry>
): ParsedToken[] {
  if (!segment) return [];

  const wordRegex = /[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu;
  const tokens: ParsedToken[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = wordRegex.exec(segment)) !== null) {
    const matchedWord = match[0];
    const matchStart = match.index;

    // Preserve preceding spaces or punctuation
    if (matchStart > lastIdx) {
      tokens.push({
        text: segment.slice(lastIdx, matchStart),
        isMatch: false,
        isDictionaryTerm: false,
      });
    }

    const normKey = normalizeTermKey(matchedWord);
    let dictEntry = termToEntryMap.get(normKey) || termToEntryMap.get(normKey.replace(/[’ʼ]/g, "'"));

    if (!dictEntry) {
      const elisionRegex = /^(?:[jldcmtsn]|qu|jusqu|lorsqu|puisqu)['’ʼ]/i;
      if (elisionRegex.test(matchedWord)) {
        const strippedWord = matchedWord.replace(elisionRegex, '');
        if (strippedWord) {
          dictEntry = termToEntryMap.get(normalizeTermKey(strippedWord));
        }
      }
    }

    if (dictEntry) {
      tokens.push({
        text: matchedWord,
        isMatch: true,
        isDictionaryTerm: true,
        matchedTerm: getTermFromEntry(dictEntry) || matchedWord,
        dictionaryEntry: { ...dictEntry, isDictionaryTerm: true },
      });
    } else {
      tokens.push({
        text: matchedWord,
        isMatch: true, // Clickable!
        isDictionaryTerm: false,
        matchedTerm: matchedWord,
        dictionaryEntry: getOrGenerateWordEntry(matchedWord),
      });
    }

    lastIdx = wordRegex.lastIndex;
    if (wordRegex.lastIndex === matchStart) {
      wordRegex.lastIndex++;
    }
  }

  // Preserve trailing spaces or punctuation
  if (lastIdx < segment.length) {
    tokens.push({
      text: segment.slice(lastIdx),
      isMatch: false,
      isDictionaryTerm: false,
    });
  }

  return tokens;
}

/**
 * Parses a French sentence or paragraph and identifies vocabulary items
 * (both single words and multi-word expressions like 'prendre du recul'),
 * returning an array of tokens marked for UI highlighting.
 *
 * Multi-word expressions are prioritized over individual substrings.
 */
export function parseFrenchSentence(
  sentence: string,
  dictionary: Array<DictionaryInput> = []
): ParsedToken[] {
  if (!sentence) {
    return [];
  }

  const termToEntryMap = new Map<string, DictionaryEntry>();
  const allTerms: string[] = [];

  if (dictionary && dictionary.length > 0) {
    for (const item of dictionary) {
      const entry: DictionaryEntry =
        typeof item === 'string' ? { term: item } : item;
      const canonicalTerm = getTermFromEntry(entry);
      if (!canonicalTerm || !canonicalTerm.trim()) continue;

      const normCanonical = normalizeTermKey(canonicalTerm);
      const enhancedEntry = { ...entry, isDictionaryTerm: true };
      termToEntryMap.set(normCanonical, enhancedEntry);
      allTerms.push(canonicalTerm.trim());

      if (Array.isArray(entry.aliases)) {
        for (const alias of entry.aliases) {
          if (alias && alias.trim()) {
            termToEntryMap.set(normalizeTermKey(alias), enhancedEntry);
            allTerms.push(alias.trim());
          }
        }
      }

      if (Array.isArray(entry.inflections)) {
        for (const inf of entry.inflections) {
          if (inf && inf.trim()) {
            termToEntryMap.set(normalizeTermKey(inf), enhancedEntry);
            allTerms.push(inf.trim());
          }
        }
      }
    }
  }

  // Inject COMMON_EXPRESSIONS
  for (const [key, entry] of Object.entries(COMMON_EXPRESSIONS)) {
    const canonicalTerm = key;
    const normCanonical = normalizeTermKey(canonicalTerm);
    
    // Only add if not already overridden by the lesson's specific dictionary
    if (!termToEntryMap.has(normCanonical)) {
       const enhancedEntry = { term: key, ...entry, isDictionaryTerm: false }; // Set false so they don't get the golden style unless they are in the lesson
       termToEntryMap.set(normCanonical, enhancedEntry as any);
       allTerms.push(canonicalTerm.trim());
    }
  }

  if (allTerms.length === 0) {
    return tokenizeSegmentWords(sentence, termToEntryMap);
  }

  // Sort by length descending to ensure longer expressions (e.g., 'prendre du recul')
  // take precedence over shorter words or substrings
  allTerms.sort((a, b) => b.length - a.length);

  const uniqueTerms = Array.from(new Set(allTerms));
  const patterns = uniqueTerms
    .map((term) => buildTermPattern(term))
    .filter(Boolean);

  if (patterns.length === 0) {
    return tokenizeSegmentWords(sentence, termToEntryMap);
  }

  const combinedRegex = new RegExp(`(${patterns.join('|')})`, 'giu');
  const tokens: ParsedToken[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = combinedRegex.exec(sentence)) !== null) {
    const matchedText = match[0];
    const matchStart = match.index;

    // Tokenize any words in the preceding unmatched segment
    if (matchStart > lastIndex) {
      const segmentTokens = tokenizeSegmentWords(
        sentence.slice(lastIndex, matchStart),
        termToEntryMap
      );
      tokens.push(...segmentTokens);
    }

    const key = normalizeTermKey(matchedText);
    const matchedEntry = termToEntryMap.get(key) || {
      term: matchedText,
      wordFr: matchedText,
      isDictionaryTerm: true,
    };
    const canonicalTerm = getTermFromEntry(matchedEntry) || matchedText;

    tokens.push({
      text: matchedText,
      isMatch: true,
      isDictionaryTerm: matchedEntry.isDictionaryTerm !== false,
      matchedTerm: canonicalTerm,
      dictionaryEntry: { ...matchedEntry },
    });

    lastIndex = combinedRegex.lastIndex;

    // Safeguard against zero-length matches in regex loop
    if (combinedRegex.lastIndex === matchStart) {
      combinedRegex.lastIndex++;
    }
  }

  // Tokenize remaining segment after the last match
  if (lastIndex < sentence.length) {
    const segmentTokens = tokenizeSegmentWords(
      sentence.slice(lastIndex),
      termToEntryMap
    );
    tokens.push(...segmentTokens);
  }

  return tokens;
}

/**
 * Finds all unique vocabulary entries present in a given French text.
 */
export function findVocabularyInText(
  text: string,
  dictionary: Array<DictionaryInput> = []
): DictionaryEntry[] {
  const tokens = parseFrenchSentence(text, dictionary);
  const foundMap = new Map<string, DictionaryEntry>();

  for (const token of tokens) {
    if (token.isMatch && token.isDictionaryTerm && token.dictionaryEntry) {
      const termKey = getTermFromEntry(token.dictionaryEntry).toLowerCase();
      if (termKey && !foundMap.has(termKey)) {
        foundMap.set(termKey, token.dictionaryEntry);
      }
    }
  }

  return Array.from(foundMap.values());
}

/**
 * Counts total occurrences of vocabulary matches in a text.
 */
export function countVocabularyMatches(
  text: string,
  dictionary: Array<DictionaryInput> = []
): number {
  const tokens = parseFrenchSentence(text, dictionary);
  return tokens.filter((t) => t.isMatch && t.isDictionaryTerm).length;
}
