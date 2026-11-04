import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import styles from "./footer.module.css";

const services = [
  "Branding & Franchising",
  "Factory Setting-Up",
  "Financing",
  "Business English Training / Study Tour",
  "Incorporating Offshore Company",
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.invitation}>
          <div>
            <p className={styles.eyebrow}>LET’S MOVE FORWARD, TOGETHER</p>
            <h2>Your next chapter starts with a conversation.</h2>
          </div>
          <a href="mailto:sec.imc@gmail.com" className={styles.enquire}>
            Let’s talk <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.columns}>
          <div className={styles.brandColumn}>
            <Link
              href="/"
              className={styles.brand}
              aria-label="Infinity Management Consultants home"
            >
              <span className={styles.mark} aria-hidden="true">
                ∞
              </span>
              <span>
                INFINITY<small>Management Consultants</small>
              </span>
            </Link>
            <p className={styles.description}>
              Practical guidance. Lasting partnerships. Supporting your business
              from its first steps to its next stage of growth.
            </p>
            <a className={styles.email} href="mailto:sec.imc@gmail.com">
              <Mail size={16} aria-hidden="true" />
              sec.imc@gmail.com
            </a>
          </div>

          <nav className={styles.services} aria-label="Footer services">
            <h3>Business solutions</h3>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <Link href="/#services">
                    {service}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.offices}>
            <h3>Where to find us</h3>
            <div className={styles.office}>
              <MapPin size={18} aria-hidden="true" />
              <div>
                <h4>Principal office · Kuching</h4>
                <address>
                  3rd Floor, Sublot 31, Lot 1303, Block 16 KCLD,
                  <br />
                  Gala City, Jalan Tun Jugah,
                  <br />
                  93350 Kuching, Sarawak, Malaysia
                </address>
              </div>
            </div>
            <div className={styles.office}>
              <MapPin size={18} aria-hidden="true" />
              <div>
                <h4>International office · Kuala Lumpur</h4>
                <address>
                  Level 23, NU Tower 2, Jalan Tun Sambanthan,
                  <br />
                  KL Sentral, 50470 Kuala Lumpur, Malaysia
                </address>
              </div>
            </div>
            <a className={styles.phone} href="tel:+6082265936">
              <Phone size={15} aria-hidden="true" />
              +60 82-265 936
            </a>
            <a className={styles.phone} href="tel:+6082428188">
              +60 82-428 188
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Infinity Management Consultants. All rights reserved.</p>
          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/resources">News & resources</Link>
            <a href="mailto:sec.imc@gmail.com">
              Contact us <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
