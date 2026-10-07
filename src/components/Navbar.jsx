import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#services" },
  { label: "Approach", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "AI & Innovation", href: "#innovation" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center"
          onClick={closeMobile}
          aria-label="Cling InfoTech home"
        >
          <img
            src="/src/assets/cling-logo.png"
            alt="Cling InfoTech"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
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
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMobile}
              className="border-b border-slate-100 py-4 text-base font-medium text-slate-700 transition-colors hover:text-red-600 last:border-0"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMobile}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
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