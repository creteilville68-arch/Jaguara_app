import fs from 'fs';

const master = fs.readFileSync('src/data/masterFrenchDictionary.ts', 'utf8');
const dataFiles = fs.readdirSync('src/data').filter(f => f.endsWith('.json') && f.startsWith('paris_lesson_'));

let totalMissing = 0;
let missingWords = [];

for (const file of dataFiles) {
    const data = JSON.parse(fs.readFileSync('src/data/' + file, 'utf8'));
    for (const entry of data.vocabularyDictionary) {
        if (!entry.examples || entry.examples.length === 0) {
            totalMissing++;
            missingWords.push(entry.term);
        }
    }
}
console.log(`Total missing examples in JSON: ${totalMissing}`);
if (totalMissing > 0) {
    console.log(`Some words: ${missingWords.slice(0, 20).join(', ')}`);
}

