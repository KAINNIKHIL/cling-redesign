import { ArrowUpRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 px-7 py-16 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          {/* Background glow */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-400 backdrop-blur-sm">
              <MessageCircle size={27} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let's Build Something
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have an idea?
              <span className="block text-slate-400">
                Let's make it happen.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us what you're building, what you're trying to solve, or
              simply where you want to start.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:info@clinginfotech.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                Start a Conversation
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
  href="#contact"
  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
>
  Talk to Us
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;