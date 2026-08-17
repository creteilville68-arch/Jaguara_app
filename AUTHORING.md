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

| Métrica | Valor |
| --- | --- |
| Lições existentes | 464 |
| Palavras únicas no banco | 17.108 |
| Já presentes nos textos | 3.994 |
| **Ainda falta escrever nos textos** | **~13.100** |

A meta de 15.400 será atingida quando a coluna "ainda falta" chegar a zero —
ou seja, quando todas as palavras da lista de cada cidade aparecerem nos
parágrafos em francês.

## 2. Distribuição por cidade (ponderada pelo CEFR)

Níveis básicos concentram poucas palavras por cidade; os níveis avançados
concentram mais (densidade crescente):

| # | Cidade | Nível | Palavras a escrever |
| --- | --- | --- | --- |
| 1 | Paris | A1 | 349 |
| 2 | Amiens | A1/A2 | 573 |
| 3 | Lille | A2 | 224 |
| 4 | Mont Saint-Michel | A2/B1 | 687 |
| 5 | Tours | B1 | 463 |
| 6 | Bordeaux | B1+ | 462 |
| 7 | Toulouse | B2 | 1.038 |
| 8 | Lyon | B2+ | 1.037 |
| 9 | Marseille | C1 | 1.592 |
| 10 | Strasbourg | C1+ | 1.591 |
| 11 | Nice | C2 | 5.123 |

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
bun run lint       # typecheck (tsc --noEmit)
```

`coverage` imprime o total encontrado, o que falta e o detalhamento por nível.
Enquanto escreve, rode `bun run coverage` para ver o número subir.

## 7. Convenção de nomenclatura

- Arquivo: `src/data/<cidade>_lesson_<N>.json` (sequencial por cidade).
- Id: `<cidade>_lesson_<N>`.
- Cidade: `paris`, `amiens`, `lille`, `mont-saint-michel`, `tours`, `bordeaux`,
  `toulouse`, `lyon`, `marseille`, `strasbourg`, `nice`.
