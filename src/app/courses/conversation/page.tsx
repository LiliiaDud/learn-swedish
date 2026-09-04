import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import styles from "./page.module.scss";

export default function ConversationCoursePage() {
  return (
    <main>
      {/* Hero секція розмовного курсу */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            {/* Ліва частина — текст */}
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                Learn Swedish · Conversation
              </span>

              <h1>Розмовні курси</h1>

              <p>
                Більше говоримо, менше боїмося помилок. Практикуємо шведську у
                живих ситуаціях та вчимося вільно спілкуватися у повсякденному
                житті.
              </p>

              <Link
                href="/contacts?course=conversation"
                className={styles.button}
              >
                Обрати курс
              </Link>
            </div>

            {/* Права частина — фотографія */}
            <div className={styles.heroImage}>
              <Image
                src="/images/courses/conversation.jpg"
                alt="Група людей практикує шведську мову"
                fill
                priority
                sizes="(max-width: 992px) 100vw, 55vw"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.marquee} aria-label="Розмовна практика">
        <div className={styles.marqueeTrack}>
          <span>Говоримо шведською з першого заняття</span>

          <span>•</span>

          <span>Практикуємо</span>

          <span>•</span>

          <span>Спілкуємося</span>

          <span>•</span>

          <span>Не боїмося помилок</span>

          <span>•</span>

          {/* Повторюємо контент для безперервної анімації */}
          <span>Говоримо шведською з першого заняття</span>

          <span>•</span>

          <span>Практикуємо</span>

          <span>•</span>

          <span>Спілкуємося</span>

          <span>•</span>

          <span>Не боїмося помилок</span>

          <span>•</span>
        </div>
      </section>

      <section className={styles.forWhom}>
        <Container>
          <div className={styles.forWhomHeader}>
            <h2>Тобі підійде курс, якщо:</h2>
          </div>

          <div className={styles.forWhomGrid}>
            <article className={styles.forWhomCard}>
              <span className={styles.cardIcon}>↗</span>

              <p>
                Хочеш говорити шведською швидко, природно та без довгих пауз.
              </p>
            </article>

            <article className={styles.forWhomCard}>
              <span className={styles.cardIcon}>♡</span>

              <p>Маєш базу, але не вистачає впевненості у спілкуванні.</p>
            </article>

            <article className={styles.forWhomCard}>
              <span className={styles.cardIcon}>✦</span>

              <p>
                Прагнеш звучати як носій і легко підтримувати будь-яку розмову.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
