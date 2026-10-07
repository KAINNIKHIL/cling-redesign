import { ArrowUpRight, Play } from "lucide-react";

const techItems = [
  {
    type: "3D Animation",
    title: "Cling Logo animation",
    icon: Play,
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2FvideoThumbnail1.png&w=1080&q=75",
  },
  {
    type: "3D Animation",
    title: "Advertisement video",
    icon: Play,
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2FvideoThumbnail2.png&w=1080&q=75",
  },
  {
    type: "AI",
    title:
      "The Surveillance Model identifies suspicious activity in the video",
    icon: Play,
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2FAIThumbnail.png&w=1080&q=75",
  },
];

const TechFocus = () => {
  return (
    <section
      id="tech-focus"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Red ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
            Current Tech Focus
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Exploring technology
            <span className="block text-red-400">
              beyond the ordinary.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {techItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-red-950/30"
              >
                {/* Thumbnail */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Play icon */}
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/30 text-red-400 backdrop-blur-md transition-all duration-300 group-hover:border-red-500/50 group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Type */}
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
                    {item.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-400">
                    {item.type}
                  </p>

                  <h3 className="mt-3 min-h-[56px] text-xl font-semibold leading-7 text-white">
                    {item.title}
                  </h3>

                  <a
                    href="#contact"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-red-400"
                  >
                    Explore

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechFocus;