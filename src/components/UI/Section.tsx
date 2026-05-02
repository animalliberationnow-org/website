interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean; // We can repurpose this for "lighter dark" vs "pitch black dark"
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  dark = true
}) => {
  // We use dark = true as default for pitch black, dark = false for the slightly elevated primary-light.
  // We only apply these background defaults if no specific bg- class is passed in className.
  const hasBgClass = className.includes('bg-');
  const bgClass = hasBgClass ? '' : (dark ? 'bg-primary' : 'bg-primary-light');

  return (
    <section className={`section ${bgClass} text-text-main relative ${className}`}>
      <div className="container-custom relative z-10">
        {(title || subtitle) && (
          <div className="section-title max-w-3xl mx-auto">
            {title && <h2 className="mb-4 text-text-main drop-shadow-[0_0_15px_var(--glow-white)]">{title}</h2>}
            {subtitle && <p className="text-lg md:text-xl text-text-muted font-medium">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;