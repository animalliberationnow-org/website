import { useState, useEffect } from "react";
import { HiBars3, HiXMark, HiChevronDown, HiSun, HiMoon } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 mt-4 sm:px-6 lg:px-8 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5 shadow-glow-white ${scrolled ? 'px-6 py-3' : 'px-4 py-4 mt-2'}`}>
        <Link to="/" onClick={closeMenu} className="group flex items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img src="/aln-icon.svg" alt="Logo" className="h-10 md:h-12 relative z-10 transition-transform duration-500 group-hover:scale-105" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full transition-all duration-300 ${isActive ? "bg-white/10 text-white shadow-glow-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
            }
          >
            Home
          </NavLink>
          
          <div className="relative group py-2">
            <button className="font-bold uppercase tracking-widest text-xs text-white/70 group-hover:text-white group-hover:bg-white/5 px-4 py-2 rounded-full flex items-center transition-all duration-300">
              Campaigns <HiChevronDown className="ml-1 h-3 w-3" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="w-56 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/5 rounded-3xl p-2 shadow-glow-white">
                <NavLink to="/campaigns/farmed-animals" className="block px-4 py-3 text-sm font-bold text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all">Farmed Animals</NavLink>
                <NavLink to="/campaigns/marine-animals" className="block px-4 py-3 text-sm font-bold text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all">Marine Animals</NavLink>
                <NavLink to="/campaigns/street-outreach" className="block px-4 py-3 text-sm font-bold text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all">Street Outreach</NavLink>
                <NavLink to="/campaigns/legal-policy" className="block px-4 py-3 text-sm font-bold text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all">Legal & Policy</NavLink>
              </div>
            </div>
          </div>

          <div className="relative group py-2">
            <button className="font-bold uppercase tracking-widest text-xs text-white/70 group-hover:text-white group-hover:bg-white/5 px-4 py-2 rounded-full flex items-center transition-all duration-300">
              Resources <HiChevronDown className="ml-1 h-3 w-3" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="w-48 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/5 rounded-3xl p-2 shadow-glow-white">
                <NavLink to="/resources/go-vegan" className="block px-4 py-3 text-sm font-bold text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all">Go Vegan Hub</NavLink>
                <NavLink to="/resources/activists" className="block px-4 py-3 text-sm font-bold text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all">For Activists</NavLink>
              </div>
            </div>
          </div>

          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              `font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full transition-all duration-300 ${isActive ? "bg-white/10 text-white shadow-glow-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
            }
          >
            FAQs
          </NavLink>
          
          <div className="pl-4 flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <NavLink to="/support" className="btn btn-primary text-xs px-6 py-2 border-none">
              Join Us
            </NavLink>
          </div>
        </nav>

        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
          {/* Mobile Menu Button */}
          <button
            className="text-white/70 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-4 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 animate-fade-in shadow-glow-white">
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-bold uppercase tracking-widest text-sm py-3 px-4 rounded-2xl transition-colors ${isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            
            <div className="py-2 px-4">
              <span className="font-black text-white/40 text-xs uppercase tracking-[0.2em] mb-2 block">Campaigns</span>
              <div className="flex flex-col space-y-1 pl-4 border-l-2 border-white/10">
                <NavLink to="/campaigns/farmed-animals" className="font-bold text-sm text-white/70 py-2 hover:text-white transition-colors" onClick={closeMenu}>Farmed Animals</NavLink>
                <NavLink to="/campaigns/marine-animals" className="font-bold text-sm text-white/70 py-2 hover:text-white transition-colors" onClick={closeMenu}>Marine Animals</NavLink>
                <NavLink to="/campaigns/street-outreach" className="font-bold text-sm text-white/70 py-2 hover:text-white transition-colors" onClick={closeMenu}>Street Outreach</NavLink>
                <NavLink to="/campaigns/legal-policy" className="font-bold text-sm text-white/70 py-2 hover:text-white transition-colors" onClick={closeMenu}>Legal & Policy</NavLink>
              </div>
            </div>
            
            <div className="py-2 px-4">
              <span className="font-black text-white/40 text-xs uppercase tracking-[0.2em] mb-2 block">Resources</span>
              <div className="flex flex-col space-y-1 pl-4 border-l-2 border-white/10">
                <NavLink to="/resources/go-vegan" className="font-bold text-sm text-white/70 py-2 hover:text-white transition-colors" onClick={closeMenu}>Go Vegan Hub</NavLink>
                <NavLink to="/resources/activists" className="font-bold text-sm text-white/70 py-2 hover:text-white transition-colors" onClick={closeMenu}>For Activists</NavLink>
              </div>
            </div>

            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `font-bold uppercase tracking-widest text-sm py-3 px-4 rounded-2xl transition-colors ${isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
              }
              onClick={closeMenu}
            >
              FAQs
            </NavLink>
            <NavLink
              to="/support"
              className="btn btn-primary w-full text-center mt-4 rounded-full py-4"
              onClick={closeMenu}
            >
              Join Us
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
