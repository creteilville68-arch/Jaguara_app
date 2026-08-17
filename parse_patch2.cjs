const fs = require('fs');

let content = fs.readFileSync('src/utils/textParser.ts', 'utf8');

const target = `    tokens.push({
      text: matchedText,
      isMatch: true,
      isDictionaryTerm: true,
      matchedTerm: canonicalTerm,
      dictionaryEntry: { ...matchedEntry, isDictionaryTerm: true },
    });`;

const replacement = `    tokens.push({
      text: matchedText,
      isMatch: true,
      isDictionaryTerm: matchedEntry.isDictionaryTerm !== false,
      matchedTerm: canonicalTerm,
      dictionaryEntry: { ...matchedEntry },
    });`;

content = content.replace(target, replacement);

fs.writeFileSync('src/utils/textParser.ts', content);
