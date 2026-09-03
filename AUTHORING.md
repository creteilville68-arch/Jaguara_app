# Autoria Offline — Escrevendo por Cidade

Este guia descreve como escrever, **sem IA e sem serviços externos**, as aulas da
aventura do Irlan cidade por cidade, até que as ~15.400 palavras do banco
apareçam todas dentro dos textos.

## 1. Visão geral

O app é 100% offline. Toda palavra do banco é **clicável** dentro do texto da
aula e abre uma janela com:

- tradução em português;
- nível CEFR;
- **4 exemplos progressivos** (do menos ao mais avançado);
- botão **Adicionar ao Flashcard** (revisão espaçada Leitner).

Uma palavra conta apenas **uma vez** (deduplicada por lemma), mesmo quando
reaparece em outras aulas ou cidades.

### Status atual (medição real)

> As métricas abaixo são recalculadas por `bun run coverage` e podem mudar
> quando novas aulas ou guias são adicionados. O relatório completo gerado
> pelo `bun run gap` fica em `scripts/gap_report.md`.

| Métrica | Valor |
| --- | --- |
| Arquivos de texto analisados (aulas + guias) | 1036 |
| Palavras únicas no banco | 16.796 |
| Já presentes nos textos (cobertura morfológica) | 13.459 |
| **Ainda falta escrever nos textos** | **3.337** |

A meta é atingida quando a coluna "ainda falta" chegar a zero — ou seja,
quando todas as palavras da lista de cada cidade aparecerem nos parágrafos
em francês. As duas frentes de escrita são:

1. **Aventura (Fase 1):** as aulas da trilha de Irlan (`src/data/<cidade>_lesson_<N>.json`).
2. **Enciclopédia (Fase 2):** os dossiês temáticos pós-trilha
   (`src/data/city_guides/<cidade>_guide_<N>.json`) — 11 cidades, 545 seções,
   desbloqueados quando o aluno termina a aventura. São o lar natural do
   vocabulário avançado (C1/C2), que não cabe no enredo sem enrolá-lo.

   Os guias marcam o **nível de cada seção** no campo `level` (ex.:
   `Nível (C1)`): as seções iniciais são `Misto (A1–C2)` e as seções
   avançadas, feitas para absorver vocabulário C1/C2, declaram o nível
   específico. O app exibe esse rótulo no cabeçalho do leitor e como
   badge na lista de seções.

## 2. Distribuição por cidade (ponderada pelo CEFR)

Níveis básicos concentram poucas palavras por cidade; os níveis avançados
concentram mais (densidade crescente):

| # | Cidade | Nível | Palavras a escrever |
| --- | --- | --- | --- |
| 1 | Paris | A1 | 189 |
| 2 | Amiens | A1/A2 | 428 |
| 3 | Lille | A2 | 239 |
| 4 | Mont Saint-Michel | A2/B1 | 728 |
| 5 | Tours | B1 | 488 |
| 6 | Bordeaux | B1+ | 488 |
| 7 | Toulouse | B2 | 1.063 |
| 8 | Lyon | B2+ | 1.063 |
| 9 | Marseille | C1 | 1.596 |
| 10 | Strasbourg | C1+ | 1.596 |
| 11 | Nice | C2 | 5.146 |

Os níveis já foram corrigidos: o banco CEFR agora é a fonte de verdade, então
cada cidade recebe as palavras do seu nível real (antes havia palavras
avançadas como *bombarder* ou *l'orbite* marcadas como A1).

As listas prontas para riscar estão em `scripts/worklists/<cidade>.md`
(ex.: `scripts/worklists/nice.md`). Cada item traz a palavra em francês e a
tradução em português, agrupado por nível.

## 3. Fluxo de trabalho (por cidade)

1. Escolha uma cidade na ordem da trilha.
2. Abra o worklist dela em `scripts/worklists/<cidade>.md`.
3. Escreva as aulas **dessa cidade** (uma ou várias por vez), inserindo as
   palavras do worklist naturalmente nos `paragraphs[].fr`.
4. Para as palavras mais importantes da aula, adicione também uma entrada em
   `vocabularyDictionary` com os **4 exemplos progressivos**.
5. Crie o arquivo `src/data/<cidade>_lesson_<N>.json` (use
   `scripts/lesson_template.json` como molde).
6. **Registre** a aula no app (seção 5).
7. Rode a validação (seção 6) e risque no worklist as palavras que passaram a
   aparecer.

## 4. Esquema do JSON da aula

Molde completo: `scripts/lesson_template.json`.

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| `id` | sim | Ex.: `nice_lesson_17` (cidade + número sequencial). |
| `cityId` | sim | Id da cidade (ex.: `nice`). |
| `domain` | sim | `Cotidiano`, `Cultura`, `Acadêmico`, `Profissional`. |
| `level` | sim | Rótulo exibido, ex.: `Nível (C2)`. |
| `titleFr` / `titlePt` | sim | Título da aula em francês / português. |
| `subtitleFr` / `subtitlePt` | opcional | Subtítulo bilíngue. |
| `summaryPt` | sim | Resumo da aula em português. |
| `paragraphs[]` | sim | `{ id, fr, pt }` — o texto da aventura (bilíngue). |
| `vocabularyDictionary[]` | recomendado | Destaques da aula com 4 exemplos (ver abaixo). |
| `grammarTip` | recomendado | `ruleTitle`, `explanationPt`, `exampleFr`, `examplePt`, `practiceQuestion`, `options`, `correctIndex`. |
| `quizQuestions[]` | recomendado | `question`, `options`, `correctIndex`, `explanation`. |

### `vocabularyDictionary` — os 4 exemplos progressivos

Cada entrada deve ter **exatamente 4 exemplos**, na ordem menos → mais
avançado:

```json
{
  "term": "flâner",
  "definitionPt": "passear sem pressa",
  "definitionFr": "Se promener sans but précis, en prenant son temps.",
  "inflections": ["flâner", "flâneur", "flâneuse"],
  "ptTargets": ["passear", "vagar"],
  "examples": [
    { "level": "A1",      "fr": "J'aime flâner dans le parc.", "pt": "Eu gosto de passear no parque." },
    { "level": "A2-B1",   "fr": "Nous flânons sur la promenade après le dîner.", "pt": "Nós passeamos na avenida depois do jantar." },
    { "level": "B2",      "fr": "Flâner dans le vieux quartier révèle des détails insolites.", "pt": "Passear no bairro antigo revela detalhes inusitados." },
    { "level": "C1-C2",   "fr": "Flâner relève d'un art de vivre profondément ancré dans la culture urbaine.", "pt": "Passear sem pressa faz parte de uma arte de viver profundamente enraizada na cultura urbana." }
  ]
}
```

Regra dos exemplos: **contexto prático do dia a dia** (cafés, viagem, cidade,
diálogos, narrativa). Evite metalinguagem ("a palavra X significa...", "o uso
de X...").

> Toda palavra do texto que **não** está em `vocabularyDictionary` mas existe
> no banco mestre também fica clicável automaticamente, com 4 exemplos gerados
> a partir do próprio banco. Por isso o essencial é **fazer a palavra aparecer
> no texto**; os destaques em `vocabularyDictionary` são para as palavras que
> merecem exemplos curados à mão.

## 5. Registrar a aula no app

As aulas oficiais são importadas explicitamente em
`src/components/LessonsView.tsx`. Para cada novo arquivo:

1. Adicione o import no topo:
   ```ts
   import niceLesson17Data from '../data/nice_lesson_17.json';
   ```
2. Adicione a variável ao array da cidade correspondente:
   ```ts
   const NICE_OFFICIAL_LESSONS = [
     // ...existentes
     niceLesson17Data,
   ];
   ```

Sem esse registro a aula existe no banco (conta para a cobertura), mas não
aparece na aba "Minhas Aulas".

## 6. Validação

Use os comandos do `package.json` (ou rode diretamente com `bun run`):

```bash
bun run plan       # recalcula a distribuição por cidade (city_words_to_write.json)
bun run worklists  # regenera scripts/worklists/*.md a partir do plano
bun run coverage   # mede quantas palavras do banco já aparecem nos textos
bun run audit      # valida traduções + os 4 exemplos das palavras douradas
bun run audit:clickable  # valida os 4 exemplos de TODAS as palavras destacadas (douradas + pontilhadas)
bun run lint       # typecheck (tsc --noEmit)
```

`coverage` imprime o total encontrado, o que falta e o detalhamento por nível.
Enquanto escreve, rode `bun run coverage` para ver o número subir.

### Como o contador reconhece as palavras (matching morfológico)

O contador **não exige a forma exata do dicionário** — ele reconhece o
francês de verdade, palavra por palavra, nos textos:

- **Conjugações:** `recevoir` conta com *reçoit*, *recevait*, *recevrai*, *reçu*...
- **Verbos irregulares:** `aller` conta com *vais*, *va*, *allons*, *ira*...
- **Plurais e femininos:** `actif` conta com *active*, *actifs*, *actives*;
  `le marché` conta com *les marchés*, *au marché*, *du marché*...
- **Elisões:** `écouter de la musique` conta com *j'écoute de la musique*;
  `s'appeler` conta com *je m'appelle*, *elle s'appelle*...
- **Reflexivos:** `se lever` conta com *je me lève*, *il se levait*, *nous nous levons*...
- **Frases verbais:** `faire les courses` conta com *je fais les courses*,
  *nous faisons les courses*...

**Regra prática para a autoria:** escreva com naturalidade, como o
francês realmente é falado. Se a palavra do worklist estiver no texto em
qualquer forma flexionada, ela conta. Depois de cada remessa, rode
`bun run coverage` para confirmar; se uma palavra continuar faltando,
confira se ela aparece mesmo no texto (e não só na tradução pt).

### Os 4 exemplos em TODAS as palavras destacadas (douradas + pontilhadas)

Toda palavra clicável deve abrir o modal com **exatamente 4 exemplos
progressivos bem elaborados** (A1 → A2-B1 → B2 → C1-C2), frases reais do
dia a dia — nunca meta-linguagem nem frases sem sentido.

- **Douradas** (`vocabularyDictionary` da aula): os 4 exemplos ficam no
  próprio JSON da aula.
- **Pontilhadas** (palavras do banco CEFR que aparecem no texto): os 4
  exemplos ficam no dicionário mestre `src/data/masterExamplesDictionary.ts`,
  preenchido **cidade por cidade** conforme cada cidade é finalizada.

Ao terminar uma cidade, rode:

```bash
bun run audit:clickable <cidade>
```

Ele reproduz exatamente a resolução do app (parse + lookup + exemplos) e
lista toda palavra destacada daquela cidade que ainda está sem os 4
exemplos. A cidade só está pronta quando esse comando sair com zero
palavras em falta.

## 7. Convenção de nomenclatura

- Arquivo: `src/data/<cidade>_lesson_<N>.json` (sequencial por cidade).
- Id: `<cidade>_lesson_<N>`.
- Cidade: `paris`, `amiens`, `lille`, `mont-saint-michel`, `tours`, `bordeaux`,
  `toulouse`, `lyon`, `marseille`, `strasbourg`, `nice`.

## 8. Enciclopédia da França (Fase 2) — dossiês por cidade

Depois que a aventura de Irlan termina (A1 → C2), o aluno desbloqueia a aba
**Enciclopédia** (`EncyclopediaView.tsx`), com um dossiê temático por cidade.
Cada dossiê é um arquivo `src/data/city_guides/<cidade>_guide_<N>.json` com o
mesmo schema das aulas (`paragraphs` bilíngues + `vocabularyDictionary`).

### Como escrever um dossiê

1. Puxe as palavras que faltam para a cidade:
   ```bash
   bun run scripts/list_missing_words.ts C1   # ou A1/A2/B1/B2/C2
   ```
2. Escolha **8 seções temáticas** que combinem com a cidade (história,
   patrimônio, gastronomia, esporte, natureza, instituições...).
3. Escreva ~6 parágrafos por seção, entrelaçando **de propósito** as palavras
   que faltam — misturando todos os níveis (A1–C2), com densidade maior nos
   níveis avançados da cidade.
4. Salve como `src/data/city_guides/<cidade>_guide_01.json` … `_08.json`.
5. **Registre** no app: imports + entrada no `CITY_GUIDES` em
   `src/components/EncyclopediaView.tsx`.
6. Valide (seção 6): `coverage`, `audit`, `audit:clickable <cidade>`,
   `tsc` — e cure o backlog no `masterExamples<Cidade>Backlog.ts` até zerar.

### Regras dos guias

- **Sem nomes de estabelecimentos** (regra de ouro nº 12): só referências
  culturais reais (Matisse, Lumière, Vauban...).
- **Sem violência explícita** — mesmo tom do cânone da aventura.
- **A restrição de família vale só para o enredo de Irlan, não para os guias:**
  palavras como *père*, *grand-père*, *grand-mère* e *grands-parents* são
  vocabulário normal e podem (e devem) aparecer naturalmente nos dossiês,
  exemplos e flashcards. No cânone, a família de Irlan é **pai, mãe e duas
  irmãs (sem avós)** — é coerência de personagem na narrativa, não proibição
  de palavras no app.
- Textos **factuais e enciclopédicos**, nunca narrativa do Irlan.
- Misture níveis A1–C2 no corpo do texto: é assim que os dossiês absorvem as
  milhares de palavras avançadas que não cabem no enredo.

Status atual: os dossiês estão distribuídos pelas 11 cidades e continuam
sendo auditados junto com a aventura. Não trate contagens históricas de seções
ou palavras cobertas como definitivas: use `bun run coverage` e `bun run gap`
para obter os números do workspace atual.
