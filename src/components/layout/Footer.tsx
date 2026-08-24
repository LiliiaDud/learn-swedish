import Link from "next/link";
import Container from "../shared/Container";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Logo */}

          <div>
            <Link href="/" className={styles.logo}>
              Learn Swedish
            </Link>

            <p className={styles.slogan}>
              Мова відкриває можливості. Курси шведської для українців у Швеції.
            </p>
          </div>

          {/* Contacts */}

          <div>
            <h4>Контакти</h4>

            <ul>
              <li>+46 70 123 45 67</li>
              <li>hello@learnswedish.se</li>
              <li>Stockholm, Sweden</li>
            </ul>
          </div>

          {/* Menu */}

          <div>
            <h4>Меню</h4>

            <ul>
              <li>
                <Link href="/">Головна</Link>
              </li>
              <li>
                <Link href="/courses">Курси</Link>
              </li>
              <li>
                <Link href="/about">Про нас</Link>
              </li>
              <li>
                <Link href="/blog">Блог</Link>
              </li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h4>Соцмережі</h4>

            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>

              <a href="#" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>

              <a href="#" aria-label="Telegram">
                <FaTelegramPlane size={18} />
              </a>

              <a href="#" aria-label="YouTube">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Learn Swedish</p>

          <Link href="/privacy">Integritetspolicy</Link>
        </div>
      </Container>
    </footer>
  );
}
