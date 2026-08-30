/**
 * Curadoria dos adjetivos da enciclopédia de Paris que aparecem no texto das
 * guias. As formas femininas (-ive / -ives) resolvem para o masculino via a
 * regra de derivação do banco; este módulo garante os 4 exemplos curados de
 * cada lema (A1 → C1-C2), em frases reais e naturais.
 */
export const PARIS_ADJECTIVES_EXAMPLES: Record<string, { level: string; fr: string; pt: string }[]> = {
  hermétique: [
    { level: 'A1', fr: 'Le pot est hermétique, l’eau ne sort pas.', pt: 'O pote é hermético, a água não sai.' },
    { level: 'A2-B1', fr: 'Ce discours reste hermétique pour les débutants.', pt: 'Este discurso permanece hermético para os iniciantes.' },
    { level: 'B2', fr: 'Une œuvre hermétique exige souvent plusieurs lectures.', pt: 'Uma obra hermética exige muitas vezes várias leituras.' },
    { level: 'C1-C2', fr: 'Son style, volontairement hermétique, déroute la critique.', pt: 'Seu estilo, voluntariamente hermético, desconcerta a crítica.' },
  ],
  commémoratif: [
    { level: 'A1', fr: 'Une plaque commémorative rappelle cet événement.', pt: 'Uma placa comemorativa lembra este evento.' },
    { level: 'A2-B1', fr: 'La ville a organisé une cérémonie commémorative.', pt: 'A cidade organizou uma cerimônia comemorativa.' },
    { level: 'B2', fr: 'Le monument commémoratif honore la mémoire des victimes.', pt: 'O monumento comemorativo honra a memória das vítimas.' },
    { level: 'C1-C2', fr: 'Ce geste commémoratif dépasse l’hommage : il fonde une mémoire commune.', pt: 'Este gesto comemorativo vai além da homenagem: ele funda uma memória comum.' },
  ],
  spéculatif: [
    { level: 'A1', fr: 'Ce placement est très spéculatif.', pt: 'Este investimento é muito especulativo.' },
    { level: 'A2-B1', fr: 'Le marché spéculatif monte très vite.', pt: 'O mercado especulativo sobe muito rápido.' },
    { level: 'B2', fr: 'La valeur spéculative des œuvres inquiète les musées.', pt: 'O valor especulativo das obras preocupa os museus.' },
    { level: 'C1-C2', fr: 'Une logique purement spéculative finit par déconnecter les prix de la réalité.', pt: 'Uma lógica puramente especulativa acaba desconectando os preços da realidade.' },
  ],
  végétatif: [
    { level: 'A1', fr: 'La plante est en période végétative.', pt: 'A planta está em período vegetativo.' },
    { level: 'A2-B1', fr: 'Le patient vit dans un état végétatif.', pt: 'O paciente vive em estado vegetativo.' },
    { level: 'B2', fr: 'Le toit végétatif rafraîchit l’immeuble en été.', pt: 'O telhado vegetal refresca o prédio no verão.' },
    { level: 'C1-C2', fr: 'La question de prolonger une vie végétative divise les médecins.', pt: 'A questão de prolongar uma vida vegetativa divide os médicos.' },
  ],
  descriptif: [
    { level: 'A1', fr: 'Le texte est très descriptif.', pt: 'O texto é muito descritivo.' },
    { level: 'A2-B1', fr: 'La notice descriptive explique le fonctionnement.', pt: 'A ficha descritiva explica o funcionamento.' },
    { level: 'B2', fr: 'Certains romans restent attachés à une écriture descriptive.', pt: 'Alguns romances permanecem ligados a uma escrita descritiva.' },
    { level: 'C1-C2', fr: 'Au-delà du récit descriptif, l’auteur livre une réflexion profonde.', pt: 'Além do relato descritivo, o autor entrega uma reflexão profunda.' },
  ],
  inclusif: [
    { level: 'A1', fr: 'Le quartier veut être inclusif.', pt: 'O bairro quer ser inclusivo.' },
    { level: 'A2-B1', fr: 'Une école inclusive accueille tous les enfants.', pt: 'Uma escola inclusiva acolhe todas as crianças.' },
    { level: 'B2', fr: 'La ville développe des espaces publics inclusifs.', pt: 'A cidade desenvolve espaços públicos inclusivos.' },
    { level: 'C1-C2', fr: 'Un urbanisme inclusif suppose de penser l’espace pour tous les usages.', pt: 'Um urbanismo inclusivo supõe pensar o espaço para todos os usos.' },
  ],
  // Expressões de alta frequência cujos tokens são fundidos pelo tokenizador.
  après: [
    { level: 'A1', fr: 'Après le travail, je vais au marché.', pt: 'Depois do trabalho, eu vou ao mercado.' },
    { level: 'A2-B1', fr: 'Nous partons après le déjeuner.', pt: 'Nós partimos depois do almoço.' },
    { level: 'B2', fr: 'Après la rénovation, le quartier a changé.', pt: 'Depois da reforma, o bairro mudou.' },
    { level: 'C1-C2', fr: 'Après des années de débats, la ville a enfin tranché.', pt: 'Depois de anos de debates, a cidade enfim decidiu.' },
  ],
  'tout à fait': [
    { level: 'A1', fr: 'Tu as compris ? Oui, tout à fait.', pt: 'Você entendeu? Sim, totalmente.' },
    { level: 'A2-B1', fr: 'Ce quartier est tout à fait charmant.', pt: 'Este bairro é totalmente charmoso.' },
    { level: 'B2', fr: 'Son explication n’est pas tout à fait exacte.', pt: 'A explicação dele não é totalmente exata.' },
    { level: 'C1-C2', fr: 'Un présupposé n’est jamais tout à fait vérifiable.', pt: 'Um pressuposto nunca é totalmente verificável.' },
  ],
  'tout le monde': [
    { level: 'A1', fr: 'Tout le monde est invité à la fête.', pt: 'Todo mundo está convidado para a festa.' },
    { level: 'A2-B1', fr: 'Tout le monde connaît cette place.', pt: 'Todo mundo conhece esta praça.' },
    { level: 'B2', fr: 'Le musée attire tout le monde, petits et grands.', pt: 'O museu atrai todo mundo, pequenos e grandes.' },
    { level: 'C1-C2', fr: 'Tout le monde s’accorde à dire que la ville a changé.', pt: 'Todos concordam em dizer que a cidade mudou.' },
  ],
};
