import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const FarmedAnimalsPage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Hero
        title="Farmed Animals"
        subtitle="The meat, dairy, and egg industries are built on the systemic exploitation of sentient beings. We fight for their liberation."
        backgroundImage="/website-section/section3.jpg"
        centered={true}
      />

      <Section dark={true} className="overflow-hidden">
        {/* Soft Organic Orbs */}
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-accent/10 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 -left-64 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full animate-float" style={{animationDelay: '2s'}}></div>

        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <div className="flex items-center justify-center mb-16">
            <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase drop-shadow-neon">Database // Reality Matrix</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <div className="glass-panel p-10 group text-center hover:-translate-y-2">
              <h3 className="text-5xl font-black mb-6 text-text-main group-hover:text-accent transition-colors drop-shadow-glow-white">92B+</h3>
              <p className="text-text-muted font-medium text-sm uppercase tracking-widest leading-relaxed">Land animals slaughtered annually worldwide.</p>
            </div>
            <div className="glass-panel p-10 group text-center hover:-translate-y-2">
              <h3 className="text-5xl font-black mb-6 text-text-main group-hover:text-accent transition-colors drop-shadow-glow-white">0 Days</h3>
              <p className="text-text-muted font-medium text-sm uppercase tracking-widest leading-relaxed">Of freedom for animals in factory farms.</p>
            </div>
            <div className="glass-panel p-10 group text-center hover:-translate-y-2">
              <h3 className="text-5xl font-black mb-6 text-text-main group-hover:text-accent transition-colors drop-shadow-glow-white">100%</h3>
              <p className="text-text-muted font-medium text-sm uppercase tracking-widest leading-relaxed">Of animal agriculture relies on exploiting reproductive systems.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section dark={false}>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4">Current Operations</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase text-text-main tracking-tighter drop-shadow-glow-white flex flex-wrap items-center justify-center gap-x-4 gap-y-2">What <span className="bg-[#0a0a0a] rounded-full px-5 py-2 border border-white/10 shadow-neon inline-flex items-center justify-center"><img src="/aln-icon.svg" alt="ALN!" className="h-8 md:h-10" /></span> is Doing</h3>
        </div>
        <div className="glass-panel p-12 max-w-4xl mx-auto text-center shadow-neon">
          <p className="text-xl text-text-muted leading-relaxed font-medium">
            We conduct regular street outreach exposing standard practices in the meat, dairy, and egg industries. By showing undercover footage directly to the public, we break the cognitive dissonance and hold individuals accountable for their choices.
          </p>
        </div>
      </Section>

      <Section dark={true}>
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-1 border-accent/30 shadow-neon">
            <div className="bg-primary-light p-12 flex flex-col md:flex-row items-center justify-between gap-12 rounded-[2.5rem]">
              <div className="text-center md:text-left">
                <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-2">Action Required</h2>
                <h3 className="text-3xl font-black uppercase text-text-main tracking-tight drop-shadow-glow-white">How You Can Support</h3>
                <p className="text-text-muted text-sm mt-4 font-bold uppercase tracking-widest">Execute protocol to assist.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link to="/resources/go-vegan" className="btn btn-outline text-sm">
                  Go Vegan Today
                </Link>
                <Link to="/support" className="btn btn-primary text-sm flex items-center justify-center">
                  Join Outreach <HiArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FarmedAnimalsPage;
