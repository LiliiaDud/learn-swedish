import Container from "../shared/Container";
import EventCard from "./EventCard";

import { events } from "@/data/events";

import styles from "./EventsSection.module.scss";
import Link from "next/dist/client/link";

export default function EventsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <span>Події • Блог</span>

          <h2>Життя спільноти</h2>

          <p>
            Fika, книжкові клуби, шведські свята та корисні статті для життя у
            Швеції.
          </p>
        </div>

        <div className={styles.grid}>
          {events.map((event) => (
            <EventCard
              key={event.id}
              category={event.category}
              title={event.title}
              date={event.date}
              image={event.image}
              href={event.href}
              featured={event.featured}
            />
          ))}
        </div>

        <Link href="/blog" className={styles.link}>
          Переглянути всі →
        </Link>
      </Container>
    </section>
  );
}
