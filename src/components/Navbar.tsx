import { useState } from "react";
import useScrollSpy from "@/hooks/useScrollSpy";
import { Menu, X } from "lucide-react"; // pastikan sudah install lucide-react

const Navbar = () => {
  const sections = ["home", "about", "products", "contact"];
  const activeId = useScrollSpy(sections);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Products", href: "/#products" },
    { label: "Contact", href: "/#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center py-4 px-6 relative">
      <div className="font-bold text-2xl text-blue-600">EKO</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => {
          const hash = link.href.split("#")[1];
          const isActive = activeId === hash;

          return (
            <a
              key={link.label}
              href={link.href}
              className={`text-gray-600 hover:text-blue-600 transition ${
                isActive ? "font-semibold underline text-blue-600" : ""
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden text-gray-700"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 z-50 md:hidden">
          {navLinks.map((link) => {
            const hash = link.href.split("#")[1];
            const isActive = activeId === hash;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-gray-600 hover:text-blue-600 transition ${
                  isActive ? "font-semibold underline text-blue-600" : ""
                }`}
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
