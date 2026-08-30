// Curadoria de exemplos — Bordeaux (lote 15, fechamento do backlog de cliques)
// 4 exemplos progressivos A1→C2 por termo.
export const BORDEAUX_BACKLOG_EXAMPLES_15: Record<string, { level: string; fr: string; pt: string }[]> = {
  apprendre: [
    { level: 'A1', fr: "J'apprends le français.", pt: 'Eu aprendo francês.' },
    { level: 'A2', fr: 'Elle apprend à faire du vélo.', pt: 'Ela aprende a andar de bicicleta.' },
    { level: 'B1', fr: 'On apprend beaucoup en voyageant.', pt: 'Aprende-se muito viajando.' },
    { level: 'C1', fr: 'La dégustation est un art qui s\'apprend.', pt: 'A degustação é uma arte que se aprende.' },
  ],
  // Formas conjugadas nos textos ("Bordeaux m'apprend", "un art qui s'apprend") —
  // o audit resolve o termo pela forma do texto, então curar a forma também.
  apprend: [
    { level: 'A1', fr: "Il apprend vite.", pt: 'Ele aprende rápido.' },
    { level: 'A2', fr: "Bordeaux m'apprend le goût des belles choses.", pt: 'Bordeaux me ensina o gosto das coisas bonitas.' },
    { level: 'B1', fr: "Chaque voyage nous apprend quelque chose de nouveau.", pt: 'Cada viagem nos ensina algo novo.' },
    { level: 'C1', fr: "Ce qui s'apprend avec patience ne s'oublie jamais.", pt: 'O que se aprende com paciência nunca se esquece.' },
  ],
};
