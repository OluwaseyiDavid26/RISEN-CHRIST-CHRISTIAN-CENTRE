import { Link } from "react-router-dom";
import churchLogo from "../assets/church-logo.png";

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-8 text-gray-300 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-[var(--color-gold-500)]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-3 group">
                <div className="bg-white/5 p-2 rounded-xl backdrop-blur-sm group-hover:bg-white/10 transition-all border border-white/5">
                   <img src={churchLogo} alt="Logo" className="w-[60px] h-[60px] object-contain" />
                </div>
                <div>
                  <h2 className="text-xl font-playfair font-bold text-white tracking-widest uppercase">
                    Risen Christ
                  </h2>
                  <p className="text-[10px] text-[var(--color-gold-500)] tracking-[0.2em] uppercase font-medium">
                    Christian Centre
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-sm font-light leading-relaxed mb-6 text-gray-400">
              A place of divine encounter, spiritual renewal, and community love. Join us as we experience God's presence together.
            </p>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-gold-500)] mt-1">📍</span>
                <span>25 Grace Avenue, Lekki, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--color-gold-500)]">📞</span>
                <span>+234 812 345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--color-gold-500)]">✉️</span>
                <span>Contact@Trccc.Org</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-white font-semibold tracking-[0.15em] uppercase text-sm mb-6 pb-2 border-b border-white/10 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Who We Are", path: "/who-we-are" },
                { name: "Livestream", path: "/livestream" },
                { name: "Branches", path: "/empire" },
                { name: "Events", path: "/events" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[var(--color-gold-400)] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[var(--color-gold-400)] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links & Socials */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold tracking-[0.15em] uppercase text-sm mb-6 pb-2 border-b border-white/10 inline-block">
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
                    className="text-gray-400 hover:text-[var(--color-gold-400)] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[var(--color-gold-400)] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold tracking-[0.15em] uppercase text-sm mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "YouTube", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-gold-500)] hover:text-[#0a0a0a] transition-all duration-300 text-xs font-bold"
                  title={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-light">
          <p>
            © {new Date().getFullYear()} The Risen Christ Christian Centre.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
