// Curadoria de exemplos — Paris (lote 23, fechamento do backlog de cliques)
// 4 exemplos progressivos A1→C2 por termo. Estas palavras repetem-se em todas
// as aulas e por isso partilham os mesmos exemplos em todo o app.
export const PARIS_BACKLOG_EXAMPLES_23: Record<string, { level: string; fr: string; pt: string }[]> = {
  allumer: [
    { level: 'A1', fr: "J'allume la lumière.", pt: 'Eu acendo a luz.' },
    { level: 'A2', fr: "Le matin, j'allume l'ordinateur pour travailler.", pt: 'De manhã, ligo o computador para trabalhar.' },
    { level: 'B1', fr: "Allumer la bouilloire est le premier geste de la journée.", pt: 'Ligar a chaleira é o primeiro gesto do dia.' },
    { level: 'C1', fr: "C'est en allumant la lampe qu'il commence à écrire.", pt: 'É acendendo o abajur que ele começa a escrever.' },
  ],
  // Forma conjugada presente nos textos ("j'allume l'ordinateur") — o audit
  // resolve o termo canônico como a forma do texto, então curar a forma também.
  allume: [
    { level: 'A1', fr: "J'allume la lumière.", pt: 'Eu acendo a luz.' },
    { level: 'A2', fr: "Le matin, j'allume l'ordinateur pour travailler.", pt: 'De manhã, ligo o computador para trabalhar.' },
    { level: 'B1', fr: "Allumer la bouilloire est le premier geste de la journée.", pt: 'Ligar a chaleira é o primeiro gesto do dia.' },
    { level: 'C1', fr: "C'est en allumant la lampe qu'il commence à écrire.", pt: 'É acendendo o abajur que ele começa a escrever.' },
  ],
  'au-dessus de': [
    { level: 'A1', fr: "L'avion vole au-dessus des nuages.", pt: 'O avião voa acima das nuvens.' },
    { level: 'A2', fr: 'La clochette sonne doucement au-dessus de la porte.', pt: 'A campainha toca suavemente acima da porta.' },
    { level: 'B1', fr: 'Une carte est accrochée au-dessus du bureau.', pt: 'Um mapa está pendurado acima da escrivaninha.' },
    { level: 'C1', fr: "Il place, au-dessus de tout, le souci de la précision.", pt: 'Ele coloca, acima de tudo, a preocupação com a precisão.' },
  ],
  "n'est-ce pas": [
    { level: 'A1', fr: "Tu es fatigué, n'est-ce pas ?", pt: 'Você está cansado, não é?' },
    { level: 'A2', fr: "C'est un beau quartier, n'est-ce pas ?", pt: 'É um bairro bonito, não é?' },
    { level: 'B1', fr: "Vous êtes géographe, n'est-ce pas ?", pt: 'Você é geógrafo, não é?' },
    { level: 'C1', fr: "L'essentiel n'est pas la vitesse, n'est-ce pas, mais la direction.", pt: 'O essencial não é a velocidade, não é mesmo, mas a direção.' },
  ],
};
