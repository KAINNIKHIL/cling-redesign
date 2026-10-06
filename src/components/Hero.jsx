import {
  ArrowRight,
  Code2,
  Cpu,
  Globe2,
  Smartphone,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fafc] pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-100/50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
        {/* Left content */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            End-to-end IT solutions
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[72px]">
            Making your
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              ideas happen.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            We build digital solutions that help businesses turn ideas into
            meaningful products, from websites and mobile applications to
            custom platforms and enterprise solutions.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Start a Project
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50"
            >
              Explore Our Work
            </a>
          </div>

          {/* Service indicators */}
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-slate-200 pt-7">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Code2 size={17} className="text-blue-600" />
              Web Development
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Smartphone size={17} className="text-blue-600" />
              App Development
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Cpu size={17} className="text-blue-600" />
              AI / ML
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-[570px]">
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/50 blur-3xl" />

          {/* Main visual */}
          <div className="relative aspect-square">
            {/* Outer ring */}
            <div className="absolute inset-[7%] rounded-full border border-blue-200/80" />

            <div className="absolute inset-[15%] rounded-full border border-dashed border-violet-200" />

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(37,99,235,0.18)] ring-1 ring-slate-200/80 sm:h-44 sm:w-44">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20">
                  <Globe2 size={25} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Cling
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  Digital Solutions
                </p>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute left-[2%] top-[25%] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5">
              <Code2 className="text-blue-600" size={22} />
              <p className="mt-2 text-xs font-semibold text-slate-800">
                Web
              </p>
            </div>

            <div className="absolute right-[1%] top-[16%] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5">
              <Smartphone className="text-violet-600" size={22} />
              <p className="mt-2 text-xs font-semibold text-slate-800">
                Mobile
              </p>
            </div>

            <div className="absolute bottom-[17%] left-[8%] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5">
              <Cpu className="text-blue-600" size={22} />
              <p className="mt-2 text-xs font-semibold text-slate-800">
                AI / ML
              </p>
            </div>

            {/* Decorative dots */}
            <div className="absolute right-[20%] bottom-[8%] h-3 w-3 rounded-full bg-blue-500" />

            <div className="absolute left-[21%] top-[10%] h-2 w-2 rounded-full bg-violet-500" />

            <div className="absolute right-[8%] bottom-[37%] h-2 w-2 rounded-full bg-blue-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;