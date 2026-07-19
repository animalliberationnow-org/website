import { useEffect, useState } from 'react';
import { HiArrowLongRight, HiMagnifyingGlass } from 'react-icons/hi2';
import Hero from '../../components/UI/Hero';
import Section from '../../components/UI/Section';
import { events } from '../../data/eventsData';
import EventCard from './EventCard';

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllRecent, setShowAllRecent] = useState(false);
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);

  // Reset "Show More" when search changes
  useEffect(() => {
    setShowAllRecent(false);
    setShowAllUpcoming(false);
  }, [searchQuery]);

  // Filter events based on search
  const filteredEvents = events.filter(event => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        event.title.toLowerCase().includes(query) ||
        event.summary.toLowerCase().includes(query) ||
        event.place.toLowerCase().includes(query)
      );
    }
    return true;
  });

  // Separate events by status
  const recentEvents = filteredEvents.filter(e => e.status === 'recent');
  const upcomingEvents = filteredEvents.filter(e => e.status === 'upcoming');

  // Decide which events to display based on showAll state
  const displayedRecentEvents = showAllRecent ? recentEvents : recentEvents.slice(0, 4);
  const displayedUpcomingEvents = showAllUpcoming ? upcomingEvents : upcomingEvents.slice(0, 4);

  return (
    <>
      <Hero
        title="Events & Activism"
        subtitle="Join us at our events to support animal liberation and connect with like-minded advocates."
        backgroundImage="/misc/outreach-main.webp"
        centered={true}
      />

      <Section dark={false}>
        {/* Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiMagnifyingGlass className="h-5 w-5 text-text-muted" />
            </div>
            <input
              type="text"
              placeholder="Search Events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 w-full md:w-64 bg-text-main/5 border border-glass-border text-text-main font-medium rounded-full focus:outline-none focus:border-accent transition-colors placeholder-text-muted"
            />
          </div>
        </div>

        {/* Upcoming Events Section */}
        {upcomingEvents.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4">Upcoming Events</h2>
              <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter drop-shadow-glow-white">
                Join The Movement
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {displayedUpcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* Show More Button for Upcoming */}
            {!showAllUpcoming && upcomingEvents.length > 4 && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setShowAllUpcoming(true)}
                  className="group flex items-center gap-2 text-text-main font-bold text-lg hover:text-accent transition-colors uppercase tracking-wide"
                >
                  Show More Upcoming Events
                  <HiArrowLongRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Recent Events Section */}
        {recentEvents.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4">Recent Activism</h2>
              <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter drop-shadow-glow-white">
                We Take The Truth To The Streets
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {displayedRecentEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* Show More Button for Recent */}
            {!showAllRecent && recentEvents.length > 4 && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setShowAllRecent(true)}
                  className="group flex items-center gap-2 text-text-main font-bold text-lg hover:text-accent transition-colors uppercase tracking-wide"
                >
                  Show More Recent Events
                  <HiArrowLongRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* No Results */}
        {recentEvents.length === 0 && upcomingEvents.length === 0 && (
          <div className="text-center py-12">
            <HiMagnifyingGlass className="h-16 w-16 mx-auto text-text-muted mb-4" />
            <h3 className="text-xl font-bold mb-2 text-text-main">No Events Found</h3>
            <p className="text-text-muted mb-6">
              We couldn't find any events matching your search criteria.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="btn btn-primary"
            >
              Reset Search
            </button>
          </div>
        )}
      </Section>
    </>
  );
};

export default EventsPage;
