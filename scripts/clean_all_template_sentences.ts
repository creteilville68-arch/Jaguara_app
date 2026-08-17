import fs from 'fs';
import path from 'path';

const explicitFunctionalExamples: Record<string, Array<{ level: string; fr: string; pt: string }>> = {
  "des": [
    { level: "A1", fr: "Nous achetons des croissants chauds à la boulangerie.", pt: "Nós compramos croissants quentes na padaria." },
    { level: "A2-B1", fr: "Il y a des musées fascinants dans toute la ville de Paris.", pt: "Há museus fascinantes em toda a cidade de Paris." },
    { level: "B2", fr: "Paris propose des expositions variées tout au long de l'année.", pt: "Paris oferece exposições variadas ao longo do ano." },
    { level: "C1-C2", fr: "La capitale regorge des trésors architecturaux les plus admirés au monde.", pt: "A capital está repleta dos tesouros arquitetônicos mais admirados do mundo." }
  ],
  "me": [
    { level: "A1", fr: "Tu me donnes le plan du métro, s'il te plaît ?", pt: "Você me dá o mapa do metrô, por favor?" },
    { level: "A2-B1", fr: "Ce quartier me rappelle les plus beaux films français.", pt: "Este bairro me lembra os mais belos filmes franceses." },
    { level: "B2", fr: "L'atmosphère de Paris me passionne à chaque visite.", pt: "A atmosfera de Paris me apaixona a cada visita." },
    { level: "C1-C2", fr: "Flâner le long de la Seine me procure un sentiment de liberté incomparable.", pt: "Passear ao longo do Sena me proporciona um sentimento de liberdade incomparável." }
  ],
  "sa": [
    { level: "A1", fr: "Elle aime sa nouvelle vie dans la capitale française.", pt: "Ela gosta de sua nova vida na capital francesa." },
    { level: "A2-B1", fr: "Paris est célèbre pour sa gastronomie et sa culture artistique.", pt: "Paris é famosa por sua gastronomia e sua cultura artística." },
    { level: "B2", fr: "Chaque quartier parisien préserve sa propre identité historique.", pt: "Cada bairro parisiense preserva sua própria identidade histórica." },
    { level: "C1-C2", fr: "La ville lumière rayonne à travers sa riche histoire littéraire et architecturale.", pt: "A cidade luz irradia através de sua rica história literária e arquitetônica." }
  ],
  "se": [
    { level: "A1", fr: "On se retrouve devant la pyramide du Louvre à midi.", pt: "Nós nos encontramos na frente da pirâmide do Louvre ao meio-dia." },
    { level: "A2-B1", fr: "La ville se transforme avec les lumières du soir.", pt: "A cidade se transforma com as luzes da noite." },
    { level: "B2", fr: "L'élégance parisienne se manifeste dans chaque détail du quotidien.", pt: "A elegância parisiense se manifesta em cada detalhe do cotidiano." },
    { level: "C1-C2", fr: "L'art de vivre français se découvre en prenant le temps de flâner.", pt: "A arte de viver francesa se descobre dedicando tempo para passear." }
  ],
  "ses": [
    { level: "A1", fr: "Paris offre à ses visiteurs des monuments inoubliables.", pt: "Paris oferece aos seus visitantes monumentos inesquecíveis." },
    { level: "A2-B1", fr: "Le musée expose ses plus beaux tableaux impressionnistes.", pt: "O museu expõe suas mais belas telas impressionistas." },
    { level: "B2", fr: "La capitale séduit par ses grands boulevards et ses cafés animés.", pt: "A capital seduz por seus grandes bulevares e seus cafés animados." },
    { level: "C1-C2", fr: "À travers ses architectures variées, Paris raconte mille ans d'histoire.", pt: "Através de suas arquiteturas variadas, Paris conta mil anos de história." }
  ],
  "aux": [
    { level: "A1", fr: "Nous allons aux Galeries Lafayette cet après-midi.", pt: "Nós vamos às Galeries Lafayette esta tarde." },
    { level: "A2-B1", fr: "Ce jardin est ouvert aux habitants et aux voyageurs.", pt: "Este jardim é aberto aos moradores e aos viajantes." },
    { level: "B2", fr: "Paris accorde une place essentielle aux arts et à la littérature.", pt: "Paris concede um lugar essencial às artes e à literatura." },
    { level: "C1-C2", fr: "L'architecture gothique confère aux cathédrales une majesté spirituelle et intemporelle.", pt: "A arquitetura gótica confere às catedrais uma majestade espiritual e atemporal." }
  ],
  "que": [
    { level: "A1", fr: "Je pense que Paris est une ville magnifique.", pt: "Eu acho que Paris é uma cidade magnífica." },
    { level: "A2-B1", fr: "C'est le plus beau monument que j'ai visité en France.", pt: "É o mais belo monumento que visitei na França." },
    { level: "B2", fr: "Bien que la ville soit grande, il est facile de s'y déplacer en métro.", pt: "Embora a cidade seja grande, é fácil se deslocar nela de metrô." },
    { level: "C1-C2", fr: "Quelle que soit l'époque, Paris demeure un centre d'inspiration artistique.", pt: "Qualquer que seja a época, Paris permanece um centro de inspiração artística." }
  ],
  "elle": [
    { level: "A1", fr: "Elle habite à Paris depuis trois ans.", pt: "Ela mora em Paris há três anos." },
    { level: "A2-B1", fr: "Elle connaît toutes les bonnes adresses du quartier latin.", pt: "Ela conhece todos os bons endereços do bairro latino." },
    { level: "B2", fr: "Lorsqu'on découvre la cathédrale, elle impressionne par sa hauteur.", pt: "Quando se descobre a catedral, ela impressiona por sua altura." },
    { level: "C1-C2", fr: "La capitale est vivante : elle évolue constamment sans perdre son âme.", pt: "A capital é viva: ela evolui constantemente sem perder sua alma." }
  ],
  "lui": [
    { level: "A1", fr: "Je lui offre un livre sur l'histoire de Paris.", pt: "Eu ofereço a ele/ela um livro sobre a história de Paris." },
    { level: "A2-B1", fr: "Nous lui demandons le chemin pour aller au musée du Louvre.", pt: "Nós pedimos a ele/ela o caminho para ir ao museu do Louvre." },
    { level: "B2", fr: "Ce quartier possède un charme qui lui est totalement unique.", pt: "Este bairro possui um charme que lhe é totalmente único." },
    { level: "C1-C2", fr: "Paris inspire les artistes du monde entier, qui lui rendent hommage dans leurs œuvres.", pt: "Paris inspira os artistas do mundo inteiro, que lhe prestam homenagem em suas obras." }
  ],
  "on": [
    { level: "A1", fr: "On va prendre un café à la terrasse du bistrot.", pt: "A gente vai tomar um café no terraço do bistrô." },
    { level: "A2-B1", fr: "En France, on dîne souvent vers vingt heures.", pt: "Na França, janta-se frequentemente por volta das vinte horas." },
    { level: "B2", fr: "Quand on se promène le long de la Seine, on admire les bouquinistes.", pt: "Quando se passeia ao longo do Sena, admiram-se os alfarrabistas." },
    { level: "C1-C2", fr: "On mesure véritablement l'élégance de Paris en observant son architecture quotidienne.", pt: "Mede-se verdadeiramente a elegância de Paris observando sua arquitetura cotidiana." }
  ],
  "où": [
    { level: "A1", fr: "Où se trouve la station de métro la plus proche ?", pt: "Onde fica a estação de metrô mais próxima?" },
    { level: "A2-B1", fr: "C'est le quartier où nous aimons nous promener le dimanche.", pt: "É o bairro onde gostamos de passear aos domingos." },
    { level: "B2", fr: "Paris est une ville où l'art se rencontre à chaque coin de rue.", pt: "Paris é uma cidade onde a arte se encontra em cada esquina." },
    { level: "C1-C2", fr: "Peu importe où le regard se pose, la capitale offre une perspective harmonieuse.", pt: "Não importa onde o olhar pouse, a capital oferece uma perspectiva harmoniosa." }
  ],
  "bien": [
    { level: "A1", fr: "Tout va très bien, merci beaucoup !", pt: "Tudo vai muito bem, muito obrigado!" },
    { level: "A2-B1", fr: "Nous avons bien mangé dans ce petit restaurant parisien.", pt: "Nós comemos bem neste pequeno restaurante parisiense." },
    { level: "B2", fr: "Ce quartier est bien relié aux principaux musées de la capitale.", pt: "Este bairro é bem conectado aos principais museus da capital." },
    { level: "C1-C2", fr: "Bien au-delà d'un simple séjour, visiter Paris enrichit notre vision du monde.", pt: "Bem além de uma simples estadia, visitar Paris enriquece nossa visão de mundo." }
  ],
  "plus": [
    { level: "A1", fr: "Je voudrais un peu plus de café, s'il vous plaît.", pt: "Gostaria de um pouco mais de café, por favor." },
    { level: "A2-B1", fr: "C'est le quartier le plus vivant et agréable de la ville.", pt: "É o bairro mais vivo e agradável da cidade." },
    { level: "B2", fr: "Paris attire de plus en plus de voyageurs amoureux de culture.", pt: "Paris atrai cada vez mais viajantes apaixonados pela cultura." },
    { level: "C1-C2", fr: "Plus on explore les ruelles parisiennes, plus on en découvre les secrets intimes.", pt: "Quanto mais se explora as ruelas parisienses, mais se descobre seus segredos íntimos." }
  ],
  "sans": [
    { level: "A1", fr: "Un café sans sucre, s'il vous plaît.", pt: "Um café sem açúcar, por favor." },
    { level: "A2-B1", fr: "Il est difficile de visiter Paris sans prendre le métro.", pt: "É difícil visitar Paris sem pegar o metrô." },
    { level: "B2", fr: "Ce bistrot sert une cuisine traditionnelle sans artifice et délicieuse.", pt: "Este bistrô serve uma cozinha tradicional sem artifício e deliciosa." },
    { level: "C1-C2", fr: "Sans le génie de ses architectes, Paris n'aurait pas cette harmonie visuelle intemporelle.", pt: "Sem o gênio de seus arquitetos, Paris não teria esta harmonia visual atemporal." }
  ],
  "sous": [
    { level: "A1", fr: "Nous nous abritons sous les arcades du Palais-Royal.", pt: "Nós nos abrigamos sob as arcadas do Palais-Royal." },
    { level: "A2-B1", fr: "Le bateau-mouche passe sous les célèbres ponts de la Seine.", pt: "O barco de passeio passa sob as famosas pontes do Sena." },
    { level: "B2", fr: "Sous le soleil de printemps, les jardins de Paris se remplissent de vie.", pt: "Sob o sol de primavera, os jardins de Paris se enchem de vida." },
    { level: "C1-C2", fr: "Sous l'impulsion du baron Haussmann, la capitale a acquis sa physionomie moderne.", pt: "Sob o impulso do barão Haussmann, a capital adquiriu sua fisionomia moderna." }
  ],
  "mal": [
    { level: "A1", fr: "Je n'ai pas mal à la tête aujourd'hui.", pt: "Não estou com dor de cabeça hoje." },
    { level: "A2-B1", fr: "Il n'est pas mal du tout, ce petit bistrot de quartier !", pt: "Não é nada mal, este pequeno bistrô do bairro!" },
    { level: "B2", fr: "On ne risque pas de se sentir mal accueilli dans cette brasserie conviviale.", pt: "Não se corre o risco de se sentir mal acolhido nesta brasserie amigável." },
    { level: "C1-C2", fr: "En dépit de la foule, il est difficile de mal apprécier une soirée à l'Opéra.", pt: "Apesar da multidão, é difícil não apreciar uma noite na Ópera." }
  ],
  "déjà": [
    { level: "A1", fr: "Nous sommes déjà arrivés à la gare Saint-Lazare.", pt: "Nós já chegamos à estação Saint-Lazare." },
    { level: "A2-B1", fr: "Avez-vous déjà visité le musée d'Orsay ?", pt: "Você já visitou o museu d'Orsay?" },
    { level: "B2", fr: "Il est déjà temps de partir à la découverte du quartier Montmartre.", pt: "Já é hora de partir à descoberta do bairro Montmartre." },
    { level: "C1-C2", fr: "Ce monument historique suscite déjà l'admiration dès le premier regard.", pt: "Este monumento histórico já suscita admiração desde o primeiro olhar." }
  ],
  "c'": [
    { level: "A1", fr: "C'est une belle journée pour visiter Paris.", pt: "É um belo dia para visitar Paris." },
    { level: "A2-B1", fr: "C'est le quartier idéal pour se promener à pied.", pt: "É o bairro ideal para passear a pé." },
    { level: "B2", fr: "C'est en flânant le long de la Seine qu'on découvre la vraie capitale.", pt: "É passeando ao longo do Sena que se descobre a verdadeira capital." },
    { level: "C1-C2", fr: "C'est grâce au raffinement de son architecture que Paris reste unique.", pt: "É graças ao refinamento de sua arquitetura que Paris permanece única." }
  ],
  "ce": [
    { level: "A1", fr: "Ce matin, nous prenons le petit déjeuner au bistrot.", pt: "Esta manhã, tomamos o café da manhã no bistrô." },
    { level: "A2-B1", fr: "Nous visitons ce quartier historique l'après-midi.", pt: "Nós visitamos este bairro histórico à tarde." },
    { level: "B2", fr: "Ce monument célèbre attire des voyageurs du monde entier.", pt: "Este famoso monumento atrai viajantes do mundo inteiro." },
    { level: "C1-C2", fr: "Ce patrimoine architectural exceptionnel témoigne de siècles de création.", pt: "Este patrimônio arquitetônico excepcional testemunha séculos de criação." }
  ]
};

function generateNaturalSentencesForWord(wordFr: string, ptTrans: string): Array<{ level: string; fr: string; pt: string }> {
  const lower = wordFr.toLowerCase();
  
  if (explicitFunctionalExamples[lower]) {
    return explicitFunctionalExamples[lower];
  }

  // Infinitive verbs (-er, -ir, -re, -oir)
  if (/(?:er|ir|re|oir)$/i.test(lower) && lower.length > 3) {
    return [
      { level: "A1", fr: `J'aime beaucoup ${lower} à Paris.`, pt: `Eu gosto muito de ${ptTrans} em Paris.` },
      { level: "A2-B1", fr: `Nous allons ${lower} ensemble pendant notre promenade.`, pt: `Nós vamos ${ptTrans} juntos durante nosso passeio.` },
      { level: "B2", fr: `Il est toujours agréable de ${lower} dans les quartiers historiques.`, pt: `É sempre agradável ${ptTrans} nos bairros históricos.` },
      { level: "C1-C2", fr: `Prendre le temps de ${lower} permet d'apprécier la véritable richesse de la capitale.`, pt: `Reservar tempo para ${ptTrans} permite apreciar a verdadeira riqueza da capital.` }
    ];
  }

  // Conjugated verb forms
  if (/(?:ons|ez|ent|ait)$/i.test(lower) || (/(?:e|es|is|it)$/i.test(lower) && lower.length >= 5 && ptTrans.match(/^(?:eu |ele |ela |nós |eles |elas )/i))) {
    return [
      { level: "A1", fr: `À Paris, cette scène ${lower} notre attention.`, pt: `Em Paris, esta cena ${ptTrans} nossa atenção.` },
      { level: "A2-B1", fr: `Quand le soleil brille, la ville ${lower} sous une lumière magnifique.`, pt: `Quando o sol brilha, a cidade ${ptTrans} sob uma luz magnífica.` },
      { level: "B2", fr: `Chaque matin, ce moment ${lower} l'élégance de la vie quotidienne.`, pt: `Toda manhã, este momento ${ptTrans} a elegância da vida cotidiana.` },
      { level: "C1-C2", fr: `À travers les époques, cette tradition ${lower} l'identité culturelle de la France.`, pt: `Através das épocas, esta tradição ${ptTrans} a identidade cultural da França.` }
    ];
  }

  // Plural nouns (-s, -x)
  if (/(?:s|x)$/i.test(lower) && lower.length > 3) {
    return [
      { level: "A1", fr: `Il y a de magnifiques ${lower} à Paris.`, pt: `Há magníficos(as) ${ptTrans} em Paris.` },
      { level: "A2-B1", fr: `Nous observons attentivement ces ${lower} pendant notre promenade.`, pt: `Nós observamos atentamente estes/estas ${ptTrans} durante nosso passeio.` },
      { level: "B2", fr: `La diversité de ces ${lower} apporte une vitalité unique à la ville.`, pt: `A diversidade destes/destas ${ptTrans} traz uma vitalidade única à cidade.` },
      { level: "C1-C2", fr: `À travers les siècles, ces ${lower} ont façonné l'identité de la capitale.`, pt: `Através dos séculos, estes/estas ${ptTrans} moldaram a identidade da capital.` }
    ];
  }

  // Feminine nouns / adjectives
  if (/(?:e|tion|ure|té)$/i.test(lower) && lower.length > 3) {
    return [
      { level: "A1", fr: `C'est une très belle ${lower} dans ce quartier.`, pt: `É um(a) belo(a) ${ptTrans} neste bairro.` },
      { level: "A2-B1", fr: `Nous admirons cette ${lower} pendant notre visite de la ville.`, pt: `Nós admiramos este/esta ${ptTrans} durante nossa visita à cidade.` },
      { level: "B2", fr: `Dans la vie quotidienne, chaque ${lower} possède un charme unique.`, pt: `Na vida cotidiana, cada ${ptTrans} possui um charme único.` },
      { level: "C1-C2", fr: `La beauté de cette ${lower} enrichit le patrimoine historique français.`, pt: `A beleza deste/desta ${ptTrans} enriquece o patrimônio histórico francês.` }
    ];
  }

  // Adverbs (-ment)
  if (/ment$/i.test(lower) && lower.length > 5) {
    return [
      { level: "A1", fr: `Nous venons ${lower} dans ce petit café.`, pt: `Nós vimos ${ptTrans} neste pequeno café.` },
      { level: "A2-B1", fr: `À Paris, on se promène ${lower} le long de la Seine.`, pt: `Em Paris, passeia-se ${ptTrans} ao longo do Sena.` },
      { level: "B2", fr: `Les Parisiens apprécient ${lower} la bonne gastronomie et l'art.`, pt: `Os parisienses apreciam ${ptTrans} a boa gastronomia e a arte.` },
      { level: "C1-C2", fr: `Cette tradition culturelle s'exprime ${lower} dans chaque quartier.`, pt: `Esta tradição cultural expressa-se ${ptTrans} em cada bairro.` }
    ];
  }

  // Masculine nouns / places / default
  return [
    { level: "A1", fr: `C'est un magnifique ${lower} dans le centre de Paris.`, pt: `É um magnífico ${ptTrans} no centro de Paris.` },
    { level: "A2-B1", fr: `Nous découvrons ce ${lower} près de notre hôtel.`, pt: `Nós descobrimos este ${ptTrans} perto do nosso hotel.` },
    { level: "B2", fr: `Chaque ${lower} contribue à l'atmosphère authentique du quartier.`, pt: `Cada ${ptTrans} contribui para a atmosfera autêntica do bairro.` },
    { level: "C1-C2", fr: `L'élégance de ce ${lower} illustre parfaitement l'art de vivre parisien.`, pt: `A elegância deste ${ptTrans} ilustra perfeitamente a arte de viver parisiense.` }
  ];
}

const templatesToReplace = [
  'on entend souvent le mot',
  'A evolução do/da',
  'Durante nossa estadia',
  'Em Paris, nós vemos frequentemente',
  'Em Paris, ouve-se frequentemente',
  'Dans la conversation quotidienne',
  'pour être précis',
  'É um exemplo com',
  'É um exemplo simples com',
  'No patrimônio parisiense, o/a',
  'Na tradição urbana',
  'Pendant une promenade dans la capitale',
  'L\'évolution du',
  'L\'évolution de l\'',
  'Pendant notre séjour, nous découvrons',
  'C\'est '
];

function isTemplateSentence(text: string): boolean {
  return (
    text.includes('on entend souvent le mot') ||
    text.includes('A evolução do/da') ||
    text.includes('Durante nossa estadia') ||
    text.includes('Em Paris, nós vemos frequentemente') ||
    text.includes('Em Paris, ouve-se frequentemente') ||
    text.includes('Dans la conversation quotidienne') ||
    text.includes('pour être précis') ||
    text.includes('É um exemplo com') ||
    text.includes('É um exemplo simples com') ||
    text.includes('No patrimônio parisiense, o/a') ||
    text.includes('Na tradição urbana') ||
    text.includes('Pendant une promenade dans la capitale') ||
    text.includes('L\'évolution du') ||
    text.includes('L\'évolution de l\'') ||
    text.includes('Pendant notre séjour, nous découvrons') ||
    (text.startsWith('C\'est ') && text.includes(' très bon.')) ||
    (text.startsWith('Voici de magnifiques ') && text.includes(' à Paris.')) ||
    (text.startsWith('Je ') && text.includes(' toujours avec plaisir.'))
  );
}

// 1. Clean lessonDictionary*.ts and functionalWordsDictionary.ts
const dataFiles = fs.readdirSync('src/data');
let cleanedFiles = 0;
let totalReplacedEntries = 0;

for (const f of dataFiles) {
  if (!f.startsWith('lessonDictionary') && f !== 'functionalWordsDictionary.ts') continue;
  const filePath = path.join('src/data', f);
  let content = fs.readFileSync(filePath, 'utf8');

  // Let's parse and replace any template examples in the file
  // Since dictionary files are valid TS objects with key -> entry, let's replace examples where template is detected
  if (!templatesToReplace.some(t => content.includes(t))) continue;

  // Let's use regex to find each dictionary entry and check if examples have template strings
  // Or simpler: let's inspect and replace template lines
  let lines = content.split('\n');
  let currentTerm = '';
  let currentPtTrans = '';
  let inExamples = false;
  let examplesBlockStart = -1;

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx];
    const termMatch = line.match(/^\s*(?:["'])?([^"':\s]+)(?:["'])?\s*:\s*\{/);
    if (termMatch) {
      currentTerm = termMatch[1];
    }
    const defMatch = line.match(/definitionPt:\s*["']([^"']+)["']/);
    if (defMatch) {
      currentPtTrans = defMatch[1].split(' / ')[0].replace(/ \([^)]+\)/g, '');
    }
    if (line.includes('examples: [')) {
      inExamples = true;
      examplesBlockStart = idx;
    }
    if (inExamples && line.includes(']')) {
      inExamples = false;
      // Check if block between examplesBlockStart and idx has template strings
      const blockStr = lines.slice(examplesBlockStart, idx + 1).join('\n');
      if (isTemplateSentence(blockStr)) {
        const newExamples = generateNaturalSentencesForWord(currentTerm, currentPtTrans || currentTerm);
        // Replace lines between examplesBlockStart + 1 and idx - 1 with newExamples
        const replacementLines = newExamples.map((ex, i) => {
          const trailingComma = i < newExamples.length - 1 ? ',' : '';
          return `      { level: "${ex.level}", fr: ${JSON.stringify(ex.fr)}, pt: ${JSON.stringify(ex.pt)} }${trailingComma}`;
        });
        lines.splice(examplesBlockStart + 1, idx - examplesBlockStart - 1, ...replacementLines);
        idx = examplesBlockStart + replacementLines.length + 1;
        totalReplacedEntries++;
      }
    }
  }

  const newContent = lines.join('\n');
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    cleanedFiles++;
    console.log(`Cleaned template examples in ${f}`);
  }
}

// 2. Clean paris_lesson_*.json vocabulary examples
let cleanedJsonFiles = 0;
for (let i = 1; i <= 25; i++) {
  const filePath = path.join('src/data', `paris_lesson_${i}.json`);
  if (!fs.existsSync(filePath)) continue;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let modified = false;

  const vocab = data.vocabularyDictionary || data.vocabulary || [];
  for (const item of vocab) {
    const term = item.term || item.wordFr || '';
    const ptTrans = (item.definitionPt || term).split(' / ')[0].replace(/ \([^)]+\)/g, '');
    const exFr = item.exampleFr || '';
    const exPt = item.examplePt || '';
    if (isTemplateSentence(exFr) || isTemplateSentence(exPt)) {
      const nat = generateNaturalSentencesForWord(term, ptTrans)[0]; // take A1 or A2-B1 natural sentence
      item.exampleFr = nat.fr;
      item.examplePt = nat.pt;
      modified = true;
    }
    if (item.examples && Array.isArray(item.examples)) {
      let hasTemplate = false;
      for (const ex of item.examples) {
        if (isTemplateSentence(ex.fr || '') || isTemplateSentence(ex.pt || '')) {
          hasTemplate = true;
          break;
        }
      }
      if (hasTemplate) {
        item.examples = generateNaturalSentencesForWord(term, ptTrans);
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    cleanedJsonFiles++;
    console.log(`Cleaned template examples in paris_lesson_${i}.json`);
  }
}

console.log(`Summary: Cleaned ${cleanedFiles} dictionary TS files (${totalReplacedEntries} entries replaced) and ${cleanedJsonFiles} lesson JSON files.`);
