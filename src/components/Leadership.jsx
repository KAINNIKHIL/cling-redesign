const leaders = [
  {
    name: "Ramesh Singh",
    role: "Co-founder & Director",
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2FTeam%2FRamesh-Singh.png&w=1080&q=75",
  },
  {
    name: "Ashi Gupta",
    role: "Managing Director",
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2FGroup%202517.png&w=1080&q=75",
  },
  {
    name: "Akshay Gupta",
    role: "CEO",
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2FTeam%2FAkshay2.jpg&w=1080&q=75",
  },
  {
    name: "Numukeh Tunkara",
    role: "Director",
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2FTeam%2FNumukeh-Tunkara.jpg&w=1080&q=75",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
            Leadership
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Meet our
            <span className="block text-red-600">
              leadership team.
            </span>
          </h2>
        </div>

        {/* Leaders */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/40"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-red-50">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle red overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-red-950/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-950 transition-colors duration-300 group-hover:text-red-600">
                  {leader.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {leader.role}
                </p>

                <div className="mt-4 h-1 w-8 rounded-full bg-red-600 transition-all duration-300 group-hover:w-14" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;