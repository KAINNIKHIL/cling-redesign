import { ArrowUpRight, Target, Eye, TrendingUp } from "lucide-react";

const journey = [
  {
    year: "2019",
    title: "Foundation",
    description:
      "A year of foundational growth and learning, focused on building a strong foundation and establishing our identity.",
  },
  {
    year: "2020",
    title: "Solidifying Our Presence",
    description:
      "We diversified our services while remaining committed to quality and customer satisfaction.",
  },
  {
    year: "2021",
    title: "Gaining Momentum",
    description:
      "We expanded our client base and embraced new technologies and methodologies.",
  },
  {
    year: "2022",
    title: "A Milestone Year",
    description:
      "We grew into a matured organization, taking on ambitious projects and delivering greater value.",
  },
];

const OurStory = () => {
  return (
    <section id="story" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Our Story
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            A journey built around
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              technology and innovation.
            </span>
          </h2>
        </div>

        {/* Story */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

          {/* Main story */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <p className="text-lg leading-8 text-slate-700">
              We are a company with multifarious IT services like ERPs,
              Websites, App Development, Support, Innovations, Projects,
              Ideas.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Innovations At Its best, is what we believe in. We understand
              not only customers well, but also the industry at large. We
              majorly focus to enhance skills and growth of individual.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Our diverse team of professionals shares a passion for online
              education. We provide consistent and captivating learning
              experience across desktops, tablets and smartphone.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
            >
              Let's Talk
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Vision / Mission */}
          <div className="space-y-5">

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              
              <h3 className="mt-6 text-xl font-bold text-slate-950">
                Our Vision
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                At Cling, our goal is to deliver premier web design,
                development, and marketing solutions to our clients,
                fostering their profitable online growth while expanding
                our roster of satisfied clients.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                We are dedicated to enhancing the quality of our work,
                customer service excellence, technology integration,
                dynamic innovation, and steadfast commitment.
              </p>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl shadow-slate-300/30">
              

              <h3 className="mt-6 text-xl font-bold">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                We recognize the significance of staying at the forefront
                in today's swiftly changing digital environment.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                We consistently allocate resources to enhance our
                personnel, refine our processes, and embrace cutting-edge
                technologies to deliver top-notch services to our clients.
              </p>
            </div>

          </div>
        </div>

        {/* Journey */}
        <div className="mt-24">

          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Our Journey
              </p>

              <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A journey as dynamic as us.
              </h3>
            </div>

            
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item) => (
              <div
                key={item.year}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40"
              >
                <p className="text-3xl font-bold text-blue-600">
                  {item.year}
                </p>

                <h4 className="mt-5 text-lg font-bold text-slate-950">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;