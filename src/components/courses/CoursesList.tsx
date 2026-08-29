import Container from "@/components/shared/Container";

import { courses } from "@/data/courses";

import CourseCard from "./CourseCard";

import styles from "./CoursesList.module.scss";

export default function CoursesList() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <span>Наші програми</span>

          <h2>Оберіть свій формат</h2>

          <p>
            Навчайтеся у своєму темпі, обирайте формат, який відповідає вашим
            цілям та способу життя.
          </p>
        </div>

        <div className={styles.grid}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
