const testimonials = [
  {
    quote:
      "Wearing Verdura feels like walking barefoot on moss. I love knowing every stitch respects the planet.",
    name: "Amelia K.",
    title: "Climate Researcher"
  },
  {
    quote:
      "The cork-algae insole adapts to my stride and the look gets compliments daily. Sustainable can be stunning!",
    name: "Jordan F.",
    title: "Creative Director"
  },
  {
    quote:
      "Zero break-in time and their regenerative leather keeps my feet cool even on long shifts.",
    name: "Sasha P.",
    title: "Plant-Based Chef"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-forest-900 py-20 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-200">Verified Voices</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Feel the difference, hear the stories.</h2>
          <p className="text-forest-100">
            From urban explorers to mindful makers, Verdura Steps is the choice for those who want every
            footprint to count.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <blockquote className="text-lg text-forest-50">“{testimonial.quote}”</blockquote>
              <figcaption className="text-sm text-forest-200">
                <span className="font-semibold text-white">{testimonial.name}</span> · {testimonial.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
