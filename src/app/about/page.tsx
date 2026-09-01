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
    </main>
  );
}
