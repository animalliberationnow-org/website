import { Link } from "react-router-dom";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { SiInstagram, SiX, SiFacebook, SiYoutube } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden pt-20 border-t border-white/10">
      {/* Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-accent/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6 group inline-flex">
              <div className="relative">
                <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img src="/aln-icon.svg" alt="ALN Logo" className="h-12 relative z-10" />
              </div>
            </Link>
            <p className="text-white/70 mb-8 font-medium">
              We work to end Human Supremacy and Animal Exploitation through awareness, action, and advocacy.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300">
                <SiX className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300">
                <SiFacebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300">
                <SiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-white mb-6">Database</h4>
            <ul className="space-y-3 font-medium">
              <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/campaigns/farmed-animals" className="text-white/70 hover:text-accent transition-colors">Campaigns</Link></li>
              <li><Link to="/resources/go-vegan" className="text-white/70 hover:text-accent transition-colors">Resources</Link></li>
              <li><Link to="/faqs" className="text-white/70 hover:text-accent transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-white mb-6">Action</h4>
            <ul className="space-y-3 font-medium">
              <li><Link to="/support" className="text-white/70 hover:text-accent transition-colors">Join the Movement</Link></li>
              <li><Link to="/support" className="text-white/70 hover:text-accent transition-colors">Donate</Link></li>
              <li><Link to="/support" className="text-white/70 hover:text-accent transition-colors">Volunteer</Link></li>
              <li><Link to="/support" className="text-white/70 hover:text-accent transition-colors">Host an Event</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-white mb-6">Comms</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start">
                <HiMapPin className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-white/70">Global Network<br />Operating across India</span>
              </li>
              <li className="flex items-center">
                <HiEnvelope className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href="mailto:contact@animalliberationnow.org" className="text-white/70 hover:text-accent transition-colors truncate">contact@animalliberationnow.org</a>
              </li>
              <li className="flex items-center">
                <HiPhone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/70 hover:text-accent transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70 font-medium">
          <p>&copy; {currentYear} Animal Liberation Now! All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
