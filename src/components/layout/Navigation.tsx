"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/">Головна</Link>

      <div
        className={styles.dropdown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className={styles.trigger}>
          Курси
          <ChevronDown size={16} />
        </button>

        {isOpen && (
          <div className={styles.menu}>
            <Link href="/courses/adults">A1–B2 для дорослих</Link>
            <Link href="/courses/kids">Діти та підлітки</Link>
            <Link href="/courses/fika">Fika клуб</Link>
            <Link href="/courses/bokklubb">Bokklubb</Link>
            <Link href="/courses/saturday">Lördagsstudier</Link>
            <Link href="/courses/test">Тест рівня</Link>
          </div>
        )}
      </div>

      <Link href="/about">Про нас</Link>
      <Link href="/blog">Блог</Link>
      <Link href="/contacts">Контакти</Link>
    </nav>
  );
}
