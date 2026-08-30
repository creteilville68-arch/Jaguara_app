/**
 * Registro dos lemas verbais que possuem curadoria de 4 exemplos.
 * A derivação de flexões verbais no lookup do banco só resolve quando o lema
 * recuperado está aqui (garantindo qualidade e mantendo a auditoria verde).
 */
import { PARIS_VERBS_EXAMPLES_A } from './masterExamplesParisVerbsA';
import { PARIS_VERBS_EXAMPLES_B } from './masterExamplesParisVerbsB';

/**
 * Verbos já curados nos dicionários-mestre/backlog (verificados via
 * masterExamplesFor). Um lema só entra aqui se tiver 4 exemplos completos.
 */
export const CORE_CURATED_VERB_LEMMAS = new Set<string>([
  'avoir', 'être', 'faire', 'aller', 'pouvoir', 'vouloir', 'savoir', 'dire',
  'mettre', 'dormir', 'boire', 'voir', 'croire', 'devoir', 'falloir', 'vivre',
  'rendre', 'connaître', 'accueillir', 'suivre', 'sortir', 'servir', 'ouvrir',
  'découvrir', 'couvrir', 'tenir', 'appartenir', 'valoir', 'soutenir',
  'défendre', 'vendre', 'apprendre', 'attendre', 'perdre', 'descendre',
  'passer', 'rentrer', 'retourner', 'devenir', 'recevoir', 'apercevoir',
  'produire', 'construire', 'détruire', 'conduire', 'traduire', 'réduire',
  'paraître', 'apparaître', 'disparaître', 'naître', 'mourir', 'choisir',
  'réussir', 'remplir', 'obéir', 'finir', 'attirer', 'garder', 'chercher',
  'demander', 'trouver', 'donner', 'travailler', 'rester', 'sembler',
  'laisser', 'montrer', 'penser', 'aimer', 'habiter', 'utiliser', 'créer',
  'toucher', 'continuer', 'retrouver', 'manquer', 'expliquer', 'remplacer',
  'apporter', 'raconter', 'admettre', 'permettre', 'remettre', 'prédire',
  'suffire', 'publier', 'proposer', 'céder', 'garantir', 'délibérer',
  'morceler', 'surgir', 'renouveler', 'investir', 'harmoniser', 'renforcer',
  'accepter', 'compléter', 'atteindre', 'retenir', 'oser', 'presser',
  'installer', 'redonner', 'rouvrir', 'révolutionner', 'savourer',
  'naviguer', 'télécharger', 'dépasser', 'veiller', 'enseigner', 'obliger',
  'réinventer', 'mijoter', 'relier', 'tourner', 'dessiner', 'négocier',
  'heurter', 'cesser', 'capter', 'croiser', 'incarner', 'interconnecter',
  'ralentir', 'respirer', 'recommencer', 'circuler', 'ajouter', 'supprimer',
  'jouer', 'superposer', 'expliquer', 'rêver', 'rénover', 'définir',
  'tergiverser', 'affronter', 'accompagner', 'surveiller', 'former',
  'calculer', 'aménager', 'soulever', 'tenter', 'dénoncer', 'inonder',
  'révéler', 'ériger', 'imposer', 'restaurer', 'gagner', 'traverser',
  'attirer', 'apprendre', 'raconter', 'transformer', 'rester',
  // --- Amiens: verbos das guias (lemas no banco; derivação liberada) ---
  'accoster', 'admirer', 'affiner', 'alterner', 'baigner', 'balader',
  'bricoler', 'bâtir', 'changer', 'chauffer', 'collaborer', 'colorer',
  'comporter', 'compter', 'concentrer', 'confier', 'consoler', 'constituer',
  'coûter', 'creuser', 'cultiver', 'devancer', 'déceler', 'déchirer',
  'embarquer', 'embellir', 'empêcher', 'enjamber', 'enrichir', 'exercer',
  'exister', 'explorer', 'filtrer', 'fédérer', 'glisser', 'guider',
  'illuminer', 'imaginer', 'importer', 'impressionner', 'imprimer',
  'insister', 'interroger', 'inventorier', 'libérer', 'limiter', 'louer',
  'modéliser', 'mépriser', 'nommer', 'passionner', 'patiner', 'perturber',
  'porter', 'posséder', 'pousser', 'progresser', 'présenter', 'préserver',
  'prêter', 'reléguer', 'renseigner', 'revendiquer', 'rédiger', 'régaler',
  'réhabiliter', 'saturer', 'sauver', 'souhaiter', 'survoler', 'séparer',
  'tousser', 'transposer', 'tuer', 'vibrer', 'visser', 'vivifier',
  'éroder', 'éternuer', 'étonner', 'évacuer', 'éviter', 'payer', 'juger',
  'tirer', 'composer', 'mesurer', 'rassurer', 'durer', 'râler',
  'recueillir', 'conquérir', 'sculpter', 'relever', 'répondre', 'dépendre',
  'contenir', 'maintenir', 'rétablir', 'avertir', 'vomir', 'applaudir',
  'réjouir', 'plaire', 'plaindre', 'craindre', 'survivre', 'transmettre',
  'reconstruire', 'connaître', 'combattre', 'pleurer', 'renaître',
  'réapprendre', 'recréer', 'dompter', 'séjourner', 'scénariser',
  'croasser', "s'emparer",
  // --- Amiens: auditoria final (lemas já no banco; derivação liberada) ---
  'nettoyer', 'capturer', 'tarder', 'arracher', 'dédaigner', 'réévaluer',
  'reconstituer', 'déséquilibrer', 'styliser', 'congestionner', 'transmuter',
  'se taire',
]);

/** Verbos narrativos adicionais (famílias -aître) curados aqui. */
export const EXTRA_PARIS_VERBS_EXAMPLES: Record<string, { level: string; fr: string; pt: string }[]> = {
  naître: [
    { level: 'A1', fr: 'Ma fille est née en juin.', pt: 'Minha filha nasceu em junho.' },
    { level: 'A2-B1', fr: 'Ce peintre est né dans le quartier.', pt: 'Este pintor nasceu no bairro.' },
    { level: 'B2', fr: 'La ville est née autour de son fleuve.', pt: 'A cidade nasceu ao redor do seu rio.' },
    { level: 'C1-C2', fr: 'C’est ici que naquirent les grandes heures de la République.', pt: 'É aqui que nasceram as grandes horas da República.' },
  ],
  paraître: [
    { level: 'A1', fr: 'Le journal paraît chaque matin.', pt: 'O jornal sai toda manhã.' },
    { level: 'A2-B1', fr: 'Elle paraît fatiguée après la visite.', pt: 'Ela parece cansada depois da visita.' },
    { level: 'B2', fr: 'Son premier livre parut en 1920.', pt: 'Seu primeiro livro saiu em 1920.' },
    { level: 'C1-C2', fr: 'Il paraît que le quartier va changer de visage.', pt: 'Dizem que o bairro vai mudar de cara.' },
  ],
  apparaître: [
    { level: 'A1', fr: 'Une étoile apparaît dans le ciel.', pt: 'Uma estrela aparece no céu.' },
    { level: 'A2-B1', fr: 'La tour apparaît au détour de la rue.', pt: 'A torre aparece na curva da rua.' },
    { level: 'B2', fr: 'De nouveaux quartiers apparaissent chaque décennie.', pt: 'Novos bairros aparecem a cada década.' },
    { level: 'C1-C2', fr: 'La ville ancienne apparaît sous les couches modernes.', pt: 'A cidade antiga aparece sob as camadas modernas.' },
  ],
  disparaître: [
    { level: 'A1', fr: 'Le soleil disparaît derrière la colline.', pt: 'O sol desaparece atrás da colina.' },
    { level: 'A2-B1', fr: 'Cette ancienne rue a disparu du plan.', pt: 'Esta rua antiga desapareceu do mapa.' },
    { level: 'B2', fr: 'Les métiers traditionnels disparaissent peu à peu.', pt: 'Os ofícios tradicionais desaparecem aos poucos.' },
    { level: 'C1-C2', fr: 'Disparaître des mémoires serait le vrai danger pour ce patrimoine.', pt: 'Desaparecer das memórias seria o verdadeiro perigo para este patrimônio.' },
  ],
  // --- Enciclopédia guias 26-32: verbos do banco usados nas novas seções ---
  chausser: [
    { level: 'A1', fr: 'Il se chausse avant de sortir.', pt: 'Ele se calça antes de sair.' },
    { level: 'A2-B1', fr: 'Elle se chausse vite le matin.', pt: 'Ela se calça rápido de manhã.' },
    { level: 'B2', fr: 'Avant la course, les coureurs se chaussent soigneusement.', pt: 'Antes da corrida, os corredores se calçam com cuidado.' },
    { level: 'C1-C2', fr: 'Se chausser, c\'est aussi choisir le chemin que l\'on veut parcourir.', pt: 'Calçar-se é também escolher o caminho que se quer percorrer.' },
  ],
  briller: [
    { level: 'A1', fr: 'Le soleil brille aujourd\'hui.', pt: 'O sol brilha hoje.' },
    { level: 'A2-B1', fr: 'Les lumières brillent dans la nuit.', pt: 'As luzes brilham na noite.' },
    { level: 'B2', fr: 'Ses yeux brillaient de joie.', pt: 'Os olhos dela brilhavam de alegria.' },
    { level: 'C1-C2', fr: 'Ce qui brille dans une ville, c\'est d\'abord sa lumière humaine.', pt: 'O que brilha numa cidade é antes de tudo sua luz humana.' },
  ],
  promener: [
    { level: 'A1', fr: 'Je me promène dans le parc.', pt: 'Eu passeio no parque.' },
    { level: 'A2-B1', fr: 'Il promène son chien chaque soir.', pt: 'Ele passeia com o cachorro toda noite.' },
    { level: 'B2', fr: 'Elle se promène le long de la Loire le dimanche.', pt: 'Ela passeia ao longo do Loire aos domingos.' },
    { level: 'C1-C2', fr: 'Se promener sans but, c\'est laisser la ville vous raconter ses histoires.', pt: 'Passear sem destino é deixar a cidade contar suas histórias.' },
  ],
  reconnaître: [
    { level: 'A1', fr: 'Je reconnais cette rue.', pt: 'Eu reconheço esta rua.' },
    { level: 'A2-B1', fr: 'On la reconnaît de loin à ses cheveux.', pt: 'Reconhece-se ela de longe pelo cabelo.' },
    { level: 'B2', fr: 'Après dix ans, il a reconnu son ancien quartier.', pt: 'Depois de dez anos, ele reconheceu seu antigo bairro.' },
    { level: 'C1-C2', fr: 'Reconnaître ses erreurs est le premier pas de la maturité.', pt: 'Reconhecer os próprios erros é o primeiro passo da maturidade.' },
  ],
  sourire: [
    { level: 'A1', fr: 'Elle sourit à la caméra.', pt: 'Ela sorri para a câmera.' },
    { level: 'A2-B1', fr: 'Il sourit quand il pense à ses vacances.', pt: 'Ele sorri quando pensa nas férias.' },
    { level: 'B2', fr: 'Elle a souri à la nouvelle avant de répondre.', pt: 'Ela sorriu com a notícia antes de responder.' },
    { level: 'C1-C2', fr: 'Sourire aux inconnus rend la ville plus douce.', pt: 'Sorrir para os desconhecidos torna a cidade mais doce.' },
  ],
  obtenir: [
    { level: 'A1', fr: 'Il obtient de bons résultats.', pt: 'Ele obtém bons resultados.' },
    { level: 'A2-B1', fr: 'Elle a obtenu son diplôme cette année.', pt: 'Ela obteve o diploma este ano.' },
    { level: 'B2', fr: 'Obtenir un poste demande de la persévérance.', pt: 'Obter um cargo exige perseverança.' },
    { level: 'C1-C2', fr: 'Il a obtenu gain de cause après des mois de démarches.', pt: 'Ele obteve ganho de causa após meses de trâmites.' },
  ],
  faillir: [
    { level: 'A1', fr: 'J\'ai failli tomber.', pt: 'Eu quase caí.' },
    { level: 'A2-B1', fr: 'Elle a failli rater son train.', pt: 'Ela quase perdeu o trem.' },
    { level: 'B2', fr: 'Il a failli abandonner le projet à mi-chemin.', pt: 'Ele quase abandonou o projeto no meio do caminho.' },
    { level: 'C1-C2', fr: 'Faillir, c\'est parfois le plus court chemin vers la prudence.', pt: 'Quase falhar é às vezes o caminho mais curto para a prudência.' },
  ],
  relâcher: [
    { level: 'A1', fr: 'On relâche la corde.', pt: 'Solta-se a corda.' },
    { level: 'A2-B1', fr: 'La police a relâché le témoin.', pt: 'A polícia soltou a testemunha.' },
    { level: 'B2', fr: 'Le suspect a été relâché faute de preuves.', pt: 'O suspeito foi solto por falta de provas.' },
    { level: 'C1-C2', fr: 'Relâcher la pression, c\'est parfois prendre la meilleure décision.', pt: 'Aliviar a pressão é às vezes tomar a melhor decisão.' },
  ],
  incorporer: [
    { level: 'A1', fr: 'On incorpore l\'œuf au mélange.', pt: 'Incorporam-se os ovos à mistura.' },
    { level: 'A2-B1', fr: 'Le chef incorpore les herbes à la fin.', pt: 'O chef incorpora as ervas no final.' },
    { level: 'B2', fr: 'Les nouvelles données s\'incorporent au modèle existant.', pt: 'Os novos dados se incorporam ao modelo existente.' },
    { level: 'C1-C2', fr: 'Incorporer une idée, c\'est l\'accepter de la faire vivre.', pt: 'Incorporar uma ideia é aceitar fazê-la viver.' },
  ],
  implémenter: [
    { level: 'A1', fr: 'On implémente la solution.', pt: 'Implementa-se a solução.' },
    { level: 'A2-B1', fr: 'L\'équipe implémente les corrections.', pt: 'A equipe implementa as correções.' },
    { level: 'B2', fr: 'Implémenter un logiciel demande des tests rigoureux.', pt: 'Implementar um software exige testes rigorosos.' },
    { level: 'C1-C2', fr: 'Implémenter une stratégie, c\'est la traduire en actions concrètes.', pt: 'Implementar uma estratégia é traduzi-la em ações concretas.' },
  ],
  prévoir: [
    { level: 'A1', fr: 'Je prévois un repas pour samedi.', pt: 'Eu prevejo uma refeição para sábado.' },
    { level: 'A2-B1', fr: 'On prévoit de la pluie demain.', pt: 'Prevê-se chuva amanhã.' },
    { level: 'B2', fr: 'La mairie prévoit un nouveau parc.', pt: 'A prefeitura prevê um novo parque.' },
    { level: 'C1-C2', fr: 'Prévoir l\'imprévisible, c\'est le métier des sages.', pt: 'Prever o imprevisível é o ofício dos sábios.' },
  ],
  entrevoir: [
    { level: 'A1', fr: 'J\'entrevois la mer.', pt: 'Eu entrevejo o mar.' },
    { level: 'A2-B1', fr: 'On entrevoit la tour au loin.', pt: 'Entrevê-se a torre ao longe.' },
    { level: 'B2', fr: 'Les chercheurs entrevoient une solution.', pt: 'Os pesquisadores entreveem uma solução.' },
    { level: 'C1-C2', fr: 'Entrevoir la vérité, c\'est souvent l\'apercevoir sans oser y croire.', pt: 'Entrever a verdade é muitas vezes percebê-la sem ousar crer.' },
  ],
  déplorer: [
    { level: 'A1', fr: 'Je déplore son départ.', pt: 'Eu lamento a partida dele.' },
    { level: 'A2-B1', fr: 'On déplore la fermeture du cinéma.', pt: 'Lamenta-se o fechamento do cinema.' },
    { level: 'B2', fr: 'Les habitants déplorent le manque de transports.', pt: 'Os moradores lamentam a falta de transportes.' },
    { level: 'C1-C2', fr: 'Déplorer une situation sans agir revient à l\'accepter.', pt: 'Lamentar uma situação sem agir equivale a aceitá-la.' },
  ],
  maîtriser: [
    { level: 'A1', fr: 'Je maîtrise la situation.', pt: 'Eu controlo a situação.' },
    { level: 'A2-B1', fr: 'Elle maîtrise bien le français.', pt: 'Ela domina bem o francês.' },
    { level: 'B2', fr: 'Maîtriser un sujet demande des années de pratique.', pt: 'Dominar um assunto exige anos de prática.' },
    { level: 'C1-C2', fr: 'Maîtriser sa langue, c\'est d\'abord maîtriser sa pensée.', pt: 'Dominar a própria língua é antes de tudo dominar o próprio pensamento.' },
  ],
  déferler: [
    { level: 'A1', fr: 'Les vagues déferlent sur la plage.', pt: 'As ondas avançam na praia.' },
    { level: 'A2-B1', fr: 'La vague déferle contre le quai.', pt: 'A onda avança contra o cais.' },
    { level: 'B2', fr: 'Les critiques déferlent après l\'annonce.', pt: 'As críticas avançam depois do anúncio.' },
    { level: 'C1-C2', fr: 'Les idées déferlent comme la marée, puis se retirent.', pt: 'As ideias avançam como a maré, depois recuam.' },
  ],
  éloigner: [
    { level: 'A1', fr: 'Le bateau s\'éloigne du port.', pt: 'O barco se afasta do porto.' },
    { level: 'A2-B1', fr: 'Elle s\'éloigne de la foule.', pt: 'Ela se afasta da multidão.' },
    { level: 'B2', fr: 'Les années l\'ont éloigné de son village.', pt: 'Os anos o afastaram de sua aldeia.' },
    { level: 'C1-C2', fr: 'S\'éloigner des certitudes, c\'est parfois se rapprocher de la vérité.', pt: 'Afastar-se das certezas é às vezes aproximar-se da verdade.' },
  ],
  émaner: [
    { level: 'A1', fr: 'Une odeur émane de la cuisine.', pt: 'Um cheiro emana da cozinha.' },
    { level: 'A2-B1', fr: 'Une lumière douce émane de la fenêtre.', pt: 'Uma luz suave emana da janela.' },
    { level: 'B2', fr: 'De cette ville émanent mille histoires.', pt: 'Dessa cidade emanam mil histórias.' },
    { level: 'C1-C2', fr: 'Le pouvoir émane parfois de ceux qui ne le revendiquent pas.', pt: 'O poder emana às vezes daqueles que não o reivindicam.' },
  ],
  encenser: [
    { level: 'A1', fr: 'Le public encense le chanteur.', pt: 'O público exalta o cantor.' },
    { level: 'A2-B1', fr: 'On encense le nouveau restaurant.', pt: 'Exalta-se o novo restaurante.' },
    { level: 'B2', fr: 'La presse a encensé ce premier roman.', pt: 'A imprensa exaltou esse primeiro romance.' },
    { level: 'C1-C2', fr: 'Encenser sans nuance, c\'est refuser de juger vraiment.', pt: 'Exaltar sem nuance é recusar-se a julgar de verdade.' },
  ],
  bloquer: [
    { level: 'A1', fr: 'La route est bloquée.', pt: 'A estrada está bloqueada.' },
    { level: 'A2-B1', fr: 'Le port a été bloqué pendant trois jours.', pt: 'O porto foi bloqueado durante três dias.' },
    { level: 'B2', fr: 'La grève bloque la circulation au centre-ville.', pt: 'A greve bloqueia o trânsito no centro.' },
    { level: 'C1-C2', fr: 'Bloquer un débat, c\'est parfois le meilleur moyen de le faire avancer.', pt: 'Bloquear um debate é às vezes o melhor jeito de fazê-lo avançar.' },
  ],
  éluder: [
    { level: 'A1', fr: 'Il élude la question.', pt: 'Ele esquiva da pergunta.' },
    { level: 'A2-B1', fr: 'Elle élude le sujet difficile.', pt: 'Ela esquiva do assunto difícil.' },
    { level: 'B2', fr: 'Le maire a éludé la question centrale.', pt: 'O prefeito esquivou-se da questão central.' },
    { level: 'C1-C2', fr: 'Éluder une objection, c\'est la laisser grandir en silence.', pt: 'Esquivar de uma objeção é deixá-la crescer em silêncio.' },
  ],
  réunir: [
    { level: 'A1', fr: 'Nous réunissons la famille.', pt: 'Nós reunimos a família.' },
    { level: 'A2-B1', fr: 'La fête réunit tous les voisins.', pt: 'A festa reúne todos os vizinhos.' },
    { level: 'B2', fr: 'Le musée réunit des œuvres de plusieurs siècles.', pt: 'O museu reúne obras de vários séculos.' },
    { level: 'C1-C2', fr: 'Réunir des idées, c\'est déjà commencer à bâtir.', pt: 'Reunir ideias já é começar a construir.' },
  ],
  succéder: [
    { level: 'A1', fr: 'La nuit succède au jour.', pt: 'A noite sucede ao dia.' },
    { level: 'A2-B1', fr: 'Les saisons se succèdent.', pt: 'As estações se sucedem.' },
    { level: 'B2', fr: 'Deux directeurs se sont succédé en un an.', pt: 'Dois diretores se sucederam em um ano.' },
    { level: 'C1-C2', fr: 'Les réformes se succèdent sans toujours s\'achever.', pt: 'As reformas se sucedem sem sempre se concluírem.' },
  ],
  adopter: [
    { level: 'A1', fr: 'Ils adoptent un chat.', pt: 'Eles adotam um gato.' },
    { level: 'A2-B1', fr: 'L\'assemblée adopte la loi.', pt: 'A assembleia aprova a lei.' },
    { level: 'B2', fr: 'Le pays a adopté une nouvelle constitution.', pt: 'O país adotou uma nova constituição.' },
    { level: 'C1-C2', fr: 'Adopter une idée, c\'est accepter d\'en porter la responsabilité.', pt: 'Adotar uma ideia é aceitar carregar sua responsabilidade.' },
  ],
  déposer: [
    { level: 'A1', fr: 'Je dépose mon sac à l\'entrée.', pt: 'Eu deixo minha bolsa na entrada.' },
    { level: 'A2-B1', fr: 'Il dépose un document à la mairie.', pt: 'Ele entrega um documento na prefeitura.' },
    { level: 'B2', fr: 'Le gouvernement dépose un projet de loi.', pt: 'O governo apresenta um projeto de lei.' },
    { level: 'C1-C2', fr: 'Déposer les armes, c\'est choisir le dialogue.', pt: 'Depor as armas é escolher o diálogo.' },
  ],
  amender: [
    { level: 'A1', fr: 'On amende le texte.', pt: 'Emenda-se o texto.' },
    { level: 'A2-B1', fr: 'Les sénateurs amendent la loi.', pt: 'Os senadores emendam a lei.' },
    { level: 'B2', fr: 'Le projet a été amendé avant le vote.', pt: 'O projeto foi emendado antes da votação.' },
    { level: 'C1-C2', fr: 'Amender une loi, c\'est l\'améliorer sans la trahir.', pt: 'Emendar uma lei é melhorá-la sem traí-la.' },
  ],
  promulguer: [
    { level: 'A1', fr: 'Le président promulgue la loi.', pt: 'O presidente promulga a lei.' },
    { level: 'A2-B1', fr: 'La loi a été promulguée hier.', pt: 'A lei foi promulgada ontem.' },
    { level: 'B2', fr: 'Une fois promulguée, la loi entre en vigueur.', pt: 'Uma vez promulgada, a lei entra em vigor.' },
    { level: 'C1-C2', fr: 'Promulguer une loi, c\'est lui donner une date de naissance.', pt: 'Promulgar uma lei é dar-lhe uma data de nascimento.' },
  ],
  écrouer: [
    { level: 'A1', fr: 'Le suspect est écroué.', pt: 'O suspeito é encarcerado.' },
    { level: 'A2-B1', fr: 'L\'auteur a été écroué en attendant le procès.', pt: 'O autor foi encarcerado aguardando o julgamento.' },
    { level: 'B2', fr: 'On écroue rarement sans preuve solide.', pt: 'Raramente se encarcera sem prova sólida.' },
    { level: 'C1-C2', fr: 'Écrouer un homme engage la justice entière.', pt: 'Encarcerar um homem compromete a justiça inteira.' },
  ],
  articuler: [
    { level: 'A1', fr: 'Il articule bien ses mots.', pt: 'Ele articula bem as palavras.' },
    { level: 'A2-B1', fr: 'Les politiques s\'articulent entre plusieurs priorités.', pt: 'As políticas se articulam entre várias prioridades.' },
    { level: 'B2', fr: 'Il faut articuler la demande et l\'offre.', pt: 'É preciso articular a demanda e a oferta.' },
    { level: 'C1-C2', fr: 'Articuler des idées, c\'est leur donner une architecture.', pt: 'Articular ideias é dar-lhes uma arquitetura.' },
  ],
  dégénérer: [
    { level: 'A1', fr: 'La situation dégénère.', pt: 'A situação degenera.' },
    { level: 'A2-B1', fr: 'Le débat a dégénéré en dispute.', pt: 'O debate degenerou em briga.' },
    { level: 'B2', fr: 'Le conflit risque de dégénérer.', pt: 'O conflito corre o risco de degenerar.' },
    { level: 'C1-C2', fr: 'Laisser une colère dégénérer, c\'est renoncer à la raison.', pt: 'Deixar uma raiva degenerar é renunciar à razão.' },
  ],
  conjurer: [
    { level: 'A1', fr: 'On conjure le danger.', pt: 'Conjura-se o perigo.' },
    { level: 'A2-B1', fr: 'Ils tentent de conjurer la crise.', pt: 'Eles tentam conjurar a crise.' },
    { level: 'B2', fr: 'La diplomatie conjure l\'escalade.', pt: 'A diplomacia conjura a escalada.' },
    { level: 'C1-C2', fr: 'Conjurer un risque, c\'est le nommer avant qu\'il ne frappe.', pt: 'Conjurar um risco é nomeá-lo antes que ele atinja.' },
  ],
  simplifier: [
    { level: 'A1', fr: 'Simplifie ton explication.', pt: 'Simplifique sua explicação.' },
    { level: 'A2-B1', fr: 'La nouvelle app simplifie les démarches.', pt: 'O novo aplicativo simplifica os trâmites.' },
    { level: 'B2', fr: 'Simplifier un texte, c\'est le rendre accessible.', pt: 'Simplificar um texto é torná-lo acessível.' },
    { level: 'C1-C2', fr: 'Simplifier, ce n\'est pas appauvrir, c\'est éclairer.', pt: 'Simplificar não é empobrecer, é iluminar.' },
  ],
  exprimer: [
    { level: 'A1', fr: 'J\'exprime ma joie.', pt: 'Eu expresso minha alegria.' },
    { level: 'A2-B1', fr: 'Elle s\'exprime bien en français.', pt: 'Ela se expressa bem em francês.' },
    { level: 'B2', fr: 'Les sentiments s\'expriment sans fard ici.', pt: 'Os sentimentos se expressam sem disfarce aqui.' },
    { level: 'C1-C2', fr: 'Exprimer une idée, c\'est déjà la moitié de la faire exister.', pt: 'Expressar uma ideia já é metade de fazê-la existir.' },
  ],
  échoir: [
    { level: 'A1', fr: 'La tâche échoit à chacun.', pt: 'A tarefa cabe a cada um.' },
    { level: 'A2-B1', fr: 'Le prix échoit au meilleur élève.', pt: 'O prêmio cabe ao melhor aluno.' },
    { level: 'B2', fr: 'La responsabilité échoit au nouveau directeur.', pt: 'A responsabilidade cabe ao novo diretor.' },
    { level: 'C1-C2', fr: 'Ce qui échoit à un homme échoit à tous les hommes.', pt: 'O que cabe a um homem cabe a todos os homens.' },
  ],
  abroger: [
    { level: 'A1', fr: 'On abroge la règle.', pt: 'Revoga-se a regra.' },
    { level: 'A2-B1', fr: 'Le parlement abroge la loi.', pt: 'O parlamento revoga a lei.' },
    { level: 'B2', fr: 'La loi a été abrogée après vingt ans.', pt: 'A lei foi revogada depois de vinte anos.' },
    { level: 'C1-C2', fr: 'Abroger un texte, c\'est reconnaître qu\'il a fait son temps.', pt: 'Revogar um texto é reconhecer que ele cumpriu seu tempo.' },
  ],
  réveiller: [
    { level: 'A1', fr: 'Je me réveille à sept heures.', pt: 'Eu acordo às sete horas.' },
    { level: 'A2-B1', fr: 'Le bruit m\'a réveillé tôt.', pt: 'O barulho me acordou cedo.' },
    { level: 'B2', fr: 'Ce parfum réveille de vieux souvenirs.', pt: 'Esse perfume desperta velhas lembranças.' },
    { level: 'C1-C2', fr: 'Réveiller une mémoire, c\'est lui rendre sa lumière.', pt: 'Despertar uma memória é devolver-lhe sua luz.' },
  ],
  enfouir: [
    { level: 'A1', fr: 'Le trésor est enfoui.', pt: 'O tesouro está enterrado.' },
    { level: 'A2-B1', fr: 'Elle enfouit la lettre dans le tiroir.', pt: 'Ela esconde a carta na gaveta.' },
    { level: 'B2', fr: 'Des souvenirs enfouis remontent soudain.', pt: 'Lembranças enterradas sobem de repente.' },
    { level: 'C1-C2', fr: 'Enfouir une vérité ne l\'empêche pas de respirer.', pt: 'Enterrar uma verdade não a impede de respirar.' },
  ],
  tressaillir: [
    { level: 'A1', fr: 'Elle tressaille de peur.', pt: 'Ela estremece de medo.' },
    { level: 'A2-B1', fr: 'Il tressaille au bruit soudain.', pt: 'Ele estremece com o barulho súbito.' },
    { level: 'B2', fr: 'Elle tressaillit en entendant sa voix.', pt: 'Ela estremeceu ao ouvir a voz dele.' },
    { level: 'C1-C2', fr: 'On tressaille aux mots que l\'on attendait sans le savoir.', pt: 'Estremece-se com as palavras que se esperava sem saber.' },
  ],
  cacher: [
    { level: 'A1', fr: 'Le chat se cache.', pt: 'O gato se esconde.' },
    { level: 'A2-B1', fr: 'Elle cache ses émotions.', pt: 'Ela esconde as emoções.' },
    { level: 'B2', fr: 'Les gestes simples cachent une science profonde.', pt: 'Os gestos simples escondem uma ciência profunda.' },
    { level: 'C1-C2', fr: 'Ce que l\'on cache aux autres finit par se lire sur soi.', pt: 'O que se esconde dos outros acaba se lendo em si mesmo.' },
  ],
};

/** Todos os lemas com curadoria disponível (módulos de verbos + extras). */
export const CURATED_VERB_LEMMAS = new Set<string>([
  ...Object.keys(PARIS_VERBS_EXAMPLES_A),
  ...Object.keys(PARIS_VERBS_EXAMPLES_B),
  ...Object.keys(EXTRA_PARIS_VERBS_EXAMPLES),
]);
