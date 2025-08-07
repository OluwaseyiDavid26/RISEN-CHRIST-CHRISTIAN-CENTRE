import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons
import logo from "../assets/church-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[70px] h-[60px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center gap-6 text-base font-semibold text-gray-800">
          <Link to="/" className="hover:text-pink-600 text-pink-600">
            Home
          </Link>
          <Link to="/who-we-are" className="hover:text-pink-600">
            Who We Are
          </Link>
          <Link to="/empire" className="hover:text-pink-600">
            Empire
          </Link>
          <Link to="/events" className="hover:text-pink-600">
            Events
          </Link>
          <Link to="/resources" className="hover:text-pink-600">
            Resources
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          <Link to="/sinners" className="text-gray-800 hover:text-pink-600">
            Sinner Prayer
          </Link>
          <Link
            to="/giving"
            className="border border-gray-800 text-gray-800 px-6 py-2 rounded-md hover:border-pink-600 hover:text-pink-600 transition duration-300"
          >
            Giving
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-800" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center bg-white shadow-md space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] py-6" : "max-h-0 py-0"
        }`}
      >
        <Link
          to="/"
          className="hover:text-pink-600 text-pink-600"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/who-we-are"
          className="hover:text-pink-600"
          onClick={toggleMenu}
        >
          Who We Are
        </Link>
        <Link to="/empire" className="hover:text-pink-600" onClick={toggleMenu}>
          Empire
        </Link>
        <Link to="/events" className="hover:text-pink-600" onClick={toggleMenu}>
          Events
        </Link>
        <Link
          to="/resources"
          className="hover:text-pink-600"
          onClick={toggleMenu}
        >
          Resources
        </Link>
        <Link
          to="/sinners"
          className="hover:text-pink-600"
          onClick={toggleMenu}
        >
          Sinner Prayer
        </Link>
        <Link
          to="/giving"
          className="border border-gray-800 text-gray-800 px-6 py-2 rounded-md hover:border-pink-600 hover:text-pink-600 transition duration-300"
          onClick={toggleMenu}
        >
          Giving
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
