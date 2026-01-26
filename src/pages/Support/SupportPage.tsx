import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const SupportPage = () => {

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
          <h2 className="text-3xl font-bold mb-6 text-center">
            Volunteer Application
          </h2>
          <div className="w-full min-h-screen">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSefVf3C94DnroEZcT-duGqLYl77p0d0i9P_spc60p3WhwnLjA/viewform?embedded=true"
              width="100%"
              className="border-0 w-full h-full min-h-screen"
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
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Spread the Word</h2>
          <p className="text-lg mb-8">
            Help amplify our message by sharing our content and mission with
            your network.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://www.facebook.com/animalliberationnowofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-black hover:text-red-600 transition-colors"
            >
              <SiFacebook size={20} />
            </a>
            <a
              href="https://x.com/alnofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="text-black hover:text-red-600 transition-colors"
            >
              <SiX size={20} />
            </a>
            <a
              href="https://www.instagram.com/alnchennai?igsh=Zmp0cDE2Mzlqdmt2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black hover:text-red-600 transition-colors"
            >
              <SiInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-black hover:text-red-600 transition-colors"
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
