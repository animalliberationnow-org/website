import { HiAcademicCap } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";
import { articles } from "../../data/articlesData";

const ResourcesPage = () => {
  const topFAQs = articles.slice(0, 3);

  return (
    <>
      <Hero
        title="Resources"
        subtitle="Everything you need to become an effective advocate for animal liberation."
        backgroundImage="/outreach/outreach-main.webp"
        centered={true}
      />

      {/* Learn More Section */}
      <Section dark={false}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter mb-6">
              Learn More
            </h2>
          </div>

          <div className="space-y-8">
            {/* The Truth */}
            <div className="glass-panel p-8 group hover:shadow-neon transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-text-main group-hover:text-accent transition-colors">The Truth</h3>
                  <p className="text-lg text-text-muted">
                    Are you bold enough to look at the victims of our choices?
                  </p>
                </div>
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-glow-white">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/LQRAfJyEsko"
                    title="The Truth - Animal Exploitation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* The Indian Dairy Industry */}
            <div className="glass-panel p-8 group hover:shadow-neon transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-text-main group-hover:text-accent transition-colors">The Indian Dairy Industry</h3>
                  <p className="text-lg text-text-muted">
                    Maa Kaa Dhoodh is a documentary exposing the truth behind India's dairy industry.
                  </p>
                </div>
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-glow-white">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/HbNJJsewrLQ"
                    title="Maa Ka Doodh Documentary"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section dark={true}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
              Get answers to common questions about animal rights, veganism, and activism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {topFAQs.map((article) => (
              <Link
                key={article.id}
                to={`/faqs/${article.id}`}
                className="glass-panel p-6 group hover:border-accent/30 hover:shadow-neon transition-all duration-500 shadow-glow-white"
              >
                <h3 className="text-lg font-bold mb-3 text-text-main group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-text-muted text-sm mb-4">{article.excerpt}</p>
                <div className="text-accent text-sm font-bold uppercase tracking-wider">
                  Read More →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/faqs" className="btn btn-primary px-8 py-3">
              View All FAQs
            </Link>
          </div>
        </div>
      </Section>

      {/* Activism Starter Kit Section */}
      <Section dark={false}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <HiAcademicCap className="h-16 w-16 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter mb-6">
              Activism Starter Kit
            </h2>
          </div>

          <div className="glass-panel p-8 md:p-12 mb-8">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Animal Liberation Now! Believes in creating an unapologetic and abolitionist movement for the animals. This calls for a unified and consistent representation of the movement that focuses on the victims.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-text-main">What is Animal Rights Activism?</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              While boycotting animal products and services removes one's active participation in animal oppression, the movement requires you to become vocal and speak up for non-human animals. Any effort one takes with the motive of changing society towards a world that respects animals is animal rights activism.
            </p>
            <div className="text-center">
              <Link to="/support" className="btn btn-primary px-8">
                Join Us
              </Link>
            </div>
          </div>

          {/* Activism Masterclass Video */}
          {/* <div className="glass-panel p-8 mb-8">
            <h3 className="text-3xl font-bold mb-6 text-text-main text-center">Activism Masterclass</h3>
            <div className="aspect-video w-full rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ZLIn4Zre9eE"
                title="Activism Masterclass"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div> */}

          {/* Outreach Guidelines */}
          <div className="glass-panel p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-text-main text-center">Outreach Guidelines</h3>

            <div className="prose prose-lg max-w-none text-text-muted space-y-6">
              <p className="text-center italic">
                Dear Comrade,<br />
                Welcome to the fight against speciesism. We are here to represent non-human animals—the victims of human supremacy. To maintain a powerful, unified message, please review and apply these core instructions.<br />
                While we celebrate your unique voice in the broader movement, we require strict adherence to these guidelines within all ALN!-organized spaces.
              </p>

              <div className="mt-8">
                <h4 className="text-2xl font-bold mb-4 text-text-main">A. Outreach Conduct</h4>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-xl font-bold mb-2 text-accent">1. Maintain Solemnity:</h5>
                    <p>This is a serious space dedicated to victims of systemic violence and exploitation. Approach your advocacy with appropriate gravity; do not laugh or goof around.</p>
                  </div>

                  <div>
                    <h5 className="text-xl font-bold mb-2 text-accent">2. De-escalate and Disengage:</h5>
                    <p>We operate on a strict no-anger policy. If confronted by hostile individuals or trolls, politely disengage. Never escalate, verbally abuse, or physically confront anyone.</p>
                  </div>

                  <div>
                    <h5 className="text-xl font-bold mb-2 text-accent">3. Report Disruption:</h5>
                    <p>Do not attempt to manage authorities or persistent troublemakers yourself. Immediately notify an outreach coordinator for assistance.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-2xl font-bold mb-4 text-text-main">B. The 4-Step Outreach Model</h4>
                <p className="mb-4">Structure your conversations using this strategic framework to maintain focus:</p>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-bold mb-2 text-accent">1. The Hook:</h5>
                    <p>Draw the passers-by in using the immediate theme, visual aids, or footage from the ongoing demonstration.</p>
                  </div>

                  <div>
                    <h5 className="text-xl font-bold mb-2 text-accent">2. The Point:</h5>
                    <p>Establish animal rights as a logical extension of universal rights. Position this clearly as an urgent issue of social justice, not personal preference.</p>
                  </div>

                  <div>
                    <h5 className="text-xl font-bold mb-2 text-accent">3. The Connection:</h5>
                    <p>Expose the symptoms of a human supremacist mindset. Challenge the conditioning that reduces sentient individuals to food, clothing, entertainment, or test subjects.</p>
                  </div>

                  <div>
                    <h5 className="text-xl font-bold mb-2 text-accent">4. Accountability:</h5>
                    <p>Urge them to align their ethics with their actions by taking the baseline step: boycotting all forms of animal exploitation. After a successful conversation, use the NFC cards given to you to tap on the audience's phones to open a resource page.</p>
                  </div>
                </div>

                <p className="mt-4 italic">If you have no prior experience, we recommend you shadow a few conversations by other activists before starting off.</p>
              </div>

              <div className="mt-8">
                <h4 className="text-2xl font-bold mb-4 text-text-main">C. Rules of Representation</h4>
                <p className="mb-4">You are free to bring your own style to the conversation, but you must conform to these foundational rules to ensure strategic consistency:</p>

                <ul className="space-y-4 list-none">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-text-main">Keep the Focus on Morality:</strong> We are here solely as animal rights advocates. Do not rely on human health, environmentalism, religion, or spirituality to make your case. We argue from a position of justice, not the benefits of a plant-based diet.
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="text-accent mr-3 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-text-main">Be Abolitionist and Unapologetic:</strong> Do not settle for reducetarian proposals or appeal to the abuser's comfort or emotions. The only acceptable answer is "Boycotting animal products and services right now is the right thing to do". If they are going around in circles expecting you to validate their excuses, call them out on being oppressors and animal abusers.
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="text-accent mr-3 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-text-main">Defend the Principle, Not the Alternative:</strong> When asked about alternatives to animal products, do not immediately pivot to plant-based substitutes. We must establish that an animal's right to life does not depend on the convenience of a replacement.
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="text-accent mr-3 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-text-main">Don't enter Tangents:</strong> Tangents are topics that drive the discussion away from the focus to an altogether different topic. Example: "But God has made animals for us to eat" do not respond with "What is the evidence God exists?"- this leads to a discussion about God's existence, not animal rights.
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="text-accent mr-3 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-text-main">Avoid the "Vegan" Label:</strong> ALN! intentionally separates animal liberation from consumer and dietary trends. Avoid vegan branding. Instead, frame the call to action around anti-speciesism and boycotting animal use.
                    </div>
                  </li>
                </ul>

                <p className="mt-6 italic">
                  Note: Once you have successfully established the anti-speciesist message and held the individual accountable, you are welcome to assist them with practical lifestyle transitions and a general conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ResourcesPage;
