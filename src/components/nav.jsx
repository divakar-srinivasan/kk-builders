import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 h-30 w-full px-4 py-2 z-50 flex justify-between items-center transition-all duration-300 shadow-lg`}>
      {/* Left: Mobile View (Hamburger Menu & Logo) */}
      <div className="flex items-center space-x-3 md:space-x-6">
        <button onClick={toggleMenu} className="md:hidden text-3xl focus:outline-none">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <img 
          src="/kk.png" 
          alt="Logo" 
          className={`h-24 sm:h-20 md:h-24 lg:h-40 object-contain transition-all duration-300 ${menuOpen ? "opacity-80 scale-90" : ""}`}
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-25 text-lg font-semibold">
        {["Home", "Project", "About", "Contact"].map((item, index) => (
          <li key={index}>
            <Link 
              to={`/${item.toLowerCase()}`} 
              onClick={() => item === "Home" && (window.location.href = "/")} 
              className={`relative transition-all duration-300 group ${
                isScrolled || menuOpen ? "text-black" : "text-gray-900"
              }`}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-black/90 p-4 absolute top-full left-0 w-full transition-all duration-300">
          {["Home", "Project", "About", "Contact"].map((item, index) => (
            <li key={index} className="py-2 border-b border-gray-700">
              <Link 
                to={`/${item.toLowerCase()}`} 
                onClick={() => {
                  if (item === "Home") window.location.href = "/";
                  setMenuOpen(false);
                }} 
                className="relative text-white transition-all duration-300 group block"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
