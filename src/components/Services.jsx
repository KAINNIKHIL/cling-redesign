import {
  ArrowUpRight,
  Globe,
  Smartphone,
  Building2,
  Megaphone,
  PanelsTopLeft,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern websites and web solutions designed to deliver strong digital experiences.",
    icon: Globe,
    className: "bg-blue-50 text-blue-600",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Mobile applications built around your users, business goals, and product ideas.",
    icon: Smartphone,
    className: "bg-violet-50 text-violet-600",
  },
  {
    number: "03",
    title: "ERP Development",
    description:
      "Business-focused ERP solutions that help bring essential processes together.",
    icon: Building2,
    className: "bg-indigo-50 text-indigo-600",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Digital strategies that help businesses strengthen their online presence.",
    icon: Megaphone,
    className: "bg-blue-50 text-blue-600",
  },
  {
    number: "05",
    title: "Custom Web Portal",
    description:
      "Purpose-built web portals created around specific business requirements.",
    icon: PanelsTopLeft,
    className: "bg-violet-50 text-violet-600",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            What We Do
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Digital solutions
            <span className="block text-slate-400">
              built around your business.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From websites and mobile applications to enterprise solutions,
            we help turn business ideas into practical digital products.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-400">
                    {service.number}
                  </span>

                  <div
                    className={`rounded-xl p-3 ${service.className}`}
                  >
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* Bottom arrow */}
                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-semibold text-slate-500 transition-colors group-hover:text-blue-600">
                    Explore service
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                {/* Hover decoration */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-bold text-slate-950">
              Have a specific requirement?
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Let's discuss how we can build the right solution for you.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;