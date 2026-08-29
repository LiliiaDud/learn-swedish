import Link from "next/link";

import type { Course } from "@/data/courses";

import styles from "./CourseCard.module.scss";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={course.href} className={styles.card}>
      <div className={styles.icon}>{course.icon}</div>

      <div className={styles.content}>
        <div>
          {course.level && <span className={styles.level}>{course.level}</span>}

          <h3>{course.title}</h3>

          <p>{course.description}</p>
        </div>

        <span className={styles.link}>Детальніше →</span>
      </div>
    </Link>
  );
}
