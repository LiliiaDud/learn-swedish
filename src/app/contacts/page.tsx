import Container from "@/components/shared/Container";

import ContactForm from "@/components/forms/ContactForm";

import styles from "./page.module.scss";

export default function ContactsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Learn Swedish</span>

            <h1>Контакти</h1>

            <p>
              Маєте запитання або не знаєте, який формат навчання вам підійде?
              Напишіть нам — ми допоможемо.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.contact}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.info}>
              <span className={styles.eyebrow}>Звʼяжіться з нами</span>

              <h2>
                Заповніть форму —
                <br />
                ми звʼяжемося з вами
              </h2>

              <p>
                Залиште свої контакти та розкажіть, що вас цікавить. Ми
                зателефонуємо або напишемо вам протягом 24 годин.
              </p>

              <div className={styles.details}>
                <div>
                  <span>Email</span>
                  <a href="mailto:hello@learnswedish.se">
                    hello@learnswedish.se
                  </a>
                </div>

                <div>
                  <span>Telegram</span>
                  <a href="#">Написати нам</a>
                </div>

                <div>
                  <span>Телефон</span>
                  <a href="tel:+46000000000">+46 XX XXX XX XX</a>
                </div>
              </div>
            </div>

            <div className={styles.formWrapper}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          <span>Залишайся з нами на зв'язку</span>
          <span>•</span>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <span>•</span>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>

          <span>•</span>

          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>

          <span>•</span>

          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>

          <span>•</span>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <span>•</span>

          {/* Повторюємо для плавного безперервного руху */}

          <span>Залишайся з нами на зв'язку</span>
          <span>•</span>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <span>•</span>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>

          <span>•</span>

          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>

          <span>•</span>

          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>

          <span>•</span>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <span>•</span>

          <span>Залишайся з нами на зв'язку</span>
          <span>•</span>
        </div>
      </section>
    </main>
  );
}
