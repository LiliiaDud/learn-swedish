import Link from "next/link";
import Container from "../shared/Container";
import styles from "./TestBanner.module.scss";

export default function TestBanner() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.banner}>
          <div className={styles.textBlock}>
            <h2>Не знаєте свій рівень шведської?</h2>

            <p>
              Пройдіть короткий тест за 5 хвилин — ми визначимо ваш рівень та
              допоможемо підібрати відповідну групу.
            </p>
          </div>

          <Link href="/courses/test" className={styles.button}>
            Пройти тест
          </Link>
        </div>
      </Container>
    </section>
  );
}
