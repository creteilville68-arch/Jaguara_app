/**
 * Curadoria das palavras gramaticais e funcionais que aparecem nas guias de
 * Paris (e em todas as cidades): pronomes, negação, advérbios de frequência,
 * determinantes indefinidos. Cada lema tem 4 exemplos progressivos (A1→C1-C2).
 */
export const PARIS_GRAMMAR_EXAMPLES: Record<string, { level: string; fr: string; pt: string }[]> = {
  se: [
    { level: 'A1', fr: 'Il se lève tôt le matin.', pt: 'Ele se levanta cedo de manhã.' },
    { level: 'A2-B1', fr: 'Elle se promène le long de la Seine.', pt: 'Ela passeia ao longo do Sena.' },
    { level: 'B2', fr: 'Les deux quartiers se ressemblent de plus en plus.', pt: 'Os dois bairros se parecem cada vez mais.' },
    { level: 'C1-C2', fr: 'Cette idée se heurte à une réalité complexe.', pt: 'Esta ideia se choca com uma realidade complexa.' },
  ],
  ne: [
    { level: 'A1', fr: 'Je ne comprends pas ce mot.', pt: 'Eu não entendo esta palavra.' },
    { level: 'A2-B1', fr: 'Il ne travaille plus dans ce quartier.', pt: 'Ele não trabalha mais neste bairro.' },
    { level: 'B2', fr: 'Elle ne vient jamais sans son appareil photo.', pt: 'Ela nunca vem sem sua câmera.' },
    { level: 'C1-C2', fr: 'On ne saurait réduire la ville à ses monuments.', pt: 'Não se poderia reduzir a cidade aos seus monumentos.' },
  ],
  lui: [
    { level: 'A1', fr: 'Je parle à lui et à elle.', pt: 'Eu falo com ele e com ela.' },
    { level: 'A2-B1', fr: 'Le guide lui montre la vieille église.', pt: 'O guia mostra a ele a igreja antiga.' },
    { level: 'B2', fr: 'Cette décision lui appartient entièrement.', pt: 'Esta decisão pertence inteiramente a ele.' },
    { level: 'C1-C2', fr: 'La ville lui doit une grande partie de sa renommée.', pt: 'A cidade lhe deve grande parte de sua fama.' },
  ],
  eux: [
    { level: 'A1', fr: 'Je pense à eux ce soir.', pt: 'Eu penso neles esta noite.' },
    { level: 'A2-B1', fr: 'Le marché est ouvert, c’est eux qui tiennent les étals.', pt: 'O mercado está aberto, são eles que cuidam das bancas.' },
    { level: 'B2', fr: 'À eux revient la tâche de préserver ce patrimoine.', pt: 'A eles cabe a tarefa de preservar este patrimônio.' },
    { level: 'C1-C2', fr: 'Entre eux et les habitants, le dialogue a fini par s’installer.', pt: 'Entre eles e os moradores, o diálogo acabou se instalando.' },
  ],
  celle: [
    { level: 'A1', fr: 'Cette rue est belle, mais celle-ci est plus calme.', pt: 'Esta rua é bonita, mas aquela é mais calma.' },
    { level: 'A2-B1', fr: 'Ma rue est celle où se trouve le vieux cinéma.', pt: 'Minha rua é aquela onde fica o cinema antigo.' },
    { level: 'B2', fr: 'La solution retenue est celle des habitants.', pt: 'A solução escolhida é a dos moradores.' },
    { level: 'C1-C2', fr: 'Celle qui gouverne la ville doit répondre de ses choix.', pt: 'Aquela que governa a cidade deve responder por suas escolhas.' },
  ],
  ceux: [
    { level: 'A1', fr: 'Ceux qui aiment la marche iront au parc.', pt: 'Aqueles que gostam de caminhar irão ao parque.' },
    { level: 'A2-B1', fr: 'Ceux qui arrivent tôt trouvent une place.', pt: 'Aqueles que chegam cedo encontram lugar.' },
    { level: 'B2', fr: 'Ceux qui ont connu l’ancien quartier le regrettent parfois.', pt: 'Aqueles que conheceram o bairro antigo às vezes o lamentam.' },
    { level: 'C1-C2', fr: 'Ceux qui bâtissent une ville en oublient souvent les habitants.', pt: 'Aqueles que constroem uma cidade muitas vezes esquecem seus habitantes.' },
  ],
  autre: [
    { level: 'A1', fr: 'Je voudrais un autre café, s’il vous plaît.', pt: 'Eu gostaria de outro café, por favor.' },
    { level: 'A2-B1', fr: 'L’autre rive est plus calme le dimanche.', pt: 'A outra margem é mais calma aos domingos.' },
    { level: 'B2', fr: 'D’autres projets verront le jour l’an prochain.', pt: 'Outros projetos verão a luz no próximo ano.' },
    { level: 'C1-C2', fr: 'Il n’y a pas d’autre issue que le dialogue.', pt: 'Não há outra saída além do diálogo.' },
  ],
  chacun: [
    { level: 'A1', fr: 'Chacun a son ticket.', pt: 'Cada um tem seu bilhete.' },
    { level: 'A2-B1', fr: 'Chacun peut visiter le musée librement.', pt: 'Cada um pode visitar o museu livremente.' },
    { level: 'B2', fr: 'Chacun des quartiers garde son identité propre.', pt: 'Cada um dos bairros mantém sua identidade própria.' },
    { level: 'C1-C2', fr: 'Chacun porte une part de responsabilité dans la vie de la cité.', pt: 'Cada um carrega uma parcela de responsabilidade na vida da cidade.' },
  ],
  autour: [
    { level: 'A1', fr: 'Il y a des cafés autour de la place.', pt: 'Há cafés ao redor da praça.' },
    { level: 'A2-B1', fr: 'On se promène autour de la cathédrale.', pt: 'Passeia-se ao redor da catedral.' },
    { level: 'B2', fr: 'Le débat tourne autour de la piétonisation.', pt: 'O debate gira em torno da pedestrianização.' },
    { level: 'C1-C2', fr: 'Autour de ce projet se joue l’avenir du centre-ville.', pt: 'Em torno deste projeto se decide o futuro do centro.' },
  ],
  fois: [
    { level: 'A1', fr: 'Je suis allé à Paris une fois.', pt: 'Eu fui a Paris uma vez.' },
    { level: 'A2-B1', fr: 'Cette fois, nous prenons le métro.', pt: 'Desta vez, pegamos o metrô.' },
    { level: 'B2', fr: 'Il faut parfois plusieurs fois pour tout voir.', pt: 'Às vezes é preciso várias vezes para ver tudo.' },
    { level: 'C1-C2', fr: 'Une fois encore, la ville a su surprendre ses visiteurs.', pt: 'Mais uma vez, a cidade soube surpreender seus visitantes.' },
  ],
  gens: [
    { level: 'A1', fr: 'Il y a beaucoup de gens dans la rue.', pt: 'Há muitas pessoas na rua.' },
    { level: 'A2-B1', fr: 'Les gens aiment se retrouver sur les quais.', pt: 'As pessoas gostam de se encontrar nos cais.' },
    { level: 'B2', fr: 'Les gens du quartier défendent leur marché.', pt: 'As pessoas do bairro defendem seu mercado.' },
    { level: 'C1-C2', fr: 'Ce sont des gens qui savent écouter la ville.', pt: 'São pessoas que sabem ouvir a cidade.' },
  ],
  longtemps: [
    { level: 'A1', fr: 'Il reste longtemps au musée.', pt: 'Ele fica muito tempo no museu.' },
    { level: 'A2-B1', fr: 'On a attendu longtemps le bus.', pt: 'Esperamos muito tempo o ônibus.' },
    { level: 'B2', fr: 'Ces immeubles ont longtemps abrité des ateliers.', pt: 'Estes prédios abrigaram por muito tempo oficinas.' },
    { level: 'C1-C2', fr: 'Longtemps, la question du logement a été négligée.', pt: 'Por muito tempo, a questão da moradia foi negligenciada.' },
  ],
  millier: [
    { level: 'A1', fr: 'Des milliers de personnes visitent la tour.', pt: 'Milhares de pessoas visitam a torre.' },
    { level: 'A2-B1', fr: 'Des milliers de livres attendent les lecteurs.', pt: 'Milhares de livros esperam os leitores.' },
    { level: 'B2', fr: 'Des milliers d’emplois dépendent de ce quartier.', pt: 'Milhares de empregos dependem deste bairro.' },
    { level: 'C1-C2', fr: 'Des milliers de destins se croisent ici chaque jour.', pt: 'Milhares de destinos se cruzam aqui todos os dias.' },
  ],
  dizaine: [
    { level: 'A1', fr: 'Il y a une dizaine de tables au café.', pt: 'Há cerca de dez mesas no café.' },
    { level: 'A2-B1', fr: 'Une dizaine de bus partent chaque heure.', pt: 'Cerca de dez ônibus partem a cada hora.' },
    { level: 'B2', fr: 'Une dizaine d’années ont suffi à transformer le quartier.', pt: 'Cerca de dez anos bastaram para transformar o bairro.' },
    { level: 'C1-C2', fr: 'Une dizaine de projets attendent encore une décision.', pt: 'Cerca de dez projetos ainda aguardam uma decisão.' },
  ],
  centaine: [
    { level: 'A1', fr: 'Une centaine de personnes attendent dehors.', pt: 'Cerca de cem pessoas esperam do lado de fora.' },
    { level: 'A2-B1', fr: 'Des centaines de photos couvrent les murs.', pt: 'Centenas de fotos cobrem as paredes.' },
    { level: 'B2', fr: 'Des centaines de visiteurs affluent chaque week-end.', pt: 'Centenas de visitantes chegam todo fim de semana.' },
    { level: 'C1-C2', fr: 'Des centaines de pages racontent cette histoire.', pt: 'Centenas de páginas contam esta história.' },
  ],
  trentaine: [
    { level: 'A1', fr: 'Il a une trentaine d’années.', pt: 'Ele tem cerca de trinta anos.' },
    { level: 'A2-B1', fr: 'Une trentaine de coureurs participent à la course.', pt: 'Cerca de trinta corredores participam da corrida.' },
    { level: 'B2', fr: 'Une trentaine de boutiques bordent cette rue.', pt: 'Cerca de trinta lojas margeiam esta rua.' },
    { level: 'C1-C2', fr: 'Une trentaine de mesures ont été votées en un an.', pt: 'Cerca de trinta medidas foram votadas em um ano.' },
  ],
  travers: [
    { level: 'A1', fr: 'On traverse la rue prudemment.', pt: 'Atravessamos a rua com cuidado.' },
    { level: 'A2-B1', fr: 'Il regarde à travers la vitre.', pt: 'Ele olha através do vidro.' },
    { level: 'B2', fr: 'À travers les siècles, la ville n’a cessé d’évoluer.', pt: 'Através dos séculos, a cidade não parou de evoluir.' },
    { level: 'C1-C2', fr: 'C’est à travers ces archives que l’on comprend l’époque.', pt: 'É através destes arquivos que se compreende a época.' },
  ],
  'au-delà': [
    { level: 'A1', fr: 'Le parc s’étend au-delà de la colline.', pt: 'O parque se estende além da colina.' },
    { level: 'A2-B1', fr: 'Au-delà du pont, il y a un marché.', pt: 'Além da ponte, há um mercado.' },
    { level: 'B2', fr: 'Au-delà des apparences, ce quartier est très vivant.', pt: 'Além das aparências, este bairro é muito vivo.' },
    { level: 'C1-C2', fr: 'Au-delà des polémiques, reste l’essentiel : la qualité de vie.', pt: 'Além das polêmicas, resta o essencial: a qualidade de vida.' },
  ],
  contact: [
    { level: 'A1', fr: 'Je reste en contact avec mes amis.', pt: 'Eu mantenho contato com meus amigos.' },
    { level: 'A2-B1', fr: 'Le guide met les visiteurs en contact avec les artisans.', pt: 'O guia coloca os visitantes em contato com os artesãos.' },
    { level: 'B2', fr: 'Le contact avec les habitants change le regard.', pt: 'O contato com os moradores muda o olhar.' },
    { level: 'C1-C2', fr: 'Ce lieu favorise le contact entre générations.', pt: 'Este lugar favorece o contato entre gerações.' },
  ],
  ensemble: [
    { level: 'A1', fr: 'Nous mangeons ensemble ce soir.', pt: 'Nós comemos juntos esta noite.' },
    { level: 'A2-B1', fr: 'Ils visitent le musée ensemble.', pt: 'Eles visitam o museu juntos.' },
    { level: 'B2', fr: 'L’ensemble du quartier a été rénové.', pt: 'Todo o bairro foi reformado.' },
    { level: 'C1-C2', fr: 'C’est un ensemble architectural d’une rare cohérence.', pt: 'É um conjunto arquitetônico de rara coerência.' },
  ],
};
