import { Link } from "react-router-dom";
import churchLogo from "../assets/church-logo.png"; // ✅ make sure the path is correct

function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact */}
        <div>
          <img src={churchLogo} alt="Logo" className="w-28 mb-4" />
          <h3 className="text-lg font-semibold mb-2">CONTACT</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: Contact@Trccc.Org</li>
            <li>Phone: +234 812 345 6789</li>
            <li>Location: 25 Grace Avenue, Lekki, Lagos, Nigeria</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">QUICK LINKS</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/who-we-are" className="text-pink-600 font-medium">
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/livestream" className="hover:text-pink-500">
                Livestream
              </Link>
            </li>
            <li>
              <Link to="/empire" className="hover:text-pink-500">
                Empires (Branches)
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-pink-500">
                Events
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-pink-500">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/sinners" className="hover:text-pink-500">
                Salvation
              </Link>
            </li>
            <li>
              <Link to="/giving" className="hover:text-pink-500">
                Giving
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">FOLLOW US</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                X (Formally Knows As Twitter)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 py-4 text-center">
        <p className="text-xs">
          © 2025 The Risen Christ Christian Centre. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
