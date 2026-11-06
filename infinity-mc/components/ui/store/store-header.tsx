import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

interface StoreHeaderProps {
  count: number;
  cartOpen: boolean;
  onToggleCart: () => void;
}

export function StoreHeader({
  count,
  cartOpen,
  onToggleCart,
}: StoreHeaderProps) {
  return (
    <>
          <div className="border-b-2 border-gold bg-[#980e0d] px-6 py-2.5 text-center text-[11px] tracking-[0.04em] text-[#fff6eb] [&_span]:ml-6 [&_span]:opacity-80 max-sm:[&_span]:mt-[5px] max-sm:[&_span]:ml-0 max-sm:[&_span]:block">
            A little more intention. A better everyday.{" "}
            <span>Concept store · Demo products</span>
          </div>
          <header className="mx-auto flex max-w-360 items-center justify-between gap-7.5 border-b border-(--brand-gold-border) bg-white px-12 py-6.5 max-[1000px]:gap-5 max-[1000px]:p-6 max-sm:flex-wrap">
            <Link
              href="/store"
              className="flex items-center gap-3.5 font-[Georgia,serif] text-lg font-semibold tracking-[0.08em] text-[#76532e] no-underline max-sm:text-sm [&_small]:mt-[5px] [&_small]:block [&_small]:text-[8px] [&_small]:tracking-[0.19em]"
              aria-label="InfinityMall store home"
            >
              <span className="grid size-12 place-items-center rounded-[4px_16px_4px_16px] border border-gold bg-[#980e0d] font-[Georgia,serif] text-2xl font-normal italic tracking-[-0.08em] text-gold-light">IM</span>
              <span>
                InfinityMall<small>BY INFINITY</small>
              </span>
            </Link>
            <nav aria-label="Store navigation" className="flex flex-wrap items-center gap-7.5 text-[13px] max-[1000px]:gap-4 max-sm:order-3 max-sm:w-full max-sm:justify-between max-sm:border-t max-sm:border-[#e9e0d5] max-sm:pt-4.5 [&_a]:no-underline [&_a:hover]:underline [&_a:hover]:underline-offset-[5px] [&_a:last-child:hover]:no-underline">
              <a href="#collection">Shop collection</a>
              <a href="#story">Our story</a>
              <Link href="/" className="inline-flex items-center gap-1.5 rounded-[5px] border border-[#980e0d] px-3.5 py-2.5 font-semibold text-[#980e0d] hover:bg-[#980e0d] hover:text-white hover:no-underline">
                <ArrowLeft size={14} aria-hidden="true" /> Back to homepage
              </Link>
            </nav>
            <button
              type="button"
              className="flex cursor-pointer items-center gap-2 border-0 bg-transparent text-[13px] [&_span]:grid [&_span]:h-6 [&_span]:min-w-6 [&_span]:place-items-center [&_span]:rounded-full [&_span]:bg-[#f2e5d7] [&_span]:text-[11px]"
              aria-expanded={cartOpen}
              aria-controls="store-bag"
              onClick={onToggleCart}
            >
              <ShoppingBag size={19} aria-hidden="true" />
              Bag <span>{count}</span>
            </button>
          </header>
    </>
  );
}
