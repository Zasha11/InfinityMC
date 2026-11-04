"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import styles from "./navbar.module.css";

const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Corporate Secretarial",
    href: "/services/corporate-secretarial",
    children: [
      {
        label: "Register your Business",
        href: "/services/corporate-secretarial/register-business",
      },
      {
        label: "Incorporate your Company",
        href: "/services/corporate-secretarial/incorporate-company",
      },
      {
        label: "Restructure your Company",
        href: "/services/corporate-secretarial/restructure-company",
      },
      {
        label: "Start a Franchise Business",
        href: "/services/corporate-secretarial/franchise-business",
      },
      {
        label: "Dissolve a Business",
        href: "/services/corporate-secretarial/dissolve-business",
      },
      {
        label: "Search Other Company",
        href: "/services/corporate-secretarial/company-search",
      },
    ],
  },
  {
    label: "Accounts & Taxation",
    href: "/services/accounts-taxation",
    children: [
      {
        label: "Update your Accounts",
        href: "/services/accounts-taxation/update-accounts",
      },
      {
        label: "Submit your Tax Return",
        href: "/services/accounts-taxation/tax-return",
      },
      {
        label: "Set an Accounting System",
        href: "/services/accounts-taxation/accounting-system",
      },
      {
        label: "Set a Stock Control System",
        href: "/services/accounts-taxation/stock-control",
      },
    ],
  },
  {
    label: "Intellectual Property",
    href: "/services/intellectual-property",
    children: [
      {
        label: "Design your Logo",
        href: "/services/intellectual-property/logo-design",
      },
      {
        label: "Register your Trademark",
        href: "/services/intellectual-property/trademark",
      },
      {
        label: "Register your Copyright",
        href: "/services/intellectual-property/copyright",
      },
      {
        label: "Register your Patent & Others",
        href: "/services/intellectual-property/patent",
      },
      {
        label: "Prepare to be Franchisor",
        href: "/services/intellectual-property/franchisor",
      },
    ],
  },
  {
    label: "Loan & Licensing",
    href: "/services/loan-licensing",
    children: [
      {
        label: "Get a Company Loan",
        href: "/services/loan-licensing/company-loan",
      },
      { label: "Get a SME Grant", href: "/services/loan-licensing/sme-grant" },
      {
        label: "Business Licenses",
        href: "/services/loan-licensing/business-licenses",
      },
      {
        label: "Government Registration",
        href: "/services/loan-licensing/government-registration",
      },
    ],
  },
  {
    label: "International Services",
    href: "/services/international",
    children: [
      {
        label: "Doing Business in Malaysia",
        href: "/services/international/doing-business-malaysia",
      },
      {
        label: "Register a Malaysia Company",
        href: "/services/international/malaysia-company",
      },
      {
        label: "Register a Foreign Branch",
        href: "/services/international/foreign-branch",
      },
      {
        label: "Manufacturing in Sarawak",
        href: "/services/international/manufacturing-sarawak",
      },
      {
        label: "SCORE Investments",
        href: "/services/international/score-investments",
      },
      {
        label: "Malaysia My 2nd Home",
        href: "/services/international/malaysia-my-second-home",
      },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function dismiss(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      headerRef.current?.querySelectorAll("details[open]").forEach((item) => {
        item.removeAttribute("open");
        item.querySelector("summary")?.focus();
      });
      if (open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [open]);

  function closeMenus() {
    setOpen(false);
    headerRef.current
      ?.querySelectorAll("details[open]")
      .forEach((item) => item.removeAttribute("open"));
  }

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        <Link
          href="/"
          className={styles.brand}
          onClick={closeMenus}
          aria-label="Infinity Management Consultants home"
        >
          <span className={styles.mark} aria-hidden="true">
            ∞
          </span>
          <span className={styles.wordmark}>
            INFINITY<span>Management Consultants</span>
          </span>
        </Link>

        <div className={styles.contact}>
          <span className={styles.language}>EN</span>
          <span className={styles.contactItem}>
            <Phone size={15} aria-hidden="true" />
            +60 82-XXX XXX
          </span>
          <a
            className={styles.contactItem}
            href="mailto:info@imconsultants.com.my"
          >
            <Mail size={16} aria-hidden="true" />
            info@imconsultants.com.my
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${styles.navigation} ${open ? styles.isOpen : ""}`}
        >
          <ul className={styles.links}>
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  {item.children ? (
                    <details className={styles.dropdown} name="navbar-service">
                      <summary
                        className={`${styles.navLink} ${active ? styles.active : ""}`}
                      >
                        {item.label}
                        <ChevronDown size={13} aria-hidden="true" />
                      </summary>
                      <ul className={styles.submenu}>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} onClick={closeMenus}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`${styles.navLink} ${active ? styles.active : ""}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link href="/contact" className={styles.enquire} onClick={closeMenus}>
            Enquire Now
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
