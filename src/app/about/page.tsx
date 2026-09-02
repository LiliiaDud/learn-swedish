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

      <section className={styles.why}>
        <Container>
          <div className={styles.whyGrid}>
            <div className={styles.whyIntro}>
              <span className={styles.eyebrow}>Чому Learn Swedish?</span>

              <h2>
                Вивчаємо мову
                <br />
                разом із культурою
              </h2>

              <p>
                Ми допомагаємо не просто вивчити шведські слова та правила, а
                впевнено почуватися у шведському середовищі.
              </p>
            </div>

            <div className={styles.whyList}>
              <article className={styles.whyItem}>
                <span className={styles.whyIcon}>♡</span>

                <div>
                  <h3>Україномовні викладачі та носії мови</h3>

                  <p>
                    Пояснюємо складне простою мовою та допомагаємо зрозуміти
                    особливості шведської.
                  </p>
                </div>
              </article>

              <article className={styles.whyItem}>
                <span className={styles.whyIcon}>☕</span>

                <div>
                  <h3>Культурна адаптація</h3>

                  <p>
                    Вчимо не лише мови, а й розуміти шведський менталітет,
                    традиції та повсякденне життя.
                  </p>
                </div>
              </article>

              <article className={styles.whyItem}>
                <span className={styles.whyIcon}>+</span>

                <div>
                  <h3>Тепле співтовариство</h3>

                  <p>
                    Підтримка, нові знайомства та можливість практикувати
                    шведську без страху помилитися.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          <span>Пояснюємо складне простою мовою</span>
          <span>•</span>
          <span>Мінігрупи ± 4 учні</span>
          <span>•</span>
          <span>Мова для реального життя</span>
          <span>•</span>
          <span>Дружнє середовище</span>
          <span>•</span>
          <span>Інтерактив замість зубріння</span>
          <span>•</span>

          {/* Повторюємо, для плавного безперервного руху */}
          <span>Пояснюємо складне простою мовою</span>
          <span>•</span>
          <span>Мінігрупи ± 4 учні</span>
          <span>•</span>
          <span>Мова для реального життя</span>
          <span>•</span>
          <span>Дружнє середовище</span>
          <span>•</span>
          <span>Інтерактив замість зубріння</span>
          <span>•</span>
        </div>
      </section>

      <section className={styles.team}>
        <Container>
          <div className={styles.teamHeader}>
            <div>
              <span className={styles.eyebrow}>Наша команда</span>

              <h2>Викладачі, які надихають на результат</h2>
            </div>

            <p>
              Ми об&apos;єднали людей, які щиро люблять мову, навчання та
              підтримку. Наші викладачі допоможуть вам повірити у свої сили та
              впевнено рухатися до ваших цілей.
            </p>
          </div>

          <div className={styles.teacherList}>
            {/* Викладач 1 */}
            <article className={styles.teacher}>
              <div className={styles.teacherPhoto}>
                <Image
                  src="/images/about/teacher-1.jpg"
                  alt="Викладач шведської мови"
                  fill
                  sizes="(max-width: 992px) 100vw, 40vw"
                />
              </div>

              <div className={styles.teacherContent}>
                <span className={styles.quote}>“</span>

                <p className={styles.teacherQuote}>
                  Моя мета — зробити шведську зрозумілою, живою та цікавою. На
                  заняттях ми багато говоримо, сміємося та не боїмося помилок —
                  саме так народжується впевненість.
                </p>

                <div className={styles.teacherInfo}>
                  <h3>Марія Іваненко</h3>
                  <span>Викладач шведської мови</span>
                </div>
              </div>
            </article>

            {/* Викладач 2 */}
            <article className={styles.teacher}>
              <div className={styles.teacherPhoto}>
                <Image
                  src="/images/about/teacher-2.jpg"
                  alt="Викладач шведської мови"
                  fill
                  sizes="(max-width: 992px) 100vw, 40vw"
                />
              </div>

              <div className={styles.teacherContent}>
                <span className={styles.quote}>“</span>

                <p className={styles.teacherQuote}>
                  Я допомагаю студентам не лише вивчати мову, а й розуміти
                  шведську культуру та мислення. Це відкриває нові можливості у
                  спілкуванні та житті у Швеції.
                </p>

                <div className={styles.teacherInfo}>
                  <h3>Софія Нільсон</h3>
                  <span>Викладач шведської мови, носій мови</span>
                </div>
              </div>
            </article>

            {/* Викладач 3 */}
            <article className={styles.teacher}>
              <div className={styles.teacherPhoto}>
                <Image
                  src="/images/about/teacher-3.jpg"
                  alt="Викладач шведської мови"
                  fill
                  sizes="(max-width: 992px) 100vw, 40vw"
                />
              </div>

              <div className={styles.teacherContent}>
                <span className={styles.quote}>“</span>

                <p className={styles.teacherQuote}>
                  Я вірю, що навчання має бути теплим і надихаючим. Створюю
                  дружню атмосферу, де кожен може бути собою та сміливо
                  практикувати шведську.
                </p>

                <div className={styles.teacherInfo}>
                  <h3>Анастасія Ларссон</h3>
                  <span>Викладач шведської мови</span>
                </div>
              </div>
            </article>
          </div>

          {/* Уся команда */}
          <div className={styles.teamPhotoSection}>
            <div className={styles.teamPhotoContent}>
              <span className={styles.eyebrow}>Разом ми — сила</span>

              <h2>Наша команда</h2>

              <p>
                Ми підтримуємо одне одного, постійно розвиваємося та створюємо
                найкращі умови для вашого навчання.
              </p>

              <span className={styles.teamHeart}>♡</span>
            </div>

            <div className={styles.teamPhoto}>
              <Image
                src="/images/about/team.jpg"
                alt="Команда Learn Swedish"
                fill
                sizes="(max-width: 992px) 100vw, 60vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.motto}>
        <div className={styles.mottoLine}>
          <span className={styles.mottoText}>разом до нових висот</span>

          <span className={styles.mottoArrow}>➤</span>
        </div>
      </section>
    </main>
  );
}
