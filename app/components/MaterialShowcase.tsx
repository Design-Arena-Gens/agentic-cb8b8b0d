const materials = [
  {
    title: "Plant-Tanned Leather",
    description:
      "Sourced from regenerative farms, tanned with chestnut and quebracho to avoid chrome and heavy metals.",
    icon: "🌿"
  },
  {
    title: "Algae-Cork Foam",
    description:
      "Cushioning blends reclaimed algae blooms with Iberian cork for breathable, adaptive comfort.",
    icon: "🪵"
  },
  {
    title: "Hemp Bio-Stitching",
    description: "Durable hemp threads finish each pair, ensuring full biodegradability at end-of-life.",
    icon: "🧵"
  }
];

export default function MaterialShowcase() {
  return (
    <section id="materials" className="bg-white py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-500">Materials</p>
          <h2 className="font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            Organic ingredients with traceable origins.
          </h2>
          <p className="text-forest-700">
            Every Verdura pair is built with fibers and dyes that nourish ecosystems. We publish full sourcing data
            and partner with independent soil scientists to verify regenerative practices.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {materials.map((material) => (
            <article
              key={material.title}
              className="rounded-3xl border border-forest-100 bg-forest-50/60 p-6 shadow-sm shadow-forest-200/40"
            >
              <span className="text-3xl" aria-hidden>
                {material.icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-forest-900">{material.title}</h3>
              <p className="mt-3 text-sm text-forest-700">{material.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
