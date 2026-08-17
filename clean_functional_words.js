import fs from 'fs';

const file = 'src/data/functionalWordsDictionary.ts';
let content = fs.readFileSync(file, 'utf8');

const slopRegexes = [
  /\{ level: "A1", fr: "[^"]* Ce sont mes [^"]* à Paris\.", pt: "[^"]*" \},/g,
  /\{ level: "A2-B1", fr: "Pendant notre séjour, nous découvrons l'importance d[^"]* dans la vie quotidienne\.", pt: "[^"]*" \},/g,
  /\{ level: "B2", fr: "L'évolution d[^"]* à Paris reflete les transformations culturelles de la société\.", pt: "[^"]*" \},/g,
  /\{ level: "C1-C2", fr: "Dans le patrimoine parisien, l[^"]* incarne une alliance remarquable entre tradition et modernité\.", pt: "[^"]*" \},/g
];

for (const regex of slopPatterns) {
    // Actually, I can just write a script to remove any examples object that contains these strings
}
