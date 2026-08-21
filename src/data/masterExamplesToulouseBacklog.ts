/**
 * Curadoria complementar de exemplos para o backlog de Toulouse.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Toulouse e ainda não tinham os 4 exemplos.
 *
 * `masterExamplesFor` une este mapa aos demais, dando prioridade a estes
 * exemplos curados sobre qualquer entrada parcial do dicionário comum.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const TOULOUSE_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  charcuterie: [
    { level: 'A1', fr: 'La charcuterie est délicieuse.', pt: 'A charcutaria é deliciosa.' },
    { level: 'A2-B1', fr: 'Au marché, nous avons acheté de la charcuterie.', pt: 'No mercado, compramos embutidos.' },
    { level: 'B2', fr: 'La charcuterie, servie en tranches fines, accompagne le fromage et le pain.', pt: 'Os embutidos, servidos em fatias finas, acompanham o queijo e o pão.' },
    { level: 'C1-C2', fr: 'La charcuterie du Sud-Ouest raconte un terroir : le canard, le porc, le temps lent des fumoirs.', pt: 'Os embutidos do Sudoeste contam um terroir: o pato, o porco, o tempo lento dos defumadores.' },
  ],
  portrait: [
    { level: 'A1', fr: 'Le portrait est au mur.', pt: 'O retrato está na parede.' },
    { level: 'A2-B1', fr: 'Le musée expose des portraits du XIXe siècle.', pt: 'O museu expõe retratos do século XIX.' },
    { level: 'B2', fr: 'Ce portrait, peint à la fin du siècle, saisit une expression fugitive.', pt: 'Este retrato, pintado no fim do século, captura uma expressão fugaz.' },
    { level: 'C1-C2', fr: 'Un portrait réussi ne ressemble pas seulement au modèle : il ressemble à l’époque.', pt: 'Um retrato bem-sucedido não se parece apenas com o modelo: parece com a época.' },
  ],
  dorures: [
    { level: 'A1', fr: 'Les dorures brillent.', pt: 'Os dourados brilham.' },
    { level: 'A2-B1', fr: 'Les dorures du plafond attirent le regard.', pt: 'Os dourados do teto atraem o olhar.' },
    { level: 'B2', fr: 'Les dorures, patinées par le temps, gardent un éclat discret.', pt: 'Os dourados, patinados pelo tempo, guardam um brilho discreto.' },
    { level: 'C1-C2', fr: 'Les dorures d’un salon illustrent le goût d’une époque pour la lumière et le prestige.', pt: 'Os dourados de um salão ilustram o gosto de uma época por luz e prestígio.' },
  ],
  hall: [
    { level: 'A1', fr: 'Le hall est grand.', pt: 'O hall é grande.' },
    { level: 'A2-B1', fr: 'On se retrouve dans le hall de la gare.', pt: 'Encontramo-nos no hall da estação.' },
    { level: 'B2', fr: 'Le hall, traversé par des centaines de voyageurs, vit au rythme des départs.', pt: 'O hall, atravessado por centenas de viajantes, vive no ritmo das partidas.' },
    { level: 'C1-C2', fr: 'Dans le hall de l’observatoire, le silence des collections contrastait avec le tumulte de la ville.', pt: 'No hall do observatório, o silêncio das coleções contrastava com o tumulto da cidade.' },
  ],
  fleuriste: [
    { level: 'A1', fr: 'La fleuriste vend des fleurs.', pt: 'A florista vende flores.' },
    { level: 'A2-B1', fr: 'La fleuriste prépare un bouquet pour la fête.', pt: 'A florista prepara um buquê para a festa.' },
    { level: 'B2', fr: 'La fleuriste, qui connaît chaque saison, choisit les violettes avec soin.', pt: 'A florista, que conhece cada estação, escolhe as violetas com cuidado.' },
    { level: 'C1-C2', fr: 'Une bonne fleuriste compose moins un bouquet qu’une émotion : chaque tige a sa place.', pt: 'Uma boa florista compõe menos um buquê do que uma emoção: cada haste tem seu lugar.' },
  ],
  'au lieu de': [
    { level: 'A1', fr: 'Je bois du thé au lieu de café.', pt: 'Bebo chá em vez de café.' },
    { level: 'A2-B1', fr: 'Au lieu de prendre la voiture, ils ont marché.', pt: 'Em vez de pegar o carro, eles caminharam.' },
    { level: 'B2', fr: 'Au lieu de détruire les œuvres, la Révolution les a transformées en musée.', pt: 'Em vez de destruir as obras, a Revolução as transformou em museu.' },
    { level: 'C1-C2', fr: 'Au lieu de subir le temps, certaines villes choisissent de le mettre en scène.', pt: 'Em vez de sofrer o tempo, algumas cidades escolhem colocá-lo em cena.' },
  ],
  'en revanche': [
    { level: 'A1', fr: 'Il est tard ; en revanche, la nuit est belle.', pt: 'Está tarde; em compensação, a noite está bonita.' },
    { level: 'A2-B1', fr: 'Le centre est bruyant ; en revanche, la rive est calme.', pt: 'O centro é barulhento; em compensação, a margem é calma.' },
    { level: 'B2', fr: 'La visite était longue ; en revanche, elle nous a tout expliqué.', pt: 'A visita foi longa; em compensação, ela nos explicou tudo.' },
    { level: 'C1-C2', fr: 'La ville a perdu son port industriel ; en revanche, elle a gagné des quais ouverts aux promeneurs.', pt: 'A cidade perdeu seu porto industrial; em compensação, ganhou cais abertos aos passeios.' },
  ],
  'assez de': [
    { level: 'A1', fr: 'J’ai assez de pain.', pt: 'Tenho pão suficiente.' },
    { level: 'A2-B1', fr: 'Nous n’avons pas assez de temps pour tout voir.', pt: 'Não temos tempo suficiente para ver tudo.' },
    { level: 'B2', fr: 'Il n’y a jamais assez de jours pour une ville comme Toulouse.', pt: 'Nunca há dias suficientes para uma cidade como Toulouse.' },
    { level: 'C1-C2', fr: 'Assez de savoir ne suffit pas : il faut aussi le goût de regarder.', pt: 'Saber bastante não basta: é preciso também o gosto de olhar.' },
  ],
  dès: [
    { level: 'A1', fr: 'Il part dès demain.', pt: 'Ele parte já amanhã.' },
    { level: 'A2-B1', fr: 'Dès son arrivée, elle a visité le marché.', pt: 'Logo ao chegar, ela visitou o mercado.' },
    { level: 'B2', fr: 'Dès que les écluses s’ouvrent, les péniches repartent une à une.', pt: 'Assim que as eclusas se abrem, as barcaças partem uma a uma.' },
    { level: 'C1-C2', fr: 'Dès l’aube, la Ville rose change de couleur, comme si la brique respirait.', pt: 'Desde a aurora, a Cidade Rosa muda de cor, como se o tijolo respirasse.' },
  ],
  trottoirs: [
    { level: 'A1', fr: 'Les trottoirs sont larges.', pt: 'As calçadas são largas.' },
    { level: 'A2-B1', fr: 'On marche sur les trottoirs de la ville.', pt: 'Caminhamos pelas calçadas da cidade.' },
    { level: 'B2', fr: 'Les trottoirs, bordés de platanes, invitent à la promenade.', pt: 'As calçadas, ladeadas de plátanos, convidam ao passeio.' },
    { level: 'C1-C2', fr: 'Une ville se lit aussi sur ses trottoirs : ils portent la trace de tous les pas.', pt: 'Uma cidade se lê também em suas calçadas: elas carregam a marca de todos os passos.' },
  ],
  création: [
    { level: 'A1', fr: 'La création d’un jardin prend du temps.', pt: 'A criação de um jardim leva tempo.' },
    { level: 'A2-B1', fr: 'Ce quartier est un lieu de création.', pt: 'Este bairro é um lugar de criação.' },
    { level: 'B2', fr: 'La création, qui mêle artisans et artistes, anime tout le quartier.', pt: 'A criação, que mistura artesãos e artistas, anima todo o bairro.' },
    { level: 'C1-C2', fr: 'La création d’une ville nouvelle est rare : celle d’une mémoire partagée l’est encore plus.', pt: 'A criação de uma cidade nova é rara: a de uma memória compartilhada é ainda mais.' },
  ],
  halle: [
    { level: 'A1', fr: 'La halle est pleine.', pt: 'O mercado coberto está cheio.' },
    { level: 'A2-B1', fr: 'La halle couverte abrite le marché.', pt: 'O mercado coberto abriga a feira.' },
    { level: 'B2', fr: 'La halle, construite au XIXe siècle, sent le pain chaud et les épices.', pt: 'O mercado coberto, construído no século XIX, cheira a pão quente e especiarias.' },
    { level: 'C1-C2', fr: 'Une halle de marché est une géographie miniature : chaque étal vient d’un terroir.', pt: 'Um mercado coberto é uma geografia em miniatura: cada banca vem de um terroir.' },
  ],
  cuite: [
    { level: 'A1', fr: 'La viande est bien cuite.', pt: 'A carne está bem passada.' },
    { level: 'A2-B1', fr: 'Les briques, cuites au soleil, donnent sa couleur à la ville.', pt: 'Os tijolos, cozidos ao sol, dão sua cor à cidade.' },
    { level: 'B2', fr: 'La cuite lente du cassoulet demande des heures de patience.', pt: 'O cozimento lento do cassoulet exige horas de paciência.' },
    { level: 'C1-C2', fr: 'La cuisson — et surtout la cuite lente — est ce qui distingue un plat d’un souvenir.', pt: 'O cozimento — e sobretudo o cozimento lento — é o que distingue um prato de uma lembrança.' },
  ],
  terrine: [
    { level: 'A1', fr: 'La terrine est bonne.', pt: 'A terrina é boa.' },
    { level: 'A2-B1', fr: 'Nous avons acheté une terrine de canard.', pt: 'Compramos uma terrina de pato.' },
    { level: 'B2', fr: 'La terrine, servie avec des cornichons, ouvre le repas.', pt: 'A terrina, servida com picles, abre a refeição.' },
    { level: 'C1-C2', fr: 'Une terrine réussie tient de la mémoire familiale : la recette se transmet à voix basse.', pt: 'Uma terrina bem-feita tem algo de memória familiar: a receita se transmite em voz baixa.' },
  ],
  comtes: [
    { level: 'A1', fr: 'Les comtes gouvernaient la région.', pt: 'Os condes governavam a região.' },
    { level: 'A2-B1', fr: 'Les comtes de Toulouse ont marqué l’histoire de la ville.', pt: 'Os condes de Toulouse marcaram a história da cidade.' },
    { level: 'B2', fr: 'Les comtes, qui s’appuyaient sur les capitouls, régnaient sur un vaste territoire.', pt: 'Os condes, que se apoiavam nos capitouls, reinavam sobre um vasto território.' },
    { level: 'C1-C2', fr: 'La puissance des comtes de Toulouse fit de la ville une capitale avant la lettre.', pt: 'O poder dos condes de Toulouse fez da cidade uma capital antes do nome.' },
  ],
  voyagé: [
    { level: 'A1', fr: 'J’ai voyagé en France.', pt: 'Viajei pela França.' },
    { level: 'A2-B1', fr: 'Ils ont voyagé en train pendant un an.', pt: 'Eles viajaram de trem durante um ano.' },
    { level: 'B2', fr: 'Ayant voyagé sur toutes les routes du Sud, il connaît chaque paysage.', pt: 'Tendo viajado por todas as estradas do Sul, ele conhece cada paisagem.' },
    { level: 'C1-C2', fr: 'Celui qui a voyagé ne revient jamais tout à fait : il rapporte un regard neuf.', pt: 'Quem viajou nunca volta inteiramente: traz um olhar novo.' },
  ],
  abord: [
    { level: 'A1', fr: 'Il aborde son ami.', pt: 'Ele aborda seu amigo.' },
    { level: 'A2-B1', fr: 'Un voyageur aborde Irlan pour demander son chemin.', pt: 'Um viajante aborda Irlan para pedir informações.' },
    { level: 'B2', fr: 'La chercheuse aborde le problème avec méthode et prudence.', pt: 'A pesquisadora aborda o problema com método e prudência.' },
    { level: 'C1-C2', fr: 'Le récit aborde la mémoire urbaine sans simplifier ses contradictions.', pt: 'O relato aborda a memória urbana sem simplificar suas contradições.' },
  ],
  courtoisie: [
    { level: 'A1', fr: 'La courtoisie est importante.', pt: 'A cortesia é importante.' },
    { level: 'A2-B1', fr: 'Il répond avec courtoisie aux visiteurs.', pt: 'Ele responde aos visitantes com cortesia.' },
    { level: 'B2', fr: 'La courtoisie permet de discuter un désaccord sans agressivité.', pt: 'A cortesia permite discutir uma divergência sem agressividade.' },
    { level: 'C1-C2', fr: 'Une courtoisie sincère ne masque pas le conflit : elle rend le dialogue possible.', pt: 'Uma cortesia sincera não esconde o conflito: torna o diálogo possível.' },
  ],
  "l'ambiance": [
    { level: 'A1', fr: 'L’ambiance est calme.', pt: 'O ambiente está calmo.' },
    { level: 'A2-B1', fr: 'L’ambiance du quartier change le soir.', pt: 'O ambiente do bairro muda à noite.' },
    { level: 'B2', fr: 'L’ambiance de travail dépend souvent de l’écoute et de la confiance.', pt: 'O ambiente de trabalho muitas vezes depende da escuta e da confiança.' },
    { level: 'C1-C2', fr: 'L’ambiance d’un lieu révèle parfois une tension que les discours cherchent à dissimuler.', pt: 'O ambiente de um lugar às vezes revela uma tensão que os discursos tentam esconder.' },
  ],
  théorie: [
    { level: 'A1', fr: 'La théorie est dans le livre.', pt: 'A teoria está no livro.' },
    { level: 'A2-B1', fr: 'Le professeur explique une théorie simple.', pt: 'O professor explica uma teoria simples.' },
    { level: 'B2', fr: 'La théorie de l’évolution aide à comprendre la diversité du vivant.', pt: 'A teoria da evolução ajuda a compreender a diversidade dos seres vivos.' },
    { level: 'C1-C2', fr: 'Une théorie crédible doit accepter la confrontation avec les faits.', pt: 'Uma teoria confiável deve aceitar o confronto com os fatos.' },
  ],
  fatigue: [
    { level: 'A1', fr: 'La fatigue arrive le soir.', pt: 'O cansaço chega à noite.' },
    { level: 'A2-B1', fr: 'Après le voyage, Irlan ressent une grande fatigue.', pt: 'Depois da viagem, Irlan sente um grande cansaço.' },
    { level: 'B2', fr: 'Malgré la fatigue, ils ont poursuivi leur enquête avec méthode.', pt: 'Apesar do cansaço, eles continuaram a investigação com método.' },
    { level: 'C1-C2', fr: 'La fatigue prolongée peut affaiblir le jugement et altérer la perception du risque.', pt: 'O cansaço prolongado pode enfraquecer o julgamento e alterar a percepção do risco.' },
  ],
  vérifié: [
    { level: 'A1', fr: 'J’ai vérifié l’heure.', pt: 'Verifiquei a hora.' },
    { level: 'A2-B1', fr: 'Andréa a vérifié les billets avant le départ.', pt: 'Andréa verificou as passagens antes da partida.' },
    { level: 'B2', fr: 'Irlan a vérifié l’hypothèse en confrontant deux cartes.', pt: 'Irlan verificou a hipótese confrontando dois mapas.' },
    { level: 'C1-C2', fr: 'Une information vérifiée résiste mieux à la manipulation et au doute.', pt: 'Uma informação verificada resiste melhor à manipulação e à dúvida.' },
  ],
  synthèse: [
    { level: 'A1', fr: 'La synthèse est courte.', pt: 'A síntese é curta.' },
    { level: 'A2-B1', fr: 'Irlan écrit une synthèse de la journée.', pt: 'Irlan escreve uma síntese do dia.' },
    { level: 'B2', fr: 'La synthèse rassemble les indices sans effacer leurs différences.', pt: 'A síntese reúne as pistas sem apagar suas diferenças.' },
    { level: 'C1-C2', fr: 'Une synthèse rigoureuse distingue les faits, les hypothèses et les conséquences.', pt: 'Uma síntese rigorosa distingue os fatos, as hipóteses e as consequências.' },
  ],
  progrès: [
    { level: 'A1', fr: 'Le progrès est rapide.', pt: 'O progresso é rápido.' },
    { level: 'A2-B1', fr: 'Malgré les progrès, le temps garde une part d’imprévu.', pt: 'Apesar dos progressos, o tempo guarda uma parte de imprevisto.' },
    { level: 'B2', fr: 'Le progrès technique soulève des questions que nous devons affronter.', pt: 'O progresso técnico levanta perguntas que precisamos enfrentar.' },
    { level: 'C1-C2', fr: 'Le progrès véritable ne se mesure pas à la vitesse, mais à la direction.', pt: 'O progresso verdadeiro não se mede pela velocidade, mas pela direção.' },
  ],
  créativité: [
    { level: 'A1', fr: 'La créativité est un don.', pt: 'A criatividade é um dom.' },
    { level: 'A2-B1', fr: 'Les chefs revisitent les traditions avec créativité.', pt: 'Os chefs revisitam as tradições com criatividade.' },
    { level: 'B2', fr: 'La créativité naît souvent de la contrainte.', pt: 'A criatividade nasce muitas vezes da restrição.' },
    { level: 'C1-C2', fr: 'La créativité est la capacité de voir un autre monde dans celui-ci.', pt: 'A criatividade é a capacidade de ver outro mundo dentro deste.' },
  ],
  thèse: [
    { level: 'A1', fr: 'La thèse est longue.', pt: 'A tese é longa.' },
    { level: 'A2-B1', fr: 'La soutenance de thèse est un moment décisif.', pt: 'A defesa de tese é um momento decisivo.' },
    { level: 'B2', fr: 'Une thèse demande des années de travail solitaire et de dialogue.', pt: 'Uma tese exige anos de trabalho solitário e de diálogo.' },
    { level: 'C1-C2', fr: 'La thèse est une conversation de plusieurs années avec une seule question.', pt: 'A tese é uma conversa de vários anos com uma única pergunta.' },
  ],
  réservations: [
    { level: 'A1', fr: 'Les réservations sont ouvertes.', pt: 'As reservas estão abertas.' },
    { level: 'A2-B1', fr: 'Les services en ligne simplifient les réservations.', pt: 'Os serviços online simplificam as reservas.' },
    { level: 'B2', fr: 'Des réservations bien préparées évitent les mauvaises surprises.', pt: 'Reservas bem preparadas evitam surpresas desagradáveis.' },
    { level: 'C1-C2', fr: 'Chaque réservation est une promesse que l’on se fait à soi-même.', pt: 'Cada reserva é uma promessa que fazemos a nós mesmos.' },
  ],
  conférences: [
    { level: 'A1', fr: 'Les conférences commencent à neuf heures.', pt: 'As conferências começam às nove horas.' },
    { level: 'A2-B1', fr: 'Des conférences permettent à chacun de poser des questions.', pt: 'Conferências permitem que cada um faça perguntas.' },
    { level: 'B2', fr: 'Les conférences scientifiques ouvrent le débat au public.', pt: 'As conferências científicas abrem o debate ao público.' },
    { level: 'C1-C2', fr: 'Une bonne conférence transforme un auditoire passif en conversation.', pt: 'Uma boa conferência transforma um público passivo em conversa.' },
  ],
};
