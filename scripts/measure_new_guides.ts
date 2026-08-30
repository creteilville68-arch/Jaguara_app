/**
 * Mede a contribuição dos 4 novos guias da Enciclopédia para o contador de
 * palavras únicas clicáveis. Escaneia só os arquivos novos (rápido) e compara
 * com o report acumulado (scripts/unique_clickable_report.json).
 */
import fs from 'fs';
import path from 'path';
import { parseClickableSentence, hasFourCompleteExamples, fold } from '../src/utils/clickableParser';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const GUIDE_DIR = path.join(DATA_DIR, 'city_guides');
const REPORT_PATH = path.join(process.cwd(), 'scripts', 'unique_clickable_report.json');

const NEW_GUIDES: Record<string, string[]> = {
  marseille: ['marseille_guide_27.json'],
  strasbourg: ['strasbourg_guide_26.json'],
  nice: ['nice_guide_33.json'],
  lyon: ['lyon_guide_26.json'],
};

const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));

const grandAll = new Set<string>();
for (const [city, d] of Object.entries(report.byCity as Record<string, { clickable: string[] }>)) {
  for (const k of d.clickable) grandAll.add(k);
}

console.log('Report anterior (todas as cidades):', grandAll.size, 'únicas clicáveis');

const newlySeen = new Set<string>();
const cityAdditions: Record<string, string[]> = {};
for (const [city, files] of Object.entries(NEW_GUIDES)) {
  const perCityNew = new Set<string>();
  for (const f of files) {
    const filePath = path.join(GUIDE_DIR, f);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const vocabDict = Array.isArray(data.vocabularyDictionary) ? data.vocabularyDictionary : [];
    const paragraphs = Array.isArray(data.paragraphs) ? data.paragraphs : [];
    for (const para of paragraphs) {
      const fr = (para?.fr || '').toString().trim();
      if (!fr) continue;
      const tokens = parseClickableSentence(fr, vocabDict);
      for (const token of tokens) {
        if (!token.isMatch) continue;
        const entry = token.dictionaryEntry;
        const term = (entry?.term || token.text || '').trim();
        if (!term) continue;
        const key = fold(term);
        if (!hasFourCompleteExamples(entry?.examples)) continue;
        const inReport = (report.byCity[city]?.clickable || []).includes(key);
        if (!inReport) perCityNew.add(key);
        if (!grandAll.has(key)) newlySeen.add(key);
      }
    }
  }
  cityAdditions[city] = Array.from(perCityNew).sort();
  console.log(
    `${city.padEnd(12)} novo guia: +${perCityNew.size} lemas nunca vistos antes na cidade; total cidade pós-guias: ${(report.byCity[city]?.clickable.length || 0) + perCityNew.size}`
  );
}

// Persiste as adições no report acumulado (mantém o --report consistente sem
// precisar reescanear a cidade inteira, que estoura o timeout).
for (const [city, additions] of Object.entries(cityAdditions)) {
  const cur = report.byCity[city] || { clickable: [], goldNo4: [] };
  const merged = new Set(cur.clickable);
  for (const k of additions) merged.add(k);
  report.byCity[city] = { ...cur, clickable: Array.from(merged).sort() };
}
fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
console.log('Report atualizado em', REPORT_PATH);

console.log('');
console.log('Novos lemas clicáveis (não estavam em NENHUMA cidade do report):', newlySeen.size);
console.log('TOTAL estimado pós-guias:', grandAll.size + newlySeen.size);
console.log(
  grandAll.size + newlySeen.size >= 15400
    ? '✅ META 15.400 ATINGIDA'
    : `⚠️ Faltam ${15400 - (grandAll.size + newlySeen.size)} para a meta de 15.400`
);
