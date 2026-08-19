import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto py-5 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold ">
            Sid<span className="text-purple-500">Dev</span>
          </Link>

          <nav className="flex space-x-8">
            {navLinks.map((links) => (
              <Link
                className="hover:text-purple-600"
                to={links.path}
                key={links.name}
              >
                {links.name}
              </Link>
            ))}
          </nav>
          <button className="bg-gray-600 p-3 rounded-xl border border-gray-800 hover:border-purple-600 cursor-pointer">
            Download CV
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
