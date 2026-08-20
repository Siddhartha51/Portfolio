import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute("id");
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-950/90 backdrop-blur-md p-4 z-50 border-b border-gray-800 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold cursor-pointer">
            <a href="#home">
              Sid<span className="text-purple-500">Dev</span>
            </a>
          </h1>

          <ul className="flex space-x-6 hidden md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-bold transition-colors ${
                      isActive
                        ? "text-purple-500 border-b-2 border-purple-500 pb-1"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="../src/assets/Siddhartha_Thapa_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-bold transition-colors"
          >
            View CV
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
