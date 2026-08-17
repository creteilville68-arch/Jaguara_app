import fs from 'fs';
import path from 'path';
import { getOrGenerateWordEntry } from '../src/utils/textParser';

const DATA_DIR = path.join(process.cwd(), 'src/data');

const allWords = new Set<string>();
const templateExampleWords = new Set<string>();
const fallbackWords = new Set<string>();

for (let i = 1; i <= 25; i++) {
  const file = path.join(DATA_DIR, `paris_lesson_${i}.json`);
  if (!fs.existsSync(file)) continue;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const paragraphs = data.paragraphs || [];
  for (const p of paragraphs) {
    if (!p.fr) continue;
    const wordRegex = /[\p{L}\p{N}àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ-]+(?:['’-][\p{L}\p{N}àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ-]+)*/gu;
    let match;
    while ((match = wordRegex.exec(p.fr)) !== null) {
      let word = match[0];
      const elisionRegex = /^(?:[jldcmtsn]|qu|jusqu|lorsqu|puisqu)['’ʼ]/i;
      if (elisionRegex.test(word)) {
        word = word.replace(elisionRegex, '');
      }
      if (!word || word.length <= 1) continue;
      const cleanWord = word.trim().replace(/^[.,/#!$%^&*;:{}=\_`~()?"«»[\]\\]+|[.,/#!$%^&*;:{}=\_`~()?"«»[\]\\]+$/g, "");
      if (!cleanWord || cleanWord.length <= 1) continue;

      allWords.add(cleanWord.toLowerCase());
      const entry = getOrGenerateWordEntry(cleanWord);
      
      const isFallback = entry.definitionPt?.includes("termo do vocabulário francês") || false;
      if (isFallback) {
        fallbackWords.add(cleanWord.toLowerCase());
      }

      const examples = entry.examples || [];
      for (const ex of examples) {
        if (
          ex.fr.includes("on entend souvent le mot") ||
          ex.fr.includes("Dans la conversation quotidienne, on utilise souvent le mot") ||
          ex.fr.includes("pour être précis") ||
          ex.fr.includes("on découvre toute l'importance de :") ||
          ex.fr.includes("Voici de magnifiques") ||
          ex.fr.includes("C'est ") && ex.fr.includes(" très bon")
        ) {
          templateExampleWords.add(cleanWord.toLowerCase());
        }
      }
    }
  }
}

console.log(`Total unique clickable words across 25 lessons: ${allWords.size}`);
console.log(`Words using fallback generator: ${fallbackWords.size}`);
console.log(`Words with template examples: ${templateExampleWords.size}`);
if (templateExampleWords.size > 0) {
  console.log(`Words with template examples (first 50):`, Array.from(templateExampleWords).sort().slice(0, 50));
}
if (fallbackWords.size > 0) {
  console.log(`Words using fallback (first 50):`, Array.from(fallbackWords).sort().slice(0, 50));
}
