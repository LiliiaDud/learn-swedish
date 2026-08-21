import Image from "next/image";

import Container from "../shared/Container";
import AboutFeature from "./AboutFeature";
import { aboutFeatures } from "@/data/aboutFeatures";

import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {/* LEFT */}

          <div className={styles.imageWrapper}>
            <Image
              src="/images/about/classroom.jpg"
              alt="Студенти Learn Swedish"
              fill
              className={styles.image}
            />
          </div>

          {/* RIGHT */}

          <div className={styles.content}>
            <span className={styles.label}>Про курси</span>

            <h2>Шведська мова для життя у Швеції</h2>

            <p className={styles.text}>
              Ми створили курси для українців, які живуть або планують жити у
              Швеції. Наша мета — допомогти вам вільно спілкуватися та
              почуватися впевнено у новому середовищі.
            </p>

            <div className={styles.features}>
              {aboutFeatures.map((item) => (
                <AboutFeature
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
