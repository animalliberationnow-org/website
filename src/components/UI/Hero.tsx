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
    <section className="relative flex items-center min-h-[50vh] lg:min-h-[70vh] bg-primary text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-grey from-primary/70 to-primary/90" />

      {/* Content */}
      <div className="container-custom relative z-20 pt-24 pb-0">
        <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-xl md:text-2xl mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {subtitle}
            </p>
          )}
          {buttonText && (
            <div
              className="animate-slide-up mt-16"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to={buttonLink} className="btn btn-primary">
                {buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
