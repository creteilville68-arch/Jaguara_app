import fs from 'fs';

const jsonFiles = fs.readdirSync('src/data').filter(f => f.endsWith('.json') && f.startsWith('paris_lesson_'));

let allEntries = [];

for (const file of jsonFiles) {
  const lessonNumMatch = file.match(/paris_lesson_(\d+)\.json/);
  if (!lessonNumMatch) continue;
  
  const lessonNum = lessonNumMatch[1];
  const data = JSON.parse(fs.readFileSync('src/data/' + file, 'utf8'));
  
  let tsContent = `import { DictionaryEntry } from '../utils/textParser';\n\nexport const LESSON_DICTIONARY_${lessonNum}: Record<string, DictionaryEntry> = {\n`;
  
  for (const entry of data.vocabularyDictionary) {
      allEntries.push(entry);
      
      const safeKey = entry.term.includes("'") || entry.term.includes("-") || entry.term.includes(" ") ? `"${entry.term}"` : entry.term;
      
      tsContent += `  ${safeKey}: {\n`;
      tsContent += `    term: "${entry.term.replace(/"/g, '\\"')}",\n`;
      tsContent += `    wordFr: "${entry.term.replace(/"/g, '\\"')}",\n`;
      tsContent += `    definitionPt: "${entry.definitionPt.replace(/"/g, '\\"')}",\n`;
      tsContent += `    difficultyLevel: "${entry.difficultyLevel}",\n`;
      tsContent += `    examples: [\n`;
      
      if (entry.examples) {
          for (const ex of entry.examples) {
              tsContent += `      { level: "${ex.level}", fr: "${ex.fr.replace(/"/g, '\\"')}", pt: "${ex.pt.replace(/"/g, '\\"')}" },\n`;
          }
      }
      
      tsContent += `    ],\n  },\n`;
  }
  
  tsContent += `};\n`;
  fs.writeFileSync(`src/data/lessonDictionary${lessonNum}.ts`, tsContent);
}

// Master dictionary
let masterContent = `import { DictionaryEntry } from '../utils/textParser';\n\nexport const MASTER_FRENCH_DICTIONARY: Record<string, DictionaryEntry> = {\n`;

// To remove duplicates, use a map
const masterMap = new Map();
for (const entry of allEntries) {
    if (!masterMap.has(entry.term)) {
        masterMap.set(entry.term, entry);
    }
}

for (const entry of masterMap.values()) {
    const safeKey = entry.term.includes("'") || entry.term.includes("-") || entry.term.includes(" ") ? `"${entry.term}"` : entry.term;
    masterContent += `  ${safeKey}: {\n`;
    masterContent += `    term: "${entry.term.replace(/"/g, '\\"')}",\n`;
    masterContent += `    wordFr: "${entry.term.replace(/"/g, '\\"')}",\n`;
    masterContent += `    definitionPt: "${entry.definitionPt.replace(/"/g, '\\"')}",\n`;
    masterContent += `    difficultyLevel: "${entry.difficultyLevel}",\n`;
    masterContent += `    examples: [\n`;
    if (entry.examples) {
        for (const ex of entry.examples) {
            masterContent += `      { level: "${ex.level}", fr: "${ex.fr.replace(/"/g, '\\"')}", pt: "${ex.pt.replace(/"/g, '\\"')}" },\n`;
        }
    }
    masterContent += `    ],\n  },\n`;
}

masterContent += `};\n`;
fs.writeFileSync(`src/data/masterFrenchDictionary.ts`, masterContent);

console.log("TS dictionaries generated successfully.");
