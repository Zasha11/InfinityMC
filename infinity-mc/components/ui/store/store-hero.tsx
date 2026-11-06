import { ArrowRight } from "lucide-react";

export function StoreHero() {
  return (
    <section className="mx-auto grid max-w-336 grid-cols-2 bg-[linear-gradient(115deg,#fffdf9,var(--brand-gold-soft))] max-sm:grid-cols-1" aria-labelledby="store-heading">
      <div className="px-14 py-17 max-[1000px]:px-7.5 max-[1000px]:py-12.5 max-sm:px-6 max-sm:py-10">
        <p className="mb-5 text-[10px] font-semibold tracking-[0.16em] text-gold-dark">THE EVERYDAY COLLECTION / 01</p>
        <h1 id="store-heading" className="mb-6 font-[Georgia,serif] text-[clamp(44px,5.2vw,76px)] leading-[1.04] font-normal tracking-[-0.05em] max-sm:text-[52px]">
          Make space
          <br />
          for good work.
        </h1>
        <p className="max-w-85 text-sm leading-[1.9] text-[#78685c]">
          Thoughtfully chosen essentials for your desk, your ideas, and
          everything in between.
        </p>
        <a className="mt-7.5 inline-flex items-center gap-8 rounded-[5px] border border-gold bg-[#980e0d] px-5.5 py-[15px] text-xs text-white no-underline hover:bg-[#790b0a]" href="#collection">
          Discover the collection{" "}
          <ArrowRight size={18} aria-hidden="true" />
        </a>
        <span className="mt-6 block text-[10px] text-[#78685c]">
          Simple objects. A lasting place in your day.
        </span>
      </div>
      <div className="relative min-h-122.5 overflow-hidden bg-[#e1d4bd] max-sm:min-h-90" aria-hidden="true">
        <div className="absolute top-[8%] left-[20%] size-92.5 rounded-full bg-[#cfbfa4] max-sm:size-70" />
        <div className="absolute top-[14%] left-1/4 flex h-72.5 w-52.5 -rotate-13 flex-col justify-between rounded-[4px_12px_12px_4px] border-l-[10px] border-[#710b0a] bg-[#980e0d] px-6 py-9.5 text-[#f4e3cb] shadow-[20px_25px_30px_#4f483329,inset_-6px_0_#f2edda] max-[1000px]:left-[16%] max-sm:left-[30%] max-sm:h-57.5 max-sm:w-[165px] max-sm:px-4.5 max-sm:py-6.5 max-[380px]:left-[22%] [&>span]:font-[Georgia,serif] [&>span]:text-[28px] [&>span]:leading-[1.2] [&>span]:tracking-[0.08em] max-sm:[&>span]:text-[23px] [&_small]:text-[8px] [&_small]:tracking-[0.15em]">
          <span>
            NOTES
            <br />
            &amp; IDEAS
          </span>
          <small>InfinityMall</small>
        </div>
        <div className="absolute top-[34%] right-[17%] h-52.5 w-2.5 rotate-18 rounded-[4px_4px_1px_1px] bg-[linear-gradient(90deg,#9d794a,#e2c495,#b69769)] shadow-[8px_6px_12px_#4f483326] max-[1000px]:right-[10%] max-sm:right-[18%] max-sm:h-42.5" />
        <div className="absolute bottom-7 left-8 font-[Georgia,serif] text-xl leading-[1.4] max-sm:bottom-4 max-sm:left-6 max-sm:text-[17px] [&_em]:text-[15px]">
          A fresh page.
          <br />
          <em>A world of possibility.</em>
        </div>
      </div>
    </section>
  );
}
