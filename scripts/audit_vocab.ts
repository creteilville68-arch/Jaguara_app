/**
 * Auditoria profunda de traduções e dos 4 exemplos progressivos.
 *
 * Verifica, em todas as aulas JSON:
 *  - term / definitionPt / definitionFr presentes e não vazios;
 *  - exatamente 4 exemplos por palavra;
 *  - cada exemplo com fr e pt não vazios;
 *  - sem exemplos duplicados;
 *  - sem meta-linguagem ("le mot...", "signifie...", "s'utilise...");
 *  - sem placeholders (xxx, ___, TODO, etc.).
 *
 * E verifica o banco mestre de palavras: tradução pt não vazia.
 */
import fs from 'fs';
import path from 'path';
import { getWordBankEntries } from '../src/data/wordBank';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

interface ExampleIssue {
  lesson: string;
  term: string;
  kind: string;
  detail: string;
}

const issues: ExampleIssue[] = [];
const labelWarnings: ExampleIssue[] = [];
const stats = {
  lessons: 0,
  vocabEntries: 0,
  examples: 0,
  entriesOk: 0,
  entriesWithIssues: 0,
};

const META_PATTERNS = [
  /le\s+mot\b/i,
  /la\s+mot\b/i,
  /est\s+un\s+mot\b/i,
  /c'est\s+un\s+mot\b/i,
  /c’est\s+un\s+mot\b/i,
  /veut\s+dire\b/i,
  /s'utilise\b/i,
  /s’utilise\b/i,
  /le\s+terme\b/i,
  /cette\s+expression\b/i,
  /se\s+traduit\b/i,
];

const PLACEHOLDER_PATTERNS = [
  /xxx/i,
  /___+/,
  /\[[^\]]*\]/,
  /\{[^}]*\}/,
  /TODO/i,
  /FIXME/i,
  /lorem/i,
  /example\s+fr/i,
  /exemple\s+fr/i,
];

const VALID_LEVELS = new Set([
  'A1', 'A2', 'A2-B1', 'A2/B1', 'A2-B1/B2',
  'B1', 'B1-B2', 'B1/B2', 'B2', 'B2-C1',
  'C1', 'C1-C2', 'C1/C2', 'C2',
]);
const CANONICAL_LEVELS = new Set(['A1', 'A2-B1', 'B2', 'C1-C2']);

function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’ʼ‘]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function auditLessonFile(filePath: string): void {
  let data: any;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''));
  } catch (e) {
    issues.push({ lesson: path.basename(filePath), term: '(arquivo)', kind: 'JSON inválido', detail: String(e).slice(0, 120) });
    return;
  }

  stats.lessons += 1;
  const vocab = Array.isArray(data.vocabularyDictionary) ? data.vocabularyDictionary : [];
  const lessonId: string = data.id || path.basename(filePath);

  for (const entry of vocab) {
    stats.vocabEntries += 1;
    const term = (entry?.term || '').toString().trim();
    const defPt = (entry?.definitionPt || '').toString().trim();
    const defFr = (entry?.definitionFr || '').toString().trim();
    const examples = Array.isArray(entry?.examples) ? entry.examples : [];
    stats.examples += examples.length;

    let hasIssue = false;

    if (!term) {
      issues.push({ lesson: lessonId, term: '(vazio)', kind: 'termo ausente', detail: JSON.stringify(entry).slice(0, 80) });
      hasIssue = true;
    }
    if (!defPt) {
      issues.push({ lesson: lessonId, term: term || '(vazio)', kind: 'tradução pt ausente', detail: '' });
      hasIssue = true;
    }
    if (!defFr) {
      issues.push({ lesson: lessonId, term: term || '(vazio)', kind: 'definição fr ausente', detail: '' });
      hasIssue = true;
    }

    if (examples.length !== 4) {
      issues.push({ lesson: lessonId, term, kind: `exemplos ≠ 4 (tem ${examples.length})`, detail: '' });
      hasIssue = true;
    }

    const seenFr = new Set<string>();
    let idx = 0;
    for (const ex of examples) {
      idx += 1;
      const fr = (ex?.fr || '').toString().trim();
      const pt = (ex?.pt || '').toString().trim();
      const level = (ex?.level || '').toString().trim();

      if (!fr) {
        issues.push({ lesson: lessonId, term, kind: `exemplo ${idx}: fr vazio`, detail: '' });
        hasIssue = true;
      }
      if (!pt) {
        issues.push({ lesson: lessonId, term, kind: `exemplo ${idx}: pt vazio`, detail: fr.slice(0, 60) });
        hasIssue = true;
      }
      if (!VALID_LEVELS.has(level)) {
        issues.push({ lesson: lessonId, term, kind: `exemplo ${idx}: nível inválido "${level}"`, detail: fr.slice(0, 60) });
        hasIssue = true;
      } else if (!CANONICAL_LEVELS.has(level)) {
        labelWarnings.push({ lesson: lessonId, term, kind: `exemplo ${idx}: rótulo não-canônico "${level}"`, detail: fr.slice(0, 60) });
      }

      const key = fold(fr);
      if (key && seenFr.has(key)) {
        issues.push({ lesson: lessonId, term, kind: `exemplo ${idx}: fr duplicado`, detail: fr.slice(0, 60) });
        hasIssue = true;
      }
      if (key) seenFr.add(key);

      if (fr) {
        for (const re of META_PATTERNS) {
          if (re.test(fr)) {
            issues.push({ lesson: lessonId, term, kind: `exemplo ${idx}: meta-linguagem`, detail: fr.slice(0, 80) });
            hasIssue = true;
            break;
          }
        }
        for (const re of PLACEHOLDER_PATTERNS) {
          if (re.test(fr)) {
            issues.push({ lesson: lessonId, term, kind: `exemplo ${idx}: placeholder`, detail: fr.slice(0, 80) });
            hasIssue = true;
            break;
          }
        }
      }
    }

    if (hasIssue) {
      stats.entriesWithIssues += 1;
    } else {
      stats.entriesOk += 1;
    }
  }
}

// 1. Aulas
const files = fs.readdirSync(DATA_DIR).filter((f) => /_lesson_\d+\.json$/.test(f));
for (const f of files) {
  auditLessonFile(path.join(DATA_DIR, f));
}
// 2. Guias de cidade (Enciclopédia)
const GUIDE_DIR = path.join(DATA_DIR, 'city_guides');
if (fs.existsSync(GUIDE_DIR)) {
  const guideFiles = fs.readdirSync(GUIDE_DIR).filter((f) => /_guide_\d+\.json$/.test(f));
  for (const f of guideFiles) {
    auditLessonFile(path.join(GUIDE_DIR, f));
  }
}

// 2. Banco mestre — tradução pt vazia
const bank = getWordBankEntries();
const bankMissingPt = bank.filter((e) => !(e.pt || '').trim());
const bankByLevel: Record<string, number> = {};
for (const e of bank) {
  bankByLevel[e.level] = (bankByLevel[e.level] || 0) + 1;
}

console.log('==================================================');
console.log('AUDITORIA DE TRADUÇÕES E 4 EXEMPLOS');
console.log('==================================================');
console.log(`Aulas auditadas: ${stats.lessons}`);
console.log(`Entradas de vocabulário: ${stats.vocabEntries}`);
console.log(`  OK: ${stats.entriesOk}`);
console.log(`  Com problema: ${stats.entriesWithIssues}`);
console.log(`Total de exemplos: ${stats.examples}`);
console.log('');
console.log(`Banco mestre: ${bank.length} palavras únicas`);
console.log(`  Sem tradução pt: ${bankMissingPt.length}`);
console.log(`  Por nível: ${JSON.stringify(bankByLevel)}`);
console.log('');
console.log(`Problemas encontrados (total ${issues.length}):`);
console.log('');

// Agrupa por tipo
const byKind: Record<string, number> = {};
for (const i of issues) byKind[i.kind] = (byKind[i.kind] || 0) + 1;
for (const [kind, n] of Object.entries(byKind).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${n.toString().padStart(5)}  ${kind}`);
}

console.log('');
console.log(`Problemas reais (${issues.length}):`);
for (const i of issues) {
  console.log(`[${i.lesson}] "${i.term}" → ${i.kind}${i.detail ? ' · ' + i.detail : ''}`);
}

// Agrupa rótulos não-canônicos
const labelByKind: Record<string, number> = {};
for (const i of labelWarnings) labelByKind[i.kind] = (labelByKind[i.kind] || 0) + 1;
console.log('');
console.log(`Rótulos de nível não-canônicos (${labelWarnings.length}):`);
for (const [kind, n] of Object.entries(labelByKind).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${n.toString().padStart(5)}  ${kind}`);
}

// Banco sem tradução
if (bankMissingPt.length > 0) {
  console.log('');
  console.log('--- Palavras do banco sem tradução pt (até 40) ---');
  for (const e of bankMissingPt.slice(0, 40)) {
    console.log(`  ${JSON.stringify(e.term)} [${e.level}]`);
  }
}

// Escreve relatório em disco
const report = {
  generatedAt: new Date().toISOString(),
  stats,
  bank: { total: bank.length, missingPt: bankMissingPt.length, byLevel: bankByLevel },
  issueCount: issues.length,
  issuesByKind: byKind,
  issues,
  labelWarningsCount: labelWarnings.length,
  labelWarnings: labelWarnings,
  bankMissingPt: bankMissingPt.map((e) => ({ term: e.term, level: e.level })).slice(0, 500),
};
fs.writeFileSync(path.join(process.cwd(), 'scripts', 'audit_report.json'), JSON.stringify(report, null, 2));

console.log('');
console.log('Relatório completo salvo em scripts/audit_report.json');
