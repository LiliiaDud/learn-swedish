import Link from "next/link";
import Container from "@/components/shared/Container";
import styles from "./page.module.scss";

export default function BookClubPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true" />

        <div className={styles.heroOverlay} />

        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Learn Swedish · Book Club</span>

            <h1>
              Книжковий клуб
              <br />
              «Lätt Läsning»
            </h1>

            <p>
              Читаємо, обговорюємо текст та розмовляємо шведською мовою разом.
            </p>
          </div>
        </Container>
      </section>
      {/* <section className={styles.intro}>
        <Container>
          <div className={styles.introContent}>
            <span className={styles.eyebrow}>Learn Swedish · Book Club</span>

            <h1>
              Читаємо разом,
              <br />
              говоримо вільно
            </h1>
          </div>
        </Container>
      </section> */}
      <section className={styles.meetings}>
        <Container>
          <div className={styles.meetingsHeader}>
            <span className={styles.eyebrow}>Як проходять зустрічі</span>

            <h2>Активно читаємо, обговорюємо текст та розмовляємо</h2>
          </div>

          <div className={styles.meetingsList}>
            <article className={styles.meetingsItem}>
              <span className={styles.meetingsNumber}>01</span>

              <div>
                <h3>Обираємо книгу</h3>
                <p>
                  Разом обираємо книги шведською мовою, які цікаво читати та
                  обговорювати на зустрічах.
                </p>
              </div>

              <span className={styles.meetingsIcon}>↗</span>
            </article>

            <article className={styles.meetingsItem}>
              <span className={styles.meetingsNumber}>02</span>

              <div>
                <h3>Читаємо та готуємося</h3>
                <p>
                  Читаємо книгу у своєму темпі, звертаємо увагу на нові слова,
                  вирази та цікаві мовні моменти.
                </p>
              </div>

              <span className={styles.meetingsIcon}>♡</span>
            </article>

            <article className={styles.meetingsItem}>
              <span className={styles.meetingsNumber}>03</span>

              <div>
                <h3>Обговорюємо разом</h3>
                <p>
                  Ділимося враженнями, обговорюємо героїв, сюжет та власні думки
                  шведською мовою.
                </p>
              </div>

              <span className={styles.meetingsIcon}>✦</span>
            </article>

            <article className={styles.meetingsItem}>
              <span className={styles.meetingsNumber}>04</span>

              <div>
                <h3>Практикуємо шведську</h3>
                <p>
                  Вчимося висловлювати свою думку, підтримувати розмову та
                  використовувати нову лексику в живому спілкуванні.
                </p>
              </div>

              <span className={styles.meetingsIcon}>→</span>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.benefits}>
        <Container>
          <div className={styles.benefitsHeader}>
            <span className={styles.eyebrow}>Що дає читацький клуб</span>

            <h2>Книга стає приводом говорити</h2>

            <p>
              Читаємо не лише для того, щоб краще розуміти текст. Ми
              використовуємо книги як можливість практикувати шведську,
              розширювати словниковий запас та знаходити нові теми для розмов.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <article className={styles.benefitCard}>
              <h3>Більше шведської</h3>

              <p>
                Регулярно читаємо та спілкуємося шведською, поступово звикаючи
                до живої мови.
              </p>
            </article>

            <article className={styles.benefitCard}>
              <h3>Нові слова та вирази</h3>

              <p>
                Збагачуємо словниковий запас та дізнаємося, як використовувати
                нову лексику у розмові.
              </p>
            </article>

            <article className={styles.benefitCard}>
              <h3>Впевненість у спілкуванні</h3>

              <p>
                Вчимося висловлювати власну думку, ставити запитання та
                підтримувати розмову шведською.
              </p>
            </article>
          </div>
        </Container>
      </section>
      {/* Format & price */}
      <section className={styles.pricing}>
        <Container>
          <div className={styles.pricingHeader}>
            <span className={styles.eyebrow}>Формат і вартість</span>

            <h2>
              Оберіть свій
              <br />
              формат участі
            </h2>

            <p>
              Зустрічайтеся з учасниками свого рівня, читайте цікаві тексти та
              практикуйте шведську у живому спілкуванні.
            </p>
          </div>

          {/* Groups */}
          <div className={styles.groups}>
            <article className={styles.groupCard}>
              <div className={styles.groupTop}>
                <span className={styles.groupLabel}>Для початківців</span>
                <span className={styles.groupTime}>П'ятниця · 20:00</span>
              </div>

              <h3>Група для початківців</h3>

              <ul className={styles.groupList}>
                <li>Читаємо текст уголос по черзі.</li>
                <li>Вчимося правильної вимови.</li>
                <li>Перекладаємо та розбираємо нові слова.</li>
                <li>Розбираємо всі питання, які виникають у процесі.</li>
              </ul>
            </article>

            <article className={styles.groupCard}>
              <div className={styles.groupTop}>
                <span className={styles.groupLabel}>Для просунутих</span>
                <span className={styles.groupTime}>Субота · 20:00</span>
              </div>

              <h3>Група просунутого рівня</h3>

              <ul className={styles.groupList}>
                <li>Читаємо запропоновані тексти самостійно заздалегідь.</li>
                <li>Багато живого спілкування та обговорення шведською.</li>
                <li>Вчимося переказувати зміст.</li>
                <li>Тренуємо лексику в цікавій ігровій формі.</li>
              </ul>
            </article>
          </div>

          {/* Packages */}
          <div className={styles.packagesTitle}>
            <span className={styles.eyebrow}>Пакети участі</span>
          </div>
          <div className={styles.packages}>
            {/* Standard */}
            <article className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <span className={styles.packageName}>Standard</span>

                <div className={styles.price}>
                  <strong>750</strong>
                  <span>SEK / місяць</span>
                </div>

                <p className={styles.studentPrice}>
                  Для учнів нашої студії — <strong>500 SEK</strong>
                </p>
              </div>

              <div className={styles.packageDivider} />

              <p className={styles.packageIntro}>
                Базовий формат для регулярної практики шведської у групі свого
                рівня.
              </p>

              <ul className={styles.packageList}>
                <li>4 заняття на місяць</li>
                <li>90 хвилин кожне заняття</li>
                <li>Група свого рівня</li>
                <li>Активна розмовна практика</li>
                <li>Інтерактивні вправи</li>
              </ul>
            </article>

            {/* Premium */}
            <article className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <span className={styles.packageName}>Premium</span>

                <div className={styles.price}>
                  <strong>890</strong>
                  <span>SEK / місяць</span>
                </div>

                <p className={styles.studentPrice}>
                  Для учнів нашої студії — <strong>640 SEK</strong>
                </p>
              </div>

              <div className={styles.packageDivider} />

              <p className={styles.packageIntro}>
                Розширений формат для тих, хто хоче більше граматики, лексики та
                практики.
              </p>

              <p className={styles.packageIncluded}>
                Усе зі Standard, а також:
              </p>

              <ul className={styles.packageList}>
                <li>Детальний розбір граматики на кожному уроці</li>
                <li>
                  Окремі файли з поясненнями граматичних конструкцій із тексту
                </li>
                <li>Наочні картки з лексикою</li>
                <li>
                  Можливість відвідувати обидві групи — початківців і просунутих
                </li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            {/* <span className={styles.eyebrow}>Learn Swedish · Book Club</span> */}

            <h2>
              Приєднуйтеся
              <br />
              до книжкового клубу
            </h2>

            <p>
              Читайте цікаві тексти, практикуйте шведську та спілкуйтеся з
              іншими учасниками клубу.
            </p>

            <Link
              href="/contacts?course=book-club"
              className={styles.ctaButton}
            >
              Приєднатися до книжкового клубу
              <span>→</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
