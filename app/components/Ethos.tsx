const pillars = [
  {
    title: "Circular Design",
    details:
      "We design for disassembly. Return any worn pair and we’ll biodegrade or upcycle every component collectively.",
    metric: "92%",
    metricLabel: "Average reclaimed material per pair"
  },
  {
    title: "Living Wage Collective",
    details:
      "Crafted in small Italian and Portuguese studios where artisans earn 25% above regional living wage benchmarks.",
    metric: "25%",
    metricLabel: "Above living wage benchmark"
  },
  {
    title: "Climate Neutral",
    details:
      "Solar-powered production matched with mangrove restoration initiatives across Southeast Asia.",
    metric: "0 kg",
    metricLabel: "Net CO₂e per pair"
  }
];

export default function Ethos() {
  return (
    <section id="ethos" className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 py-20 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-300">Our Ethos</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Beyond shoes. A regenerative movement under your feet.
          </h2>
          <p className="text-forest-100">
            Verdura Steps is a B Corp committed to resilient supply chains and transparent impact reporting. Every
            pair funds soil restoration, artisan education, and ocean cleanup.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <p className="text-sm uppercase tracking-[0.18em] text-forest-200">{pillar.metricLabel}</p>
              <span className="mt-2 block text-4xl font-display font-semibold text-white">{pillar.metric}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-forest-100">{pillar.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
