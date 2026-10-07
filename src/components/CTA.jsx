import { Mail, MapPin, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact information */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
              Contact Us
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Let's start a
              <span className="block text-red-600">
                conversation.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-slate-600">
              Have an idea, project, or requirement? Send us a message and
              let's discuss how Cling InfoTech can help.
            </p>

            <div className="mt-10 space-y-6">

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-semibold text-slate-950">
                    Head Office — Noida
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    130, 131, 132, 2nd Floor, Wave Galleria,
                    Wave City, NH-24, Noida, Uttar Pradesh - 201015
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-semibold text-slate-950">
                    Phone
                  </p>

                  <a
                    href="tel:+918264469132"
                    className="mt-1 block text-sm text-slate-500 transition-colors hover:text-red-600"
                  >
                    +91 8264469132
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-semibold text-slate-950">
                    Email
                  </p>

                  <a
                    href="mailto:info@clinginfotech.com"
                    className="mt-1 block text-sm text-slate-500 transition-colors hover:text-red-600"
                  >
                    info@clinginfotech.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

            <h3 className="text-2xl font-bold text-slate-950">
              Send us a message
            </h3>

            <form className="mt-8 space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />

                <input
                  type="text"
                  placeholder="Company"
                  className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />
              </div>

              <textarea
                rows="6"
                placeholder="Message"
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-red-600 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;