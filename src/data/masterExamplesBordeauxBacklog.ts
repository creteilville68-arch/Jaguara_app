/**
 * Curadoria complementar de exemplos para o backlog de Bordeaux.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Bordeaux e ainda não tinham os 4 exemplos.
 *
 * `masterExamplesFor` une este mapa aos demais, dando prioridade a estes
 * exemplos curados sobre qualquer entrada parcial do dicionário comum.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const BORDEAUX_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  sommelier: [
    { level: 'A1', fr: 'Le sommelier nous aide à choisir le vin.', pt: 'O sommelier nos ajuda a escolher o vinho.' },
    { level: 'A2-B1', fr: 'Le sommelier a présenté un vin de Saint-Émilion.', pt: 'O sommelier apresentou um vinho de Saint-Émilion.' },
    { level: 'B2', fr: 'Le sommelier, qui connaît des milliers de vins, conseille avec élégance.', pt: 'O sommelier, que conhece milhares de vinhos, aconselha com elegância.' },
    { level: 'C1-C2', fr: 'Le sommelier exerce un métier où se mêlent mémoire, science et art de la parole.', pt: 'O sommelier exerce uma profissão em que se misturam memória, ciência e arte da palavra.' },
  ],
  sommelière: [
    { level: 'A1', fr: 'La sommelière travaille dans ce restaurant.', pt: 'A sommelière trabalha neste restaurante.' },
    { level: 'A2-B1', fr: 'La sommelière nous a recommandé un vin blanc.', pt: 'A sommelière nos recomendou um vinho branco.' },
    { level: 'B2', fr: 'La sommelière, qui a goûté le vin avant de le servir, a fait un signe de tête.', pt: 'A sommelière, que provou o vinho antes de servir, fez um sinal de cabeça.' },
    { level: 'C1-C2', fr: 'La sommelière lit un vin comme on lit un paysage : par couches et par silences.', pt: 'A sommelière lê um vinho como se lê uma paisagem: por camadas e por silêncios.' },
  ],
  spectacle: [
    { level: 'A1', fr: 'Le spectacle commence à vingt heures.', pt: 'O espetáculo começa às vinte horas.' },
    { level: 'A2-B1', fr: 'Nous avons acheté des billets pour le spectacle.', pt: 'Compramos ingressos para o espetáculo.' },
    { level: 'B2', fr: 'Le spectacle, qui a duré deux heures, a émerveillé le public.', pt: 'O espetáculo, que durou duas horas, encantou o público.' },
    { level: 'C1-C2', fr: 'Le plus beau spectacle reste celui que la nature offre sans publicité.', pt: 'O mais belo espetáculo continua sendo o que a natureza oferece sem propaganda.' },
  ],
  acoustique: [
    { level: 'A1', fr: 'L’acoustique de la salle est bonne.', pt: 'A acústica da sala é boa.' },
    { level: 'A2-B1', fr: 'On entend tout très bien : l’acoustique est parfaite.', pt: 'Ouve-se tudo muito bem: a acústica é perfeita.' },
    { level: 'B2', fr: 'L’acoustique, étudiée avec soin, porte la voix jusqu’au dernier rang.', pt: 'A acústica, estudada com cuidado, leva a voz até a última fileira.' },
    { level: 'C1-C2', fr: 'Une grande salle vit ou meurt par son acoustique, ce détail invisible que tout le monde ressent.', pt: 'Uma grande sala vive ou morre pela sua acústica, esse detalhe invisível que todos sentem.' },
  ],
  œuvre: [
    { level: 'A1', fr: 'Cette œuvre est très célèbre.', pt: 'Esta obra é muito famosa.' },
    { level: 'A2-B1', fr: 'Les œuvres géantes sont projetées sur les murs.', pt: 'As obras gigantes são projetadas nas paredes.' },
    { level: 'B2', fr: 'L’œuvre, qui couvre tout le mur, change la manière de voir la ville.', pt: 'A obra, que cobre todo o muro, muda o jeito de ver a cidade.' },
    { level: 'C1-C2', fr: 'Une œuvre d’art est une question que l’artiste laisse ouverte au monde.', pt: 'Uma obra de arte é uma pergunta que o artista deixa aberta para o mundo.' },
  ],
  colline: [
    { level: 'A1', fr: 'La maison est sur la colline.', pt: 'A casa fica na colina.' },
    { level: 'A2-B1', fr: 'Saint-Émilion est perché sur une colline de vignes.', pt: 'Saint-Émilion fica no alto de uma colina de vinhas.' },
    { level: 'B2', fr: 'La colline, douce au lever du jour, domine la vallée entière.', pt: 'A colina, suave ao amanhecer, domina o vale inteiro.' },
    { level: 'C1-C2', fr: 'Une colline est une promesse : celle de voir le monde un peu plus loin.', pt: 'Uma colina é uma promessa: a de ver o mundo um pouco mais longe.' },
  ],
  orchestre: [
    { level: 'A1', fr: 'L’orchestre joue ce soir.', pt: 'A orquestra toca esta noite.' },
    { level: 'A2-B1', fr: 'L’orchestre s’est arrêté, puis le silence est tombé.', pt: 'A orquestra parou, e depois o silêncio caiu.' },
    { level: 'B2', fr: 'L’orchestre, qui s’éteint note après note, laisse la salle suspendue.', pt: 'A orquestra, que se apaga nota após nota, deixa a sala suspensa.' },
    { level: 'C1-C2', fr: 'Un orchestre est une ville qui respire ensemble, sans se concerter.', pt: 'Uma orquestra é uma cidade que respira junta, sem se combinar.' },
  ],
  artiste: [
    { level: 'A1', fr: 'L’artiste peint sur le mur.', pt: 'O artista pinta no muro.' },
    { level: 'A2-B1', fr: 'Un nouvel artiste peint la fresque chaque mois.', pt: 'Um novo artista pinta a pintura mural a cada mês.' },
    { level: 'B2', fr: 'L’artiste, qui a travaillé trois jours, a signé son œuvre au pinceau.', pt: 'O artista, que trabalhou três dias, assinou sua obra com o pincel.' },
    { level: 'C1-C2', fr: 'L’artiste ne cherche pas à plaire : il cherche à faire voir autrement.', pt: 'O artista não procura agradar: procura fazer ver de outro jeito.' },
  ],
  bâtiment: [
    { level: 'A1', fr: 'Le bâtiment est très haut.', pt: 'O prédio é muito alto.' },
    { level: 'A2-B1', fr: 'Les bâtiments du XVIIIe siècle bordent le fleuve.', pt: 'Os prédios do século XVIII margeiam o rio.' },
    { level: 'B2', fr: 'Le bâtiment, construit pour le commerce maritime, a gardé ses façades d’origine.', pt: 'O prédio, construído para o comércio marítimo, conservou suas fachadas originais.' },
    { level: 'C1-C2', fr: 'Un bâtiment n’est jamais seulement de la pierre : c’est une époque qui se tient debout.', pt: 'Um prédio nunca é apenas pedra: é uma época que se mantém de pé.' },
  ],
  conviviale: [
    { level: 'A1', fr: 'La rue est conviviale.', pt: 'A rua é sociável.' },
    { level: 'A2-B1', fr: 'Le marché est convivial le samedi matin.', pt: 'O mercado é sociável no sábado de manhã.' },
    { level: 'B2', fr: 'Une ambiance conviviale aide les voyageurs à se sentir chez eux.', pt: 'Um ambiente sociável ajuda os viajantes a se sentirem em casa.' },
    { level: 'C1-C2', fr: 'La convivialité transforme un espace ordinaire en véritable lieu de rencontre.', pt: 'A sociabilidade transforma um espaço comum em verdadeiro local de encontro.' },
  ],
  absolument: [
    { level: 'A1', fr: 'Oui, absolument.', pt: 'Sim, absolutamente.' },
    { level: 'A2-B1', fr: 'Il faut absolument vérifier le billet.', pt: 'É absolutamente preciso verificar o bilhete.' },
    { level: 'B2', fr: 'Cette archive doit absolument rester accessible au public.', pt: 'Este arquivo deve absolutamente continuar acessível ao público.' },
    { level: 'C1-C2', fr: 'La mémoire d’un lieu ne doit absolument pas être effacée par l’indifférence.', pt: 'A memória de um lugar absolutamente não deve ser apagada pela indiferença.' },
  ],
  concierge: [
    { level: 'A1', fr: 'La concierge ouvre la porte.', pt: 'A zeladora abre a porta.' },
    { level: 'A2-B1', fr: 'La concierge connaît tous les habitants de l’immeuble.', pt: 'A zeladora conhece todos os moradores do prédio.' },
    { level: 'B2', fr: 'La concierge, qui garde les clés, a remarqué une présence inhabituelle.', pt: 'A zeladora, que guarda as chaves, notou uma presença incomum.' },
    { level: 'C1-C2', fr: 'La concierge veille sur la mémoire quotidienne de l’immeuble avec une discrétion remarquable.', pt: 'A zeladora cuida da memória cotidiana do prédio com uma discrição notável.' },
  ],
  jardinière: [
    { level: 'A1', fr: 'La jardinière arrose les fleurs.', pt: 'A jardineira rega as flores.' },
    { level: 'A2-B1', fr: 'La jardinière est pleine de plantes vertes.', pt: 'A jardineira está cheia de plantas verdes.' },
    { level: 'B2', fr: 'La jardinière, placée devant la fenêtre, attire les abeilles.', pt: 'A jardineira, colocada diante da janela, atrai as abelhas.' },
    { level: 'C1-C2', fr: 'Chaque jardinière apporte une parcelle de nature à la ville minérale.', pt: 'Cada jardineira traz uma parcela de natureza à cidade mineral.' },
  ],
  solde: [
    { level: 'A1', fr: 'Le produit est en solde.', pt: 'O produto está em liquidação.' },
    { level: 'A2-B1', fr: 'Andréa cherche une veste en solde.', pt: 'Andréa procura uma jaqueta em liquidação.' },
    { level: 'B2', fr: 'Un produit en solde n’est pas forcément de mauvaise qualité.', pt: 'Um produto em liquidação não é necessariamente de má qualidade.' },
    { level: 'C1-C2', fr: 'La recherche du prix le plus bas peut parfois cacher le véritable coût social d’un achat.', pt: 'A busca pelo preço mais baixo às vezes pode esconder o verdadeiro custo social de uma compra.' },
  ],
  voisinage: [
    { level: 'A1', fr: 'Le voisinage est calme.', pt: 'A vizinhança é tranquila.' },
    { level: 'A2-B1', fr: 'Le voisinage organise une fête chaque année.', pt: 'A vizinhança organiza uma festa todos os anos.' },
    { level: 'B2', fr: 'Le voisinage, réuni autour d’une table, partage des nouvelles et des souvenirs.', pt: 'A vizinhança, reunida ao redor de uma mesa, compartilha notícias e lembranças.' },
    { level: 'C1-C2', fr: 'Un voisinage solidaire résiste mieux aux crises et aux silences.', pt: 'Uma vizinhança solidária resiste melhor às crises e aos silêncios.' },
  ],
};
