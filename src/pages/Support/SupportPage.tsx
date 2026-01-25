import {
  HiCalendar,
  HiEnvelope,
  HiUsers
} from "react-icons/hi2";
import { useState } from "react";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

type DonationAmount = 25 | 50 | 100 | 250 | "custom";
type DonationFrequency = "monthly" | "one-time";

const SupportPage = () => {
  const [amount, setAmount] = useState<DonationAmount>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<DonationFrequency>("monthly");

  const handleAmountChange = (newAmount: DonationAmount) => {
    setAmount(newAmount);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const handleFrequencyChange = (newFrequency: DonationFrequency) => {
    setFrequency(newFrequency);
  };

  return (
    <>
      <Hero
        title="Support Our Work"
        subtitle="Your contribution helps us continue our vital work for animal liberation. Together, we can create a more compassionate world."
        backgroundImage="/images/heroes/support-articles-hero.jpg"
      />

      {/* Volunteer Form */}
      <Section id="volunteer-form">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Volunteer Application
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="vol-firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="vol-firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="vol-lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="vol-lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="vol-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="vol-email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="vol-phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="vol-phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              />
            </div>

            <div>
              <label
                htmlFor="vol-interests"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Areas of Interest
              </label>
              <select
                id="vol-interests"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                required
              >
                <option value="">Select an area</option>
                <option value="direct-action">Direct Action</option>
                <option value="education">Education & Outreach</option>
                <option value="events">Event Planning</option>
                <option value="admin">Administrative Support</option>
                <option value="legal">Legal Support</option>
                <option value="media">Media & Communications</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="vol-availability"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Availability
              </label>
              <select
                id="vol-availability"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                required
              >
                <option value="">Select availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="evenings">Evenings</option>
                <option value="weekends">Weekends</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="vol-message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Why do you want to volunteer with ALN?
              </label>
              <textarea
                id="vol-message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Submit Application
            </button>
          </form>
        </div>
      </Section>

      {/* Other Ways to Support */}
      <Section
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

          <div className="bg-primary-light p-8 rounded-lg">
            <HiEnvelope className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-3">Spread the Word</h3>
            <p className="mb-6">
              Share our content on social media, subscribe to our newsletter,
              and help educate others about animal liberation.
            </p>
            <a href="#social-sharing" className="btn btn-primary">
              Share Our Mission
            </a>
          </div>
        </div>
      </Section>


      {/* Social Sharing */}
      <Section id="social-sharing">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Spread the Word</h2>
          <p className="text-lg mb-8">
            Help amplify our message by sharing our content and mission with
            your network.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://facebook.com/share"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-3 rounded-full hover:bg-accent transition-colors"
              aria-label="Share on Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-3 rounded-full hover:bg-accent transition-colors"
              aria-label="Share on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-3 rounded-full hover:bg-accent transition-colors"
              aria-label="Share on Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="mailto:?subject=Join%20the%20Animal%20Liberation%20Movement"
              className="bg-primary text-white p-3 rounded-full hover:bg-accent transition-colors"
              aria-label="Share by email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-6">
              Stay informed about our campaigns, events, and ways to take action
              for animals.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="btn btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SupportPage;
