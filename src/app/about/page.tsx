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
    </main>
  );
}
