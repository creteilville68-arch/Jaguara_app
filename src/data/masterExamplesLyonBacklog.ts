/**
 * Curadoria complementar de exemplos para o backlog de Lyon.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Lyon e ainda não tinham os 4 exemplos.
 *
 * `masterExamplesFor` une este mapa aos demais, dando prioridade a estes
 * exemplos curados sobre qualquer entrada parcial do dicionário comum.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const LYON_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  soie: [
    { level: 'A1', fr: 'La soie est douce.', pt: 'A seda é macia.' },
    { level: 'A2-B1', fr: 'Les canuts tissaient la soie à Lyon.', pt: 'Os canuts teciam a seda em Lyon.' },
    { level: 'B2', fr: 'La soie, qui habillait les rois d’Europe, a fait la fortune de la ville.', pt: 'A seda, que vestia os reis da Europa, fez a fortuna da cidade.' },
    { level: 'C1-C2', fr: 'La soie de Lyon fut longtemps une affaire d’hommes, de métiers et de révoltes.', pt: 'A seda de Lyon foi por muito tempo uma história de homens, teares e revoltas.' },
  ],
  reines: [
    { level: 'A1', fr: 'Les reines portaient la soie.', pt: 'As rainhas usavam seda.' },
    { level: 'A2-B1', fr: 'La soie de Lyon habillait les reines d’Europe.', pt: 'A seda de Lyon vestia as rainhas da Europa.' },
    { level: 'B2', fr: 'Les reines, qui commandaient leurs robes à Lyon, lançaient la mode à la cour.', pt: 'As rainhas, que encomendavam seus vestidos em Lyon, lançavam a moda na corte.' },
    { level: 'C1-C2', fr: 'Derrière les reines et leurs étoffes, il y avait des milliers de tisserands invisibles.', pt: 'Atrás das rainhas e seus tecidos, havia milhares de tecelões invisíveis.' },
  ],
  'bien que': [
    { level: 'A1', fr: 'Bien qu’il pleuve, nous sortons.', pt: 'Embora chova, saímos.' },
    { level: 'A2-B1', fr: 'Bien qu’elle soit occupée, Lyon est restée le centre de la Résistance.', pt: 'Embora estivesse ocupada, Lyon continuou sendo o centro da Resistência.' },
    { level: 'B2', fr: 'Bien que le marché soit immense, on y trouve toujours une table.', pt: 'Embora o mercado seja imenso, sempre se encontra uma mesa.' },
    { level: 'C1-C2', fr: 'Bien que la ville ait beaucoup changé, ses traboules gardent le même silence.', pt: 'Embora a cidade tenha mudado muito, suas traboules guardam o mesmo silêncio.' },
  ],
  donnée: [
    { level: 'A1', fr: 'La donnée est importante.', pt: 'O dado é importante.' },
    { level: 'A2-B1', fr: 'Les données du problème sont claires.', pt: 'Os dados do problema estão claros.' },
    { level: 'B2', fr: 'Cette donnée, vérifiée par les historiens, a changé la lecture de l’époque.', pt: 'Esse dado, verificado pelos historiadores, mudou a leitura da época.' },
    { level: 'C1-C2', fr: 'Une donnée ne vaut que par la question qu’elle permet de poser.', pt: 'Um dado só vale pela pergunta que permite fazer.' },
  ],
  précieux: [
    { level: 'A1', fr: 'Ce livre est précieux.', pt: 'Este livro é precioso.' },
    { level: 'A2-B1', fr: 'Elle garde une montre précieuse.', pt: 'Ela guarda um relógio precioso.' },
    { level: 'B2', fr: 'Ce manuscrit, précieux entre tous, est conservé sous verre.', pt: 'Este manuscrito, precioso entre todos, é conservado sob vidro.' },
    { level: 'C1-C2', fr: 'Le temps est le seul bien vraiment précieux, car il ne se rachète pas.', pt: 'O tempo é o único bem realmente precioso, pois não se recompra.' },
  ],
  médicaments: [
    { level: 'A1', fr: 'Les médicaments sont à la pharmacie.', pt: 'Os medicamentos estão na farmácia.' },
    { level: 'A2-B1', fr: 'Elle prend ses médicaments chaque matin.', pt: 'Ela toma seus medicamentos todas as manhãs.' },
    { level: 'B2', fr: 'Les médicaments, conservés à bonne température, gardent toute leur efficacité.', pt: 'Os medicamentos, conservados em boa temperatura, mantêm toda a eficácia.' },
    { level: 'C1-C2', fr: 'L’histoire des médicaments est aussi celle des idées qu’une époque se fait de la maladie.', pt: 'A história dos medicamentos é também a das ideias que uma época faz da doença.' },
  ],
  mars: [
    { level: 'A1', fr: 'Mars est un mois de printemps.', pt: 'Março é um mês de primavera.' },
    { level: 'A2-B1', fr: 'Le 19 mars 1895, les frères Lumière ont projeté leur premier film.', pt: 'Em 19 de março de 1895, os irmãos Lumière projetaram seu primeiro filme.' },
    { level: 'B2', fr: 'En mars, les jours rallongent et les terrasses se remplissent.', pt: 'Em março, os dias ficam mais longos e os terraços se enchem.' },
    { level: 'C1-C2', fr: 'Il est des mois qui changent une vie ; pour le cinéma, ce fut mars 1895.', pt: 'Há meses que mudam uma vida; para o cinema, foi março de 1895.' },
  ],
  histoires: [
    { level: 'A1', fr: 'J’aime les histoires.', pt: 'Eu gosto de histórias.' },
    { level: 'A2-B1', fr: 'Chaque traboule cache des histoires.', pt: 'Cada traboule esconde histórias.' },
    { level: 'B2', fr: 'Les histoires, racontées de bouche à oreille, se transforment au fil des générations.', pt: 'As histórias, contadas de boca em boca, se transformam ao longo das gerações.' },
    { level: 'C1-C2', fr: 'Une ville n’est jamais à court d’histoires : elle en fabrique à chaque coin de rue.', pt: 'Uma cidade nunca fica sem histórias: ela fabrica uma a cada esquina.' },
  ],
  déjeuner: [
    { level: 'A1', fr: 'Le déjeuner est prêt.', pt: 'O almoço está pronto.' },
    { level: 'A2-B1', fr: 'Ils arriveraient avant le déjeuner.', pt: 'Eles chegariam antes do almoço.' },
    { level: 'B2', fr: 'Le déjeuner, pris en terrasse, dura deux heures.', pt: 'O almoço, tomado no terraço, durou duas horas.' },
    { level: 'C1-C2', fr: 'En France, le déjeuner n’est pas une pause : c’est un moment de la journée.', pt: 'Na França, o almoço não é uma pausa: é um momento do dia.' },
  ],
  architecture: [
    { level: 'A1', fr: 'L’architecture est belle.', pt: 'A arquitetura é bonita.' },
    { level: 'A2-B1', fr: 'L’architecture de Lyon mélange plusieurs époques.', pt: 'A arquitetura de Lyon mistura várias épocas.' },
    { level: 'B2', fr: 'Cette architecture associe une façade ancienne à une structure moderne.', pt: 'Essa arquitetura associa uma fachada antiga a uma estrutura moderna.' },
    { level: 'C1-C2', fr: 'L’architecture d’une ville révèle les choix sociaux et techniques de chaque époque.', pt: 'A arquitetura de uma cidade revela as escolhas sociais e técnicas de cada época.' },
  ],
  "d'anciens": [
    { level: 'A1', fr: "Ce sont d'anciens livres.", pt: 'São livros antigos.' },
    { level: 'A2-B1', fr: "Le quartier est construit sur d'anciens terrains industriels.", pt: 'O bairro é construído sobre antigos terrenos industriais.' },
    { level: 'B2', fr: "D'anciens bâtiments abritent aujourd'hui des ateliers d'artistes.", pt: 'Antigos prédios abrigam hoje ateliês de artistas.' },
    { level: 'C1-C2', fr: "D'anciens rêves reviennent parfois nous chercher au détour d'une rue.", pt: 'Antigos sonhos às vezes voltam para nos buscar na curva de uma rua.' },
  ],
  'en effet': [
    { level: 'A1', fr: 'En effet, il pleut.', pt: 'De fato, está chovendo.' },
    { level: 'A2-B1', fr: 'En effet, la ville est très animée le soir.', pt: 'De fato, a cidade é muito animada à noite.' },
    { level: 'B2', fr: "Ce choix, en effet, change toute la stratégie de l'entreprise.", pt: 'Essa escolha, de fato, muda toda a estratégia da empresa.' },
    { level: 'C1-C2', fr: "L'histoire, en effet, ne se répète jamais à l'identique, mais elle rime parfois.", pt: 'A história, de fato, nunca se repete de forma idêntica, mas às vezes rima.' },
  ],
};
