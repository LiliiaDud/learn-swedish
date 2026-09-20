"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "../shared/Container";
import Navigation from "./Navigation";
import styles from "./Header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsCoursesOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${
        isHome && !isScrolled ? styles.transparent : styles.solid
      }`}
    >
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
          <div className={styles.desktopNav}>
            <Navigation />
          </div>

          {/* Right side */}
          <div className={styles.actions}>
            <button className={styles.cta}>Пройти тест</button>

            <button className={styles.lang}>UA</button>

            <button
              className={styles.burger}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Відкрити меню"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet menu */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/" onClick={closeMobileMenu}>
              Головна
            </Link>

            {/* Courses dropdown */}
            <div className={styles.mobileCourses}>
              <button
                type="button"
                className={styles.mobileCoursesTrigger}
                onClick={() => setIsCoursesOpen((prev) => !prev)}
              >
                <span>Курси</span>

                <ChevronDown
                  size={20}
                  className={isCoursesOpen ? styles.chevronOpen : ""}
                />
              </button>

              {isCoursesOpen && (
                <div className={styles.mobileCoursesMenu}>
                  <Link href="/courses/adults" onClick={closeMobileMenu}>
                    Курси для дорослих
                  </Link>

                  <Link href="/courses/kids" onClick={closeMobileMenu}>
                    Для дітей та підлітків
                  </Link>

                  <Link href="/courses/individual" onClick={closeMobileMenu}>
                    Індивідуальні заняття
                  </Link>

                  <Link href="/courses/conversation" onClick={closeMobileMenu}>
                    Розмовні курси
                  </Link>

                  <Link href="/courses/exam" onClick={closeMobileMenu}>
                    Підготовка до іспитів
                  </Link>

                  <Link href="/courses/fika" onClick={closeMobileMenu}>
                    Fika клуб
                  </Link>

                  <Link href="/courses/book-club" onClick={closeMobileMenu}>
                    Bookclub
                  </Link>

                  <Link
                    href="/courses/lordagsstudier"
                    onClick={closeMobileMenu}
                  >
                    Lördagsstudier
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" onClick={closeMobileMenu}>
              Про нас
            </Link>

            <Link href="/blog" onClick={closeMobileMenu}>
              Блог
            </Link>

            <Link href="/contacts" onClick={closeMobileMenu}>
              Контакти
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}
