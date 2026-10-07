import {
  ArrowUpRight,
  Globe,
  Smartphone,
  Building2,
  Megaphone,
  PanelsTopLeft,
  Users,
  Search,
  Boxes,
  Brain,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "App Development",
    description:
      "Need custom app development services? We can help you take advantage of the rapidly growing segment of mobile application development.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Custom Development",
    description:
      "We develop website layouts from the ground up rather than relying on pre-designed templates, based on your requirements.",
    icon: Globe,
  },
  {
    number: "03",
    title: "IT Team for Entrepreneurship",
    description:
      "Entrepreneurship can be exciting and challenging. Our team provides technology skills and expertise to support your ideas.",
    icon: Users,
  },
  {
    number: "04",
    title: "ERPs",
    description:
      "We help manage business activities by integrating back-office and front-office applications.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Website Designing",
    description:
      "Websites designed to help businesses build their digital presence and reach their audience.",
    icon: PanelsTopLeft,
  },
  {
    number: "06",
    title: "Digital Marketing",
    description:
      "Digital marketing helps businesses promote their brands and products through the internet and other digital channels.",
    icon: Megaphone,
  },
  {
    number: "07",
    title: "Social Media Marketing",
    description:
      "Social media marketing helps businesses connect with consumers across social platforms worldwide.",
    icon: Users,
  },
  {
    number: "08",
    title: "SEO & Google Ads",
    description:
      "SEO and Google Ads help businesses reach their target audience and improve visibility for their websites and brands.",
    icon: Search,
  },
  {
    number: "09",
    title: "Political Campaign",
    description:
      "Political campaign management services include campaign strategies, slogans, ideas, and ways to connect with people.",
    icon: Megaphone,
  },
  {
    number: "10",
    title: "3D Animations",
    description:
      "3D animation services covering areas such as character animation, product visualization, architectural rendering, and more.",
    icon: Boxes,
  },
  {
    number: "11",
    title: "AI/ML",
    description:
      "AI and machine learning solutions using technologies such as Natural Language Processing to build intelligent systems.",
    icon: Brain,
  },
  {
    number: "12",
    title: "Career Counselling",
    description:
      "Career counselling services designed to support your career development process.",
    icon: GraduationCap,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-red-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-600">
            <span className="h-2 w-2 rounded-full bg-red-600" />
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
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/50"
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-400 transition-colors duration-300 group-hover:text-red-300">
                    {service.number}
                  </span>

                  <div className="rounded-xl bg-red-50 p-3 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-10">
                  <h3 className="text-2xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-red-600">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* Bottom arrow */}
                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-semibold text-slate-500 transition-colors duration-300 group-hover:text-red-600">
                    Explore service
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                {/* Hover decoration */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-red-100/60 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/30 sm:flex-row sm:items-center">
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
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
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