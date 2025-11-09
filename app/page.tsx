import CallToAction from "./components/CallToAction";
import Ethos from "./components/Ethos";
import Hero from "./components/Hero";
import MaterialShowcase from "./components/MaterialShowcase";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { products } from "./products/data";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-forest-50 via-white to-white">
      <Navbar />
      <Hero />
      <section id="collection" className="bg-white py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-500">Collection</p>
            <h2 className="font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
              Conscious craftsmanship, elevated aesthetics.
            </h2>
            <p className="text-forest-700">
              Designed in collaboration with regenerative farms and artisan cobblers, each silhouette balances
              minimal design with advanced natural performance.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>
      <MaterialShowcase />
      <Ethos />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
