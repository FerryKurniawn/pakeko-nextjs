import useScrollSpy from "@/hooks/useScrollSpy";

const Navbar = () => {
  const sections = ["home", "about", "products", "contact"];
  const activeId = useScrollSpy(sections);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Products", href: "/#products" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="flex justify-between items-center py-4 px-6">
      <div className="font-bold text-2xl text-blue-600">EKO</div>
      <div className="flex gap-6">
        {navLinks.map((link) => {
          const hash = link.href.split("#")[1]; // ambil "home", "about" dll
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
    </nav>
  );
};

export default Navbar;
