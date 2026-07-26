import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-violet-500"
        >
          Mhangwani NK
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-300 transition hover:text-violet-400"
              >
                {link.name}
              </a>
            </li>
          ))}

          <a
            href="/resume.pdf"
            className="rounded-lg bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700"
          >
            Resume
          </a>
        </ul>

        {/* Mobile Button */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-6 py-4 text-slate-300 hover:bg-slate-900"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="block px-6 py-4 font-semibold text-violet-400"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;