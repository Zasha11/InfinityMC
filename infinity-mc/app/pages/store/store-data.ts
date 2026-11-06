import { BookOpen, Pencil, Coffee, BriefcaseBusiness } from "lucide-react";

export const products = [
  {
    id: "notebook",
    name: "The Everyday Notebook",
    category: "Stationery",
    price: 38,
    color: "bg-[#eee3d3]",
    icon: BookOpen,
    detail: "A5 · Dotted pages",
    badge: "Bestseller",
  },
  {
    id: "pen",
    name: "The Studio Pen",
    category: "Stationery",
    price: 24,
    color: "bg-[#ebe1ce]",
    icon: Pencil,
    detail: "Matte finish · Black ink",
    badge: "",
  },
  {
    id: "mug",
    name: "The Morning Mug",
    category: "Desk essentials",
    price: 58,
    color: "bg-[#ead7cb]",
    icon: Coffee,
    detail: "Ceramic · 350 ml",
    badge: "New arrival",
  },
  {
    id: "folio",
    name: "The Workday Folio",
    category: "Accessories",
    price: 89,
    color: "bg-[#e5ddd4]",
    icon: BriefcaseBusiness,
    detail: "A4 · Everyday organiser",
    badge: "",
  },
];
export const categories = [
  "All products",
  "Stationery",
  "Desk essentials",
  "Accessories",
];
export const money = (value: number) => `RM ${value.toFixed(2)}`;

export type Product = (typeof products)[number];
export type Cart = Record<string, number>;
