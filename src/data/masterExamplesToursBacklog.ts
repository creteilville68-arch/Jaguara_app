/**
 * Curadoria complementar de exemplos para o backlog de Tours.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Tours e ainda não tinham os 4 exemplos.
 *
 * `masterExamplesFor` une este mapa aos demais, dando prioridade a estes
 * exemplos curados sobre qualquer entrada parcial do dicionário comum.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const TOURS_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  royal: [
    { level: 'A1', fr: 'Le palais royal est ouvert au public.', pt: 'O palácio real está aberto ao público.' },
    { level: 'A2-B1', fr: 'Amboise est un château royal qui domine la Loire.', pt: 'Amboise é um castelo real que domina o Loire.' },
    { level: 'B2', fr: 'Les châteaux royaux de la Loire racontent cinq siècles d’histoire de France.', pt: 'Os castelos reais do Loire contam cinco séculos de história da França.' },
    { level: 'C1-C2', fr: 'Le pouvoir royal a laissé sur ces pierres une empreinte que le temps n’a pas effacée.', pt: 'O poder real deixou nessas pedras uma marca que o tempo não apagou.' },
  ],
  jardinier: [
    { level: 'A1', fr: 'Le jardinier arrose les fleurs.', pt: 'O jardineiro rega as flores.' },
    { level: 'A2-B1', fr: 'Les jardiniers de Villandry taillent les haies au millimètre.', pt: 'Os jardineiros de Villandry podam as sebes ao milímetro.' },
    { level: 'B2', fr: 'Les jardiniers, qui travaillent dès l’aube, connaissent chaque plante par son nom.', pt: 'Os jardineiros, que trabalham desde o amanhecer, conhecem cada planta pelo nome.' },
    { level: 'C1-C2', fr: 'Le vrai jardinier ne dompte pas la nature : il lui apprend à dessiner.', pt: 'O verdadeiro jardineiro não doma a natureza: ele a ensina a desenhar.' },
  ],
  domaine: [
    { level: 'A1', fr: 'Ce domaine est très grand.', pt: 'Esta propriedade é muito grande.' },
    { level: 'A2-B1', fr: 'Le domaine de Villandry est célèbre pour ses jardins.', pt: 'A propriedade de Villandry é famosa pelos seus jardins.' },
    { level: 'B2', fr: 'Le domaine, qui appartient à la même famille depuis un siècle, ouvre ses portes au public.', pt: 'A propriedade, que pertence à mesma família há um século, abre suas portas ao público.' },
    { level: 'C1-C2', fr: 'Un domaine se transmet comme une mémoire : on y garde ce que les autres ont planté.', pt: 'Uma propriedade se transmite como uma memória: guarda-se ali o que os outros plantaram.' },
  ],
  sagesse: [
    { level: 'A1', fr: 'Il faut de la sagesse pour attendre.', pt: 'É preciso sabedoria para esperar.' },
    { level: 'A2-B1', fr: 'Pour Rabelais, le rire est une forme de sagesse.', pt: 'Para Rabelais, o riso é uma forma de sabedoria.' },
    { level: 'B2', fr: 'La sagesse, qui ne se vend pas, se gagne en écoutant les autres.', pt: 'A sabedoria, que não se vende, se ganha ouvindo os outros.' },
    { level: 'C1-C2', fr: 'La vraie sagesse commence quand on accepte de ne pas tout comprendre.', pt: 'A verdadeira sabedoria começa quando se aceita não entender tudo.' },
  ],
  basilique: [
    { level: 'A1', fr: 'La basilique est très vieille.', pt: 'A basílica é muito antiga.' },
    { level: 'A2-B1', fr: 'La basilique Saint-Martin se trouve au centre de Tours.', pt: 'A basílica Saint-Martin fica no centro de Tours.' },
    { level: 'B2', fr: 'La basilique, reconstruite au XIXe siècle, garde la mémoire du saint.', pt: 'A basílica, reconstruída no século XIX, guarda a memória do santo.' },
    { level: 'C1-C2', fr: 'Une basilique est une porte entre la ville et le silence.', pt: 'Uma basílica é uma porta entre a cidade e o silêncio.' },
  ],
  'reposé': [
    { level: 'A1', fr: 'J’ai reposé le livre sur la table.', pt: 'Eu coloquei o livro de volta na mesa.' },
    { level: 'A2-B1', fr: 'Il a reposé sa tasse avant de répondre.', pt: 'Ele pousou a xícara antes de responder.' },
    { level: 'B2', fr: 'Après avoir reposé ses affaires, il s’est assis pour réfléchir.', pt: 'Depois de deixar suas coisas, ele se sentou para refletir.' },
    { level: 'C1-C2', fr: 'Il a reposé le manuscrit comme on pose un secret : sans un bruit.', pt: 'Ele pousou o manuscrito como se pousa um segredo: sem nenhum ruído.' },
  ],
  'trop de': [
    { level: 'A1', fr: 'Il y a trop de monde ici.', pt: 'Há gente demais aqui.' },
    { level: 'A2-B1', fr: 'J’avais toujours trop de commandes à livrer.', pt: 'Eu sempre tinha entregas demais para fazer.' },
    { level: 'B2', fr: 'Il y a trop de détails pour tout retenir d’un coup.', pt: 'Há detalhes demais para reter tudo de uma vez.' },
    { level: 'C1-C2', fr: 'Il y a souvent trop de mots, et jamais assez de silence pour les écouter.', pt: 'Muitas vezes há palavras demais, e nunca silêncio suficiente para escutá-las.' },
  ],
  noisette: [
    { level: 'A1', fr: 'J’aime le goût de la noisette.', pt: 'Eu gosto do gosto da avelã.' },
    { level: 'A2-B1', fr: 'Ce fromage de chèvre a un goût de noisette.', pt: 'Este queijo de cabra tem um gosto de avelã.' },
    { level: 'B2', fr: 'La noisette, que l’on récolte en automne, se conserve longtemps.', pt: 'A avelã, que se colhe no outono, conserva-se por muito tempo.' },
    { level: 'C1-C2', fr: 'Le goût de noisette, discret au premier abord, s’installe doucement et ne part plus.', pt: 'O gosto de avelã, discreto à primeira vista, instala-se aos poucos e não vai mais embora.' },
  ],
  halles: [
    { level: 'A1', fr: 'Les halles sont près du marché.', pt: 'As halles ficam perto do mercado.' },
    { level: 'A2-B1', fr: 'Le samedi, on fait ses courses aux halles.', pt: 'Aos sábados, faz-se as compras nas halles.' },
    { level: 'B2', fr: 'Les halles, où les producteurs vendent leurs légumes, ouvrent dès six heures.', pt: 'As halles, onde os produtores vendem seus legumes, abrem desde as seis horas.' },
    { level: 'C1-C2', fr: 'Les halles, ventre de la ville, racontent une région par ses étals.', pt: 'As halles, ventre da cidade, contam uma região por suas bancas.' },
  ],
  étape: [
    { level: 'A1', fr: 'C’est une étape du voyage.', pt: 'É uma etapa da viagem.' },
    { level: 'A2-B1', fr: 'À chaque étape, le pèlerin fait tamponner son carnet.', pt: 'A cada etapa, o peregrino carimba seu caderno.' },
    { level: 'B2', fr: 'Cette ville est l’étape où l’on reprend des forces avant la montagne.', pt: 'Esta cidade é a etapa onde se recuperam as forças antes da montanha.' },
    { level: 'C1-C2', fr: 'Chaque étape d’un long chemin change celui qui marche, même quand il ne le voit pas.', pt: 'Cada etapa de um longo caminho muda quem caminha, mesmo quando ele não percebe.' },
  ],
  différent: [
    { level: 'A1', fr: 'Nous avons des goûts différents.', pt: 'Nós temos gostos diferentes.' },
    { level: 'A2-B1', fr: 'Chaque année, l’histoire du vin est différente.', pt: 'A cada ano, a história do vinho é diferente.' },
    { level: 'B2', fr: 'Les deux textes, bien que différents, racontent la même histoire.', pt: 'Os dois textos, embora diferentes, contam a mesma história.' },
    { level: 'C1-C2', fr: 'Être différent n’est pas une erreur : c’est une autre version du monde.', pt: 'Ser diferente não é um erro: é uma outra versão do mundo.' },
  ],
  collier: [
    { level: 'A1', fr: 'Elle porte un collier.', pt: 'Ela usa um colar.' },
    { level: 'A2-B1', fr: 'Elle a acheté un joli collier au marché.', pt: 'Ela comprou um colar bonito no mercado.' },
    { level: 'B2', fr: 'Le collier que tu m’as offert ne me quitte jamais.', pt: 'O colar que você me deu nunca me deixa.' },
    { level: 'C1-C2', fr: 'Un collier, cercle fragile, retient le souvenir au plus près du cœur.', pt: 'Um colar, círculo frágil, retém a lembrança bem perto do coração.' },
  ],

  culinaire: [
    { level: 'A1', fr: 'La cuisine est un art culinaire.', pt: 'A culinária é uma arte culinária.' },
    { level: 'A2-B1', fr: 'La gastronomie tourangelle est reconnue pour son aspect culinaire.', pt: 'A gastronomia tourangelle é reconhecida por seu aspecto culinário.' },
    { level: 'B2', fr: 'Les produits culinaires de la vallée de la Loire sont réputés dans toute la France.', pt: 'Os produtos culinários do vale do Loire são reconhecidos em toda a França.' },
    { level: 'C1-C2', fr: 'La dimension culinaire d\'une région raconte son histoire autant que ses monuments.', pt: 'A dimensão culinária de uma região conta sua história tanto quanto seus monumentos.' },
  ],
  incontestée: [
    { level: 'A1', fr: 'La beauté du lieu est incontestée.', pt: 'A beleza do local é incontestável.' },
    { level: 'A2-B1', fr: 'La réputation culinaire de Tours est incontestée.', pt: 'A reputação culinária de Tours é incontestável.' },
    { level: 'B2', fr: 'La valeur historique de la Loire est incontestée par les historiens.', pt: 'O valor histórico do Loire é incontestável pelos historiadores.' },
    { level: 'C1-C2', fr: "L'incontestée beauté de la Touraine vient de ce que chaque pierre garde une mémoire vivante.", pt: 'A incontestável beleza da Touraine vem do fato de cada pedra guardar uma memória viva.' },
  ],
  recherche: [
    { level: 'A1', fr: 'Ils font une recherche sur la ville.', pt: 'Eles fazem uma pesquisa sobre a cidade.' },
    { level: 'A2-B1', fr: "La recherche d'informations en ligne facilite la préparation du voyage.", pt: 'A pesquisa de informações online facilita a preparação da viagem.' },
    { level: 'B2', fr: 'La recherche historique sur les châteaux de la Loire est un travail de longue haleine.', pt: 'A pesquisa histórica sobre os castelos do Loire é um trabalho de longo prazo.' },
    { level: 'C1-C2', fr: 'Toute recherche commence par une curiosité et se termine par une transformation du chercheur.', pt: 'Toda pesquisa começa com uma curiosidade e termina com uma transformação do pesquisador.' },
  ],
  confort: [
    { level: 'A1', fr: "L'hôtel offre du confort.", pt: 'O hotel oferece conforto.' },
    { level: 'A2-B1', fr: 'Le confort de la chambre est agréable après une longue journée.', pt: 'O conforto do quarto é agradável depois de um longo dia.' },
    { level: 'B2', fr: "Le confort d'un lieu ne se mesure pas seulement à la température, mais à la paix qu'il procure.", pt: 'O conforto de um local não se mede apenas pela temperatura, mas pela paz que proporciona.' },
    { level: 'C1-C2', fr: 'Le vrai confort est celui qui permet de penser librement, sans bruit ni pression.', pt: 'O verdadeiro conforto é o que permite pensar livremente, sem barulho nem pressão.' },
  ],
  animées: [
    { level: 'A1', fr: 'Les rues sont animées le soir.', pt: 'As ruas são animadas à noite.' },
    { level: 'A2-B1', fr: 'Les Halles de Tours sont particulièrement animées le samedi matin.', pt: 'As Halles de Tours são particularmente animadas no sábado de manhã.' },
    { level: 'B2', fr: 'Les soirées les plus animées sont celles où les gens partagent un repas ensemble.', pt: 'As noites mais animadas são aquelas em que as pessoas compartilham uma refeição juntas.' },
    { level: 'C1-C2', fr: "Une ville animée n'est pas celle qui fait le plus de bruit, mais celle qui fait le plus de sens.", pt: 'Uma cidade animada não é a que faz mais barulho, mas a que faz mais sentido.' },
  ],
  élégants: [
    { level: 'A1', fr: 'Les hommes sont élégants.', pt: 'Os homens são elegantes.' },
    { level: 'A2-B1', fr: 'Les vins de Vouvray sont élégants et fins.', pt: 'Os vinhos de Vouvray são elegantes e finos.' },
    { level: 'B2', fr: 'Les vins élégants de la Touraine rivalisent avec les meilleurs de France.', pt: 'Os vinhos elegantes da Touraine rivalizam com os melhores da França.' },
    { level: 'C1-C2', fr: "L'élégance n'est pas un excès : c'est la mesure parfaite entre ce qu'on montre et ce qu'on garde.", pt: 'A elegância não é um excesso: é a medida perfeita entre o que se mostra e o que se guarda.' },
  ],
  géométrique: [
    { level: 'A1', fr: 'La forme est géométrique.', pt: 'A forma é geométrica.' },
    { level: 'A2-B1', fr: 'Les jardins de Villandry sont géométriques et symétriques.', pt: 'Os jardins de Villandry são geométricos e simétricos.' },
    { level: 'B2', fr: 'Les formes géométriques des jardins à la française reflètent l\'ordre et la raison.', pt: 'As formas geométricas dos jardins à francesa refletem a ordem e a razão.' },
    { level: 'C1-C2', fr: 'Le géométrique n\'est pas froid : c\'est la beauté que la main de l\'homme impose à la nature.', pt: 'O geométrico não é frio: é a beleza que a mão do homem impõe à natureza.' },
  ],
  recherchés: [
    { level: 'A1', fr: 'Ces produits sont recherchés.', pt: 'Esses produtos são procurados.' },
    { level: 'A2-B1', fr: 'Les fruits du marché sont très recherchés.', pt: 'As frutas do mercado são muito procuradas.' },
    { level: 'B2', fr: 'Les vins de cette région sont recherchés par les collectionneurs.', pt: 'Os vinhos dessa região são procurados pelos colecionadores.' },
    { level: 'C1-C2', fr: "Ce sont les accords les plus recherchés, ceux qui demandent à la fois science et patience.", pt: 'São as harmonizações mais procuradas, aquelas que exigem ao mesmo tempo ciência e paciência.' },
  ],
};
