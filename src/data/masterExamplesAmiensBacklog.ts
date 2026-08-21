/**
 * Curadoria complementar de exemplos para o backlog de Amiens.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Amiens e ainda não tinham os 4 exemplos.
 *
 * `masterExamplesFor` une este mapa aos demais, dando prioridade a estes
 * exemplos curados sobre qualquer entrada parcial do dicionário comum.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const AMIENS_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  cathédrale: [
    { level: 'A1', fr: 'La cathédrale est grande.', pt: 'A catedral é grande.' },
    { level: 'A2-B1', fr: "Ils visitent la cathédrale d'Amiens.", pt: 'Eles visitam a catedral de Amiens.' },
    { level: 'B2', fr: 'La cathédrale domine la ville de sa silhouette claire.', pt: 'A catedral domina a cidade com sua silhueta clara.' },
    { level: 'C1-C2', fr: "C'est la cathédrale qui, par ses pierres, raconte des siècles d'histoire.", pt: 'É a catedral que, por suas pedras, conta séculos de história.' },
  ],
  rame: [
    { level: 'A1', fr: 'Il rame sur le lac.', pt: 'Ele rema no lago.' },
    { level: 'A2-B1', fr: 'Irlan rame doucement sur la Somme.', pt: 'Irlan rema devagar no Somme.' },
    { level: 'B2', fr: "Ramer en cadence demande de l'entraînement.", pt: 'Remar em cadência exige treino.' },
    { level: 'C1-C2', fr: "C'est en ramant que l'on apprend à suivre le courant.", pt: 'É remando que se aprende a seguir a corrente.' },
  ],
  tradition: [
    { level: 'A1', fr: 'La tradition est belle.', pt: 'A tradição é bonita.' },
    { level: 'A2-B1', fr: 'Chaque région garde ses traditions.', pt: 'Cada região guarda suas tradições.' },
    { level: 'B2', fr: 'La tradition culinaire se transmet de génération en génération.', pt: 'A tradição culinária se transmite de geração em geração.' },
    { level: 'C1-C2', fr: "C'est la tradition qui, vivante, relie le passé au présent.", pt: 'É a tradição que, viva, liga o passado ao presente.' },
  ],
  ville: [
    { level: 'A1', fr: 'La ville est grande.', pt: 'A cidade é grande.' },
    { level: 'A2-B1', fr: 'Ils se promènent dans la ville.', pt: 'Eles passeiam pela cidade.' },
    { level: 'B2', fr: "La ville s'anime dès le matin.", pt: 'A cidade se anima desde cedo.' },
    { level: 'C1-C2', fr: "C'est la ville qui, par ses rues, façonne la mémoire de ses habitants.", pt: 'É a cidade que, por suas ruas, molda a memória dos seus habitantes.' },
  ],
  'grâce à': [
    { level: 'A1', fr: 'Grâce à toi, je comprends.', pt: 'Graças a você, eu entendo.' },
    { level: 'A2-B1', fr: 'Grâce à la carte, ils trouvent le chemin.', pt: 'Graças ao mapa, eles encontram o caminho.' },
    { level: 'B2', fr: "Grâce à sa patience, elle a déchiffré le message.", pt: 'Graças à sua paciência, ela decifrou a mensagem.' },
    { level: 'C1-C2', fr: "C'est grâce aux détails que l'on comprend l'ensemble.", pt: 'É graças aos detalhes que se entende o conjunto.' },
  ],
  édition: [
    { level: 'A1', fr: "C'est une édition ancienne.", pt: 'É uma edição antiga.' },
    { level: 'A2-B1', fr: 'La bibliothèque garde des éditions rares.', pt: 'A biblioteca guarda edições raras.' },
    { level: 'B2', fr: 'Cette édition illustrée est très recherchée.', pt: 'Esta edição ilustrada é muito procurada.' },
    { level: 'C1-C2', fr: "C'est l'édition qui, par ses choix, façonne la réception d'une œuvre.", pt: 'É a edição que, por suas escolhas, molda a recepção de uma obra.' },
  ],
  téléphone: [
    { level: 'A1', fr: 'Le téléphone sonne.', pt: 'O telefone toca.' },
    { level: 'A2-B1', fr: 'Elle appelle sa mère au téléphone.', pt: 'Ela liga para a mãe pelo telefone.' },
    { level: 'B2', fr: 'Le téléphone permet de rester proche malgré la distance.', pt: 'O telefone permite ficar perto apesar da distância.' },
    { level: 'C1-C2', fr: "C'est le téléphone qui, devenu indispensable, rapproche ceux que la distance sépare.", pt: 'É o telefone que, tornado indispensável, aproxima os que a distância separa.' },
  ],
  épicerie: [
    { level: 'A1', fr: "L'épicerie est ouverte.", pt: 'A mercearia está aberta.' },
    { level: 'A2-B1', fr: "Il achète du lait à l'épicerie du coin.", pt: 'Ele compra leite na mercearia da esquina.' },
    { level: 'B2', fr: "L'épicerie du quartier vend des produits locaux.", pt: 'A mercearia do bairro vende produtos locais.' },
    { level: 'C1-C2', fr: "C'est l'épicerie qui, discrète, maintient le lien social du quartier.", pt: 'É a mercearia que, discreta, mantém o vínculo social do bairro.' },
  ],
  côte: [
    { level: 'A1', fr: 'Ils marchent côte à côte.', pt: 'Eles caminham lado a lado.' },
    { level: 'A2-B1', fr: 'Nous habitons près de la côte.', pt: 'Nós moramos perto da costa.' },
    { level: 'B2', fr: 'Ils avancent côte à côte malgré la fatigue.', pt: 'Eles avançam lado a lado apesar do cansaço.' },
    { level: 'C1-C2', fr: "C'est côte à côte que l'on traverse le mieux les épreuves.", pt: 'É lado a lado que se atravessam melhor as provações.' },
  ],
  goutte: [
    { level: 'A1', fr: 'Une goutte tombe.', pt: 'Uma gota cai.' },
    { level: 'A2-B1', fr: 'Des gouttes de pluie frappent la vitre.', pt: 'Gotas de chuva batem no vidro.' },
    { level: 'B2', fr: 'Les gouttes glissent le long de la fenêtre.', pt: 'As gotas escorrem pela janela.' },
    { level: 'C1-C2', fr: "C'est la goutte qui, patiente, finit par creuser la pierre.", pt: 'É a gota que, paciente, acaba cavando a pedra.' },
  ],
  marquée: [
    { level: 'A1', fr: 'La page est marquée.', pt: 'A página está marcada.' },
    { level: 'A2-B1', fr: "La dalle est marquée d'une fleur.", pt: 'A laje é marcada com uma flor.' },
    { level: 'B2', fr: 'Cette ville est marquée par son histoire.', pt: 'Esta cidade é marcada por sua história.' },
    { level: 'C1-C2', fr: "C'est une rencontre marquée par la grâce qui restera dans les mémoires.", pt: 'É um encontro marcado pela graça que ficará na memória.' },
  ],
  poissonnerie: [
    { level: 'A1', fr: 'La poissonnerie est ouverte.', pt: 'A peixaria está aberta.' },
    { level: 'A2-B1', fr: 'Ils achètent du poisson à la poissonnerie.', pt: 'Eles compram peixe na peixaria.' },
    { level: 'B2', fr: 'La poissonnerie du marché vend du poisson frais pêché ce matin.', pt: 'A peixaria do mercado vende peixe fresco pescado nesta manhã.' },
    { level: 'C1-C2', fr: "C'est la poissonnerie qui, chaque matin, relie les pêcheurs à la ville.", pt: 'É a peixaria que, toda manhã, liga os pescadores à cidade.' },
  ],
  pâtisserie: [
    { level: 'A1', fr: 'La pâtisserie est délicieuse.', pt: 'A pastelaria é deliciosa.' },
    { level: 'A2-B1', fr: 'Ils achètent un gâteau à la pâtisserie du coin.', pt: 'Eles compram um bolo na pastelaria da esquina.' },
    { level: 'B2', fr: "La pâtisserie d'Amiens est réputée pour son gâteau battu.", pt: 'A pastelaria de Amiens é reconhecida por seu gâteau battu.' },
    { level: 'C1-C2', fr: "C'est la pâtisserie qui, par ses recettes, garde vivante la mémoire sucrée d'une ville.", pt: 'É a pastelaria que, por suas receitas, guarda viva a memória doce de uma cidade.' },
  ],
  convivialité: [
    { level: 'A1', fr: 'J\'aime la convivialité du repas.', pt: 'Eu gosto da descontração da refeição.' },
    { level: 'A2-B1', fr: 'Le dîner de quartier est plein de convivialité.', pt: 'O jantar do bairro é cheio de descontração.' },
    { level: 'B2', fr: 'La convivialité des fêtes de village rapproche les habitants.', pt: 'A descontração das festas de vila aproxima os moradores.' },
    { level: 'C1-C2', fr: "C'est la convivialité qui, autour d'une table, réconcilie ce que les disputes avaient séparé.", pt: 'É a descontração que, em volta de uma mesa, reconcilia o que as brigas tinham separado.' },
  ],
  réserve: [
    { level: 'A1', fr: 'Je réserve une table pour deux.', pt: 'Eu reservo uma mesa para dois.' },
    { level: 'A2-B1', fr: 'On réserve une chambre double à l\'hôtel.', pt: 'Reservamos um quarto de casal no hotel.' },
    { level: 'B2', fr: 'Elle réserve ses billets de train bien à l\'avance.', pt: 'Ela reserva as passagens de trem com bastante antecedência.' },
    { level: 'C1-C2', fr: "Réserver à l'avance relève d'une courtoisie qui témoigne du respect du temps de chacun.", pt: 'Reservar com antecedência é uma cortesia que demonstra respeito pelo tempo de cada um.' },
  ],
  blessure: [
    { level: 'A1', fr: 'La blessure fait mal.', pt: 'O ferimento dói.' },
    { level: 'A2-B1', fr: 'Il a une petite blessure au genou.', pt: 'Ele tem um pequeno ferimento no joelho.' },
    { level: 'B2', fr: 'Une blessure mal soignée peut s\'infecter.', pt: 'Um ferimento mal tratado pode infeccionar.' },
    { level: 'C1-C2', fr: "C'est parfois la blessure la plus invisible qui demande le plus de soins.", pt: 'Às vezes é o ferimento mais invisível que exige mais cuidados.' },
  ],
  pansement: [
    { level: 'A1', fr: 'Je mets un pansement sur la plaie.', pt: 'Eu coloco um curativo na ferida.' },
    { level: 'A2-B1', fr: 'Elle change son pansement chaque matin.', pt: 'Ela troca o curativo toda manhã.' },
    { level: 'B2', fr: 'Un pansement propre protège la blessure des infections.', pt: 'Um curativo limpo protege o ferimento de infecções.' },
    { level: 'C1-C2', fr: "C'est le pansement qui, posé à temps, permet à la peau de se refaire en silence.", pt: 'É o curativo que, aplicado a tempo, permite que a pele se refaça em silêncio.' },
  ],
  placé: [
    { level: 'A1', fr: 'Le livre est bien placé sur la table.', pt: 'O livro está bem colocado sobre a mesa.' },
    { level: 'A2-B1', fr: 'Un compliment bien placé fait plaisir.', pt: 'Um elogio bem colocado agrada.' },
    { level: 'B2', fr: 'Cette phrase, placée au bon endroit, change tout le discours.', pt: 'Essa frase, colocada no lugar certo, muda todo o discurso.' },
    { level: 'C1-C2', fr: "C'est un mot bien placé qui, au moment juste, console mieux qu'un long discours.", pt: 'É uma palavra bem colocada que, no momento certo, consola melhor que um longo discurso.' },
  ],
};
