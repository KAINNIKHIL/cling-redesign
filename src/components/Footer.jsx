import { ArrowUpRight, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center">
              <img
                src="/src/assets/cling-logo.png"
                alt="Cling InfoTech"
                className="h-11 w-auto object-contain"
              />
            </a>

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Making your ideas happen through thoughtful technology,
              creative solutions, and digital experiences.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-400"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-400 transition-colors hover:text-red-400"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#process"
                  className="text-sm text-slate-400 transition-colors hover:text-red-400"
                >
                  Our Approach
                </a>
              </li>

              <li>
                <a
                  href="#work"
                  className="text-sm text-slate-400 transition-colors hover:text-red-400"
                >
                  Our Work
                </a>
              </li>

              <li>
                <a
                  href="#innovation"
                  className="text-sm text-slate-400 transition-colors hover:text-red-400"
                >
                  AI & Innovation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-400 transition-colors hover:text-red-400"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#work"
                  className="text-sm text-slate-400 transition-colors hover:text-red-400"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-400 transition-colors hover:text-red-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="#contact"
                className="flex items-start gap-3 text-sm leading-6 text-slate-400 transition-colors hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-red-400"
                />

                <span>
                  Contact Cling InfoTech
                  <br />
                  for your next project
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Cling Info Tech Works Private Limited.
            All rights reserved.
          </p>

          <div className="flex items-center gap-3">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-red-400 hover:bg-red-500/10 hover:text-red-400"
            >
              <FaFacebookF size={16} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-red-400 hover:bg-red-500/10 hover:text-red-400"
            >
              <FaInstagram size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-red-400 hover:bg-red-500/10 hover:text-red-400"
            >
              <FaLinkedinIn size={16} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;