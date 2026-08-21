/**
 * Curadoria complementar de exemplos para o backlog de Paris.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Paris e ainda não estavam no masterExamplesDictionary.
 *
 * Este arquivo é temporário por conveniência de merge: `masterExamplesFor` une
 * este mapa ao `MASTER_EXAMPLES` principal.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const PARIS_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  dessine: [
    { level: 'A1', fr: 'Je dessine un arbre.', pt: 'Eu desenho uma árvore.' },
    { level: 'A2-B1', fr: 'Irlan dessine le quartier sur une feuille.', pt: 'Irlan desenha o bairro numa folha.' },
    { level: 'B2', fr: 'Dessiner une carte demande de la précision.', pt: 'Desenhar um mapa exige precisão.' },
    { level: 'C1-C2', fr: "C'est en dessinant que l'on apprend à regarder vraiment.", pt: 'É desenhando que se aprende a olhar de verdade.' },
  ],
  fièvre: [
    { level: 'A1', fr: 'Il a de la fièvre.', pt: 'Ele está com febre.' },
    { level: 'A2-B1', fr: 'Andréa a de la fièvre et doit se reposer.', pt: 'Andréa está com febre e precisa descansar.' },
    { level: 'B2', fr: 'Une fièvre légère peut accompagner un coup de froid.', pt: 'Uma febre leve pode acompanhar um resfriado.' },
    { level: 'C1-C2', fr: "C'est la fièvre qui, signe d'alerte, pousse à ralentir.", pt: 'É a febre que, sinal de alerta, leva a desacelerar.' },
  ],
  conseil: [
    { level: 'A1', fr: 'Merci pour ton conseil.', pt: 'Obrigado pelo seu conselho.' },
    { level: 'A2-B1', fr: 'Elle donne un bon conseil à Irlan.', pt: 'Ela dá um bom conselho a Irlan.' },
    { level: 'B2', fr: 'Un conseil avisé évite bien des erreurs.', pt: 'Um conselho sábio evita muitos erros.' },
    { level: 'C1-C2', fr: "C'est le conseil qui, offert avec tact, guide sans imposer.", pt: 'É o conselho que, dado com tato, orienta sem impor.' },
  ],
  soin: [
    { level: 'A1', fr: 'Je prends soin de mes plantes.', pt: 'Eu cuido das minhas plantas.' },
    { level: 'A2-B1', fr: "Andréa prend soin d'Irlan quand il est malade.", pt: 'Andréa cuida de Irlan quando ele está doente.' },
    { level: 'B2', fr: 'Prendre soin de soi passe aussi par le repos.', pt: 'Cuidar de si também passa pelo descanso.' },
    { level: 'C1-C2', fr: "C'est le soin qui, dans les gestes simples, dit l'attention.", pt: 'É o cuidado que, nos gestos simples, diz a atenção.' },
  ],
  réservé: [
    { level: 'A1', fr: "J'ai réservé une table.", pt: 'Reservei uma mesa.' },
    { level: 'A2-B1', fr: 'Ils ont réservé la salle pour la fête.', pt: 'Eles reservaram o salão para a festa.' },
    { level: 'B2', fr: 'Elle a réservé deux billets pour le concert.', pt: 'Ela reservou duas entradas para o concerto.' },
    { level: 'C1-C2', fr: "C'est en réservant à l'avance que l'on voyage l'esprit léger.", pt: 'É reservando com antecedência que se viaja com a mente leve.' },
  ],
  marbre: [
    { level: 'A1', fr: 'La statue est en marbre.', pt: 'A estátua é de mármore.' },
    { level: 'A2-B1', fr: 'Les marches de marbre sont froides.', pt: 'Os degraus de mármore são frios.' },
    { level: 'B2', fr: 'Le marbre poli reflète la lumière.', pt: 'O mármore polido reflete a luz.' },
    { level: 'C1-C2', fr: "C'est le marbre qui, solide et froid, garde la trace des bâtisseurs.", pt: 'É o mármore que, sólido e frio, guarda a marca dos construtores.' },
  ],
  curiosité: [
    { level: 'A1', fr: 'Sa curiosité est grande.', pt: 'A curiosidade dela é grande.' },
    { level: 'A2-B1', fr: 'Andréa regarde la vitrine avec curiosité.', pt: 'Andréa olha a vitrine com curiosidade.' },
    { level: 'B2', fr: 'La curiosité pousse à découvrir de nouveaux quartiers.', pt: 'A curiosidade leva a descobrir novos bairros.' },
    { level: 'C1-C2', fr: "C'est la curiosité qui, bien menée, transforme l'inconnu en savoir.", pt: 'É a curiosidade que, bem conduzida, transforma o desconhecido em saber.' },
  ],
  horloge: [
    { level: 'A1', fr: "L'horloge indique midi.", pt: 'O relógio marca meio-dia.' },
    { level: 'A2-B1', fr: 'La grande horloge sonne toutes les heures.', pt: 'O grande relógio toca a cada hora.' },
    { level: 'B2', fr: "L'horloge de la gare est toujours à l'heure.", pt: 'O relógio da estação está sempre certo.' },
    { level: 'C1-C2', fr: "C'est l'horloge qui, impassible, rythme la vie du quartier.", pt: 'É o relógio que, impassível, ritma a vida do bairro.' },
  ],
  tableau: [
    { level: 'A1', fr: 'Le tableau est au mur.', pt: 'O quadro está na parede.' },
    { level: 'A2-B1', fr: 'Ils admirent un tableau au musée.', pt: 'Eles admiram um quadro no museu.' },
    { level: 'B2', fr: 'Le tableau représente une scène de la vie parisienne.', pt: 'O quadro representa uma cena da vida parisiense.' },
    { level: 'C1-C2', fr: "C'est le tableau qui, figé, garde vivant le regard du peintre.", pt: 'É o quadro que, imóvel, mantém vivo o olhar do pintor.' },
  ],
  village: [
    { level: 'A1', fr: 'Le village est petit.', pt: 'O vilarejo é pequeno.' },
    { level: 'A2-B1', fr: 'Ils passent le week-end dans un village.', pt: 'Eles passam o fim de semana num vilarejo.' },
    { level: 'B2', fr: 'Le village garde ses traditions malgré la modernité.', pt: 'O vilarejo conserva as tradições apesar da modernidade.' },
    { level: 'C1-C2', fr: "C'est le village qui, par son calme, rappelle la lenteur nécessaire.", pt: 'É o vilarejo que, por sua calma, lembra a lentidão necessária.' },
  ],
  continué: [
    { level: 'A1', fr: 'Il a continué son travail.', pt: 'Ele continuou o trabalho.' },
    { level: 'A2-B1', fr: 'Irlan a continué de lire la carte.', pt: 'Irlan continuou a ler o mapa.' },
    { level: 'B2', fr: 'Elle a continué malgré la fatigue.', pt: 'Ela continuou apesar do cansaço.' },
    { level: 'C1-C2', fr: "C'est en ayant continué que l'on mesure le chemin parcouru.", pt: 'É tendo continuado que se mede o caminho percorrido.' },
  ],
  accompagne: [
    { level: 'A1', fr: "J'accompagne mon ami.", pt: 'Eu acompanho meu amigo.' },
    { level: 'A2-B1', fr: 'Andréa accompagne Irlan à la poste.', pt: 'Andréa acompanha Irlan aos correios.' },
    { level: 'B2', fr: "Elle l'accompagne partout sans jamais se plaindre.", pt: 'Ela o acompanha a todos os lugares sem nunca reclamar.' },
    { level: 'C1-C2', fr: "C'est en accompagnant que l'on apprend à marcher au rythme de l'autre.", pt: 'É acompanhando que se aprende a caminhar no ritmo do outro.' },
  ],
  gardé: [
    { level: 'A1', fr: "J'ai gardé le billet.", pt: 'Guardei a passagem.' },
    { level: 'A2-B1', fr: 'Elle a gardé la carte en souvenir.', pt: 'Ela guardou o mapa de lembrança.' },
    { level: 'B2', fr: 'Il a gardé son calme malgré la nouvelle.', pt: 'Ele manteve a calma apesar da notícia.' },
    { level: 'C1-C2', fr: "C'est ce qui est gardé au fond du cœur qui ne se perd jamais.", pt: 'É o que se guarda no fundo do coração que nunca se perde.' },
  ],
  nôtre: [
    { level: 'A1', fr: 'Cette maison est la nôtre.', pt: 'Esta casa é nossa.' },
    { level: 'A2-B1', fr: 'Le chat est désormais le nôtre.', pt: 'O gato agora é nosso.' },
    { level: 'B2', fr: 'Cette ville est devenue la nôtre au fil des années.', pt: 'Esta cidade se tornou nossa ao longo dos anos.' },
    { level: 'C1-C2', fr: "C'est nôtre, ce chemin que l'on trace à deux.", pt: 'É nosso, esse caminho que se traça a dois.' },
  ],
  'loin de': [
    { level: 'A1', fr: 'La gare est loin de chez moi.', pt: 'A estação fica longe da minha casa.' },
    { level: 'A2-B1', fr: 'Loin de sa famille, il téléphone souvent.', pt: 'Longe da família, ele telefona com frequência.' },
    { level: 'B2', fr: 'Loin de se décourager, il a redoublé d\'efforts.', pt: 'Longe de se desanimar, ele redobrou os esforços.' },
    { level: 'C1-C2', fr: "C'est loin des repères que l'on découvre qui l'on est.", pt: 'É longe das referências que se descobre quem se é.' },
  ],
  bibliothèque: [
    { level: 'A1', fr: 'Je vais à la bibliothèque.', pt: 'Eu vou à biblioteca.' },
    { level: 'A2-B1', fr: 'Il emprunte un livre à la bibliothèque.', pt: 'Ele pega um livro emprestado na biblioteca.' },
    { level: 'B2', fr: 'La bibliothèque conserve des documents rares.', pt: 'A biblioteca conserva documentos raros.' },
    { level: 'C1-C2', fr: "C'est la bibliothèque qui, silencieuse, garde la mémoire des lecteurs.", pt: 'É a biblioteca que, silenciosa, guarda a memória dos leitores.' },
  ],
  scène: [
    { level: 'A1', fr: 'La scène est belle.', pt: 'A cena é bonita.' },
    { level: 'A2-B1', fr: 'Des couples dansent devant la scène.', pt: 'Casais dançam diante do palco.' },
    { level: 'B2', fr: 'La scène se déroule dans un vieux quartier.', pt: 'A cena se passa num velho bairro.' },
    { level: 'C1-C2', fr: "C'est la scène qui, immobile un instant, fixe le souvenir.", pt: 'É a cena que, imóvel por um instante, fixa a lembrança.' },
  ],
  rythme: [
    { level: 'A1', fr: 'Le rythme est lent.', pt: 'O ritmo é lento.' },
    { level: 'A2-B1', fr: 'Ils dansent au rythme de la musique.', pt: 'Eles dançam no ritmo da música.' },
    { level: 'B2', fr: 'Le rythme de la ville accélère en journée.', pt: 'O ritmo da cidade acelera durante o dia.' },
    { level: 'C1-C2', fr: "C'est le rythme qui, propre à chacun, demande d'être respecté.", pt: 'É o ritmo que, próprio de cada um, pede para ser respeitado.' },
  ],
  rencontre: [
    { level: 'A1', fr: 'La rencontre est agréable.', pt: 'O encontro é agradável.' },
    { level: 'A2-B1', fr: 'Ils racontent leur première rencontre.', pt: 'Eles contam o primeiro encontro.' },
    { level: 'B2', fr: 'Une rencontre fortuite peut changer le cours d\'une vie.', pt: 'Um encontro casual pode mudar o rumo de uma vida.' },
    { level: 'C1-C2', fr: "C'est la rencontre qui, imprévisible, trace parfois la plus belle des routes.", pt: 'É o encontro que, imprevisível, às vezes traça a mais bela das estradas.' },
  ],
  parfaite: [
    { level: 'A1', fr: 'La salle est parfaite.', pt: 'A sala é perfeita.' },
    { level: 'A2-B1', fr: 'Elle est parfaite pour la fête.', pt: 'Ela é perfeita para a festa.' },
    { level: 'B2', fr: 'Une organisation parfaite demande beaucoup de préparation.', pt: 'Uma organização perfeita exige muita preparação.' },
    { level: 'C1-C2', fr: "C'est parfaite, cette harmonie née de l'effort et de l'attention.", pt: 'É perfeita, essa harmonia nascida do esforço e da atenção.' },
  ],
  crème: [
    { level: 'A1', fr: 'La crème est fraîche.', pt: 'O creme é fresco.' },
    { level: 'A2-B1', fr: 'Il y a de la crème sur le gâteau.', pt: 'Há creme sobre o bolo.' },
    { level: 'B2', fr: 'La crème chantilly accompagne les fraises.', pt: 'O chantilly acompanha os morangos.' },
    { level: 'C1-C2', fr: 'La crème, onctueuse, adoucit les desserts les plus simples.', pt: 'O creme, cremoso, suaviza as sobremesas mais simples.' },
  ],
  ampoule: [
    { level: 'A1', fr: "L'ampoule ne marche plus.", pt: 'A lâmpada não funciona mais.' },
    { level: 'A2-B1', fr: "Il change l'ampoule du couloir.", pt: 'Ele troca a lâmpada do corredor.' },
    { level: 'B2', fr: "Une ampoule basse consommation dure plus longtemps.", pt: 'Uma lâmpada de baixo consumo dura mais tempo.' },
    { level: 'C1-C2', fr: "L'ampoule, si banale, éclaire pourtant toute la pièce d'une seule idée.", pt: 'A lâmpada, tão banal, ilumina no entanto a sala inteira com uma única ideia.' },
  ],
  valide: [
    { level: 'A1', fr: 'Le billet est valide.', pt: 'O bilhete é válido.' },
    { level: 'A2-B1', fr: 'Ton abonnement est encore valide un mois.', pt: 'Sua assinatura ainda é válida por um mês.' },
    { level: 'B2', fr: "Le document n'est plus valide sans signature.", pt: 'O documento não é mais válido sem assinatura.' },
    { level: 'C1-C2', fr: "C'est l'usage qui rend une règle valide, pas seulement son énoncé.", pt: 'É o uso que torna uma regra válida, não apenas seu enunciado.' },
  ],
  monarchie: [
    { level: 'A1', fr: 'La monarchie est une forme de gouvernement.', pt: 'A monarquia é uma forma de governo.' },
    { level: 'A2-B1', fr: 'La monarchie française a pris fin en 1792.', pt: 'A monarquia francesa terminou em 1792.' },
    { level: 'B2', fr: 'Sous la monarchie, le roi concentrait tous les pouvoirs.', pt: 'Sob a monarquia, o rei concentrava todos os poderes.' },
    { level: 'C1-C2', fr: 'La monarchie absolue repose sur une légitimité que la Révolution a contestée.', pt: 'A monarquia absoluta repousa sobre uma legitimidade que a Revolução contestou.' },
  ],
  'critiquée': [
    { level: 'A1', fr: 'La tour a été critiquée.', pt: 'A torre foi criticada.' },
    { level: 'A2-B1', fr: "L'œuvre a été critiquée par le public.", pt: 'A obra foi criticada pelo público.' },
    { level: 'B2', fr: "Critiquée à sa naissance, la tour est devenue un symbole.", pt: 'Criticada em seu nascimento, a torre virou um símbolo.' },
    { level: 'C1-C2', fr: "Toute œuvre audacieuse est d'abord critiquée avant d'être admirée.", pt: 'Toda obra audaciosa é primeiro criticada antes de ser admirada.' },
  ],
  'mille-feuilles': [
    { level: 'A1', fr: 'Le mille-feuilles est bon.', pt: 'O mil-folhas é gostoso.' },
    { level: 'A2-B1', fr: 'Elle achète un mille-feuilles à la pâtisserie.', pt: 'Ela compra um mil-folhas na confeitaria.' },
    { level: 'B2', fr: 'Le mille-feuilles demande des heures de préparation.', pt: 'O mil-folhas exige horas de preparação.' },
    { level: 'C1-C2', fr: "Le mille-feuilles, c'est la géométrie qui devient gourmande.", pt: 'O mil-folhas é a geometria que vira gulodice.' },
  ],
  facilement: [
    { level: 'A1', fr: 'Je trouve facilement la gare.', pt: 'Acho a estação facilmente.' },
    { level: 'A2-B1', fr: 'On se déplace facilement en métro.', pt: 'Deslocamo-nos facilmente de metrô.' },
    { level: 'B2', fr: 'Les correspondances permettent de traverser la ville facilement.', pt: 'As baldeações permitem atravessar a cidade facilmente.' },
    { level: 'C1-C2', fr: "Ce qui est bien organisé se fait facilement, presque sans y penser.", pt: 'O que é bem organizado se faz facilmente, quase sem pensar.' },
  ],
  correspondance: [
    { level: 'A1', fr: 'Il y a une correspondance à cette station.', pt: 'Há uma baldeação nesta estação.' },
    { level: 'A2-B1', fr: 'La correspondance est indiquée sur le plan.', pt: 'A baldeação está indicada no mapa.' },
    { level: 'B2', fr: 'Une correspondance rapide évite les longues attentes.', pt: 'Uma baldeação rápida evita longas esperas.' },
    { level: 'C1-C2', fr: 'Dans un réseau bien conçu, chaque correspondance est une promesse de fluidité.', pt: 'Numa rede bem concebida, cada baldeação é uma promessa de fluidez.' },
  ],
  étapes: [
    { level: 'A1', fr: 'Le voyage a trois étapes.', pt: 'A viagem tem três etapas.' },
    { level: 'A2-B1', fr: "On s'arrête à chaque étape.", pt: 'Paramos em cada etapa.' },
    { level: 'B2', fr: 'Les étapes du Tour de France traversent toute la France.', pt: 'As etapas do Tour de France atravessam a França inteira.' },
    { level: 'C1-C2', fr: 'Chaque étape, même la plus rude, rapproche du but final.', pt: 'Cada etapa, mesmo a mais dura, aproxima do objetivo final.' },
  ],
};
