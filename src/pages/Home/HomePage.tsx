import { useState } from "react";
import { HiOutlineExclamationTriangle, HiPlay } from "react-icons/hi2";
import ChapterMap from "../../components/Map/ChapterMap";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";
import { events } from "../../data/eventsData";
import EventCard from "../Events/EventCard";

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-primary min-h-screen">

      {/* Hero Section */}
      <Hero
        title="Dismantle Human Supremacy"
        subtitle="Boycott Animal Products and Services"
        buttonText="Join the movement"
        buttonLink="#chapters"
        backgroundImage="/heroes/ns1.webp"
        centered={true}
      />

      {/* What is Animal Liberation Section */}
      <Section dark={true} className="overflow-hidden">
        {/* Soft Organic Orbs */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-accent/5 blur-[150px] -z-10 rounded-full animate-float"></div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase">The Liberation</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase leading-tight tracking-tighter drop-shadow-glow-white">
            What is Animal Liberation?
          </h3>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
            Animal liberation is a social justice movement to put an end to the human-led systemic oppression of non-human animals.
          </p>

          <div className="relative aspect-video flex items-center justify-center p-2 glass-panel rounded-[2rem]">
            <div className="w-full h-full relative z-10 bg-black rounded-2xl overflow-hidden shadow-inner">
              {!showVideo ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-0 md:p-0 text-center bg-[#050505]/90 z-10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 to-transparent"></div>
                  <HiOutlineExclamationTriangle className="h-16 w-16 md:h-20 md:w-20 text-accent mb-4 md:mb-6 animate-pulse-glow" />
                  <h5 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 uppercase tracking-wider md:tracking-widest text-white drop-shadow-glow-white px-2">Warning: Graphic</h5>
                  <p className="mb-6 md:mb-8 text-white/60 max-w-md text-xs md:text-sm leading-relaxed px-4">The following is raw footage of systemic violence. Viewer discretion is advised.</p>
                  <button
                    onClick={() => setShowVideo(true)}
                    className="btn btn-outline border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40 text-sm md:text-base"
                  >
                    <HiPlay className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" /> Play
                  </button>
                </div>
              ) : (
                <iframe
                  src="https://player.vimeo.com/video/1182206552?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  className="absolute inset-0 w-full h-full border-none"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
            In this planet dominated by humans, billions of sentient beings are exploited annually for human food, fashion, transport, science and entertainment, and millions more who are subjected to violence simply because they are not human. We envision a world where respecting animal rights is the norm, where abusing animals is unacceptable.
          </p>

        </div>
      </Section>

      {/* Find Your Chapter - OpenStreetMap Section */}
      <Section dark={false} className="overflow-hidden" id="chapters">
        <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase">Global Network</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase leading-tight tracking-tighter drop-shadow-glow-white">
            Find Your Local Chapter
          </h3>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto mb-8">
            Animal Liberation Now! operates as a decentralized global network. Click on a marker to connect with activists in your region.
          </p>

          <div className="glass-panel p-2 rounded-[2rem] overflow-hidden shadow-glow-white">
            <ChapterMap className="w-full h-[500px] rounded-2xl" />
          </div>
        </div>
      </Section>

      {/* Action Logs (Now above System Overview) */}
      <Section dark={false} className="relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4">Recent Activisim</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter drop-shadow-glow-white">We Unmask <span className="text-accent">The Truth</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      {/* System Overview (Now below Action Logs) */}
      <Section dark={true} className="overflow-hidden">
        {/* Soft Organic Orbs */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-accent/10 blur-[150px] -z-10 rounded-full animate-float"></div>
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-blue-500/10 blur-[150px] -z-10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>

        <div className="max-w-4xl mx-auto text-center space-y- relative z-10">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase">What do we do?</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase leading-tight tracking-tighter drop-shadow-glow-white">
            <b>Animal Liberation Now!</b> Strives to strengthen the animal liberation movement
          </h3>
          <p className="text-xl text-text-muted font-medium">
            By providing activists all over the globe with guidance, support and resources to optimise their potential while maintaining accuracy and consistency in representing the movement.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mt-12">
            <li className="glass-panel p-6 flex items-center space-x-5 group">
              <div className="w-3.5 h-3.5 bg-accent rounded-full group-hover:scale-125 transition-transform shadow-glow shrink-0"></div>
              <span className="font-bold text-text-main tracking-wide uppercase text-sm">Street Outreaches</span>
            </li>
            <li className="glass-panel p-6 flex items-center space-x-5 group">
              <div className="w-3.5 h-3.5 bg-accent rounded-full group-hover:scale-125 transition-transform shadow-glow shrink-0"></div>
              <span className="font-bold text-text-main tracking-wide uppercase text-sm">Institutional Lectures</span>
            </li>
            <li className="glass-panel p-6 flex items-center space-x-5 group">
              <div className="w-3.5 h-3.5 bg-accent rounded-full group-hover:scale-125 transition-transform shadow-glow shrink-0"></div>
              <span className="font-bold text-text-main tracking-wide uppercase text-sm">Protests</span>
            </li>
            <li className="glass-panel p-6 flex items-center space-x-5 group">
              <div className="w-3.5 h-3.5 bg-accent rounded-full group-hover:scale-125 transition-transform shadow-glow shrink-0"></div>
              <span className="font-bold text-text-main tracking-wide uppercase text-sm">Demonstrations</span>
            </li>
            <li className="glass-panel p-6 flex items-center space-x-5 group">
              <div className="w-3.5 h-3.5 bg-accent rounded-full group-hover:scale-125 transition-transform shadow-glow shrink-0"></div>
              <span className="font-bold text-text-main tracking-wide uppercase text-sm">Activist Workshops</span>
            </li>
          </ul>

          <div className="pt-12">
            <p className="text-lg text-text-muted mb-10 max-w-3xl mx-auto">
              We believe lasting change begins with informed communities and consistent action. By encouraging dialogue, promoting ethical choices, and holding systems accountable, we strive to build a more compassionate world for all beings.
            </p>
            <div className="inline-block glass-panel px-10 py-6 rounded-full border-t border-accent/30 shadow-neon">
              <p className="font-black text-text-main uppercase tracking-widest text-sm">
                Animal Liberation Now! is <span className="text-accent">abolitionist</span>, unapologetic, and consistently anti-oppression.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
