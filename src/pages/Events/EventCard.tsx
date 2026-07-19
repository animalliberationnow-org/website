import { format, parseISO } from "date-fns";
import { HiArrowRight, HiClock, HiMapPin } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { EventType } from "../../data/eventsData";

interface EventCardProps {
  event: EventType;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formattedDate = format(parseISO(event.date), "MMMM d, yyyy");

  return (
    <Link
      to={event.link}
      className="glass-panel overflow-hidden group flex flex-col hover:border-accent/30 transition-all duration-500 shadow-glow-white hover:shadow-neon cursor-pointer"
    >
      <div className="h-72 overflow-hidden relative border-b border-glass-border">
        <div className="absolute inset-0 bg-transparent dark:bg-accent/20 dark:mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 grayscale-0 dark:grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow bg-primary">
        <h3 className="text-xl font-bold mb-4 text-text-main uppercase tracking-tight group-hover:text-accent transition-colors">
          {event.title}
        </h3>

        {/* Date and Place */}
        <div className="flex flex-col gap-2 mb-4 text-sm text-text-muted font-medium">
          <div className="flex items-center">
            <HiClock className="h-4 w-4 mr-2 text-accent" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <HiMapPin className="h-4 w-4 mr-2 text-accent" />
            <span>{event.place}</span>
          </div>
        </div>

        <p className="text-text-muted flex-grow text-sm leading-relaxed">
          {event.summary}
        </p>
        <div className="mt-6 flex items-center font-bold text-accent group-hover:text-text-main transition-colors uppercase tracking-widest text-xs">
          <span>View Details</span>
          <HiArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
