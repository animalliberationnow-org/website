import { useState } from "react";
import { HiArrowRight, HiPlay, HiOutlineExclamationTriangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const latestActions = [
    {
      title: "Activists Protest against Animal Captivity - Vandalur Zoo, Chennai",
      summary: "Animal Rights Activists in Chennai gathered in front of the (in)famous Vandalur Zoo to express opposition to animal captivity for human entertainment. We stood strong despite the Police trying to remove us from the area.",
      image: "/events/Vadalur%20Zoo%20/DSC_0012.JPG", 
      link: "/actions/1"
    },
    {
      title: "Protest against animals in captivity in front of Bannerghatta Zoo, Bangalore",
      summary: "We joined hands to protest the use of animals for human entertainment at Bannerghatta Zoo, Bengaluru. It was a day long protest, with activists actively speaking to visitors about the ethics of zoos.",
      image: "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20DSC_0432.JPG",
      link: "/actions/2"
    },
    {
      title: "Circle of Justice - Pondy Bazaar, Chennai",
      summary: "Activists stood shoulder to shoulder, holding display devices exposing the brutality of animal agriculture. Thousands watched in horror as they realized how cruel their daily choices were.",
      image: "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01742.JPG",
      link: "/actions/3"
    },
    {
      title: "Hundreds Reached at Marina Beach Cube",
      summary: "Our latest Circle of Justice video outreach effort on Marina Beach saw tremendous engagement. Passersby engaged in deep conversations about the realities of the dairy and meat industries.",
      image: "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02344.JPG",
      link: "/actions/4"
    }
  ];

  return (
    <div className="bg-primary min-h-screen">


      {/* Hero Section */}
      <Hero
        title="We hold people accountable for being animal abusers through everyday choices"
        buttonText="Join the Movement"
        buttonLink="/support"
        backgroundImage="/website-section/hero.jpg"
        centered={true}
      />

      {/* Who Are We Section */}
      <Section dark={true} className="overflow-hidden">
        {/* Soft Organic Orbs */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-accent/5 blur-[150px] -z-10 rounded-full animate-float"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase">Who Are We</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase leading-tight tracking-tighter drop-shadow-glow-white">
            A Decentralized Animal Rights Movement
          </h3>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
            Animal Liberation Now! (ALN!) is a grassroots movement dedicated to dismantling animal exploitation. We are not a political lobby group or a reformist charity; we are a network of uncompromising activists who stand as representatives of the non-human victims of human supremacy.
          </p>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
            Operating under a flat, decentralized structure, we coordinate street campaigns, investigations, educational outreach, and public advocacy to challenge speciesism directly at its roots. We stand for abolition, not regulation. We fight for complete liberation.
          </p>
        </div>
      </Section>

      {/* Action Logs (Now above System Overview) */}
      <Section dark={false} className="relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4">Action Logs</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter drop-shadow-glow-white">We Take The Truth To The Streets</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {latestActions.map((action, index) => (
            <Link 
              key={index} 
              to={action.link} 
              className="glass-panel overflow-hidden group flex flex-col hover:border-accent/30 transition-all duration-500 shadow-glow-white hover:shadow-neon cursor-pointer"
            >
              <div className="h-72 overflow-hidden relative border-b border-glass-border">
                <div className="absolute inset-0 bg-transparent dark:bg-accent/20 dark:mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img src={action.image} alt={action.title} className="w-full h-full object-cover group-hover:scale-110 grayscale-0 dark:grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-primary">
                <h3 className="text-xl font-bold mb-4 text-text-main uppercase tracking-tight group-hover:text-accent transition-colors">{action.title}</h3>
                <p className="text-text-muted flex-grow text-sm leading-relaxed">{action.summary}</p>
                <div className="mt-6 flex items-center font-bold text-accent group-hover:text-text-main transition-colors uppercase tracking-widest text-xs">
                  <span>View Details</span>
                  <HiArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* System Overview (Now below Action Logs) */}
      <Section dark={true} className="overflow-hidden">
        {/* Soft Organic Orbs */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-accent/10 blur-[150px] -z-10 rounded-full animate-float"></div>
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-blue-500/10 blur-[150px] -z-10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase">System Overview</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase leading-tight tracking-tighter drop-shadow-glow-white">
            To Liberate Animals from Human Supremacy
          </h3>
          <p className="text-xl text-text-muted font-medium">
            We work to end Human Supremacy and Animal Exploitation through awareness, action, and advocacy. ALN! engages in:
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mt-12">
            <li className="glass-panel p-6 flex items-center space-x-5 group">
              <div className="w-3.5 h-3.5 bg-accent rounded-full group-hover:scale-125 transition-transform shadow-glow shrink-0"></div>
              <span className="font-bold text-text-main tracking-wide uppercase text-sm">Public Outreaches</span>
            </li>
            <li className="glass-panel p-6 flex items-center space-x-5 group">
              <div className="w-3.5 h-3.5 bg-accent rounded-full group-hover:scale-125 transition-transform shadow-glow shrink-0"></div>
              <span className="font-bold text-text-main tracking-wide uppercase text-sm">Capacity Building</span>
            </li>
            <li className="glass-panel p-6 flex items-center space-x-5 group">
              <div className="w-3.5 h-3.5 bg-accent rounded-full group-hover:scale-125 transition-transform shadow-glow shrink-0"></div>
              <span className="font-bold text-text-main tracking-wide uppercase text-sm">Institutional Lectures</span>
            </li>
            <li className="glass-panel p-6 flex items-center space-x-5 group">
              <div className="w-3.5 h-3.5 bg-accent rounded-full group-hover:scale-125 transition-transform shadow-glow shrink-0"></div>
              <span className="font-bold text-text-main tracking-wide uppercase text-sm">Investigations</span>
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

      {/* See The Truth Section */}
      <Section dark={true} className="overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center px-4">
          <div>
            <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4">Reality Matrix</h2>
            <h3 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-[1.1] tracking-tighter text-text-main drop-shadow-glow-white">See the Truth</h3>
            <p className="text-lg mb-10 text-text-muted leading-relaxed">
              The systemic violence animals endure every single day is beyond comprehension. Witness the effects of everyday choices you make.
            </p>
            <div className="space-y-8">
              <div className="glass-panel p-6 border-l-4 border-l-accent border-y-0 border-r-0 rounded-r-3xl rounded-l-none">
                <h4 className="text-4xl font-black mb-2 text-text-main tracking-tighter">92 BILLION</h4>
                <p className="text-text-muted text-sm uppercase tracking-widest font-bold">Land animals slaughtered annually: murdered</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video flex items-center justify-center p-2 glass-panel rounded-[2rem]">
            <div className="w-full h-full relative z-10 bg-black rounded-2xl overflow-hidden shadow-inner">
              {!showVideo ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#050505]/90 z-10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 to-transparent"></div>
                  <HiOutlineExclamationTriangle className="h-20 w-20 text-accent mb-6 animate-pulse-glow" />
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-widest text-white drop-shadow-glow-white">Warning: Graphic</h3>
                  <p className="mb-8 text-white/60 max-w-md text-sm leading-relaxed">The following footage contains raw data of systemic violence. Viewer discretion is advised.</p>
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="btn btn-outline border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40"
                  >
                    <HiPlay className="mr-3 h-6 w-6" /> Initialize Playback
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
        </div>
      </Section>

      {/* Engagement Protocols - Streamlined to 3 cards */}
      <Section dark={false}>
        <div className="text-center mb-16">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4">Engagement Protocols</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter drop-shadow-glow-white">Take Action For Animals</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="glass-panel p-8 flex flex-col hover:-translate-y-2 group transition-all duration-500">
            <div className="bg-text-main/5 w-20 h-20 rounded-full border border-glass-border flex items-center justify-center mb-8 mx-auto group-hover:shadow-neon transition-all">
              <span className="text-2xl font-black text-accent drop-shadow-neon">01</span>
            </div>
            <h3 className="text-xl font-black mb-3 text-center uppercase tracking-wide text-text-main">Boycott</h3>
            <p className="text-text-muted mb-8 flex-grow text-center text-sm leading-relaxed">
              Boycott animal products and services. Refuse to fund systems of oppression and exploitation.
            </p>
            <Link to="/support" className="btn btn-outline text-xs w-full">Learn More</Link>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-8 flex flex-col hover:-translate-y-2 group transition-all duration-500">
            <div className="bg-text-main/5 w-20 h-20 rounded-full border border-glass-border flex items-center justify-center mb-8 mx-auto group-hover:shadow-neon transition-all">
              <span className="text-2xl font-black text-accent drop-shadow-neon">02</span>
            </div>
            <h3 className="text-xl font-black mb-3 text-center uppercase tracking-wide text-text-main">Vote</h3>
            <p className="text-text-muted mb-8 flex-grow text-center text-sm leading-relaxed">
              Vote for candidates and parties aligned with pro-animal rights ideology to push structural change.
            </p>
            <Link to="/support" className="btn btn-outline text-xs w-full">Learn More</Link>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-8 flex flex-col hover:-translate-y-2 group transition-all duration-500 border-accent/20">
            <div className="bg-text-main/5 w-20 h-20 rounded-full border border-glass-border flex items-center justify-center mb-8 mx-auto group-hover:shadow-neon transition-all">
              <span className="text-2xl font-black text-accent drop-shadow-neon">03</span>
            </div>
            <h3 className="text-xl font-black mb-3 text-center uppercase tracking-wide text-text-main">Represent</h3>
            <p className="text-text-muted mb-8 flex-grow text-center text-sm leading-relaxed">
              Become a representative of the victims and speak up for their emancipation.
            </p>
            <Link to="/support" className="btn btn-primary text-xs w-full border-none">Deploy</Link>
          </div>
        </div>
      </Section>

      {/* Impact & Social Proof */}
      <Section dark={true} className="overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 text-text-main tracking-tighter drop-shadow-glow-white">System Impact</h2>
            <p className="text-xl text-accent font-bold tracking-widest uppercase drop-shadow-neon">Momentum is building.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-24">
            <div className="glass-panel p-10 group rounded-[3rem]">
              <div className="text-6xl font-black mb-4 text-text-main group-hover:text-accent transition-colors drop-shadow-neon">150+</div>
              <div className="text-sm font-bold text-text-muted uppercase tracking-[0.2em]">Events Held</div>
            </div>
            <div className="glass-panel p-10 group rounded-[3rem]">
              <div className="text-6xl font-black mb-4 text-text-main group-hover:text-accent transition-colors drop-shadow-neon">50K+</div>
              <div className="text-sm font-bold text-text-muted uppercase tracking-[0.2em]">People Reached</div>
            </div>
            <div className="glass-panel p-10 group rounded-[3rem]">
              <div className="text-6xl font-black mb-4 text-text-main group-hover:text-accent transition-colors drop-shadow-neon">500+</div>
              <div className="text-sm font-bold text-text-muted uppercase tracking-[0.2em]">Activists Trained</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-panel p-10 relative text-center">
              <p className="text-lg mb-8 text-text-main font-medium leading-relaxed italic relative z-10">"I went vegan immediately after watching footage at a circle of truth. Now, I help organize them every weekend. The truth is impossible to ignore once you see it."</p>
              <footer className="font-black text-accent uppercase tracking-widest text-sm relative z-10">— Rahul, Volunteer Node</footer>
            </div>
            <div className="glass-panel p-10 relative text-center">
              <p className="text-lg mb-8 text-text-main font-medium leading-relaxed italic relative z-10">"This conversation changed how I see animals completely. I always thought I loved animals, but I realized my plate didn't reflect my values."</p>
              <footer className="font-black text-accent uppercase tracking-widest text-sm relative z-10">— Priya, Impacted Passerby</footer>
            </div>
          </div>
        </div>
      </Section>

      {/* Always On CTA */}
      <Section dark={false} className="pb-40 pt-32">
        <div className="glass-panel p-2 max-w-5xl mx-auto relative group rounded-[3rem] shadow-neon">
          <div className="bg-primary-light p-12 md:p-24 text-center rounded-[2.5rem] relative z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/10 blur-[100px] rounded-full"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-text-main uppercase tracking-tighter drop-shadow-glow-white relative z-10">
              Don't look away.
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-text-muted relative z-10 font-medium">
              Get ALN! action updates directly in your secure inbox. Receive alerts for local actions and urgent campaigns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto relative z-10">
              <input 
                type="email" 
                placeholder="ENTER SECURE EMAIL" 
                className="px-8 py-5 bg-text-main/5 border border-glass-border text-text-main font-bold uppercase tracking-widest focus:outline-none focus:border-accent w-full sm:w-2/3 transition-colors placeholder-text-muted rounded-full"
              />
              <button className="btn btn-primary text-base px-10 py-5 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
