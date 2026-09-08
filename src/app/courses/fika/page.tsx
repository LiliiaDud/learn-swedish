import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import styles from "./page.module.scss";

export default function FikaPage() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Learn Swedish · Fika</span>

              <h1>Шведська фіка</h1>

              <p>
                Неформальна практика шведської мови за чашкою кави. Спілкуємося,
                знайомимося та вчимося використовувати шведську у живих
                ситуаціях.
              </p>

              <Link href="/contacts?course=fika" className={styles.button}>
                Приєднатися до фіки
              </Link>
            </div>

            <div className={styles.heroImage}>
              <Image
                src="/images/courses/fika.jpg"
                alt="Шведська фіка за чашкою кави"
                fill
                priority
                sizes="(max-width: 992px) 100vw, 55vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.intro}>
        <Container>
          <div className={styles.introContent}>
            <span className={styles.eyebrow}>Що таке шведська фіка?</span>

            <p>
              Fika — це особлива шведська традиція зупинитися, випити кави та
              провести час разом. Ми поєднуємо цю затишну атмосферу з практикою
              шведської мови: говоримо, слухаємо, знайомимося та вчимося
              спілкуватися без страху помилитися.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.expect}>
        <Container>
          <div className={styles.expectHeader}>
            <span className={styles.eyebrow}>Що на вас чекає</span>

            <h2>
              Вчимося говорити
              <br />
              невимушено
            </h2>
          </div>

          <div className={styles.expectList}>
            <article className={styles.expectItem}>
              <span className={styles.expectNumber}>01</span>

              <div>
                <h3>Живе спілкування</h3>
                <p>
                  Говоримо шведською у невимушеній атмосфері, обговорюємо цікаві
                  теми та знайомимося з новими людьми.
                </p>
              </div>

              <span className={styles.expectIcon}>↗</span>
            </article>

            <article className={styles.expectItem}>
              <span className={styles.expectNumber}>02</span>

              <div>
                <h3>Шведські теми та культура</h3>
                <p>
                  Обговорюємо повсякденне життя у Швеції, традиції, культуру та
                  все, що допомагає краще зрозуміти шведське середовище.
                </p>
              </div>

              <span className={styles.expectIcon}>✦</span>
            </article>

            <article className={styles.expectItem}>
              <span className={styles.expectNumber}>03</span>

              <div>
                <h3>Кава та гарна компанія</h3>
                <p>
                  Створюємо затишний простір для спілкування, нових знайомств та
                  приємного проведення часу.
                </p>
              </div>

              <span className={styles.expectIcon}>→</span>
            </article>
          </div>
        </Container>
      </section>
      <section className={styles.format}>
        <Container>
          <div className={styles.formatHeader}>
            <span className={styles.eyebrow}>Формат і вартість</span>

            <h2>
              Зустрічаємося,
              <br />
              говоримо, пʼємо каву
            </h2>

            <p>
              Невимушені зустрічі для практики шведської, нових знайомств та
              приємного проведення часу.
            </p>
          </div>

          <div className={styles.formatGrid}>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span>Формат</span>
                <strong>Офлайн</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Тривалість</span>
                <strong>2 години</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Зустрічі</span>
                <strong>3 рази на місяць</strong>
              </div>

              <div className={styles.detailItem}>
                <span>Рівень</span>
                <strong>A1–B1</strong>
              </div>
            </div>

            <div className={styles.priceCard}>
              <span>Вартість участі</span>

              <strong>Уточнюється</strong>

              <p>
                Вартість залежить від формату зустрічі та може відрізнятися для
                різних подій.
              </p>

              <Link href="/contacts?course=fika" className={styles.button}>
                Дізнатися деталі
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
