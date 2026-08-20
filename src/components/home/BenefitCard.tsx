import styles from "./Benefits.module.scss";

type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function BenefitCard({ title, description, icon: Icon }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        <Icon size={28} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}
