const links = [
  { href: "#materials", label: "Materials" },
  { href: "#collection", label: "Collection" },
  { href: "#ethos", label: "Our Ethos" },
  { href: "#testimonials", label: "Voices" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-forest-100">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-2xl font-display font-semibold tracking-tight text-forest-700">
          Verdura Steps
        </span>
        <nav className="hidden items-center gap-8 text-sm font-medium text-forest-700 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-forest-500">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#collection"
          className="rounded-full bg-forest-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-forest-600/30 transition hover:bg-forest-700"
        >
          Shop Collection
        </a>
      </div>
    </header>
  );
}
