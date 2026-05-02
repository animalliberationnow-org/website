import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  centered?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink = "/support",
  backgroundImage = "/website-section/section3.jpg",
  centered = false,
}) => {
  return (
    <section className="relative flex items-center min-h-[60vh] lg:min-h-[80vh] bg-primary text-text-main overflow-hidden border-b border-glass-border">
      {/* Background Image with High Contrast Filter */}
      <div
        className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Cyberpunk Vignette / Radial Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/80 to-primary" />
      
      {/* Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(rgba(255, 42, 42, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 42, 42, 0.2) 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }} 
      />

      {/* Content */}
      <div className="container-custom relative z-20 pt-32 pb-16">
        <div className={`max-w-4xl relative ${centered ? "mx-auto text-center" : ""}`}>
          {/* Subtle glowing orb behind text */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10 ${centered ? '' : 'hidden'}`}></div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in uppercase tracking-tighter drop-shadow-neon leading-[1.1] text-text-main">
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-xl md:text-2xl mb-10 animate-slide-up text-text-muted font-medium max-w-2xl mx-auto"
              style={{ animationDelay: "0.2s" }}
            >
              {subtitle}
            </p>
          )}
          {buttonText && (
            <div
              className="animate-slide-up mt-12"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to={buttonLink} className="btn btn-primary text-xl px-10 py-4 group relative overflow-hidden text-white">
                <span className="relative z-10">{buttonText}</span>
                {/* Glitch/shine effect on hover */}
                <div className="absolute inset-0 h-full w-0 bg-white/20 z-0 group-hover:w-full transition-all duration-300 ease-out skew-x-12 -ml-4"></div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
