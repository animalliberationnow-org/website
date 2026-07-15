import { HiEnvelope, HiMapPin } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import ChapterMap from '../../components/Map/ChapterMap';
import Hero from '../../components/UI/Hero';
import Section from '../../components/UI/Section';
import { chapters } from '../../data/chaptersData';

const ChaptersPage = () => {
  return (
    <>
      <Hero
        title="Our Global Network"
        subtitle="Animal Liberation Now! operates as a decentralized network of activists worldwide. Find your local chapter and join the movement for animal liberation."
        backgroundImage="/misc/outreach-main.webp"
        centered={true}
      />

      {/* OpenStreetMap Section */}
      <Section dark={false} className="overflow-hidden">
        <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase">Global Network</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase leading-tight tracking-tighter drop-shadow-glow-white">
            Find Your Local Chapter
          </h3>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto mb-8">
            Click on a marker to explore activism in your region and connect with local activists.
          </p>

          <div className="glass-panel p-2 rounded-[2rem] overflow-hidden shadow-glow-white">
            <ChapterMap className="w-full h-[500px] rounded-2xl" />
          </div>
        </div>
      </Section>

      {/* Chapter Cards Section */}
      <Section dark={true} className="overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4">Active Chapters</h2>
            <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter drop-shadow-glow-white">
              Join The Movement Locally
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/chapters/${chapter.id}`}
                className="glass-panel overflow-hidden group flex flex-col hover:border-accent/30 transition-all duration-500 shadow-glow-white hover:shadow-neon cursor-pointer"
              >
                <div className="h-72 overflow-hidden relative border-b border-glass-border">
                  <div className="absolute inset-0 bg-transparent dark:bg-accent/20 dark:mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img
                    src={chapter.image}
                    alt={chapter.name}
                    className="w-full h-full object-cover group-hover:scale-110 grayscale-0 dark:grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow bg-primary">
                  <h3 className="text-2xl font-bold mb-4 text-text-main uppercase tracking-tight group-hover:text-accent transition-colors">
                    {chapter.city}
                  </h3>

                  {/* Location and Contact */}
                  <div className="flex flex-col gap-2 mb-4 text-sm text-text-muted font-medium">
                    <div className="flex items-center">
                      <HiMapPin className="h-4 w-4 mr-2 text-accent" />
                      <span>{chapter.city}, {chapter.country}</span>
                    </div>
                    <div className="flex items-center">
                      <HiEnvelope className="h-4 w-4 mr-2 text-accent" />
                      <span>{chapter.contactEmail}</span>
                    </div>
                  </div>

                  <p className="text-text-muted flex-grow text-sm leading-relaxed mb-6">
                    {chapter.description}
                  </p>

                  <div className="btn btn-outline text-xs w-full group-hover:border-accent/50 transition-colors">
                    Learn More
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark={false}>
        <div className="glass-panel p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-main uppercase tracking-tight">
            Don't See Your Chapter?
          </h2>
          <p className="text-text-muted mb-8">
            Start a new ALN! chapter in your city and lead the movement for animal liberation.
          </p>
          <Link to="/support" className="btn btn-primary px-8">
            Get Involved
          </Link>
        </div>
      </Section>
    </>
  );
};

export default ChaptersPage;
