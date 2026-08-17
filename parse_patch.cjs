const fs = require('fs');

let content = fs.readFileSync('src/utils/textParser.ts', 'utf8');

// Add import
if (!content.includes('COMMON_EXPRESSIONS')) {
  content = content.replace(
    "import { getStaticLessonEntry, normalizeForSearch } from '../data/lessonDictionary';",
    "import { getStaticLessonEntry, normalizeForSearch } from '../data/lessonDictionary';\nimport { COMMON_EXPRESSIONS } from '../data/commonExpressionsDictionary';"
  );
}

// Inject logic
const target = `  if (allTerms.length === 0) {
    return tokenizeSegmentWords(sentence, termToEntryMap);
  }`;

const replacement = `  // Inject COMMON_EXPRESSIONS
  for (const [key, entry] of Object.entries(COMMON_EXPRESSIONS)) {
    const canonicalTerm = key;
    const normCanonical = normalizeTermKey(canonicalTerm);
    
    // Only add if not already overridden by the lesson's specific dictionary
    if (!termToEntryMap.has(normCanonical)) {
       const enhancedEntry = { term: key, ...entry, isDictionaryTerm: false }; // Set false so they don't get the golden style unless they are in the lesson
       termToEntryMap.set(normCanonical, enhancedEntry as any);
       allTerms.push(canonicalTerm.trim());
    }
  }

  if (allTerms.length === 0) {
    return tokenizeSegmentWords(sentence, termToEntryMap);
  }`;

content = content.replace(target, replacement);

fs.writeFileSync('src/utils/textParser.ts', content);
