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
          <Link className="font-bold hover:text-purple-600" to="/">Siddhartha</Link>
        
        <nav className="flex space-x-8">
          {navLinks.map((links) => (
            <Link className="hover:text-purple-600" to={links.path} key={links.name}>
              {links.name}
            </Link>
          ))}
        </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
