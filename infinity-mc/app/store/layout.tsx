import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InfinityMall | Everyday work essentials",
  description:
    "A concept store for thoughtful desk and work essentials. Demo storefront.",
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
