import { Link } from "react-router-dom";
import churchLogo from "../assets/church-logo.png";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-8 text-gray-600 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-3 group">
                <div className="bg-gray-50 p-2 rounded-xl border border-gray-100 group-hover:bg-gray-100 transition-all">
                   <img src={churchLogo} alt="Logo" className="w-[60px] h-[60px] object-contain" />
                </div>
                <div>
                  <h2 className="text-xl font-playfair font-bold text-gray-900 tracking-widest uppercase">
                    Risen Christ
                  </h2>
                  <p className="text-[10px] text-[#C5A017] tracking-[0.2em] uppercase font-semibold">
                    Christian Centre
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-sm font-light leading-relaxed mb-6 text-gray-500 font-outfit">
              A place of divine encounter, spiritual renewal, and community love. Join us as we experience God's presence together.
            </p>
            <ul className="space-y-3 text-sm font-light text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-[#C5A017] mt-1">📍</span>
                <span>25 Grace Avenue, Lekki, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C5A017]">📞</span>
                <span>+234 812 345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C5A017]">✉️</span>
                <span>Contact@Trccc.Org</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-gray-900 font-bold tracking-[0.15em] uppercase text-sm mb-6 pb-2 border-b border-gray-200 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Jesus", path: "/about-jesus" },
                { name: "Who We Are", path: "/who-we-are" },
                { name: "Branches", path: "/empire" },
                { name: "Events", path: "/events" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#D4AF37] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links & Socials */}
          <div className="md:col-span-3">
            <h3 className="text-gray-900 font-bold tracking-[0.15em] uppercase text-sm mb-6 pb-2 border-b border-gray-200 inline-block">
              Connect
            </h3>
            <ul className="space-y-3 text-sm mb-8">
              {[
                { name: "Resources", path: "/resources" },
                { name: "Salvation", path: "/sinners" },
                { name: "Giving", path: "/giving" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#D4AF37] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-gray-900 font-bold tracking-[0.15em] uppercase text-sm mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "YouTube", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-300 text-xs font-bold text-gray-700"
                  title={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-semibold">
          <p>
            © {new Date().getFullYear()} The Risen Christ Christian Centre.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
