/**
 * Dicionário mestre de exemplos para palavras "pontilhadas".
 *
 * As palavras em destaque dourado (vocabularyDictionary de cada aula) já têm os
 * 4 exemplos curados no próprio JSON da aula. As palavras pontilhadas (palavras
 * do banco CEFR que aparecem no texto mas não são destaque dourado) resolviam
 * exemplos pelo gerador e, fora da lista curada, ficavam SEM exemplos.
 *
 * Este arquivo é o lar incremental e 100% offline desses exemplos: ao terminar
 * cada cidade, preenchemos aqui os 4 exemplos progressivos (A1 → A2-B1 → B2 →
 * C1-C2) de cada palavra pontilhada daquela cidade, e o
 * `bun run audit:clickable` confirma que nenhuma palavra destacada ficou sem
 * exemplos.
 *
 * Formato: chave = forma normalizada (minúscula, sem acento, apóstrofo `'`).
 */
export interface MasterExample {
  level: string;
  fr: string;
  pt: string;
}

export const MASTER_EXAMPLES: Record<string, MasterExample[]> = {
  // Exemplo de referência — preenchido cidade por cidade conforme cada uma é
  // finalizada. A chave usa a forma sem acento para casar com o gerador.
  // 'bonjour': [
  //   { level: 'A1', fr: 'Bonjour, comment ça va ?', pt: 'Olá, como vai?' },
  //   { level: 'A2-B1', fr: 'Je dis bonjour à mes voisins chaque matin.', pt: 'Eu digo bom dia aos meus vizinhos todas as manhãs.' },
  //   { level: 'B2', fr: 'Un simple bonjour peut transformer l’ambiance d’une réunion.', pt: 'Um simples bom dia pode transformar o clima de uma reunião.' },
  //   { level: 'C1-C2', fr: 'Échanger un bonjour sincère est le premier geste du savoir-vivre.', pt: 'Trocar um bom dia sincero é o primeiro gesto da boa educação.' },
  // ],
};
