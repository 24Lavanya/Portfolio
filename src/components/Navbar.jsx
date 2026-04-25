import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about-page" },
  { label: "Skills", href: "#skills-page" },
  { label: "Projects", href: "#project-page" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("menu-open");
  };

  const toggleMenu = () => {
    setIsOpen((current) => {
      document.body.classList.toggle("menu-open", !current);
      return !current;
    });
  };

  return (
    <nav className="nav relative z-40 flex items-center justify-between px-5 py-4 text-base md:px-10 md:text-xl">
      <div className="logo">
        <Logo id="first" />
        <Logo />
      </div>
      <div
        className={`fixed left-4 right-4 top-20 z-30 rounded-3xl border border-black/10 bg-white/90 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-300 md:pointer-events-auto md:static md:z-auto md:translate-y-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none md:backdrop-blur-none ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-[4vw]">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-lg font-medium text-zinc-800 transition hover:bg-zinc-100 hover:text-[#385A64] md:rounded-none md:px-0 md:py-0 md:text-xl md:hover:bg-transparent"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              className="mt-2 block rounded-2xl bg-[#385A64] px-4 py-3 text-center text-lg font-medium text-white transition hover:bg-[#416e7b] md:mt-0 md:rounded-md md:px-3 md:py-2 md:text-xl"
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </Button>
          </li>
        </ul>
      </div>
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/80 text-2xl text-zinc-900 shadow-sm backdrop-blur transition hover:bg-zinc-950 hover:text-white md:hidden"
        type="button"
        onClick={toggleMenu}
      >
        <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"} />
      </button>
    </nav>
  );
}
