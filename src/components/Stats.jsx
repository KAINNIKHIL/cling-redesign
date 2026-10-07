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
              className="px-4 text-center md:px-8"
            >
              <p className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm font-medium text-slate-500 sm:text-base">
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