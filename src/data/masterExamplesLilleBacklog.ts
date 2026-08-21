/**
 * Curadoria complementar de exemplos para o backlog de Lille.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Lille e ainda não tinham os 4 exemplos.
 *
 * `masterExamplesFor` une este mapa aos demais, dando prioridade a estes
 * exemplos curados sobre qualquer entrada parcial do dicionário comum.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const LILLE_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  bourse: [
    { level: 'A1', fr: 'La bourse est un grand bâtiment.', pt: 'A bolsa é um grande prédio.' },
    { level: 'A2-B1', fr: 'La Vieille Bourse est au centre de Lille.', pt: 'A Vieille Bourse fica no centro de Lille.' },
    { level: 'B2', fr: 'Autrefois, les marchands se réunissaient à la bourse pour fixer les prix.', pt: 'Antigamente, os comerciantes se reuniam na bolsa para fixar os preços.' },
    { level: 'C1-C2', fr: 'La Vieille Bourse, joyau flamand, témoigne de la richesse passée de la ville.', pt: 'A Vieille Bourse, joia flamenga, testemunha a riqueza passada da cidade.' },
  ],
  siècle: [
    { level: 'A1', fr: 'Le siècle est long.', pt: 'O século é longo.' },
    { level: 'A2-B1', fr: 'La cathédrale a traversé les siècles.', pt: 'A catedral atravessou os séculos.' },
    { level: 'B2', fr: 'Au début du vingtième siècle, le port était très actif.', pt: 'No início do século XX, o porto era muito ativo.' },
    { level: 'C1-C2', fr: 'Chaque siècle efface des noms, mais certains refusent de disparaître.', pt: 'Cada século apaga nomes, mas alguns se recusam a desaparecer.' },
  ],
  boîte: [
    { level: 'A1', fr: 'La boîte est en bois.', pt: 'A caixa é de madeira.' },
    { level: 'A2-B1', fr: 'Il y a de vieilles boîtes sur la table.', pt: 'Há caixas antigas sobre a mesa.' },
    { level: 'B2', fr: 'Les boîtes en bois gardaient les papiers du port.', pt: 'As caixas de madeira guardavam os papéis do porto.' },
    { level: 'C1-C2', fr: "Dans chaque boîte fermée dort un morceau d'histoire qu'on a cru pouvoir ranger.", pt: 'Em cada caixa fechada dorme um pedaço de história que se acreditou poder guardar.' },
  ],
  voir: [
    { level: 'A1', fr: 'Je vois la gare.', pt: 'Vejo a estação.' },
    { level: 'A2-B1', fr: 'Nous allons voir le Mont-Saint-Michel.', pt: 'Vamos ver o Mont-Saint-Michel.' },
    { level: 'B2', fr: 'Il a vu la silhouette grise au bout du quai.', pt: 'Ele viu a silhueta cinza no fim da plataforma.' },
    { level: 'C1-C2', fr: 'Voir, c\'est parfois comprendre ce que les autres regardent sans le voir.', pt: 'Ver é às vezes compreender o que os outros olham sem ver.' },
  ],
  demain: [
    { level: 'A1', fr: 'À demain !', pt: 'Até amanhã!' },
    { level: 'A2-B1', fr: 'Demain, nous partons pour la Normandie.', pt: 'Amanhã, partimos para a Normandia.' },
    { level: 'B2', fr: 'Demain matin, le train partira à la première heure.', pt: 'Amanhã de manhã, o trem partirá na primeira hora.' },
    { level: 'C1-C2', fr: "Demain n'est jamais acquis : il se gagne par ce qu'on fait aujourd'hui.", pt: 'O amanhã nunca está garantido: conquista-se pelo que se faz hoje.' },
  ],
  comtesse: [
    { level: 'A1', fr: 'La comtesse est généreuse.', pt: 'A condessa é generosa.' },
    { level: 'A2-B1', fr: "L'Hospice Comtesse porte le nom d'une comtesse.", pt: 'O Hospice Comtesse leva o nome de uma condessa.' },
    { level: 'B2', fr: 'Jeanne de Flandre, la comtesse, a fondé l\'hôpital au treizième siècle.', pt: 'Jeanne de Flandre, a condessa, fundou o hospital no século XIII.' },
    { level: 'C1-C2', fr: 'La comtesse, devenue légende, veille encore sur la mémoire des pauvres de Lille.', pt: 'A condessa, tornada lenda, ainda vela pela memória dos pobres de Lille.' },
  ],
  manche: [
    { level: 'A1', fr: 'La Manche est une mer.', pt: 'A Mancha é um mar.' },
    { level: 'A2-B1', fr: 'Le train passe sous la Manche.', pt: 'O trem passa sob a Mancha.' },
    { level: 'B2', fr: "La Manche sépare la France de l'Angleterre.", pt: 'A Mancha separa a França da Inglaterra.' },
    { level: 'C1-C2', fr: "La Manche, étroite et capricieuse, a longtemps protégé l'Angleterre.", pt: 'A Mancha, estreita e caprichosa, protegeu por muito tempo a Inglaterra.' },
  ],
  'à cause de': [
    { level: 'A1', fr: 'À cause de la pluie, je reste.', pt: 'Por causa da chuva, fico.' },
    { level: 'A2-B1', fr: 'La sauce est foncée à cause de la bière.', pt: 'O molho é escuro por causa da cerveja.' },
    { level: 'B2', fr: "À cause de la pression, l'archiviste a fermé les portes.", pt: 'Por causa da pressão, o arquivista fechou as portas.' },
    { level: 'C1-C2', fr: "À cause d'un nom écrit au bas d'une page, toute une histoire a ressurgi.", pt: 'Por causa de um nome escrito no pé de uma página, toda uma história ressurgiu.' },
  ],
  fourchette: [
    { level: 'A1', fr: 'La fourchette est sur la table.', pt: 'O garfo está sobre a mesa.' },
    { level: 'A2-B1', fr: 'Irlan a posé sa fourchette.', pt: 'Irlan pousou o garfo.' },
    { level: 'B2', fr: 'Elle a posé sa fourchette pour écouter la conversation.', pt: 'Ela pousou o garfo para ouvir a conversa.' },
    { level: 'C1-C2', fr: "Une fourchette posée en travers de l'assiette dit plus qu'un long discours.", pt: 'Um garfo pousado atravessado no prato diz mais que um longo discurso.' },
  ],
  addition: [
    { level: 'A1', fr: "L'addition est prête.", pt: 'A conta está pronta.' },
    { level: 'A2-B1', fr: "Le serveur a apporté l'addition.", pt: 'O garçom trouxe a conta.' },
    { level: 'B2', fr: "Il a réglé l'addition et a laissé un pourboire.", pt: 'Ele pagou a conta e deixou uma gorjeta.' },
    { level: 'C1-C2', fr: "L'addition d'un repas se règle, mais celle d'un secret ne se règle jamais.", pt: 'A conta de uma refeição se paga, mas a de um segredo nunca se paga.' },
  ],
  reine: [
    { level: 'A1', fr: 'La reine est au château.', pt: 'A rainha está no castelo.' },
    { level: 'A2-B1', fr: 'On appelle la citadelle la reine des citadelles.', pt: 'Chamam a cidadela de rainha das cidadelas.' },
    { level: 'B2', fr: 'Cette forteresse est considérée comme la reine des citadelles.', pt: 'Esta fortaleza é considerada a rainha das cidadelas.' },
    { level: 'C1-C2', fr: 'Chaque ville a sa reine cachée : un lieu qui règne sans couronne.', pt: 'Cada cidade tem sua rainha escondida: um lugar que reina sem coroa.' },
  ],
  diplôme: [
    { level: 'A1', fr: 'Le diplôme est important.', pt: 'O diploma é importante.' },
    { level: 'A2-B1', fr: 'Elle reçoit son diplôme à la fin de l\'année.', pt: 'Ela recebe seu diploma no fim do ano.' },
    { level: 'B2', fr: 'Obtenir un diplôme ouvre des portes sur le marché du travail.', pt: 'Obter um diploma abre portas no mercado de trabalho.' },
    { level: 'C1-C2', fr: 'Le diplôme atteste d\'un savoir, mais c\'est la vie qui juge le savoir-faire.', pt: 'O diploma atesta um saber, mas é a vida que julga o saber-fazer.' },
  ],
  diplômé: [
    { level: 'A1', fr: 'Il est diplômé.', pt: 'Ele é formado.' },
    { level: 'A2-B1', fr: 'Elle est diplômée de l\'université de Lille.', pt: 'Ela é formada pela universidade de Lille.' },
    { level: 'B2', fr: 'Les jeunes diplômés cherchent leur premier emploi.', pt: 'Os jovens formados procuram seu primeiro emprego.' },
    { level: 'C1-C2', fr: 'Être diplômé n\'est qu\'une étape : le parcours continue bien après le diplôme.', pt: 'Ser formado é só uma etapa: o percurso continua bem depois do diploma.' },
  ],
};
