import { Plus } from "lucide-react";
import { money, type Product } from "@/app/pages/store/store-data";

interface ProductCardProps {
  product: Product;
  onAdd: (id: string, name: string) => void;
}

export function ProductCard({
  product,
  onAdd,
}: ProductCardProps) {
  const Icon = product.icon;

  return (
    <article className="[&>p]:mt-2 [&>p]:text-[11px] [&>p]:text-[#78685c]">
      <div
        className={`relative grid min-h-65 place-items-center text-[#76532e] max-sm:min-h-50 ${product.color}`}
      >
        {product.badge && (
          <span className="absolute top-3.5 left-3.5 border border-(--brand-gold-border) bg-(--brand-gold-soft) px-2.5 py-1.5 text-[9px] text-gold-dark">{product.badge}</span>
        )}
        <Icon size={100} strokeWidth={0.8} aria-hidden="true" />
        <span className="absolute bottom-5 text-[8px] tracking-[0.2em] opacity-70">InfinityMall</span>
      </div>
      <div className="mt-4.5 flex flex-wrap items-baseline justify-between gap-2 [&_h3]:text-[13px] [&_h3]:font-medium [&_span]:text-xs">
        <h3>{product.name}</h3>
        <span>{money(product.price)}</span>
      </div>
      <p>{product.detail}</p>
      <button
        className="mt-4.5 flex w-full cursor-pointer items-center justify-between border-0 border-t border-[#e9e0d5] bg-transparent py-3 text-[11px] hover:text-[#76532e]"
        type="button"
        onClick={() => onAdd(product.id, product.name)}
      >
        Add to bag <Plus size={16} aria-hidden="true" />
      </button>
    </article>
  );
}
