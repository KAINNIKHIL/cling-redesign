import {
  ArrowUpRight,
  BrainCircuit,
  Sparkles,
  Workflow,
  Bot,
} from "lucide-react";

const Innovation = () => {
  return (
    <section
      id="innovation"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left */}
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm font-semibold text-red-300">
                <Sparkles size={15} />
                Innovation & AI
              </div>

              <h2 className="mt-7 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Building smarter
                <span className="block text-red-400">
                  digital solutions.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Explore technology-driven solutions that combine software,
                automation, and artificial intelligence to solve modern
                business challenges.
              </p>

              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-red-600 hover:text-white"
              >
                Explore AI Solutions
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Right visual */}
            <div className="relative min-h-[420px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              {/* Central node */}
              <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-red-400/30 bg-red-500/10 shadow-2xl shadow-red-500/20 backdrop-blur-xl">
                <BrainCircuit
                  size={52}
                  strokeWidth={1.5}
                  className="text-red-400"
                />
              </div>

              {/* Connection lines */}
              <div className="absolute left-[22%] top-[27%] h-px w-[28%] rotate-[25deg] bg-gradient-to-r from-transparent via-red-400/50 to-red-400/20" />

              <div className="absolute right-[22%] top-[30%] h-px w-[27%] -rotate-[25deg] bg-gradient-to-r from-red-400/20 via-red-400/50 to-transparent" />

              <div className="absolute bottom-[28%] left-[20%] h-px w-[30%] -rotate-[25deg] bg-gradient-to-r from-transparent via-red-400/50 to-red-400/20" />

              <div className="absolute bottom-[28%] right-[20%] h-px w-[30%] rotate-[25deg] bg-gradient-to-r from-red-400/20 via-red-400/50 to-transparent" />

              {/* Floating cards */}
              <div className="absolute left-8 top-12 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Bot className="text-red-400" size={25} />

                <p className="mt-2 text-xs font-semibold text-white">
                  Intelligent Systems
                </p>
              </div>

              <div className="absolute right-8 top-16 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Workflow className="text-red-400" size={25} />

                <p className="mt-2 text-xs font-semibold text-white">
                  Automation
                </p>
              </div>

              <div className="absolute bottom-10 left-12 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Sparkles className="text-red-400" size={25} />

                <p className="mt-2 text-xs font-semibold text-white">
                  AI Experiences
                </p>
              </div>

              <div className="absolute bottom-12 right-10 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <BrainCircuit className="text-red-400" size={25} />

                <p className="mt-2 text-xs font-semibold text-white">
                  Data & Intelligence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/40">
            <p className="text-sm font-semibold text-red-600">
              Technology
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-950">
              Modern engineering
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Technology choices focused on building useful and maintainable
              digital solutions.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/40">
            <p className="text-sm font-semibold text-red-600">
              Intelligence
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-950">
              AI-powered possibilities
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Exploring how AI can improve products, workflows, and user
              experiences.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/40">
            <p className="text-sm font-semibold text-red-600">
              Innovation
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-950">
              Built for what comes next
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Combining creativity and technology to address evolving business
              needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Innovation;