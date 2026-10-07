import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white"
    >
      {/* Soft red glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-red-50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
        {/* Label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
          Testimonials
        </p>

        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Your voice,
          <span className="text-red-600"> our pride.</span>
        </h2>

        {/* Testimonial Card */}
        <div className="group relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/40 sm:p-12">
          {/* Quote icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
            <Quote size={30} strokeWidth={1.5} />
          </div>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            Dive into the heartfelt accounts of our valued patrons. From
            life-changing experiences to exceptional service, their stories
            illuminate the essence of our commitment. Join our family of
            satisfied customers and witness firsthand the transformative
            power of our offerings.
          </p>

          <div className="mx-auto mt-7 h-1 w-8 rounded-full bg-red-600 transition-all duration-300 group-hover:w-12" />

          <p className="mt-5 text-sm font-semibold text-slate-950">
            Your satisfaction is our greatest achievement!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;