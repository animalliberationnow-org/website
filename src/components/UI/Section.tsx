interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  dark = false
}) => {
  return (
    <section className={`section ${dark ? 'bg-primary text-secondary' : 'bg-secondary text-primary'} ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="section-title max-w-3xl mx-auto">
            {title && <h2 className="mb-4">{title}</h2>}
            {subtitle && <p className="text-lg md:text-xl opacity-80">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;