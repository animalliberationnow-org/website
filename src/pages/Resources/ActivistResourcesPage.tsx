import { HiDocumentText, HiVideoCamera, HiChatBubbleLeftRight } from "react-icons/hi2";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const ActivistResourcesPage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Hero
        title="For Activists"
        subtitle="Empower yourself with the tools, knowledge, and materials needed to be a highly effective advocate for animals."
        backgroundImage="/website-section/section3.jpg"
        centered={true}
      />

      <Section dark={true} className="overflow-hidden">
        {/* Soft Organic Orbs */}
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-accent/10 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 -left-64 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full animate-float" style={{animationDelay: '2s'}}></div>

        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 drop-shadow-neon">Database // Assets</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase text-text-main tracking-tighter mb-6 drop-shadow-glow-white">Resource Bank</h3>
            <p className="text-xl text-text-muted max-w-3xl mx-auto font-medium">
              Whether you're hitting the streets for your first outreach or running a major campaign, these resources are designed to support your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Outreach Scripts */}
            <div className="glass-panel p-10 group hover:-translate-y-2">
              <div className="bg-text-main/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors shadow-glow-white">
                <HiChatBubbleLeftRight className="h-8 w-8 text-text-main group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-text-main uppercase tracking-tight">Outreach Scripts</h3>
              <p className="text-text-muted mb-8 font-medium leading-relaxed">
                Learn the Socratic method of engagement. These scripts help you guide conversations effectively without being confrontational.
              </p>
              <ul className="space-y-4 pt-6 border-t border-text-main/5">
                <li><a href="#" className="text-accent hover:text-text-main uppercase tracking-widest text-sm font-bold flex items-center transition-colors bg-text-main/5 px-4 py-2 rounded-full w-fit group-hover:bg-text-main/10"><span className="mr-2">▶</span> Standard Dairy</a></li>
                <li><a href="#" className="text-accent hover:text-text-main uppercase tracking-widest text-sm font-bold flex items-center transition-colors bg-text-main/5 px-4 py-2 rounded-full w-fit group-hover:bg-text-main/10"><span className="mr-2">▶</span> "Humane" Meat</a></li>
                <li><a href="#" className="text-accent hover:text-text-main uppercase tracking-widest text-sm font-bold flex items-center transition-colors bg-text-main/5 px-4 py-2 rounded-full w-fit group-hover:bg-text-main/10"><span className="mr-2">▶</span> Aggressive Responses</a></li>
              </ul>
            </div>

            {/* Print Materials */}
            <div className="glass-panel p-10 group hover:-translate-y-2">
              <div className="bg-text-main/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors shadow-glow-white">
                <HiDocumentText className="h-8 w-8 text-text-main group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-text-main uppercase tracking-tight">Printables</h3>
              <p className="text-text-muted mb-8 font-medium leading-relaxed">
                Download high-resolution leaflets, posters, and placards for your local outreach events. Available in English and Tamil.
              </p>
              <ul className="space-y-4 pt-6 border-t border-text-main/5">
                <li><a href="#" className="text-accent hover:text-text-main uppercase tracking-widest text-sm font-bold flex items-center transition-colors bg-text-main/5 px-4 py-2 rounded-full w-fit group-hover:bg-text-main/10"><span className="mr-2">▶</span> "Why Vegan?" Trifold</a></li>
                <li><a href="#" className="text-accent hover:text-text-main uppercase tracking-widest text-sm font-bold flex items-center transition-colors bg-text-main/5 px-4 py-2 rounded-full w-fit group-hover:bg-text-main/10"><span className="mr-2">▶</span> Standard Placards A2</a></li>
                <li><a href="#" className="text-accent hover:text-text-main uppercase tracking-widest text-sm font-bold flex items-center transition-colors bg-text-main/5 px-4 py-2 rounded-full w-fit group-hover:bg-text-main/10"><span className="mr-2">▶</span> Sign-up Sheets</a></li>
              </ul>
            </div>

            {/* Video Library */}
            <div className="glass-panel p-10 group hover:-translate-y-2">
              <div className="bg-text-main/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors shadow-glow-white">
                <HiVideoCamera className="h-8 w-8 text-text-main group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-text-main uppercase tracking-tight">Video Library</h3>
              <p className="text-text-muted mb-8 font-medium leading-relaxed">
                Recommended footage for street outreach and documentaries to host for community screenings.
              </p>
              <ul className="space-y-4 pt-6 border-t border-text-main/5">
                <li><a href="#" className="text-accent hover:text-text-main uppercase tracking-widest text-sm font-bold flex items-center transition-colors bg-text-main/5 px-4 py-2 rounded-full w-fit group-hover:bg-text-main/10"><span className="mr-2">▶</span> India Footage (1080p)</a></li>
                <li><a href="#" className="text-accent hover:text-text-main uppercase tracking-widest text-sm font-bold flex items-center transition-colors bg-text-main/5 px-4 py-2 rounded-full w-fit group-hover:bg-text-main/10"><span className="mr-2">▶</span> Exploitation Loop</a></li>
                <li><a href="#" className="text-accent hover:text-text-main uppercase tracking-widest text-sm font-bold flex items-center transition-colors bg-text-main/5 px-4 py-2 rounded-full w-fit group-hover:bg-text-main/10"><span className="mr-2">▶</span> Training Modules</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ActivistResourcesPage;
