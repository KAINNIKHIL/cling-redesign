import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    category: "Web Development",
    title: "Digital Experiences",
    description:
      "Web solutions designed around business goals, usability, and modern digital experiences.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    category: "App Development",
    title: "Mobile Solutions",
    description:
      "Application experiences built to help businesses connect with their users across devices.",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    category: "Enterprise Solutions",
    title: "Custom Platforms",
    description:
      "Purpose-built digital platforms designed around specific business requirements.",
    gradient: "from-slate-800 to-slate-950",
  },
];

const Portfolio = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Our Work
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Ideas turned into
              <span className="block text-slate-400">
                digital experiences.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore the kind of digital solutions we create across web,
              mobile, and enterprise technology.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all hover:border-blue-300 hover:text-blue-600"
          >
            View Portfolio
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Project cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/60"
            >
              {/* Visual */}
              <div
                className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient} p-6`}
              >
                {/* Decorative UI */}
                <div className="absolute inset-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.03]" />

                <div className="absolute left-10 top-10 rounded-xl bg-white/15 p-4 backdrop-blur-md">
                  <div className="h-3 w-20 rounded-full bg-white/70" />
                  <div className="mt-3 h-2 w-28 rounded-full bg-white/30" />
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-10 w-10 rounded-lg bg-white/20" />
                    <div className="h-10 w-10 rounded-lg bg-white/30" />
                    <div className="h-10 w-10 rounded-lg bg-white/15" />
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 rounded-xl bg-white p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span className="text-xs font-semibold text-slate-700">
                      Digital Solution
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-sm font-semibold text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-semibold text-slate-500">
                    Explore
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                    <ExternalLink size={17} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-950">
              Have an idea of your own?
            </h3>

            <p className="mt-2 text-slate-600">
              Let's turn it into something meaningful.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Start Your Project
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;