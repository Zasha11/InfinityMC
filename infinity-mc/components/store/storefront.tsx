"use client";

import { useState } from "react";
import { products, type Cart } from "@/app/pages/store/store-data";
import { StoreHeader } from "@/components/ui/store/store-header";
import { StoreHero } from "@/components/ui/store/store-hero";
import { ProductCollection } from "@/components/ui/store/product-collection";
import { StoreStory } from "@/components/ui/store/store-story";
import { StoreCart } from "@/components/ui/store/store-cart";
import { StoreFooter } from "@/components/ui/store/store-footer";

export function Storefront() {
  const [category, setCategory] = useState("All products");
  const [cart, setCart] = useState<Cart>({});
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

  function remove(id: string) {
    setCart((current) => ({
      ...current,
      [id]: Math.max(0, (current[id] || 0) - 1),
    }));
  }

  return (
    <div className="flex-1 bg-[#fffdf9] text-[#38251b] [&_a:focus-visible]:outline-3 [&_button:focus-visible]:outline-3 [&_a:focus-visible]:outline-[#76532e] [&_button:focus-visible]:outline-[#76532e] [&_a:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-offset-4">
      <StoreHeader
        count={count}
        cartOpen={cartOpen}
        onToggleCart={() => setCartOpen((open) => !open)}
      />
      <main>
        <StoreHero />
        <ProductCollection
          category={category}
          message={message}
          onCategoryChange={setCategory}
          onAdd={add}
        />
        <StoreStory />
        <StoreCart
          cart={cart}
          cartOpen={cartOpen}
          count={count}
          total={total}
          onClose={() => setCartOpen(false)}
          onAdd={add}
          onRemove={remove}
        />
      </main>
      <StoreFooter />
    </div>
  );
}
