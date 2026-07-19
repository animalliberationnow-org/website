import { useEffect } from 'react';
import { HiChevronLeft, HiEnvelope, HiMapPin } from 'react-icons/hi2';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Link, useParams } from 'react-router-dom';
import Hero from '../../components/UI/Hero';
import Section from '../../components/UI/Section';
import { chapters } from '../../data/chaptersData';

const ChapterDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const chapter = chapters.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!chapter) {
    return (
      <Section dark={true}>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4 text-text-main">Chapter Not Found</h2>
          <Link to="/chapters" className="btn btn-primary">Back to Chapters</Link>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={chapter.name}
        subtitle={`${chapter.city}, ${chapter.country}`}
        backgroundImage={chapter.image}
        centered={false}
      />

      {/* Chapter Content */}
      <Section dark={true} className="overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/chapters"
            className="inline-flex items-center text-text-main font-bold hover:text-accent transition-colors mb-8"
          >
            <HiChevronLeft className="mr-1 h-5 w-5 stroke-2" />
            Back to All Chapters
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="glass-panel p-8 md:p-12 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-text-main uppercase tracking-tight">About Us</h2>
                <p className="text-lg leading-relaxed text-text-muted mb-8">{chapter.description}</p>

                <h3 className="text-xl font-bold mb-4 text-text-main uppercase tracking-tight">Our Activities</h3>
                <ul className="space-y-3">
                  {chapter.activities.map((activity, index) => (
                    <li key={index} className="flex items-start text-text-muted">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chapter Image */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-glass-border">
                <img
                  src={chapter.image}
                  alt={chapter.name}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Information */}
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-bold mb-4 text-text-main uppercase tracking-tight">Contact</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-bold text-text-muted mb-2">Location</div>
                      <div className="flex items-center text-text-main">
                        <HiMapPin className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                        <span>{chapter.city}, {chapter.country}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-text-muted mb-2">Email</div>
                      <div className="flex items-center text-text-main">
                        <HiEnvelope className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                        <a
                          href={`mailto:${chapter.contactEmail}`}
                          className="hover:text-accent transition-colors break-all"
                        >
                          {chapter.contactEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                {chapter.socialMedia && (
                  <div className="glass-panel p-6">
                    <h3 className="text-xl font-bold mb-4 text-text-main uppercase tracking-tight">Follow Us</h3>
                    <div className="flex space-x-4">
                      {chapter.socialMedia.facebook && (
                        <a
                          href={chapter.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-main hover:text-accent transition-colors"
                          aria-label="Facebook"
                        >
                          <SiFacebook size={24} />
                        </a>
                      )}
                      {chapter.socialMedia.instagram && (
                        <a
                          href={chapter.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-main hover:text-accent transition-colors"
                          aria-label="Instagram"
                        >
                          <SiInstagram size={24} />
                        </a>
                      )}
                      {chapter.socialMedia.x && (
                        <a
                          href={chapter.socialMedia.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-main hover:text-accent transition-colors"
                          aria-label="X (formerly Twitter)"
                        >
                          <SiX size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Map */}
                <div className="glass-panel p-2 rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${chapter.coordinates.lng-0.05},${chapter.coordinates.lat-0.05},${chapter.coordinates.lng+0.05},${chapter.coordinates.lat+0.05}&marker=${chapter.coordinates.lat},${chapter.coordinates.lng}`}
                    className="w-full h-64 rounded border-0"
                    title={`Map of ${chapter.city}`}
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark={false}>
        <div className="glass-panel p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-main uppercase tracking-tight">
            Join {chapter.city} Chapter!
          </h2>
          <p className="text-text-muted mb-8">
            Get involved with local activism and be part of the movement for animal liberation.
          </p>
          <a
            href={`mailto:${chapter.contactEmail}`}
            className="btn btn-primary px-8"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
};

export default ChapterDetailPage;
