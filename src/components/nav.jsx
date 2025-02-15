import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 z-50 flex justify-between items-center transition-all duration-500 ease-in-out
        ${isScrolled ? "bg-gray-500/40 shadow-lg" : "bg-gray-700/20 shadow-lg"}`}
    >
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-white transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <img src={logo} alt="Logo" className="h-14 object-contain transition-all duration-300 ease-in-out hover:scale-105" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        {["Home", "Project", "About", "Contact"].map((item, index) => (
          <li key={index}>
<Link
  to={`/${item.toLowerCase()}`}
  onClick={() => item === "Home" && (window.location.href = "/")}
  className="relative text-white text-lg font-medium transition-all duration-300 ease-in-out 
             hover:text-transparent bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text 
             group"
>
  {item}
  <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-sky-500 to-blue-800 
                   transition-all duration-500 ease-in-out group-hover:w-full shadow-md 
                   group-hover:shadow-blue-500/50"
  ></span>
</Link>

          </li>
        ))}
      </ul>

{/* Mobile Menu - Smooth Slide-in */}
<div
  className={`fixed inset-y-0 left-0 w-2/3 bg-gray-900/90 p-6 transform transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}`}
>
  <ul className="flex flex-col space-y-6">
    {["Home", "Project", "About", "Contact"].map((item, index) => (
      <li key={index} className="border-b border-gray-700 last:border-none pb-2">
        <Link
          to={`/${item.toLowerCase()}`}
          onClick={() => {
            if (item === "Home") window.location.href = "/";
            setMenuOpen(false);
          }}
          className="relative text-white text-lg font-medium transition-all duration-300 ease-in-out 
                     hover:text-transparent bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text 
                     group block"
        >
          {item}
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-sky-500 to-blue-800 
                           transition-all duration-500 ease-in-out group-hover:w-full shadow-md 
                           group-hover:shadow-blue-500/50"
          ></span>
        </Link>
      </li>
    ))}
  </ul>
</div>

    </nav>
  );
}

export default Navbar;
