import Container from "@/components/shared/Container";
import LevelTest from "@/components/test/LevelTest";
import styles from "./page.module.scss";

export default function TestPage() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Learn Swedish · Level test</span>

            <h1>Тест на рівень шведської</h1>

            <p>
              Перевірте свої знання шведської мови та дізнайтеся свій
              орієнтовний рівень — від A1 до B2.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.testSection}>
        <Container>
          <LevelTest />
        </Container>
      </section>
    </main>
  );
}
