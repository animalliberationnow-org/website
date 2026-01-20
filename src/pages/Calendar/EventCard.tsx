import { format, parseISO } from "date-fns";
import { Calendar, Clock, MapPin, Share2 } from "lucide-react";
import { EventType } from "../../data/eventsData";

interface EventCardProps {
  event: EventType;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { title, date, time, location, description, image, type } = event;

  const formattedDate = format(parseISO(date), "MMMM d, yyyy");

  const addToCalendar = () => {
    // Format details for Google Calendar
    const startDate = date.replace(/-/g, "");
    const encodedTitle = encodeURIComponent(title);
    const encodedLocation = encodeURIComponent(location);
    const encodedDetails = encodeURIComponent(description);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${startDate}/${startDate}&details=${encodedDetails}&location=${encodedLocation}`;

    window.open(googleCalendarUrl, "_blank");
  };

  const shareEvent = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this event: ${title} on ${formattedDate}`,
        url: window.location.href,
      });
    } else {
      alert("Share this event with friends!");
    }
  };

  return (
    <div className="card hover:translate-y-[-5px]">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 right-0 m-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center mb-2 text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center mb-2 text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center mb-4 text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
        <p className="mb-6 text-gray-700 line-clamp-3">{description}</p>
        <div className="flex justify-between">
          <button
            onClick={addToCalendar}
            className="btn btn-primary text-sm px-4 py-2"
          >
            Add to Calendar
          </button>
          <button
            onClick={shareEvent}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Share event"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
