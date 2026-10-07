import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your idea, business requirements, users, and the problem you want to solve.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We shape the user experience and solution structure into a clear and practical digital product.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our team turns the approved concept into a functional and scalable digital solution.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We bring the solution to life and help move the finished product toward real-world use.",
    icon: Rocket,
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-50 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-red-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-600">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              Our Approach
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              From idea
              <span className="block text-slate-400">
                to digital reality.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-600 lg:ml-auto">
            A simple and collaborative process helps us understand what you
            need, build the right solution, and turn your idea into something
            people can actually use.
          </p>
        </div>

        {/* Process cards */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="group relative">
                  {/* Number / Icon */}
                  <div className="relative z-10 flex items-center justify-between lg:block">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-red-200 group-hover:shadow-lg group-hover:shadow-red-100/50">
                      <Icon
                        size={30}
                        strokeWidth={1.8}
                        className="text-slate-800 transition-colors duration-300 group-hover:text-red-600"
                      />
                    </div>

                    <span className="text-sm font-bold text-slate-300 transition-colors duration-300 group-hover:text-red-200 lg:absolute lg:right-0 lg:top-2">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="text-2xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-red-600">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between cards */}
                  {index < steps.length - 1 && (
                    <div className="mt-6 hidden text-slate-300 transition-colors duration-300 group-hover:text-red-300 lg:block">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-slate-950 p-8 sm:p-10 lg:p-12">
          {/* Red glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
                One idea at a time
              </p>

              <h3 className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Good technology starts with understanding the problem.
              </h3>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
            >
              Start a Conversation
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;