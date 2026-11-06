import { categories, products } from "@/app/pages/store/store-data";
import { ProductCard } from "./product-card";

interface ProductCollectionProps {
  category: string;
  message: string;
  onCategoryChange: (category: string) => void;
  onAdd: (id: string, name: string) => void;
}

export function ProductCollection({
  category,
  message,
  onCategoryChange,
  onAdd,
}: ProductCollectionProps) {
  return (
    <section
      id="collection"
      className="mx-auto max-w-360 scroll-mt-6 px-12 pt-17.5 pb-11 max-[1000px]:px-6 max-[1000px]:py-12"
      aria-labelledby="collection-heading"
    >
      <div className="flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start max-sm:gap-4 [&_h2]:font-[Georgia,serif] [&_h2]:text-[34px] [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.025em] max-sm:[&_h2]:text-[29px] [&>span]:text-[11px] [&>span]:text-[#78685c]">
        <div>
          <p className="mb-5 text-[10px] font-semibold tracking-[0.16em] text-gold-dark">LESS, BUT BETTER</p>
          <h2 id="collection-heading">Find your everyday favourites.</h2>
        </div>
        <span>{products.length} considered essentials</span>
      </div>
      <div className="my-7.5 flex flex-wrap gap-2 [&_button]:cursor-pointer [&_button]:rounded-[30px] [&_button]:border [&_button]:border-[#e9e0d5] [&_button]:bg-transparent [&_button]:px-4 [&_button]:py-2.5 [&_button]:text-xs [&_button[aria-pressed=true]]:border-gold [&_button[aria-pressed=true]]:bg-[#980e0d] [&_button[aria-pressed=true]]:text-white" aria-label="Filter products">
        {categories.map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={category === item}
            onClick={() => onCategoryChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-6 max-[1000px]:grid-cols-2 max-sm:gap-x-4 max-[380px]:grid-cols-1">
        {products
          .filter(
            (product) =>
              category === "All products" || product.category === category,
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
      </div>
      <p className="mt-6 min-h-5 text-xs text-[#78685c]" role="status">
        {message ||
          "Browse our sample collection. No real orders or payments are processed."}
      </p>
    </section>
  );
}
