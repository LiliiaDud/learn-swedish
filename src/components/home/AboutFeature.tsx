import styles from "./AboutSection.module.scss";

type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function AboutFeature({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>
        <Icon size={20} />
      </div>

      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
