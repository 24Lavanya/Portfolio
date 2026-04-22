import { useState } from "react";
import Button from "./Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about-page" },
  { label: "Skills", href: "#skills-page" },
  { label: "Projects", href: "#project-page" },
  { label: "Funzone", href: "#funzone-page" },
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
    <nav className="nav flex justify-between p-5 text-xl">
      <div className="logo">
        <img
          id="first"
          src="./Images/logo.png"
          alt="Logo"
        />

        <img src="./Images/logo.png" alt="Logo" />
      </div>
      <div
        className={`nav-links md:static md:min-h-fit absolute z-10 md:w-auto min-h-[70vh] left-0 w-full flex items-center md:justify-center justify-between px-5 bg-zinc-100 md:bg-transparent ${
          isOpen ? "show-menu" : ""
        }`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mb-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="hover:text-[#416e7b]"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              className="bg-[#385A64] text-white hover:bg-[#416e7b] px-1 py-1 rounded-md"
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </Button>
          </li>
        </ul>
      </div>
      <button
        aria-label="Open menu"
        className={`icon cursor-pointer text-2xl md:hidden absolute right-10 z-20 text-black ${isOpen ? "hidden" : ""}`}
        type="button"
        onClick={toggleMenu}
      >
        <i className="ri-menu-line" />
      </button>
      <button
        aria-label="Close menu"
        className={`close cursor-pointer text-2xl md:hidden absolute right-10 z-20 text-red ${isOpen ? "" : "hidden"}`}
        type="button"
        onClick={toggleMenu}
      >
        <i className="ri-close-line" />
      </button>
    </nav>
  );
}
