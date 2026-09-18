"use client";

import { useState } from "react";
import { testQuestions } from "@/data/testQuestions";

import { getTestLevel } from "@/utils/testResult";

import styles from "./LevelTest.module.scss";

export default function LevelTest() {
  // Номер поточного питання.
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Індекс обраної відповіді.
  // null означає, що користувач ще нічого не обрав.
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Кількість правильних відповідей.
  const [levelScores, setLevelScores] = useState({
    A1: 0,
    A2: 0,
    B1: 0,
    B2: 0,
  });

  // Чи завершив користувач тест.
  const [isFinished, setIsFinished] = useState(false);

  const [resultLevel, setResultLevel] = useState<
    "A1" | "A2" | "B1" | "B2" | null
  >(null);

  // Отримуємо поточне питання з масиву.
  const question = testQuestions[currentQuestion];

  // Користувач обирає відповідь.
  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  // Переходимо до наступного питання.
  const handleNext = () => {
    const isCorrect = selectedAnswer === question.correctAnswer;

    // Створюємо копію поточного результату.
    const updatedScores = { ...levelScores };

    // Якщо відповідь правильна —
    // збільшуємо результат відповідного рівня.
    if (isCorrect) {
      updatedScores[question.level] += 1;
    }

    // Якщо це останнє питання —
    // визначаємо фінальний рівень.
    if (currentQuestion === testQuestions.length - 1) {
      const level = getTestLevel(updatedScores);

      setLevelScores(updatedScores);
      setResultLevel(level);
      setIsFinished(true);

      return;
    }

    // Зберігаємо оновлений результат.
    setLevelScores(updatedScores);

    // Переходимо до наступного питання.
    setCurrentQuestion((prev) => prev + 1);

    // Скидаємо вибрану відповідь.
    setSelectedAnswer(null);
  };

  // Якщо тест завершений — показуємо результат.
  if (isFinished) {
    return (
      <section className={styles.result}>
        <p className={styles.resultLabel}>Тест завершено</p>

        <h2>
          Ваш орієнтовний рівень:
          <br />
          {resultLevel}
        </h2>

        <p>
          Правильних відповідей:{" "}
          {Object.values(levelScores).reduce(
            (total, value) => total + value,
            0,
          )}{" "}
          з {testQuestions.length}
        </p>

        <p>
          Це попередній результат тесту. Він допоможе зорієнтуватися у вашому
          рівні шведської мови.
        </p>
      </section>
    );
  }

  return (
    <section className={styles.test}>
      {/* Прогрес */}
      <div className={styles.progress}>
        <span>
          Питання {currentQuestion + 1} з {testQuestions.length}
        </span>

        <span>{question.level}</span>
      </div>

      {/* Питання */}
      <div className={styles.question}>
        {question.text && (
          <p className={styles.questionText}>{question.text}</p>
        )}

        <h2>{question.question}</h2>
      </div>

      {/* Варіанти відповідей */}
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={option}
            type="button"
            className={`${styles.option} ${
              selectedAnswer === index ? styles.selected : ""
            }`}
            onClick={() => handleAnswer(index)}
          >
            <span>{String.fromCharCode(65 + index)}</span>

            {option}
          </button>
        ))}
      </div>

      {/* Наступне питання */}
      <button
        type="button"
        className={styles.nextButton}
        onClick={handleNext}
        disabled={selectedAnswer === null}
      >
        {currentQuestion === testQuestions.length - 1
          ? "Завершити тест"
          : "Наступне питання"}
      </button>
    </section>
  );
}
