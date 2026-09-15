import Link from "next/link";
import Container from "@/components/shared/Container";
import styles from "./page.module.scss";

export default function AdultsPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay} />

        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              Learn Swedish · Курси для дорослих
            </span>

            <h1>
              Шведська
              <br />
              впевнено
            </h1>

            <p>
              Системне вивчення шведської від початкового до впевненого рівня.
            </p>
          </div>
        </Container>
      </section>

      {/* Про курс */}
      <section className={styles.about}>
        <Container>
          <div className={styles.aboutContent}>
            <span className={styles.eyebrow}>Про курс</span>

            <h2>
              Вивчайте шведську
              <br />
              системно та впевнено
            </h2>

            <p>
              Курс допоможе вам системно вивчати шведську мову, розвивати
              словниковий запас, граматику та навички живого спілкування.
            </p>
          </div>
        </Container>
      </section>

      {/* Програма */}
      <section className={styles.program}>
        <Container>
          <div className={styles.programHeader}>
            <span className={styles.eyebrow}>Програма</span>

            <h2>
              Що будемо
              <br />
              вивчати
            </h2>
          </div>

          <div className={styles.programList}>
            <article className={styles.programItem}>
              <span className={styles.programNumber}>01</span>
              <div>
                <h3>Граматика</h3>
                <p>
                  Розбираємо структуру шведської мови та вчимося правильно
                  використовувати граматичні конструкції.
                </p>
              </div>
              <span className={styles.programIcon}>✦</span>
            </article>

            <article className={styles.programItem}>
              <span className={styles.programNumber}>02</span>
              <div>
                <h3>Словниковий запас</h3>
                <p>
                  Розширюємо словниковий запас та вчимося використовувати нові
                  слова у реальних ситуаціях.
                </p>
              </div>
              <span className={styles.programIcon}>↗</span>
            </article>

            <article className={styles.programItem}>
              <span className={styles.programNumber}>03</span>
              <div>
                <h3>Розмовна практика</h3>
                <p>
                  Практикуємо шведську в різних повсякденних ситуаціях та
                  поступово стаємо впевненішими у спілкуванні.
                </p>
              </div>
              <span className={styles.programIcon}>♡</span>
            </article>

            <article className={styles.programItem}>
              <span className={styles.programNumber}>04</span>
              <div>
                <h3>Аудіювання та вимова</h3>
                <p>
                  Працюємо над розумінням живої шведської мови та правильною
                  вимовою.
                </p>
              </div>
              <span className={styles.programIcon}>→</span>
            </article>
          </div>
        </Container>
      </section>

      {/* Формат і вартість */}
      <section className={styles.format}>
        <Container>
          <div className={styles.formatHeader}>
            <span className={styles.eyebrow}>Формат і вартість</span>

            <h2>Навчайтеся з нами, щоб досягти результату</h2>
          </div>

          <div className={styles.formatGrid}>
            {/* Деталі курсу */}
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span>Формат</span>
                <h3>
                  Онлайн-заняття
                  <br />у невеликих групах
                </h3>
                <p>Заняття у Zoom з викладачем та групою.</p>
              </div>

              <div className={styles.detailItem}>
                <span>Тривалість</span>
                <strong>1,5 години</strong>
                <p>З невеликою перервою (10-хв).</p>
              </div>

              <div className={styles.detailItem}>
                <span>Розклад</span>
                <strong>Пн · Чт</strong>
                <p>Заняття двічі на тиждень для регулярної практики.</p>
              </div>

              <div className={styles.detailItem}>
                <span>Тривалість курсу</span>
                <strong>3 місяці</strong>
                <p>Цього достатньо щоб пройти один рівень.</p>
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
                href="/contacts?course=adults"
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
