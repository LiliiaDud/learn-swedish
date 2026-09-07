import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";

import styles from "./page.module.scss";

export default function IndividualCoursePage() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Learn Swedish · Individual</span>

              <h1>Індивідуальні заняття</h1>

              <p>
                Навчайтеся у своєму темпі, з програмою, яка відповідає саме
                вашим цілям, рівню та потребам.
              </p>

              <Link
                href="/contacts?course=individual"
                className={styles.button}
              >
                Записатися на заняття
              </Link>
            </div>

            <div className={styles.heroImage}>
              <Image
                src="/images/courses/individual.jpg"
                alt="Індивідуальне заняття зі шведської мови"
                fill
                priority
                sizes="(max-width: 992px) 100vw, 55vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.benefits}>
        <Container>
          <div className={styles.benefitsHeader}>
            <span className={styles.eyebrow}>Що ви отримуєте</span>

            <h2>
              Навчання, яке
              <br />
              підлаштовується під вас
            </h2>
          </div>

          <div className={styles.benefitsList}>
            <article className={styles.benefitItem}>
              <span className={styles.benefitNumber}>01</span>

              <div>
                <h3>Індивідуальна програма</h3>
                <p>
                  Заняття побудовані відповідно до вашого рівня, цілей та темпу
                  навчання.
                </p>
              </div>

              <span className={styles.benefitIcon}>↗</span>
            </article>

            <article className={styles.benefitItem}>
              <span className={styles.benefitNumber}>02</span>

              <div>
                <h3>Фокус на ваших цілях</h3>
                <p>
                  Робимо акцент саме на тому, що вам потрібно: розмовна мова,
                  робота, навчання чи іспит.
                </p>
              </div>

              <span className={styles.benefitIcon}>♡</span>
            </article>

            <article className={styles.benefitItem}>
              <span className={styles.benefitNumber}>03</span>

              <div>
                <h3>Зручний темп</h3>
                <p>
                  Ви можете рухатися у комфортному для себе темпі та приділяти
                  більше часу складним темам.
                </p>
              </div>

              <span className={styles.benefitIcon}>✦</span>
            </article>

            <article className={styles.benefitItem}>
              <span className={styles.benefitNumber}>04</span>

              <div>
                <h3>Більше практики</h3>
                <p>
                  Максимум уваги вам, вашим запитанням, помилкам та реальним
                  ситуаціям зі шведського життя.
                </p>
              </div>

              <span className={styles.benefitIcon}>→</span>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.format}>
        <Container>
          <div className={styles.formatHeader}>
            <div>
              <span className={styles.eyebrow}>Формат і вартість</span>

              <h2>Ваше навчання — ваші правила</h2>
            </div>

            <p>
              Обираємо зручний формат та темп, щоб навчання легко вписувалося у
              ваше життя.
            </p>
          </div>

          <div className={styles.formatGrid}>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span>Формат</span>
                <strong>Онлайн</strong>
                <p>Індивідуальні заняття у Zoom.</p>
              </div>

              <div className={styles.detailItem}>
                <span>Тривалість</span>
                <strong>1 година</strong>
                <p>Повністю присвячена вашому навчанню.</p>
              </div>

              <div className={styles.detailItem}>
                <span>Розклад</span>
                <strong>Гнучкий</strong>
                <p>Час занять погоджується індивідуально.</p>
              </div>

              <div className={styles.detailItem}>
                <span>Рівень</span>
                <strong>A1–C1</strong>
                <p>Від початкового до впевненого рівня.</p>
              </div>
            </div>

            <div className={styles.priceCard}>
              <span className={styles.priceLabel}>Вартість навчання</span>

              <div className={styles.price}>
                <strong>350 SEK</strong>
              </div>

              <span className={styles.priceDuration}>за 1 заняття</span>

              <p>
                Підберемо програму та зручний час відповідно до ваших потреб.
              </p>

              <Link
                href="/contacts?course=individual"
                className={styles.priceButton}
              >
                Записатися
                <span>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
