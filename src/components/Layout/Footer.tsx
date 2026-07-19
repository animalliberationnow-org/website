import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/5">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <div className="mb-6">
              <img src="/logos/animal-liberation-now-coloured-logo-dark.svg" alt="ALN" className="h-16 md:h-20 w-auto object-contain" />
            </div>
            <div className="flex space-x-4 mt-auto">
              <a
                href="https://www.facebook.com/animalliberationnowofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/70 hover:text-accent transition-colorshover:shadow-neon-hover"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="https://x.com/alnofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="text-white/70 hover:text-accent transition-colors hover:shadow-neon-hover"
              >
                <SiX size={20} />
              </a>
              <a
                href="https://www.instagram.com/animalliberationnow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-accent transition-colors hover:shadow-neon-hover"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/70 hover:text-accent transition-colors hover:shadow-neon-hover"
              >
                <SiYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/70 hover:text-white hover:bg-accent hover:shadow-neon-hover transition-all duration-300 px-3 py-1.5 rounded-full inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-white/70 hover:text-white hover:bg-accent hover:shadow-neon-hover transition-all duration-300 px-3 py-1.5 rounded-full inline-block"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Get Involved</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/activism"
                  className="text-white/70 hover:text-white hover:bg-accent hover:shadow-neon-hover transition-all duration-300 px-3 py-1.5 rounded-full inline-block"
                >
                  Activism
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-white/70 hover:text-white hover:bg-accent hover:shadow-neon-hover transition-all duration-300 px-3 py-1.5 rounded-full inline-block"
                >
                  Join us!
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <address className="not-italic text-white/70">
              <div className="flex items-start mb-4">
                <HiMapPin className="mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>A Global Network</span>
              </div>
              {/* <div className="flex items-center mb-4">
                <HiPhone className="mr-2 h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+123456789"
                  className="hover:text-accent transition-colors"
                >
                  +91 8870450636
                </a>
              </div> */}
              <div className="flex items-center">
                <HiEnvelope className="mr-2 h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@animalliberationnow.org"
                  className="text-white/70 hover:text-white hover:bg-accent hover:shadow-neon-hover transition-all duration-300 px-3 py-1.5 rounded-full inline-block"
                >
                  contact@animalliberationnow.org
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row md:justify-end items-center text-center md:text-right w-full">
          <p className="text-white/70">
            &copy; {currentYear} Animal Liberation Now!. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
