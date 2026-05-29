import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/church-logo.png";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Jesus", path: "/about-jesus" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Empire", path: "/empire" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)] py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group focus-visible:rounded-lg focus-ring">
          <div className="bg-gray-900/5 p-1.5 rounded-full backdrop-blur-sm group-hover:bg-gray-900/10 transition-all border border-gray-900/5">
             <img src={logo} alt="Risen Christ Christian Centre Logo" className="w-[50px] h-[50px] object-contain" />
          </div>
          <span className="font-playfair font-bold text-xl hidden sm:block tracking-tight text-gray-900 group-hover:text-gold-400 transition-colors duration-300">
            Risen Christ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-1 transition-colors duration-300 focus-visible:rounded focus-ring ${
                  isActive ? "text-gold-500" : "hover:text-gold-500"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          <Link
            to="/sinners"
            className="text-sm font-medium text-gray-600 hover:text-gold-500 transition-colors focus-visible:rounded focus-ring px-2 py-1"
          >
            Sinner Prayer
          </Link>
          <Link
            to="/giving"
            className="btn-primary text-xs px-6 py-2.5"
          >
            Giving
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900 p-2 rounded-lg hover:bg-gray-100 active:scale-95 transition-all focus-visible:rounded focus-ring"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-[72px] bg-white/98 backdrop-blur-xl border-t border-gray-100 overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col items-center py-12 space-y-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? "text-gold-500" : "text-gray-900"
                  } hover:text-gold-400 transition-colors focus-visible:rounded focus-ring px-4 py-1`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-12 h-px bg-gray-200 my-2" />
              <Link
                to="/sinners"
                className="text-sm font-medium text-gray-600 hover:text-gold-500 transition-colors focus-visible:rounded focus-ring px-4 py-1"
                onClick={toggleMenu}
              >
                Sinner Prayer
              </Link>
              <Link
                to="/giving"
                className="btn-primary mt-2"
                onClick={toggleMenu}
              >
                Giving
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
