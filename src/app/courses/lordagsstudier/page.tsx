// import Link from "next/link";
import Container from "@/components/shared/Container";
import styles from "./page.module.scss";

export default function LordagsstudierPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true" />

        <div className={styles.heroOverlay} />

        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              Learn Swedish · Lördagsstudier
            </span>

            <h1>
              Твій самостійний час для
              <br />
              шведської
            </h1>

            <p>
              Самостійне навчання у спокійній атмосфері з підтримкою ментора.
            </p>

            <span className={styles.heroNote}>
              Тільки для студентів Learn Swedish
            </span>
          </div>
        </Container>
      </section>

      <section className={styles.about}>
        <Container>
          <div className={styles.aboutContent}>
            <span className={styles.eyebrow}>Що таке Lördagsstudier</span>

            <h2>Це твій час для шведської</h2>

            <p>
              Іноді найскладніше у навчанні — не знайти матеріали, а просто
              сісти й почати займатися.
            </p>

            <div className={styles.aboutNote}>
              <span>♡</span>
              <p>
                Це не урок і не розмовний клуб. Кожен учасник сам обирає, над
                чим хоче працювати.
              </p>
              <span>♡</span>
              <p>
                Це час, який ми створили саме для того, щоб ти міг системно
                займатися шведською не відкладаючи це на потім.
              </p>
              <span>♡</span>
              <p>
                Щосуботи о 20:00, ти можеш відкласти всі справи та приєднатися до
                Zoom, щоб присвятити час навчанню у своєму темпі.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.access}>
        <Container>
          <div className={styles.accessHeader}>
            <span className={styles.eyebrow}>Доступ до Lördagsstudier</span>

            <h2>
              Для кого
              <br />
              ці зустрічі?
            </h2>
          </div>

          <div className={styles.accessGrid}>
            <div className={styles.accessBlock}>
              <h3>Для студентів Learn Swedish</h3>

              <p>
                Lördagsstudier доступний усім, хто навчається на будь-якому з
                наших курсів. Це додатковий час для самостійної роботи та
                можливість отримати підтримку ментора.
              </p>
            </div>

            <div className={styles.accessBlock}>
              <h3>Як отримати доступ?</h3>

              <p>
                Вам не потрібно записуватися на окремий курс. Якщо ви є
                студентом Learn Swedish, ви можете приєднатися до Lördagsstudier
                та використовувати цей час так, як потрібно саме вам.
              </p>
            </div>
          </div>
          {/* 
          <div className={styles.accessNote}>
            <span>+</span>

            <p>
              Хочете навчатися більше, але не знаєте, коли знайти для цього час?
              Lördagsstudier допомагає створити окрему годину для шведської у
              вашому тижні.
            </p>
          </div> */}
        </Container>
      </section>
    </main>
  );
}
