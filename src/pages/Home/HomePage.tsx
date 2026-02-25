import { useState } from "react";
import { HiBookOpen, HiHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";
import { articles } from "../../data/articlesData";
import { events } from "../../data/eventsData";
import ArticleCard from "../Articles/ArticleCard";

const HomePage = () => {
  // Get upcoming events (first 3)
  const upcomingEvents = events.slice(0, 3);

  // Get latest articles (first 3)
  const latestArticles = articles.slice(0, 3);

  // For the mission statement animation
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Hero
        title="Animal Liberation Now!"
        subtitle="We envision a world where every animal lives free from cages, cruelty, and commodification. No creature should suffer for food, fashion, entertainment, or experiments.
Our fight is not for reform — it’s for revolution.
Join us, stand on the side of justice, and be the voice for those who are silenced."
        // buttonText="Join Our Movement"
        backgroundImage="/website-section/section1.jpg"
        centered={true}
      />

      {/* What is ALN */}
      <Section
      // title="What is Animal Liberation Now! ?"
      // subtitle="ALN! is dedicated to ending animal exploitation through activism, education, and direct action."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="mb-6">
              Animal Liberation Now! (ALN!) works to end the exploitation of
              animals through direct action, public education, and legislative
              advocacy. We believe that animals exist for their own purposes and
              should not be used as resources for human ends.
            </p>
            <p className="mb-6">
              ALN! has grown into a powerful voice for animals, with a lot of
              dedicated supporters and volunteers across the country. Our
              campaigns have led to significant awareness about animal
              exploitation.
            </p>
            {/* <Link
              to="/about"
              className="flex items-center font-medium text-accent hover:underline"
            >
              Learn more about our work
              <HiChevronRight className="ml-1 h-4 w-4" />
            </Link> */}
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
            <img
              src="/outreach/outreach-main.png"
              alt="ALN volunteers at protest"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Why ALN */}
      <Section
        title="Why Animal Liberation?"
        subtitle="We believe that all sentient beings deserve to live free from exploitation and suffering."
        dark={true}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
          onMouseEnter={() => setIsVisible(true)}
        >
          <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
            <img
              src="/website-section/section3.jpg"
              alt="Wild animals living freely"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Core Beliefs</h3>
            <ul className="space-y-4">
              <li
                className={`flex items-start transition-all duration-500 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
                  }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <HiHeart className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-white">Animal Sentience</h4>
                  <p className="text-white">
                    Animals are sentient beings capable of experiencing pain,
                    pleasure, and a range of emotions.
                  </p>
                </div>
              </li>
              <li
                className={`flex items-start transition-all duration-500 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
                  }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <HiHeart className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-white">Inherent Value</h4>
                  <p className="text-white">
                    Each animal has inherent value that is independent of their
                    usefulness to humans.
                  </p>
                </div>
              </li>
              <li
                className={`flex items-start transition-all duration-500 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
                  }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <HiHeart className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-white">Equal Consideration</h4>
                  <p className="text-white">
                    The interests of animals deserve equal consideration to
                    comparable interests of humans.
                  </p>
                </div>
              </li>
              <li
                className={`flex items-start transition-all duration-500 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
                  }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <HiHeart className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-white">Right to Liberation</h4>
                  <p className="text-white">
                    Animals have a right to be free from human exploitation and
                    to live according to their nature.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Upcoming Events */}
      {/* <Section
        title="Upcoming Events"
        subtitle="Join us at our upcoming events to support animal liberation and connect with like-minded advocates."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/calendar" className="btn btn-primary">
            <HiCalendar className="mr-2 h-5 w-5" />
            View All Events
          </Link>
        </div>
      </Section> */}

      {/* FAQs Section*/}
      <Section
        title="FAQs"
        subtitle="Frequently asked questions about ethics and animal rights."
        className="bg-gray-300 text-black" 
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/faqs" className="btn btn-primary">
            <HiBookOpen className="mr-2 h-5 w-5" />
            Read All FAQs
          </Link>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="bg-primary text-secondary rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the activism!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer, support, or simply learn more about animal liberation, we have a place for you in our movement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/support" className="btn btn-primary">
              <HiHeart className="mr-2 h-5 w-5" />
              Join us!
            </Link>
            {/* <Link
              to="/about"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              <HiUsers className="mr-2 h-5 w-5" />
              Learn More
            </Link> */}
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
