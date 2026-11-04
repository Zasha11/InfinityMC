"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Plus,
  Minus,
  X,
  BookOpen,
  Pencil,
  Coffee,
  BriefcaseBusiness,
} from "lucide-react";
import styles from "./storefront.module.css";

const products = [
  {
    id: "notebook",
    name: "The Everyday Notebook",
    category: "Stationery",
    price: 38,
    color: "cream",
    icon: BookOpen,
    detail: "A5 · Dotted pages",
    badge: "Bestseller",
  },
  {
    id: "pen",
    name: "The Studio Pen",
    category: "Stationery",
    price: 24,
    color: "sand",
    icon: Pencil,
    detail: "Matte finish · Black ink",
    badge: "",
  },
  {
    id: "mug",
    name: "The Morning Mug",
    category: "Desk essentials",
    price: 58,
    color: "clay",
    icon: Coffee,
    detail: "Ceramic · 350 ml",
    badge: "New arrival",
  },
  {
    id: "folio",
    name: "The Workday Folio",
    category: "Accessories",
    price: 89,
    color: "stone",
    icon: BriefcaseBusiness,
    detail: "A4 · Everyday organiser",
    badge: "",
  },
];
const categories = [
  "All products",
  "Stationery",
  "Desk essentials",
  "Accessories",
];
const money = (value: number) => `RM ${value.toFixed(2)}`;

export function Storefront() {
  const [category, setCategory] = useState("All products");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [message, setMessage] = useState("");
  const count = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0,
  );
  const total = products.reduce(
    (sum, product) => sum + product.price * (cart[product.id] || 0),
    0,
  );

  function add(id: string, name: string) {
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
    setMessage(`${name} added to your bag.`);
  }

  return (
    <div className={styles.store}>
      <div className={styles.announcement}>
        A little more intention. A better everyday.{" "}
        <span>Concept store · Demo products</span>
      </div>
      <header className={styles.header}>
        <Link
          href="/store"
          className={styles.brand}
          aria-label="InfinityMall store home"
        >
          <span className={styles.monogram}>IM</span>
          <span>
            InfinityMall<small>BY INFINITY</small>
          </span>
        </Link>
        <nav aria-label="Store navigation">
          <a href="#collection">Shop collection</a>
          <a href="#story">Our story</a>
          <Link href="/" className={styles.back}>
            <ArrowLeft size={14} aria-hidden="true" /> Back to homepage
          </Link>
        </nav>
        <button
          type="button"
          className={styles.bag}
          aria-expanded={cartOpen}
          aria-controls="store-bag"
          onClick={() => setCartOpen(!cartOpen)}
        >
          <ShoppingBag size={19} aria-hidden="true" />
          Bag <span>{count}</span>
        </button>
      </header>
      <main>
        <section className={styles.hero} aria-labelledby="store-heading">
          <div>
            <p className={styles.eyebrow}>THE EVERYDAY COLLECTION / 01</p>
            <h1 id="store-heading">
              Make space
              <br />
              for good work.
            </h1>
            <p>
              Thoughtfully chosen essentials for your desk, your ideas, and
              everything in between.
            </p>
            <a className={styles.shopLink} href="#collection">
              Discover the collection{" "}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <span className={styles.heroNote}>
              Simple objects. A lasting place in your day.
            </span>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.circle} />
            <div className={styles.notebook}>
              <span>
                NOTES
                <br />
                &amp; IDEAS
              </span>
              <small>InfinityMall</small>
            </div>
            <div className={styles.pen} />
            <div className={styles.artCaption}>
              A fresh page.
              <br />
              <em>A world of possibility.</em>
            </div>
          </div>
        </section>
        <section
          id="collection"
          className={styles.collection}
          aria-labelledby="collection-heading"
        >
          <div className={styles.collectionHeading}>
            <div>
              <p className={styles.eyebrow}>LESS, BUT BETTER</p>
              <h2 id="collection-heading">Find your everyday favourites.</h2>
            </div>
            <span>{products.length} considered essentials</span>
          </div>
          <div className={styles.filters} aria-label="Filter products">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={styles.products}>
            {products
              .filter(
                (product) =>
                  category === "All products" || product.category === category,
              )
              .map((product) => {
                const Icon = product.icon;
                return (
                  <article className={styles.product} key={product.id}>
                    <div
                      className={`${styles.productArt} ${styles[product.color]}`}
                    >
                      {product.badge && (
                        <span className={styles.badge}>{product.badge}</span>
                      )}
                      <Icon size={100} strokeWidth={0.8} aria-hidden="true" />
                      <span className={styles.artLabel}>InfinityMall</span>
                    </div>
                    <div className={styles.productInfo}>
                      <h3>{product.name}</h3>
                      <span>{money(product.price)}</span>
                    </div>
                    <p>{product.detail}</p>
                    <button
                      className={styles.add}
                      type="button"
                      onClick={() => add(product.id, product.name)}
                    >
                      Add to bag <Plus size={16} aria-hidden="true" />
                    </button>
                  </article>
                );
              })}
          </div>
          <p className={styles.status} role="status">
            {message ||
              "Browse our sample collection. No real orders or payments are processed."}
          </p>
        </section>
        <section id="story" className={styles.story}>
          <p className={styles.eyebrow}>OUR POINT OF VIEW</p>
          <h2>Good things don’t need to be complicated.</h2>
          <p>
            InfinityMall brings the Infinity approach to everyday shopping:
            useful essentials, thoughtful details, and a focus on your working
            day. This is a mock collection; products and prices are
            illustrative.
          </p>
        </section>
        <section
          id="store-bag"
          className={styles.cart}
          aria-labelledby="bag-heading"
          hidden={!cartOpen}
        >
          <div className={styles.cartHeading}>
            <h2 id="bag-heading">Your bag ({count})</h2>
            <button
              type="button"
              aria-label="Close bag"
              onClick={() => setCartOpen(false)}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          {count === 0 ? (
            <p>Your bag is empty. Find something you love in the collection.</p>
          ) : (
            <>
              <ul>
                {products
                  .filter((product) => cart[product.id])
                  .map((product) => (
                    <li key={product.id}>
                      <div>
                        <strong>{product.name}</strong>
                        <span>{money(product.price * cart[product.id])}</span>
                      </div>
                      <div className={styles.quantity}>
                        <button
                          type="button"
                          aria-label={`Remove one ${product.name}`}
                          onClick={() =>
                            setCart((current) => ({
                              ...current,
                              [product.id]: Math.max(
                                0,
                                current[product.id] - 1,
                              ),
                            }))
                          }
                        >
                          <Minus size={14} aria-hidden="true" />
                        </button>
                        <span>{cart[product.id]}</span>
                        <button
                          type="button"
                          aria-label={`Add one ${product.name}`}
                          onClick={() => add(product.id, product.name)}
                        >
                          <Plus size={14} aria-hidden="true" />
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
              <div className={styles.subtotal}>
                <strong>Subtotal</strong>
                <strong>{money(total)}</strong>
              </div>
            </>
          )}
          <p className={styles.demoNote}>
            Demo bag only. Checkout is not available. Your bag resets when you
            leave this page.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <Link href="/store">InfinityMall</Link>
        <p>Objects for a considered workday.</p>
        <Link href="/">
          Back to Infinity Management Consultants{" "}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </footer>
    </div>
  );
}
