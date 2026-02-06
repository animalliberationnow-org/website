import { HiEnvelope, HiHeart, HiMapPin, HiPhone } from "react-icons/hi2";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-secondary">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <HiHeart className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">ALN!</span>
            </Link>
            <p className="mb-6">
              Animal Liberation Now! is dedicated to ending animal exploitation
              through activism, education, and direct action.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/animalliberationnowofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-secondary hover:text-accent transition-colors"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="https://x.com/alnofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="text-secondary hover:text-accent transition-colors"
              >
                <SiX size={20} />
              </a>
              <a
                href="https://www.instagram.com/alnchennai?igsh=Zmp0cDE2Mzlqdmt2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-secondary hover:text-accent transition-colors"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-secondary hover:text-accent transition-colors"
              >
                <SiYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="hover:text-accent transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Get Involved</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/support"
                  className="hover:text-accent transition-colors"
                >
                  Join us!
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start mb-4">
                <HiMapPin className="mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Animal Liberation Now!, Chennai</span>
              </div>
              <div className="flex items-center mb-4">
                <HiPhone className="mr-2 h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+123456789"
                  className="hover:text-accent transition-colors"
                >
                  +91 8870450636
                </a>
              </div>
              <div className="flex items-center">
                <HiEnvelope className="mr-2 h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@animalliberationnow.org"
                  className="hover:text-accent transition-colors"
                >
                  contact@animalliberationnow.org
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row md:justify-end items-center text-center md:text-right w-full">
          <p>
            &copy; {currentYear} Animal Liberation Now!. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
