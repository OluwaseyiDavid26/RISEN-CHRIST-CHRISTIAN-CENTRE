import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import churchLogo from "../assets/church-logo.png";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Branches", path: "/empire" },
    { name: "Events", path: "/events" },
  ];

  const connectLinks = [
    { name: "Resources", path: "/resources" },
    { name: "Salvation", path: "/sinners" },
    { name: "Giving", path: "/giving" },
  ];

  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/thechristempireofficial", Icon: FaInstagram },
    { name: "YouTube", url: "https://www.youtube.com/@thechristempire9287", Icon: FaYoutube },
    { name: "X", url: "https://x.com/TheChristEmpire", Icon: FaXTwitter },
  ];

  return (
    <footer className="bg-white pt-20 pb-8 text-gray-600 relative overflow-hidden">
      {/* Visible gold top accent bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-gold-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6 focus-visible:rounded-lg focus-ring">
              <div className="flex items-center gap-3 group">
                <div className="bg-gray-50 p-2 rounded-xl border border-gray-100 group-hover:bg-gray-100 transition-all">
                   <img src={churchLogo} alt="Risen Christ Christian Centre Logo" className="w-[60px] h-[60px] object-contain" />
                </div>
                <div>
                  <h2 className="text-xl font-playfair font-bold text-gray-900 tracking-tight">
                    Risen Christ
                  </h2>
                  <p className="text-[10px] text-gold-500 tracking-widest uppercase font-semibold">
                    Christian Centre
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-sm font-light leading-relaxed mb-6 text-gray-500 max-w-xs">
              A place of divine encounter, spiritual renewal, and community love. Join us as we experience God's presence together.
            </p>
            <ul className="space-y-3 text-sm font-light text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span>25 Grace Avenue, Lekki, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-500 flex-shrink-0" />
                <span>+234 812 345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-500 flex-shrink-0" />
                <span>Contact@Trccc.Org</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-gray-900 font-semibold text-sm mb-6 pb-2 border-b border-gray-200 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-gold-500 transition-colors duration-300 flex items-center gap-2 group font-medium focus-visible:rounded focus-ring px-1 -ml-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-gold-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links & Socials */}
          <div className="md:col-span-3">
            <h3 className="text-gray-900 font-semibold text-sm mb-6 pb-2 border-b border-gray-200 inline-block">
              Connect
            </h3>
            <ul className="space-y-3 text-sm mb-8">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-gold-500 transition-colors duration-300 flex items-center gap-2 group font-medium focus-visible:rounded focus-ring px-1 -ml-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-gold-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-gray-900 font-semibold text-sm mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gold-400 hover:text-white transition-all duration-300 text-gray-700 focus-visible:rounded-full focus-ring"
                  aria-label={social.name}
                  title={social.name}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 tracking-wide font-medium">
          <p>
            &copy; {new Date().getFullYear()} The Risen Christ Christian Centre.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors focus-visible:rounded focus-ring px-1 -ml-1">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors focus-visible:rounded focus-ring px-1 -ml-1">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
