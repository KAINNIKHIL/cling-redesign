import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const dropdowns = {
  Services: [
    { label: "Our Services", href: "#tech-focus" },
    { label: "What We Do", href: "#services" },
  ],

  Solutions: [
    { label: "Our Products", href: "#work" },
    { label: "Payment Gateway", href: "#work" },
    { label: "Domains We Serve", href: "#global" },
  ],

  About: [
    { label: "Me & Team", href: "#leadership" },
    { label: "Achievements", href: "#stats" },
    { label: "Career", href: "#contact" },
  ],
};

const directLinks = [
  { label: "Approach", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Clients", href: "#global" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileDropdown(null);
    setMobileOpen(false);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((current) =>
      current === name ? null : name
    );
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown((current) =>
      current === name ? null : name
    );
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#"
          onClick={closeAll}
          className="flex items-center"
          aria-label="Cling InfoTech home"
        >
          <img
            src="/assets/cling-logo.png"
            alt="Cling InfoTech"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          ref={dropdownRef}
          className="hidden items-center gap-7 lg:flex"
        >
          {/* Services / Solutions / About */}
          {Object.entries(dropdowns).map(([name, items]) => (
            <div key={name} className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown(name)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  openDropdown === name
                    ? "text-red-600"
                    : "text-slate-600 hover:text-red-600"
                }`}
              >
                {name}

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    openDropdown === name ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {openDropdown === name && (
                <div className="absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
                  <div className="mb-1 px-3 py-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-600">
                      {name}
                    </p>
                  </div>

                  {items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-red-50 hover:text-red-600"
                    >
                      <span>{item.label}</span>

                      <ChevronRight
                        size={16}
                        className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-red-600"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Direct links */}
          {directLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-red-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 lg:flex"
        >
          Let's Talk

          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg p-2 text-slate-900 transition-colors hover:bg-red-50 hover:text-red-600 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[900px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">

          {/* Dropdown groups */}
          {Object.entries(dropdowns).map(([name, items]) => (
            <div key={name} className="border-b border-slate-100">
              <button
                type="button"
                onClick={() => toggleMobileDropdown(name)}
                className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-slate-700"
              >
                {name}

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    mobileDropdown === name ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdown === name
                    ? "max-h-96 pb-3 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="rounded-xl bg-slate-50 p-2">
                  {items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={closeAll}
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600"
                    >
                      {item.label}
                      <ChevronRight size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Direct links */}
          {directLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeAll}
              className="border-b border-slate-100 py-4 text-base font-medium text-slate-700 transition-colors hover:text-red-600"
            >
              {item.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={closeAll}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;