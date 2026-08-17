import { DictionaryEntry } from '../utils/textParser';

export const COMMON_EXPRESSIONS: Record<string, Omit<DictionaryEntry, 'term'>> = {
  "s'il vous plaît": {
    "wordFr": "s'il vous plaît",
    "definitionPt": "por favor (formal/plural)",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Un café, s'il vous plaît.",
        "pt": "Um café, por favor."
      },
      {
        "level": "A2",
        "fr": "Pourriez-vous répéter, s'il vous plaît ?",
        "pt": "Poderia repetir, por favor?"
      },
      {
        "level": "B1-B2",
        "fr": "Veuillez trouver ci-joint les documents demandés, s'il vous plaît.",
        "pt": "Por favor, encontre em anexo os documentos solicitados."
      },
      {
        "level": "C1-C2",
        "fr": "Auriez-vous l'obligeance de bien vouloir examiner ce dossier, s'il vous plaît ?",
        "pt": "Teria a gentileza de examinar este processo, por favor?"
      }
    ]
  },
  "s'il te plaît": {
    "wordFr": "s'il te plaît",
    "definitionPt": "por favor (informal)",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Donne-moi le livre, s'il te plaît.",
        "pt": "Me dá o livro, por favor."
      },
      {
        "level": "A2",
        "fr": "Aide-moi avec ces valises, s'il te plaît.",
        "pt": "Me ajuda com estas malas, por favor."
      },
      {
        "level": "B1-B2",
        "fr": "Dis-moi la vérité, s'il te plaît, sans rien cacher.",
        "pt": "Me diga a verdade, por favor, sem esconder nada."
      },
      {
        "level": "C1-C2",
        "fr": "Tâche de ne pas répéter cette erreur, s'il te plaît.",
        "pt": "Esforce-se para não repetir este erro, por favor."
      }
    ]
  },
  "bien sûr": {
    "wordFr": "bien sûr",
    "definitionPt": "claro / certamente",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Oui, bien sûr.",
        "pt": "Sim, com certeza."
      },
      {
        "level": "A2",
        "fr": "Bien sûr, je viens avec toi.",
        "pt": "Claro, eu vou com você."
      },
      {
        "level": "B1-B2",
        "fr": "Bien sûr qu'il y a des risques, mais il faut tenter le coup.",
        "pt": "É claro que há riscos, mas é preciso tentar."
      },
      {
        "level": "C1-C2",
        "fr": "Il va de soi que, bien sûr, l'intégrité de la recherche doit primer.",
        "pt": "É evidente que, naturalmente, a integridade da pesquisa deve prevalecer."
      }
    ]
  },
  "tout à fait": {
    "wordFr": "tout à fait",
    "definitionPt": "exatamente / perfeitamente",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Tout à fait !",
        "pt": "Exatamente!"
      },
      {
        "level": "A2",
        "fr": "Je suis tout à fait d'accord avec toi.",
        "pt": "Eu concordo plenamente com você."
      },
      {
        "level": "B1-B2",
        "fr": "Cette situation est tout à fait inacceptable.",
        "pt": "Esta situação é totalmente inaceitável."
      },
      {
        "level": "C1-C2",
        "fr": "Sa réaction illustre tout à fait la complexité du problème.",
        "pt": "A reação dele ilustra perfeitamente a complexidade do problema."
      }
    ]
  },
  "c'est-à-dire": {
    "wordFr": "c'est-à-dire",
    "definitionPt": "ou seja / quer dizer",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Je suis étudiant, c'est-à-dire j'étudie à l'université.",
        "pt": "Sou estudante, ou seja, estudo na universidade."
      },
      {
        "level": "A2",
        "fr": "J'adore l'été, c'est-à-dire les mois de juillet et août.",
        "pt": "Eu adoro o verão, quer dizer, os meses de julho e agosto."
      },
      {
        "level": "B1-B2",
        "fr": "Le projet est suspendu, c'est-à-dire que nous devons attendre de nouvelles instructions.",
        "pt": "O projeto está suspenso, ou seja, devemos esperar novas instruções."
      },
      {
        "level": "C1-C2",
        "fr": "Le paradigme a changé, c'est-à-dire que nos fondements théoriques ont été ébranlés.",
        "pt": "O paradigma mudou, isto é, nossos fundamentos teóricos foram abalados."
      }
    ]
  },
  "parce que": {
    "wordFr": "parce que",
    "definitionPt": "porque",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Je reste à la maison parce que je suis fatigué.",
        "pt": "Fico em casa porque estou cansado."
      },
      {
        "level": "A2",
        "fr": "Nous ne pouvons pas sortir parce qu'il pleut.",
        "pt": "Não podemos sair porque está chovendo."
      },
      {
        "level": "B1-B2",
        "fr": "Il a réussi son examen parce qu'il a beaucoup travaillé.",
        "pt": "Ele passou no exame porque trabalhou muito."
      },
      {
        "level": "C1-C2",
        "fr": "L'économie s'est contractée, non pas parce que la demande a chuté, mais parce que l'offre était restreinte.",
        "pt": "A economia se contraiu, não porque a demanda caiu, mas porque a oferta era restrita."
      }
    ]
  },
  "en fait": {
    "wordFr": "en fait",
    "definitionPt": "na verdade / de fato",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "En fait, je préfère le thé.",
        "pt": "Na verdade, prefiro chá."
      },
      {
        "level": "A2",
        "fr": "Je pensais qu'il venait, mais en fait il est resté chez lui.",
        "pt": "Eu achava que ele viria, mas na verdade ele ficou em casa."
      },
      {
        "level": "B1-B2",
        "fr": "Ce n'est pas si difficile ; en fait, c'est même assez simple.",
        "pt": "Não é tão difícil; na verdade, é até bastante simples."
      },
      {
        "level": "C1-C2",
        "fr": "En fait de solution pérenne, il ne s'agit que d'un palliatif temporaire.",
        "pt": "Em vez de uma solução duradoura, trata-se apenas de um paliativo temporário."
      }
    ]
  },
  "quand même": {
    "wordFr": "quand même",
    "definitionPt": "mesmo assim / de qualquer forma",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "C'est cher, mais je l'achète quand même.",
        "pt": "É caro, mas eu compro mesmo assim."
      },
      {
        "level": "A2",
        "fr": "Il fait froid, mais il sort quand même.",
        "pt": "Faz frio, mas ele sai mesmo assim."
      },
      {
        "level": "B1-B2",
        "fr": "Tu aurais quand même pu me prévenir !",
        "pt": "Você bem que poderia ter me avisado!"
      },
      {
        "level": "C1-C2",
        "fr": "Malgré les objections, la mesure a quand même été adoptée.",
        "pt": "Apesar das objeções, a medida foi adotada de qualquer forma."
      }
    ]
  },
  "au revoir": {
    "wordFr": "au revoir",
    "definitionPt": "até logo / tchau",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Au revoir, à demain !",
        "pt": "Adeus, até amanhã!"
      },
      {
        "level": "A2",
        "fr": "Au revoir madame, bonne journée.",
        "pt": "Tchau, senhora, tenha um bom dia."
      },
      {
        "level": "B1-B2",
        "fr": "Je vous dis au revoir en espérant vous revoir très bientôt.",
        "pt": "Me despeço de você esperando revê-lo muito em breve."
      },
      {
        "level": "C1-C2",
        "fr": "Sur ces mots, je vous souhaite une excellente continuation et vous dis au revoir.",
        "pt": "Com estas palavras, desejo-lhe uma excelente continuação e despeço-me."
      }
    ]
  },
  "bonjour": {
    "wordFr": "bonjour",
    "definitionPt": "bom dia / olá",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Bonjour, comment ça va ?",
        "pt": "Bom dia, como vai?"
      },
      {
        "level": "A2",
        "fr": "Bonjour tout le monde !",
        "pt": "Olá a todos!"
      },
      {
        "level": "B1-B2",
        "fr": "Bonjour monsieur le directeur, j'aimerais vous parler.",
        "pt": "Bom dia, senhor diretor, eu gostaria de falar com o senhor."
      },
      {
        "level": "C1-C2",
        "fr": "Il est entré sans un bonjour, affichant un mépris ostentatoire.",
        "pt": "Ele entrou sem um olá, exibindo um desprezo ostensivo."
      }
    ]
  },
  "bonne nuit": {
    "wordFr": "bonne nuit",
    "definitionPt": "boa noite",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Bonne nuit, maman.",
        "pt": "Boa noite, mãe."
      },
      {
        "level": "A2",
        "fr": "Bonne nuit, fais de beaux rêves.",
        "pt": "Boa noite, tenha belos sonhos."
      },
      {
        "level": "B1-B2",
        "fr": "Je te souhaite une douce et paisible bonne nuit.",
        "pt": "Desejo-lhe uma boa noite doce e tranquila."
      },
      {
        "level": "C1-C2",
        "fr": "Sur ces mots, je vous souhaite à tous une excellente et reposante bonne nuit.",
        "pt": "Com estas palavras, desejo a todos uma excelente e repousante boa noite."
      }
    ]
  },
  "bonsoir": {
    "wordFr": "bonsoir",
    "definitionPt": "boa noite (chegada)",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Bonsoir, monsieur.",
        "pt": "Boa noite, senhor."
      },
      {
        "level": "A2",
        "fr": "Bonsoir, comment allez-vous ce soir ?",
        "pt": "Boa noite, como você está esta noite?"
      },
      {
        "level": "B1-B2",
        "fr": "Bonsoir à tous et bienvenue à cette conférence.",
        "pt": "Boa noite a todos e bem-vindos a esta conferência."
      },
      {
        "level": "C1-C2",
        "fr": "Bonsoir mesdames et messieurs, and thank you for gracing us with your presence.",
        "pt": "Boa noite, senhoras e senhores, e obrigado por nos honrarem com sua presença."
      }
    ]
  },
  "à bientôt": {
    "wordFr": "à bientôt",
    "definitionPt": "até breve",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "À bientôt !",
        "pt": "Até logo!"
      },
      {
        "level": "A2",
        "fr": "À bientôt, on se voit la semaine prochaine.",
        "pt": "Até breve, nos vemos na semana que vem."
      },
      {
        "level": "B1-B2",
        "fr": "Espérant te revoir très vite, disons à bientôt.",
        "pt": "Esperando rever você muito em breve, digamos até logo."
      },
      {
        "level": "C1-C2",
        "fr": "En inんですよね que ce ne soit qu'un au revoir, je vous dis simplement à bientôt.",
        "pt": "Na expectativa de que isto seja apenas um até logo, digo-lhe simplesmente até breve."
      }
    ]
  },
  "à plus tard": {
    "wordFr": "à plus tard",
    "definitionPt": "até mais tarde",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "À plus tard !",
        "pt": "Até mais tarde!"
      },
      {
        "level": "A2",
        "fr": "Je dois partir, on se rappelle à plus tard.",
        "pt": "Eu tenho que ir, ligamos um para o outro mais tarde."
      },
      {
        "level": "B1-B2",
        "fr": "Laisse les dossiers sur mon bureau, on en discute à plus tard.",
        "pt": "Deixe os dossiês na minha mesa, discutimos isso mais tarde."
      },
      {
        "level": "C1-C2",
        "fr": "Remettons cette controverse à plus tard, l'heure est à l'action.",
        "pt": "Adiemos esta controvérsia para mais tarde, o momento é de ação."
      }
    ]
  },
  "à tout à l'heure": {
    "wordFr": "à tout à l'heure",
    "definitionPt": "até logo mais",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "À tout à l'heure !",
        "pt": "Até daqui a pouco!"
      },
      {
        "level": "A2",
        "fr": "À tout à l'heure au café du coin.",
        "pt": "Até logo no café da esquina."
      },
      {
        "level": "B1-B2",
        "fr": "Je finis mes courses et je te rejoins, à tout à l'heure.",
        "pt": "Termino minhas compras e me encontro com você, até daqui a pouco."
      },
      {
        "level": "C1-C2",
        "fr": "Consignons cette idée par écrit et reprenons le débat à tout à l'heure.",
        "pt": "Registremos esta ideia por escrito e retomemos o debate logo mais."
      }
    ]
  },
  "d'accord": {
    "wordFr": "d'accord",
    "definitionPt": "de acordo / ok",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "D'accord, c'est parti.",
        "pt": "De acordo, vamos lá."
      },
      {
        "level": "A2",
        "fr": "D'accord, je veux bien t'aider.",
        "pt": "Tá bom, eu quero te ajudar."
      },
      {
        "level": "B1-B2",
        "fr": "D'accord sur le principe, mais il reste des détails à régler.",
        "pt": "De acordo quanto ao princípio, mas ainda há detalhes a resolver."
      },
      {
        "level": "C1-C2",
        "fr": "D'accord pour concéder ce point, pour autant que vous acceptiez notre contre-proposition.",
        "pt": "De acordo em conceder este ponto, desde que aceitem nossa contraproposta."
      }
    ]
  },
  "ça va": {
    "wordFr": "ça va",
    "definitionPt": "tudo bem / vai bem",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Ça va, et toi ?",
        "pt": "Tudo bem, e você?"
      },
      {
        "level": "A2",
        "fr": "Ça va bien, merci beaucoup.",
        "pt": "Tudo bem, muito obrigado."
      },
      {
        "level": "B1-B2",
        "fr": "Malgré les difficultés de la semaine, ça va dans l'ensemble.",
        "pt": "Apesar das dificuldades da semana, vai tudo bem no geral."
      },
      {
        "level": "C1-C2",
        "fr": "Considérant les circonstances macroéconomiques, on peut dire que ça va.",
        "pt": "Considerando as circunstâncias macroeconômicas, pode-se dizer que as coisas vão bem."
      }
    ]
  },
  "comme ci, comme ça": {
    "wordFr": "comme ci, comme ça",
    "definitionPt": "mais ou menos",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Comment ça va ? Comme ci, comme ça.",
        "pt": "Como vai? Mais ou menos."
      },
      {
        "level": "A2",
        "fr": "Mon examen s'est passé comme ci, comme ça.",
        "pt": "Minha prova foi mais ou menos."
      },
      {
        "level": "B1-B2",
        "fr": "Les résultats de l'entreprise ce trimestre sont comme ci, comme ça.",
        "pt": "Os resultados da empresa neste trimestre estão mais ou menos."
      },
      {
        "level": "C1-C2",
        "fr": "Qualifier cette performance artistique de « comme ci, comme ça » serait faire preuve d'un eurythmie bienveillante.",
        "pt": "Qualificar esta performance artística como \"mais ou menos\" seria demonstrar uma benevolência excessiva."
      }
    ]
  },
  "de rien": {
    "wordFr": "de rien",
    "definitionPt": "de nada",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Merci ! — De rien.",
        "pt": "Obrigado! — De nada."
      },
      {
        "level": "A2",
        "fr": "De rien, c'est tout naturel.",
        "pt": "De nada, é perfeitamente natural."
      },
      {
        "level": "B1-B2",
        "fr": "Il n'y a pas de quoi, de rien, c'était un plaisir de rendre service.",
        "pt": "Não há de quê, de nada, foi um prazer ajudar."
      },
      {
        "level": "C1-C2",
        "fr": "Ne faites point mention de ce service; c'est de rien.",
        "pt": "Não mencione este favor; não é nada."
      }
    ]
  },
  "je vous en prie": {
    "wordFr": "je vous en prie",
    "definitionPt": "de nada / não há de quê (formal)",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Merci beaucoup. — Je vous en prie.",
        "pt": "Muito obrigado. — Por favor (De nada)."
      },
      {
        "level": "A2",
        "fr": "Je vous en prie, entrez.",
        "pt": "Por favor, entre (fique à vontade)."
      },
      {
        "level": "B1-B2",
        "fr": "Je vous en prie, asseyez-vous et prenez le temps de réfléchir.",
        "pt": "Por favor, sente-se e tome o tempo necessário para refletir."
      },
      {
        "level": "C1-C2",
        "fr": "Je vous en prie, ne voyez là aucune formalité superflue.",
        "pt": "Por favor, não veja nisso nenhuma formalidade supérflua."
      }
    ]
  },
  "je t'en prie": {
    "wordFr": "je t'en prie",
    "definitionPt": "de nada (informal)",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Merci. - Je t'en prie.",
        "pt": "Obrigado. - De nada."
      }
    ]
  },
  "avec plaisir": {
    "wordFr": "avec plaisir",
    "definitionPt": "com prazer",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Puis-je vous aider ? Avec plaisir.",
        "pt": "Posso ajudá-lo? Com prazer."
      }
    ]
  },
  "pas du tout": {
    "wordFr": "pas du tout",
    "definitionPt": "de jeito nenhum / absolutamente não",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Tu es fatigué ? Pas du tout.",
        "pt": "Você está cansado? Absolutamente não."
      }
    ]
  },
  "pas de problème": {
    "wordFr": "pas de problème",
    "definitionPt": "sem problema",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Pas de problème, je m'en occupe.",
        "pt": "Sem problema, eu cuido disso."
      }
    ]
  },
  "bien sûr que non": {
    "wordFr": "bien sûr que non",
    "definitionPt": "claro que não",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Tu veux abandonner ? Bien sûr que non.",
        "pt": "Você quer desistir? Claro que não."
      }
    ]
  },
  "peut-être": {
    "wordFr": "peut-être",
    "definitionPt": "talvez",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Peut-être qu'il viendra demain.",
        "pt": "Talvez ele venha amanhã."
      }
    ]
  },
  "en effet": {
    "wordFr": "en effet",
    "definitionPt": "com efeito / de fato",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "En effet, c'est une excellente idée.",
        "pt": "De fato, é uma excelente ideia."
      }
    ]
  },
  "par contre": {
    "wordFr": "par contre",
    "definitionPt": "em compensação / por outro lado",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "C'est cher, par contre c'est très beau.",
        "pt": "É caro, em compensação é muito bonito."
      }
    ]
  },
  "en revanche": {
    "wordFr": "en revanche",
    "definitionPt": "em contrapartida / por outro lado",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B2",
        "fr": "Le projet est long, en revanche il est passionnant.",
        "pt": "O projeto é longo, em contrapartida é fascinante."
      }
    ]
  },
  "à propos": {
    "wordFr": "à propos",
    "definitionPt": "a propósito",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "À propos, avez-vous vu mon livre ?",
        "pt": "A propósito, vocês viram meu livro?"
      }
    ]
  },
  "d'ailleurs": {
    "wordFr": "d'ailleurs",
    "definitionPt": "aliás / além disso",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Je ne sais pas, d'ailleurs je m'en fiche.",
        "pt": "Eu não sei, aliás eu não me importo."
      }
    ]
  },
  "au fait": {
    "wordFr": "au fait",
    "definitionPt": "a propósito / por falar nisso",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Au fait, tu as appelé ton frère ?",
        "pt": "A propósito, você ligou para o seu irmão?"
      }
    ]
  },
  "par exemple": {
    "wordFr": "par exemple",
    "definitionPt": "por exemplo",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "J'aime les fruits, par exemple les pommes.",
        "pt": "Eu gosto de frutas, por exemplo, maçãs."
      }
    ]
  },
  "c'est ça": {
    "wordFr": "c'est ça",
    "definitionPt": "é isso aí / exato",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Tu as compris, c'est ça !",
        "pt": "Você entendeu, é isso aí!"
      }
    ]
  },
  "n'est-ce pas": {
    "wordFr": "n'est-ce pas",
    "definitionPt": "não é mesmo?",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Il fait beau aujourd'hui, n'est-ce pas ?",
        "pt": "O tempo está bom hoje, não é mesmo?"
      }
    ]
  },
  "un petit peu": {
    "wordFr": "un petit peu",
    "definitionPt": "um pouquinho",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Je parle un petit peu français.",
        "pt": "Eu falo um pouquinho de francês."
      }
    ]
  },
  "beaucoup de": {
    "wordFr": "beaucoup de",
    "definitionPt": "muito / muita",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Il y a beaucoup de monde ici.",
        "pt": "Há muita gente aqui."
      }
    ]
  },
  "trop de": {
    "wordFr": "trop de",
    "definitionPt": "demais / em excesso",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Il y a trop de bruit.",
        "pt": "Há muito barulho."
      }
    ]
  },
  "assez de": {
    "wordFr": "assez de",
    "definitionPt": "o suficiente de / bastante",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Nous avons assez de temps.",
        "pt": "Temos tempo suficiente."
      }
    ]
  },
  "peu de": {
    "wordFr": "peu de",
    "definitionPt": "pouco",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Il y a très peu de chances.",
        "pt": "Há muito poucas chances."
      }
    ]
  },
  "pas mal de": {
    "wordFr": "pas mal de",
    "definitionPt": "bastante / muitos",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "J'ai pas mal de travail.",
        "pt": "Eu tenho bastante trabalho."
      }
    ]
  },
  "tout le monde": {
    "wordFr": "tout le monde",
    "definitionPt": "todo mundo",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Bonjour tout le monde !",
        "pt": "Bom dia, todo mundo!"
      }
    ]
  },
  "tous les jours": {
    "wordFr": "tous les jours",
    "definitionPt": "todos os dias",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Je travaille tous les jours.",
        "pt": "Eu trabalho todos os dias."
      }
    ]
  },
  "de temps en temps": {
    "wordFr": "de temps en temps",
    "definitionPt": "de vez em quando",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Je lis de temps en temps.",
        "pt": "Eu leio de vez em quando."
      }
    ]
  },
  "en ce moment": {
    "wordFr": "en ce moment",
    "definitionPt": "neste momento",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Il pleut en ce moment.",
        "pt": "Está chovendo neste momento."
      }
    ]
  },
  "tout de suite": {
    "wordFr": "tout de suite",
    "definitionPt": "imediatamente",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Je viens tout de suite.",
        "pt": "Eu vou imediatamente."
      }
    ]
  },
  "plus tard": {
    "wordFr": "plus tard",
    "definitionPt": "mais tarde",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Nous verrons ça plus tard.",
        "pt": "Veremos isso mais tarde."
      }
    ]
  },
  "à côté de": {
    "wordFr": "à côté de",
    "definitionPt": "ao lado de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "La banque est à côté de la poste.",
        "pt": "O banco fica ao lado dos correios."
      }
    ]
  },
  "en face de": {
    "wordFr": "en face de",
    "definitionPt": "em frente de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Il habite en face de l'école.",
        "pt": "Ele mora em frente à escola."
      }
    ]
  },
  "près de": {
    "wordFr": "près de",
    "definitionPt": "perto de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "C'est très près de chez moi.",
        "pt": "Fica muito perto da minha casa."
      }
    ]
  },
  "loin de": {
    "wordFr": "loin de",
    "definitionPt": "longe de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Nous habitons loin de la ville.",
        "pt": "Moramos longe da cidade."
      }
    ]
  },
  "au-dessus de": {
    "wordFr": "au-dessus de",
    "definitionPt": "acima de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "L'avion vole au-dessus de la mer.",
        "pt": "O avião voa acima do mar."
      }
    ]
  },
  "en dessous de": {
    "wordFr": "en dessous de",
    "definitionPt": "abaixo de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "La température est en dessous de zéro.",
        "pt": "A temperatura está abaixo de zero."
      }
    ]
  },
  "au milieu de": {
    "wordFr": "au milieu de",
    "definitionPt": "no meio de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "La table est au milieu de la pièce.",
        "pt": "A mesa está no meio do cômodo."
      }
    ]
  },
  "au lieu de": {
    "wordFr": "au lieu de",
    "definitionPt": "em vez de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Je prendrai du thé au lieu de café.",
        "pt": "Eu vou tomar chá em vez de café."
      }
    ]
  },
  "grâce à": {
    "wordFr": "grâce à",
    "definitionPt": "graças a",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "J'ai réussi grâce à toi.",
        "pt": "Eu consegui graças a você."
      }
    ]
  },
  "à cause de": {
    "wordFr": "à cause de",
    "definitionPt": "por causa de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Il est en retard à cause du trafic.",
        "pt": "Ele está atrasado por causa do trânsito."
      }
    ]
  },
  "pour que": {
    "wordFr": "pour que",
    "definitionPt": "para que",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Je parle fort pour que tu m'entendes.",
        "pt": "Falo alto para que você me ouça."
      }
    ]
  },
  "bien que": {
    "wordFr": "bien que",
    "definitionPt": "embora",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B2",
        "fr": "Bien qu'il soit tard, je vais sortir.",
        "pt": "Embora seja tarde, eu vou sair."
      }
    ]
  },
  "avant de": {
    "wordFr": "avant de",
    "definitionPt": "antes de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Lave-toi les mains avant de manger.",
        "pt": "Lave as mãos antes de comer."
      }
    ]
  },
  "après avoir": {
    "wordFr": "après avoir",
    "definitionPt": "depois de ter",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Après avoir mangé, il est parti.",
        "pt": "Depois de ter comido, ele foi embora."
      }
    ]
  },
  "après être": {
    "wordFr": "après être",
    "definitionPt": "depois de ser/estar/ir",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Après être arrivé, il a dormi.",
        "pt": "Depois de ter chegado, ele dormiu."
      }
    ]
  },
  "en train de": {
    "wordFr": "en train de",
    "definitionPt": "fazendo (algo) / em processo de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Je suis en train de lire.",
        "pt": "Estou lendo (neste momento)."
      }
    ]
  },
  "avoir besoin de": {
    "wordFr": "avoir besoin de",
    "definitionPt": "precisar de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "J'ai besoin de ton aide.",
        "pt": "Preciso da sua ajuda."
      }
    ]
  },
  "avoir envie de": {
    "wordFr": "avoir envie de",
    "definitionPt": "ter vontade de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "J'ai envie de voyager.",
        "pt": "Tenho vontade de viajar."
      }
    ]
  },
  "avoir hâte de": {
    "wordFr": "avoir hâte de",
    "definitionPt": "estar ansioso para",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "J'ai hâte de te voir.",
        "pt": "Estou ansioso para te ver."
      }
    ]
  },
  "avoir peur de": {
    "wordFr": "avoir peur de",
    "definitionPt": "ter medo de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Il a peur de l'obscurité.",
        "pt": "Ele tem medo do escuro."
      }
    ]
  },
  "avoir l'air": {
    "wordFr": "avoir l'air",
    "definitionPt": "parecer",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Elle a l'air fatiguée.",
        "pt": "Ela parece cansada."
      }
    ]
  },
  "faire attention": {
    "wordFr": "faire attention",
    "definitionPt": "prestar atenção / tomar cuidado",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Fais attention en traversant la rue.",
        "pt": "Preste atenção ao atravessar a rua."
      }
    ]
  },
  "se rendre compte": {
    "wordFr": "se rendre compte",
    "definitionPt": "dar-se conta / perceber",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Il s'est rendu compte de son erreur.",
        "pt": "Ele se deu conta do seu erro."
      }
    ]
  },
  "il y a": {
    "wordFr": "il y a",
    "definitionPt": "há / tem",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Il y a un chat dans le jardin.",
        "pt": "Há um gato no jardim."
      }
    ]
  },
  "il s'agit de": {
    "wordFr": "il s'agit de",
    "definitionPt": "trata-se de",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Il s'agit d'un problème très grave.",
        "pt": "Trata-se de um problema muito grave."
      }
    ]
  },
  "n'importe quoi": {
    "wordFr": "n'importe quoi",
    "definitionPt": "qualquer coisa / bobagem",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Il dit n'importe quoi.",
        "pt": "Ele diz bobagem."
      }
    ]
  },
  "n'importe qui": {
    "wordFr": "n'importe qui",
    "definitionPt": "qualquer um",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "N'importe qui peut le faire.",
        "pt": "Qualquer um pode fazer isso."
      }
    ]
  },
  "n'importe quand": {
    "wordFr": "n'importe quand",
    "definitionPt": "a qualquer momento",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Tu peux venir n'importe quand.",
        "pt": "Você pode vir a qualquer momento."
      }
    ]
  },
  "n'importe où": {
    "wordFr": "n'importe où",
    "definitionPt": "em qualquer lugar",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Je te suivrai n'importe où.",
        "pt": "Eu te seguirei em qualquer lugar."
      }
    ]
  },
  "quelque chose": {
    "wordFr": "quelque chose",
    "definitionPt": "alguma coisa",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "As-tu mangé quelque chose ?",
        "pt": "Você comeu alguma coisa?"
      }
    ]
  },
  "quelqu'un": {
    "wordFr": "quelqu'un",
    "definitionPt": "alguém",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Il y a quelqu'un à la porte.",
        "pt": "Tem alguém na porta."
      }
    ]
  },
  "pourquoi pas": {
    "wordFr": "pourquoi pas",
    "definitionPt": "por que não?",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Aller au cinéma ? Pourquoi pas !",
        "pt": "Ir ao cinema? Por que não!"
      }
    ]
  },
  "c'est-à-dire que": {
    "wordFr": "c'est-à-dire que",
    "definitionPt": "ou seja que",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B2",
        "fr": "C'est-à-dire que je ne suis pas sûr.",
        "pt": "Ou seja que eu não tenho certeza."
      }
    ]
  },
  "quant à": {
    "wordFr": "quant à",
    "definitionPt": "quanto a",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Quant à moi, je préfère rester.",
        "pt": "Quanto a mim, prefiro ficar."
      }
    ]
  },
  "me va": {
    "wordFr": "me va",
    "definitionPt": "cai bem em mim / me serve",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": []
  },
  "te va": {
    "wordFr": "te va",
    "definitionPt": "cai bem em você / te serve",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Ce manteau te va parfaitement.",
        "pt": "Este casaco te cai perfeitamente."
      }
    ]
  },
  "lui va": {
    "wordFr": "lui va",
    "definitionPt": "cai bem nele/nela / lhe serve",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "La robe lui va à merveille.",
        "pt": "O vestido lhe cai às maravilhas."
      }
    ]
  },
  "vous va": {
    "wordFr": "vous va",
    "definitionPt": "cai bem em você/vocês / vos serve",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": []
  },
  "nous va": {
    "wordFr": "nous va",
    "definitionPt": "cai bem em nós / nos serve",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Ce rendez-vous nous va.",
        "pt": "Este compromisso nos serve (está bom para nós)."
      }
    ]
  },
  "leur va": {
    "wordFr": "leur va",
    "definitionPt": "cai bem neles/nelas / lhes serve",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": []
  },
  "mon Dieu": {
    "wordFr": "mon Dieu",
    "definitionPt": "meu Deus",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A1",
        "fr": "Oh mon Dieu, c'est incroyable !",
        "pt": "Oh meu Deus, é incrível!"
      }
    ]
  },
  "c'est grave": {
    "wordFr": "c'est grave",
    "definitionPt": "é grave",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Le médecin a dit que c'est grave.",
        "pt": "O médico disse que é grave."
      }
    ]
  },
  "ce n'est pas grave": {
    "wordFr": "ce n'est pas grave",
    "definitionPt": "não é grave / não tem problema",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Ce n'est pas grave, on peut réparer ça.",
        "pt": "Não tem problema, podemos consertar isso."
      }
    ]
  },
  "prendre du recul": {
    "wordFr": "prendre du recul",
    "definitionPt": "dar um passo para trás / ver de outra perspectiva",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B2",
        "fr": "Il faut prendre du recul pour analyser la situation.",
        "pt": "É preciso dar um passo para trás para analisar a situação."
      }
    ]
  },
  "coup de foudre": {
    "wordFr": "coup de foudre",
    "definitionPt": "amor à primeira vista",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Entre eux, c'était le coup de foudre.",
        "pt": "Entre eles, foi amor à primeira vista."
      }
    ]
  },
  "du coup": {
    "wordFr": "du coup",
    "definitionPt": "então / por isso / consequentemente",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "B1",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "B1",
        "fr": "Il pleuvait, du coup on est restés à la maison.",
        "pt": "Estava chovendo, então ficamos em casa."
      }
    ]
  },
  "bien sûr que si": {
    "wordFr": "bien sûr que si",
    "definitionPt": "claro que sim",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Tu ne viens pas ? Bien sûr que si !",
        "pt": "Você não vem? Claro que sim!"
      }
    ]
  },
  "plus ou moins": {
    "wordFr": "plus ou moins",
    "definitionPt": "mais ou menos",
    "definitionFr": "Expression idiomatique ou tournure très fréquente",
    "difficultyLevel": "A2",
    "isDictionaryTerm": false,
    "examples": [
      {
        "level": "A2",
        "fr": "Le travail est plus ou moins terminé.",
        "pt": "O trabalho está mais ou menos terminado."
      }
    ]
  }
};
