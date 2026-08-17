import fs from 'fs';

function syncTsFiles() {
  const allFiles = fs.readdirSync('src/data').filter(f => f.endsWith('.json') && f.startsWith('paris_lesson_'));
  
  for (const file of allFiles) {
    const lessonNumMatch = file.match(/paris_lesson_(\d+)\.json/);
    if (!lessonNumMatch) continue;
    
    const lessonNum = lessonNumMatch[1];
    const tsFile = `src/data/lessonDictionary${lessonNum}.ts`;
    
    if (fs.existsSync(tsFile)) {
      const data = JSON.parse(fs.readFileSync('src/data/' + file, 'utf8'));
      
      let tsContent = fs.readFileSync(tsFile, 'utf8');
      
      for (const entry of data.vocabularyDictionary) {
        // find the entry in TS file and replace its examples array
        // since we are dealing with a TS file that looks like a JSON object export,
        // it might be tricky to replace just the examples.
        // Let's just generate the whole TS file? No, we might lose other properties.
        
        // Simpler: find the entry key.
        const entryKeyMatch = tsContent.match(new RegExp(`("${entry.term}"|${entry.term})\\s*:\\s*{([^}]*?)term:\\s*"${entry.term}"`, 's'));
        // this regex is too brittle.
      }
    }
  }
}
// wait, maybe I can just do a regex replace on the specific phrases in ALL files (ts and json) if the LLM approach fails?
