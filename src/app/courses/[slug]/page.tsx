import Container from "@/components/shared/Container";
import CourseDetails from "@/components/courses/CourseDetails";

import { courses } from "@/data/courses";

import styles from "./course.module.scss";

type CoursePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;

  const course = courses.find((course) => course.id === slug);

  if (!course) {
    return (
      <main className={styles.page}>
        <section className={styles.hero}>
          <Container>
            <div className={styles.content}>
              <h1 className={styles.title}>Курс не знайдено</h1>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.content}>
            {course.level && (
              <span className={styles.level}>{course.level}</span>
            )}

            <h1 className={styles.title}>{course.title}</h1>

            <p className={styles.description}>{course.description}</p>
          </div>
        </Container>
      </section>
      <CourseDetails course={course} />
    </main>
  );
}
