import { format, parseISO } from 'date-fns';
import { useEffect } from 'react';
import { HiChevronLeft, HiClock, HiMapPin } from 'react-icons/hi2';
import { Link, useParams } from 'react-router-dom';
import Section from '../../components/UI/Section';
import { events } from '../../data/eventsData';

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <Section dark={true}>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4 text-text-main">Event Not Found</h2>
          <Link to="/activism" className="btn btn-primary">Back to Activism</Link>
        </div>
      </Section>
    );
  }

  const formattedDate = format(parseISO(event.date), 'MMMM d, yyyy');

  return (
    <>
      {/* Header Section with Date and Place */}
      <div className="relative bg-primary text-text-main border-b border-glass-border pt-16 md:pt-20">
        <div className="container-custom relative z-20 py-10 md:py-12">
          <Link
            to="/activism"
            className="inline-flex items-center text-text-main font-bold hover:text-accent transition-colors mb-6 relative z-30"
          >
            <HiChevronLeft className="mr-1 h-5 w-5 stroke-2" />
            Back to Activism
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="mb-4">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium uppercase">
                  {event.status}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-text-main">{event.title}</h1>
              <div className="flex flex-col gap-3 text-text-main mb-6 font-bold">
                <div className="flex items-center">
                  <HiClock className="h-5 w-5 mr-2 text-accent" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <HiMapPin className="h-5 w-5 mr-2 text-accent" />
                  <span>{event.place}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Content */}
      <Section dark={true}>
        <div className="max-w-6xl mx-auto">
          <div className="glass-panel p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-text-main uppercase tracking-tight">About this Event</h2>
            <p className="text-lg leading-relaxed text-text-muted">{event.summary}</p>
          </div>

          {/* Mission Gallery Section - Only for Recent Events */}
          {event.status === 'recent' && event.gallery && event.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-text-main uppercase tracking-tight">Mission Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.gallery.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg border border-glass-border">
                    <img
                      src={img}
                      alt={`${event.title} - Gallery ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Single Representative Image - Only for Upcoming Events */}
          {event.status === 'upcoming' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-text-main uppercase tracking-tight">Event Preview</h2>
              <div className="rounded-lg overflow-hidden shadow-lg border border-glass-border">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark={false}>
        <div className="glass-panel p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-main uppercase tracking-tight">
            {event.status === 'upcoming' ? 'Join Us at This Event!' : 'Get Involved in Future Events!'}
          </h2>
          <p className="text-text-muted mb-8">Be part of the movement for animal liberation.</p>
          <Link to="/support" className="btn btn-primary px-8">Get Involved</Link>
        </div>
      </Section>
    </>
  );
};

export default EventDetailPage;
