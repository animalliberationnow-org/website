import { useState } from "react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const SupportPage = () => {
  const [formLoaded, setFormLoaded] = useState(false);

  return (
    <>
      <Hero
        title="Join the activism!"
        subtitle="Whether you want to volunteer, support, or simply learn more about animal liberation, we have a place for you in our movement."
        backgroundImage="/images/heroes/support-articles-hero.jpg"
      />

      {/* Volunteer Form */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-text-main">
            Volunteer Application
          </h2>
          <div className="w-full h-[1400px] bg-primary-light rounded-3xl shadow-glow-white overflow-hidden border border-glass-border relative">
            {/* Loading skeleton */}
            {!formLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-primary-light">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-text-muted font-bold uppercase tracking-widest text-sm">Loading Form...</p>
              </div>
            )}
            <iframe
              src="https://docs.google.com/forms/d/1H8E2YbSypgE06IaA4JPFzEDN8hc_F4pMG7WOlHKyDCM/viewform?embedded=true"
              width="100%"
              height="1800"
              className={`border-0 w-full h-full transition-opacity duration-500 ${formLoaded ? 'opacity-100' : 'opacity-0'}`}
              title="Volunteer Application Form"
              loading="eager"
              onLoad={() => setFormLoaded(true)}
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </Section>

      {/* Other Ways to Support */}
      {/* <Section
        title="Other Ways to Support"
        subtitle="There are many ways to support our mission."
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-primary-light p-8 rounded-lg">
            <HiUsers className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-3">Volunteer</h3>
            <p className="mb-6">
              Join our volunteer program and contribute your time and skills to
              animal liberation. We have opportunities for all levels of
              commitment.
            </p>
            <a href="#volunteer-form" className="btn btn-primary">
              Volunteer With Us
            </a>
          </div>

          <div className="bg-primary-light p-8 rounded-lg">
            <HiCalendar className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-3">Attend Events</h3>
            <p className="mb-6">
              Participate in protests, workshops, and fundraising events. Your
              presence helps amplify our message and builds community.
            </p>
            <a href="/calendar" className="btn btn-primary">
              View Calendar
            </a>
          </div>
        </div>
      </Section> */}


      {/* Social Sharing */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Spread the Word</h2>
          <p className="text-lg mb-8">
            Help amplify our message by sharing our content and mission with
            your network.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.facebook.com/animalliberationnowofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 rounded-full bg-text-main/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300"
            >
              <SiFacebook size={20} />
            </a>
            <a
              href="https://x.com/alnofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="w-12 h-12 rounded-full bg-text-main/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300"
            >
              <SiX size={20} />
            </a>
            <a
              href="https://www.instagram.com/animalliberationnow/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full bg-text-main/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300"
            >
              <SiInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-12 h-12 rounded-full bg-text-main/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white hover:shadow-neon transition-all duration-300"
            >
              <SiYoutube size={20} />
            </a>
          </div>

        </div>
      </Section>
    </>
  );
};

export default SupportPage;
