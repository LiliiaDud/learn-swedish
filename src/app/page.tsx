import Container from "@/components/shared/Container";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Learn Swedish</h1>

          <p className={styles.subtitle}>
            Мова відкриває можливості. Вивчайте шведську легко, з підтримкою та
            у теплому українському середовищі.
          </p>
        </Container>
      </section>
    </main>
  );
}
