import Image from "next/image";
import Link from "next/link";

import styles from "./EventsSection.module.scss";

type Props = {
  category: string;
  title: string;
  date: string;
  image: string;
  href: string;
  featured?: boolean;
};

export default function EventCard({
  category,
  title,
  date,
  image,
  href,
  featured = false,
}: Props) {
  return (
    <Link
      href={href}
      className={`${styles.card} ${featured ? styles.featured : ""}`}
    >
      <Image src={image} alt={title} fill className={styles.image} />

      <div className={styles.overlay} />

      <div className={styles.info}>
        <span className={styles.badge}>{category}</span>

        <h3>{title}</h3>

        <p>{date}</p>
      </div>
    </Link>
  );
}
