import Container from "@/components/shared/Container";

import type { Course } from "@/data/courses";

import styles from "./CourseDetails.module.scss";

type CourseDetailsProps = {
  course: Course;
};

export default function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <>
      <section className={styles.about}>
        <Container>
          <div className={styles.grid}>
            <div>
              <span className={styles.eyebrow}>Про курс</span>

              <h2 className={styles.title}>Вивчайте шведську впевнено</h2>
              <p>{course.about}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.audience}>
        <Container>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Для кого</span>

            <h2 className={styles.title}>Цей курс для вас, якщо...</h2>

            <p>{course.audience}</p>
          </div>
        </Container>
      </section>

      <section className={styles.program}>
        <Container>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Програма</span>

            <h2>Що будемо вивчати</h2>

            <ul>
              {course.program.map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className={styles.info}>
        <Container>
          <div className={styles.infoGrid}>
            <div>
              <span className={styles.eyebrow}>Формат</span>

              <h3>{course.format}</h3>
            </div>

            <div>
              <span className={styles.eyebrow}>Розклад</span>

              <h3>{course.schedule}</h3>
            </div>

            {course.price && (
              <div>
                <span className={styles.eyebrow}>Вартість</span>

                <h3>{course.price}</h3>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
