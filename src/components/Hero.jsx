import {
  ArrowRight,
  Code2,
  Smartphone,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
        
        {/* Left content */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            End-to-End IT Solutions
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Making Your
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Ideas Happen!
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            We build digital solutions that help businesses turn ideas into
            meaningful products — from websites and mobile applications to
            custom platforms and enterprise solutions.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
            >
              Start a Project
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-blue-300 hover:text-blue-600"
            >
              Explore Our Work
            </a>
          </div>

          {/* Small trust points */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-blue-600" />
              Web Development
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-blue-600" />
              App Development
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-blue-600" />
              AI / ML
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto h-[480px] w-full max-w-xl lg:h-[560px]">
          
          {/* Main glass card */}
          <div className="absolute left-1/2 top-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-blue-100/50 backdrop-blur-xl sm:p-8">
            
            {/* Browser top */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="h-2 w-24 rounded-full bg-slate-200" />
            </div>

            {/* Fake dashboard */}
            <div className="space-y-5">
              <div className="h-5 w-32 rounded-full bg-slate-900" />
              <div className="h-3 w-56 rounded-full bg-slate-200" />

              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="h-28 rounded-2xl bg-blue-50 p-4">
                  <div className="h-8 w-8 rounded-lg bg-blue-600" />
                  <div className="mt-5 h-2 w-20 rounded-full bg-blue-200" />
                </div>

                <div className="h-28 rounded-2xl bg-violet-50 p-4">
                  <div className="h-8 w-8 rounded-lg bg-violet-600" />
                  <div className="mt-5 h-2 w-20 rounded-full bg-violet-200" />
                </div>
              </div>

              <div className="h-32 rounded-2xl bg-slate-50 p-5">
                <div className="flex items-end gap-3">
                  <div className="h-12 w-8 rounded-t-lg bg-blue-300" />
                  <div className="h-20 w-8 rounded-t-lg bg-blue-500" />
                  <div className="h-16 w-8 rounded-t-lg bg-indigo-500" />
                  <div className="h-28 w-8 rounded-t-lg bg-violet-500" />
                  <div className="h-24 w-8 rounded-t-lg bg-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Web card */}
          <div className="absolute left-0 top-20 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/50">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Code2 size={22} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Web Development
              </p>
              <p className="text-xs text-slate-500">Modern digital experiences</p>
            </div>
          </div>

          {/* Floating App card */}
          <div className="absolute bottom-20 right-0 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/50">
            <div className="rounded-xl bg-violet-100 p-3 text-violet-600">
              <Smartphone size={22} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                App Development
              </p>
              <p className="text-xs text-slate-500">Built for real users</p>
            </div>
          </div>

          {/* AI floating badge */}
          <div className="absolute right-8 top-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-xl shadow-blue-100/50">
            <Sparkles className="text-blue-600" size={25} />
          </div>

          {/* Decorative circles */}
          <div className="absolute bottom-5 left-16 h-10 w-10 rounded-full border-4 border-blue-200" />
          <div className="absolute right-20 bottom-5 h-4 w-4 rounded-full bg-violet-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;