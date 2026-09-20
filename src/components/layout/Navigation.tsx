"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={styles.nav}>
      <Link href="/">Головна</Link>

      <div
        className={styles.dropdown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          type="button"
          className={styles.trigger}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Курси
          <ChevronDown size={16} />
        </button>

        <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
          <Link href="/courses/adults">A1–B2 для дорослих</Link>
          <Link href="/courses/individual">Індивідуальні заняття</Link>
          <Link href="/courses/kids">Діти та підлітки</Link>
          <Link href="/courses/conversation">Розмовні курси</Link>
          <Link href="/courses/fika">Fika клуб</Link>
          <Link href="/courses/exam">Підготовка до іспитів</Link>
          <Link href="/courses/book-club">Bookclub</Link>
          <Link href="/courses/lordagsstudier">Lördagsstudier</Link>
        </div>
      </div>

      <Link href="/about">Про нас</Link>

      <Link href="/blog">Блог</Link>

      <Link href="/contacts">Контакти</Link>
    </nav>
  );
}
