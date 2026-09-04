import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import styles from "./page.module.scss";

export default function KidsCoursePage() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            {/* Текстова частина */}
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Learn Swedish · Kids</span>

              <h1>Для дітей і підлітків</h1>

              <p>
                Шведська легко, цікаво та без страху помилитися. Допомагаємо
                дітям говорити, розуміти та впевнено почуватися у
                шведськомовному середовищі.
              </p>

              <Link href="/contacts?course=kids" className={styles.button}>
                Обрати курс
              </Link>
            </div>

            {/* Фотографія */}
            <div className={styles.heroImage}>
              <Image
                src="/images/courses/kids.jpg"
                alt="Діти вивчають шведську мову"
                fill
                priority
                sizes="(max-width: 992px) 100vw, 55vw"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.marquee} aria-label="Навчання дітей">
        <div className={styles.marqueeTrack}>
          <span>Навчальні матеріали адаптуються до інтересів дитини</span>
          <span className={styles.icon}>✦</span>
          <span>Жодних нудних і застарілих завдань</span>
          <span className={styles.icon}>✦</span>

          {/* Повторюємо контент для плавної безперервної анімації */}
          <span>Навчальні матеріали адаптуються до інтересів дитини</span>
          <span className={styles.icon}>✦</span>
          <span>Жодних нудних і застарілих завдань</span>
          <span className={styles.icon}>✦</span>
          <span>Навчальні матеріали адаптуються до інтересів дитини</span>
          <span className={styles.icon}>✦</span>
        </div>
      </section>

      <section className={styles.forWhom}>
        <Container>
          <div className={styles.forWhomHeader}>
            <div>
              <span className={styles.eyebrow}>Для кого цей курс?</span>

              <h2>Шведська, яка подобається дітям</h2>
            </div>

            <p>
              Створюємо комфортне середовище, у якому дитина може вивчати
              шведську у своєму темпі, знаходити друзів та не боятися говорити.
            </p>
          </div>

          <div className={styles.forWhomGrid}>
            <article className={styles.forWhomCard}>
              {/* <span className={styles.cardIcon}>♡</span> */}

              <h3>Для дітей</h3>

              <p>
                Допомагаємо зробити перші кроки у шведській та поступово
                сформувати впевненість у спілкуванні.
              </p>

              <span className={styles.cardAge}>7–10 років</span>
            </article>

            <article className={styles.forWhomCard}>
              {/* <span className={styles.cardIcon}>✦</span> */}

              <h3>Для підлітків</h3>

              <p>
                Розвиваємо словниковий запас, граматику та розмовну мову через
                теми, які цікаві підліткам.
              </p>

              <span className={styles.cardAge}>11–16 років</span>
            </article>

            <article className={styles.forWhomCard}>
              {/* <span className={styles.cardIcon}>→</span> */}

              <h3>Для різного рівня</h3>

              <p>
                Підберемо програму відповідно до поточних знань дитини — від
                початкового до впевненого рівня.
              </p>

              <span className={styles.cardAge}>A1 – B2</span>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.how}>
        <Container>
          <div className={styles.howHeader}>
            <div>
              <span className={styles.eyebrow}>Як проходять заняття?</span>

              <h2>
                Навчання, у якому
                <br />
                дитині цікаво
              </h2>
            </div>

            <p>
              Створюємо атмосферу, у якій дитина може вільно говорити, пробувати
              нове та поступово закохуватися у шведську мову.
            </p>
          </div>

          <div className={styles.howList}>
            <article className={styles.howItem}>
              <span className={styles.number}>01</span>

              <div>
                <h3>Жива шведська</h3>
                <p>
                  Говоримо шведською вже з перших занять, поступово розширюючи
                  словниковий запас та впевненість дитини.
                </p>
              </div>

              <span className={styles.itemIcon}>↗</span>
            </article>

            <article className={styles.howItem}>
              <span className={styles.number}>02</span>

              <div>
                <h3>Ігровий формат</h3>
                <p>
                  Використовуємо ігри, творчі завдання та інтерактивні вправи,
                  щоб навчання залишалося цікавим і різноманітним.
                </p>
              </div>

              <span className={styles.itemIcon}>✦</span>
            </article>

            <article className={styles.howItem}>
              <span className={styles.number}>03</span>

              <div>
                <h3>Цікаві теми</h3>
                <p>
                  Підбираємо матеріали відповідно до віку, рівня та інтересів
                  дитини, щоб шведська була близькою до її реального життя.
                </p>
              </div>

              <span className={styles.itemIcon}>♡</span>
            </article>

            <article className={styles.howItem}>
              <span className={styles.number}>04</span>

              <div>
                <h3>Власний темп</h3>
                <p>
                  Допомагаємо рухатися вперед поступово, підтримуємо та
                  заохочуємо дитину без зайвого тиску.
                </p>
              </div>

              <span className={styles.itemIcon}>→</span>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.format}>
        <Container>
          <div className={styles.formatHeader}>
            <div>
              <span className={styles.eyebrow}>Формат навчання</span>

              <h2>
                Регулярні заняття, зрозуміла програма та підтримка викладача
              </h2>
            </div>

            <p>
              Урок складається з різноманітних блоків, які допомагають дитині
              розвивати всі мовні навички — слухання, говоріння, читання та
              письмо.
            </p>
          </div>

          <div className={styles.formatGrid}>
            {/* Основні деталі */}
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span>Формат</span>
                <strong>Онлайн</strong>
                <p>Заняття у Zoom, 2 рази на тиждень.</p>
              </div>

              <div className={styles.detailItem}>
                <span>Тривалість</span>
                <strong>1 – 1,5 години</strong>
                <p>Для дітей – 1 година.</p>
                <p>Для підлітків – 1,5 години.</p>
              </div>

              <div className={styles.detailItem}>
                <span>Групи</span>
                <strong>Невеликі групи</strong>
                <p>
                  Достатньо уваги кожній дитині та багато можливостей говорити.
                </p>
              </div>

              <div className={styles.detailItem}>
                <span>Рівень</span>
                <strong>A1 – B2</strong>
                <p>Підбираємо групу відповідно до рівня знань.</p>
              </div>
            </div>

            {/* Вартість */}
            <div className={styles.priceCard}>
              <span className={styles.priceLabel}>Вартість навчання</span>

              <div className={styles.price}>
                <strong>Уточнюється</strong>
              </div>

              <p>
                Залиште заявку, і ми розповімо про актуальні групи, розклад та
                вартість навчання.
              </p>

              <Link href="/contacts?course=kids" className={styles.priceButton}>
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
