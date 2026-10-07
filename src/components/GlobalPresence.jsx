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
              {/* Countries */}
<div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
  {[
    {
      name: "India",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fflagcdn.com%2Fw320%2Fin.png&w=640&q=75",
    },
    {
      name: "Saudi Arabia",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fflagcdn.com%2Fw320%2Fsa.png&w=640&q=75",
    },
    {
      name: "South Africa",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fflagcdn.com%2Fw320%2Fza.png&w=640&q=75",
    },
    {
      name: "USA",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fflagcdn.com%2Fw320%2Fus.png&w=640&q=75",
    },
    {
      name: "Dubai",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fflagcdn.com%2Fw320%2Fae.png&w=640&q=75",
    },
    {
      name: "Australia",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-portfolio-video.s3.ap-south-1.amazonaws.com%2Fcountries%2F1777036162773-australia-flag-on-the-texture-cloth-modern-australian-flag-design-with-sleek-and-contemporary-elements-photo.jpg&w=640&q=75",
    },
    {
      name: "United Kingdom",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-portfolio-video.s3.ap-south-1.amazonaws.com%2Fcountries%2F1777037091432-uk.webp&w=640&q=75",
    },
    {
      name: "Singapore",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fflagcdn.com%2Fw320%2Fsg.png&w=640&q=75",
    },
    {
      name: "Ireland",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fflagcdn.com%2Fw320%2Fie.png&w=640&q=75",
    },
    {
      name: "Spain",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-portfolio-video.s3.ap-south-1.amazonaws.com%2Fcountries%2F1777037166863-spain.webp&w=640&q=75",
    },
    {
      name: "Mautitius",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-portfolio-video.s3.ap-south-1.amazonaws.com%2Fcountries%2F1777036087544-mauritious.webp&w=640&q=75",
    },
    {
      name: "Oman",
      flag: "https://clinginfotech.com/_next/image?url=https%3A%2F%2Fflagcdn.com%2Fw320%2Fom.png&w=640&q=75",
    },
    
  ].map((country) => (
    <div
      key={country.name}
      className="group rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
    >
      <div className="flex h-14 items-center justify-center overflow-hidden rounded-xl bg-white/10">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="mt-3 text-xs font-medium text-slate-300">
        {country.name}
      </p>
    </div>
  ))}
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
              <div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fepay-later-1760612413032.png&w=1080&q=75"
    alt="e pay later"
    className="max-h-10 w-auto object-contain"
  />
</div>
              <div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fapptrove-1760612415831.jpeg&w=1080&q=75"
    alt="apptrove"
    className="max-h-10 w-auto object-contain"
  />
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=%2Fassests%2Fclients%2Fjumpiefav2.png&w=1080&q=75"
    alt="jumpie"
    className="max-h-10 w-auto object-contain"
  />
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fskuad-1760612417294.jpeg&w=1080&q=75"
    alt="skuad"
    className="max-h-10 w-auto object-contain"
  />
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fforescribe-1760612416165.jpeg&w=1080&q=75"
    alt="forescribe"
    className="max-h-10 w-auto object-contain"
  />
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fpiaah-1760612416885.jpeg&w=1080&q=75"
    alt="PIAHH"
    className="max-h-10 w-auto object-contain"
  />
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=%2Fassests%2Fclients%2Fsscl-erp.jpeg&w=1080&q=75"
    alt="Se7ven Seas Lines"
    className="max-h-10 w-auto object-contain"
  />
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=%2Fassests%2Fclients%2Fsunshine.jpeg&w=1080&q=75"
    alt="The Sunshine"
    className="max-h-10 w-auto object-contain"
  />
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=%2Fassests%2Fclients%2Fdelhi-public-school.png&w=1080&q=75"
    alt="DIS"
    className="max-h-10 w-auto object-contain"
  />
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fwings-rehabilitation-1760612418801.png&w=1080&q=75"
    alt="Wings"
    className="max-h-10 w-auto object-contain"
  />
  
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fsagitta-1760612411988.jpeg&w=1080&q=75"
    alt="Sagitta"
    className="max-h-10 w-auto object-contain"
  />
  
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fmatrix-solutions-1760612411095.jpeg&w=1080&q=75"
    alt="Matrix"
    className="max-h-10 w-auto object-contain"
  />
  
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fparashar-1760612410064.png&w=1080&q=75"
    alt="Prashar"
    className="max-h-10 w-auto object-contain"
  />
  
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fmatchme-1760612408758.jpeg&w=1080&q=75"
    alt="MatchMe"
    className="max-h-10 w-auto object-contain"
  />
  
</div>
<div className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
  <img
    src="https://clinginfotech.com/_next/image?url=https%3A%2F%2Fcling-project.s3.ap-south-1.amazonaws.com%2Flogos%2Fminthr-1760612408304.png&w=1080&q=75"
    alt="MintHR"
    className="max-h-10 w-auto object-contain"
  />
  
</div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;