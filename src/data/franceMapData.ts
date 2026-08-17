import { City, RouteConnection } from '../types/map';

export const FRANCE_CITIES: City[] = [
  {
    id: 'paris',
    countryId: 'FR',
    nodeNumber: 1,
    subtitle: 'Capital & Cultura',
    statusState: 'explored',
    name: 'Paris',
    frenchName: 'Paris',
    region: 'Île-de-France',
    coords: { x: 50, y: 26 }, // Map Canvas projection %
    lat: 48.8566,
    lng: 2.3522,
    shortDescription: 'A capital francesa é um centro de arte, história, gastronomia e cultura mundial.',
    fullDescription: 'Paris é a capital histórica e cultural da França. Famosa por seus boulevards do século XIX, pelos museus icônicos como o Louvre e a famosa Torre Eiffel, Paris é o ponto central da língua francesa.',
    categoryTags: ['História', 'Cultura', 'Arte', 'Gastronomia', 'Arquitetura'],
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'ste_genevieve',
        cityId: 'paris',
        name: 'Biblioteca Sainte-Geneviève',
        frenchName: 'Bibliothèque Sainte-Geneviève',
        category: 'Literature',
        iconName: 'BookOpen',
        shortDesc: 'Aprenda sobre gramática francesa e a história da literatura francófona.',
        fullDesc: 'Esta famosa biblioteca do Quartier Latin possui um acervo magnífico de literatura e filosofia e é patrimônio intelectual francês.',
        coordinatesOffset: { x: 3, y: 8 },
        tags: ['literatura', 'estudos', 'livros', 'história']
      },
      {
        id: 'notre_dame',
        cityId: 'paris',
        name: 'Catedral de Notre-Dame',
        frenchName: 'Cathédrale Notre-Dame de Paris',
        category: 'History',
        iconName: 'Church',
        shortDesc: 'Descubra a história deste ícone gótico e sua importância para os franceses.',
        fullDesc: 'Símbolo gótico do século XII imortalizado por Victor Hugo, local de coroações e eventos vitais da história da França.',
        coordinatesOffset: { x: 5, y: 2 },
        tags: ['arquitetura', 'gótico', 'religião', 'história']
      },
      {
        id: 'le_marais',
        cityId: 'paris',
        name: 'Le Marais',
        frenchName: 'Quartier du Marais',
        category: 'Leisure',
        iconName: 'Building2',
        shortDesc: 'Explore um dos bairros mais charmosos de Paris e sua história.',
        fullDesc: 'Le Marais é famoso por suas arquiteturas preservadas do século XVII, bistrôs acolhedores e boutiques conceituais.',
        coordinatesOffset: { x: 10, y: -4 },
        tags: ['bairro', 'café', 'compras', 'cotidiano']
      },
      {
        id: 'croissants_patisserie',
        cityId: 'paris',
        name: 'Croissants & Pâtisseries',
        frenchName: 'Boulangerie Traditionnelle',
        category: 'Gastronomy',
        iconName: 'Utensils',
        shortDesc: 'Aprenda vocabulário e expressões em uma padaria tradicional.',
        fullDesc: 'Descubra o vocabulário de café da manhã, tipos de pães, doces refinados e como pedir seu café em francês nativo.',
        coordinatesOffset: { x: 8, y: 6 },
        tags: ['gastronomia', 'padaria', 'croissant', 'café']
      },
      {
        id: 'louvre',
        cityId: 'paris',
        name: 'Museu do Louvre',
        frenchName: 'Musée du Louvre',
        category: 'Art',
        iconName: 'Landmark',
        shortDesc: 'Aprenda vocabulário sobre arte e admire obras icônicas.',
        fullDesc: 'O Museu do Louvre é o maior museu de arte do mundo. Instalado no Palácio do Louvre, abriga obras primas como a Monalisa e a Vênus de Milo.',
        coordinatesOffset: { x: -8, y: -5 },
        tags: ['arte', 'história', 'museu', 'monalisa']
      },
      {
        id: 'eiffel_tower',
        cityId: 'paris',
        name: 'Torre Eiffel',
        frenchName: 'Tour Eiffel',
        category: 'Architecture',
        iconName: 'TowerControl',
        shortDesc: 'O grande símbolo da França, erguido para a Exposição Universal de 1889.',
        fullDesc: 'Construída por Gustave Eiffel, esta torre de ferro forjado de 330 metros é a atração paga mais visitada do planeta.',
        coordinatesOffset: { x: -12, y: 6 },
        tags: ['monumento', 'arquitetura', 'símbolo', 'vista']
      }
    ]
  },
  {
    id: 'lyon',
    countryId: 'FR',
    nodeNumber: 8,
    subtitle: 'Gastronomia & História',
    statusState: 'available',
    name: 'Lyon',
    frenchName: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    coords: { x: 72, y: 50 },
    lat: 45.7640,
    lng: 4.8357,
    shortDescription: 'Capital gastronômica da França, famosa pelos restaurantes bouchons e patrimônio romano.',
    fullDescription: 'Lyon fica no encontro dos rios Rhône e Saône. Seu centro antigo preserva vielas secretas chamadas traboules e ruínas romanas impressionantes.',
    categoryTags: ['Gastronomia', 'História', 'Cultura', 'Arquitetura'],
    imageUrl: 'https://images.unsplash.com/photo-1524850011238-e37235872fdc?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'bouchon_lyonnais',
        cityId: 'lyon',
        name: 'Bouchon Tradicional',
        frenchName: 'Bouchon Lyonnais',
        category: 'Gastronomy',
        iconName: 'UtensilsCrossed',
        shortDesc: 'Restaurante típico acolhedor servindo pratos rústicos autênticos de Lyon.',
        fullDesc: 'Nos bouchons de Lyon saboreiam-se especialidades como quenelles, quenelle de brochet e salade lyonnaise acompanhadas de vinhos locais.',
        coordinatesOffset: { x: -3, y: 2 },
        tags: ['restaurante', 'gastronomia', 'comida', 'tradição']
      },
      {
        id: 'vieux_lyon',
        cityId: 'lyon',
        name: 'Vieux Lyon & Traboules',
        frenchName: 'Vieux Lyon et Traboules',
        category: 'History',
        iconName: 'Footprints',
        shortDesc: 'Passagens cobertas medievais que ligam pátios e ruas históricas.',
        fullDesc: 'As traboules permitiam aos tecelões de seda (canuts) transportar tecidos sem molhá-los na chuva.',
        coordinatesOffset: { x: 2, y: -3 },
        tags: ['passagens', 'história', 'seda', 'arquitetura']
      }
    ]
  },
  {
    id: 'lille',
    countryId: 'FR',
    nodeNumber: 3,
    subtitle: 'Comércio & Tradição',
    statusState: 'available',
    name: 'Lille',
    frenchName: 'Lille',
    region: 'Hauts-de-France',
    coords: { x: 50, y: 8 },
    lat: 50.6292,
    lng: 3.0573,
    shortDescription: 'Capital do norte francês com influências flamengas, cervejas artesanais e waffles saborosos.',
    fullDescription: 'Lille destaca-se por sua Grand Place repleta de edifícios barrocos flamengos e por sua hospitalidade generosa do Norte.',
    categoryTags: ['Arquitetura', 'Cultura', 'Norte', 'Gastronomia'],
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'grand_place_lille',
        cityId: 'lille',
        name: 'Grand Place de Lille',
        frenchName: 'La Grand\'Place de Lille',
        category: 'Architecture',
        iconName: 'Building',
        shortDesc: 'Praça histórica cercada por fachadas coloridas estilo barroco flamengo.',
        fullDesc: 'Dominada pela estátua da Deusa e pela Antiga Bolsa de Valores (Vieille Bourse) do século XVII.',
        coordinatesOffset: { x: 0, y: 0 },
        tags: ['praça', 'flamengo', 'norte', 'história']
      }
    ]
  },
  {
    id: 'tours',
    countryId: 'FR',
    nodeNumber: 5,
    subtitle: 'Castelos do Loire',
    statusState: 'available',
    name: 'Tours',
    frenchName: 'Tours',
    region: 'Centre-Val de Loire',
    coords: { x: 42, y: 38 },
    lat: 47.3941,
    lng: 0.6848,
    shortDescription: 'O portal para os lendários Castelos do Loire e a terra do francês mais puro.',
    fullDescription: 'Tours é conhecida historicamente por sua dicção impecável do idioma francês, seus vinhos do Loire e como base para explorar os grandes Châteaux.',
    categoryTags: ['Castelos', 'Francês Puro', 'Loire', 'Vinhos'],
    imageUrl: 'https://images.unsplash.com/photo-1599818815152-32b0f444f6f8?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'chateau_loire_gateway',
        cityId: 'tours',
        name: 'Portal dos Castelos do Loire',
        frenchName: 'Châteaux de la Loire',
        category: 'History',
        iconName: 'Castle',
        shortDesc: 'Ponto de partida para Chenonceau, Chambord e Amboise.',
        fullDesc: 'O Vale do Loire abriga os mais belos châteaux da Renascença francesa em um cenário natural listado pela UNESCO.',
        coordinatesOffset: { x: 0, y: 0 },
        tags: ['castelos', 'renascença', 'loire']
      }
    ]
  },
  {
    id: 'strasbourg',
    countryId: 'FR',
    nodeNumber: 10,
    subtitle: 'Europa & Arquitetura',
    statusState: 'available',
    name: 'Strasbourg',
    frenchName: 'Strasbourg',
    region: 'Alsácia / Grand Est',
    coords: { x: 87, y: 30 },
    lat: 48.5734,
    lng: 7.7521,
    shortDescription: 'Sede do Parlamento Europeu com arquitetura enxaimel alsaciana encantadora.',
    fullDescription: 'Strasbourg combina tradições francesas e germânicas na Alsácia. Conhecida pela Petite France e pelos famosos mercados de Natal.',
    categoryTags: ['Cultura', 'Europa', 'Gastronomia', 'Arquitetura'],
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'petite_france',
        cityId: 'strasbourg',
        name: 'La Petite France',
        frenchName: 'La Petite France',
        category: 'Architecture',
        iconName: 'Home',
        shortDesc: 'Bairro histórico sobre os canais do rio Ill com casas medievais de madeira.',
        fullDesc: 'Região pitoresca onde curtidores e moleiros trabalhavam na Idade Média, repleta de canais.',
        coordinatesOffset: { x: -3, y: 2 },
        tags: ['canais', 'arquitetura', 'casas', 'alsácia']
      }
    ]
  },
  {
    id: 'bordeaux',
    countryId: 'FR',
    nodeNumber: 6,
    subtitle: 'Vinhos & Cultura',
    statusState: 'available',
    name: 'Bordeaux',
    frenchName: 'Bordeaux',
    region: 'Nouvelle-Aquitaine',
    coords: { x: 20, y: 55 },
    lat: 44.8378,
    lng: -0.5792,
    shortDescription: 'A capital mundial dos vinhos com arquitetura clássica espetacular às margens do Garonne.',
    fullDescription: 'Bordeaux possui mais de 350 edifícios históricos tombados, grandes châteaux vinícolas nas proximidades e a futurista Cité du Vin.',
    categoryTags: ['Vinho', 'Gastronomia', 'Arquitetura', 'História'],
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'cite_du_vin',
        cityId: 'bordeaux',
        name: 'A Cité du Vin',
        frenchName: 'La Cité du Vin',
        category: 'Art',
        iconName: 'Wine',
        shortDesc: 'Centro cultural interativo dedicado ao patrimônio universal do vinho.',
        fullDesc: 'Um edifício audacioso em formato de taça e parreira que leva os visitantes numa jornada sensorial global do vinho.',
        coordinatesOffset: { x: 2, y: -4 },
        tags: ['vinho', 'cultura', 'arquitetura']
      }
    ]
  },
  {
    id: 'toulouse',
    countryId: 'FR',
    nodeNumber: 7,
    subtitle: 'Espacial & Inovação',
    statusState: 'available',
    name: 'Toulouse',
    frenchName: 'Toulouse',
    region: 'Occitanie',
    coords: { x: 33, y: 65 },
    lat: 43.6047,
    lng: 1.4442,
    shortDescription: 'A "Cidade Rosa" famosa pelos tijolos ocre, indústria aeroespacial e o Canal du Midi.',
    fullDescription: 'Toulouse é carinhosamente chamada La Ville Rose devido ao tom rosado de seus edifícios de tijolo terra-cota. Sede da Airbus e polo universitário vibrante.',
    categoryTags: ['Aeroespacial', 'História', 'Cultura', 'Canais'],
    imageUrl: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'capitole_toulouse',
        cityId: 'toulouse',
        name: 'Praça do Capitólio',
        frenchName: 'Place du Capitole',
        category: 'Architecture',
        iconName: 'Landmark',
        shortDesc: 'O coração monumental da Cidade Rosa abrigando a prefeitura e o teatro lírico.',
        fullDesc: 'Fachada majestosa de 135 metros em tijolos rosa e pedras brancas no centro de Toulouse.',
        coordinatesOffset: { x: 0, y: -2 },
        tags: ['praça', 'cidade rosa', 'arquitetura']
      }
    ]
  },
  {
    id: 'marseille',
    countryId: 'FR',
    nodeNumber: 9,
    subtitle: 'Porto & Mediterrâneo',
    statusState: 'available',
    name: 'Marseille',
    frenchName: 'Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    coords: { x: 62, y: 80 },
    lat: 43.2965,
    lng: 5.3698,
    shortDescription: 'A cidade mais antiga da França, banhada pelo azul cristalino do Mar Mediterrâneo.',
    fullDescription: 'Fundada por gregos em 600 a.C., Marseille é um vibrante porto mediterrâneo, celebre por sua caldeirada bouillabaisse e falésias deslumbrantes (Calanques).',
    categoryTags: ['Litoral', 'História', 'Mediterrâneo', 'Gastronomia'],
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'vieux_port',
        cityId: 'marseille',
        name: 'Vieux-Port',
        frenchName: 'Le Vieux-Port de Marseille',
        category: 'Leisure',
        iconName: 'Anchor',
        shortDesc: 'O coração pulsante da cidade mediterrânea repleto de barcos de pesca e cafés.',
        fullDesc: 'Local histórico de entrada de navios comerciante onde pescadores vendem peixe fresco diariamente.',
        coordinatesOffset: { x: 0, y: 2 },
        tags: ['porto', 'barcos', 'mar', 'peixe']
      }
    ]
  },
  {
    id: 'mont-saint-michel',
    countryId: 'FR',
    nodeNumber: 4,
    subtitle: 'História & Patrimônio',
    statusState: 'available',
    name: 'Mont Saint-Michel',
    frenchName: 'Le Mont Saint-Michel',
    region: 'Normandia / Bretanha',
    coords: { x: 13, y: 19 },
    lat: 48.6361,
    lng: -1.5115,
    shortDescription: 'Maravilha do ocidente, abadia fortaleza erguida sobre uma ilha rochosa no mar.',
    fullDescription: 'Localizado em uma baía de marés extremas, o Mont Saint-Michel é uma das visões mais icônicas da arquitetura medieval do planeta.',
    categoryTags: ['História', 'Patrimônio', 'Arquitetura', 'Ilha'],
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'abadia_mont_saint_michel',
        cityId: 'mont-saint-michel',
        name: 'Abadia do Mont Saint-Michel',
        frenchName: 'Abbaye du Mont-Saint-Michel',
        category: 'History',
        iconName: 'Castle',
        shortDesc: 'A famosa abadia beneditina medieval no topo do monte sagrado.',
        fullDesc: 'Obra-prima da arquitetura medieval construída no século VIII em homenagem ao arcanjo São Miguel.',
        coordinatesOffset: { x: 0, y: -2 },
        tags: ['abadia', 'história', 'unesco']
      }
    ]
  },
  {
    id: 'amiens',
    countryId: 'FR',
    nodeNumber: 2,
    subtitle: 'Catedral & Gótica',
    statusState: 'available',
    name: 'Amiens',
    frenchName: 'Amiens',
    region: 'Hauts-de-France',
    coords: { x: 71, y: 15 },
    lat: 49.8941,
    lng: 2.2958,
    shortDescription: 'Conhecida pela maior catedral gótica da França e pelos canais dos Hortillonnages.',
    fullDescription: 'Amiens abriga a majestosa Catedral Notre-Dame d’Amiens e a histórica casa de Júlio Verne.',
    categoryTags: ['Catedral', 'Gótica', 'Canais'],
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'catedral_amiens',
        cityId: 'amiens',
        name: "Catedral Notre-Dame d'Amiens",
        frenchName: "Cathédrale Notre-Dame d'Amiens",
        category: 'Architecture',
        iconName: 'Church',
        shortDesc: 'A maior catedral gótica da França em volume imponente.',
        fullDesc: 'Tombada como patrimônio da UNESCO, destaca-se por sua estatuária ricamente detalhada na fachada oeste.',
        coordinatesOffset: { x: 0, y: 0 },
        tags: ['catedral', 'gótica', 'arquitetura']
      }
    ]
  },
  {
    id: 'nice',
    countryId: 'FR',
    nodeNumber: 11,
    subtitle: 'Arte & Riviera',
    statusState: 'available',
    name: 'Nice',
    frenchName: 'Nice',
    region: 'Côte d\'Azur',
    coords: { x: 84, y: 70 },
    lat: 43.7102,
    lng: 7.2620,
    shortDescription: 'Pérola da Riviera Francesa conhecida por sua Promenade des Anglais e clima ensolarado.',
    fullDescription: 'Nice combina glamour Belle Époque, a brisa suave do Mediterrâneo, mercados de flores animados e gastronomia niçoise.',
    categoryTags: ['Riviera', 'Litoral', 'Cultura', 'Lazer'],
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    locations: [
      {
        id: 'promenade_nice',
        cityId: 'nice',
        name: 'Promenade des Anglais',
        frenchName: 'Promenade des Anglais',
        category: 'Leisure',
        iconName: 'Compass',
        shortDesc: 'A célebre avenida beira-mar com vista para o azul do Mediterrâneo.',
        fullDesc: 'Ladeada por palmeiras e edifícios da Belle Époque, é o coração cultural e de lazer de Nice.',
        coordinatesOffset: { x: 0, y: 2 },
        tags: ['riviera', 'mar', 'promenade']
      }
    ]
  }
];

export const FRANCE_ROUTES: RouteConnection[] = [
  { fromCityId: 'paris', toCityId: 'amiens', distanceKm: 120, routeType: 'highway' },
  { fromCityId: 'amiens', toCityId: 'lille', distanceKm: 100, routeType: 'rail' },
  { fromCityId: 'paris', toCityId: 'mont-saint-michel', distanceKm: 360, routeType: 'scenic' },
  { fromCityId: 'tours', toCityId: 'mont-saint-michel', distanceKm: 250, routeType: 'highway' },
  { fromCityId: 'paris', toCityId: 'tours', distanceKm: 240, routeType: 'highway' },
  { fromCityId: 'tours', toCityId: 'bordeaux', distanceKm: 330, routeType: 'rail' },
  { fromCityId: 'bordeaux', toCityId: 'toulouse', distanceKm: 245, routeType: 'rail' },
  { fromCityId: 'toulouse', toCityId: 'marseille', distanceKm: 400, routeType: 'highway' },
  { fromCityId: 'paris', toCityId: 'strasbourg', distanceKm: 490, routeType: 'rail' },
  { fromCityId: 'paris', toCityId: 'lyon', distanceKm: 460, routeType: 'rail' },
  { fromCityId: 'lyon', toCityId: 'marseille', distanceKm: 310, routeType: 'rail' },
  { fromCityId: 'marseille', toCityId: 'nice', distanceKm: 200, routeType: 'scenic' }
];
