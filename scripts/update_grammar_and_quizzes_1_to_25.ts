import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');

interface GrammarPoint {
  ruleTitle: string;
  explanationPt: string;
  exampleFr: string;
  examplePt: string;
  practiceQuestion: string;
  options: string[];
  correctIndex: number;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface LessonGrammarAndQuiz {
  grammarPoints: [GrammarPoint, GrammarPoint];
  quizQuestions: [QuizQuestion, QuizQuestion, QuizQuestion, QuizQuestion, QuizQuestion];
}

const LESSONS_DATA: Record<number, LessonGrammarAndQuiz> = {
  1: {
    grammarPoints: [
      {
        ruleTitle: "Passado Composto com Auxiliar Être (Verbos de Chegada)",
        explanationPt: "No texto aparece 'Je suis arrivé à Paris'. Verbos de movimento e chegada em francês exigem o auxiliar 'être' (e não 'avoir') no passé composé, concordando em gênero e número com o sujeito.",
        exampleFr: "Je suis arrivé à Paris ce matin à la Gare du Nord.",
        examplePt: "Eu cheguei a Paris esta manhã na Gare du Nord.",
        practiceQuestion: "Complete a lacuna com a forma correta do verbo: 'Ce matin, je _____ à Paris.'",
        options: ["suis arrivé", "ai arrivé", "est arrivé"],
        correctIndex: 0
      },
      {
        ruleTitle: "Concordância do Adjetivo no Plural Feminino (-ées)",
        explanationPt: "No texto vimos 'Les rues sont animées'. O substantivo 'rue' é feminino e plural (les rues), por isso o adjetivo recebe a terminação feminina '-ée' seguida do '-s' de plural.",
        exampleFr: "Les rues sont animées et les bâtiments anciens sont très élégants.",
        examplePt: "As ruas são animadas e os edifícios antigos são muito elegantes.",
        practiceQuestion: "Escolha a concordância correta: 'Les rues de la capitale sont _____.'",
        options: ["animées", "animés", "animée"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a frase do texto da aula com a palavra correta em francês: 'Je marche vers le quartier historique du _____.'",
        options: ["Marais", "Montmartre", "Louvre"],
        correctIndex: 0,
        explanation: "No texto da Aula 1, Irlan caminha em direção ao bairro histórico do Marais."
      },
      {
        question: "Ordene corretamente as palavras da frase que apareceu na aula: [ aventure / grande / ma / de / départ / le / point / C'est ]",
        options: [
          "C'est le point de départ de ma grande aventure.",
          "C'est de départ le point ma aventure grande.",
          "Le point c'est aventure de ma départ grande."
        ],
        correctIndex: 0,
        explanation: "A frase exata do texto é 'C'est le point de départ de ma grande aventure.'"
      },
      {
        question: "Como se traduz corretamente do português para o francês a frase: 'Eu cheguei a Paris esta manhã'?",
        options: [
          "Je suis arrivé à Paris ce matin.",
          "J'ai arrivé en Paris ce matin.",
          "Je suis arriver à Paris ce matin."
        ],
        correctIndex: 0,
        explanation: "Usa-se 'Je suis arrivé' (auxiliar être) e a preposição 'à' para cidades ('à Paris')."
      },
      {
        question: "Identifique qual das frases em francês abaixo apresenta um ERRO gramatical comum no pretérito:",
        options: [
          "Je ai arrivé à Paris à la Gare du Nord.",
          "Je suis arrivé à Paris ce matin.",
          "Je marche vers le quartier historique."
        ],
        correctIndex: 0,
        explanation: "O erro está em 'Je ai arrivé', pois o verbo arriver requer o auxiliar être ('Je suis arrivé')."
      },
      {
        question: "Segundo a narrativa da aula, o que Irlan faz logo após se sentar na mesa redonda do terraço do café?",
        options: [
          "Pede um espresso e um croissant quente, e anota suas primeiras palavras no caderno.",
          "Vai direto para a estação de metrô sem falar com o garçom.",
          "Liga para o hotel para cancelar sua reserva."
        ],
        correctIndex: 0,
        explanation: "Irlan pede um espresso e um croissant quente ao garçom e escreve em seu caderno de francês."
      }
    ]
  },
  2: {
    grammarPoints: [
      {
        ruleTitle: "Preposição de Lugar 'sur' + Artigo Definido",
        explanationPt: "Na frase 'Sophie ouvre une grande carte historique sur sa table', a preposição 'sur' (sobre/em cima de) indica contato com a superfície e não se contrai com o possessivo ou artigo.",
        exampleFr: "Sophie ouvre une grande carte historique sur sa table en bois.",
        examplePt: "Sophie abre um grande mapa histórico em sua mesa de madeira.",
        practiceQuestion: "Complete a lacuna corretamente: 'La carte est posée _____ la table.'",
        options: ["sur", "dans", "en"],
        correctIndex: 0
      },
      {
        ruleTitle: "Preposição de Destino com Cidades (à Nice)",
        explanationPt: "No texto lemos 'jusqu'à la magnifique Riviera à Nice'. Em francês, nomes de cidades (como Paris, Amiens, Nice) são sempre introduzidos pela preposição 'à' (com acento grave).",
        exampleFr: "Elle marque onze villes incontournables : Paris (#1), puis Amiens (#2), jusqu'à Nice (#11).",
        examplePt: "Ela marca onze cidades imperdíveis: Paris (#1), depois Amiens (#2), até Nice (#11).",
        practiceQuestion: "Selecione a preposição correta: 'Nous allons voyager _____ Nice et _____ Amiens.'",
        options: ["à / à", "en / en", "au / au"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna com a palavra em francês do texto: 'Sophie ouvre une grande carte historique sur sa table en _____.'",
        options: ["bois", "métal", "verre"],
        correctIndex: 0,
        explanation: "No texto, Sophie abre o mapa sobre sua mesa de madeira ('table en bois')."
      },
      {
        question: "Ordene corretamente as palavras do texto da aula: [ onze / incontournables / marque / villes / Elle ]",
        options: [
          "Elle marque onze villes incontournables.",
          "Elle incontournables marque onze villes.",
          "Villes onze marque elle incontournables."
        ],
        correctIndex: 0,
        explanation: "A frase correta no texto é 'Elle marque onze villes incontournables.'"
      },
      {
        question: "Como traduzir para o francês a frase: 'Ela abre um grande mapa na mesa'?",
        options: [
          "Elle ouvre une grande carte sur la table.",
          "Elle ouvre un grand carte dans la table.",
          "Elle ouvrir une grande carte à la table."
        ],
        correctIndex: 0,
        explanation: "'Carte' é feminino ('une grande carte') e usamos a preposição 'sur la table'."
      },
      {
        question: "Qual das frases abaixo apresenta um ERRO comum de preposição de cidade em francês?",
        options: [
          "Nous allons en Paris pour voir la Seine.",
          "Sophie habite à Paris près de la Seine.",
          "Je regarde la carte historique sur la table."
        ],
        correctIndex: 0,
        explanation: "O erro está em 'en Paris', pois com nomes de cidades usa-se sempre 'à' ('à Paris')."
      },
      {
        question: "Qual foi o ensinamento central que a livreira Sophie compartilhou com Irlan em sua livraria?",
        options: [
          "Apresentou o mapa das 11 cidades imperdíveis da França, de Paris (#1) até Nice (#11).",
          "Ensino-lhe uma receita secreta de croissant com amêndoas.",
          "Vendeu-lhe um ingresso de trem para Lyon e Bordéus."
        ],
        correctIndex: 0,
        explanation: "Sophie mostrou o mapa com a rota de 11 cidades francesas que Irlan irá percorrer."
      }
    ]
  },
  3: {
    grammarPoints: [
      {
        ruleTitle: "Verbos Reflexivos no Presente (Je m'assieds)",
        explanationPt: "A frase 'Je m'assieds sur l'herbe' usa o verbo pronominal reflexivo 's'asseoir'. Com o sujeito 'je', o pronome reflexivo é 'me' (elidido para 'm'' diante de vogal).",
        exampleFr: "Je m'assieds sur l'herbe du Champ-de-Mars et j'ouvre la carte.",
        examplePt: "Eu me sento na grama do Champ-de-Mars e abro o mapa.",
        practiceQuestion: "Complete a conjugação do verbo reflexivo: 'Je _____ sur l'herbe du parc.'",
        options: ["m'assieds", "me assieds", "s'assieds"],
        correctIndex: 0
      },
      {
        ruleTitle: "Pronome Relativo 'que' como Objeto Direto",
        explanationPt: "Na frase 'la carte que Sophie m'a donnée', o pronome relativo 'que' conecta o substantivo 'la carte' à oração subordinada, atuando como objeto direto do verbo.",
        exampleFr: "Je m'assieds sur l'herbe du Champ-de-Mars et j'ouvre la carte que Sophie m'a donnée.",
        examplePt: "Eu me sento na grama e abro o mapa que Sophie me deu.",
        practiceQuestion: "Escolha o pronome relativo correto para completar: 'Voici la carte _____ Sophie m'a donnée.'",
        options: ["que", "qui", "dont"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna com a palavra francesa do texto: 'Au crépuscule, la Tour Eiffel s'illumine soudainement et _____ dans le ciel.'",
        options: ["scintille", "dort", "tombe"],
        correctIndex: 0,
        explanation: "No texto, a Torre Eiffel se ilumina e brilha/cintila ('scintille') no céu de Paris."
      },
      {
        question: "Ordene corretamente a frase do texto da Aula 3: [ dans / parisien / scintille / le ciel / la Tour Eiffel ]",
        options: [
          "La Tour Eiffel scintille dans le ciel parisien.",
          "Dans le ciel scintille la Tour Eiffel parisien.",
          "Parisien le ciel dans scintille la Tour Eiffel."
        ],
        correctIndex: 0,
        explanation: "A ordem natural da frase é 'La Tour Eiffel scintille dans le ciel parisien.'"
      },
      {
        question: "Como se traduz para o francês: 'Eu abro o mapa que Sophie me deu'?",
        options: [
          "J'ouvre la carte que Sophie m'a donnée.",
          "Je ouvre le carte qui Sophie m'a donné.",
          "J'ouvre la carte dont Sophie m'a donnée."
        ],
        correctIndex: 0,
        explanation: "Usa-se 'J'ouvre' (com elisão), o pronome relativo 'que' e a concordância feminina em 'donnée'."
      },
      {
        question: "Aponte qual frase contém um ERRO comum no uso de pronomes reflexivos:",
        options: [
          "Je se assieds sur l'herbe du Champ-de-Mars.",
          "Je m'assieds sur l'herbe du Champ-de-Mars.",
          "La Tour Eiffel s'illumine au crépuscule."
        ],
        correctIndex: 0,
        explanation: "O erro é 'Je se assieds'; com o pronome 'je', o reflexivo deve ser 'me' ('Je m'assieds')."
      },
      {
        question: "O que Irlan organiza ao entardecer no Champ-de-Mars diante da Torre Eiffel?",
        options: [
          "Revisa o mapa de Sophie e valida seu passe de trem multi-cidades para explorar a França.",
          "Compra um ingresso para subir de elevador ao topo da Torre Eiffel.",
          "Procura um táxi para ir direto ao aeroporto de Orly."
        ],
        correctIndex: 0,
        explanation: "Irlan senta na grama, revisa o mapa de Sophie e valida seu passe de trem das 11 cidades."
      }
    ]
  },
  4: {
    grammarPoints: [
      {
        ruleTitle: "Artigo Partitivo no Cardápio (de la / du)",
        explanationPt: "Na frase 'Je choisis de la soupe à l'oignon et du bœuf bourguignon', usamos os artigos partitivos 'de la' (feminino) e 'du' (masculino, contração de de+le) para indicar porções de alimentos.",
        exampleFr: "Je choisis de la soupe à l'oignon et du bœuf bourguignon comme plat principal.",
        examplePt: "Eu escolho sopa de cebola e bife borgonhês como prato principal.",
        practiceQuestion: "Complete com o partitivo correto (masculino singular): 'Je voudrais commander _____ bœuf bourguignon.'",
        options: ["du", "de la", "des"],
        correctIndex: 0
      },
      {
        ruleTitle: "Verbo Vouloir no Condicional de Cortesia (Je voudrais)",
        explanationPt: "No bistrô, para fazer um pedido com educação e cortesia, usamos 'Je voudrais' (Gostaria de) no lieu de 'Je veux' (Eu quero).",
        exampleFr: "Je voudrais commander la formule du jour, s'il vous plaît.",
        examplePt: "Eu gostaria de pedir o menu do dia, por favor.",
        practiceQuestion: "Escolha a forma mais educada para pedir no bistrô: '_____ l'addition, s'il vous plaît.'",
        options: ["Je voudrais", "Je veux", "Je vouloir"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto com o prato francês correto: 'Je choisis de la soupe à l'oignon et du _____ bourguignon.'",
        options: ["bœuf", "poulet", "poisson"],
        correctIndex: 0,
        explanation: "No cardápio da aula, Irlan pede sopa de cebola e o clássico bœuf bourguignon."
      },
      {
        question: "Reordene corretamente a frase de cortesia do bistrô: [ vous / plaît / s'il / l'addition / Je voudrais ]",
        options: [
          "Je voudrais l'addition, s'il vous plaît.",
          "L'addition je voudrais plaît s'il vous.",
          "S'il plaît vous je voudrais l'addition."
        ],
        correctIndex: 0,
        explanation: "A estrutura educada padrão é 'Je voudrais l'addition, s'il vous plaît.'"
      },
      {
        question: "Como se traduz do português para o francês a frase: 'Eu gostaria da conta, por favor'?",
        options: [
          "Je voudrais l'addition, s'il vous plaît.",
          "Je veux le compte, par favor.",
          "Je voudrai la facture, s'il vous plaît."
        ],
        correctIndex: 0,
        explanation: "Em restaurantes na França, a conta se diz 'l'addition' e pede-se com 'Je voudrais'."
      },
      {
        question: "Identifique qual das frases abaixo contém um ERRO de artigo partitivo em francês:",
        options: [
          "Je mange de le bœuf bourguignon au bistrot.",
          "Je mange du bœuf bourguignon au bistrot.",
          "Je choisis de la soupe à l'oignon en entrée."
        ],
        correctIndex: 0,
        explanation: "Em francês, a combinação 'de + le' é obrigatoriamente contraída em 'du' ('du bœuf')."
      },
      {
        question: "Na experiência do bistrô em Paris, como é chamado o menu completo com preço fixo do almoço?",
        options: [
          "La formule du jour (com entrada, prato principal e sobremesa).",
          "Le petit-déjeuner continental.",
          "Le buffet libre à volonté."
        ],
        correctIndex: 0,
        explanation: "Em Paris, os bistrôs oferecem 'la formule du jour' ou 'le menu du jour' com preço fixo."
      }
    ]
  },
  5: {
    grammarPoints: [
      {
        ruleTitle: "Modo Imperativo para Dar Instruções (Allez / Tournez)",
        explanationPt: "Na frase 'Allez tout droit et tournez à gauche', os verbos no imperativo para a segunda pessoa do plural (vous) terminam em '-ez' e são usados sem pronome sujeito explícito.",
        exampleFr: "Allez tout droit sur cette rue et tournez à gauche au prochain carrefour.",
        examplePt: "Vá em frente nesta rua e vire à esquerda no próximo cruzamento.",
        practiceQuestion: "Complete a instrução de direção no imperativo formal (vous): '_____ tout droit vers la Seine.'",
        options: ["Allez", "Aller", "Allons"],
        correctIndex: 0
      },
      {
        ruleTitle: "Preposição Contratada 'au' diante de Masculino (au carrefour)",
        explanationPt: "Em 'au prochain carrefour', a preposição 'à' unida ao artigo masculino 'le' contrai-se obrigatoriamente em 'au' (à + le = au).",
        exampleFr: "Tournez à gauche au prochain carrefour pour arriver au pont.",
        examplePt: "Vire à esquerda no próximo cruzamento para chegar à ponte.",
        practiceQuestion: "Selecione a contração correta para completar: 'Tournez à droite _____ feu rouge.'",
        options: ["au", "à le", "en le"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto com a direção em francês: 'Allez tout droit et tournez à _____ au carrefour.'",
        options: ["gauche", "haut", "ciel"],
        correctIndex: 0,
        explanation: "No diálogo de orientação, o pedestre instrui a virar à esquerda ('à gauche')."
      },
      {
        question: "Reordene corretamente a frase de orientação da aula: [ droit / allez / rue / sur / tout / cette ]",
        options: [
          "Allez tout droit sur cette rue.",
          "Sur cette allez droit tout rue.",
          "Tout droit allez rue sur cette."
        ],
        correctIndex: 0,
        explanation: "A ordem natural da instrução no texto é 'Allez tout droit sur cette rue.'"
      },
      {
        question: "Como se traduz corretamente: 'Vá em frente e vire à esquerda'?",
        options: [
          "Allez tout droit et tournez à gauche.",
          "Allez tout gauche et tournez à droite.",
          "Aller en frente et tourner à gauche."
        ],
        correctIndex: 0,
        explanation: "'Em frente' se diz 'tout droit' e 'à esquerda' é 'à gauche'."
      },
      {
        question: "Aponte a frase que contém um ERRO na contração da preposição com artigo masculino:",
        options: [
          "Tournez à gauche à le prochain carrefour.",
          "Tournez à gauche au prochain carrefour.",
          "Allez tout droit jusqu'au pont de la Seine."
        ],
        correctIndex: 0,
        explanation: "Não se diz 'à le carrefour'; deve-se contrair obrigatoriamente em 'au carrefour'."
      },
      {
        question: "Para onde Irlan pedia indicações de caminho ao pedestre nas ruas de Paris?",
        options: [
          "Perguntou como chegar até o Rio Sena e a ponte mais próxima.",
          "Perguntou onde ficava a estação de trem Gare de Lyon.",
          "Perguntou como subir de funicular em Montmartre."
        ],
        correctIndex: 0,
        explanation: "Na Aula 5, Irlan orienta-se a pé pelas ruas para chegar às margens do Rio Sena."
      }
    ]
  },
  6: {
    grammarPoints: [
      {
        ruleTitle: "Artigos Definidos com Substantivos Femininos (la clé / la chambre)",
        explanationPt: "No diálogo do hotel 'Voici la clé de votre chambre', os substantivos femininos singulares são precedidos por 'la' ou pelos possessivos femininos correspondentes.",
        exampleFr: "Voici la clé de votre chambre au troisième étage, monsieur.",
        examplePt: "Aqui está a chave do seu quarto no terceiro andar, senhor.",
        practiceQuestion: "Complete com o artigo definido feminino singular: 'Voici _____ clé de la chambre.'",
        options: ["la", "le", "les"],
        correctIndex: 0
      },
      {
        ruleTitle: "Números Ordinais para Andares (troisième étage)",
        explanationPt: "Para indicar andares em francês, adicionamos o sufixo '-ième' ao número cardinal (trois -> troisième). Lembre-se de que o 'rez-de-chaussée' corresponde ao térreo.",
        exampleFr: "Votre chambre est située au troisième étage avec ascenseur.",
        examplePt: "Seu quarto está situado no terceiro andar com elevador.",
        practiceQuestion: "Como se escreve corretamente 'terceiro andar' em francês?",
        options: ["troisième étage", "trois étage", "tierce étage"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a frase do check-in no hotel: 'Voici la _____ de votre chambre au troisième étage.'",
        options: ["clé", "valise", "porte"],
        correctIndex: 0,
        explanation: "O recepcionista entrega a chave ('la clé') do quarto a Irlan."
      },
      {
        question: "Ordene a frase da recepção do hotel: [ étage / troisième / chambre / au / Votre / est ]",
        options: [
          "Votre chambre est au troisième étage.",
          "Au troisième chambre est votre étage.",
          "Troisième étage votre chambre est au."
        ],
        correctIndex: 0,
        explanation: "A frase na ordem correta é 'Votre chambre est au troisième étage.'"
      },
      {
        question: "Como se traduz para o francês: 'Aqui está a chave do seu quarto'?",
        options: [
          "Voici la clé de votre chambre.",
          "Voilà le clé de ton chambre.",
          "Ici est la clé de votre chambre."
        ],
        correctIndex: 0,
        explanation: "'Aqui está' é 'Voici', e 'clé' e 'chambre' são femininos."
      },
      {
        question: "Qual das frases abaixo apresenta um ERRO comum de gênero na recepção do hotel?",
        options: [
          "Voici le clé de votre chambre.",
          "Voici la clé de votre chambre.",
          "Votre chambre est au premier étage."
        ],
        correctIndex: 0,
        explanation: "O erro é 'le clé', pois a palavra 'clé' (chave) é um substantivo feminino ('la clé')."
      },
      {
        question: "Na Aula 6 de check-in no hotel, qual informação prática o recepcionista explica a Irlan?",
        options: [
          "Informa o número do quarto, a localização do elevador e a senha do Wi-Fi.",
          "Diz que o café da manhã só é servido após o meio-dia.",
          "Pede que Irlan pague uma taxa extra pelo uso das escadas."
        ],
        correctIndex: 0,
        explanation: "O recepcionista orienta sobre o quarto no 3º andar, o elevador e a rede Wi-Fi."
      }
    ]
  },
  7: {
    grammarPoints: [
      {
        ruleTitle: "Pronome Enclítico de Quantidade 'en' (J'en voudrais)",
        explanationPt: "Na padaria, ao pedir 'J'en voudrais deux', o pronome 'en' substitui o substantivo acompanhado de quantidade (des croissants), evitando repetição.",
        exampleFr: "Je regarde les croissants chauds et j'en voudrais deux, s'il vous plaît.",
        examplePt: "Eu olho os croissants quentes e gostaria de dois deles, por favor.",
        practiceQuestion: "Complete com o pronome que substitui a quantidade: 'Des baguettes ? J'_____ voudrais une.'",
        options: ["en", "le", "y"],
        correctIndex: 0
      },
      {
        ruleTitle: "Expressão de Pagamento em Dinheiro (en espèces)",
        explanationPt: "Na frase 'Je paie en espèces à la caisse', a expressão idiomática para pagar em dinheiro vivo é 'en espèces' (ou 'au comptant'). Para cartão, diz-se 'par carte'.",
        exampleFr: "Je paie en espèces à la caisse de la boulangerie.",
        examplePt: "Eu pago em dinheiro no caixa da padaria.",
        practiceQuestion: "Escolha a preposição correta para pagamento em dinheiro vivo: 'Je voudrais payer _____ espèces.'",
        options: ["en", "par", "com"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a frase do diálogo na padaria: 'Je voudrais une _____ tradition et deux croissants.'",
        options: ["baguette", "fromage", "soupe"],
        correctIndex: 0,
        explanation: "Na padaria parisiense, pede-se a clássica 'baguette tradition'."
      },
      {
        question: "Ordene corretamente a frase de pagamento: [ la / caisse / espèces / Je / en / paie / à ]",
        options: [
          "Je paie en espèces à la caisse.",
          "À la caisse en espèces paie je.",
          "Espèces en je paie à la caisse."
        ],
        correctIndex: 0,
        explanation: "A ordem correta do texto é 'Je paie en espèces à la caisse.'"
      },
      {
        question: "Como se traduz: 'Eu gostaria de duas baguetes, por favor'?",
        options: [
          "Je voudrais deux baguettes, s'il vous plaît.",
          "Je veux deux baguettes, par favor.",
          "Je voudrai deux baguete, s'il vous plaît."
        ],
        correctIndex: 0,
        explanation: "'Je voudrais' é a cortesia padrão com o plural 'deux baguettes'."
      },
      {
        question: "Identifique a frase com ERRO na expressão de meio de pagamento em francês:",
        options: [
          "Je paie par espèces à la caisse.",
          "Je paie en espèces à la caisse.",
          "Je paie par carte bancaire."
        ],
        correctIndex: 0,
        explanation: "O erro é 'par espèces'; a expressão gramaticalmente correta é 'en espèces'."
      },
      {
        question: "O que Irlan compra durante sua visita à padaria e ao supermercado na Aula 7?",
        options: [
          "Compra uma baguete artesanal e croissants, e realiza o pagamento em dinheiro no caixa.",
          "Compra um casaco de inverno e sapatos de couro.",
          "Compra ferramentas e tintas para pintar seu quarto."
        ],
        correctIndex: 0,
        explanation: "Irlan compra pães e pequenos itens de mantimento na padaria/supermercado."
      }
    ]
  },
  8: {
    grammarPoints: [
      {
        ruleTitle: "Artigo Contraído no Plural 'aux' (aux chefs-d'œuvre)",
        explanationPt: "Na frase 'Je m'intéresse aux chefs-d'œuvre du musée', a preposição 'à' com o artigo plural 'les' transforma-se obrigatoriamente na contração 'aux' (à + les = aux).",
        exampleFr: "Les visiteurs rendent hommage aux chefs-d'œuvre de la peinture du Louvre.",
        examplePt: "Os visitantes prestam homenagem às obras-primas da pintura do Louvre.",
        practiceQuestion: "Complete com a contração plural correta: 'Je m'intéresse _____ peintures de la galerie.'",
        options: ["aux", "à les", "en les"],
        correctIndex: 0
      },
      {
        ruleTitle: "Verbo Voir no Presente (Je vois)",
        explanationPt: "Na frase 'Je vois la Joconde dans la grande salle', o verbo irregular 'voir' tem a conjugação 'je vois' no presente do indicativo.",
        exampleFr: "Je vois la célèbre Joconde derrière sa vitre de protection.",
        examplePt: "Eu vejo a famosa Mona Lisa atrás de seu vidro de proteção.",
        practiceQuestion: "Selecione a conjugação correta: 'Dans la galerie, je _____ des sculptures antiques.'",
        options: ["vois", "voir", "voie"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto do Louvre: 'Je vois la célèbre _____ dans la grande salle des peintures.'",
        options: ["Joconde", "Tour", "Gare"],
        correctIndex: 0,
        explanation: "Na França, a Mona Lisa é chamada de 'La Joconde'."
      },
      {
        question: "Reordene a frase sobre a visita ao Louvre: [ en ligne / j'ai / mon billet / acheté / l'avance / à ]",
        options: [
          "J'ai acheté mon billet en ligne à l'avance.",
          "À l'avance mon billet acheté j'ai en ligne.",
          "En ligne j'ai à l'avance mon billet acheté."
        ],
        correctIndex: 0,
        explanation: "A ordem canônica do texto é 'J'ai acheté mon billet en ligne à l'avance.'"
      },
      {
        question: "Como traduzir para o francês: 'Eu vejo as obras-primas do museu'?",
        options: [
          "Je vois les chefs-d'œuvre du musée.",
          "Je voir les chefs-d'œuvre de le musée.",
          "Je vois les obras-primas de musée."
        ],
        correctIndex: 0,
        explanation: "Conjugação correta 'Je vois' e contração 'du musée' (de + le)."
      },
      {
        question: "Identifique a frase que apresenta um ERRO de contração de preposição com plural:",
        options: [
          "Je m'intéresse à les tableaux du Louvre.",
          "Je m'intéresse aux tableaux du Louvre.",
          "Je visite le musée du Louvre."
        ],
        correctIndex: 0,
        explanation: "O erro é 'à les tableaux'; em francês a contração 'aux' é obrigatória."
      },
      {
        question: "Qual regra de conservação do museu é destacada na visita de Irlan ao Louvre?",
        options: [
          "Respeitar a distância das obras e não usar flash fotográfico nas salas.",
          "Tocar nas molduras para sentir a textura da pintura a óleo.",
          "Falar em voz alta para ecoar na galeria."
        ],
        correctIndex: 0,
        explanation: "O Louvre exige silêncio e proíbe o uso de flash para proteger o acervo."
      }
    ]
  },
  9: {
    grammarPoints: [
      {
        ruleTitle: "Verbo Essayer (Provar/Tentar) com Roupas",
        explanationPt: "Na frase 'Je voudrais essayer cette chemise', o verbo 'essayer' significa provar roupas no provador ('cabine d'essayage'). No presente, pode-se escrever 'j'essaie' ou 'j'essaye'.",
        exampleFr: "Je voudrais essayer cette chemise dans la cabine d'essayage, s'il vous plaît.",
        examplePt: "Eu gostaria de provar esta camisa no provador, por favor.",
        practiceQuestion: "Complete com o infinitivo de provar roupas: 'Puis-je _____ cette veste ?'",
        options: ["essayer", "essaye", "essayez"],
        correctIndex: 0
      },
      {
        ruleTitle: "Adjetivos Demonstrativos (ce / cette / ces)",
        explanationPt: "Na frase 'Je choisis cette chemise bleue et ce pantalon noir', 'cette' acompanha substantivos femininos (chemise) e 'ce' acompanha masculinos singulares (pantalon).",
        exampleFr: "J'aime beaucoup cette chemise bleue et ce pantalon noir de la boutique.",
        examplePt: "Eu gosto muito desta camisa azul e deste calça preta da loja.",
        practiceQuestion: "Escolha o demonstrativo feminino singular correto: '_____ robe est très élégante.'",
        options: ["cette", "ce", "ces"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do diálogo na loja: 'Je voudrais essayer cette chemise dans la cabine d'_____.'",
        options: ["essayage", "horloge", "opéra"],
        correctIndex: 0,
        explanation: "O provador na loja de roupas chama-se 'la cabine d'essayage'."
      },
      {
        question: "Ordene a pergunta de compra na boutique do Marais: [ coûte / Combien / chemise / cette / ? ]",
        options: [
          "Combien coûte cette chemise ?",
          "Cette chemise combien coûte ?",
          "Coûte combien cette chemise ?"
        ],
        correctIndex: 0,
        explanation: "A pergunta padrão de preço é 'Combien coûte cette chemise ?'"
      },
      {
        question: "Como traduzir corretamente: 'Eu gostaria de provar esta camisa'?",
        options: [
          "Je voudrais essayer cette chemise.",
          "Je veux essayer ce chemise.",
          "Je voudrai provar cette chemise."
        ],
        correctIndex: 0,
        explanation: "'Essaier' é provar, 'chemise' é feminino ('cette chemise') e usamos 'Je voudrais'."
      },
      {
        question: "Aponte qual frase abaixo contém um ERRO de demonstrativo em francês:",
        options: [
          "Je voudrais acheter ce chemise bleue.",
          "Je voudrais acheter cette chemise bleue.",
          "Je regarde ce pantalon noir."
        ],
        correctIndex: 0,
        explanation: "O erro é 'ce chemise'; por ser palavra feminina, exige 'cette chemise'."
      },
      {
        question: "O que Irlan faz durante sua tarde de compras pelo bairro do Marais?",
        options: [
          "Pergunta o preço das peças, verifica o tamanho e prova roupas na cabine de essayage.",
          "Compra um computador novo em uma loja de informática.",
          "Aluga um barco para navegar no Canal Saint-Martin."
        ],
        correctIndex: 0,
        explanation: "Irlan explora as boutiques do Marais, escolhe camisas e experimenta as peças."
      }
    ]
  },
  10: {
    grammarPoints: [
      {
        ruleTitle: "Verbo Prendre (Pegar/Tomar meio de transporte)",
        explanationPt: "Na frase 'Je prends la ligne un du métro vers Châtelet', usamos o verbo irregular 'prendre' para indicar que estamos utilizando um transporte público. Conjugação: je prends, tu prends, il prend.",
        exampleFr: "Je prends le métro parisien et je recharge mon passe Navigo.",
        examplePt: "Eu pego o metrô parisiense e recarrego meu passe Navigo.",
        practiceQuestion: "Complete a lacuna no presente do indicativo: 'Je _____ le métro pour aller au Louvre.'",
        options: ["prends", "prend", "prendre"],
        correctIndex: 0
      },
      {
        ruleTitle: "Preposição 'en' para Meios de Transporte Fechados (en métro)",
        explanationPt: "Com veículos onde entramos dentro (métro, train, bus, voiture), usamos a preposição 'en' sem artigo: 'en métro', 'en train'. Para transportes em cima (vélo, moto), usamos 'à'.",
        exampleFr: "Il est très facile et rapide de se déplacer en métro à Paris.",
        examplePt: "É muito fácil e rápido se deslocar de metrô em Paris.",
        practiceQuestion: "Escolha a preposição correta para transporte: 'Nous voyageons _____ métro dans la capitale.'",
        options: ["en", "à", "dans"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto do transporte: 'Je recharge mon passe _____ à la borne de la station.'",
        options: ["Navigo", "Eiffel", "Baguette"],
        correctIndex: 0,
        explanation: "O cartão de transporte oficial de Paris é o 'passe Navigo'."
      },
      {
        question: "Ordene a frase sobre o metrô de Paris: [ ligne / Je / la / prends / un / du métro ]",
        options: [
          "Je prends la ligne un du métro.",
          "La ligne un prends je du métro.",
          "Du métro un la ligne je prends."
        ],
        correctIndex: 0,
        explanation: "A frase correta no texto é 'Je prends la ligne un du métro.'"
      },
      {
        question: "Como se traduz para o francês: 'Eu pego o metrô para ir ao museu'?",
        options: [
          "Je prends le métro pour aller au musée.",
          "Je prendre le métro pour ir au musée.",
          "Je prend le métro par aller le musée."
        ],
        correctIndex: 0,
        explanation: "Conjugação correta 'Je prends', preposição 'pour' e contração 'au musée'."
      },
      {
        question: "Identifique a frase com ERRO na preposição com meio de transporte em francês:",
        options: [
          "Je me déplace à métro dans Paris.",
          "Je me déplace en métro dans Paris.",
          "Je prends le bus à la station."
        ],
        correctIndex: 0,
        explanation: "O erro é 'à métro'; com transportes fechados usa-se sempre 'en métro'."
      },
      {
        question: "Como Irlan se desloca pela cidade na Aula 10 de Transportes?",
        options: [
          "Recarrega seu cartão Navigo na estação, orienta-se pelas linhas de metrô e ouve os avisos.",
          "Aluga uma charrete a cavalo nos Champs-Élysées.",
          "Compra um carro de corrida para dirigir nas ruas de Paris."
        ],
        correctIndex: 0,
        explanation: "Irlan aprende a usar o metrô parisiense e o cartão Navigo."
      }
    ]
  },
  11: {
    grammarPoints: [
      {
        ruleTitle: "Verbo Monter com Auxiliar Être no Passado (Je suis monté)",
        explanationPt: "Na frase 'Je suis monté au sommet de Montmartre', o verbo 'monter' em sentido intransitivo de subir indica movimento e é conjugado com 'être' no passé composé.",
        exampleFr: "Je suis monté jusqu'à la basilique du Sacré-Cœur en funiculaire.",
        examplePt: "Eu subi até a basílica de Sacré-Cœur de funicular.",
        practiceQuestion: "Complete o pretérito com o auxiliar correto: 'Hier soir, je _____ monté à Montmartre.'",
        options: ["suis", "ai", "a"],
        correctIndex: 0
      },
      {
        ruleTitle: "Pronome Relativo 'où' para Lugar e Tempo (le quartier où...)",
        explanationPt: "Na frase 'Montmartre est le quartier où les artistes se réunissent', o pronome relativo 'où' significa 'onde' (lugar) ou 'quando' (tempo em certas expressões).",
        exampleFr: "Montmartre est le quartier où les peintres de rue créent leurs portraits.",
        examplePt: "Montmartre é o bairro onde os pintores de rua criam seus retratos.",
        practiceQuestion: "Selecione o pronome relativo de lugar: 'C'est la place _____ travaillent les artistes.'",
        options: ["où", "que", "qui"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto de Montmartre: 'Je monte jusqu'au _____ pour admirer la vue de Paris.'",
        options: ["Sacré-Cœur", "Louvre", "Navigo"],
        correctIndex: 0,
        explanation: "O monumento que coroa a colina de Montmartre é a Basílica do Sacré-Cœur."
      },
      {
        question: "Reordene corretamente a frase do entardecer boêmio: [ la vue / admire / depuis / j' / de Paris / la colline ]",
        options: [
          "J'admire la vue de Paris depuis la colline.",
          "Depuis la vue de Paris j'admire la colline.",
          "La colline j'admire la vue depuis de Paris."
        ],
        correctIndex: 0,
        explanation: "A frase na ordem canônica é 'J'admire la vue de Paris depuis la colline.'"
      },
      {
        question: "Como se traduz: 'Eu subi a Montmartre de funicular'?",
        options: [
          "Je suis monté à Montmartre en funiculaire.",
          "J'ai monté en Montmartre à funiculaire.",
          "Je suis monter à Montmartre par funiculaire."
        ],
        correctIndex: 0,
        explanation: "Usa-se o auxiliar 'être' ('Je suis monté') e a preposição 'en funiculaire'."
      },
      {
        question: "Qual frase abaixo contém um ERRO do auxiliar com o verbo de movimento 'monter'?",
        options: [
          "J'ai monté à Montmartre hier soir.",
          "Je suis monté à Montmartre hier soir.",
          "Nous sommes montés au Sacré-Cœur."
        ],
        correctIndex: 0,
        explanation: "O erro está em 'J'ai monté'; ao indicar movimento intransitivo usa-se 'Je suis monté'."
      },
      {
        question: "O que torna o bairro de Montmartre tão especial na experiência noturna da Aula 11?",
        options: [
          "Sua atmosfera boêmia, artistas de rua na praça, o funicular e a vista panorâmica do Sacré-Cœur.",
          "Seus grandes arranha-céus de vidro e sedes de bancos internacionais.",
          "Sua proximidade com as pistas de pouso do Aeroporto Charles de Gaulle."
        ],
        correctIndex: 0,
        explanation: "Montmartre é célebre pela colina boêmia, pelos artistas na praça e pelo Sacré-Cœur."
      }
    ]
  },
  12: {
    grammarPoints: [
      {
        ruleTitle: "Expressão de Dor Física (Avoir mal à...)",
        explanationPt: "Para expressar dor em francês, usamos o verbo 'avoir' + 'mal' + preposição à contraída com o artigo da parte do corpo: 'J'ai mal à la tête' (dor de cabeça), 'J'ai mal aux pieds' (dor nos pés).",
        exampleFr: "J'ai mal à la tête et j'ai mal aux pieds après une longue journée de marche.",
        examplePt: "Estou com dor de cabeça e com dor nos pés após um longo dia de caminhada.",
        practiceQuestion: "Complete a frase para 'dor de cabeça' (feminino singular): 'J'ai mal _____ tête.'",
        options: ["à la", "au", "aux"],
        correctIndex: 0
      },
      {
        ruleTitle: "Pronome Pessoal Objeto Indireto 'lui / leur' (Je lui demande)",
        explanationPt: "Na farmácia, 'Je lui demande un conseil' usa o pronome objeto indireto 'lui' (a ele/a ela) para substituir 'à la pharmacienne' ou 'au pharmacien'.",
        exampleFr: "J'entre dans la pharmacie et je lui demande un médicament efficace.",
        examplePt: "Eu entro na farmácia e peço-lhe um medicamento eficaz.",
        practiceQuestion: "Escolha o pronome indireto singular correto: 'Je _____ demande un conseil de santé.'",
        options: ["lui", "le", "la"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna com a palavra francesa de saúde: 'J'entre dans la pharmacie avec la _____ verte lumineuse.'",
        options: ["croix", "table", "rue"],
        correctIndex: 0,
        explanation: "As farmácias na França são identificadas pela famosa cruz verde ('la croix verte')."
      },
      {
        question: "Ordene a frase de sintoma médico da Aula 12: [ à la / J'ai / mal / tête / très / aujourd'hui ]",
        options: [
          "J'ai très mal à la tête aujourd'hui.",
          "Aujourd'hui mal j'ai à la tête très.",
          "Très à la tête j'ai mal aujourd'hui."
        ],
        correctIndex: 0,
        explanation: "A ordem natural e correta é 'J'ai très mal à la tête aujourd'hui.'"
      },
      {
        question: "Como se traduz: 'Eu estou com dor nos pés após caminhar'?",
        options: [
          "J'ai mal aux pieds après avoir marché.",
          "J'ai mal à les pieds après marcher.",
          "Je suis mal dans les pieds."
        ],
        correctIndex: 0,
        explanation: "A contração de 'à + les pieds' é obrigatoriamente 'aux pieds'."
      },
      {
        question: "Aponte a frase que apresenta um ERRO na expressão de dor com parte do corpo no plural:",
        options: [
          "J'ai mal à les pieds après ma marche.",
          "J'ai mal aux pieds après ma marche.",
          "J'ai mal à la tête aujourd'hui."
        ],
        correctIndex: 0,
        explanation: "O erro é 'à les pieds'; em francês deve-se contrair sempre para 'aux pieds'."
      },
      {
        question: "Por que Irlan precisou entrar na farmácia parisiense durante a Aula 12?",
        options: [
          "Para pedir remédio de dor de cabeça e curativos para os pés após muito caminhar por Paris.",
          "Para comprar ingressos para o espetáculo da Ópera Garnier.",
          "Para comprar um café da manhã com croissants quentes."
        ],
        correctIndex: 0,
        explanation: "Irlan sentiu cansaço/dor de cabeça e nos pés após explorar a cidade a pé."
      }
    ]
  },
  13: {
    grammarPoints: [
      {
        ruleTitle: "Verbo Visiter com Monumentos vs. Rendre visite à pessoas",
        explanationPt: "Na frase 'Je visite le magnifique château de Versailles', usamos o verbo 'visiter' direto sem preposição ao nos referirmos a lugares, museus e monumentos.",
        exampleFr: "Je visite le château de Versailles et la célèbre Galerie des Glaces.",
        examplePt: "Eu visito o castelo de Versalhes e a famosa Galeria dos Espelhos.",
        practiceQuestion: "Complete corretamente com o verbo de visitar lugares: 'Demain, nous _____ le château.'",
        options: ["visitons", "rendons visite", "visitons à"],
        correctIndex: 0
      },
      {
        ruleTitle: "Adjetivos em Posição Pós-Nominal (jardins géométriques)",
        explanationPt: "Em 'les jardins géométriques de Versailles', adjetivos qualificativos longos ou que expressam forma e estilo arquitetônico colocam-se após o substantivo.",
        exampleFr: "J'admire les grands bassins et les jardins géométriques du palais.",
        examplePt: "Eu admiro os grandes espelhos d'água e os jardins geométricos do palácio.",
        practiceQuestion: "Escolha a ordem correta para substantivo + adjetivo: 'Ce sont des _____' (jardins franceses).",
        options: ["jardins français", "français jardins", "jardins de français"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do passeio em Versalhes: 'Je découvre la célèbre Galerie des _____ brillante.'",
        options: ["Glaces", "Gares", "Chaises"],
        correctIndex: 0,
        explanation: "O salão mais emblemático de Versalhes é a Galeria dos Espelhos ('Galerie des Glaces')."
      },
      {
        question: "Reordene a frase sobre o Palácio real: [ château de / Je / le / Versailles / visite / magnifique ]",
        options: [
          "Je visite le magnifique château de Versailles.",
          "Le magnifique je visite château de Versailles.",
          "Versailles de château magnifique je visite."
        ],
        correctIndex: 0,
        explanation: "A ordem canônica no texto é 'Je visite le magnifique château de Versailles.'"
      },
      {
        question: "Como se traduz para o francês: 'Eu visito os jardins geométricos de Versalhes'?",
        options: [
          "Je visite les jardins géométriques de Versailles.",
          "Je visiter les géométriques jardins de Versailles.",
          "Je visite à les jardins géométriques de Versailles."
        ],
        correctIndex: 0,
        explanation: "O verbo 'visiter' é direto para lugares ('Je visite les jardins') e o adjetivo vai após o nome."
      },
      {
        question: "Identifique a frase com ERRO no uso do verbo 'visiter' com monumentos:",
        options: [
          "Je visite au château de Versailles.",
          "Je visite le château de Versailles.",
          "Je découvre les jardins du palais."
        ],
        correctIndex: 0,
        explanation: "O erro é 'visite au château'; o verbo 'visiter' é transitivo direto com lugares ('visiter le château')."
      },
      {
        question: "Qual é a principal atração arquitetônica de Versalhes admirada por Irlan na Aula 13?",
        options: [
          "A suntuosa Galeria dos Espelhos e os jardins geométricos à francesa projetados no palácio real.",
          "As ruínas medievais de um forte militar viking.",
          "A estação moderna de trens de alta velocidade TGV."
        ],
        correctIndex: 0,
        explanation: "Versalhes destaca-se pelo palácio real, pela Galeria dos Espelhos e por seus jardins simétricos."
      }
    ]
  },
  14: {
    grammarPoints: [
      {
        ruleTitle: "Verbos Reflexivos de Rotina (se promener / s'arrêter)",
        explanationPt: "Na frase 'Je m'arrête devant une colonne Morris', o verbo reflexivo 's'arrêter' indica uma ação que o próprio sujeito realiza sobre si no cotidiano de bairro.",
        exampleFr: "Je m'arrête devant une colonne Morris pour regarder les affiches de théâtre.",
        examplePt: "Eu paro diante de uma coluna Morris para ver os cartazes de teatro.",
        practiceQuestion: "Complete a conjugação reflexiva do presente: 'Je _____ sur un banc Davioud.'",
        options: ["m'assieds", "s'assieds", "me assied"],
        correctIndex: 0
      },
      {
        ruleTitle: "Preposição de Lugar 'devant' (diante de / na frente de)",
        explanationPt: "Em 'devant une colonne Morris', a preposição 'devant' indica localização espacial frontal diante de um monumento ou mobiliário urbano sem contração com o artigo.",
        exampleFr: "Je m'arrête devant une colonne Morris et à côté d'une fontaine Wallace.",
        examplePt: "Eu paro diante de uma coluna Morris e ao lado de uma fonte Wallace.",
        practiceQuestion: "Selecione a preposição para 'na frente de': 'Il attend _____ la fontaine Wallace.'",
        options: ["devant", "dedans", "en"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto do bairro: 'Je m'arrête devant une colonne _____ para ver os cartazes de teatro.'",
        options: ["Morris", "Eiffel", "Navigo"],
        correctIndex: 0,
        explanation: "As tradicionais colunas parisienses de cartazes culturais são as 'colonnes Morris'."
      },
      {
        question: "Ordene a frase da rotina de bairro da Aula 14: [ mon arrondissement / explore / Ce matin / j' / de quartier ]",
        options: [
          "Ce matin, j'explore mon arrondissement de quartier.",
          "Mon arrondissement j'explore ce matin de quartier.",
          "De quartier ce matin j'explore mon arrondissement."
        ],
        correctIndex: 0,
        explanation: "A ordem natural da frase é 'Ce matin, j'explore mon arrondissement de quartier.'"
      },
      {
        question: "Como se traduz: 'Eu me sento em um banco ao lado de uma fonte'?",
        options: [
          "Je m'assieds sur un banc à côté d'une fontaine.",
          "Je m'assieds dans un banc par une fontaine.",
          "Je s'assieds sur le banc en fontaine."
        ],
        correctIndex: 0,
        explanation: "Usa-se o reflexivo 'Je m'assieds' e a locução 'à côté de' (ao lado de)."
      },
      {
        question: "Qual frase abaixo apresenta um ERRO comum na preposição 'devant' em francês?",
        options: [
          "Je m'arrête devant de la colonne Morris.",
          "Je m'arrête devant la colonne Morris.",
          "Je regarde les affiches sur la colonne."
        ],
        correctIndex: 0,
        explanation: "A preposição 'devant' rege objeto direto sem 'de' ('devant la colonne', nunca 'devant de la')."
      },
      {
        question: "Como Irlan vivencia a rotina autêntica e os detalhes de seu bairro parisiense nesta Aula 14?",
        options: [
          "Passeia pela feira ao ar livre, vê cartazes na coluna Morris e bebe água em uma fonte Wallace.",
          "Pega um trem noturno para sair da França em direção à Suíça.",
          "Passa o dia todo jogando videogame dentro do quarto do hotel."
        ],
        correctIndex: 0,
        explanation: "A lição explora o charme do cotidiano: feiras livres, colunas Morris e fontes Wallace."
      }
    ]
  },
  15: {
    grammarPoints: [
      {
        ruleTitle: "Pronome Relativo 'qui' como Sujeito (les lustres qui illuminent)",
        explanationPt: "Na frase 'les lustres dorés qui illuminent la salle', o pronome relativo 'qui' atua como sujeito do verbo 'illuminent', conectando os lustres à ação de iluminar.",
        exampleFr: "J'admire les lustres dorés qui illuminent la grande salle du théâtre.",
        examplePt: "Eu admiro os lustres dourados que iluminam a grande sala do teatro.",
        practiceQuestion: "Escolha o pronome relativo sujeito correto: 'Voici les musiciens _____ jouent sur scène.'",
        options: ["qui", "que", "dont"],
        correctIndex: 0
      },
      {
        ruleTitle: "Advérbios em -ment (élégamment / attentivement)",
        explanationPt: "Na frase 'Je m'habille élégamment pour assister au spectacle', o advérbio de modo 'élégamment' é derivado do adjetivo 'élégant' modificando o verbo vestirse.",
        exampleFr: "Ce soir, je m'habille élégamment et j'observe attentivement le plafond.",
        examplePt: "Esta noite, me visto elegantemente e observo atentamente o teto.",
        practiceQuestion: "Complete com o advérbio de modo: 'Le public écoute _____ la symphonie.'",
        options: ["attentivement", "attentif", "attentive"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto do teatro: 'J'observe attentivement le magnifique _____ peint par Marc Chagall.'",
        options: ["plafond", "escalier", "billet"],
        correctIndex: 0,
        explanation: "O teto da sala da Ópera Garnier ('le plafond') é uma célebre obra-prima pintada por Marc Chagall."
      },
      {
        question: "Ordene a frase elegante da Ópera Garnier: [ élégamment / m'habille / Ce soir / je / au spectacle / pour assister ]",
        options: [
          "Ce soir, je m'habille élégamment pour assister au spectacle.",
          "Je m'habille au spectacle pour assister ce soir élégamment.",
          "Pour assister élégamment ce soir je m'habille au spectacle."
        ],
        correctIndex: 0,
        explanation: "A ordem natural da frase é 'Ce soir, je m'habille élégamment pour assister au spectacle.'"
      },
      {
        question: "Como se traduz: 'A acústica da sala é absolutamente perfeita'?",
        options: [
          "L'acoustique de la salle est absolument parfaite.",
          "L'acoustique du salle est absolu parfait.",
          "La acoustique de le salon est parfaite."
        ],
        correctIndex: 0,
        explanation: "'Acoustique' e 'salle' são femininos, exigindo a concordância 'parfaite'."
      },
      {
        question: "Aponte qual frase contém um ERRO na escolha entre pronome relativo 'qui' e 'que':",
        options: [
          "J'admire les lustres que illuminent la salle.",
          "J'admire les lustres qui illuminent la salle.",
          "J'admire le plafond que Chagall a peint."
        ],
        correctIndex: 0,
        explanation: "O erro é 'que illuminent'; por ser o sujeito do verbo, deve-se usar 'qui' ('qui illuminent')."
      },
      {
        question: "Por que a visita à Ópera Garnier na Aula 15 representa uma noite especial na viagem de Irlan?",
        options: [
          "Ele se veste elegante, admira a arquitetura em mármore, o teto de Chagall e ouve uma sinfonia clássica.",
          "Ele assiste a uma partida de futebol europeu no estádio Parc des Princes.",
          "Ele participa de uma aula de culinária para fazer crepes e macarrons."
        ],
        correctIndex: 0,
        explanation: "A Aula 15 é uma experiência cultural de música clássica no histórico Opéra Garnier."
      }
    ]
  },
  16: {
    grammarPoints: [
      {
        ruleTitle: "Uso do Particípio Passado como Adjetivo (tout juste sortie)",
        explanationPt: "Em 'une baguette tout juste sortie du four', o particípio 'sortie' concorda em gênero e número (feminino singular) com o substantivo feminino 'la baguette'.",
        exampleFr: "Je goûte une baguette tout juste sortie du four chez le boulanger.",
        examplePt: "Eu provo uma baguete recém-saída do forno na padaria.",
        practiceQuestion: "Complete a concordância do adjetivo participial: 'Des baguettes chaudes et _____ du four.'",
        options: ["sorties", "sorti", "sortie"],
        correctIndex: 0
      },
      {
        ruleTitle: "Para + Infinitivo com Preposição 'pour' (pour accompagner)",
        explanationPt: "Em 'un vin rouge pour accompagner mon déjeuner', a preposição 'pour' introduz a finalidade/objetivo da ação seguida sempre por um verbo no infinitivo.",
        exampleFr: "Le sommelier suggère un vin rouge équilibré pour accompagner les fromages.",
        examplePt: "O sommelier sugere um vinho tinto equilibrado para acompanhar os queijos.",
        practiceQuestion: "Escolha a preposição que indica finalidade: 'J'entre à la fromagerie _____ acheter du camembert.'",
        options: ["pour", "par", "en"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto gastronômico: 'Je goûte une baguette tout juste sortie du _____.'",
        options: ["four", "ciel", "métro"],
        correctIndex: 0,
        explanation: "A baguete artesanal fresca sai diretamente do forno ('du four')."
      },
      {
        question: "Ordene a frase sobre a tradição dos queijos: [ un camembert / me conseille / Le fromager / crémeux ]",
        options: [
          "Le fromager me conseille un camembert crémeux.",
          "Un camembert crémeux le fromager me conseille.",
          "Me conseille crémeux un camembert le fromager."
        ],
        correctIndex: 0,
        explanation: "A frase na ordem canônica é 'Le fromager me conseille un camembert crémeux.'"
      },
      {
        question: "Como se traduz: 'O sommelier me sugere um vinho tinto equilibrado'?",
        options: [
          "Le sommelier me suggère un vin rouge équilibré.",
          "Le sommelier me sugere un vin tinto équilibré.",
          "Le sommelier suggérer mon vin rouge."
        ],
        correctIndex: 0,
        explanation: "Usa-se a conjugação 'me suggère' e a expressão 'vin rouge équilibré'."
      },
      {
        question: "Identifique a frase que apresenta um ERRO na concordância do particípio com 'baguette':",
        options: [
          "Je mange une baguette sorti du four.",
          "Je mange une baguette sortie du four.",
          "Nous goûtons des croissants chauds."
        ],
        correctIndex: 0,
        explanation: "O erro é 'baguette sorti'; 'baguette' é feminino e exige o '-e' ('baguette sortie')."
      },
      {
        question: "Quais são os três pilares da gastronomia parisiense explorados por Irlan na Aula 16?",
        options: [
          "A padaria artesanal (baguete quente), a queijaria do bairro (camembert/comté) e o vinho tinto do bistrô.",
          "Hamburguerias rápidas, refrigerantes gaseificados e pipoca de cinema.",
          "Comida congelada de micro-ondas e sucos em caixa."
        ],
        correctIndex: 0,
        explanation: "A aula aborda a santíssima trindade francesa: pão artesanal, queijo maturado e bom vinho."
      }
    ]
  },
  17: {
    grammarPoints: [
      {
        ruleTitle: "Superlativo Absoluto com Adjetivos (les plus prestigieuses)",
        explanationPt: "Na frase 'les plus prestigieuses maisons de haute couture', o superlativo é formado com o artigo definido (les) + 'plus' + adjetivo concordando em plural feminino.",
        exampleFr: "L'Avenue Montaigne rassemble les plus prestigieuses maisons de haute couture.",
        examplePt: "A Avenue Montaigne reúne as mais prestigiosas casas de alta-costura.",
        practiceQuestion: "Complete o superlativo plural feminino: 'Ce sont les _____ élégantes boutiques de Paris.'",
        options: ["plus", "très", "beaucoup"],
        correctIndex: 0
      },
      {
        ruleTitle: "Substantivos Invariáveis e Locuções com 'de' (haute couture)",
        explanationPt: "Na expressão 'maisons de haute couture', a locução adjetiva iniciada por 'de' qualifica o tipo das casas de moda sem flexionar o termo que se segue.",
        exampleFr: "J'admire les vitrines des grandes maisons de haute couture parisienne.",
        examplePt: "Eu admiro as vitrines das grandes casas de alta-costura parisiense.",
        practiceQuestion: "Selecione a locução correta para 'alta-costura' em francês:",
        options: ["haute couture", "haut couture", "haute coutures"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna da aula de moda: 'L'Avenue Montaigne rassemble les grandes maisons de haute _____.'",
        options: ["couture", "voiture", "lecture"],
        correctIndex: 0,
        explanation: "O termo francês de renome internacional para a alta moda é 'la haute couture'."
      },
      {
        question: "Reordene a frase sobre o estilo de Paris: [ tradition / un équilibre / et modernité / parfait entre / C'est ]",
        options: [
          "C'est un équilibre parfait entre tradition et modernité.",
          "Entre tradition c'est parfait un équilibre et modernité.",
          "Un équilibre tradition c'est entre parfait modernité."
        ],
        correctIndex: 0,
        explanation: "A frase na ordem canônica é 'C'est un équilibre parfait entre tradition et modernité.'"
      },
      {
        question: "Como se traduz para o francês: 'Eu passeio pela Avenue Montaigne'?",
        options: [
          "Je me promène sur l'Avenue Montaigne.",
          "Je promène en l'Avenue Montaigne.",
          "Je suis promener à l'Avenue Montaigne."
        ],
        correctIndex: 0,
        explanation: "O verbo reflexivo é 'Je me promène' e avenidas usam a preposição 'sur'."
      },
      {
        question: "Qual frase abaixo contém um ERRO na formação do superlativo com substantivo feminino plural?",
        options: [
          "Ce sont le plus prestigieuses maisons de Paris.",
          "Ce sont les plus prestigieuses maisons de Paris.",
          "C'est la plus belle avenue de la ville."
        ],
        correctIndex: 0,
        explanation: "O erro é 'le plus prestigieuses maisons'; o artigo do superlativo deve concordar no plural ('les plus')."
      },
      {
        question: "O que Irlan observa durante sua caminhada pela Avenue Montaigne na Aula 17?",
        options: [
          "As prestigiosas casas de alta-costura, o saber artesanal único dos ateliês e as vitrines iluminadas.",
          "O cais onde chegam os barcos mercantes cheios de frutas.",
          "Um torneio universitário de tênis em quadra de saibro."
        ],
        correctIndex: 0,
        explanation: "A Avenue Montaigne é o ícone da moda, da elegância e do refinamento artesanal de Paris."
      }
    ]
  },
  18: {
    grammarPoints: [
      {
        ruleTitle: "Adjetivo Célèbre + Preposição 'pour' (célèbre pour...)",
        explanationPt: "Na frase 'le Quartier Latin, célèbre pour ses universités', a expressão 'célèbre pour' rege a causa ou o motivo da fama de um lugar.",
        exampleFr: "Je traverse le Quartier Latin, célèbre pour ses universités prestigieuses.",
        examplePt: "Eu atravesso o Quarteirão Latino, célebre por suas universidades prestigiosas.",
        practiceQuestion: "Complete a preposição da causa: 'La Sorbonne est célèbre _____ son histoire.'",
        options: ["pour", "par", "de"],
        correctIndex: 0
      },
      {
        ruleTitle: "Verbo Rendre na Expressão 'rendre hommage' (prestar homenagem)",
        explanationPt: "Em 'je rends hommage aux grands penseurs', usamos o verbo 'rendre' (je rends, tu rends, il rend) na locução 'rendre hommage à quelqu'un'.",
        exampleFr: "En montant vers le Panthéon, je rends hommage aux grands penseurs de France.",
        examplePt: "Subindo em direção ao Panteão, eu presto homenagem aos grandes pensadores da França.",
        practiceQuestion: "Complete a conjugação correta: 'Au Panthéon, nous _____ hommage aux écrivains.'",
        options: ["rendons", "rendez", "rendent"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto universitário: 'Je traverse le Quartier _____, célèbre pour ses universités.'",
        options: ["Latin", "Grec", "Romain"],
        correctIndex: 0,
        explanation: "O histórico bairro estudantil ao redor da Sorbonne é chamado 'le Quartier Latin'."
      },
      {
        question: "Ordene a frase sobre a vida intelectual: [ de littérature / discutent / Les étudiants / et de philosophie ]",
        options: [
          "Les étudiants discutent de littérature et de philosophie.",
          "De littérature les étudiants et de philosophie discutent.",
          "Discutent les étudiants littérature de et de philosophie."
        ],
        correctIndex: 0,
        explanation: "A ordem natural e correta é 'Les étudiants discutent de littérature et de philosophie.'"
      },
      {
        question: "Como se traduz: 'Eu presto homenagem aos grandes pensadores'?",
        options: [
          "Je rends hommage aux grands penseurs.",
          "Je fais hommage à les grands pensadores.",
          "Je rendre homage au grands penseurs."
        ],
        correctIndex: 0,
        explanation: "A expressão é 'Je rends hommage' e a contração 'aux' (à + les)."
      },
      {
        question: "Aponte qual frase contém um ERRO de preposição na expressão de causa da fama:",
        options: [
          "Le quartier est célèbre par ses universités.",
          "Le quartier est célèbre pour ses universités.",
          "La Sorbonne est célèbre pour sa bibliothèque."
        ],
        correctIndex: 0,
        explanation: "Em francês, a expressão correta para 'célebre por seu motivo' é 'célèbre pour' (não 'par')."
      },
      {
        question: "Por que o Panteão e a Sorbonne são os pontos centrais da caminhada de Irlan na Aula 18?",
        options: [
          "Porque representam o coração intelectual, filosófico e a vida estudantil histórica do Quarteirão Latino.",
          "Porque são os centros comerciais com maiores promoções de eletrônicos em Paris.",
          "Porque abrigam as maiores quadras cobertas para treino de patinação no gelo."
        ],
        correctIndex: 0,
        explanation: "O Quarteirão Latino é o berço universitário de Paris desde a Idade Média."
      }
    ]
  },
  19: {
    grammarPoints: [
      {
        ruleTitle: "Locução Adverbial 'en plein air' (ao ar livre)",
        explanationPt: "Em 'les portraitistes installent leurs chevalets en plein air', a expressão invariável 'en plein air' indica atividade realizada na rua ou praça pública sob o céu aberto.",
        exampleFr: "Des peintres et des portraitistes installent leurs chevalets en plein air sur la place.",
        examplePt: "Pintores e retratistas instalam seus cavaletes ao ar livre na praça.",
        practiceQuestion: "Complete a expressão 'ao ar livre' em francês: 'Les artistes peignent en plein _____.'",
        options: ["air", "ciel", "vent"],
        correctIndex: 0
      },
      {
        ruleTitle: "Preposição de Origem do Ponto de Vista 'depuis' (desde/de cima de)",
        explanationPt: "Na frase 'Depuis le sommet de la butte, le panorama est féerique', a preposição 'depuis' indica o ponto de observação no espaço (a partir de / desde o topo).",
        exampleFr: "Depuis le sommet de la butte, je regarde les toits de Paris au soleil.",
        examplePt: "Desde o topo da colina, eu observo os telhados de Paris sob o sol.",
        practiceQuestion: "Selecione a preposição que indica o ponto inicial de observação: '_____ la colline, la vue est magnifique.'",
        options: ["Depuis", "Pendant", "Dans"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto de Montmartre de dia: 'Les peintres installent leurs chevalets sur la Place du _____.'",
        options: ["Tertre", "Louvre", "Nord"],
        correctIndex: 0,
        explanation: "A célebre praça onde os pintores ao ar livre trabalham em Montmartre é a 'Place du Tertre'."
      },
      {
        question: "Ordene a frase sobre a colina dos artistas: [ en plein air / chevalets / Les peintres / leurs / installent ]",
        options: [
          "Les peintres installent leurs chevalets en plein air.",
          "Leurs chevalets en plein air installent les peintres.",
          "En plein air les peintres leurs chevalets installent."
        ],
        correctIndex: 0,
        explanation: "A ordem natural no texto é 'Les peintres installent leurs chevalets en plein air.'"
      },
      {
        question: "Como se traduz: 'Do topo da colina, o panorama é mágico'?",
        options: [
          "Depuis le sommet de la butte, le panorama est féerique.",
          "De le topo de la colline, le panorama est magique.",
          "Depuis la sommet de butte est panorama féerique."
        ],
        correctIndex: 0,
        explanation: "'Desde o topo da colina' diz-se 'Depuis le sommet de la butte'."
      },
      {
        question: "Aponte a frase com ERRO no uso da expressão invariável para 'ao ar livre':",
        options: [
          "Les artistes travaillent en pleins airs.",
          "Les artistes travaillent en plein air.",
          "Je regarde les tableaux en plein air."
        ],
        correctIndex: 0,
        explanation: "A locução 'en plein air' é estritamente invariável no singular (nunca 'en pleins airs')."
      },
      {
        question: "Como se diferencia a visita de Irlan a Montmartre na Aula 19 da sua visita noturna anterior na Aula 11?",
        options: [
          "Na Aula 19 ele explora a Place du Tertre durante o dia, observando os pintores e retratistas ao ar livre.",
          "Na Aula 19 ele visita apenas as galerias subterrâneas de esgoto do bairro.",
          "Na Aula 19 ele assiste a uma ópera de música clássica alemã."
        ],
        correctIndex: 0,
        explanation: "A Aula 19 mostra Montmartre de dia com foco na pintura ao ar livre na Place du Tertre."
      }
    ]
  },
  20: {
    grammarPoints: [
      {
        ruleTitle: "Particípio Passado Instalado em (installé dans)",
        explanationPt: "Em 'musée installé dans une ancienne gare', o adjetivo participial 'installé' qualifica o substantivo masculino singular 'le musée' e concorda em número/gênero.",
        exampleFr: "Le Musée d'Orsay est installé dans une ancienne gare ferroviaire monumentale.",
        examplePt: "O Museu de Orsay está instalado em uma antiga estação ferroviária monumental.",
        practiceQuestion: "Complete a concordância para 'a coleção instalada': 'La collection est _____ dans la salle.'",
        options: ["installée", "installé", "installés"],
        correctIndex: 0
      },
      {
        ruleTitle: "Preposição de Localização 'derrière' (atrás de)",
        explanationPt: "Na frase 'Derrière la grande horloge du musée, je découvre une vue', a preposição 'derrière' indica posicionamento na parte posterior de um elemento arquitetônico.",
        exampleFr: "Derrière la grande horloge, je découvre une vue spectaculaire sur la Seine.",
        examplePt: "Atrás do grande relógio, eu descubro uma vista espetacular sobre o Sena.",
        practiceQuestion: "Selecione a preposição para 'atrás do relógio': '_____ l'horloge, on voit la ville.'",
        options: ["Derrière", "Devant", "Sur"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto do Museu de Orsay: 'Le musée est installé dans une ancienne _____ ferroviaire.'",
        options: ["gare", "cathédrale", "école"],
        correctIndex: 0,
        explanation: "O Museu de Orsay está abrigado no edifício monumental de uma antiga estação ferroviária ('gare')."
      },
      {
        question: "Ordene a frase sobre a vista do relógio: [ sur la Seine / découvre / une vue / J' / spectaculaire ]",
        options: [
          "Je découvre une vue spectaculaire sur la Seine.",
          "Sur la Seine une vue découvre j' spectaculaire.",
          "Une vue j' sur la Seine découvre spectaculaire."
        ],
        correctIndex: 0,
        explanation: "A ordem canônica da frase do texto é 'Je découvre une vue spectaculaire sur la Seine.'"
      },
      {
        question: "Como se traduz para o francês: 'Eu admiro os quadros impressionistas de Monet'?",
        options: [
          "J'admire les tableaux impressionnistes de Monet.",
          "J'admire les quadros impressioniste du Monet.",
          "Je admirer les peintures de la Monet."
        ],
        correctIndex: 0,
        explanation: "Conjugação 'J'admire', plural 'tableaux impressionnistes' e preposição 'de Monet'."
      },
      {
        question: "Qual das frases abaixo contém um ERRO na preposição 'derrière' em francês?",
        options: [
          "Derrière de la grande horloge, on voit Paris.",
          "Derrière la grande horloge, on voit Paris.",
          "Je regarde la Seine derrière le musée."
        ],
        correctIndex: 0,
        explanation: "A preposição 'derrière' rege o substantivo diretamente sem 'de' ('derrière la horloge', nunca 'derrière de la')."
      },
      {
        question: "Além das pinturas impressionistas de Monet e Degas, qual é o ponto de observação famoso do Museu de Orsay?",
        options: [
          "O grande relógio de vidro do museu, que oferece uma vista panorâmica sobre o Sena e o Louvre.",
          "Uma torre de rádio no telhado do edifício.",
          "O porão com aquários de peixes de água doce."
        ],
        correctIndex: 0,
        explanation: "O relógio de vidro no andar superior do Musée d'Orsay é um dos pontos mais fotografados de Paris."
      }
    ]
  },
  21: {
    grammarPoints: [
      {
        ruleTitle: "Verbos Reflexivos de Descanso (se reposer)",
        explanationPt: "Em 'je vais me reposer au célèbre Jardin du Luxembourg', o infinitivo pronominal 'se reposer' adota o pronome reflexivo 'me' para concordar com o sujeito 'je' na locução 'je vais me reposer'.",
        exampleFr: "Après mes visites, je vais me reposer au célèbre Jardin du Luxembourg.",
        examplePt: "Após minhas visitas, eu vou me repousar no famoso Jardim de Luxemburgo.",
        practiceQuestion: "Complete a locução com infinitivo reflexivo: 'Tu vas _____ reposer dans le jardin ?'",
        options: ["te", "me", "se"],
        correctIndex: 0
      },
      {
        ruleTitle: "Locução Prepositiva 'autour de' (ao redor de)",
        explanationPt: "Na frase 'Autour du grand bassin central', a expressão 'autour de' indica cercania no perímetro; a preposição 'de' contraída com 'le' torna-se 'du' (autour du bassin).",
        exampleFr: "Autour du grand bassin central, j'observe les petits bateaux à voile.",
        examplePt: "Ao redor do grande espelho d'água central, eu observo os pequenos barcos a vela.",
        practiceQuestion: "Selecione a contração correta para 'ao redor do jardim' (masculino): '_____ jardin, il y a des arbres.'",
        options: ["Autour du", "Autour de le", "Autour au"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto dos jardins: 'Je m'assieds sur une chaise _____ traditionnelle pour lire un livre.'",
        options: ["verte", "bleue", "rouge"],
        correctIndex: 0,
        explanation: "As icônicas cadeiras metálicas do Jardim de Luxemburgo e Tuileries são verdes ('chaises vertes')."
      },
      {
        question: "Ordene a frase sobre a tarde no parque: [ au soleil / pour lire / m'assieds / un livre / Je ]",
        options: [
          "Je m'assieds pour lire un livre au soleil.",
          "Pour lire au soleil je un livre m'assieds.",
          "Un livre au soleil je m'assieds pour lire."
        ],
        correctIndex: 0,
        explanation: "A ordem correta na narrativa é 'Je m'assieds pour lire un livre au soleil.'"
      },
      {
        question: "Como traduzir para o francês: 'Eu vou me repousar no Jardim de Luxemburgo'?",
        options: [
          "Je vais me reposer au Jardin du Luxembourg.",
          "Je vais se reposer dans le Jardin de Luxembourg.",
          "Je aller me reposer à le Jardin du Luxembourg."
        ],
        correctIndex: 0,
        explanation: "Conjugação do futuro próximo 'Je vais me reposer' e contração 'au Jardin'."
      },
      {
        question: "Identifique a frase que apresenta um ERRO de contração de 'autour de + le' no masculino:",
        options: [
          "Autour de le bassin, les enfants jouent.",
          "Autour du bassin, les enfants jouent.",
          "Je marche autour du grand jardin."
        ],
        correctIndex: 0,
        explanation: "O erro é 'Autour de le'; a contração 'du' é gramaticalmente obrigatória ('Autour du bassin')."
      },
      {
        question: "Qual atividade tradicional as crianças parisienses fazem no espelho d'água do Jardim de Luxemburgo?",
        options: [
          "Fazem navegar pequenos barcos a vela tradicionais de madeira usando varas de bambu.",
          "Nadam na água gelada com roupas de mergulho.",
          "Pescam peixes dourados com redes de pesca."
        ],
        correctIndex: 0,
        explanation: "O aluguel de velerinhos de madeira no 'grand bassin' de Luxemburgo é uma tradição de séculos."
      }
    ]
  },
  22: {
    grammarPoints: [
      {
        ruleTitle: "Verbo Pronominal com Sentido de Deslocamento (se rendre à...)",
        explanationPt: "Em 'Je me rends sur la Place de la Bastille', o verbo pronominal 'se rendre' significa 'dirigir-se a / ir até', sendo uma forma elegante do cotidiano urbano.",
        exampleFr: "Je me rends sur la Place de la Bastille pour comprendre l'histoire de France.",
        examplePt: "Eu me dirijo à Praça da Bastilha para compreender a história da França.",
        practiceQuestion: "Complete a conjugação com 'nous': 'Demain, nous _____ rendons à la Bastille.'",
        options: ["nous", "vous", "se"],
        correctIndex: 0
      },
      {
        ruleTitle: "Participio Passado Coroada/Surmontée com Concordância (surmontée par)",
        explanationPt: "Na frase 'la Colonne de Juillet surmontée par le Génie', o adjetivo participial 'surmontée' concorda com o substantivo feminino singular 'la Colonne' (terminando em '-ée').",
        exampleFr: "Au centre de la place s'élève la Colonne de Juillet surmontée par le Génie doré.",
        examplePt: "No centro da praça ergue-se a Coluna de Julho coroada pelo Gênio dourado.",
        practiceQuestion: "Selecione a concordância feminina singular correta: 'La tour est _____ d'un drapeau.'",
        options: ["surmontée", "surmonté", "surmontés"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto histórico: 'Je me rends sur la Place de la _____ para entender a Revolução Francesa.'",
        options: ["Bastille", "Concorde", "Sorbonne"],
        correctIndex: 0,
        explanation: "O marco histórico onde teve início a Revolução Francesa é a Praça da Bastilha ('la Bastille')."
      },
      {
        question: "Ordene a frase sobre o lema republicano francês: [ la devise / Je lis / Liberté, Égalité, Fraternité / républicaine ]",
        options: [
          "Je lis la devise républicaine Liberté, Égalité, Fraternité.",
          "Liberté, Égalité, Fraternité républicaine la devise je lis.",
          "La devise je lis républicaine Liberté, Égalité, Fraternité."
        ],
        correctIndex: 0,
        explanation: "A ordem canônica no texto é 'Je lis la devise républicaine Liberté, Égalité, Fraternité.'"
      },
      {
        question: "Como se traduz: 'No centro da praça ergue-se a Coluna de Julho'?",
        options: [
          "Au centre de la place s'élève la Colonne de Juillet.",
          "Dans le centre du place ergue le Coluna de Juillet.",
          "Au centre de la place se lève la Colonne de Julho."
        ],
        correctIndex: 0,
        explanation: "'No centro da praça' diz-se 'Au centre de la place' com o verbo 's'élève'."
      },
      {
        question: "Identifique a frase com ERRO na concordância do particípio em substantivo feminino singular:",
        options: [
          "La Colonne est surmonté par le Génie doré.",
          "La Colonne est surmontée par le Génie doré.",
          "La place est animée par les citoyens."
        ],
        correctIndex: 0,
        explanation: "O erro é 'Colonne est surmonté'; 'Colonne' é feminino e exige a terminação '-ée'."
      },
      {
        question: "Qual é o famoso lema da República Francesa gravado nos edifícios públicos que Irlan aprende na Aula 22?",
        options: [
          "Liberté, Égalité, Fraternité (Liberdade, Igualdade, Fraternidade).",
          "Trabalho, Família, Pátria.",
          "A União Faz a Força em Paris."
        ],
        correctIndex: 0,
        explanation: "O lema revolucionário e cívico da França é Liberté, Égalité, Fraternité."
      }
    ]
  },
  23: {
    grammarPoints: [
      {
        ruleTitle: "Verbo Faire + Infinitivo de Ação (Je fais un parcours)",
        explanationPt: "Em 'je fais un parcours littéraire', o verbo irregular 'faire' (je fais, tu fais, il fait) é usado com substantivos para indicar a realização de um passeio ou percurso cultural.",
        exampleFr: "Aujourd'hui, je fais un parcours littéraire pour découvrir le Paris de Victor Hugo.",
        examplePt: "Hoje, eu faço um percurso literário para descobrir a Paris de Victor Hugo.",
        practiceQuestion: "Complete a conjugação do verbo faire com 'je': 'Ce matin, je _____ une promenade littéraire.'",
        options: ["fais", "fait", "faisons"],
        correctIndex: 0
      },
      {
        ruleTitle: "Pronome Demonstrativo Enfático 'ce / cette' com Escritores",
        explanationPt: "Na frase 'la lecture de ces chefs-d'œuvre permet de comprendre', o demonstrativo plural 'ces' concorda em número para apontar os clássicos da literatura que foram citados.",
        exampleFr: "Je visite la célèbre librairie Shakespeare and Company face à Notre-Dame.",
        examplePt: "Eu visito a famosa livraria Shakespeare and Company de frente para Notre-Dame.",
        practiceQuestion: "Escolha o demonstrativo plural correto: 'J'aime lire _____ romans français.'",
        options: ["ces", "ce", "cette"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do texto literário: 'Je visite la célèbre librairie _____ and Company.'",
        options: ["Shakespeare", "Victor", "Molière"],
        correctIndex: 0,
        explanation: "A emblemática livraria de língua inglesa de frente para Notre-Dame é a Shakespeare and Company."
      },
      {
        question: "Ordene a frase sobre a leitura no café: [ d'un roman / pages / Je lis / quelques / français ]",
        options: [
          "Je lis quelques pages d'un roman français.",
          "Quelques pages je lis français d'un roman.",
          "D'un roman français quelques je lis pages."
        ],
        correctIndex: 0,
        explanation: "A ordem natural e correta é 'Je lis quelques pages d'un roman français.'"
      },
      {
        question: "Como traduzir para o francês: 'Eu faço um percurso literário em Paris'?",
        options: [
          "Je fais un parcours littéraire à Paris.",
          "Je faire un percurso literário en Paris.",
          "Je fais une parcours littéraire en Paris."
        ],
        correctIndex: 0,
        explanation: "Usa-se a conjugação 'Je fais' com o substantivo masculino 'un parcours' e 'à Paris'."
      },
      {
        question: "Qual frase abaixo apresenta um ERRO comum no uso de 'face à' (em frente a) com substantivo feminino?",
        options: [
          "La librairie est face au cathédrale Notre-Dame.",
          "La librairie est face à la cathédrale Notre-Dame.",
          "Je marche face à la Seine."
        ],
        correctIndex: 0,
        explanation: "O erro é 'face au cathédrale'; 'cathédrale' é feminina e pede 'face à la cathédrale'."
      },
      {
        question: "Quais grandes escritores da literatura francesa guiam o passeio de Irlan na Aula 23?",
        options: [
          "Victor Hugo (Notre-Dame de Paris), Marcel Proust (Belle Époque) e Albert Camus.",
          "William Shakespeare e Júlio Verne nas florestas do sul.",
          "Apenas autores contemporâneos de contos de fadas suíços."
        ],
        correctIndex: 0,
        explanation: "A aula aborda a tradição literária de Victor Hugo, Proust, Camus e Sartre."
      }
    ]
  },
  24: {
    grammarPoints: [
      {
        ruleTitle: "Pronome Pessoal Reflexivo de Reciprocidade/Alinhamento (s'aligner)",
        explanationPt: "Em 'La Grande Arche qui s'aligne parfaitement', o verbo pronominal reflexivo 's'aligner' expressa que o monumento se alinha geometricamente com o eixo histórico.",
        exampleFr: "J'admire La Grande Arche qui s'aligne parfaitement avec l'axe historique du Louvre.",
        examplePt: "Eu admiro a Grande Arche que se alinha perfeitamente com o eixo histórico do Louvre.",
        practiceQuestion: "Complete a conjugação com pronome reflexivo (3ª pessoa): 'Le monument _____ avec le Louvre.'",
        options: ["s'aligne", "m'aligne", "nous alignons"],
        correctIndex: 0
      },
      {
        ruleTitle: "Verbo Prendre com Direção no Metrô (en direction de)",
        explanationPt: "Na frase 'je prends le métro en direction de La Défense', a locução prepositiva 'en direction de' indica a rota e o sentido final da linha de transporte.",
        exampleFr: "Pour ma journée à Paris, je prends le métro en direction de La Défense.",
        examplePt: "Para meu dia em Paris, eu pego o metrô em direção a La Défense.",
        practiceQuestion: "Selecione a locução correta para 'em direção a': 'Nous voyageons _____ La Défense.'",
        options: ["en direction de", "en direction au", "par direction à"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna da aula de arquitetura moderna: 'Je prends le métro en direction du quartier de _____.'",
        options: ["La Défense", "Le Marais", "Montmartre"],
        correctIndex: 0,
        explanation: "O grande distrito de arquitetura moderna e arranha-céus a oeste de Paris chama-se 'La Défense'."
      },
      {
        question: "Ordene a frase sobre o eixo histórico: [ avec l'axe / s'aligne / La Grande Arche / du Louvre / parfaitement ]",
        options: [
          "La Grande Arche s'aligne parfaitement avec l'axe du Louvre.",
          "Avec l'axe s'aligne La Grande Arche parfaitement du Louvre.",
          "Parfaitement du Louvre s'aligne La Grande Arche avec l'axe."
        ],
        correctIndex: 0,
        explanation: "A ordem canônica da frase é 'La Grande Arche s'aligne parfaitement avec l'axe du Louvre.'"
      },
      {
        question: "Como traduzir corretamente: 'Os arranha-céus em vidro e em aço'?",
        options: [
          "Les gratte-ciels en verre et en acier.",
          "Les arranha-céus de vidrio et acier.",
          "Les grands ciels par verre et métal."
        ],
        correctIndex: 0,
        explanation: "Em francês, 'arranha-céus' diz-se 'gratte-ciels', usando a preposição de material 'en' ('en verre')."
      },
      {
        question: "Identifique a frase que apresenta um ERRO comum na locução de direção em francês:",
        options: [
          "Je prends le métro en direction à La Défense.",
          "Je prends le métro en direction de La Défense.",
          "Le train part en direction du sud."
        ],
        correctIndex: 0,
        explanation: "A locução correta é sempre rege a preposição 'de' ('en direction de La Défense', nunca 'en direction à')."
      },
      {
        question: "Qual é o contraste arquitetônico que Irlan observa ao visitar La Défense na Aula 24?",
        options: [
          "O contraste entre os arrojados arranha-céus de vidro/aço contemporâneos e a arquitetura clássica haussmanniana do centro.",
          "A diferença entre ruas pavimentadas com ouro e ruas com areia de praia.",
          "O contraste entre casas de madeira rústicas e castelos medievais com ponte levadiça."
        ],
        correctIndex: 0,
        explanation: "La Défense ilustra a Paris contemporânea que se conecta harmoniosamente ao eixo histórico do Louvre."
      }
    ]
  },
  25: {
    grammarPoints: [
      {
        ruleTitle: "Uso de 'après avoir' + Particípio Passado (après avoir vécu)",
        explanationPt: "Na frase 'après avoir vécu tant d'aventures', a locução adverbial temporal 'après avoir' (após ter) é seguida obrigatoriamente pelo particípio passado do verbo ('vécu').",
        exampleFr: "Je prépare ma valise après avoir vécu tant d'aventures à Paris.",
        examplePt: "Eu preparo minha mala após ter vivido tantas aventuras em Paris.",
        practiceQuestion: "Complete com o infinitivo auxiliar correto: 'Après _____ visité Paris, je pars pour Amiens.'",
        options: ["avoir", "être", "avez"],
        correctIndex: 0
      },
      {
        ruleTitle: "Preposição de Cidade de Destino com Número na Rota (#2)",
        explanationPt: "Na frase 'je monte dans le wagon pour Amiens (#2)', a preposição 'pour' introduz o destino final da viagem do trem que deixa a capital rumo à Cidade #2.",
        exampleFr: "À la Gare du Nord, je monte dans le wagon pour Amiens (#2) : ma grande aventure continue !",
        examplePt: "Na Gare du Nord, eu subo no vagão para Amiens (#2): minha grande aventura continua!",
        practiceQuestion: "Selecione a preposição para 'trem com destino a Amiens': 'Voici le train _____ Amiens.'",
        options: ["pour", "par", "vers de"],
        correctIndex: 0
      }
    ],
    quizQuestions: [
      {
        question: "Complete a lacuna do Grand Finale da viagem em Paris: 'À la Gare du Nord, je monte dans le wagon pour _____ (#2).' ",
        options: ["Amiens", "Nice", "Lille"],
        correctIndex: 0,
        explanation: "Conforme o mapa das 11 cidades de Sophie, a próxima cidade (Cidade #2) após Paris é Amiens."
      },
      {
        question: "Ordene a frase de despedida do terraço do café: [ en terrasse / café au lait / Je prends / mon dernier ]",
        options: [
          "Je prends mon dernier café au lait en terrasse.",
          "Mon dernier en terrasse je prends café au lait.",
          "Café au lait en terrasse je prends mon dernier."
        ],
        correctIndex: 0,
        explanation: "A ordem natural da narrativa é 'Je prends mon dernier café au lait en terrasse.'"
      },
      {
        question: "Como se traduz: 'Eu envio uma mensagem de agradecimento a Sophie'?",
        options: [
          "J'envoie un message de remerciement à Sophie.",
          "Je envier un mensaje de gratitude pour Sophie.",
          "J'envoie le message pour remercier à la Sophie."
        ],
        correctIndex: 0,
        explanation: "'J'envoie' (com elisão) + 'un message de remerciement' + preposição 'à'."
      },
      {
        question: "Identifique a frase com ERRO gramatical na locução com 'après avoir':",
        options: [
          "Après avoir vivre tant d'aventures, je pars.",
          "Après avoir vécu tant d'aventures, je pars.",
          "Après avoir visité le musée, je rentre à l'hôtel."
        ],
        correctIndex: 0,
        explanation: "O erro é 'Après avoir vivre'; após 'avoir' deve-se usar o particípio passado ('vécu'), nunca o infinitivo."
      },
      {
        question: "Como termina o capítulo de Paris na história de Irlan nesta Aula 25 (C1)?",
        options: [
          "Ele faz sua mala, agradece à livreira Sophie pelas orientações e embarca em seu trem na Gare du Nord rumo a Amiens (#2).",
          "Ele perde seu passaporte na rua e decide morar em Paris para sempre.",
          "Ele decide mudar de país e compra uma passagem de navio para a Inglaterra."
        ],
        correctIndex: 0,
        explanation: "A Aula 25 é o Grand Finale onde Irlan encerra Paris (#1) e embarca em seu trem para Amiens (#2)."
      }
    ]
  }
};

console.log('=== Updating Grammar and Quizzes for Paris Lessons 1 to 25 ===');

for (let i = 1; i <= 25; i++) {
  const filePath = path.join(DATA_DIR, `paris_lesson_${i}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`Error: File ${filePath} not found.`);
    continue;
  }

  const lesson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const update = LESSONS_DATA[i];

  if (!update) {
    console.warn(`Warning: No update definition for lesson ${i}. Skipping.`);
    continue;
  }

  // Inject 2 grammar points while maintaining top-level Point 1 for compatibility
  const point1 = update.grammarPoints[0];
  const point2 = update.grammarPoints[1];

  lesson.grammarTip = {
    ...point1,
    points: [point1, point2]
  };

  // Inject the 5 quiz questions
  lesson.quizQuestions = update.quizQuestions;

  fs.writeFileSync(filePath, JSON.stringify(lesson, null, 2), 'utf8');
  console.log(`✔ Lesson ${i} updated with 2 contextual Grammar Points and 5 Quiz Questions.`);
}

console.log('=== Successfully updated all 25 Paris lessons! ===');
