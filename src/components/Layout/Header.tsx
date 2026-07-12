import { useState } from "react";
import { HiBars3, HiHome, HiMoon, HiSun, HiXMark } from "react-icons/hi2";
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
            <img src="/logos/aln-icon.svg" alt="Logo" className="h-10 md:h-12 relative z-10 transition-transform duration-500 group-hover:scale-105" />
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
            <HiHome size={20} />
          </NavLink>

          <NavLink
            to="/activism"
            className={({ isActive }) =>
              `font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full transition-all duration-300 ${isActive ? "bg-white/10 text-white shadow-glow-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
            }
          >
            Activism
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full transition-all duration-300 ${isActive ? "bg-white/10 text-white shadow-glow-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
            }
          >
            Resources
          </NavLink>

          <NavLink
            to="/who-are-we"
            className={({ isActive }) =>
              `font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full transition-all duration-300 ${isActive ? "bg-white/10 text-white shadow-glow-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
            }
          >
            Who Are We?
          </NavLink>

          <button
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
              });
            }}
            className="font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full transition-all duration-300 text-white/70 hover:text-white hover:bg-white/5"
          >
            Contact Us
          </button>

          <div className="pl-4 flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 group relative"
              aria-label="Toggle Theme"
            >
              <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              {theme === 'dark' ? <HiSun size={20} className="relative z-10" /> : <HiMoon size={20} className="relative z-10" />}
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
              <HiHome size={20} />
            </NavLink>
            <NavLink
              to="/activism"
              className={({ isActive }) =>
                `font-bold uppercase tracking-widest text-sm py-3 px-4 rounded-2xl transition-colors ${isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
              }
              onClick={closeMenu}
            >
              Activism
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `font-bold uppercase tracking-widest text-sm py-3 px-4 rounded-2xl transition-colors ${isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
              }
              onClick={closeMenu}
            >
              Resources
            </NavLink>

            <NavLink
              to="/who-are-we"
              className={({ isActive }) =>
                `font-bold uppercase tracking-widest text-sm py-3 px-4 rounded-2xl transition-colors ${isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
              }
              onClick={closeMenu}
            >
              Who Are We?
            </NavLink>

            <button
              onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth'
                });
                closeMenu();
              }}
              className="font-bold uppercase tracking-widest text-sm py-3 px-4 rounded-2xl transition-colors text-white/70 hover:text-white hover:bg-white/5"
            >
              Contact Us
            </button>

            <NavLink
              to="/support"
              className="btn btn-primary w-full text-center mt-4"
              onClick={closeMenu}
            >
              Join Us!
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
