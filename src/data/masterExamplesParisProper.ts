/**
 * Curadoria dos nomes próprios, lugares e monumentos das guias de Paris.
 * 4 frases de uso natural por nome (A1 → C1-C2).
 */
export const PARIS_PROPER_EXAMPLES: Record<string, { level: string; fr: string; pt: string }[]> = {
  Seine: [
    { level: 'A1', fr: 'La Seine traverse Paris.', pt: 'O Sena atravessa Paris.' },
    { level: 'A2-B1', fr: 'On se promène le long de la Seine.', pt: 'Passeamos ao longo do Sena.' },
    { level: 'B2', fr: 'Les quais de la Seine sont classés au patrimoine mondial.', pt: 'Os cais do Sena são patrimônio mundial.' },
    { level: 'C1-C2', fr: 'La Seine a toujours été le poumon de la ville.', pt: 'O Sena sempre foi o pulmão da cidade.' },
  ],
  Lutèce: [
    { level: 'A2-B1', fr: 'Lutèce était le nom ancien de Paris.', pt: 'Lutécia era o nome antigo de Paris.' },
    { level: 'B2', fr: 'Les arènes de Lutèce datent de l’époque romaine.', pt: 'As arenas de Lutécia datam da época romana.' },
    { level: 'C1-C2', fr: 'De Lutèce à Paris, la ville n’a cessé de grandir.', pt: 'De Lutécia a Paris, a cidade não parou de crescer.' },
  ],
  Montmartre: [
    { level: 'A1', fr: 'Montmartre est un quartier célèbre.', pt: 'Montmartre é um bairro famoso.' },
    { level: 'A2-B1', fr: 'On monte à Montmartre pour voir la basilique.', pt: 'Subimos a Montmartre para ver a basílica.' },
    { level: 'B2', fr: 'Les artistes ont longtemps vécu à Montmartre.', pt: 'Os artistas viveram muito tempo em Montmartre.' },
    { level: 'C1-C2', fr: 'Montmartre garde l’âme d’un village au cœur de la ville.', pt: 'Montmartre guarda a alma de uma vila no coração da cidade.' },
  ],
  Haussmann: [
    { level: 'A2-B1', fr: 'Haussmann a transformé Paris au XIXe siècle.', pt: 'Haussmann transformou Paris no século XIX.' },
    { level: 'B2', fr: 'Les grands boulevards d’Haussmann marquent la ville.', pt: 'Os grandes bulevares de Haussmann marcam a cidade.' },
    { level: 'C1-C2', fr: 'L’haussmannisation a redessiné tout le centre.', pt: 'A haussmannização redesenhou todo o centro.' },
  ],
  Louvre: [
    { level: 'A1', fr: 'Le Louvre est un grand musée.', pt: 'O Louvre é um grande museu.' },
    { level: 'A2-B1', fr: 'On passe des heures au Louvre.', pt: 'Passamos horas no Louvre.' },
    { level: 'B2', fr: 'Le Louvre attire des millions de visiteurs.', pt: 'O Louvre atrai milhões de visitantes.' },
    { level: 'C1-C2', fr: 'Le Louvre est un palais devenu musée.', pt: 'O Louvre é um palácio transformado em museu.' },
  ],
  Panthéon: [
    { level: 'A1', fr: 'Le Panthéon est un monument de Paris.', pt: 'O Panteão é um monumento de Paris.' },
    { level: 'A2-B1', fr: 'On visite le Panthéon avec l’école.', pt: 'Visitamos o Panteão com a escola.' },
    { level: 'B2', fr: 'Le Panthéon honore les grands personnages.', pt: 'O Panteão homenageia os grandes personagens.' },
    { level: 'C1-C2', fr: 'Entrer au Panthéon est un honneur suprême.', pt: 'Entrar no Panteão é uma honra suprema.' },
  ],
  Orsay: [
    { level: 'A1', fr: 'Le musée d’Orsay est près de la Seine.', pt: 'O museu d’Orsay fica perto do Sena.' },
    { level: 'A2-B1', fr: 'Orsay abrite des chefs-d’œuvre impressionnistes.', pt: 'Orsay abriga obras-primas impressionistas.' },
    { level: 'B2', fr: 'L’ancienne gare d’Orsay est devenue musée.', pt: 'A antiga estação d’Orsay virou museu.' },
    { level: 'C1-C2', fr: 'Orsay illustre la reconversion réussie d’un monument.', pt: 'Orsay ilustra a reconversão bem-sucedida de um monumento.' },
  ],
  Belleville: [
    { level: 'A1', fr: 'Belleville est un quartier populaire.', pt: 'Belleville é um bairro popular.' },
    { level: 'A2-B1', fr: 'Belleville est connue pour ses artistes.', pt: 'Belleville é conhecida por seus artistas.' },
    { level: 'B2', fr: 'Belleville a gardé un esprit de village.', pt: 'Belleville conservou um espírito de vila.' },
    { level: 'C1-C2', fr: 'De Belleville, la vue sur Paris est unique.', pt: 'De Belleville, a vista sobre Paris é única.' },
  ],
  Vincennes: [
    { level: 'A1', fr: 'Le bois de Vincennes est immense.', pt: 'O bosque de Vincennes é imenso.' },
    { level: 'A2-B1', fr: 'On fait du vélo à Vincennes le dimanche.', pt: 'Andamos de bicicleta em Vincennes aos domingos.' },
    { level: 'B2', fr: 'Le château de Vincennes garde une longue histoire.', pt: 'O castelo de Vincennes guarda uma longa história.' },
    { level: 'C1-C2', fr: 'Vincennes, c’est la campagne aux portes de Paris.', pt: 'Vincennes é o campo às portas de Paris.' },
  ],
  Parisii: [
    { level: 'B2', fr: 'Les Parisii étaient un peuple gaulois.', pt: 'Os Parisii eram um povo gaulês.' },
    { level: 'C1-C2', fr: 'C’est des Parisii que vient le nom de Paris.', pt: 'É dos Parisii que vem o nome de Paris.' },
  ],
  'Notre-Dame': [
    { level: 'A1', fr: 'Notre-Dame est une cathédrale célèbre.', pt: 'Notre-Dame é uma catedral famosa.' },
    { level: 'A2-B1', fr: 'On visite Notre-Dame depuis l’île de la Cité.', pt: 'Visitamos Notre-Dame desde a Île de la Cité.' },
    { level: 'B2', fr: 'Notre-Dame a brûlé en 2019.', pt: 'Notre-Dame pegou fogo em 2019.' },
    { level: 'C1-C2', fr: 'La reconstruction de Notre-Dame mobilise le monde.', pt: 'A reconstrução de Notre-Dame mobiliza o mundo.' },
  ],
  Eiffel: [
    { level: 'A1', fr: 'La tour Eiffel est le symbole de Paris.', pt: 'A torre Eiffel é o símbolo de Paris.' },
    { level: 'A2-B1', fr: 'On monte à la tour Eiffel le soir.', pt: 'Subimos à torre Eiffel à noite.' },
    { level: 'B2', fr: 'La tour Eiffel a été construite pour l’Exposition de 1889.', pt: 'A torre Eiffel foi construída para a Exposição de 1889.' },
    { level: 'C1-C2', fr: 'La tour Eiffel a d’abord été contestée par les artistes.', pt: 'A torre Eiffel foi primeiro contestada pelos artistas.' },
  ],
  Joconde: [
    { level: 'A1', fr: 'La Joconde est un tableau très connu.', pt: 'A Mona Lisa é um quadro muito conhecido.' },
    { level: 'A2-B1', fr: 'La Joconde est exposée au Louvre.', pt: 'A Mona Lisa está exposta no Louvre.' },
    { level: 'B2', fr: 'Des milliers de visiteurs admirent la Joconde chaque jour.', pt: 'Milhares de visitantes admiram a Mona Lisa todos os dias.' },
    { level: 'C1-C2', fr: 'La Joconde de Léonard de Vinci fascine depuis cinq siècles.', pt: 'A Mona Lisa de Leonardo da Vinci fascina há cinco séculos.' },
  ],
  Vénus: [
    { level: 'A1', fr: 'La Vénus de Milo est une sculpture célèbre.', pt: 'A Vênus de Milo é uma escultura famosa.' },
    { level: 'A2-B1', fr: 'La Vénus de Milo est au Louvre.', pt: 'A Vênus de Milo está no Louvre.' },
    { level: 'B2', fr: 'La Vénus de Milo date de l’Antiquité grecque.', pt: 'A Vênus de Milo data da Antiguidade grega.' },
    { level: 'C1-C2', fr: 'La Vénus de Milo fascine par ses bras manquants.', pt: 'A Vênus de Milo fascina por seus braços ausentes.' },
  ],
  Milo: [
    { level: 'A2-B1', fr: 'Milo est une île grecque.', pt: 'Milo é uma ilha grega.' },
    { level: 'B2', fr: 'La statue a été découverte à Milo.', pt: 'A estátua foi descoberta em Milo.' },
    { level: 'C1-C2', fr: 'L’île de Milo a donné son nom à la Vénus.', pt: 'A ilha de Milo deu seu nome à Vênus.' },
  ],
  'Sacré-Cœur': [
    { level: 'A1', fr: 'Le Sacré-Cœur est tout blanc.', pt: 'O Sacré-Cœur é todo branco.' },
    { level: 'A2-B1', fr: 'Le Sacré-Cœur domine Montmartre.', pt: 'O Sacré-Cœur domina Montmartre.' },
    { level: 'B2', fr: 'Du Sacré-Cœur, on voit toute la ville.', pt: 'Do Sacré-Cœur, vê-se a cidade inteira.' },
    { level: 'C1-C2', fr: 'Le Sacré-Cœur est un lieu de pèlerinage et de tourisme.', pt: 'O Sacré-Cœur é um lugar de peregrinação e turismo.' },
  ],
  UNESCO: [
    { level: 'A1', fr: 'L’UNESCO protège le patrimoine.', pt: 'A UNESCO protege o patrimônio.' },
    { level: 'A2-B1', fr: 'Les quais de Seine sont inscrits à l’UNESCO.', pt: 'Os cais do Sena estão inscritos na UNESCO.' },
    { level: 'B2', fr: 'L’UNESCO classe des sites dans le monde entier.', pt: 'A UNESCO classifica sítios no mundo inteiro.' },
    { level: 'C1-C2', fr: 'Le classement UNESCO impose des devoirs de conservation.', pt: 'A classificação UNESCO impõe deveres de conservação.' },
  ],
  'Simone-Veil': [
    { level: 'A2-B1', fr: 'Simone Veil est une figure de l’histoire.', pt: 'Simone Veil é uma figura da história.' },
    { level: 'B2', fr: 'Simone Veil a défendu de grandes causes.', pt: 'Simone Veil defendeu grandes causas.' },
    { level: 'C1-C2', fr: 'Le Panthéon accueille désormais Simone Veil.', pt: 'O Panteão acolhe agora Simone Veil.' },
  ],
  Pompidou: [
    { level: 'A1', fr: 'Le centre Pompidou est très coloré.', pt: 'O centro Pompidou é muito colorido.' },
    { level: 'A2-B1', fr: 'Pompidou présente de l’art moderne.', pt: 'Pompidou apresenta arte moderna.' },
    { level: 'B2', fr: 'Le centre Pompidou a révolutionné l’architecture.', pt: 'O centro Pompidou revolucionou a arquitetura.' },
    { level: 'C1-C2', fr: 'Pompidou reste un modèle de musée ouvert.', pt: 'Pompidou continua um modelo de museu aberto.' },
  ],
  Monet: [
    { level: 'A1', fr: 'Monet est un peintre français.', pt: 'Monet é um pintor francês.' },
    { level: 'A2-B1', fr: 'Monet a peint les Nymphéas.', pt: 'Monet pintou os Nenúfares.' },
    { level: 'B2', fr: 'Monet a fondé le mouvement impressionniste.', pt: 'Monet fundou o movimento impressionista.' },
    { level: 'C1-C2', fr: 'Monet a saisi la lumière comme personne.', pt: 'Monet capturou a luz como ninguém.' },
  ],
  Renoir: [
    { level: 'A1', fr: 'Renoir a peint des scènes de la vie.', pt: 'Renoir pintou cenas da vida.' },
    { level: 'A2-B1', fr: 'Le bal du moulin de la Galette est de Renoir.', pt: 'O baile do Moulin de la Galette é de Renoir.' },
    { level: 'B2', fr: 'Renoir aimait peindre les bords de Seine.', pt: 'Renoir gostava de pintar as margens do Sena.' },
    { level: 'C1-C2', fr: 'Renoir célèbre la joie de vivre populaire.', pt: 'Renoir celebra a alegria de viver popular.' },
  ],
  Degas: [
    { level: 'A1', fr: 'Degas a peint des danseuses.', pt: 'Degas pintou bailarinas.' },
    { level: 'A2-B1', fr: 'Degas est connu pour ses pastels.', pt: 'Degas é conhecido por seus pastéis.' },
    { level: 'B2', fr: 'Degas a immortalisé l’opéra.', pt: 'Degas imortalizou a ópera.' },
    { level: 'C1-C2', fr: 'Degas observe le mouvement comme un scientifique.', pt: 'Degas observa o movimento como um cientista.' },
  ],
  Maillot: [
    { level: 'A2-B1', fr: 'La porte Maillot est à l’ouest de Paris.', pt: 'O portão Maillot fica a oeste de Paris.' },
    { level: 'B2', fr: 'Le palais des Congrès se trouve porte Maillot.', pt: 'O palácio de Congressos fica na porte Maillot.' },
    { level: 'C1-C2', fr: 'Porte Maillot est devenue un vrai carrefour moderne.', pt: 'Porte Maillot virou um verdadeiro cruzamento moderno.' },
  ],
  'Champs-Élysées': [
    { level: 'A1', fr: 'Les Champs-Élysées sont une grande avenue.', pt: 'Os Champs-Élysées são uma grande avenida.' },
    { level: 'A2-B1', fr: 'On se promène sur les Champs-Élysées.', pt: 'Passeamos pelos Champs-Élysées.' },
    { level: 'B2', fr: 'Les Champs-Élysées relient l’Arc de Triomphe à la Concorde.', pt: 'Os Champs-Élysées ligam o Arco do Triunfo à Concorde.' },
    { level: 'C1-C2', fr: 'Les Champs-Élysées sont le théâtre des grandes célébrations.', pt: 'Os Champs-Élysées são o palco das grandes celebrações.' },
  ],
  Brexit: [
    { level: 'A1', fr: 'Le Brexit a surpris tout le monde.', pt: 'O Brexit surpreendeu todo mundo.' },
    { level: 'A2-B1', fr: 'Le Brexit change les relations avec Londres.', pt: 'O Brexit muda as relações com Londres.' },
    { level: 'B2', fr: 'Le Brexit a pesé sur l’économie européenne.', pt: 'O Brexit pesou sobre a economia europeia.' },
    { level: 'C1-C2', fr: 'Le Brexit a rouvert le débat sur l’Europe.', pt: 'O Brexit reabriu o debate sobre a Europa.' },
  ],
};
