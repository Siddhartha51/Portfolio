import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Projects",
      to: "/projects",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  const connect = [
    {
      icon: FaGithub,
      path: "https://github.com/Siddhartha51",
    },
    {
      icon: FaLinkedin,
      path: "https://www.linkedin.com/in/siddhartha-thapa-93084b198/",
    },
    {
      icon: FaInstagram,
      path: "https://instagram.com",
    },
    {
      icon: FaFacebook,
      path: "https://www.facebook.com/siddhartha.thapa.712",
    },
  ];
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold ">
            Sid<span className="text-purple-500">Dev</span>
          </h1>
          <p className="max-w-xs text-gray-400">
            Building modern, responsive and high performance web applications.
          </p>
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-bold mb-3">Quick Links</h1>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="text-center">
          <h1 className="font-bold text-2xl mb-3">Connect</h1>
          <div className="flex gap-3">
            {connect.map((logo, index) => (
              <a
                key={index}
                href={logo.path}
                target="_blank"
                className="cursor-pointer"
              >
                {" "}
                <logo.icon size={25} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
