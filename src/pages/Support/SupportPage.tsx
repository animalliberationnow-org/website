import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const SupportPage = () => {

  return (
    <>
      <Hero
        title="Join the activism!"
        subtitle="Whether you want to volunteer, support, or simply learn more about animal liberation, we have a place for you in our movement."
        backgroundImage="/heroes/support-articles-hero.webp"
      />

      {/* Volunteer Form */}
      <Section className="bg-gray-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Volunteer Application
          </h2>
          <div className="w-full h-[1400px] bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/1H8E2YbSypgE06IaA4JPFzEDN8hc_F4pMG7WOlHKyDCM/viewform?embedded=true"
              width="100%"
              height="1800"
              className="border-0 w-full h-full"
              title="Volunteer Application Form"
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
      <Section dark={false}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4">Connect With Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter drop-shadow-glow-white mb-6">
            Spread the Word
          </h3>
          <p className="text-lg mb-12 text-text-muted">
            Help amplify our message by sharing our content and mission with
            your network.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/animalliberationnowofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="glass-panel p-6 text-text-main hover:text-accent hover:shadow-neon transition-all duration-300 rounded-2xl"
            >
              <SiFacebook size={32} />
            </a>
            <a
              href="https://x.com/alnofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="glass-panel p-6 text-text-main hover:text-accent hover:shadow-neon transition-all duration-300 rounded-2xl"
            >
              <SiX size={32} />
            </a>
            <a
              href="https://www.instagram.com/animalliberationnow/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="glass-panel p-6 text-text-main hover:text-accent hover:shadow-neon transition-all duration-300 rounded-2xl"
            >
              <SiInstagram size={32} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="glass-panel p-6 text-text-main hover:text-accent hover:shadow-neon transition-all duration-300 rounded-2xl"
            >
              <SiYoutube size={32} />
            </a>
          </div>

        </div>
      </Section>
    </>
  );
};

export default SupportPage;
