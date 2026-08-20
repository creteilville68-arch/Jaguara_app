/**
 * Curadoria complementar de exemplos para o backlog de Nice.
 *
 * Regra de ouro nº 13: toda palavra pontilhada tem 4 exemplos progressivos
 * (A1 → A2-B1 → B2 → C1-C2). Estas entradas completam as palavras do banco CEFR
 * que aparecem nas aulas de Nice e ainda não tinham os 4 exemplos.
 *
 * `masterExamplesFor` une este mapa aos demais, dando prioridade a estes
 * exemplos curados sobre qualquer entrada parcial do dicionário comum.
 */
import type { MasterExample } from './masterExamplesDictionary';

export const NICE_BACKLOG_EXAMPLES: Record<string, MasterExample[]> = {
  critique: [
    { level: 'A1', fr: 'Il est critique envers tout.', pt: 'Ele é crítico com tudo.' },
    { level: 'A2-B1', fr: 'Les critiques du film sont très bonnes.', pt: 'As críticas do filme são muito boas.' },
    { level: 'B2', fr: 'Le critique gastronomique goûte chaque plat avant d’écrire son article.', pt: 'O crítico gastronômico prova cada prato antes de escrever seu artigo.' },
    { level: 'C1-C2', fr: 'C’est dans l’œil du critique que l’œuvre se révèle, non dans son intention.', pt: 'É no olhar do crítico que a obra se revela, não em sua intenção.' },
  ],
  amphithéâtre: [
    { level: 'A1', fr: 'L’amphithéâtre est ancien.', pt: 'O anfiteatro é antigo.' },
    { level: 'A2-B1', fr: 'Les étudiants écoutent le cours dans l’amphithéâtre.', pt: 'Os estudantes ouvem a aula no anfiteatro.' },
    { level: 'B2', fr: 'Vu de la mer, Nice se déploie comme un amphithéâtre de lumière posé entre le ciel et l’eau.', pt: 'Vista do mar, Nice se desdobra como um anfiteatro de luz posto entre o céu e a água.' },
    { level: 'C1-C2', fr: 'C’est en amphithéâtre que la ville grimpe vers les collines, rangée après rangée, comme un public assis face à la mer.', pt: 'É em anfiteatro que a cidade sobe em direção às colinas, fileira após fileira, como uma plateia sentada diante do mar.' },
  ],
  crépuscule: [
    { level: 'A1', fr: 'Le crépuscule arrive tôt en hiver.', pt: 'O crepúsculo chega cedo no inverno.' },
    { level: 'A2-B1', fr: 'Nous marchons sur la plage au crépuscule.', pt: 'Caminhamos na praia ao crepúsculo.' },
    { level: 'B2', fr: 'Au crépuscule, la lumière dorée enveloppe la promenade avant que la nuit ne tombe.', pt: 'Ao crepúsculo, a luz dourada envolve a promenade antes que a noite caia.' },
    { level: 'C1-C2', fr: 'C’est au crépuscule que la baie révèle sa vraie couleur, entre la fin du jour et la promesse de la nuit.', pt: 'É ao crepúsculo que a baía revela sua verdadeira cor, entre o fim do dia e a promessa da noite.' },
  ],
  "l'harmonie": [
    { level: 'A1', fr: 'J’aime l’harmonie des couleurs.', pt: 'Gosto da harmonia das cores.' },
    { level: 'A2-B1', fr: 'L’harmonie de ce quartier me plaît beaucoup.', pt: 'A harmonia deste bairro me agrada muito.' },
    { level: 'B2', fr: 'L’harmonie entre les deux rives de la Méditerranée se lit dans la cuisine et dans la langue.', pt: 'A harmonia entre as duas margens do Mediterrâneo se lê na cozinha e na língua.' },
    { level: 'C1-C2', fr: 'Dans votre histoire, la consonance l’emporte sur la dissonance : vous avez trouvé l’harmonie.', pt: 'Na sua história, a consonância vence a dissonância: você encontrou a harmonia.' },
  ],
  exigence: [
    { level: 'A1', fr: 'Il fait son travail avec exigence.', pt: 'Ele faz seu trabalho com exigência.' },
    { level: 'A2-B1', fr: 'Son exigence envers elle-même impressionne tout le monde.', pt: 'Sua exigência consigo mesma impressiona todo mundo.' },
    { level: 'B2', fr: 'L’exigence du métier de géographe demande une précision constante.', pt: 'A exigência da profissão de geógrafo exige uma precisão constante.' },
    { level: 'C1-C2', fr: 'C’est dans l’exigence que naît la beauté des cartes, comme celle des grandes œuvres.', pt: 'É na exigência que nasce a beleza dos mapas, como a das grandes obras.' },
  ],
  lustre: [
    { level: 'A1', fr: 'Le lustre du salon est doré.', pt: 'O lustre da sala é dourado.' },
    { level: 'A2-B1', fr: 'Le lustre de cristal brille de mille feux.', pt: 'O lustre de cristal brilha com mil luzes.' },
    { level: 'B2', fr: 'Le vieux lustre, restauré, éclaire à nouveau la grande salle.', pt: 'O velho lustre, restaurado, volta a iluminar o grande salão.' },
    { level: 'C1-C2', fr: 'Sous le lustre de cristal, le temps semblait suspendu, comme une promesse de la Belle Époque.', pt: 'Sob o lustre de cristal, o tempo parecia suspenso, como uma promessa da Belle Époque.' },
  ],
  onze: [
    { level: 'A1', fr: 'Il a onze ans.', pt: 'Ele tem onze anos.' },
    { level: 'A2-B1', fr: 'Le train part à onze heures.', pt: 'O trem parte às onze horas.' },
    { level: 'B2', fr: 'Après avoir traversé onze villes, il savait que la maison pouvait être partout.', pt: 'Depois de ter atravessado onze cidades, ele sabia que a casa podia estar em qualquer lugar.' },
    { level: 'C1-C2', fr: 'Ce sont onze étapes qui, mises bout à bout, ont dessiné la carte d’une vie.', pt: 'São onze etapas que, postas lado a lado, desenharam o mapa de uma vida.' },
  ],
  logique: [
    { level: 'A1', fr: 'C’est logique, j’ai compris.', pt: 'É lógico, eu entendi.' },
    { level: 'A2-B1', fr: 'Suivre les étapes dans l’ordre, c’est plus logique.', pt: 'Seguir as etapas na ordem é mais lógico.' },
    { level: 'B2', fr: 'Pour Irlan, la rencontre n’était pas un hasard, mais une suite logique de la route.', pt: 'Para Irlan, o encontro não era acaso, mas uma sequência lógica da rota.' },
    { level: 'C1-C2', fr: 'C’est dans la logique des générations que la page blanche trouve enfin sa réponse.', pt: 'É na lógica das gerações que a página em branco encontra enfim sua resposta.' },
  ],
  correspondances: [
    { level: 'A1', fr: 'La correspondance est rapide.', pt: 'A baldeação é rápida.' },
    { level: 'A2-B1', fr: 'Nous prenons la correspondance à la station suivante.', pt: 'Pegamos a baldeação na próxima estação.' },
    { level: 'B2', fr: 'Sur le plan du métro, les correspondances relient les lignes entre elles.', pt: 'No mapa do metrô, as baldeações conectam as linhas entre si.' },
    { level: 'C1-C2', fr: 'Ce sont les correspondances du plan qui, invisibles au premier regard, dessinent le vrai visage de la ville.', pt: 'São as baldeações do mapa que, invisíveis ao primeiro olhar, desenham o verdadeiro rosto da cidade.' },
  ],
};
