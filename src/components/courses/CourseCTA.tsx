import Link from "next/link";
import Container from "@/components/shared/Container";
import type { Course } from "@/data/courses";
import styles from "./CourseCTA.module.scss";

type CourseCTAProps = {
  course: Course;
};

export default function CourseCTA({ course }: CourseCTAProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div>
            <span className={styles.eyebrow}>Готові почати?</span>

            <h2>Вивчайте шведську разом з нами</h2>

            <p>Залиште заявку, і ми допоможемо підібрати формат навчання.</p>
          </div>

          <Link
            href={`/contacts?course=${course.id}`}
            className={styles.button}
          >
            Хочу навчатися
          </Link>
        </div>
      </Container>
    </section>
  );
}
