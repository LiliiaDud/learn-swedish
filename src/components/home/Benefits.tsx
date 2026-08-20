import Container from "../shared/Container";
import BenefitCard from "./BenefitCard";
import { benefits } from "@/data/benefits";

import styles from "./Benefits.module.scss";

export default function Benefits() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <span>Наш підхід</span>

          <h2>Твій впевнений старт у Швеції з Learn Swedish</h2>

          <p>
            Ми створили простір для тих, хто хоче впевнено говорити шведською та
            відчувати себе частиною суспільства. Наші студенти отримують
            підтримку та мотивацію, щоб досягти своїх цілей у вивченні мови.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((item) => (
            <BenefitCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
