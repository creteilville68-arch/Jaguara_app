/**
 * Farm de exemplos curados para palavras de CONTEÚDO das guias da Enciclopédia
 * que NÃO estavam clicáveis porque ainda não tinham curadoria própria.
 *
 * Regra de qualidade: os 4 exemplos devem usar a FORMA que aparece no texto
 * (tempo verbal, gênero, número) e não apenas o infinitivo. Isso garante que o
 * modal devolva a palavra exatamente como o aluno a encontrou no parágrafo.
 *
 * Chaves dobradas: minúsculas, apóstrofo normalizado para `'`, acentos PRESERVADOS.
 */
export interface MasterExample {
  level: string;
  fr: string;
  pt: string;
}

const ex = (level: string, fr: string, pt: string) => ({ level, fr, pt });

export const ENCYCLOPEDIA_EXAMPLES: Record<string, MasterExample[]> = {
  // ── Verbes du récit historique (passé simple/imparfait) ──────────────────
  transforma: [
    ex('A1', 'Le maire transforma la petite place en grand jardin.', 'O prefeito transformou a pequena praça em um grande jardim.'),
    ex('A2-B1', 'En un siècle, le quartier transforma entièrement son aspect.', 'Em um século, o bairro transformou completamente sua aparência.'),
    ex('B2', 'Haussmann transforma la ville en profondeur au XIXe siècle.', 'Haussmann transformou a cidade em profundidade no século XIX.'),
    ex('C1-C2', 'L’essor industriel transforma durablement les rapports de la ville à son fleuve.', 'O crescimento industrial transformou duradouramente as relações da cidade com o seu rio.'),
  ],
  transformer: [
    ex('A1', 'Nous voulons transformer la chambre en salle de jeux.', 'Queremos transformar o quarto em sala de jogos.'),
    ex('A2-B1', 'Les travaux vont transformer le centre-ville.', 'As obras vão transformar o centro da cidade.'),
    ex('B2', 'La technologie transforme la manière de visiter les musées.', 'A tecnologia transforma a maneira de visitar os museus.'),
    ex('C1-C2', 'Transformer une métropole exige de concilier héritage et modernité.', 'Transformar uma metrópole exige conciliar herança e modernidade.'),
  ],
  imposa: [
    ex('A1', 'Le directeur imposa une nouvelle règle à tous.', 'O diretor impôs uma nova regra a todos.'),
    ex('A2-B1', 'La ville imposa une limite de hauteur pour les immeubles.', 'A cidade impôs um limite de altura para os prédios.'),
    ex('B2', 'Il imposa son style avec autant de force que de simplicité.', 'Ele impôs seu estilo com tanta força quanto simplicidade.'),
    ex('C1-C2', 'L’urbanisme haussmannien imposa une uniformité de façades sans précédent.', 'O urbanismo haussmanniano impôs uma uniformidade de fachadas sem precedentes.'),
  ],
  imposer: [
    ex('A1', 'Je ne veux pas imposer mon idée.', 'Não quero impor minha ideia.'),
    ex('A2-B1', 'Il faut imposer des règles claires dès le départ.', 'É preciso impor regras claras desde o início.'),
    ex('B2', 'Imposer un rythme trop rapide décourage souvent les débutants.', 'Impor um ritmo rápido demais costuma desencorajar iniciantes.'),
    ex('C1-C2', 'Imposer des normes exige d’expliquer avant de contraindre.', 'Impor normas exige explicar antes de obrigar.'),
  ],
  modernisa: [
    ex('A1', 'Le quartier modernisa sa gare ancienne.', 'O bairro modernizou sua antiga estação.'),
    ex('A2-B1', 'La ville modernisa son réseau d’eau potable.', 'A cidade modernizou sua rede de água potável.'),
    ex('B2', 'Il modernisa les services publics sans renier le patrimoine.', 'Ele modernizou os serviços públicos sem renegar o patrimônio.'),
    ex('C1-C2', 'La municipalité modernisa l’approvisionnement tout en protégeant les anciens métiers.', 'A municipalidade modernizou o abastecimento ao mesmo tempo que protegia os antigos ofícios.'),
  ],
  moderniser: [
    ex('A1', 'Ils veulent moderniser le musée.', 'Eles querem modernizar o museu.'),
    ex('A2-B1', 'On a modernisé le système de billets de métro.', 'Modernizaram o sistema de bilhetes de metrô.'),
    ex('B2', 'Moderniser sans dénaturer est le défi de nombreux quartiers anciens.', 'Modernizar sem descaracterizar é o desafio de muitos bairros antigos.'),
    ex('C1-C2', 'Moderniser la ville, c’est mieux servir les habitants.', 'Modernizar a cidade é melhor servir os moradores.'),
  ],
  protégeait: [
    ex('A1', 'La muraille protégeait les maisons du vent.', 'A muralha protegia as casas do vento.'),
    ex('A2-B1', 'L’île protégeait les habitants des crues du fleuve.', 'A ilha protegia os habitantes das cheias do rio.'),
    ex('B2', 'Le rempart protégeait la cité contre les invasions venues du nord.', 'A muralha protegia a cidade contra invasões vindas do norte.'),
    ex('C1-C2', 'L’artère fluviale protégeait autant qu’elle nourrissait l’économie locale.', 'A via fluvial protegia tanto quanto alimentava a economia local.'),
  ],
  protéger: [
    ex('A1', 'Nous devons protéger les animaux.', 'Devemos proteger os animais.'),
    ex('A2-B1', 'La ville veut protéger ses vieux quartiers.', 'A cidade quer proteger seus bairros antigos.'),
    ex('B2', 'Protéger le patrimoine demande des moyens et des artisans qualifiés.', 'Proteger o patrimônio exige recursos e artesãos qualificados.'),
    ex('C1-C2', 'Protéger l’identité d’un lieu sans freiner son évolution est tout un art.', 'Proteger a identidade de um lugar sem frear sua evolução é toda uma arte.'),
  ],
  perça: [
    ex('A1', 'Le tunnel perça la colline en deux ans.', 'O túnel perfurou a colina em dois anos.'),
    ex('A2-B1', 'Le boulevard perça le vieux quartier en une ligne droite.', 'O bulevar abriu o bairro antigo em uma linha reta.'),
    ex('B2', 'Il perça une immense avenue à travers la ville endormie.', 'Ele abriu uma imensa avenida através da cidade adormecida.'),
    ex('C1-C2', 'Perça à travers les anciennes fortifications, la voie changea pour toujours le visage du centre.', 'Aberta através das antigas fortificações, a via mudou para sempre o rosto do centro.'),
  ],
  percer: [
    ex('A1', 'Ils perceront une nouvelle rue l’année prochaine.', 'Eles abrirão uma nova rua no ano que vem.'),
    ex('A2-B1', 'On a percé le mur pour installer une fenêtre.', 'Perfuraram a parede para instalar uma janela.'),
    ex('B2', 'Percer un boulevard modifie durablement la circulation du quartier.', 'Abrir um bulevar modifica duradouramente o trânsito do bairro.'),
    ex('C1-C2', 'Percer d’immenses voies fut longtemps le signe de la modernité urbaine.', 'Abrir imensas vias foi por muito tempo o sinal da modernidade urbana.'),
  ],
  attaqués: [
    ex('A1', 'Les remparts attaqués restèrent debout.', 'As muralhas atacadas permaneceram de pé.'),
    ex('A2-B1', 'Les symboles du passé furent attaqués par les émeutiers.', 'Os símbolos do passado foram atacados pelos manifestantes.'),
    ex('B2', 'Les quartiers attaqués retrouvèrent lentement leur tranquillité.', 'Os bairros atacados recuperaram lentamente a tranquilidade.'),
    ex('C1-C2', 'Attaqués de toutes parts, les monuments gardèrent pourtant leur grandeur.', 'Atacados de todos os lados, os monumentos conservaram, no entanto, sua grandeza.'),
  ],
  attaquer: [
    ex('A1', 'Le chien n’attaque jamais sans raison.', 'O cachorro nunca ataca sem razão.'),
    ex('A2-B1', 'Ils ont attaqué le problème dès le matin.', 'Eles atacaram o problema logo de manhã.'),
    ex('B2', 'Attaquer un vieux bâtiment sans l’étudier d’abord serait imprudent.', 'Atacar um prédio antigo sem estudá-lo antes seria imprudente.'),
    ex('C1-C2', 'Attaquer les causes plutôt que les symptômes change une politique.', 'Atacar as causas em vez dos sintomas muda uma política.'),
  ],
  conservée: [
    ex('A1', 'La tour est bien conservée depuis le Moyen Âge.', 'A torre está bem conservada desde a Idade Média.'),
    ex('A2-B1', 'L’église, conservée avec soin, attire chaque week-end.', 'A igreja, conservada com cuidado, atrai todo fim de semana.'),
    ex('B2', 'La façade conservée intacte rappelle l’architecture de l’époque.', 'A fachada conservada intacta lembra a arquitetura da época.'),
    ex('C1-C2', 'Chaque façade conservée est un fragment de mémoire offert au présent.', 'Cada fachada conservada é um fragmento de memória oferecido ao presente.'),
  ],
  conserver: [
    ex('A1', 'Je conserve les photos dans une boîte.', 'Guardo as fotos numa caixa.'),
    ex('A2-B1', 'La ville essaie de conserver son charme ancien.', 'A cidade tenta conservar seu charme antigo.'),
    ex('B2', 'Conserver un quartier vivant demande plus que des pierres.', 'Conservar um bairro vivo exige mais do que pedras.'),
    ex('C1-C2', 'Conserver le patrimoine sans le figer est une exigence moderne.', 'Conservar o patrimônio sem congelá-lo é uma exigência moderna.'),
  ],
  rappellent: [
    ex('A1', 'Ces photos rappellent des bons souvenirs.', 'Estas fotos lembram bons momentos.'),
    ex('A2-B1', 'Les vieilles rues rappellent une autre époque.', 'As ruas antigas lembram uma outra época.'),
    ex('B2', 'Les cimetières monumentaux rappellent que la ville garde la mémoire des siens.', 'Os cemitérios monumentais relembram que a cidade guarda a memória dos seus.'),
    ex('C1-C2', 'Ces vestiges rappellent à quel prix l’on construit une nation.', 'Estes vestígios lembram a que preço se constrói uma nação.'),
  ],
  rappeler: [
    ex('A1', 'Rappelle-moi ton adresse.', 'Lembre-me seu endereço.'),
    ex('A2-B1', 'Je te rappelle le rendez-vous de demain.', 'Lembro-lhe o compromisso de amanhã.'),
    ex('B2', 'Rappeler l’histoire permet de comprendre le présent.', 'Recordar a história permite compreender o presente.'),
    ex('C1-C2', 'Rappeler d’où vient une ville, c’est éclairer ce qu’elle est devenue.', 'Recordar de onde vem uma cidade é iluminar o que ela se tornou.'),
  ],
  "s'appelait": [
    ex('A1', 'Mon grand-père s’appelait Lucien.', 'Meu avô se chamava Lucien.'),
    ex('A2-B1', 'Autrefois, ce village s’appelait Lutèce.', 'Antigamente, esta aldeia se chamava Lutécia.'),
    ex('B2', 'La vieille cité s’appelait jadis d’un nom aujourd’hui oublié.', 'A antiga cidade se chamava outrora de um nome hoje esquecido.'),
    ex('C1-C2', 'Avant de devenir Paris, la ville s’appelait tout simplement Lutèce.', 'Antes de se tornar Paris, a cidade se chamava simplesmente Lutécia.'),
  ],
  "s'appeler": [
    ex('A1', 'Comment t’appelles-tu ?', 'Como você se chama?'),
    ex('A2-B1', 'Ce quartier s’appelle le Marais.', 'Este bairro se chama o Marais.'),
    ex('B2', 'Beaucoup de lieux ont changé de nom en s’appelant autrement au fil du temps.', 'Muitos lugares mudaram de nome ao serem chamados de outra forma ao longo do tempo.'),
    ex('C1-C2', 'Savoir comment un lieu s’appelle ne dit pas qui il est.', 'Saber como um lugar se chama não diz quem ele é.'),
  ],
  rend: [
    ex('A1', 'Ce cadeau rend ma mère heureuse.', 'Este presente deixa minha mãe feliz.'),
    ex('A2-B1', 'La lumière du soir rend la ville plus belle.', 'A luz da tarde deixa a cidade mais bonita.'),
    ex('B2', 'Le mélange d’histoire et de modernité rend la capitale attachante.', 'A mistura de história e modernidade torna a capital cativante.'),
    ex('C1-C2', 'C’est l’équilibre entre mémoire et progrès qui rend une cité singulière.', 'É o equilíbrio entre memória e progresso que torna uma cidade singular.'),
  ],
  rendre: [
    ex('A1', 'Je te rends ton stylo.', 'Devolvo sua caneta.'),
    ex('A2-B1', 'Elle rend ses livres à la bibliothèque.', 'Ela devolve os livros à biblioteca.'),
    ex('B2', 'Rendre hommage au passé enrichit le présent.', 'Prestar homenagem ao passado enriquece o presente.'),
    ex('C1-C2', 'Rendre une ville vivante est autant une affaire de citoyens que d’architectes.', 'Tornar uma cidade viva é tanto uma questão de cidadãos quanto de arquitetos.'),
  ],
  // ── Noms et adjectifs de contenu ──────────────────────────────────────────
  invasions: [
    ex('A1', 'Les invasions sont rares aujourd’hui.', 'As invasões são raras hoje em dia.'),
    ex('A2-B1', 'Le rempart protégeait la ville des invasions.', 'A muralha protegia a cidade das invasões.'),
    ex('B2', 'L’histoire du quartier a été marquée par plusieurs invasions.', 'A história do bairro foi marcada por várias invasões.'),
    ex('C1-C2', 'Les invasions successives ont façonné la culture de cette région.', 'As invasões sucessivas moldaram a cultura desta região.'),
  ],
  invasion: [
    ex('A1', 'Le mur arrête l’invasion des insectes.', 'O muro detém a invasão dos insetos.'),
    ex('A2-B1', 'La ville repoussa l’invasion au prix de grands efforts.', 'A cidade repeliu a invasão ao custo de grandes esforços.'),
    ex('B2', 'Tout quartier connaît une invasion d’idées nouvelles en période de prospérité.', 'Todo bairro conhece uma invasão de ideias novas em períodos de prosperidade.'),
    ex('C1-C2', 'L’invasion pacifique des artistes a renouvelé l’âme du lieu.', 'A invasão pacífica dos artistas renovou a alma do lugar.'),
  ],
  mélange: [
    ex('A1', 'J’aime le mélange de couleurs sur ce mur.', 'Gosto da mistura de cores nesta parede.'),
    ex('A2-B1', 'Ce quartier est un mélange de styles très variés.', 'Este bairro é uma mistura de estilos muito variados.'),
    ex('B2', 'Le mélange d’histoire et de modernité surprend agréablement le visiteur.', 'A mistura de história e modernidade surpreende agradavelmente o visitante.'),
    ex('C1-C2', 'Ce mélange subtil de tendances donne toute sa personnalité à la capitale.', 'Essa mistura sutil de tendências dá toda a sua personalidade à capital.'),
  ],
  monumentaux: [
    ex('A1', 'Les jardins monumentaux sont très beaux.', 'Os jardins monumentais são muito bonitos.'),
    ex('A2-B1', 'Les édifices monumentaux attirent des millions de visiteurs.', 'Os edifícios monumentais atraem milhões de visitantes.'),
    ex('B2', 'Les cimetières monumentaux racontent l’orgueil et la foi d’une époque.', 'Os cemitérios monumentais contam o orgulho e a fé de uma época.'),
    ex('C1-C2', 'Certains ensembles monumentaux imposent le respect davantage que l’admiration.', 'Alguns conjuntos monumentais impõem respeito mais do que admiração.'),
  ],
  monumental: [
    ex('A1', 'C’est un palais monumental.', 'É um palácio monumental.'),
    ex('A2-B1', 'La façade monumentale impressionne au premier regard.', 'A fachada monumental impressiona à primeira vista.'),
    ex('B2', 'Le projet monumental a demandé des décennies de travail.', 'O projeto monumental exigiu décadas de trabalho.'),
    ex('C1-C2', 'Œuvre monumentale, elle ne se laisse comprendre qu’avec le temps.', 'Obra monumental, ela só se deixa compreender com o tempo.'),
  ],
  municipaux: [
    ex('A1', 'Les jardins municipaux ouvrent le matin.', 'Os jardins municipais abrem pela manhã.'),
    ex('A2-B1', 'Les services municipaux gèrent les déchets.', 'Os serviços municipais gerem os resíduos.'),
    ex('B2', 'Les services municipaux mobilisèrent leurs équipes sans délai.', 'Os serviços municipais mobilizaram suas equipes sem demora.'),
    ex('C1-C2', 'La géométrie exacte des relevés municipaux fit gagner un temps précieux.', 'A exatidão geométrica dos levantamentos municipais economizou um tempo precioso.'),
  ],
  oubliés: [
    ex('A1', 'Les vieux jouets sont oubliés dans le grenier.', 'Os brinquedos velhos estão esquecidos no sótão.'),
    ex('A2-B1', 'Les petits villages oubliés gardent tout leur charme.', 'As pequenas aldeias esquecidas conservam todo o seu charme.'),
    ex('B2', 'Certains artistes célèbres ont connu des héritiers oubliés par l’histoire.', 'Alguns artistas célebres tiveram herdeiros esquecidos pela história.'),
    ex('C1-C2', 'Célébres ou oubliés, tous reposent sous les mêmes pierres.', 'Célebres ou esquecidos, todos repousam sob as mesmas pedras.'),
  ],
  oublier: [
    ex('A1', 'N’oublie pas tes clés.', 'Não esqueça suas chaves.'),
    ex('A2-B1', 'Oublier un rendez-vous arrive aux meilleurs.', 'Esquecer um compromisso acontece com os melhores.'),
    ex('B2', 'Oublier son passé, c’est se priver d’une partie de soi.', 'Esquecer o próprio passado é privar-se de uma parte de si.'),
    ex('C1-C2', 'On ne construit pas une nation en oubliant les siens.', 'Não se constrói uma nação esquecendo os seus.'),
  ],
  gaulois: [
    ex('A1', 'Le village gaulois est célèbre.', 'A aldeia gaulesa é famosa.'),
    ex('A2-B1', 'Les premiers habitants de Paris étaient des pêcheurs gaulois.', 'Os primeiros habitantes de Paris eram pescadores gauleses.'),
    ex('B2', 'Le peuple gaulois a laissé de nombreuses traces dans la région.', 'O povo gaulês deixou numerosos rastros na região.'),
    ex('C1-C2', 'L’héritage gaulois survit dans les noms de lieux et les traditions locales.', 'A herança gaulesa sobrevive nos nomes de lugares e nas tradições locais.'),
  ],
  "l'approvisionnement": [
    ex('A1', 'L’approvisionnement du marché est prêt.', 'O abastecimento do mercado está pronto.'),
    ex('A2-B1', 'La ville modernise l’approvisionnement en eau potable.', 'A cidade moderniza o abastecimento de água potável.'),
    ex('B2', 'Un bon réseau garantit l’approvisionnement sans rupture dans la durée.', 'Uma boa rede garante o abastecimento sem interrupções na duração.'),
    ex('C1-C2', 'Assurer l’approvisionnement en période de crise exige une logistique irréprochable.', 'Assegurar o abastecimento em períodos de crise exige uma logística irrepreensível.'),
  ],
  attachant: [
    ex('A1', 'Ce petit quartier est vraiment attachant.', 'Este bairrinho é realmente cativante.'),
    ex('A2-B1', 'Le personnage principal de l’histoire est très attachant.', 'O personagem principal da história é muito cativante.'),
    ex('B2', 'C’est son humilité qui le rend tout à fait attachant.', 'É a humildade dele que o torna totalmente cativante.'),
    ex('C1-C2', 'Les défauts d’une ville la rendent souvent plus attachante que ses monuments.', 'Os defeitos de uma cidade muitas vezes a tornam mais cativante do que seus monumentos.'),
  ],
  attachante: [
    ex('A1', 'La ville est belle et attachante.', 'A cidade é bonita e cativante.'),
    ex('A2-B1', 'Je trouve cette région très attachante.', 'Acho esta região muito cativante.'),
    ex('B2', 'Le mélange d’histoire et de modernité rend la capitale attachante.', 'A mistura de história e modernidade torna a capital cativante.'),
    ex('C1-C2', 'Elle reste attachante malgré une croissance parfois brutale.', 'Ela permanece cativante apesar de um crescimento por vezes brutal.'),
  ],
  municipal: [
    ex('A1', 'Le jardin municipal ouvre tôt.', 'O jardim municipal abre cedo.'),
    ex('A2-B1', 'Le service municipal s’occupe des travaux.', 'O serviço municipal cuida das obras.'),
    ex('B2', 'Le budget municipal a été voté à la majorité.', 'O orçamento municipal foi aprovado por maioria.'),
    ex('C1-C2', 'Tout plan municipal ambitieux doit répondre d’abord aux habitants.', 'Todo plano municipal ambicioso deve responder primeiro aos moradores.'),
  ],
  roi: [
    ex('A1', 'Le roi vit au palais.', 'O rei vive no palácio.'),
    ex('A2-B1', 'Le roi installa sa cour dans la capitale.', 'O rei instalou sua corte na capital.'),
    ex('B2', 'Les rois de France firent de Paris le cœur du royaume.', 'Os reis da França fizeram de Paris o coração do reino.'),
    ex('C1-C2', 'Le roi, arbitre des factions, tint la ville entre deux absolutismes.', 'O rei, árbitro das facções, manteve a cidade entre dois absolutismos.'),
  ],
  rois: [
    ex('A1', 'Les rois dormaient dans ce château.', 'Os reis dormiam neste castelo.'),
    ex('A2-B1', 'Les rois installèrent leur cour au bord du fleuve.', 'Os reis instalaram sua corte à beira do rio.'),
    ex('B2', 'Longtemps, les rois façonnèrent la ville à leur image.', 'Durante muito tempo, os reis moldaram a cidade à própria imagem.'),
    ex('C1-C2', 'Rois et ministres firent de la capitale un théâtre du pouvoir.', 'Reis e ministros fizeram da capital um teatro do poder.'),
  ],
};