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
      <section className={styles.practice}>
        <Container>
          <div className={styles.practiceHeader}>
            <span className={styles.eyebrow}>Що практикуємо</span>

            {/* <h2>Шведська, якою хочеться говорити</h2> */}
          </div>

          <div className={styles.practiceList}>
            <article className={styles.practiceItem}>
              <span className={styles.practiceNumber}>01</span>

              <div className={styles.practiceContent}>
                <h3>Повсякденне спілкування</h3>

                <p>
                  Вчимося говорити про роботу, навчання, покупки, плани,
                  подорожі та звичайні ситуації з життя у Швеції.
                </p>
              </div>

              <span className={styles.practiceIcon}>↗</span>
            </article>

            <article className={styles.practiceItem}>
              <span className={styles.practiceNumber}>02</span>

              <div className={styles.practiceContent}>
                <h3>Живі діалоги</h3>

                <p>
                  Практикуємо реальні діалоги та вчимося швидко реагувати на
                  запитання, підтримувати розмову й висловлювати свою думку.
                </p>
              </div>

              <span className={styles.practiceIcon}>♡</span>
            </article>

            <article className={styles.practiceItem}>
              <span className={styles.practiceNumber}>03</span>

              <div className={styles.practiceContent}>
                <h3>Вимова та природна мова</h3>

                <p>
                  Працюємо над вимовою, інтонацією та природними шведськими
                  фразами, щоб ваша мова звучала впевненіше.
                </p>
              </div>

              <span className={styles.practiceIcon}>✦</span>
            </article>

            <article className={styles.practiceItem}>
              <span className={styles.practiceNumber}>04</span>

              <div className={styles.practiceContent}>
                <h3>Впевненість у розмові</h3>

                <p>
                  Вчимося не боятися помилок, говорити без довгих пауз та легко
                  підтримувати розмову навіть у незнайомій ситуації.
                </p>
              </div>

              <span className={styles.practiceIcon}>→</span>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.format}>
        <Container>
          <div className={styles.formatHeader}>
            <div>
              <span className={styles.eyebrow}>Формат і вартість</span>

              <h2>
                Усе для того,
                <br />
                щоб більше говорити
              </h2>
            </div>

            <p>
              Регулярна практика, живе спілкування та комфортна атмосфера
              допоможуть поступово позбутися мовного барʼєру.
            </p>
          </div>

          <div className={styles.formatGrid}>
            {/* Деталі курсу */}
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span>Формат</span>
                <strong>Онлайн</strong>
                <p>Заняття у Zoom з викладачем та групою.</p>
              </div>

              <div className={styles.detailItem}>
                <span>Тривалість</span>
                <strong>1,5 години</strong>
                <p>Достатньо часу для практики та живого спілкування.</p>
              </div>

              <div className={styles.detailItem}>
                <span>Розклад</span>
                <strong>Пт · Нд</strong>
                <p>Заняття двічі на тиждень о 19:00.</p>
              </div>

              <div className={styles.detailItem}>
                <span>Тривалість курсу</span>
                <strong>3 місяці</strong>
                <p>Регулярна практика для помітного прогресу.</p>
              </div>
            </div>

            {/* Ціна */}
            <div className={styles.priceCard}>
              <span className={styles.priceLabel}>Вартість навчання</span>

              <div className={styles.price}>
                <strong>3000 SEK</strong>
              </div>

              {/* <span className={styles.priceDuration}>за 3 місяці навчання</span> */}

              <p>
                Оплату можна здійснювати частинами. Залиште заявку, щоб
                дізнатися про найближчу групу та почати навчання.
              </p>

              <Link
                href="/contacts?course=conversation"
                className={styles.priceButton}
              >
                Записатися на курс
                <span>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
