import Container from "../shared/Container";
import ContactForm from "../forms/ContactForm";

import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <span>Контакти</span>

            <h2>Залишились питання?</h2>

            <p>
              Заповніть форму — ми зателефонуємо або напишемо вам протягом 24
              годин і допоможемо підібрати ідеальну групу.
            </p>

            <ul>
              <li>✓ Онлайн та офлайн навчання</li>
              <li>✓ Консультація українською</li>
              <li>✓ Допоможемо визначити рівень</li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
