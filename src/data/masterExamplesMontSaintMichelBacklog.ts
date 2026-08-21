/**
 * Curadoria complementar de exemplos para o backlog de Mont-Saint-Michel.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Mont-Saint-Michel e ainda não tinham os 4 exemplos.
 *
 * `masterExamplesFor` une este mapa aos demais, dando prioridade a estes
 * exemplos curados sobre qualquer entrada parcial do dicionário comum.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const MONT_SAINT_MICHEL_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  'pour que': [
    { level: 'A1', fr: "Je parle fort pour que tu m'entendes.", pt: 'Falo alto para que você me ouça.' },
    { level: 'A2-B1', fr: 'Elle bat les œufs longtemps pour que l\u2019omelette soit légère.', pt: 'Ela bate os ovos por muito tempo para que a omelete fique leve.' },
    { level: 'B2', fr: 'Ils partent à l\u2019aube pour que la marée ne les surprenne pas.', pt: 'Eles partem ao amanhecer para que a maré não os surpreenda.' },
    { level: 'C1-C2', fr: 'On écrit parfois pour que ceux qui viennent après nous trouvent leur chemin.', pt: 'Às vezes se escreve para que os que vierem depois de nós encontrem o seu caminho.' },
  ],
  prés: [
    { level: 'A1', fr: 'Les prés sont verts au printemps.', pt: 'Os prados são verdes na primavera.' },
    { level: 'A2-B1', fr: 'Les moutons paissent dans les prés salés près de la baie.', pt: 'Os carneiros pastam nos prados salgados perto da baía.' },
    { level: 'B2', fr: 'Quand la marée monte, les prés salés disparaissent sous l\u2019eau.', pt: 'Quando a maré sobe, os prados salgados desaparecem sob a água.' },
    { level: 'C1-C2', fr: 'Entre terre et mer, les prés salés gardent la mémoire du passage des marées.', pt: 'Entre a terra e o mar, os prados salgados guardam a memória da passagem das marés.' },
  ],
  ronde: [
    { level: 'A1', fr: 'La table de la cuisine est ronde.', pt: 'A mesa da cozinha é redonda.' },
    { level: 'A2-B1', fr: 'Elle a fait une petite marque ronde au crayon.', pt: 'Ela fez uma pequena marca redonda a lápis.' },
    { level: 'B2', fr: 'La tour ronde du château domine la vallée.', pt: 'A torre redonda do castelo domina o vale.' },
    { level: 'C1-C2', fr: 'Une explication ronde et simple cache parfois une vérité bien plus accidentée.', pt: 'Uma explicação redonda e simples esconde às vezes uma verdade bem mais acidentada.' },
  ],
  annoncé: [
    { level: 'A1', fr: 'Maman a annoncé une bonne nouvelle.', pt: 'Mamãe anunciou uma boa notícia.' },
    { level: 'A2-B1', fr: 'Le guide a annoncé le départ à huit heures.', pt: 'O guia anunciou a partida às oito horas.' },
    { level: 'B2', fr: 'La météo a annoncé une grande marée pour ce soir.', pt: 'A previsão do tempo anunciou uma grande maré para esta noite.' },
    { level: 'C1-C2', fr: 'Ce que la rumeur annonçait depuis des mois s\u2019est enfin réalisé.', pt: 'O que o boato anunciava há meses finalmente se realizou.' },
  ],
  marqué: [
    { level: 'A1', fr: 'Il a marqué un but.', pt: 'Ele marcou um gol.' },
    { level: 'A2-B1', fr: 'Il a marqué trois points sur le dessin, comme sur la planche.', pt: 'Ele marcou três pontos no desenho, como na prancha.' },
    { level: 'B2', fr: 'Cette rencontre a marqué le début d\u2019une nouvelle aventure.', pt: 'Esse encontro marcou o início de uma nova aventura.' },
    { level: 'C1-C2', fr: 'Son passage dans cette ville a marqué durablement son regard sur le monde.', pt: 'A passagem dele por essa cidade marcou duravelmente o seu olhar sobre o mundo.' },
  ],
  premiers: [
    { level: 'A1', fr: 'Les premiers jours sont difficiles.', pt: 'Os primeiros dias são difíceis.' },
    { level: 'A2-B1', fr: 'Il pense à ses premiers jours en France.', pt: 'Ele pensa nos primeiros dias dele na França.' },
    { level: 'B2', fr: 'Les premiers kilomètres furent les plus durs, puis le rythme est venu.', pt: 'Os primeiros quilômetros foram os mais difíceis, depois o ritmo veio.' },
    { level: 'C1-C2', fr: 'Les premiers pas d\u2019un voyage décident parfois de tout le chemin.', pt: 'Os primeiros passos de uma viagem às vezes decidem todo o caminho.' },
  ],
  marque: [
    { level: 'A1', fr: 'Je vois une marque sur le mur.', pt: 'Vejo uma marca na parede.' },
    { level: 'A2-B1', fr: 'Il y a une marque près de la dernière fenêtre.', pt: 'Há uma marca perto da última janela.' },
    { level: 'B2', fr: 'La marque laissée par le temps se lit sur chaque pierre.', pt: 'A marca deixada pelo tempo se lê em cada pedra.' },
    { level: 'C1-C2', fr: 'Une marque discrète, presque effacée, suffit à réveiller toute une histoire.', pt: 'Uma marca discreta, quase apagada, basta para despertar toda uma história.' },
  ],
  herbe: [
    { level: 'A1', fr: 'Le lapin mange de l\u2019herbe.', pt: 'O coelho come grama.' },
    { level: 'A2-B1', fr: 'Les moutons mangent l\u2019herbe des prés salés.', pt: 'Os carneiros comem a grama dos prados salgados.' },
    { level: 'B2', fr: 'Quand la mer se retire, l\u2019herbe reste couverte de sel.', pt: 'Quando o mar se afasta, a grama fica coberta de sal.' },
    { level: 'C1-C2', fr: 'Chaque brin d\u2019herbe raconte le dialogue secret entre la terre et la mer.', pt: 'Cada fio de grama conta o diálogo secreto entre a terra e o mar.' },
  ],
  grâce: [
    { level: 'A1', fr: 'Grâce à toi, tout va bien.', pt: 'Graças a você, tudo vai bem.' },
    { level: 'A2-B1', fr: 'Grâce au barrage, le Mont est redevenu une île.', pt: 'Graças à barragem, o Mont voltou a ser uma ilha.' },
    { level: 'B2', fr: 'Grâce à leur persévérance, la piste ne s\u2019est pas perdue.', pt: 'Graças à perseverança deles, a pista não se perdeu.' },
    { level: 'C1-C2', fr: 'C\u2019est grâce aux détails que les autres ignorent qu\u2019on finit par comprendre.', pt: 'É graças aos detalhes que os outros ignoram que se acaba compreendendo.' },
  ],
  peintre: [
    { level: 'A1', fr: 'Le peintre aime la lumière.', pt: 'O pintor ama a luz.' },
    { level: 'A2-B1', fr: 'Cette lumière changeante a inspiré des peintres.', pt: 'Essa luz mutável inspirou pintores.' },
    { level: 'B2', fr: 'Les peintres du Nord cherchent la lumière qui change à chaque heure.', pt: 'Os pintores do Norte buscam a luz que muda a cada hora.' },
    { level: 'C1-C2', fr: 'Les grands peintres ne copient pas le paysage : ils nous apprennent à le voir.', pt: 'Os grandes pintores não copiam a paisagem: eles nos ensinam a vê-la.' },
  ],
  face: [
    { level: 'A1', fr: 'Il habite en face de la gare.', pt: 'Ele mora em frente à estação.' },
    { level: 'A2-B1', fr: 'Le Mont est debout face au vent depuis mille ans.', pt: 'O Mont está de pé de frente para o vento há mil anos.' },
    { level: 'B2', fr: 'Face à la mer, on mesure mieux le temps qui passe.', pt: 'De frente para o mar, medimos melhor o tempo que passa.' },
    { level: 'C1-C2', fr: 'C\u2019est face à l\u2019immensité qu\u2019on découvre ce que l\u2019on porte en soi.', pt: 'É diante da imensidão que se descobre o que se carrega dentro de si.' },
  ],
  proximité: [
    { level: 'A1', fr: 'La gare est à proximité.', pt: 'A estação fica nas proximidades.' },
    { level: 'A2-B1', fr: 'Un abri se trouve à proximité de la baie.', pt: 'Um abrigo fica nas proximidades da baía.' },
    { level: 'B2', fr: 'À proximité du Mont, la marée change rapidement le paysage.', pt: 'Nas proximidades do Mont, a maré muda rapidamente a paisagem.' },
    { level: 'C1-C2', fr: 'La proximité de la mer impose à chaque habitant une attention particulière au temps.', pt: 'A proximidade do mar impõe a cada morador uma atenção especial ao tempo.' },
  ],
  'en face de': [
    { level: 'A1', fr: 'La maison est en face de la porte.', pt: 'A casa fica em frente à porta.' },
    { level: 'A2-B1', fr: 'Ils attendent en face de la réception.', pt: 'Eles esperam em frente à recepção.' },
    { level: 'B2', fr: 'En face de la mer, le village paraît minuscule.', pt: 'Em frente ao mar, a vila parece minúscula.' },
    { level: 'C1-C2', fr: "En face de l'imprévisible, il faut apprendre à rester calme.", pt: 'Diante do imprevisível, é preciso aprender a permanecer calmo.' },
  ],
  passionnée: [
    { level: 'A1', fr: 'Elle est passionnée de musique.', pt: 'Ela é apaixonada por música.' },
    { level: 'A2-B1', fr: 'La guide passionnée raconte la légende du Mont.', pt: 'A guia apaixonada conta a lenda do Mont.' },
    { level: 'B2', fr: "Une lectrice passionnée peut transmettre une histoire sans la déformer.", pt: 'Uma leitora apaixonada pode transmitir uma história sem deformá-la.' },
    { level: 'C1-C2', fr: 'Sa voix passionnée rendait la mémoire du lieu presque présente.', pt: 'Sua voz apaixonada tornava a memória do lugar quase presente.' },
  ],
  santé: [
    { level: 'A1', fr: 'La santé est importante.', pt: 'A saúde é importante.' },
    { level: 'A2-B1', fr: 'Ils sont en bonne santé après la traversée.', pt: 'Eles estão com boa saúde depois da travessia.' },
    { level: 'B2', fr: 'Une bonne santé permet de voyager avec plus de confiance.', pt: 'Uma boa saúde permite viajar com mais confiança.' },
    { level: 'C1-C2', fr: 'La santé des habitants dépend aussi de la qualité de leur environnement.', pt: 'A saúde dos moradores também depende da qualidade de seu ambiente.' },
  ],
  politesse: [
    { level: 'A1', fr: 'La politesse est importante.', pt: 'A educação é importante.' },
    { level: 'A2-B1', fr: 'La politesse consiste à dire bonjour et merci.', pt: 'A educação consiste em dizer olá e obrigado.' },
    { level: 'B2', fr: 'La politesse facilite les rencontres entre voyageurs et habitants.', pt: 'A educação facilita os encontros entre viajantes e moradores.' },
    { level: 'C1-C2', fr: "La politesse n'est pas une faiblesse : elle est une manière de reconnaître l'autre.", pt: 'A educação não é uma fraqueza: é uma maneira de reconhecer o outro.' },
  ],
  recharge: [
    { level: 'A1', fr: 'La recharge est pleine.', pt: 'A recarga está cheia.' },
    { level: 'A2-B1', fr: 'Irlan cherche une recharge pour son téléphone.', pt: 'Irlan procura uma recarga para o celular.' },
    { level: 'B2', fr: 'La recharge rapide permet de continuer le trajet sans perdre de temps.', pt: 'A recarga rápida permite continuar o trajeto sem perder tempo.' },
    { level: 'C1-C2', fr: 'Même un voyageur passionné doit parfois interrompre sa route pour recharger ses forces.', pt: 'Mesmo um viajante apaixonado às vezes precisa interromper o caminho para recarregar as forças.' },
  ],
  'se rendre compte': [
    { level: 'A1', fr: "Je me rends compte de mon erreur.", pt: 'Eu me dou conta do meu erro.' },
    { level: 'A2-B1', fr: "Les enfants creusent le sable sans se rendre compte du danger.", pt: 'As crianças cavam a areia sem perceber o perigo.' },
    { level: 'B2', fr: "On se rend compte parfois trop tard de ce qui compte vraiment.", pt: 'Às vezes nos damos conta tarde demais do que realmente importa.' },
    { level: 'C1-C2', fr: "Se rendre compte, c'est accepter que la vérité change notre regard.", pt: 'Dar-se conta é aceitar que a verdade muda nosso olhar.' },
  ],
  ambiance: [
    { level: 'A1', fr: "L'ambiance est calme ici.", pt: 'O ambiente é calmo aqui.' },
    { level: 'A2-B1', fr: "On y dort dans une ambiance familiale.", pt: 'Dorme-se num ambiente familiar.' },
    { level: 'B2', fr: "L'ambiance d'un lieu dépend souvent des personnes qui s'y trouvent.", pt: 'O ambiente de um lugar depende muitas vezes das pessoas que estão nele.' },
    { level: 'C1-C2', fr: "Une ambiance naît du dialogue entre les murs, la lumière et les silences.", pt: 'Um ambiente nasce do diálogo entre as paredes, a luz e os silêncios.' },
  ],
  recommandée: [
    { level: 'A1', fr: "Cette promenade est recommandée.", pt: 'Este passeio é recomendado.' },
    { level: 'A2-B1', fr: "La marche sur le sable est souvent recommandée.", pt: 'A caminhada na areia é muitas vezes recomendada.' },
    { level: 'B2', fr: "Une activité recommandée par un médecin mérite d'être essayée.", pt: 'Uma atividade recomendada por um médico merece ser experimentada.' },
    { level: 'C1-C2', fr: "La prudence recommandée n'est pas une limite, c'est une boussole.", pt: 'A prudência recomendada não é um limite, é uma bússola.' },
  ],
  ordonnance: [
    { level: 'A1', fr: "Le médecin écrit une ordonnance.", pt: 'O médico escreve uma receita.' },
    { level: 'A2-B1', fr: "Le Mont est comme une ordonnance de nature.", pt: 'O Mont é como uma receita de natureza.' },
    { level: 'B2', fr: "Suivre une ordonnance, c'est respecter un rythme.", pt: 'Seguir uma receita é respeitar um ritmo.' },
    { level: 'C1-C2', fr: "L'ordonnance la plus précieuse est parfois celle que la nature nous prescrit.", pt: 'A receita mais preciosa às vezes é a que a natureza nos prescreve.' },
  ],
};
