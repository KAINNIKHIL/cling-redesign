import { Globe2, Users } from "lucide-react";

const GlobalPresence = () => {
  return (
    <section id="global" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Global Presence
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Expanding our
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              global footprint.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Expanding our global footprint across diverse markets and
            cultures.
          </p>
        </div>

        {/* Presence + Clientele */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* Global Presence */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">

            {/* Background glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-400">
                <Globe2 size={27} />
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Our Global Presence
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
                Expanding our global footprint across diverse markets and
                cultures.
              </p>

              {/* Visual map area */}
              <div className="mt-10 flex min-h-[120px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                <Globe2
                  size={82}
                  strokeWidth={1}
                  className="text-blue-400/50"
                />
              </div>
            </div>
          </div>

          {/* Diverse Clientele */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Users size={27} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-950">
              Our Diverse Clientele
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
              We work with a diverse range of clients across different
              markets and industries, delivering technology solutions
              around their individual requirements.
            </p>

            {/* Client visual */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="h-16 rounded-2xl border border-slate-200 bg-white" />
              <div className="h-16 rounded-2xl border border-slate-200 bg-white" />
              <div className="h-16 rounded-2xl border border-slate-200 bg-white" />
              <div className="h-16 rounded-2xl border border-slate-200 bg-white" />
              <div className="h-16 rounded-2xl border border-slate-200 bg-white" />
              <div className="h-16 rounded-2xl border border-slate-200 bg-white" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;