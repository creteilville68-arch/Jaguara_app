/**
 * Dicionário mestre de exemplos para palavras "pontilhadas".
 *
 * As palavras em destaque dourado (vocabularyDictionary de cada aula) já têm os
 * 4 exemplos curados no próprio JSON da aula. As palavras pontilhadas (palavras
 * do banco CEFR que aparecem no texto mas não são destaque dourado) resolviam
 * exemplos pelo gerador e, fora da lista curada, ficavam SEM exemplos.
 *
 * Este arquivo é o lar incremental e 100% offline desses exemplos: ao terminar
 * cada cidade, preenchemos aqui os 4 exemplos progressivos (A1 → A2-B1 → B2 →
 * C1-C2) de cada palavra pontilhada daquela cidade, e o
 * `bun run audit:clickable` confirma que nenhuma palavra destacada ficou sem
 * exemplos.
 *
 * Formato da chave: forma canônica dobrada — minúsculas, acentos PRESERVADOS,
 * apóstrofo tipográfico normalizado para `'`, espaços simples. Acento é mantido
 * para distinguir homógrafos (ex.: "ou" = ou, "où" = onde).
 */
export interface MasterExample {
  level: string;
  fr: string;
  pt: string;
}

export const MASTER_EXAMPLES: Record<string, MasterExample[]> = {
  // ────────────────────────────────────────────────────────────────
  // PALAVRAS FUNCIONAIS E EXPRESSÕES DO COTIDIANO
  // ────────────────────────────────────────────────────────────────
  des: [
    { level: 'A1', fr: "J'achète des croissants chauds.", pt: 'Eu compro uns croissants quentes.' },
    { level: 'A2-B1', fr: 'Il y a des fleurs sur la table de la cuisine.', pt: 'Há flores na mesa da cozinha.' },
    { level: 'B2', fr: 'Elle a rencontré des voisins très accueillants dans son immeuble.', pt: 'Ela conheceu vizinhos muito acolhedores no prédio dela.' },
    { level: 'C1-C2', fr: 'Des efforts constants finissent toujours par porter leurs fruits.', pt: 'Esforços constantes acabam sempre por dar frutos.' },
  ],
  mais: [
    { level: 'A1', fr: 'Il fait froid, mais le ciel est bleu.', pt: 'Está frio, mas o céu está azul.' },
    { level: 'A2-B1', fr: 'Je voulais sortir, mais je suis resté à la maison.', pt: 'Eu queria sair, mas fiquei em casa.' },
    { level: 'B2', fr: 'Le voyage était long, mais la découverte en valait vraiment la peine.', pt: 'A viagem foi longa, mas a descoberta valeu muito a pena.' },
    { level: 'C1-C2', fr: "La mémoire n'est pas parfaite, mais elle donne un sens à nos choix.", pt: 'A memória não é perfeita, mas dá sentido às nossas escolhas.' },
  ],
  'il y a': [
    { level: 'A1', fr: 'Il y a un chat dans le jardin.', pt: 'Há um gato no jardim.' },
    { level: 'A2-B1', fr: 'Il y a beaucoup de monde au marché ce matin.', pt: 'Há muita gente no mercado esta manhã.' },
    { level: 'B2', fr: 'Il y a plusieurs façons de découvrir une ville à pied.', pt: 'Há várias maneiras de descobrir uma cidade a pé.' },
    { level: 'C1-C2', fr: 'Il y a dans ce quartier une harmonie rare entre histoire et modernité.', pt: 'Há neste bairro uma harmonia rara entre história e modernidade.' },
  ],
  sa: [
    { level: 'A1', fr: 'Elle prend sa veste avant de sortir.', pt: 'Ela pega o casaco dela antes de sair.' },
    { level: 'A2-B1', fr: 'Andréa termine son service et range sa tenue de travail.', pt: 'Andréa termina o turno e guarda o uniforme dela.' },
    { level: 'B2', fr: 'Chacun apporte sa propre expérience dans une équipe.', pt: 'Cada um traz a própria experiência para uma equipe.' },
    { level: 'C1-C2', fr: 'Elle a su préserver sa curiosité malgré les années.', pt: 'Ela soube preservar a curiosidade dela apesar dos anos.' },
  ],
  ses: [
    { level: 'A1', fr: 'Il met ses clés dans sa poche.', pt: 'Ele coloca as chaves dele no bolso.' },
    { level: 'A2-B1', fr: 'Irlan range ses affaires avant de partir en livraison.', pt: 'Irlan arruma as coisas dele antes de sair para a entrega.' },
    { level: 'B2', fr: 'Elle garde toujours ses souvenirs de voyage dans une petite boîte.', pt: 'Ela guarda sempre as lembranças de viagem dela numa caixinha.' },
    { level: 'C1-C2', fr: 'Il confie rarement ses doutes, même à ses proches.', pt: 'Ele raramente confia as dúvidas dele, mesmo às pessoas próximas.' },
  ],
  notre: [
    { level: 'A1', fr: 'Notre maison est près de la gare.', pt: 'Nossa casa fica perto da estação.' },
    { level: 'A2-B1', fr: 'Nous avons décoré notre salon pour la fête.', pt: 'Decoramos nossa sala para a festa.' },
    { level: 'B2', fr: 'Notre façon de voyager révèle beaucoup de notre caractère.', pt: 'Nossa maneira de viajar revela muito do nosso caráter.' },
    { level: 'C1-C2', fr: 'Notre rapport au temps a profondément changé avec le numérique.', pt: 'Nossa relação com o tempo mudou profundamente com o digital.' },
  ],
  tout: [
    { level: 'A1', fr: "Tout va bien aujourd'hui.", pt: 'Tudo vai bem hoje.' },
    { level: 'A2-B1', fr: "J'ai rangé tout l'appartement avant l'arrivée de mes amis.", pt: 'Arrumei o apartamento todo antes da chegada dos meus amigos.' },
    { level: 'B2', fr: "Tout le monde était d'accord pour visiter le musée à pied.", pt: 'Todo mundo concordou em visitar o museu a pé.' },
    { level: 'C1-C2', fr: 'Tout semble simple quand on prend le temps de comprendre.', pt: 'Tudo parece simples quando a gente dedica tempo a compreender.' },
  ],
  tous: [
    { level: 'A1', fr: 'Ils viennent tous au restaurant.', pt: 'Eles vêm todos ao restaurante.' },
    { level: 'A2-B1', fr: 'Tous les jours, il passe par la même boulangerie.', pt: 'Todos os dias, ele passa pela mesma padaria.' },
    { level: 'B2', fr: 'Tous les chemins mènent à une nouvelle découverte.', pt: 'Todos os caminhos levam a uma nova descoberta.' },
    { level: 'C1-C2', fr: "Tous les souvenirs ne se valent pas, mais chacun a sa place.", pt: 'Nem todas as lembranças têm o mesmo valor, mas cada uma tem seu lugar.' },
  ],
  plus: [
    { level: 'A1', fr: "Je voudrais plus de café, s'il vous plaît.", pt: 'Eu gostaria de mais café, por favor.' },
    { level: 'A2-B1', fr: "Il fait plus chaud aujourd'hui qu'hier.", pt: 'Está mais quente hoje do que ontem.' },
    { level: 'B2', fr: "Plus on marche, plus on découvre les détails d'une ville.", pt: 'Quanto mais a gente anda, mais descobre os detalhes de uma cidade.' },
    { level: 'C1-C2', fr: 'Plus une décision est difficile, plus elle demande de recul.', pt: 'Quanto mais difícil é uma decisão, mais ela exige distanciamento.' },
  ],
  comme: [
    { level: 'A1', fr: 'Il travaille comme livreur à Paris.', pt: 'Ele trabalha como entregador em Paris.' },
    { level: 'A2-B1', fr: 'Comme il pleut, nous restons à la maison.', pt: 'Como está chovendo, ficamos em casa.' },
    { level: 'B2', fr: "Comme dans les films, la scène s'est figée un instant.", pt: 'Como nos filmes, a cena congelou por um instante.' },
    { level: 'C1-C2', fr: 'Comme souvent, la simplicité cache la plus grande des complexités.', pt: 'Como acontece com frequência, a simplicidade esconde a maior das complexidades.' },
  ],
  bon: [
    { level: 'A1', fr: 'Ce croissant est très bon.', pt: 'Este croissant é muito bom.' },
    { level: 'A2-B1', fr: 'Nous avons passé un bon moment au bord de la Seine.', pt: 'Passamos um bom momento à beira do Sena.' },
    { level: 'B2', fr: 'Un bon plan de la ville évite bien des détours.', pt: 'Um bom mapa da cidade evita muitos desvios.' },
    { level: 'C1-C2', fr: 'Faire preuve de bon sens reste la meilleure des boussoles.', pt: 'Ter bom senso continua sendo a melhor das bússolas.' },
  ],
  bien: [
    { level: 'A1', fr: 'Tout se passe très bien.', pt: 'Tudo corre muito bem.' },
    { level: 'A2-B1', fr: 'Je connais bien ce quartier, je peux vous guider.', pt: 'Conheço bem este bairro, posso te guiar.' },
    { level: 'B2', fr: "Bien préparer un voyage, c'est déjà commencer à le vivre.", pt: 'Preparar bem uma viagem já é começar a vivê-la.' },
    { level: 'C1-C2', fr: 'Bien que le chemin soit long, la persévérance finit par payer.', pt: 'Embora o caminho seja longo, a perseverança acaba compensando.' },
  ],
  sous: [
    { level: 'A1', fr: 'Le chat dort sous la table.', pt: 'O gato dorme embaixo da mesa.' },
    { level: 'A2-B1', fr: 'Nous nous abritons sous un arbre pendant la pluie.', pt: 'Nos abrigamos debaixo de uma árvore durante a chuva.' },
    { level: 'B2', fr: 'Sous la ville, des tunnels racontent une autre histoire.', pt: 'Debaixo da cidade, túneis contam outra história.' },
    { level: 'C1-C2', fr: 'Sous des apparences calmes, ce quartier ne dort jamais vraiment.', pt: 'Sob uma aparência calma, este bairro nunca dorme de verdade.' },
  ],
  que: [
    { level: 'A1', fr: "Je pense que c'est une bonne idée.", pt: 'Eu acho que é uma boa ideia.' },
    { level: 'A2-B1', fr: "Le livre que tu m'as prêté est passionnant.", pt: 'O livro que você me emprestou é apaixonante.' },
    { level: 'B2', fr: 'Il faut que nous partions avant la fermeture des portes.', pt: 'É preciso que a gente saia antes do fechamento das portas.' },
    { level: 'C1-C2', fr: "Ce que l'on retient d'un voyage, ce sont rarement les monuments.", pt: 'O que a gente guarda de uma viagem raramente são os monumentos.' },
  ],
  ou: [
    { level: 'A1', fr: 'Tu veux du thé ou du café ?', pt: 'Você quer chá ou café?' },
    { level: 'A2-B1', fr: 'On peut y aller à pied ou prendre le métro.', pt: 'A gente pode ir a pé ou pegar o metrô.' },
    { level: 'B2', fr: 'Il fallait choisir : rester prudent ou tenter sa chance.', pt: 'Era preciso escolher: permanecer prudente ou arriscar a sorte.' },
    { level: 'C1-C2', fr: "Qu'il pleuve ou qu'il vente, la ville garde son charme.", pt: 'Quer chova, quer venta, a cidade mantém o charme.' },
  ],
  'où': [
    { level: 'A1', fr: "Où est la gare, s'il vous plaît ?", pt: 'Onde fica a estação, por favor?' },
    { level: 'A2-B1', fr: "C'est le café où nous nous retrouvons le samedi.", pt: 'É o café onde a gente se encontra aos sábados.' },
    { level: 'B2', fr: "Le quartier où j'ai grandi a beaucoup changé.", pt: 'O bairro onde cresci mudou muito.' },
    { level: 'C1-C2', fr: "Il faut savoir d'où l'on vient pour choisir où aller.", pt: 'É preciso saber de onde se vem para escolher para onde ir.' },
  ],
  comment: [
    { level: 'A1', fr: 'Comment tu t\'appelles ?', pt: 'Como você se chama?' },
    { level: 'A2-B1', fr: 'Pouvez-vous me dire comment aller au Louvre ?', pt: 'Pode me dizer como ir ao Louvre?' },
    { level: 'B2', fr: "Comment expliquer l'attachement que l'on ressent pour un lieu ?", pt: 'Como explicar o apego que se sente por um lugar?' },
    { level: 'C1-C2', fr: 'Comment préserver ce qui nous est cher sans craindre le changement ?', pt: 'Como preservar o que nos é caro sem temer a mudança?' },
  ],
  'peut-être': [
    { level: 'A1', fr: "Peut-être qu'il va venir demain.", pt: 'Talvez ele venha amanhã.' },
    { level: 'A2-B1', fr: 'Nous irons peut-être au marché ce week-end.', pt: 'Talvez a gente vá ao mercado neste fim de semana.' },
    { level: 'B2', fr: 'Peut-être faut-il accepter de se perdre pour mieux se retrouver.', pt: 'Talvez seja preciso aceitar se perder para se reencontrar melhor.' },
    { level: 'C1-C2', fr: 'Peut-être que la plus grande aventure commence au coin de la rue.', pt: 'Talvez a maior aventura comece na esquina da rua.' },
  ],
  "d'abord": [
    { level: 'A1', fr: "D'abord, je prends un café.", pt: 'Primeiro, eu tomo um café.' },
    { level: 'A2-B1', fr: "D'abord, nous achetons les billets, ensuite nous visitons le musée.", pt: 'Primeiro compramos os bilhetes, depois visitamos o museu.' },
    { level: 'B2', fr: "D'abord hésitant, il a fini par se lancer avec confiance.", pt: 'A princípio hesitante, ele acabou se lançando com confiança.' },
    { level: 'C1-C2', fr: "D'abord, il convient de comprendre avant de juger.", pt: 'Antes de tudo, convém compreender antes de julgar.' },
  ],
  ensuite: [
    { level: 'A1', fr: 'Je mange, ensuite je me repose.', pt: 'Eu como e depois descanso.' },
    { level: 'A2-B1', fr: 'Nous visitons la cathédrale, ensuite nous longeons le fleuve.', pt: 'Visitamos a catedral e depois caminhamos à beira do rio.' },
    { level: 'B2', fr: "Elle a d'abord hésité, ensuite elle a pris la parole avec assurance.", pt: 'Ela primeiro hesitou, depois tomou a palavra com segurança.' },
    { level: 'C1-C2', fr: "Il faut d'abord écouter, ensuite seulement répondre.", pt: 'É preciso primeiro escutar, e só depois responder.' },
  ],
  'déjà': [
    { level: 'A1', fr: 'Il est déjà huit heures.', pt: 'Já são oito horas.' },
    { level: 'A2-B1', fr: "J'ai déjà visité ce musée avec ma famille.", pt: 'Já visitei este museu com minha família.' },
    { level: 'B2', fr: 'Cette histoire nous paraît déjà familière.', pt: 'Esta história já nos parece familiar.' },
    { level: 'C1-C2', fr: 'Le progrès, déjà perceptible, laisse pourtant entrevoir d\'autres défis.', pt: 'O progresso, já perceptível, deixa entrever outros desafios.' },
  ],
  'beaucoup de': [
    { level: 'A1', fr: 'Il y a beaucoup de livres chez moi.', pt: 'Há muitos livros na minha casa.' },
    { level: 'A2-B1', fr: 'Elle a beaucoup de patience avec les clients.', pt: 'Ela tem muita paciência com os clientes.' },
    { level: 'B2', fr: 'Beaucoup de voyageurs préfèrent le train pour admirer le paysage.', pt: 'Muitos viajantes preferem o trem para admirar a paisagem.' },
    { level: 'C1-C2', fr: "Beaucoup de souvenirs s'attachent aux lieux que l'on a aimés.", pt: 'Muitas lembranças se ligam aos lugares que amamos.' },
  ],
  'peu de': [
    { level: 'A1', fr: 'Il reste peu de pain.', pt: 'Sobra pouco pão.' },
    { level: 'A2-B1', fr: 'Nous avons peu de temps avant la fermeture.', pt: 'Temos pouco tempo antes do fechamento.' },
    { level: 'B2', fr: 'Peu de gens connaissent ce passage secret du quartier.', pt: 'Poucas pessoas conhecem esta passagem secreta do bairro.' },
    { level: 'C1-C2', fr: 'Peu de certitudes résistent à un examen attentif.', pt: 'Poucas certezas resistem a um exame atento.' },
  ],
  peu: [
    { level: 'A1', fr: 'Je parle un peu français.', pt: 'Eu falo um pouco de francês.' },
    { level: 'A2-B1', fr: 'Attendez un peu, je finis de ranger.', pt: 'Espere um pouco, estou terminando de arrumar.' },
    { level: 'B2', fr: "Il s'est reposé un peu avant de reprendre la route.", pt: 'Ele descansou um pouco antes de retomar a estrada.' },
    { level: 'C1-C2', fr: 'Un peu de recul permet souvent de mieux choisir.', pt: 'Um pouco de distanciamento permite muitas vezes escolher melhor.' },
  ],
  'près de': [
    { level: 'A1', fr: 'La boulangerie est près de chez moi.', pt: 'A padaria fica perto da minha casa.' },
    { level: 'A2-B1', fr: "Nous habitons près de la gare, c'est très pratique.", pt: 'Moramos perto da estação, é muito prático.' },
    { level: 'B2', fr: 'Près de la cathédrale, des ruelles calmes invitent à la promenade.', pt: 'Perto da catedral, ruelas calmas convidam ao passeio.' },
    { level: 'C1-C2', fr: "Près de l'essentiel se cache souvent l'inattendu.", pt: 'Perto do essencial esconde-se muitas vezes o inesperado.' },
  ],
  'à côté de': [
    { level: 'A1', fr: 'Le café est à côté de la pharmacie.', pt: 'O café fica ao lado da farmácia.' },
    { level: 'A2-B1', fr: "Il s'assoit à côté de moi dans le bus.", pt: 'Ele senta ao meu lado no ônibus.' },
    { level: 'B2', fr: 'À côté de la gare, un petit marché anime la place chaque dimanche.', pt: 'Ao lado da estação, uma feirinha anima a praça todo domingo.' },
    { level: 'C1-C2', fr: 'À côté de ses qualités évidentes, il garde une modestie touchante.', pt: 'Ao lado de suas qualidades evidentes, ele mantém uma modéstia comovente.' },
  ],
  'tout de suite': [
    { level: 'A1', fr: "J'arrive tout de suite !", pt: 'Já estou chegando!' },
    { level: 'A2-B1', fr: 'Appelle-moi tout de suite après ton rendez-vous.', pt: 'Me ligue logo depois do seu compromisso.' },
    { level: 'B2', fr: 'Il a compris tout de suite que la carte était inhabituelle.', pt: 'Ele entendeu na hora que o mapa era incomum.' },
    { level: 'C1-C2', fr: 'Certaines décisions ne se prennent pas tout de suite : elles demandent du recul.', pt: 'Certas decisões não se tomam de imediato: elas exigem distanciamento.' },
  ],
  'quelque chose': [
    { level: 'A1', fr: 'Je veux manger quelque chose.', pt: 'Quero comer alguma coisa.' },
    { level: 'A2-B1', fr: "Il y a quelque chose d'étrange dans ce message.", pt: 'Há algo de estranho nesta mensagem.' },
    { level: 'B2', fr: 'Quelque chose dans son regard disait qu\'il avait reconnu le symbole.', pt: 'Algo no olhar dele dizia que ele reconhecera o símbolo.' },
    { level: 'C1-C2', fr: "Apprendre, c'est toujours découvrir quelque chose de soi.", pt: 'Aprender é sempre descobrir algo de si.' },
  ],
  "quelqu'un": [
    { level: 'A1', fr: "Quelqu'un frappe à la porte.", pt: 'Alguém bate à porta.' },
    { level: 'A2-B1', fr: "Je cherche quelqu'un qui connaît bien le quartier.", pt: 'Procuro alguém que conheça bem o bairro.' },
    { level: 'B2', fr: 'Quelqu\'un avait laissé un vieux livre sur le banc.', pt: 'Alguém tinha deixado um livro velho no banco.' },
    { level: 'C1-C2', fr: "Il suffit parfois de quelqu'un qui croit en vous pour tout changer.", pt: 'Às vezes basta alguém que acredite em você para mudar tudo.' },
  ],
  aux: [
    { level: 'A1', fr: 'Je parle aux voisins.', pt: 'Eu falo com os vizinhos.' },
    { level: 'A2-B1', fr: "Le musée est ouvert aux visiteurs jusqu'à dix-huit heures.", pt: 'O museu fica aberto aos visitantes até as dezoito horas.' },
    { level: 'B2', fr: 'Aux premières lueurs du jour, la ville se réveille doucement.', pt: 'Aos primeiros raios do dia, a cidade desperta devagar.' },
    { level: 'C1-C2', fr: 'Aux difficultés répondent souvent des solutions inattendues.', pt: 'Às dificuldades respondem muitas vezes soluções inesperadas.' },
  ],
  mal: [
    { level: 'A1', fr: "J'ai mal à la tête.", pt: 'Estou com dor de cabeça.' },
    { level: 'A2-B1', fr: 'Il a mal dormi à cause du bruit de la rue.', pt: 'Ele dormiu mal por causa do barulho da rua.' },
    { level: 'B2', fr: "Ce n'est pas mal du tout, ce petit restaurant du quartier.", pt: 'Não é nada mau, este pequeno restaurante do bairro.' },
    { level: 'C1-C2', fr: "Le mal du pays s'apaise quand on retrouve des gestes familiers.", pt: 'A saudade de casa se acalma quando a gente reencontra gestos familiares.' },
  ],
  va: [
    { level: 'A1', fr: 'Comment ça va ?', pt: 'Como vai?' },
    { level: 'A2-B1', fr: 'Ce manteau te va très bien.', pt: 'Este casaco fica muito bem em você.' },
    { level: 'B2', fr: 'Il va falloir se dépêcher si nous voulons attraper le train.', pt: 'Vai ser preciso se apressar se quisermos pegar o trem.' },
    { level: 'C1-C2', fr: "Tout va pour le mieux quand on avance à son rythme.", pt: 'Tudo vai da melhor forma quando a gente avança no próprio ritmo.' },
  ],
  près: [
    { level: 'A1', fr: 'La boulangerie est tout près.', pt: 'A padaria fica bem perto.' },
    { level: 'A2-B1', fr: 'Nous sommes déjà tout près de la maison.', pt: 'Já estamos bem perto de casa.' },
    { level: 'B2', fr: 'Il se tenait près de la fenêtre, sans rien dire.', pt: 'Ele estava perto da janela, sem dizer nada.' },
    { level: 'C1-C2', fr: "C'est en regardant de près qu'on aperçoit les vrais détails.", pt: 'É olhando de perto que se percebem os verdadeiros detalhes.' },
  ],

  // ────────────────────────────────────────────────────────────────
  // VIDA COTIDIANA, CASA E OBJETOS
  // ────────────────────────────────────────────────────────────────
  appartement: [
    { level: 'A1', fr: 'Mon appartement est au troisième étage.', pt: 'Meu apartamento fica no terceiro andar.' },
    { level: 'A2-B1', fr: 'Nous cherchons un appartement avec deux chambres.', pt: 'Procuramos um apartamento com dois quartos.' },
    { level: 'B2', fr: "L'appartement donne sur une cour calme et lumineuse.", pt: 'O apartamento dá para um pátio calmo e iluminado.' },
    { level: 'C1-C2', fr: "Vivre en appartement apprend à respecter l'espace des autres.", pt: 'Morar em apartamento ensina a respeitar o espaço dos outros.' },
  ],
  assiette: [
    { level: 'A1', fr: "L'assiette est sur la table.", pt: 'O prato está sobre a mesa.' },
    { level: 'A2-B1', fr: 'Elle pose une assiette de soupe devant chaque client.', pt: 'Ela coloca um prato de sopa diante de cada cliente.' },
    { level: 'B2', fr: "Une assiette bien dressée met en appétit avant même la première bouchée.", pt: 'Um prato bem montado abre o apetite antes mesmo da primeira garfada.' },
    { level: 'C1-C2', fr: "Le chef compose l'assiette comme on compose un tableau.", pt: 'O chef compõe o prato como se compõe um quadro.' },
  ],
  carafe: [
    { level: 'A1', fr: "Une carafe d'eau, s'il vous plaît.", pt: 'Uma jarra de água, por favor.' },
    { level: 'A2-B1', fr: 'Il remplit la carafe avant le repas.', pt: 'Ele enche a jarra antes da refeição.' },
    { level: 'B2', fr: 'La carafe en verre se couvre de buée par temps chaud.', pt: 'A jarra de vidro fica embaçada no calor.' },
    { level: 'C1-C2', fr: "Sur la table, la carafe d'eau fraîche remplace avantageusement les boissons sucrées.", pt: 'Sobre a mesa, a jarra de água fresca substitui com vantagem as bebidas açucaradas.' },
  ],
  cuillère: [
    { level: 'A1', fr: 'Je mange la soupe avec une cuillère.', pt: 'Eu como a sopa com uma colher.' },
    { level: 'A2-B1', fr: 'Ajoute une cuillère de miel dans ton thé.', pt: 'Adicione uma colher de mel no seu chá.' },
    { level: 'B2', fr: 'Il tourne lentement sa cuillère dans la tasse, perdu dans ses pensées.', pt: 'Ele gira lentamente a colher na xícara, perdido nos pensamentos.' },
    { level: 'C1-C2', fr: 'Une cuillère en argent bien entretenue traverse les générations.', pt: 'Uma colher de prata bem conservada atravessa gerações.' },
  ],
  serviette: [
    { level: 'A1', fr: 'La serviette est à côté de l\'assiette.', pt: 'O guardanapo está ao lado do prato.' },
    { level: 'A2-B1', fr: 'Elle plie les serviettes avant le service du soir.', pt: 'Ela dobra os guardanapos antes do jantar.' },
    { level: 'B2', fr: 'Il pose sa serviette sur ses genoux avant de commencer à manger.', pt: 'Ele coloca o guardanapo no colo antes de começar a comer.' },
    { level: 'C1-C2', fr: "Savoir plier une serviette élégamment relève de l'art de recevoir.", pt: 'Saber dobrar um guardanapo com elegância faz parte da arte de receber.' },
  ],
  salle: [
    { level: 'A1', fr: 'La salle est grande et claire.', pt: 'A sala é grande e clara.' },
    { level: 'A2-B1', fr: 'Ils ont réservé une salle pour la réunion.', pt: 'Eles reservaram uma sala para a reunião.' },
    { level: 'B2', fr: 'La salle de classe s\'est remplie en quelques minutes.', pt: 'A sala de aula encheu em poucos minutos.' },
    { level: 'C1-C2', fr: 'Une salle bien agencée favorise la concentration et l\'échange.', pt: 'Uma sala bem organizada favorece a concentração e a troca.' },
  ],
  immeuble: [
    { level: 'A1', fr: "L'immeuble a six étages.", pt: 'O prédio tem seis andares.' },
    { level: 'A2-B1', fr: "Les voisins de l'immeuble sont très aimables.", pt: 'Os vizinhos do prédio são muito simpáticos.' },
    { level: 'B2', fr: "L'immeuble haussmannien a conservé sa façade d'origine.", pt: 'O prédio haussmanniano conservou a fachada original.' },
    { level: 'C1-C2', fr: "Un immeuble raconte, à travers ses pierres, l'histoire d'un quartier.", pt: 'Um prédio conta, através das suas pedras, a história de um bairro.' },
  ],
  escalier: [
    { level: 'A1', fr: "L'escalier est à gauche.", pt: 'A escada fica à esquerda.' },
    { level: 'A2-B1', fr: 'Je monte l\'escalier jusqu\'au deuxième étage.', pt: 'Subo a escada até o segundo andar.' },
    { level: 'B2', fr: "L'escalier en colimaçon grimpe jusqu'au clocher.", pt: 'A escada em caracol sobe até o campanário.' },
    { level: 'C1-C2', fr: "Chaque marche de l'escalier craquait sous le poids des années.", pt: 'Cada degrau da escada rangia sob o peso dos anos.' },
  ],
  pied: [
    { level: 'A1', fr: "J'ai mal au pied.", pt: 'Estou com dor no pé.' },
    { level: 'A2-B1', fr: 'Nous allons au marché à pied.', pt: 'Vamos ao mercado a pé.' },
    { level: 'B2', fr: 'Au pied de la tour, les touristes prenaient des photos.', pt: 'Ao pé da torre, os turistas tiravam fotos.' },
    { level: 'C1-C2', fr: 'Il a gravi la colline à pied, sans jamais perdre de vue le sommet.', pt: 'Ele subiu a colina a pé, sem nunca perder o cume de vista.' },
  ],
  clé: [
    { level: 'A1', fr: 'Où est la clé de la maison ?', pt: 'Onde está a chave de casa?' },
    { level: 'A2-B1', fr: 'Je range toujours mes clés au même endroit.', pt: 'Eu guardo sempre as minhas chaves no mesmo lugar.' },
    { level: 'B2', fr: 'La clé du mystère se trouvait dans une phrase du vieux livre.', pt: 'A chave do mistério estava numa frase do livro velho.' },
    { level: 'C1-C2', fr: 'La confiance est la clé de toute relation durable.', pt: 'A confiança é a chave de qualquer relação duradoura.' },
  ],
  tête: [
    { level: 'A1', fr: "J'ai mal à la tête.", pt: 'Estou com dor de cabeça.' },
    { level: 'A2-B1', fr: 'Il hoche la tête pour dire oui.', pt: 'Ele balança a cabeça para dizer sim.' },
    { level: 'B2', fr: 'Elle garde la tête froide dans les moments difficiles.', pt: 'Ela mantém a cabeça fria nos momentos difíceis.' },
    { level: 'C1-C2', fr: 'Garder la tête sur les épaules évite bien des erreurs.', pt: 'Manter a cabeça no lugar evita muitos erros.' },
  ],
  cœur: [
    { level: 'A1', fr: 'Mon cœur bat vite.', pt: 'Meu coração bate rápido.' },
    { level: 'A2-B1', fr: 'Ce quartier est le cœur de la ville.', pt: 'Este bairro é o coração da cidade.' },
    { level: 'B2', fr: 'Elle a appris la nouvelle le cœur léger.', pt: 'Ela recebeu a notícia com o coração leve.' },
    { level: 'C1-C2', fr: "Le cœur a ses raisons que la raison ne connaît pas.", pt: 'O coração tem razões que a própria razão desconhece.' },
  ],
  vieux: [
    { level: 'A1', fr: 'Mon voisin est très vieux.', pt: 'Meu vizinho é muito velho.' },
    { level: 'A2-B1', fr: 'Ils habitent une vieille maison au centre du village.', pt: 'Eles moram numa casa velha no centro do vilarejo.' },
    { level: 'B2', fr: 'Un vieux livre peut renfermer un secret inattendu.', pt: 'Um livro velho pode guardar um segredo inesperado.' },
    { level: 'C1-C2', fr: 'Les vieux quartiers conservent la mémoire d\'une époque révolue.', pt: 'Os bairros antigos conservam a memória de uma época passada.' },
  ],
  propre: [
    { level: 'A1', fr: 'Ma chambre est propre.', pt: 'Meu quarto está limpo.' },
    { level: 'A2-B1', fr: 'Il garde toujours sa cuisine propre.', pt: 'Ele mantém sempre a cozinha limpa.' },
    { level: 'B2', fr: 'Chacun est libre de faire ses propres choix.', pt: 'Cada um é livre para fazer as próprias escolhas.' },
    { level: 'C1-C2', fr: 'Un espace propre favorise un esprit clair.', pt: 'Um espaço limpo favorece uma mente clara.' },
  ],
  fatigué: [
    { level: 'A1', fr: 'Je suis fatigué après le travail.', pt: 'Estou cansado depois do trabalho.' },
    { level: 'A2-B1', fr: 'Elle est rentrée fatiguée mais contente de sa journée.', pt: 'Ela voltou cansada, mas contente com o dia.' },
    { level: 'B2', fr: 'Un long voyage fatigue plus que les kilomètres parcourus.', pt: 'Uma longa viagem cansa mais do que os quilômetros percorridos.' },
    { level: 'C1-C2', fr: 'La fatigue accumulée finit par peser sur les décisions.', pt: 'O cansaço acumulado acaba pesando sobre as decisões.' },
  ],
  fraîche: [
    { level: 'A1', fr: "L'eau est fraîche.", pt: 'A água está fresca.' },
    { level: 'A2-B1', fr: 'Il fait frais ce matin, prends une veste.', pt: 'Está fresco esta manhã, leve um casaco.' },
    { level: 'B2', fr: 'Une brise fraîche venait de la mer.', pt: 'Uma brisa fresca vinha do mar.' },
    { level: 'C1-C2', fr: 'Elle a gardé des idées fraîches malgré des années d\'expérience.', pt: 'Ela manteve ideias novas apesar dos anos de experiência.' },
  ],
  chaud: [
    { level: 'A1', fr: 'Le café est chaud.', pt: 'O café está quente.' },
    { level: 'A2-B1', fr: "Il fait chaud aujourd'hui, restons à l'ombre.", pt: 'Está quente hoje, vamos ficar na sombra.' },
    { level: 'B2', fr: 'Les croissants encore chauds embaumaient toute la boulangerie.', pt: 'Os croissants ainda quentes perfumavam toda a padaria.' },
    { level: 'C1-C2', fr: 'Un accueil chaleureux vaut mieux qu\'un long discours.', pt: 'Uma acolhida calorosa vale mais do que um longo discurso.' },
  ],
  long: [
    { level: 'A1', fr: 'La rue est très longue.', pt: 'A rua é muito comprida.' },
    { level: 'A2-B1', fr: 'Le trajet est long, mais le paysage est beau.', pt: 'O trajeto é longo, mas a paisagem é bonita.' },
    { level: 'B2', fr: 'Elle a rédigé une longue lettre pour expliquer sa décision.', pt: 'Ela escreveu uma longa carta para explicar a decisão.' },
    { level: 'C1-C2', fr: 'À long terme, la patience se révèle plus rentable que la précipitation.', pt: 'A longo prazo, a paciência se revela mais rentável do que a pressa.' },
  ],
  longue: [
    { level: 'A1', fr: 'La jupe est longue.', pt: 'A saia é comprida.' },
    { level: 'A2-B1', fr: 'Elle porte une longue écharpe en hiver.', pt: 'Ela usa um cachecol comprido no inverno.' },
    { level: 'B2', fr: 'Une longue promenade au bord du fleuve apaise les idées.', pt: 'Uma longa caminhada à beira do rio acalma as ideias.' },
    { level: 'C1-C2', fr: 'Une longue amitié résiste mieux aux années qu\'aux silences.', pt: 'Uma longa amizade resiste melhor aos anos do que aos silêncios.' },
  ],
  fin: [
    { level: 'A1', fr: 'La fin du film est triste.', pt: 'O fim do filme é triste.' },
    { level: 'A2-B1', fr: 'Nous arrivons à la fin de la leçon.', pt: 'Estamos chegando ao fim da lição.' },
    { level: 'B2', fr: 'À la fin de l\'histoire, tout prend enfin son sens.', pt: 'No fim da história, tudo finalmente faz sentido.' },
    { level: 'C1-C2', fr: 'La fin n\'est souvent que le début d\'autre chose.', pt: 'O fim muitas vezes é apenas o começo de outra coisa.' },
  ],
  annonce: [
    { level: 'A1', fr: 'Il y a une annonce importante.', pt: 'Há um anúncio importante.' },
    { level: 'A2-B1', fr: 'Elle a annoncé son départ à toute l\'équipe.', pt: 'Ela anunciou a saída dela para toda a equipe.' },
    { level: 'B2', fr: "L'annonce de la nouvelle a surpris tout le quartier.", pt: 'O anúncio da notícia surpreendeu todo o bairro.' },
    { level: 'C1-C2', fr: 'Une annonce faite avec tact peut changer le cours d\'une réunion.', pt: 'Um anúncio feito com tato pode mudar o rumo de uma reunião.' },
  ],
  message: [
    { level: 'A1', fr: 'J\'envoie un message à ma mère.', pt: 'Mando uma mensagem para minha mãe.' },
    { level: 'A2-B1', fr: 'Il a laissé un message sur le répondeur.', pt: 'Ele deixou uma mensagem na secretária eletrônica.' },
    { level: 'B2', fr: 'Le message était clair, mais la signature restait mystérieuse.', pt: 'A mensagem era clara, mas a assinatura continuava misteriosa.' },
    { level: 'C1-C2', fr: 'Un message bien tourné transmet plus que des mots.', pt: 'Uma mensagem bem formulada transmite mais do que palavras.' },
  ],
  direction: [
    { level: 'A1', fr: 'La gare est dans cette direction.', pt: 'A estação fica nesta direção.' },
    { level: 'A2-B1', fr: 'Pouvez-vous m\'indiquer la direction du centre-ville ?', pt: 'Pode me indicar a direção do centro?' },
    { level: 'B2', fr: 'Ils ont pris la mauvaise direction au carrefour.', pt: 'Eles pegaram a direção errada no cruzamento.' },
    { level: 'C1-C2', fr: 'Choisir une direction, c\'est déjà renoncer à toutes les autres.', pt: 'Escolher uma direção já é renunciar a todas as outras.' },
  ],
  ligne: [
    { level: 'A1', fr: 'Je dessine une ligne droite.', pt: 'Eu desenho uma linha reta.' },
    { level: 'A2-B1', fr: 'La ligne de métro numéro sept est très fréquentée.', pt: 'A linha de metrô número sete é muito movimentada.' },
    { level: 'B2', fr: 'Il suit la ligne d\'horizon des yeux.', pt: 'Ele acompanha a linha do horizonte com os olhos.' },
    { level: 'C1-C2', fr: 'Entre les lignes de la lettre se cachait un aveu.', pt: 'Nas entrelinhas da carta escondia-se uma confissão.' },
  ],
  place: [
    { level: 'A1', fr: 'Il y a une belle place au centre.', pt: 'Há uma bela praça no centro.' },
    { level: 'A2-B1', fr: 'Je garde une place pour toi dans le train.', pt: 'Guardo um lugar para você no trem.' },
    { level: 'B2', fr: 'Cette place a changé de visage au fil des siècles.', pt: 'Esta praça mudou de aparência ao longo dos séculos.' },
    { level: 'C1-C2', fr: 'Trouver sa place dans une grande ville prend du temps.', pt: 'Encontrar o seu lugar numa cidade grande leva tempo.' },
  ],
  point: [
    { level: 'A1', fr: 'Mets un point à la fin de la phrase.', pt: 'Coloque um ponto no fim da frase.' },
    { level: 'A2-B1', fr: 'Le point de rendez-vous est devant la fontaine.', pt: 'O ponto de encontro é diante do chafariz.' },
    { level: 'B2', fr: 'Ils ont fait le point sur la situation avant de décider.', pt: 'Eles fizeram um balanço da situação antes de decidir.' },
    { level: 'C1-C2', fr: 'À ce point de l\'histoire, tout bascule.', pt: 'Neste ponto da história, tudo muda.' },
  ],
  champ: [
    { level: 'A1', fr: 'Les vaches sont dans le champ.', pt: 'As vacas estão no campo.' },
    { level: 'A2-B1', fr: 'En été, les champs de blé deviennent dorés.', pt: 'No verão, os campos de trigo ficam dourados.' },
    { level: 'B2', fr: 'Le champ de la recherche offre des possibilités infinies.', pt: 'O campo da pesquisa oferece possibilidades infinitas.' },
    { level: 'C1-C2', fr: 'Il laisse toujours un champ libre à l\'imagination.', pt: 'Ele deixa sempre um espaço livre para a imaginação.' },
  ],
  paysage: [
    { level: 'A1', fr: 'Le paysage est magnifique.', pt: 'A paisagem é magnífica.' },
    { level: 'A2-B1', fr: 'Depuis le train, on admire le paysage.', pt: 'Do trem, a gente admira a paisagem.' },
    { level: 'B2', fr: 'Le paysage change à mesure que le train avance vers le sud.', pt: 'A paisagem muda à medida que o trem avança para o sul.' },
    { level: 'C1-C2', fr: 'Le paysage porte la trace de ceux qui l\'ont façonné.', pt: 'A paisagem carrega a marca de quem a moldou.' },
  ],
  pays: [
    { level: 'A1', fr: 'La France est un beau pays.', pt: 'A França é um país bonito.' },
    { level: 'A2-B1', fr: 'Il voyage dans plusieurs pays chaque année.', pt: 'Ele viaja por vários países todo ano.' },
    { level: 'B2', fr: 'Chaque pays a sa façon de recevoir les étrangers.', pt: 'Cada país tem a sua maneira de receber os estrangeiros.' },
    { level: 'C1-C2', fr: 'Quitter son pays, c\'est emporter une part de soi ailleurs.', pt: 'Deixar o próprio país é levar uma parte de si para outro lugar.' },
  ],
  nation: [
    { level: 'A1', fr: 'Le drapeau représente la nation.', pt: 'A bandeira representa a nação.' },
    { level: 'A2-B1', fr: 'Plusieurs nations participent au festival.', pt: 'Várias nações participam do festival.' },
    { level: 'B2', fr: 'Une nation se reconnaît aussi à sa mémoire collective.', pt: 'Uma nação também se reconhece pela memória coletiva.' },
    { level: 'C1-C2', fr: 'L\'idée de nation dépasse les frontières tracées sur les cartes.', pt: 'A ideia de nação ultrapassa as fronteiras traçadas nos mapas.' },
  ],
  france: [
    { level: 'A1', fr: 'Je vis en France.', pt: 'Eu moro na França.' },
    { level: 'A2-B1', fr: 'Il rêve de découvrir toute la France en train.', pt: 'Ele sonha em descobrir toda a França de trem.' },
    { level: 'B2', fr: 'La France est parcourue de paysages très variés.', pt: 'A França é percorrida por paisagens muito variadas.' },
    { level: 'C1-C2', fr: 'La France se raconte à travers ses régions autant qu\'à travers ses villes.', pt: 'A França se conta através das suas regiões tanto quanto das suas cidades.' },
  ],
  français: [
    { level: 'A1', fr: 'Je parle français.', pt: 'Eu falo francês.' },
    { level: 'A2-B1', fr: 'Il est français et elle est brésilienne.', pt: 'Ele é francês e ela é brasileira.' },
    { level: 'B2', fr: 'Le français s\'apprend mieux en vivant dans le pays.', pt: 'O francês se aprende melhor vivendo no país.' },
    { level: 'C1-C2', fr: 'Le français du quotidien diffère beaucoup de celui des livres.', pt: 'O francês do dia a dia difere muito do francês dos livros.' },
  ],
  histoire: [
    { level: 'A1', fr: 'Je lis une histoire à mon fils.', pt: 'Eu leio uma história para o meu filho.' },
    { level: 'A2-B1', fr: 'Cette ville a une longue histoire.', pt: 'Esta cidade tem uma longa história.' },
    { level: 'B2', fr: 'Chaque pierre de la cathédrale raconte une histoire.', pt: 'Cada pedra da catedral conta uma história.' },
    { level: 'C1-C2', fr: 'L\'histoire se transmet de génération en génération.', pt: 'A história se transmite de geração em geração.' },
  ],
  chapitre: [
    { level: 'A1', fr: 'Je lis le premier chapitre.', pt: 'Eu leio o primeiro capítulo.' },
    { level: 'A2-B1', fr: 'Le chapitre suivant explique la suite de l\'aventure.', pt: 'O capítulo seguinte explica a continuação da aventura.' },
    { level: 'B2', fr: 'Ce chapitre marque un tournant dans le récit.', pt: 'Este capítulo marca uma virada na narrativa.' },
    { level: 'C1-C2', fr: 'Chaque chapitre de la vie laisse une leçon à méditer.', pt: 'Cada capítulo da vida deixa uma lição a meditar.' },
  ],
  livre: [
    { level: 'A1', fr: 'Ce livre est intéressant.', pt: 'Este livro é interessante.' },
    { level: 'A2-B1', fr: 'J\'emprunte un livre à la bibliothèque.', pt: 'Pego um livro emprestado na biblioteca.' },
    { level: 'B2', fr: 'Un livre bien écrit vous accompagne longtemps après sa lecture.', pt: 'Um livro bem escrito acompanha a gente por muito tempo depois da leitura.' },
    { level: 'C1-C2', fr: 'Un livre peut ouvrir des mondes que l\'on ne soupçonnait pas.', pt: 'Um livro pode abrir mundos que a gente nem suspeitava.' },
  ],
  mot: [
    { level: 'A1', fr: 'Je ne comprends pas ce mot.', pt: 'Eu não entendo esta palavra.' },
    { level: 'A2-B1', fr: 'Il cherche le mot juste pour décrire son émotion.', pt: 'Ele procura a palavra certa para descrever a emoção.' },
    { level: 'B2', fr: 'Un seul mot peut changer le sens de toute une phrase.', pt: 'Uma única palavra pode mudar o sentido de uma frase inteira.' },
    { level: 'C1-C2', fr: 'Le choix des mots révèle souvent plus que les idées.', pt: 'A escolha das palavras revela muitas vezes mais do que as ideias.' },
  ],
  mémoire: [
    { level: 'A1', fr: 'J\'ai une bonne mémoire.', pt: 'Tenho boa memória.' },
    { level: 'A2-B1', fr: 'Ce lieu réveille des souvenirs d\'enfance.', pt: 'Este lugar desperta lembranças de infância.' },
    { level: 'B2', fr: 'La mémoire d\'une ville vit dans ses monuments et ses habitants.', pt: 'A memória de uma cidade vive nos seus monumentos e nos seus habitantes.' },
    { level: 'C1-C2', fr: 'La mémoire collective se construit autant par les récits que par les silences.', pt: 'A memória coletiva se constrói tanto pelos relatos quanto pelos silêncios.' },
  ],
  savoir: [
    { level: 'A1', fr: 'Je sais lire et écrire.', pt: 'Eu sei ler e escrever.' },
    { level: 'A2-B1', fr: 'Sais-tu où se trouve la mairie ?', pt: 'Você sabe onde fica a prefeitura?' },
    { level: 'B2', fr: 'Savoir écouter est une qualité rare.', pt: 'Saber escutar é uma qualidade rara.' },
    { level: 'C1-C2', fr: 'Le savoir se transmet mieux quand il est partagé.', pt: 'O saber se transmite melhor quando é compartilhado.' },
  ],
  galerie: [
    { level: 'A1', fr: 'La galerie est ouverte aujourd\'hui.', pt: 'A galeria está aberta hoje.' },
    { level: 'A2-B1', fr: 'Nous visitons une galerie d\'art moderne.', pt: 'Visitamos uma galeria de arte moderna.' },
    { level: 'B2', fr: 'La galerie expose des peintres contemporains jusqu\'en juin.', pt: 'A galeria expõe pintores contemporâneos até junho.' },
    { level: 'C1-C2', fr: 'Une galerie bien choisie révèle le regard d\'une époque.', pt: 'Uma galeria bem escolhida revela o olhar de uma época.' },
  ],
  miroir: [
    { level: 'A1', fr: 'Je me regarde dans le miroir.', pt: 'Eu me olho no espelho.' },
    { level: 'A2-B1', fr: 'Le miroir de la salle de bain est cassé.', pt: 'O espelho do banheiro está quebrado.' },
    { level: 'B2', fr: 'Le lac, tel un miroir, reflétait le ciel du matin.', pt: 'O lago, como um espelho, refletia o céu da manhã.' },
    { level: 'C1-C2', fr: 'La ville se mire dans le fleuve comme dans un miroir.', pt: 'A cidade se contempla no rio como num espelho.' },
  ],
  statue: [
    { level: 'A1', fr: 'Il y a une statue sur la place.', pt: 'Há uma estátua na praça.' },
    { level: 'A2-B1', fr: 'La statue représente un héros de la ville.', pt: 'A estátua representa um herói da cidade.' },
    { level: 'B2', fr: 'Les statues du jardin public attirent les visiteurs.', pt: 'As estátuas do jardim público atraem os visitantes.' },
    { level: 'C1-C2', fr: 'Une statue fige à jamais un instant choisi par l\'histoire.', pt: 'Uma estátua congela para sempre um instante escolhido pela história.' },
  ],
  fontaine: [
    { level: 'A1', fr: 'La fontaine est au centre de la place.', pt: 'O chafariz fica no centro da praça.' },
    { level: 'A2-B1', fr: 'Les enfants jouent près de la fontaine.', pt: 'As crianças brincam perto do chafariz.' },
    { level: 'B2', fr: 'L\'eau de la fontaine scintillait sous le soleil.', pt: 'A água do chafariz cintilava sob o sol.' },
    { level: 'C1-C2', fr: 'La fontaine, depuis des siècles, est le rendez-vous des passants.', pt: 'O chafariz, há séculos, é o ponto de encontro dos passantes.' },
  ],
  jardin: [
    { level: 'A1', fr: 'Le jardin est derrière la maison.', pt: 'O jardim fica atrás da casa.' },
    { level: 'A2-B1', fr: 'Nous nous promenons dans le jardin public.', pt: 'Passeamos no jardim público.' },
    { level: 'B2', fr: 'Le jardin, soigneusement entretenu, embaume la lavande.', pt: 'O jardim, cuidadosamente conservado, perfuma com lavanda.' },
    { level: 'C1-C2', fr: 'Cultiver un jardin apprend la patience et l\'humilité.', pt: 'Cultivar um jardim ensina paciência e humildade.' },
  ],
  lumière: [
    { level: 'A1', fr: 'La lumière est allumée.', pt: 'A luz está acesa.' },
    { level: 'A2-B1', fr: 'Les lumières de la ville brillent la nuit.', pt: 'As luzes da cidade brilham à noite.' },
    { level: 'B2', fr: 'La lumière du matin transforme la façade en or.', pt: 'A luz da manhã transforma a fachada em ouro.' },
    { level: 'C1-C2', fr: 'Il faut parfois s\'éloigner pour voir les choses sous un autre jour.', pt: 'Às vezes é preciso se afastar para ver as coisas sob outra luz.' },
  ],
  doré: [
    { level: 'A1', fr: 'Le pain est doré.', pt: 'O pão está dourado.' },
    { level: 'A2-B1', fr: 'Les croissants dorés sortent du four.', pt: 'Os croissants dourados saem do forno.' },
    { level: 'B2', fr: 'Au couchant, la ville se teinte de reflets dorés.', pt: 'Ao pôr do sol, a cidade se tinge de reflexos dourados.' },
    { level: 'C1-C2', fr: 'Les années dorées de l\'enfance ne reviennent jamais tout à fait.', pt: 'Os anos dourados da infância nunca voltam por completo.' },
  ],
  vert: [
    { level: 'A1', fr: 'La pomme est verte.', pt: 'A maçã é verde.' },
    { level: 'A2-B1', fr: 'Les feuilles deviennent vertes au printemps.', pt: 'As folhas ficam verdes na primavera.' },
    { level: 'B2', fr: 'Le parc offre un écrin de verdure au milieu de la ville.', pt: 'O parque oferece um refúgio verde no meio da cidade.' },
    { level: 'C1-C2', fr: 'La ville cherche un équilibre entre le béton et les espaces verts.', pt: 'A cidade busca um equilíbrio entre o concreto e os espaços verdes.' },
  ],
  petit: [
    { level: 'A1', fr: 'Le chat est petit.', pt: 'O gato é pequeno.' },
    { level: 'A2-B1', fr: 'Ils habitent un petit appartement près du canal.', pt: 'Eles moram num apartamento pequeno perto do canal.' },
    { level: 'B2', fr: 'Les petites attentions font les grandes amitiés.', pt: 'Os pequenos gestos fazem as grandes amizades.' },
    { level: 'C1-C2', fr: 'C\'est dans les petites choses que se cache le bonheur.', pt: 'É nas pequenas coisas que se esconde a felicidade.' },
  ],
  principal: [
    { level: 'A1', fr: 'C\'est la rue principale.', pt: 'É a rua principal.' },
    { level: 'A2-B1', fr: 'L\'entrée principale se trouve à droite.', pt: 'A entrada principal fica à direita.' },
    { level: 'B2', fr: 'Le sujet principal de la réunion reste à définir.', pt: 'O assunto principal da reunião ainda precisa ser definido.' },
    { level: 'C1-C2', fr: 'Le principal n\'est pas d\'arriver vite, mais d\'arriver ensemble.', pt: 'O principal não é chegar rápido, mas chegar juntos.' },
  ],
  prochain: [
    { level: 'A1', fr: 'À la prochaine fois !', pt: 'Até a próxima!' },
    { level: 'A2-B1', fr: 'Nous partons en vacances la semaine prochaine.', pt: 'Saímos de férias na próxima semana.' },
    { level: 'B2', fr: 'Le prochain arrêt est la place de la République.', pt: 'A próxima parada é a praça da República.' },
    { level: 'C1-C2', fr: 'Chaque génération prépare le terrain de la prochaine.', pt: 'Cada geração prepara o terreno da próxima.' },
  ],
  ancien: [
    { level: 'A1', fr: 'C\'est un bâtiment ancien.', pt: 'É um prédio antigo.' },
    { level: 'A2-B1', fr: 'Les anciens élèves se retrouvent chaque année.', pt: 'Os antigos alunos se reencontram todo ano.' },
    { level: 'B2', fr: 'Un ancien entrepôt abrite aujourd\'hui un marché couvert.', pt: 'Um antigo armazém abriga hoje um mercado coberto.' },
    { level: 'C1-C2', fr: 'L\'ancien et le moderne cohabitent parfois avec une élégance surprenante.', pt: 'O antigo e o moderno convivem às vezes com uma elegância surpreendente.' },
  ],

  // ────────────────────────────────────────────────────────────────
  // COMÉRCIO, ALIMENTAÇÃO E REFEIÇÕES
  // ────────────────────────────────────────────────────────────────
  boulangerie: [
    { level: 'A1', fr: 'La boulangerie est ouverte le matin.', pt: 'A padaria abre de manhã.' },
    { level: 'A2-B1', fr: 'J\'achète une baguette à la boulangerie du coin.', pt: 'Compro uma baguete na padaria da esquina.' },
    { level: 'B2', fr: 'La boulangerie artisanale pétrit sa pâte chaque matin.', pt: 'A padaria artesanal sova a massa toda manhã.' },
    { level: 'C1-C2', fr: 'La boulangerie de quartier reste un repère dans la vie des habitants.', pt: 'A padaria do bairro continua sendo um ponto de referência na vida dos moradores.' },
  ],
  boulangère: [
    { level: 'A1', fr: 'La boulangère sourit aux clients.', pt: 'A padeira sorri para os clientes.' },
    { level: 'A2-B1', fr: 'La boulangère prépare le pain très tôt.', pt: 'A padeira prepara o pão bem cedo.' },
    { level: 'B2', fr: 'La boulangère connaît les goûts de chacun de ses habitués.', pt: 'A padeira conhece o gosto de cada um dos clientes habituais.' },
    { level: 'C1-C2', fr: 'La boulangère perpétue un savoir-faire transmis par ses aînés.', pt: 'A padeira perpetua um saber-fazer transmitido pelos mais velhos.' },
  ],
  baguette: [
    { level: 'A1', fr: 'Je voudrais une baguette, s\'il vous plaît.', pt: 'Eu gostaria de uma baguete, por favor.' },
    { level: 'A2-B1', fr: 'Il achète une baguette fraîche chaque matin.', pt: 'Ele compra uma baguete fresca toda manhã.' },
    { level: 'B2', fr: 'La baguette croustillante accompagne tous les repas français.', pt: 'A baguete crocante acompanha todas as refeições francesas.' },
    { level: 'C1-C2', fr: 'La baguette, symbole du quotidien, fait partie du patrimoine français.', pt: 'A baguete, símbolo do cotidiano, faz parte do patrimônio francês.' },
  ],
  crêpe: [
    { level: 'A1', fr: 'Je mange une crêpe au sucre.', pt: 'Eu como uma panqueca com açúcar.' },
    { level: 'A2-B1', fr: 'Nous préparons des crêpes pour le goûter.', pt: 'Preparamos panquecas para o lanche.' },
    { level: 'B2', fr: 'Les crêpes bretonnes se dégustent salées ou sucrées.', pt: 'As panquecas bretãs se degustam salgadas ou doces.' },
    { level: 'C1-C2', fr: 'Tourner les crêpes à la Chandeleur rassemble toute la famille.', pt: 'Virar as panquecas na festa da Candelária reúne toda a família.' },
  ],
  glace: [
    { level: 'A1', fr: 'Je mange une glace au chocolat.', pt: 'Eu como um sorvete de chocolate.' },
    { level: 'A2-B1', fr: 'En été, les enfants achètent des glaces.', pt: 'No verão, as crianças compram sorvetes.' },
    { level: 'B2', fr: 'Une glace artisanale fond vite sous le soleil.', pt: 'Um sorvete artesanal derrete rápido sob o sol.' },
    { level: 'C1-C2', fr: 'La glace à la vanille évoque les après-midi d\'enfance.', pt: 'O sorvete de baunilha evoca as tardes da infância.' },
  ],
  lait: [
    { level: 'A1', fr: 'Je bois du lait au petit déjeuner.', pt: 'Eu bebo leite no café da manhã.' },
    { level: 'A2-B1', fr: 'Il reste du lait dans le réfrigérateur.', pt: 'Sobrou leite na geladeira.' },
    { level: 'B2', fr: 'Le lait chaud avec du miel adoucit les soirées d\'hiver.', pt: 'O leite quente com mel adoça as noites de inverno.' },
    { level: 'C1-C2', fr: 'Le lait frais du matin a un goût que l\'on n\'oublie pas.', pt: 'O leite fresco da manhã tem um gosto que a gente não esquece.' },
  ],
  comté: [
    { level: 'A1', fr: 'Je goûte le comté avec du pain.', pt: 'Eu experimento o queijo comté com pão.' },
    { level: 'A2-B1', fr: 'Le comté est un fromage de l\'est de la France.', pt: 'O comté é um queijo do leste da França.' },
    { level: 'B2', fr: 'Le comté affiné développe des arômes de noisette.', pt: 'O comté curado desenvolve aromas de avelã.' },
    { level: 'C1-C2', fr: 'Un comté bien affiné se déguste lentement, comme un grand vin.', pt: 'Um comté bem curado se degusta devagar, como um grande vinho.' },
  ],
  recette: [
    { level: 'A1', fr: 'Je lis la recette du gâteau.', pt: 'Eu leio a receita do bolo.' },
    { level: 'A2-B1', fr: 'Elle a noté la recette de sa grand-mère.', pt: 'Ela anotou a receita da avó dela.' },
    { level: 'B2', fr: 'La recette du succès tient en une bonne préparation.', pt: 'A receita do sucesso está numa boa preparação.' },
    { level: 'C1-C2', fr: 'Certaines recettes se transmettent sans jamais être écrites.', pt: 'Certas receitas se transmitem sem nunca serem escritas.' },
  ],
  pourboire: [
    { level: 'A1', fr: 'Il laisse un pourboire au serveur.', pt: 'Ele deixa uma gorjeta para o garçom.' },
    { level: 'A2-B1', fr: 'Le pourboire est facultatif en France.', pt: 'A gorjeta é opcional na França.' },
    { level: 'B2', fr: 'Elle a laissé un pourboire généreux pour le service attentionné.', pt: 'Ela deixou uma gorjeta generosa pelo serviço atencioso.' },
    { level: 'C1-C2', fr: 'Le pourboire, petit geste, en dit long sur la reconnaissance du client.', pt: 'A gorjeta, pequeno gesto, diz muito sobre o reconhecimento do cliente.' },
  ],
  croix: [
    { level: 'A1', fr: 'Il y a une croix au sommet.', pt: 'Há uma cruz no topo.' },
    { level: 'A2-B1', fr: 'Marque d\'une croix la bonne réponse.', pt: 'Marque com um X a resposta certa.' },
    { level: 'B2', fr: 'La croix de la carte indique l\'emplacement du trésor.', pt: 'A cruz do mapa indica o local do tesouro.' },
    { level: 'C1-C2', fr: 'Chacun porte sa croix sans toujours le montrer.', pt: 'Cada um carrega a sua cruz sem sempre demonstrar.' },
  ],
  cuisine: [
    { level: 'A1', fr: 'La cuisine est au rez-de-chaussée.', pt: 'A cozinha fica no térreo.' },
    { level: 'A2-B1', fr: 'J\'aime la cuisine française.', pt: 'Eu gosto da culinária francesa.' },
    { level: 'B2', fr: 'La cuisine du restaurant mêle tradition et modernité.', pt: 'A cozinha do restaurante mistura tradição e modernidade.' },
    { level: 'C1-C2', fr: 'La cuisine est un langage qui se parle avec les mains et le cœur.', pt: 'A cozinha é uma linguagem que se fala com as mãos e o coração.' },
  ],
  écharpe: [
    { level: 'A1', fr: 'Elle porte une écharpe rouge.', pt: 'Ela usa um cachecol vermelho.' },
    { level: 'A2-B1', fr: 'Je mets mon écharpe quand il fait froid.', pt: 'Eu coloco o meu cachecol quando está frio.' },
    { level: 'B2', fr: 'Une écharpe en laine protège du vent du nord.', pt: 'Um cachecol de lã protege do vento do norte.' },
    { level: 'C1-C2', fr: 'L\'écharpe, accessoire discret, réchauffe autant qu\'elle rassure.', pt: 'O cachecol, acessório discreto, aquece tanto quanto conforta.' },
  ],

  // ────────────────────────────────────────────────────────────────
  // LUGARES, DÉPLACEMENTS ET LOISIRS
  // ────────────────────────────────────────────────────────────────
  librairie: [
    { level: 'A1', fr: 'La librairie est près de la gare.', pt: 'A livraria fica perto da estação.' },
    { level: 'A2-B1', fr: 'J\'achète un carnet dans une librairie du centre.', pt: 'Compro um caderno numa livraria do centro.' },
    { level: 'B2', fr: 'La librairie de quartier organise des rencontres avec les auteurs.', pt: 'A livraria do bairro organiza encontros com os autores.' },
    { level: 'C1-C2', fr: 'Une librairie bien tenue est un refuge pour les esprits curieux.', pt: 'Uma livraria bem cuidada é um refúgio para os espíritos curiosos.' },
  ],
  pharmacie: [
    { level: 'A1', fr: 'La pharmacie est au coin de la rue.', pt: 'A farmácia fica na esquina.' },
    { level: 'A2-B1', fr: 'Je passe à la pharmacie pour acheter des médicaments.', pt: 'Passo na farmácia para comprar remédios.' },
    { level: 'B2', fr: 'La pharmacie de garde reste ouverte toute la nuit.', pt: 'A farmácia de plantão fica aberta a noite toda.' },
    { level: 'C1-C2', fr: 'Le pharmacien conseille autant qu\'il délivre les ordonnances.', pt: 'O farmacêutico orienta tanto quanto entrega as receitas.' },
  ],
  boutique: [
    { level: 'A1', fr: 'La boutique est fermée le lundi.', pt: 'A loja fecha às segundas.' },
    { level: 'A2-B1', fr: 'Les boutiques du centre sont très animées.', pt: 'As lojas do centro são muito movimentadas.' },
    { level: 'B2', fr: 'Une petite boutique peut cacher des trésors insoupçonnés.', pt: 'Uma lojinha pode esconder tesouros insuspeitos.' },
    { level: 'C1-C2', fr: 'Les boutiques indépendantes donnent son âme à un quartier.', pt: 'As lojas independentes dão alma a um bairro.' },
  ],
  marché: [
    { level: 'A1', fr: 'Le marché a lieu le dimanche.', pt: 'A feira acontece no domingo.' },
    { level: 'A2-B1', fr: 'Nous achetons des légumes au marché.', pt: 'Compramos legumes na feira.' },
    { level: 'B2', fr: 'Le marché couvert regorge de produits locaux.', pt: 'O mercado coberto transborda de produtos locais.' },
    { level: 'C1-C2', fr: 'Le marché reste le cœur battant du commerce de proximité.', pt: 'A feira continua sendo o coração pulsante do comércio de proximidade.' },
  ],
  euro: [
    { level: 'A1', fr: 'Le pain coûte un euro.', pt: 'O pão custa um euro.' },
    { level: 'A2-B1', fr: 'J\'ai changé mes euros avant de partir.', pt: 'Troquei os meus euros antes de viajar.' },
    { level: 'B2', fr: 'Le prix est affiché en euros et en centimes.', pt: 'O preço é exibido em euros e centavos.' },
    { level: 'C1-C2', fr: 'L\'euro a simplifié les échanges entre les pays voisins.', pt: 'O euro simplificou as trocas entre os países vizinhos.' },
  ],
  voyage: [
    { level: 'A1', fr: 'Le voyage est long.', pt: 'A viagem é longa.' },
    { level: 'A2-B1', fr: 'Nous préparons notre voyage en France.', pt: 'Preparamos a nossa viagem à França.' },
    { level: 'B2', fr: 'Un voyage se raconte encore mieux qu\'il ne se prépare.', pt: 'Uma viagem se conta ainda melhor do que se prepara.' },
    { level: 'C1-C2', fr: 'Le vrai voyage commence quand on accepte de se laisser surprendre.', pt: 'A verdadeira viagem começa quando a gente aceita se deixar surpreender.' },
  ],
  sortie: [
    { level: 'A1', fr: 'La sortie est à gauche.', pt: 'A saída fica à esquerda.' },
    { level: 'A2-B1', fr: 'Ils organisent une sortie au cinéma.', pt: 'Eles organizam um passeio ao cinema.' },
    { level: 'B2', fr: 'La sortie de secours doit rester dégagée.', pt: 'A saída de emergência deve permanecer desobstruída.' },
    { level: 'C1-C2', fr: 'Une sortie improvisée laisse souvent de meilleurs souvenirs.', pt: 'Um passeio improvisado costuma deixar melhores lembranças.' },
  ],
  soirée: [
    { level: 'A1', fr: 'Bonne soirée !', pt: 'Boa noite!' },
    { level: 'A2-B1', fr: 'Nous passons une soirée entre amis.', pt: 'Passamos uma noite entre amigos.' },
    { level: 'B2', fr: 'La soirée s\'est achevée tard dans la nuit.', pt: 'A noite terminou tarde.' },
    { level: 'C1-C2', fr: 'Une soirée réussie tient plus aux rencontres qu\'au décor.', pt: 'Uma noite bem-sucedida depende mais dos encontros do que do cenário.' },
  ],
  journée: [
    { level: 'A1', fr: 'Bonne journée !', pt: 'Tenha um bom dia!' },
    { level: 'A2-B1', fr: 'Je passe toute la journée au bureau.', pt: 'Passo o dia inteiro no escritório.' },
    { level: 'B2', fr: 'La journée a filé sans que l\'on voie le temps passer.', pt: 'O dia passou voando sem que a gente visse o tempo passar.' },
    { level: 'C1-C2', fr: 'Une journée bien remplie mérite une soirée paisible.', pt: 'Um dia bem preenchido merece uma noite tranquila.' },
  ],
  côté: [
    { level: 'A1', fr: 'Il est de l\'autre côté de la rue.', pt: 'Ele está do outro lado da rua.' },
    { level: 'A2-B1', fr: 'Le marché se tient du côté de la gare.', pt: 'A feira acontece do lado da estação.' },
    { level: 'B2', fr: 'D\'un côté, la prudence ; de l\'autre, l\'envie d\'avancer.', pt: 'De um lado, a prudência; de outro, a vontade de avançar.' },
    { level: 'C1-C2', fr: 'Voir les deux côtés d\'une question demande un réel effort.', pt: 'Ver os dois lados de uma questão exige um esforço real.' },
  ],
  vue: [
    { level: 'A1', fr: 'La vue est belle depuis la tour.', pt: 'A vista é bonita da torre.' },
    { level: 'A2-B1', fr: 'Notre chambre a une vue sur le fleuve.', pt: 'Nosso quarto tem vista para o rio.' },
    { level: 'B2', fr: 'La vue plongeante révèle les toits de la ville.', pt: 'A vista do alto revela os telhados da cidade.' },
    { level: 'C1-C2', fr: 'Prendre de la hauteur change la vue et le jugement.', pt: 'Subir muda a vista e o julgamento.' },
  ],
  air: [
    { level: 'A1', fr: 'L\'air est frais ce matin.', pt: 'O ar está fresco esta manhã.' },
    { level: 'A2-B1', fr: 'Ouvre la fenêtre pour changer l\'air.', pt: 'Abra a janela para renovar o ar.' },
    { level: 'B2', fr: 'Il a pris l\'air quelques minutes avant de reprendre.', pt: 'Ele tomou um ar por alguns minutos antes de retomar.' },
    { level: 'C1-C2', fr: 'Prendre l\'air permet souvent de remettre les idées en place.', pt: 'Tomar um ar muitas vezes ajuda a reorganizar as ideias.' },
  ],

  // ────────────────────────────────────────────────────────────────
  // SENTIMENTS, QUALITÉS ET ACTIONS COURANTES
  // ────────────────────────────────────────────────────────────────
  musique: [
    { level: 'A1', fr: 'J\'écoute de la musique.', pt: 'Eu escuto música.' },
    { level: 'A2-B1', fr: 'La musique adoucit les mœurs.', pt: 'A música suaviza os costumes.' },
    { level: 'B2', fr: 'Une musique familière peut réveiller des souvenirs enfouis.', pt: 'Uma música familiar pode despertar lembranças adormecidas.' },
    { level: 'C1-C2', fr: 'La musique traverse les frontières sans jamais demander de passeport.', pt: 'A música atravessa fronteiras sem nunca pedir passaporte.' },
  ],
  peint: [
    { level: 'A1', fr: 'Il peint un paysage.', pt: 'Ele pinta uma paisagem.' },
    { level: 'A2-B1', fr: 'Elle a peint les murs de sa chambre en blanc.', pt: 'Ela pintou as paredes do quarto dela de branco.' },
    { level: 'B2', fr: 'L\'artiste peint d\'abord une esquisse avant les couleurs.', pt: 'O artista pinta primeiro um esboço antes das cores.' },
    { level: 'C1-C2', fr: 'Peindre, c\'est choisir ce que l\'on veut que le regard retienne.', pt: 'Pintar é escolher o que se quer que o olhar retenha.' },
  ],
  garde: [
    { level: 'A1', fr: 'Elle garde les enfants ce soir.', pt: 'Ela cuida das crianças hoje à noite.' },
    { level: 'A2-B1', fr: 'Je garde ce livre pour toi.', pt: 'Guardo este livro para você.' },
    { level: 'B2', fr: 'Il garde un souvenir précis de son premier jour à Paris.', pt: 'Ele guarda uma lembrança precisa do primeiro dia dele em Paris.' },
    { level: 'C1-C2', fr: 'Garder son calme dans la tempête est une forme de courage.', pt: 'Manter a calma na tempestade é uma forma de coragem.' },
  ],
  continue: [
    { level: 'A1', fr: 'Il continue à travailler.', pt: 'Ele continua trabalhando.' },
    { level: 'A2-B1', fr: 'La pluie continue de tomber depuis ce matin.', pt: 'A chuva continua caindo desde esta manhã.' },
    { level: 'B2', fr: 'Elle continue son chemin sans se retourner.', pt: 'Ela continua o caminho sem olhar para trás.' },
    { level: 'C1-C2', fr: 'Continuer malgré les doutes, voilà ce qui sépare le rêve du projet.', pt: 'Continuar apesar das dúvidas é o que separa o sonho do projeto.' },
  ],
  vérifie: [
    { level: 'A1', fr: 'Je vérifie mon sac avant de partir.', pt: 'Eu confiro a minha bolsa antes de sair.' },
    { level: 'A2-B1', fr: 'Vérifiez l\'horaire du train sur le panneau.', pt: 'Confira o horário do trem no painel.' },
    { level: 'B2', fr: 'Il vérifie chaque détail avant de signer.', pt: 'Ele confere cada detalhe antes de assinar.' },
    { level: 'C1-C2', fr: 'Vérifier ses sources est la première règle de la rigueur.', pt: 'Verificar as fontes é a primeira regra do rigor.' },
  ],
  rencontré: [
    { level: 'A1', fr: 'J\'ai rencontré un ami au marché.', pt: 'Encontrei um amigo na feira.' },
    { level: 'A2-B1', fr: 'Ils se sont rencontrés dans un café du quartier.', pt: 'Eles se conheceram num café do bairro.' },
    { level: 'B2', fr: 'Elle a rencontré des difficultés qu\'elle n\'avait pas prévues.', pt: 'Ela encontrou dificuldades que não tinha previsto.' },
    { level: 'C1-C2', fr: 'Rencontrer l\'autre, c\'est aussi se découvrir soi-même.', pt: 'Encontrar o outro é também descobrir a si mesmo.' },
  ],
  repose: [
    { level: 'A1', fr: 'Le chat se repose sur le canapé.', pt: 'O gato descansa no sofá.' },
    { level: 'A2-B1', fr: 'Je me repose après le déjeuner.', pt: 'Eu descanso depois do almoço.' },
    { level: 'B2', fr: 'Il a pris un moment de repos avant de reprendre la route.', pt: 'Ele tirou um momento de descanso antes de retomar a estrada.' },
    { level: 'C1-C2', fr: 'Le repos n\'est pas un luxe, c\'est une condition de la clarté.', pt: 'O descanso não é um luxo, é uma condição para a clareza.' },
  ],
  garde_fallback: [],
};
