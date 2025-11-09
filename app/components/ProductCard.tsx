import Image from "next/image";

export type Product = {
  name: string;
  price: string;
  description: string;
  badge?: string;
  image: string;
  features: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-forest-100 bg-white/80 p-6 shadow-lg shadow-forest-200/50 transition hover:-translate-y-1 hover:shadow-forest-300/60">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-2xl font-semibold text-forest-900">{product.name}</h3>
          <p className="mt-2 text-sm text-forest-600">{product.description}</p>
        </div>
        {product.badge && (
          <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
            {product.badge}
          </span>
        )}
      </div>
      <Image
        src={product.image}
        alt={product.name}
        width={480}
        height={360}
        className="mt-6 h-48 w-full rounded-2xl object-cover shadow-inner shadow-forest-200/60"
      />
      <ul className="mt-6 space-y-2 text-sm text-forest-700">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-forest-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center justify-between">
        <span className="text-lg font-semibold text-forest-800">{product.price}</span>
        <a
          href="#"
          className="rounded-full border border-forest-300 px-4 py-2 text-sm font-semibold text-forest-700 transition hover:bg-forest-600 hover:text-white"
        >
          Add to Cart
        </a>
      </div>
    </article>
  );
}
