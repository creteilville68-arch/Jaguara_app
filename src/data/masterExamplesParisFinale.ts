/**
 * Curadoria final de Paris: os últimos lemas que faltavam para todas as
 * palavras das guias ficarem clicáveis (verbos, substantivos, adjetivos e
 * séculos). 4 exemplos progressivos por lema, frases reais.
 */
export const PARIS_FINALE_EXAMPLES: Record<string, { level: string; fr: string; pt: string }[]> = {
  // --- Verbos ---
  fermer: [
    { level: 'A1', fr: 'Je ferme la porte derrière moi.', pt: 'Eu fecho a porta atrás de mim.' },
    { level: 'A2-B1', fr: 'La librairie ferme à dix-huit heures.', pt: 'A livraria fecha às dezoito horas.' },
    { level: 'B2', fr: 'La rue est fermée aux voitures pendant les travaux.', pt: 'A rua está fechada aos carros durante as obras.' },
    { level: 'C1-C2', fr: 'Fermer un quartier à la circulation a transformé la vie locale.', pt: 'Fechar um bairro ao trânsito transformou a vida local.' },
  ],
  percevoir: [
    { level: 'A1', fr: 'Je perçois un bruit dans la rue.', pt: 'Eu percebo um barulho na rua.' },
    { level: 'A2-B1', fr: 'On perçoit la tour depuis le pont.', pt: 'Percebe-se a torre desde a ponte.' },
    { level: 'B2', fr: 'Les habitants perçoivent les changements du quartier.', pt: 'Os moradores percebem as mudanças do bairro.' },
    { level: 'C1-C2', fr: 'Percevoir la ville autrement demande de ralentir.', pt: 'Perceber a cidade de outra forma exige desacelerar.' },
  ],
  paralyser: [
    { level: 'A1', fr: 'La panne paralyse le métro.', pt: 'A pane paralisa o metrô.' },
    { level: 'A2-B1', fr: 'Les embouteillages paralysent le centre.', pt: 'Os engarrafamentos paralisam o centro.' },
    { level: 'B2', fr: 'La grève a paralysé les transports pendant deux jours.', pt: 'A greve paralisou os transportes por dois dias.' },
    { level: 'C1-C2', fr: 'La peur du changement paralyse parfois les projets.', pt: 'O medo da mudança às vezes paralisa os projetos.' },
  ],
  philosopher: [
    { level: 'A1', fr: 'Ils philosophent au café le soir.', pt: 'Eles filosofam no café à noite.' },
    { level: 'A2-B1', fr: 'On philosophe sur la vie en marchant.', pt: 'Filosofa-se sobre a vida caminhando.' },
    { level: 'B2', fr: 'Les étudiants philosophent sur l’avenir de la ville.', pt: 'Os estudantes filosofam sobre o futuro da cidade.' },
    { level: 'C1-C2', fr: 'Philosopher sans agir ne change rien au monde.', pt: 'Filosofar sem agir não muda nada no mundo.' },
  ],
  // --- Substantivos ---
  couronne: [
    { level: 'A1', fr: 'La reine porte une couronne dorée.', pt: 'A rainha usa uma coroa dourada.' },
    { level: 'A2-B1', fr: 'La grande couronne rassemble les banlieues de Paris.', pt: 'A grande coroa reúne os subúrbios de Paris.' },
    { level: 'B2', fr: 'Le train relie la petite couronne au centre.', pt: 'O trem liga a pequena coroa ao centro.' },
    { level: 'C1-C2', fr: 'La couronne d’une ville dit beaucoup de son histoire.', pt: 'A coroa de uma cidade diz muito de sua história.' },
  ],
  ivoire: [
    { level: 'A1', fr: 'La statue est en ivoire.', pt: 'A estátua é de marfim.' },
    { level: 'A2-B1', fr: 'Ce clavier ancien a des touches d’ivoire.', pt: 'Este teclado antigo tem teclas de marfim.' },
    { level: 'B2', fr: 'Le commerce de l’ivoire est strictement réglementé.', pt: 'O comércio de marfim é estritamente regulamentado.' },
    { level: 'C1-C2', fr: 'La tour d’ivoire du chercheur l’isole du terrain.', pt: 'A torre de marfim do pesquisador o isola do campo.' },
  ],
  ouest: [
    { level: 'A1', fr: 'Le soleil se couche à l’ouest.', pt: 'O sol se põe a oeste.' },
    { level: 'A2-B1', fr: 'Le vent vient de l’ouest.', pt: 'O vento vem do oeste.' },
    { level: 'B2', fr: 'Les quartiers de l’ouest de la ville sont plus calmes.', pt: 'Os bairros do oeste da cidade são mais calmos.' },
    { level: 'C1-C2', fr: 'L’ouest de la métropole s’est développé après la gare.', pt: 'O oeste da metrópole se desenvolveu depois da estação.' },
  ],
  dam: [
    { level: 'A2-B1', fr: 'Il a quitté la ville, au grand dam de ses amis.', pt: 'Ele saiu da cidade, para desgosto dos amigos.' },
    { level: 'B2', fr: 'La tour a été fermée, au grand dam des visiteurs.', pt: 'A torre foi fechada, para grande desgosto dos visitantes.' },
    { level: 'C1-C2', fr: 'Le projet avance, au dam des riverains qui s’y opposaient.', pt: 'O projeto avança, para pesar dos moradores que se opunham.' },
  ],
  xixe: [
    { level: 'A2-B1', fr: 'Le XIXe siècle a transformé Paris.', pt: 'O século XIX transformou Paris.' },
    { level: 'B2', fr: 'Ces immeubles datent du XIXe siècle.', pt: 'Estes prédios datam do século XIX.' },
    { level: 'C1-C2', fr: 'Les grandes gares du XIXe siècle structurent encore la ville.', pt: 'As grandes estações do século XIX ainda estruturam a cidade.' },
  ],
  xxe: [
    { level: 'A2-B1', fr: 'Le XXe siècle a vu naître le métro moderne.', pt: 'O século XX viu nascer o metrô moderno.' },
    { level: 'B2', fr: 'Ces tours ont été construites au XXe siècle.', pt: 'Estas torres foram construídas no século XX.' },
    { level: 'C1-C2', fr: 'Le XXe siècle a laissé à la ville un patrimoine contrasté.', pt: 'O século XX deixou à cidade um patrimônio contrastado.' },
  ],
  // --- Adjetivos ---
  végétatif: [
    { level: 'A2-B1', fr: 'La croissance végétative du parc est lente.', pt: 'O crescimento vegetativo do parque é lento.' },
    { level: 'B2', fr: 'Ces espèces végétatives couvrent les berges.', pt: 'Estas espécies vegetativas cobrem as margens.' },
    { level: 'C1-C2', fr: 'La ville gagne sur les zones végétatives au profit du béton.', pt: 'A cidade avança sobre as zonas vegetativas em favor do concreto.' },
  ],
  spéculatif: [
    { level: 'A2-B1', fr: 'Le marché immobilier devient spéculatif.', pt: 'O mercado imobiliário se torna especulativo.' },
    { level: 'B2', fr: 'L’achat spéculatif fait monter les prix du quartier.', pt: 'A compra especulativa faz subir os preços do bairro.' },
    { level: 'C1-C2', fr: 'La pression spéculative menace les habitants modestes.', pt: 'A pressão especulativa ameaça os moradores modestos.' },
  ],
  descriptif: [
    { level: 'A1', fr: 'Le texte est descriptif et simple.', pt: 'O texto é descritivo e simples.' },
    { level: 'A2-B1', fr: 'Le guide donne un passage descriptif du quartier.', pt: 'O guia traz uma passagem descritiva do bairro.' },
    { level: 'B2', fr: 'Le rapport descriptif manque d’analyses.', pt: 'O relatório descritivo falta de análises.' },
    { level: 'C1-C2', fr: 'Un style trop descriptif peut fatiguer le lecteur.', pt: 'Um estilo muito descritivo pode cansar o leitor.' },
  ],
  inclusif: [
    { level: 'A2-B1', fr: 'Le parc propose un espace inclusif.', pt: 'O parque oferece um espaço inclusivo.' },
    { level: 'B2', fr: 'La ville veut des transports plus inclusifs.', pt: 'A cidade quer transportes mais inclusivos.' },
    { level: 'C1-C2', fr: 'Un urbanisme inclusif pense à tous les âges.', pt: 'Um urbanismo inclusivo pensa em todas as idades.' },
  ],
  commémoratif: [
    { level: 'A1', fr: 'Le monument commémoratif est au centre.', pt: 'O monumento comemorativo fica no centro.' },
    { level: 'A2-B1', fr: 'Une plaque commémorative rappelle l’événement.', pt: 'Uma placa comemorativa lembra o acontecimento.' },
    { level: 'B2', fr: 'La cérémonie commémorative attire chaque année.', pt: 'A cerimônia comemorativa atrai todos os anos.' },
    { level: 'C1-C2', fr: 'Le récit commémoratif construit la mémoire collective.', pt: 'O relato comemorativo constrói a memória coletiva.' },
  ],
  hermétique: [
    { level: 'A1', fr: 'Le pot est hermétique.', pt: 'O pote é hermético.' },
    { level: 'A2-B1', fr: 'Le texte reste hermétique pour les débutants.', pt: 'O texto permanece hermético para os iniciantes.' },
    { level: 'B2', fr: 'Son style hermétique divise les critiques.', pt: 'Seu estilo hermético divide os críticos.' },
    { level: 'C1-C2', fr: 'Une œuvre trop hermétique risque de perdre son public.', pt: 'Uma obra muito hermética corre o risco de perder seu público.' },
  ],
  haussmannien: [
    { level: 'A2-B1', fr: 'L’immeuble haussmannien a six étages.', pt: 'O prédio haussmanniano tem seis andares.' },
    { level: 'B2', fr: 'Les façades haussmanniennes bordent le boulevard.', pt: 'As fachadas haussmannianas margeiam o bulevar.' },
    { level: 'C1-C2', fr: 'Le plan haussmannien a redessiné la capitale.', pt: 'O plano haussmanniano redesenhou a capital.' },
  ],
};
