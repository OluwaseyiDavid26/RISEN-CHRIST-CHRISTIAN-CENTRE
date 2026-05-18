import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons
import logo from "../assets/church-logo.png";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Empire", path: "/empire" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg py-3 border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-white/10 p-1.5 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-all">
             <img src={logo} alt="Logo" className="w-[50px] h-[50px] object-contain" />
          </div>
          <span className="text-white font-playfair font-bold text-xl hidden sm:block tracking-widest uppercase group-hover:text-[var(--color-gold-400)] transition-colors duration-300">
            Risen Christ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-[var(--color-gold-400)] transition-colors duration-300 relative group ${
                location.pathname === link.path ? "text-[var(--color-gold-500)]" : ""
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div layoutId="underline" className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-gold-500)]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-6 items-center">
          <Link to="/sinners" className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-300 hover:text-[var(--color-gold-400)] transition-colors">
            Sinner Prayer
          </Link>
          <Link
            to="/giving"
            className="border border-[var(--color-gold-500)] text-[var(--color-gold-500)] px-7 py-2.5 rounded-full hover:bg-[var(--color-gold-500)] hover:text-[#0a0a0a] transition-all duration-300 text-xs font-bold uppercase tracking-[0.15em]"
          >
            Giving
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white p-2" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-white/5 overflow-y-auto"
          >
            <div className="flex flex-col items-center py-12 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium uppercase tracking-[0.2em] ${
                    location.pathname === link.path ? "text-[var(--color-gold-500)]" : "text-white"
                  } hover:text-[var(--color-gold-400)] transition`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-12 h-[1px] bg-white/20 my-4"></div>
              <Link
                to="/sinners"
                className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400 hover:text-[var(--color-gold-400)] transition"
                onClick={toggleMenu}
              >
                Sinner Prayer
              </Link>
              <Link
                to="/giving"
                className="bg-[var(--color-gold-500)] text-[#0a0a0a] px-10 py-3.5 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-gold-400)] transition mt-4"
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
