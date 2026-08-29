import Container from "@/components/shared/Container";
import CoursesList from "@/components/courses/CoursesList";
import styles from "./courses.module.scss";

export default function CoursesPage() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>Курси шведської</h1>

            <p className={styles.description}>
              Оберіть формат навчання, який підходить саме вам. Від перших
              кроків у шведській до впевненої розмовної мови.
            </p>
          </div>
        </Container>
      </section>

      <CoursesList />
    </main>
  );
}
