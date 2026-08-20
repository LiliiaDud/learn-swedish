"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

import Container from "../shared/Container";
import styles from "./Hero.module.scss";

const slides = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4500 }}
        loop
        className={styles.slider}
      >
        {slides.map((image) => (
          <SwiperSlide key={image}>
            <div className={styles.slide}>
              <Image
                src={image}
                alt="Learn Swedish"
                fill
                priority
                className={styles.image}
              />

              <div className={styles.overlay} />

              <Container>
                <div className={styles.content}>
                  <h1 className={styles.title}>
                    Вивчайте шведську легко,
                    <br />
                    із задоволенням
                    <br />
                    та підтримкою
                  </h1>

                  <p className={styles.text}>
                    Курси шведської мови для українців у Швеції. Онлайн, офлайн,
                    мовні клуби та тепла спільнота.
                  </p>

                  <Link href="/courses" className={styles.button}>
                    Обрати свій курс
                  </Link>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
