import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-100 via-white to-forest-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-20 text-center md:flex-row md:items-start md:gap-16 md:text-left">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center rounded-full bg-forest-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest-600">
            Naturally Crafted
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl md:text-6xl">
            Organic shoes that reimagine comfort & conscious design.
          </h1>
          <p className="text-lg text-forest-700 md:text-xl">
            Verdura Steps blends regenerative materials with modern silhouettes. Each pair is plant-tanned,
            biodegradable, and stitched in solar-powered ateliers for the lightest footprint possible.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#collection"
              className="rounded-full bg-forest-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-forest-600/30 transition hover:bg-forest-700"
            >
              Explore Collection
            </a>
            <a
              href="#ethos"
              className="rounded-full border border-forest-200 px-8 py-3 text-base font-semibold text-forest-700 transition hover:border-forest-600 hover:text-forest-900"
            >
              Discover Our Ethos
            </a>
          </div>
        </div>
        <div className="relative flex flex-1 justify-center">
          <div className="absolute -right-12 top-10 hidden h-64 w-64 rounded-full bg-gradient-to-br from-forest-200 to-forest-400 opacity-30 blur-3xl md:block" />
          <div className="relative rounded-[2rem] bg-white/80 p-6 shadow-xl ring-1 ring-forest-100 backdrop-blur">
            <Image
              alt="Verdura Steps Alder Sneaker"
              src="/shoe-hero.svg"
              width={352}
              height={352}
              className="h-[22rem] w-[22rem] object-contain"
              priority
            />
            <div className="mt-6 space-y-2 text-left">
              <p className="text-sm font-medium uppercase tracking-widest text-forest-500">Featured Drop</p>
              <p className="font-display text-2xl font-semibold text-forest-900">Alder Low Ember</p>
              <p className="text-sm text-forest-600">
                Hand-dyed with madder root pigments and cushioned with cork-infused algae foam insoles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
