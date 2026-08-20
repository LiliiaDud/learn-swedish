"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "../shared/Container";
import styles from "./Header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>🦋</div>

            <div>
              <h3>Learn Swedish</h3>
              <span>Мова відкриває можливості</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <Link href="/">Головна</Link>

            <button className={styles.dropdown}>
              Курси
              <ChevronDown size={16} />
            </button>

            <Link href="/about">Про нас</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/contacts">Контакти</Link>
          </nav>

          {/* Right side */}
          <div className={styles.actions}>
            <button className={styles.cta}>Пройти тест</button>

            <button className={styles.lang}>UA</button>

            <button
              className={styles.burger}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/">Головна</Link>
            <Link href="/courses">Курси</Link>
            <Link href="/about">Про нас</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/contacts">Контакти</Link>

            <button className={styles.mobileButton}>Пройти тест</button>
          </div>
        )}
      </Container>
    </header>
  );
}
