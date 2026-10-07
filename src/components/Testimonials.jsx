import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Testimonials
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Your voice,
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            {" "}our pride.
          </span>
        </h2>

        <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-12">
          <Quote
            size={42}
            className="mx-auto text-blue-500"
            strokeWidth={1.5}
          />

          <p className="mt-7 text-lg leading-8 text-slate-600">
            Dive into the heartfelt accounts of our valued patrons. From
            life-changing experiences to exceptional service, their stories
            illuminate the essence of our commitment. Join our family of
            satisfied customers and witness firsthand the transformative
            power of our offerings.
          </p>

          <p className="mt-6 text-sm font-semibold text-slate-950">
            Your satisfaction is our greatest achievement!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;