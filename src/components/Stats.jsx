const stats = [
  {
    value: "32387122",
    label: "Lines of Code",
  },
  {
    value: "350+",
    label: "Happy Clients",
  },
  {
    value: "390+",
    label: "Projects Completed",
  },
  {
    value: "1500+",
    label: "Coffee With Clients",
  },
];

const Stats = () => {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-slate-200">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group px-4 text-center md:px-8"
            >
              {/* Number */}
              <p className="text-3xl font-bold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-red-600 sm:text-4xl">
                {stat.value}
              </p>

              {/* Small accent */}
              <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-red-600 transition-all duration-300 group-hover:w-12" />

              {/* Label */}
              <p className="mt-3 text-sm font-medium text-slate-500 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;