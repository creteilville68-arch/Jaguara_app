/**
 * Curadoria complementar de exemplos para o backlog de Marseille.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Marseille e ainda não tinham os 4 exemplos.
 *
 * `masterExamplesFor` une este mapa aos demais, dando prioridade a estes
 * exemplos curados sobre qualquer entrada parcial do dicionário comum.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const MARSEILLE_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  comte: [
    { level: 'A1', fr: 'Le comte arrive demain.', pt: 'O conde chega amanhã.' },
    { level: 'A2-B1', fr: 'Le Comte de Monte-Cristo est un roman célèbre.', pt: 'O Conde de Monte Cristo é um romance famoso.' },
    { level: 'B2', fr: 'Le comte, ruiné autrefois, a reconstruit sa fortune grâce à son travail.', pt: 'O conde, arruinado antigamente, reconstruiu sua fortuna graças ao seu trabalho.' },
    { level: 'C1-C2', fr: 'Dans le roman, le comte est un homme qui n’oublie ni ses amis ni ses ennemis.', pt: 'No romance, o conde é um homem que não esquece nem seus amigos nem seus inimigos.' },
  ],
  dentelle: [
    { level: 'A1', fr: 'La dentelle est blanche.', pt: 'A renda é branca.' },
    { level: 'A2-B1', fr: 'La dentelle du voile est très fine.', pt: 'A renda do véu é muito fina.' },
    { level: 'B2', fr: 'La dentelle, tissée à la main, demande des heures de patience.', pt: 'A renda, tecida à mão, exige horas de paciência.' },
    { level: 'C1-C2', fr: 'Derrière la dentelle de béton du Mucem se cache un siècle de savoir-faire.', pt: 'Atrás da renda de concreto do Mucem se esconde um século de savoir-faire.' },
  ],
  abords: [
    { level: 'A1', fr: 'Les abords de la gare sont calmes.', pt: 'Os arredores da estação são tranquilos.' },
    { level: 'A2-B1', fr: 'Les abords du Vieux-Port sont pleins de monde le soir.', pt: 'Os arredores do Porto Velho ficam cheios de gente à noite.' },
    { level: 'B2', fr: 'Les abords du port, réaménagés pour les piétons, ont changé la vie du quartier.', pt: 'Os arredores do porto, requalificados para os pedestres, mudaram a vida do bairro.' },
    { level: 'C1-C2', fr: 'Ce sont les abords d’une ville qui racontent le mieux la façon dont elle vit.', pt: 'São os arredores de uma cidade que melhor contam como ela vive.' },
  ],
  habitudes: [
    { level: 'A1', fr: 'J’ai de bonnes habitudes.', pt: 'Tenho bons hábitos.' },
    { level: 'A2-B1', fr: 'Nous avons changé nos habitudes depuis le déménagement.', pt: 'Mudamos nossos hábitos desde a mudança.' },
    { level: 'B2', fr: 'Les habitudes du quartier, fidèles au même rythme, rassurent les habitants.', pt: 'Os hábitos do bairro, fiéis ao mesmo ritmo, tranquilizam os moradores.' },
    { level: 'C1-C2', fr: 'On ne renonce pas à ses habitudes sans une raison profonde.', pt: 'Não se renuncia aos próprios hábitos sem uma razão profunda.' },
  ],
  habitude: [
    { level: 'A1', fr: 'C’est une bonne habitude.', pt: 'É um bom hábito.' },
    { level: 'A2-B1', fr: 'Il a l’habitude de se lever tôt.', pt: 'Ele tem o hábito de acordar cedo.' },
    { level: 'B2', fr: 'L’habitude, bien qu’elle rassure, peut aussi endormir le regard.', pt: 'O hábito, embora tranquilize, também pode adormecer o olhar.' },
    { level: 'C1-C2', fr: 'Prendre le temps d’observer est une habitude qui change la manière de voir le monde.', pt: 'Reservar tempo para observar é um hábito que muda a maneira de ver o mundo.' },
  ],
  naturelle: [
    { level: 'A1', fr: 'L’eau est naturelle.', pt: 'A água é natural.' },
    { level: 'A2-B1', fr: 'Cette plage est naturelle, pas artificielle.', pt: 'Esta praia é natural, não artificial.' },
    { level: 'B2', fr: 'La pêche naturelle, respectueuse des stocks, protège la mer à long terme.', pt: 'A pesca natural, respeitosa dos estoques, protege o mar a longo prazo.' },
    { level: 'C1-C2', fr: 'Rien n’est plus naturel que le retour de la mer sur une côte rendue à elle-même.', pt: 'Nada é mais natural do que o retorno do mar a uma costa devolvida a si mesma.' },
  ],
  naturelles: [
    { level: 'A1', fr: 'Ces couleurs sont naturelles.', pt: 'Estas cores são naturais.' },
    { level: 'A2-B1', fr: 'Les fleurs naturelles sentent meilleur.', pt: 'As flores naturais cheiram melhor.' },
    { level: 'B2', fr: 'Les ressources naturelles de la région ont attiré les marchands pendant des siècles.', pt: 'Os recursos naturais da região atraíram os comerciantes durante séculos.' },
    { level: 'C1-C2', fr: 'Les richesses naturelles, mal protégées, disparaissent plus vite qu’on ne les connaît.', pt: 'As riquezas naturais, mal protegidas, desaparecem mais rápido do que as conhecemos.' },
  ],
  authentique: [
    { level: 'A1', fr: 'C’est un savon authentique.', pt: 'É um sabonete autêntico.' },
    { level: 'A2-B1', fr: 'Je cherche un restaurant authentique, pas un piège à touristes.', pt: 'Procuro um restaurante autêntico, não uma armadilha para turistas.' },
    { level: 'B2', fr: 'Le savon authentique de Marseille doit contenir 72 % d’huile d’olive.', pt: 'O sabonete autêntico de Marseille deve conter 72% de azeite de oliva.' },
    { level: 'C1-C2', fr: 'Ce qui rend un lieu authentique, ce n’est pas son âge, c’est la vie qu’on y mène.', pt: 'O que torna um lugar autêntico não é sua idade, é a vida que se leva ali.' },
  ],
  représentation: [
    { level: 'A1', fr: 'La représentation commence à huit heures.', pt: 'A apresentação começa às oito horas.' },
    { level: 'A2-B1', fr: 'Nous avons des billets pour la représentation de ce soir.', pt: 'Temos ingressos para a apresentação de hoje à noite.' },
    { level: 'B2', fr: 'La représentation, donnée dans l’ancienne salle des machines, a fait salle comble.', pt: 'A apresentação, dada na antiga sala de máquinas, lotou a sala.' },
    { level: 'C1-C2', fr: 'Une représentation réussie ne laisse jamais le public là où il était en entrant.', pt: 'Uma apresentação bem-sucedida nunca deixa o público onde ele estava ao entrar.' },
  ],
  réserves: [
    { level: 'A1', fr: 'Les réserves sont pleines.', pt: 'As reservas estão cheias.' },
    { level: 'A2-B1', fr: 'Le musée garde ses réserves au sous-sol.', pt: 'O museu guarda suas reservas no subsolo.' },
    { level: 'B2', fr: 'Dans les réserves du musée, des documents oubliés dormaient depuis des décennies.', pt: 'Nas reservas do museu, documentos esquecidos dormiam havia décadas.' },
    { level: 'C1-C2', fr: 'C’est souvent dans les réserves, loin des vitrines, que se cache l’histoire la plus précieuse.', pt: 'É frequentemente nas reservas, longe das vitrines, que se esconde a história mais preciosa.' },
  ],
  "d'herbes": [
    { level: 'A1', fr: 'Le bouquet d’herbes est sur la table.', pt: 'O ramo de ervas está na mesa.' },
    { level: 'A2-B1', fr: 'Elle prépare une soupe d’herbes pour le dîner.', pt: 'Ela prepara uma sopa de ervas para o jantar.' },
    { level: 'B2', fr: 'L’odeur d’herbes fraîches, montant du marché, remplissait toute la rue.', pt: 'O cheiro de ervas frescas, subindo do mercado, enchia a rua inteira.' },
    { level: 'C1-C2', fr: 'Un simple goût d’herbes du sud suffit à ramener tout un été provençal.', pt: 'Um simples gosto de ervas do sul basta para trazer de volta todo um verão provençal.' },
  ],
  boulanger: [
    { level: 'A1', fr: 'Le boulanger vend du pain.', pt: 'O padeiro vende pão.' },
    { level: 'A2-B1', fr: 'Le boulanger de la rue ouvre à six heures.', pt: 'O padeiro da rua abre às seis horas.' },
    { level: 'B2', fr: 'Le boulanger, levé avant l’aube, connaît le quartier mieux que personne.', pt: 'O padeiro, acordado antes do amanhecer, conhece o bairro melhor que ninguém.' },
    { level: 'C1-C2', fr: 'En France, le boulanger est bien plus qu’un commerçant : c’est une horloge de la vie quotidienne.', pt: 'Na França, o padeiro é muito mais que um comerciante: é um relógio da vida cotidiana.' },
  ],
  majestueuse: [
    { level: 'A1', fr: 'La tour est majestueuse.', pt: 'A torre é majestosa.' },
    { level: 'A2-B1', fr: 'La basilique, majestueuse au sommet de la colline, domine la ville.', pt: 'A basílica, majestosa no topo da colina, domina a cidade.' },
    { level: 'B2', fr: 'La cathédrale, majestueuse et silencieuse, semble veiller sur les toits.', pt: 'A catedral, majestosa e silenciosa, parece velar sobre os telhados.' },
    { level: 'C1-C2', fr: 'Une façade majestueuse ne fait pas une ville ; ce sont les vies qui l’animent.', pt: 'Uma fachada majestosa não faz uma cidade; são as vidas que a animam.' },
  ],
  verrières: [
    { level: 'A1', fr: 'Les verrières laissent passer la lumière.', pt: 'As claraboias deixam passar a luz.' },
    { level: 'A2-B1', fr: 'Dans l’atelier, la lumière tombe des verrières.', pt: 'No ateliê, a luz cai das claraboias.' },
    { level: 'B2', fr: 'Les verrières, restaurées avec soin, ont gardé l’âme de l’ancienne usine.', pt: 'As claraboias, restauradas com cuidado, guardaram a alma da antiga fábrica.' },
    { level: 'C1-C2', fr: 'Sous les verrières des anciennes fabriques, la culture a remplacé les machines.', pt: 'Sob as claraboias das antigas fábricas, a cultura substituiu as máquinas.' },
  ],
  célébration: [
    { level: 'A1', fr: 'La célébration commence ce soir.', pt: 'A celebração começa hoje à noite.' },
    { level: 'A2-B1', fr: 'La célébration de la victoire a duré toute la nuit.', pt: 'A celebração da vitória durou a noite inteira.' },
    { level: 'B2', fr: 'La célébration, préparée par tout le quartier, a réuni des centaines de personnes.', pt: 'A celebração, preparada por todo o bairro, reuniu centenas de pessoas.' },
    { level: 'C1-C2', fr: 'Une célébration n’a de sens que si elle unit ceux qui y participent.', pt: 'Uma celebração só tem sentido se unir aqueles que dela participam.' },
  ],
  accompagnée: [
    { level: 'A1', fr: 'Elle est accompagnée de son frère.', pt: 'Ela está acompanhada do irmão.' },
    { level: 'A2-B1', fr: 'La bouillabaisse est accompagnée de rouille et de croûtons.', pt: 'A bouillabaisse é acompanhada de rouille e torradas.' },
    { level: 'B2', fr: 'La visite, accompagnée par un guide passionné, a duré trois heures.', pt: 'A visita, acompanhada por um guia apaixonado, durou três horas.' },
    { level: 'C1-C2', fr: 'Toute grande décision, accompagnée d’un doute, n’en est que plus réfléchie.', pt: 'Toda grande decisão, acompanhada de uma dúvida, só se torna mais refletida.' },
  ],
  inoubliable: [
    { level: 'A1', fr: 'C’est une journée inoubliable.', pt: 'É um dia inesquecível.' },
    { level: 'A2-B1', fr: 'Ce voyage a été inoubliable.', pt: 'Esta viagem foi inesquecível.' },
    { level: 'B2', fr: 'Cette soirée, inoubliable entre toutes, a marqué le début de leur histoire.', pt: 'Esta noite, inesquecível entre todas, marcou o início de sua história.' },
    { level: 'C1-C2', fr: 'Les moments inoubliables ne se commandent pas : ils arrivent quand on les attend le moins.', pt: 'Os momentos inesquecíveis não se encomendam: chegam quando menos se espera.' },
  ],
  "d'escaliers": [
    { level: 'A1', fr: 'La maison a beaucoup d’escaliers.', pt: 'A casa tem muitas escadas.' },
    { level: 'A2-B1', fr: 'Le quartier est plein d’escaliers anciens.', pt: 'O bairro é cheio de escadas antigas.' },
    { level: 'B2', fr: 'Les ruelles du Panier, faites d’escaliers et de virages, désorientent les visiteurs.', pt: 'As ruelas do Panier, feitas de escadas e curvas, desorientam os visitantes.' },
    { level: 'C1-C2', fr: 'Une ville d’escaliers garde les secrets de ceux qui les montent chaque jour.', pt: 'Uma cidade de escadas guarda os segredos daqueles que as sobem todos os dias.' },
  ],
  philosophie: [
    { level: 'A1', fr: 'J’étudie la philosophie.', pt: 'Eu estudo filosofia.' },
    { level: 'A2-B1', fr: 'Sa philosophie est simple : profiter de chaque jour.', pt: 'Sua filosofia é simples: aproveitar cada dia.' },
    { level: 'B2', fr: 'La philosophie du rugby, fondée sur le respect, a séduit Irlan.', pt: 'A filosofia do rugby, fundada no respeito, conquistou Irlan.' },
    { level: 'C1-C2', fr: 'Une philosophie de vie ne s’écrit pas : elle se prouve dans les gestes de chaque jour.', pt: 'Uma filosofia de vida não se escreve: ela se prova nos gestos de cada dia.' },
  ],
  harmonie: [
    { level: 'A1', fr: 'Tout est en harmonie.', pt: 'Tudo está em harmonia.' },
    { level: 'A2-B1', fr: 'Les couleurs du quartier sont en harmonie.', pt: 'As cores do bairro estão em harmonia.' },
    { level: 'B2', fr: 'Malgré la diversité des cultures, le marché vit dans une harmonie surprenante.', pt: 'Apesar da diversidade de culturas, o mercado vive numa harmonia surpreendente.' },
    { level: 'C1-C2', fr: 'L’harmonie d’une ville ne se décrète pas : elle se construit dans le respect de chacun.', pt: 'A harmonia de uma cidade não se decreta: ela se constrói no respeito a cada um.' },
  ],
  éternellement: [
    { level: 'A1', fr: 'Je t’aimerai éternellement.', pt: 'Eu te amarei eternamente.' },
    { level: 'A2-B1', fr: 'Les étoiles semblent briller éternellement.', pt: 'As estrelas parecem brilhar eternamente.' },
    { level: 'B2', fr: 'Rien n’est éternellement clos : même une forteresse finit par s’ouvrir.', pt: 'Nada é eternamente fechado: até uma fortaleza acaba se abrindo.' },
    { level: 'C1-C2', fr: 'Ce qui dure éternellement, ce n’est pas la pierre, mais le souvenir qu’elle porte.', pt: 'O que dura eternamente não é a pedra, mas a lembrança que ela carrega.' },
  ],
  urgence: [
    { level: 'A1', fr: "C'est une urgence, appelle vite !", pt: 'É uma emergência, ligue rápido!' },
    { level: 'A2-B1', fr: 'En cas d’urgence, les gardes du parc interviennent en quelques minutes.', pt: 'Em caso de emergência, os guardas do parque intervêm em poucos minutos.' },
    { level: 'B2', fr: 'L’urgence climatique impose des décisions que l’on remettait depuis trop longtemps.', pt: 'A emergência climática impõe decisões que se adiavam há tempo demais.' },
    { level: 'C1-C2', fr: 'Il est des urgences qui ne supportent ni le délai ni la demi-mesure : la mer en est une.', pt: 'Há emergências que não suportam nem prazo nem meia-medida: o mar é uma delas.' },
  ],
  "d'ailleurs": [
    { level: 'A1', fr: "D'ailleurs, le soleil est revenu.", pt: 'Aliás, o sol voltou.' },
    { level: 'A2-B1', fr: "Le plat est bon ; d'ailleurs, tout le monde en reprend.", pt: 'O prato está bom; aliás, todo mundo repete.' },
    { level: 'B2', fr: "Il ne craint pas la mer ; d'ailleurs, il a grandi sur un port.", pt: 'Ele não tem medo do mar; aliás, ele cresceu num porto.' },
    { level: 'C1-C2', fr: "Le mistral, d'ailleurs, est un maître exigeant : il n'épargne ni les voiles ni les caractères.", pt: 'O mistral, aliás, é um mestre exigente: não poupa nem velas nem caracteres.' },
  ],
};
