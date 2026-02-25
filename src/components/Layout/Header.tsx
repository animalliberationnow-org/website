import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md pt-6 pb-5 transition-all duration-300">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" onClick={closeMenu}>
          <img src="/aln-icon.svg" alt="Logo" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-accent" : "text-white"}`
            }
          >
            Home
          </NavLink>
          {/* <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-accent" : "text-white"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-accent" : "text-white"}`
            }
          >
            Calendar
          </NavLink> */}
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-accent" : "text-white"}`
            }
          >
            FAQs
          </NavLink>
          <NavLink to="/support" className="btn btn-primary">
            Join Us!
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium py-2 hover:text-accent transition-colors ${isActive ? "text-accent" : ""
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium py-2 hover:text-accent transition-colors ${isActive ? "text-accent" : ""
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `font-medium py-2 hover:text-accent transition-colors ${isActive ? "text-accent" : ""
                }`
              }
              onClick={closeMenu}
            >
              Calendar
            </NavLink> */}
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `font-medium py-2 hover:text-accent transition-colors ${isActive ? "text-accent" : ""
                }`
              }
              onClick={closeMenu}
            >
              FAQs
            </NavLink>
            <NavLink
              to="/support"
              className="btn btn-primary w-full text-center"
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
