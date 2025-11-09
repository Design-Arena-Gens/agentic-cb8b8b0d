export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-x-[10%] top-10 h-64 rounded-full bg-forest-100 blur-3xl" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-forest-500">Limited Release</p>
        <h2 className="font-display text-4xl font-semibold text-forest-900">
          Join the Verdura circle and access seasonal colorways first.
        </h2>
        <p className="text-base text-forest-600">
          Receive invites to regenerative farm immersions, behind-the-seam studio tours, and exclusive pre-order
          windows for micro-batch drops.
        </p>
        <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-forest-200 px-6 py-3 text-sm text-forest-700 focus:border-forest-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-forest-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-forest-600/30 transition hover:bg-forest-700"
          >
            Notify Me
          </button>
        </form>
        <p className="text-xs text-forest-400">
          We respect your inbox. Expect one mindful email per month packed with regenerative inspiration.
        </p>
      </div>
    </section>
  );
}
