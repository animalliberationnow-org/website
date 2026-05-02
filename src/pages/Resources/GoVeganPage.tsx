import { Link } from "react-router-dom";
import { HiHeart, HiArrowRight, HiBookOpen } from "react-icons/hi2";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const GoVeganPage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Hero
        title="Go Vegan Hub"
        subtitle="Align your actions with your values. Living vegan is the most direct way to stop funding animal exploitation."
        backgroundImage="/website-section/section1.jpg"
        centered={true}
      />

      <Section dark={true} className="overflow-hidden">
        {/* Soft Organic Orbs */}
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-accent/10 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 -left-64 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full animate-float" style={{animationDelay: '2s'}}></div>

        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <div className="flex items-center justify-center mb-16">
            <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase drop-shadow-neon">Initialization // Guide</h2>
          </div>
          
          <div className="glass-panel p-12 mb-20 text-center max-w-4xl mx-auto shadow-neon">
            <h3 className="text-3xl font-black uppercase text-text-main mb-6 tracking-tight drop-shadow-glow-white">Beginner's Guide</h3>
            <p className="text-xl text-text-muted leading-relaxed font-medium">
              Transitioning to a vegan lifestyle is easier than ever. It's not about restriction; it's about expanding your compassion and discovering new, cruelty-free ways to eat, dress, and live. Here are some resources to get you started in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="glass-panel p-10 group hover:-translate-y-2">
              <div className="bg-text-main/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors shadow-glow-white">
                <HiBookOpen className="h-8 w-8 text-text-main group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-6 text-text-main uppercase tracking-tight">Common Questions</h3>
              <ul className="space-y-4 text-text-muted font-medium mb-10">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▶</span> "Where do you get your protein?"
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▶</span> "Isn't dairy necessary for calcium?"
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▶</span> "How do I handle social situations?"
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▶</span> "Is a vegan diet expensive?"
                </li>
              </ul>
              <Link to="/faqs" className="text-accent font-bold hover:text-text-main uppercase tracking-widest text-sm flex items-center transition-colors bg-text-main/5 px-6 py-3 rounded-full w-fit group-hover:bg-accent group-hover:text-white">
                Access FAQ <HiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="glass-panel p-10 group hover:-translate-y-2">
              <div className="bg-text-main/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors shadow-glow-white">
                <HiHeart className="h-8 w-8 text-text-main group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-6 text-text-main uppercase tracking-tight">Local Resources</h3>
              <ul className="space-y-4 text-text-muted font-medium mb-10">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▶</span> Plant-based Alternatives in India
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▶</span> Accidentally Vegan Indian Foods
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▶</span> Recommended Nutritionists
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">▶</span> Vegan Community Groups
                </li>
              </ul>
              <a href="#" className="text-accent font-bold hover:text-text-main uppercase tracking-widest text-sm flex items-center transition-colors bg-text-main/5 px-6 py-3 rounded-full w-fit group-hover:bg-accent group-hover:text-white">
                Explore Directory <HiArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section dark={false}>
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-1 border-accent/30 shadow-neon group">
            <div className="bg-primary-light p-12 md:p-20 text-center rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase text-text-main tracking-tighter drop-shadow-glow-white">Need 1-on-1 Support?</h2>
                <p className="mb-10 text-text-muted font-medium max-w-2xl mx-auto text-lg">
                  Changing lifelong habits can be challenging. Our volunteer network is here to mentor you through your transition.
                </p>
                <Link to="/support" className="btn btn-primary text-base px-10 py-4">
                  Request a Mentor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GoVeganPage;
