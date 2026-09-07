import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";

import styles from "./page.module.scss";

export default function ExamCoursePage() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Learn Swedish · Exam</span>

              <h1>Підготовка до іспитів</h1>

              <p>
                Системна підготовка до мовних іспитів з фокусом на практику,
                впевненість та потрібний вам результат.
              </p>

              <Link href="/contacts?course=exam" className={styles.button}>
                Записатися на підготовку
              </Link>
            </div>

            <div className={styles.heroImage}>
              <Image
                src="/images/courses/exam.jpg"
                alt="Підготовка до іспиту зі шведської мови"
                fill
                priority
                sizes="(max-width: 992px) 100vw, 55vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.preparation}>
        <Container>
          <div className={styles.preparationHeader}>
            <span className={styles.eyebrow}>Що входить у підготовку</span>

            <h2>Готуємося впевнено та системно</h2>
          </div>

          <div className={styles.preparationList}>
            <article className={styles.preparationItem}>
              <span className={styles.preparationNumber}>01</span>

              <div>
                <h3>Практика тестових завдань</h3>
                <p>
                  Розбираємо типові завдання та вчимося правильно розподіляти
                  час на іспиті.
                </p>
              </div>

              <span className={styles.preparationIcon}>↗</span>
            </article>

            <article className={styles.preparationItem}>
              <span className={styles.preparationNumber}>02</span>

              <div>
                <h3>Говоріння та письмо</h3>
                <p>
                  Практикуємо усні й письмові завдання, працюємо над структурою
                  та лексикою.
                </p>
              </div>

              <span className={styles.preparationIcon}>♡</span>
            </article>

            <article className={styles.preparationItem}>
              <span className={styles.preparationNumber}>03</span>

              <div>
                <h3>Словниковий запас і граматика</h3>
                <p>
                  Повторюємо необхідну граматику та лексику, які допоможуть
                  впевненіше виконувати завдання.
                </p>
              </div>

              <span className={styles.preparationIcon}>✦</span>
            </article>

            <article className={styles.preparationItem}>
              <span className={styles.preparationNumber}>04</span>

              <div>
                <h3>Пробні іспити</h3>
                <p>
                  Виконуємо завдання у форматі реального іспиту, аналізуємо
                  помилки та відстежуємо прогрес.
                </p>
              </div>

              <span className={styles.preparationIcon}>→</span>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.format}>
        <Container>
          <div className={styles.formatHeader}>
            <span className={styles.eyebrow}>Формат і вартість</span>

            <h2>Підготовка, адаптована під вас</h2>

            <p>
              Визначаємо формат навчання відповідно до вашого рівня, цілей,
              термінів та типу іспиту.
            </p>
          </div>

          <div className={styles.formatGrid}>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span>Формат</span>
                <strong>Онлайн</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Тривалість</span>
                <strong>Індивідуально</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Графік</span>
                <strong>Гнучкий</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Рівень</span>
                <strong>A1–B2</strong>
              </div>
            </div>

            <div className={styles.priceCard}>
              <span>Вартість навчання</span>

              <strong>Уточнюється</strong>

              <p>
                Вартість залежить від ваших потреб, рівня підготовки, формату та
                кількості занять.
              </p>

              <Link href="/contacts?course=exam" className={styles.button}>
                Записатися на підготовку
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
