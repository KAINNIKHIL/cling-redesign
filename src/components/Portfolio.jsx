import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    category: "Web Development",
    title: "Digital Experiences",
    description:
      "Web solutions designed around business goals, usability, and modern digital experiences.",
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2Fservices2.png&w=1080&q=75",
  },
  {
    category: "App Development",
    title: "Mobile Solutions",
    description:
      "Application experiences built to help businesses connect with their users across devices.",
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2Fservices3.png&w=1080&q=75",
  },
  {
    category: "Enterprise Solutions",
    title: "Custom Platforms",
    description:
      "Purpose-built digital platforms designed around specific business requirements.",
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2Fservices5.png&w=1080&q=75",
  },
];

const Portfolio = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      {/* Soft red background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-red-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-600">
              <span className="h-2 w-2 rounded-full bg-red-600" />
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
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-red-300 hover:text-red-600 hover:shadow-lg hover:shadow-red-100"
          >
            View Portfolio
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-2xl hover:shadow-red-100/60"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-red-600 shadow-sm backdrop-blur">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-sm font-semibold text-red-600">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-950 transition-colors duration-200 group-hover:text-red-600">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-semibold text-slate-500">
                    Explore
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
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
            className="inline-flex w-fit items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
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