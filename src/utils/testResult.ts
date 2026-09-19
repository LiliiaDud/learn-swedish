import type { TestLevel } from "@/data/testQuestions";

type LevelScores = Record<TestLevel, number>;

export function getTestLevel(scores: LevelScores): TestLevel {
  // Перевіряємо рівні від найвищого до найнижчого.
  // Якщо користувач добре виконав блок B2 —
  // визначаємо його результат як B2.
  if (scores.B2 >= 4) {
    return "B2";
  }

  if (scores.B1 >= 4) {
    return "B1";
  }

  if (scores.A2 >= 4) {
    return "A2";
  }

  return "A1";
}
