import Image from "next/image";
import Container from "@/components/shared/Container";

import styles from "./page.module.scss";

export default function AboutPage() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>Learn Swedish</span>

          <h1>Про нас</h1>

          <p>Вивчення шведської може бути легким, зрозумілим і приємним.</p>
        </Container>
      </section>

      <section className={styles.story}>
        <Container>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <span className={styles.eyebrow}>Наша історія</span>

              <h2>Шведська — це більше, ніж просто слова</h2>

              <p>
                Learn Swedish створена для тих, хто хоче не просто вивчити
                граматику, а почуватися впевнено у Швеції.
              </p>

              <p>
                Ми знаємо, наскільки складно починати життя в новій країні та
                одночасно вчити нову мову. Саме тому створили навчання, де
                складне пояснюється просто, а помилки сприймаються як природна
                частина процесу.
              </p>

              <p>
                Ми поєднуємо системне вивчення шведської з живою практикою,
                культурою та спілкуванням.
              </p>
            </div>

            <div className={styles.storyVisual}>
              <Image
                src="/images/about/lesson.jpg"
                alt="Заняття з шведської мови"
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.approach}>
        <Container>
          <div className={styles.approachHeader}>
            <div>
              <span className={styles.eyebrow}>Наш підхід</span>

              <h2>
                Навчання, яке працює
                <br />у реальному житті
              </h2>
            </div>

            <p>
              Ми поєднуємо системність, живу практику та підтримку, щоб шведська
              стала частиною вашого повсякденного життя.
            </p>
          </div>

          <div className={styles.approachGrid}>
            <article className={styles.approachCard}>
              <h3>Особистий підхід</h3>

              <p>
                Помічаємо сильні сторони кожного студента та допомагаємо
                працювати саме над тим, що потребує уваги.
              </p>
            </article>

            <article className={styles.approachCard}>
              <h3>Практичний результат</h3>

              <p>
                Вчимо мову для реального життя: роботи, навчання, спілкування та
                повсякденних ситуацій у Швеції.
              </p>
            </article>

            <article className={styles.approachCard}>
              <h3>Натхнена спільнота</h3>

              <p>
                Навчання стає легшим, коли поруч люди, які проходять схожий шлях
                і можуть підтримати одне одного.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
