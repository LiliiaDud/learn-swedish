import Link from "next/link";
import styles from "./CourseFormats.module.scss";

type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
};

export default function CourseCard({
  title,
  description,
  icon: Icon,
  href,
}: Props) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.icon}>
        <Icon size={30} strokeWidth={1.8} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </Link>
  );
}
