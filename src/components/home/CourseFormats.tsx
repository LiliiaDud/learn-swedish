import Container from "../shared/Container";
import CourseCard from "./CourseCard";

import { courseFormats } from "@/data/courseFormats";

import styles from "./CourseFormats.module.scss";

export default function CourseFormats() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <span>Формати навчання</span>

          <h2>Оберіть формат навчання</h2>

          <p>
            Онлайн, офлайн, мовні зустрічі та читацький клуб — знайдіть формат,
            який підходить саме вам.
          </p>
        </div>

        <div className={styles.grid}>
          {courseFormats.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              icon={course.icon}
              href={course.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
