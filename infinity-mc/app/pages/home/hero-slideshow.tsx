"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Building2 } from "lucide-react";
import styles from "./hero-slideshow.module.css";

const slides = [
  {
    eyebrow: "YOUR TRUSTED BUSINESS PARTNER",
    title: "A strong foundation. A brighter future.",
    description:
      "Corporate secretarial and business consulting support to help you start, manage and grow your business in Malaysia.",
    caption: "Built on trust. Focused on your future.",
  },
  {
    eyebrow: "START WITH CONFIDENCE",
    title: "Your next chapter starts here.",
    description:
      "Turn your business ambitions into a clear plan, with guidance on company incorporation and the steps that follow.",
    caption: "New beginnings. Lasting possibilities.",
  },
  {
    eyebrow: "GROW WITH CLARITY",
    title: "More focus on what comes next.",
    description:
      "Make room for growth with practical advisory and support for your company’s ongoing statutory obligations.",
    caption: "Practical guidance. A clear way forward.",
  },
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden)
        setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className={styles.hero}
      aria-label="Introduction slideshow"
      aria-roledescription="carousel"
    >
      <div className={styles.track} aria-live="off">
        {slides.map((slide, slideIndex) => {
          const active = slideIndex === index;
          const previous =
            slideIndex === (index + slides.length - 1) % slides.length;
          return (
            <div
              key={slide.eyebrow}
              className={[
                styles.panel,
                active ? styles.active : previous ? styles.previous : "",
              ].join(" ")}
              aria-hidden={!active}
              inert={!active}
            >
              <div className={styles.inner}>
                <div className={styles.copy}>
                  <p className={styles.eyebrow}>{slide.eyebrow}</p>
                  <h1>{slide.title}</h1>
                  <p className={styles.description}>{slide.description}</p>
                </div>
                <div className={styles.actions}>
                  <a href="#services" className={styles.primary}>
                    Explore our services{" "}
                    <ArrowRight size={19} aria-hidden="true" />
                  </a>
                  <a href="#location" className={styles.secondary}>
                    Find our office
                  </a>
                </div>
                <div
                  className={[styles.visual, styles["slide" + slideIndex]].join(
                    " ",
                  )}
                  aria-hidden="true"
                >
                  <div className={styles.orbit} />
                  <Building2 className={styles.building} strokeWidth={0.6} />
                  <span className={styles.visualCaption}>{slide.caption}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
