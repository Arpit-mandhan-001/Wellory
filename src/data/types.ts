import type { StaticImageData } from "next/image";

export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  accentColor: string;
  glowColor: string;
  bgGradient: string;

  // Accept both imported Next.js images and public URL strings
  canImage: StaticImageData | string;
  secondaryCanImage?: StaticImageData | string;
  showcaseBackground?: StaticImageData | string;

  showcaseLabel?: string;
  showcaseColor?: string;
  showcaseWatermark?: StaticImageData | string;

  description: string;

  caffeine: string;
  caffeineVal: number;

  sugar: string;
  sugarVal: number;

  calories: string;
  caloriesVal: number;

  tasteNotes: string[];

  features: {
    icon: string;
    title: string;
    desc: string;
  }[];

  price: number;

  packSizes: {
    label: string;
    count: number;
    price: number;
    popular?: boolean;
  }[];
}

export interface CartItem {
  flavorId: string;
  flavorName: string;
  packLabel: string;
  packCount: number;
  price: number;
  quantity: number;
  accentColor: string;
  image: string;
}

export interface Ingredient {
  name: string;
  origin: string;
  benefit: string;
  icon: string;
  percentage: string;
  details: string;
}
