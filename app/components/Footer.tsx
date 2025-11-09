export default function Footer() {
  return (
    <footer className="border-t border-forest-100 bg-white/80 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <span className="text-xl font-display font-semibold text-forest-800">Verdura Steps</span>
          <p className="text-sm text-forest-600">
            100% organic footwear crafted in small, solar-powered ateliers. Certified Climate Neutral.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-forest-600 sm:flex-row sm:items-center sm:gap-8">
          <a href="#materials" className="transition hover:text-forest-800">
            Materials & Certifications
          </a>
          <a href="#ethos" className="transition hover:text-forest-800">
            Impact Journal
          </a>
          <a href="mailto:care@verdurasteps.com" className="transition hover:text-forest-800">
            care@verdurasteps.com
          </a>
        </div>
        <p className="text-xs text-forest-500">© {new Date().getFullYear()} Verdura Steps. Every step with purpose.</p>
      </div>
    </footer>
  );
}
