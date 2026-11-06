import { Minus, Plus, X } from "lucide-react";
import { money, products, type Cart } from "@/app/pages/store/store-data";

interface StoreCartProps {
  cart: Cart;
  cartOpen: boolean;
  count: number;
  total: number;
  onClose: () => void;
  onAdd: (id: string, name: string) => void;
  onRemove: (id: string) => void;
}

export function StoreCart({
  cart,
  cartOpen,
  count,
  total,
  onClose,
  onAdd,
  onRemove,
}: StoreCartProps) {
  return (
    <section
      id="store-bag"
      className="fixed top-30 right-6 z-40 mx-auto my-9 max-h-[calc(100dvh-160px)] w-[min(480px,calc(100vw-48px))] max-w-200 overflow-y-auto border border-[#e9e0d5] bg-white p-7.5 shadow-[0_18px_60px_#980e0d26] max-sm:mx-4 max-sm:my-6 max-sm:p-5 [&_h2]:font-[Georgia,serif] [&_h2]:text-[26px] [&>p]:text-[13px] [&>p]:leading-[1.8] [&_ul]:list-none [&_ul]:p-0 [&_li]:flex [&_li]:items-center [&_li]:justify-between [&_li]:gap-5 [&_li]:border-b [&_li]:border-[#e9e0d5] [&_li]:py-4 max-sm:[&_li]:flex-col max-sm:[&_li]:items-start [&_li>div:first-child]:grid [&_li>div:first-child]:gap-2 [&_li>div:first-child]:text-[13px]"
      aria-labelledby="bag-heading"
      hidden={!cartOpen}
    >
      <div className="mb-6 flex items-center justify-between [&_button]:grid [&_button]:size-11 [&_button]:cursor-pointer [&_button]:place-items-center [&_button]:border [&_button]:border-[#e9e0d5] [&_button]:bg-transparent">
        <h2 id="bag-heading">Your bag ({count})</h2>
        <button
          type="button"
          aria-label="Close bag"
          onClick={onClose}
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
                  <div className="flex items-center gap-3.5 text-[13px] [&_button]:grid [&_button]:size-11 [&_button]:cursor-pointer [&_button]:place-items-center [&_button]:border [&_button]:border-[#e9e0d5] [&_button]:bg-transparent">
                    <button
                      type="button"
                      aria-label={`Remove one ${product.name}`}
                      onClick={() => onRemove(product.id)}
                    >
                      <Minus size={14} aria-hidden="true" />
                    </button>
                    <span>{cart[product.id]}</span>
                    <button
                      type="button"
                      aria-label={`Add one ${product.name}`}
                      onClick={() => onAdd(product.id, product.name)}
                    >
                      <Plus size={14} aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
          <div className="flex justify-between py-6 text-sm">
            <strong>Subtotal</strong>
            <strong>{money(total)}</strong>
          </div>
        </>
      )}
      <p className="mt-5 text-[#78685c]">
        Demo bag only. Checkout is not available. Your bag resets when you
        leave this page.
      </p>
    </section>
  );
}
