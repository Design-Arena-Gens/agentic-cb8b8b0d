import type { Product } from "../components/ProductCard";

export const products: Product[] = [
  {
    name: "Alder Low Ember",
    price: "$248",
    description: "Heritage low-top with plant-dyed gradients and algae-cork cushioning.",
    badge: "Best Seller",
    image: "/products/alder-low-ember.svg",
    features: [
      "Plant-tanned Nubuck upper",
      "Harvested wild silk lining",
      "Removable algae foam insole",
      "Natural rubber outsole"
    ]
  },
  {
    name: "Linden Trail Haze",
    price: "$268",
    description: "Hiker silhouette built for city adventures and forest escapes alike.",
    badge: "New",
    image: "/products/linden-trail-haze.svg",
    features: [
      "Water-wicking hemp canvas",
      "Moss-infused grip pods",
      "Adaptive lacing crafted from agave",
      "Cork heel stabilizer"
    ]
  },
  {
    name: "Cedar Slip Bloom",
    price: "$198",
    description: "Minimal slip-on with sculpted cork midsole and cloud-soft merino wool collar.",
    image: "/products/cedar-slip-bloom.svg",
    features: [
      "Zero-glue construction",
      "Temperature regulating merino",
      "Bio-based cushioning",
      "Compostable packaging"
    ]
  }
];
