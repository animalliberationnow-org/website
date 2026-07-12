import {
  addMonths,
  endOfMonth,
  format,
  isAfter,
  isBefore,
  parseISO,
  startOfMonth,
  subMonths,
} from "date-fns";
import { useEffect, useState } from "react";
import {
  HiCalendar as CalendarIcon,
  HiChevronLeft,
  HiChevronRight,
  HiFunnel,
} from "react-icons/hi2";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";
import { events, EventType } from "../../data/eventsData";
import EventCard from "./EventCard";

type EventFilter = "all" | "protest" | "workshop" | "fundraiser" | "conference";

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>(events);
  const [filter, setFilter] = useState<EventFilter>("all");

  // Apply filters when month or filter type changes
  useEffect(() => {
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);

    let filtered = events.filter((event) => {
      const eventDate = parseISO(event.date);
      return isAfter(eventDate, startDate) && isBefore(eventDate, endDate);
    });

    if (filter !== "all") {
      filtered = filtered.filter((event) => event.type === filter);
    }

    setFilteredEvents(filtered);
  }, [currentMonth, filter]);

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <>
      <Hero
        title="Events Calendar"
        subtitle="Join us at our upcoming events, protests, workshops, and fundraisers."
        backgroundImage="'/outreach/outreach9.webp'"
      />

      <Section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <CalendarIcon className="h-6 w-6 mr-2" />
            <h2 className="text-2xl font-bold">
              {format(currentMonth, "MMMM yyyy")}
            </h2>
            <button
              onClick={prevMonth}
              className="ml-4 p-2 rounded-full hover:bg-gray-200"
              aria-label="Previous month"
            >
              <HiChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-gray-200"
              aria-label="Next month"
            >
              <HiChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="relative inline-block">
            <div className="flex items-center">
              <HiFunnel className="h-5 w-5 mr-2" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as EventFilter)}
                className="py-2 pl-3 pr-10 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
              >
                <option value="all">All Events</option>
                <option value="protest">Protests</option>
                <option value="workshop">Workshops</option>
                <option value="fundraiser">Fundraisers</option>
                <option value="conference">Conferences</option>
              </select>
            </div>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <CalendarIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">No Events Found</h3>
            <p className="text-gray-600 mb-6">
              There are no events scheduled for this month with the selected
              filter.
            </p>
            <button
              onClick={() => setFilter("all")}
              className="btn btn-primary"
            >
              View All Events
            </button>
          </div>
        )}

        <div className="mt-12 bg-gray-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Host Your Own Event</h3>
          <p className="mb-6">
            Want to organize an event in your community? We can provide
            resources, materials, and guidance to help you plan a successful
            event for animal liberation.
          </p>
          <a href="/support" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
};

export default CalendarPage;
