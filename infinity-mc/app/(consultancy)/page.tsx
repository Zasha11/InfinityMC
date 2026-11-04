import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Building2, FileCheck2, BriefcaseBusiness } from "lucide-react";
import { HeroSlideshow } from "@/components/home/hero-slideshow";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Infinity | Management Consultants",
  description:
    "Corporate secretarial and business consulting support in Malaysia.",
};

const services = [
  {
    icon: Building2,
    title: "Company Incorporation",
    description:
      "Start your business journey with guidance on setting up your company.",
  },
  {
    icon: FileCheck2,
    title: "Corporate Secretarial",
    description:
      "Keep your company records and statutory obligations organised.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Advisory",
    description: "Explore practical solutions for your next stage of growth.",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSlideshow />
      <section
        className={styles.section}
        id="services"
        aria-labelledby="services-heading"
      >
        <p className={styles.eyebrow}>HOW WE CAN HELP</p>

        <h2 id="services-heading">Support at every stage.</h2>

        <p className={styles.intro}>
          From your first steps to your next chapter, let’s move your business
          forward.
        </p>

        <div className={styles.services}>
          {services.map(({ icon: Icon, title, description }) => (
            <article className={styles.card} key={title}>
              <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.storePromo}`}
        aria-labelledby="store-heading"
      >
        <div>
          <p className={styles.eyebrow}>SOMETHING FOR YOUR EVERYDAY</p>
          <h2 id="store-heading">Good work starts with the little things.</h2>
          <p className={styles.intro}>
            Discover InfinityMall, our concept store for thoughtfully chosen
            desk and work essentials.
          </p>
          <Link href="/store" className={styles.storeLink}>
            Explore the store <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={styles.storeBrand} aria-hidden="true">
          <span>IM</span>
          <strong>InfinityMall</strong>
          <small>Objects for a considered workday.</small>
        </div>
      </section>
      <section
        className={`${styles.section} ${styles.location}`}
        id="location"
        aria-labelledby="location-heading"
      >
        <div>
          <p className={styles.eyebrow}>FIND US</p>
          <h2 id="location-heading">Let’s talk business.</h2>
          <p className={styles.intro}>
            Get in touch to arrange a conversation with our team.
          </p>
          <div className={styles.address}>
            <MapPin size={22} aria-hidden="true" />
            <div>
              <h3>Our office</h3>
              <p>Office address to be added.</p>
              <p>Visiting hours to be confirmed.</p>
            </div>
          </div>
        </div>
        <div
          className={styles.map}
          role="img"
          aria-label="Location placeholder. Office map will be added once the address is confirmed."
        >
          <div className={styles.mapLabel}>
            <MapPin size={32} aria-hidden="true" />
            <strong>Our location</strong>
            <span>Map coming soon</span>
          </div>
        </div>
      </section>
    </main>
  );
}
