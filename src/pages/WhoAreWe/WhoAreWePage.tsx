import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const WhoAreWePage = () => {
  return (
    <>
      <Hero
        title="Who Are We?"
        subtitle="Animal Liberation Now! is a non-profit working towards ending Human Supremacy."
        backgroundImage="/heroes/ns2.webp"
        centered={true}
      />

      {/* Main Content */}
      <Section dark={false}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 md:p-12 space-y-6 text-text-muted leading-relaxed text-lg">
            <p>
              Animal Liberation Now! is a non-profit working towards ending Human Supremacy. We are an unapologetic and abolitionist group organised to make respecting animal rights the norm.
            </p>
            <p>
              We envision a world where non-human animals are no longer treated as inferior, less important, commodities, options or expendables. We believe in consistent anti-oppression, taking a stance against all forms of discrimination, systemic violence and social injustice.
            </p>
            <p>
              Originally started as a local group of activists in The City of Chennai, Tamil Nadu, India, we are on our way to becoming a global network of animal rights activists working in unison for animal liberation.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Team */}
      <Section dark={true}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4">Our Team</h2>
            <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter mb-6">
              Meet The Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-panel overflow-hidden">
              <img
                src="/team/sam.webp"
                alt="Samaran Thamarai"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-text-main">Samaran Thamarai</h3>
                <p className="text-accent font-bold mb-4 uppercase tracking-wide">Co-founder and Director</p>
              </div>
            </div>

            <div className="glass-panel overflow-hidden">
              <img
                src="/team/mahesh.webp"
                alt="Dr. Mahesh"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-text-main">Dr. Mahesh</h3>
                <p className="text-accent font-bold mb-4 uppercase tracking-wide">Co-founder and Director</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WhoAreWePage;
