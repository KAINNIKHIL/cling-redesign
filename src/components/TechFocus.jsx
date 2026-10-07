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
    title: "The Surveillance Model identifies suspicious activity in the video",
    icon: Play,
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2FAIThumbnail.png&w=1080&q=75",
  },
];

const TechFocus = () => {
  return (
    <section id="tech-focus" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
            Current Tech Focus
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Exploring technology
            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              beyond the ordinary.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {techItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-950/30"
              >
                {/* Actual Cling thumbnail */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/30 text-blue-300 backdrop-blur-md">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  
                </div>

                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {item.type}
                  </p>

                  <h3 className="mt-3 min-h-[56px] text-xl font-semibold leading-7">
                    {item.title}
                  </h3>

                  <a
                    href="#contact"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
                  >
                    Explore
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechFocus;