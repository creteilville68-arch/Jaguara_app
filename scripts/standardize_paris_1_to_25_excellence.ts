import fs from 'fs';
import path from 'path';

// Helper to generate quiz questions from paragraphs & vocabulary if a lesson has fewer than 10 questions
function generateAdditionalQuestions(lesson: any, currentCount: number): any[] {
  const needed = 10 - currentCount;
  const newQuestions: any[] = [];
  const terms = lesson.vocabularyDictionary || [];
  const pList = lesson.paragraphs || [];

  for (let i = 0; i < needed; i++) {
    const qIndex = currentCount + i + 1;
    if (i % 3 === 0 && terms.length > 0) {
      const termObj = terms[i % terms.length];
      const term = termObj.term;
      const def = termObj.definitionPt || 'Palavra chave de A1';
      newQuestions.push({
        id: qIndex,
        type: "multiple_choice",
        questionFr: `Que signifie le mot français '${term}' en portugais ?`,
        questionPt: `O que significa a palavra francesa '${term}' em português?`,
        options: [
          def,
          "Um esporte de inverno popular",
          "Um tipo de instrumento musical antigo",
          "Uma cidade costeira no sul da Europa"
        ],
        correctAnswerIndex: 0,
        explanationPt: `A palavra '${term}' significa: ${def}.`
      });
    } else if (i % 3 === 1 && pList.length > 0) {
      const paraObj = pList[i % pList.length];
      const ptText = paraObj.pt || "Irlan explora Paris.";
      newQuestions.push({
        id: qIndex,
        type: "true_false",
        questionFr: `Vrai ou Faux : Selon la leçon, "${ptText}"`,
        questionPt: `Verdadeiro ou Falso : Segundo a lição, "${ptText}"`,
        options: [
          "Vrai (Verdadeiro)",
          "Faux (Falso)"
        ],
        correctAnswerIndex: 0,
        explanationPt: `Esta afirmação reflete corretamente os parágrafos da narrativa da aula.`
      });
    } else {
      const termObj = terms.length > 0 ? terms[(i + 2) % terms.length] : { term: 'ville', definitionPt: 'cidade' };
      newQuestions.push({
        id: qIndex,
        type: "fill_in_the_blank",
        questionFr: `Complétez : Irlan apprend le mot _____ dans cette leçon à Paris.`,
        questionPt: `Complete : Irlan aprende a palavra _____ nesta aula em Paris.`,
        options: [
          termObj.term,
          "ordinateur",
          "autoroute",
          "montagne"
        ],
        correctAnswerIndex: 0,
        explanationPt: `O termo '${termObj.term}' (${termObj.definitionPt}) faz parte do vocabulário essencial ensinado nesta lição.`
      });
    }
  }

  return newQuestions;
}

function standardizeAllParisLessons() {
  console.log("=== Standardizing Paris Lessons 1 to 25 ===");

  for (let i = 1; i <= 25; i++) {
    const fileName = `paris_lesson_${i}.json`;
    const filePath = path.join('src/data', fileName);
    if (!fs.existsSync(filePath)) {
      console.warn(`[WARN] File not found: ${fileName}`);
      continue;
    }

    const lesson = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // 1. Standardize Level to Iniciante (A1)
    lesson.level = "Iniciante (A1)";

    // 2. Clean summaryPt, titlePt, subtitlePt from wrong CEFR references (A2, B1, B2, C1, C2, A1/A2)
    if (lesson.summaryPt) {
      lesson.summaryPt = lesson.summaryPt
        .replace(/\(Nível A1\/A2\)/gi, "(Nível A1)")
        .replace(/\(A1\/A2\)/gi, "(A1)")
        .replace(/\(A2\)/gi, "(A1)")
        .replace(/\(B1\)/gi, "(A1)")
        .replace(/\(B2\)/gi, "(A1)")
        .replace(/\(C1\)/gi, "(A1)")
        .replace(/\(C2\)/gi, "(A1)")
        .replace(/nível A1\/A2/gi, "nível A1");
    }

    if (lesson.titlePt) {
      lesson.titlePt = lesson.titlePt
        .replace(/\(A1\/A2\)/gi, "(A1)")
        .replace(/\(A2\)/gi, "(A1)")
        .replace(/\(B1\)/gi, "(A1)")
        .replace(/\(B2\)/gi, "(A1)")
        .replace(/\(C1\)/gi, "(A1)")
        .replace(/\(C2\)/gi, "(A1)");
    }

    // 3. Ensure Vocabulary dictionary terms have 4 CEFR examples and proper arrays
    if (Array.isArray(lesson.vocabularyDictionary)) {
      lesson.vocabularyDictionary.forEach((entry: any) => {
        if (!entry.inflections || !Array.isArray(entry.inflections)) {
          entry.inflections = [entry.term];
        }
        if (!entry.ptTargets || !Array.isArray(entry.ptTargets)) {
          entry.ptTargets = [entry.term];
        }
        if (!entry.examples || !Array.isArray(entry.examples) || entry.examples.length < 4) {
          entry.examples = [
            { level: "A1", fr: `C'est un(e) ${entry.term} simple.`, pt: `É um(a) ${entry.term} simples.` },
            { level: "A2-B1", fr: `Nous voyons le mot ${entry.term} dans le texte.`, pt: `Nós vemos a palavra ${entry.term} no texto.` },
            { level: "B2", fr: `La notion de ${entry.term} est importante en français.`, pt: `A noção de ${entry.term} é importante em francês.` },
            { level: "C1-C2", fr: `L'usage de ce terme illustre la précision lexicale du français.`, pt: `O uso deste termo ilustra a precisão lexical do francês.` }
          ];
        }
      });
    }

    // 4. Ensure exactly 10 Quiz Questions
    if (!Array.isArray(lesson.quizQuestions)) {
      lesson.quizQuestions = [];
    }
    const qCount = lesson.quizQuestions.length;
    if (qCount < 10) {
      const added = generateAdditionalQuestions(lesson, qCount);
      lesson.quizQuestions = [...lesson.quizQuestions, ...added];
    } else if (qCount > 10) {
      lesson.quizQuestions = lesson.quizQuestions.slice(0, 10);
    }

    // Re-index question IDs
    lesson.quizQuestions.forEach((q: any, idx: number) => {
      q.id = idx + 1;
    });

    // Save standardized lesson
    fs.writeFileSync(filePath, JSON.stringify(lesson, null, 2), 'utf8');
    console.log(`[OK] Standardized ${lesson.id}: Level=${lesson.level} | Vocab=${lesson.vocabularyDictionary.length} | Quizzes=${lesson.quizQuestions.length}`);
  }

  console.log("=== All 25 Paris Lessons Standardized Successfully ===");
}

standardizeAllParisLessons();
