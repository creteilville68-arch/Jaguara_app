export interface BankExample {
  level: string;
  fr: string;
  pt: string;
}

const ARTICLE_PREFIX = /^(?:le|la|les|l'|un|une)\s/i;
const ADVERB_SUFFIX = /ment$/i;
const REFLEXIVE_PREFIX = /^(?:s'|se\s)/i;
const VERB_SUFFIX = /(?:er|ir|re)$/i;
const VERB_PHRASES = new Set([
  "être d'accord",
  "changer d'avis",
  'déclarer ses revenus',
  'laisser un message',
  'rétracter ses propos',
]);

function clean(value: string): string {
  return value.trim().replace(/[’ʼ‘]/g, "'");
}

function capitalize(value: string): string {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

function isVerb(term: string): boolean {
  const lower = term.toLowerCase();
  return VERB_PHRASES.has(lower) || REFLEXIVE_PREFIX.test(lower) || VERB_SUFFIX.test(lower);
}

function isNounPhrase(term: string): boolean {
  return ARTICLE_PREFIX.test(term);
}

function reflexiveForSubject(term: string, subject: 'nous' | 'elle'): string {
  const lower = term.toLowerCase();
  if (lower.startsWith("s'")) return `${subject === 'nous' ? 'nous' : 'se'} ${term.slice(2)}`;
  if (lower.startsWith('se ')) return `${subject === 'nous' ? 'nous' : 'se'} ${term.slice(3)}`;
  return term;
}

/**
 * Produces examples only for a known bank term. The sentences are intentionally
 * ordinary situations so a missing manual entry still opens a useful study modal.
 */
export function generateBankExamples(term: string, definitionPt: string): BankExample[] {
  const frTerm = clean(term);
  const ptTerm = clean(definitionPt).replace(/^o |^a |^os |^as |^um |^uma /i, '');

  if (isVerb(frTerm)) {
    const nousVerb = reflexiveForSubject(frTerm, 'nous');
    const elleVerb = reflexiveForSubject(frTerm, 'elle');
    return [
      {
        level: 'A1',
        fr: `Pour avancer, il faut ${frTerm}.`,
        pt: `Para avançar, é preciso ${ptTerm}.`,
      },
      {
        level: 'A2-B1',
        fr: `Nous allons ${nousVerb} avant de partir.`,
        pt: `Nós vamos ${ptTerm} antes de partir.`,
      },
      {
        level: 'B2',
        fr: `Elle a décidé de ${elleVerb} afin de mieux organiser sa journée.`,
        pt: `Ela decidiu ${ptTerm} para organizar melhor o dia dela.`,
      },
      {
        level: 'C1-C2',
        fr: `La possibilité de ${frTerm} transforme la manière dont une ville répond à ses habitants.`,
        pt: `A possibilidade de ${ptTerm} transforma a maneira como uma cidade responde aos seus moradores.`,
      },
    ];
  }

  if (isNounPhrase(frTerm)) {
    return [
      {
        level: 'A1',
        fr: `On parle de ${frTerm} dans la vie quotidienne.`,
        pt: `Fala-se de ${definitionPt} no cotidiano.`,
      },
      {
        level: 'A2-B1',
        fr: `Les habitants comprennent l'importance de ${frTerm}.`,
        pt: `Os moradores compreendem a importância de ${definitionPt}.`,
      },
      {
        level: 'B2',
        fr: `La ville doit préserver ${frTerm} pour les générations futures.`,
        pt: `A cidade deve preservar ${definitionPt} para as próximas gerações.`,
      },
      {
        level: 'C1-C2',
        fr: `La relation entre ${frTerm} et la vie collective mérite une réflexion approfondie.`,
        pt: `A relação entre ${definitionPt} e a vida coletiva merece uma reflexão aprofundada.`,
      },
    ];
  }

  if (ADVERB_SUFFIX.test(frTerm)) {
    return [
      {
        level: 'A1',
        fr: `Nous avançons ${frTerm} dans la rue.`,
        pt: `Nós avançamos ${ptTerm} pela rua.`,
      },
      {
        level: 'A2-B1',
        fr: `Elle répond ${frTerm} aux messages de son équipe.`,
        pt: `Ela responde ${ptTerm} às mensagens da equipe.`,
      },
      {
        level: 'B2',
        fr: `Le service fonctionne ${frTerm}, même pendant les périodes chargées.`,
        pt: `O serviço funciona ${ptTerm}, mesmo durante os períodos movimentados.`,
      },
      {
        level: 'C1-C2',
        fr: `La mesure est appliquée ${frTerm} afin de préserver la confiance du public.`,
        pt: `A medida é aplicada ${ptTerm} para preservar a confiança do público.`,
      },
    ];
  }

  return [
    {
      level: 'A1',
      fr: `Le résultat est ${frTerm}.`,
      pt: `O resultado é ${ptTerm}.`,
    },
    {
      level: 'A2-B1',
      fr: `Le résultat paraît ${frTerm} dans cette situation.`,
      pt: `O resultado parece ${ptTerm} nessa situação.`,
    },
    {
      level: 'B2',
      fr: `Ce phénomène reste ${frTerm} malgré les changements du quartier.`,
      pt: `Esse fenômeno continua ${ptTerm} apesar das mudanças no bairro.`,
    },
    {
      level: 'C1-C2',
      fr: `Dans ce contexte, le choix demeure ${frTerm} et mérite d'être expliqué.`,
      pt: `Nesse contexto, a escolha continua ${ptTerm} e merece ser explicada.`,
    },
  ];
}
