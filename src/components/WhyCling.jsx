import {
  ArrowUpRight,
  Blocks,
  Users,
  ShieldCheck,
  Lightbulb,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Blocks,
    title: "Business-focused solutions",
    description:
      "Technology is shaped around the actual requirements and goals of the business.",
  },
  {
    icon: Users,
    title: "Collaborative approach",
    description:
      "We work closely with clients to understand ideas, requirements, and priorities.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable technology",
    description:
      "Solutions are built with attention to usability, maintainability, and long-term needs.",
  },
  {
    icon: Lightbulb,
    title: "Ideas into products",
    description:
      "From an initial concept to a working digital solution, we help move ideas forward.",
  },
  {
    icon: Headphones,
    title: "Ongoing support",
    description:
      "Digital products often evolve, and continued support helps businesses keep moving.",
  },
];

const WhyCling = () => {
  return (
    <section
      id="why-cling"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-600">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              Why Cling
            </div>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Technology with
              <span className="block text-slate-400">
                a purpose.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-600 lg:ml-auto">
            We combine technology, creativity, and business understanding to
            create digital solutions that solve real problems.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Statement card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 sm:p-10 lg:p-12">
            {/* Red glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
                Our philosophy
              </p>

              <h3 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Don't just build technology.
                <span className="block text-slate-400">
                  Build something useful.
                </span>
              </h3>

              <p className="mt-6 leading-7 text-slate-300">
                Every project starts with understanding the problem. The goal
                is not simply to create software, but to create a solution
                that makes a meaningful difference to the people using it.
              </p>

              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
              >
                Let's Work Together

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* Reasons */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className={`group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-red-100/40 ${
                    index === reasons.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-red-50 p-3 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-bold text-slate-300 transition-colors duration-300 group-hover:text-red-200">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-red-600">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCling;