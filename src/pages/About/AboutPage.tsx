import { Heart, Users, Award, Globe, Calendar, BookOpen } from "lucide-react";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const AboutPage = () => {
  return (
    <>
      <Hero
        title="About Animal Liberation Now"
        subtitle="Learn about our mission, values, and the dedicated team working to end animal exploitation."
        backgroundImage="/website-section/section2.jpg"
      />

      {/* Our Story */}
      <Section
        title="Our Story"
        subtitle="From a small group of dedicated activists to a nationwide movement for animal liberation."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <p className="mb-6">
              Animal Liberation Now was a small group of dedicated animal rights
              activists who recognized the need for a bold, uncompromising voice
              for animals. What began as local protests and has grown into a
              nationwide movement with many supporters.
            </p>
            <p className="mb-6">
              Our organization was born from the recognition that despite
              decades of animal welfare reforms, the fundamental exploitation of
              animals continues on an industrial scale. We believe that
              meaningful change requires challenging the very foundations of how
              humans relate to other animals.
            </p>
            <p>
              Today, ALN works on multiple activism. Our approach combines the
              urgency of direct action with the long-term vision of creating
              systemic change in how society views and treats animals.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/website-section/section4.jpg"
              alt="ALN activists at protest"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Our Mission and Values */}
      <Section
        title="Our Mission and Values"
        subtitle="The principles that guide our work for animal liberation."
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-12">
          <div className="bg-primary-light p-8 rounded-lg">
            <Heart className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-3">Mission</h3>
            <p>
              To end the exploitation of animals by challenging speciesism
              through activism, education, and direct action, and to create a
              world where animals are treated with the respect and consideration
              they deserve as sentient beings.
            </p>
          </div>

          <div className="bg-primary-light p-8 rounded-lg">
            <Users className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-3">Vision</h3>
            <p>
              A world where animals are no longer exploited for food, clothing,
              experimentation, entertainment, or any other purpose; where humans
              recognize and respect the inherent value and autonomy of all
              sentient beings.
            </p>
          </div>

          <div className="bg-primary-light p-8 rounded-lg">
            <Award className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-3">Values</h3>
            <ul className="space-y-2">
              <li>
                <strong>Compassion:</strong> We approach our advocacy with
                empathy for all beings.
              </li>
              <li>
                <strong>Justice:</strong> We believe in fairness and equity for
                all sentient beings.
              </li>
              <li>
                <strong>Courage:</strong> We stand firm in our convictions, even
                when they challenge mainstream views.
              </li>
              <li>
                <strong>Integrity:</strong> We remain true to our principles and
                commitments.
              </li>
              <li>
                <strong>Inclusivity:</strong> We welcome all who share our
                vision, regardless of background.
              </li>
            </ul>
          </div>

          <div className="bg-primary-light p-8 rounded-lg">
            <Globe className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-3">Approach</h3>
            <ul className="space-y-2">
              <li>
                <strong>Direct Action:</strong> We intervene directly to prevent
                animal suffering.
              </li>
              <li>
                <strong>Public Education:</strong> We raise awareness about
                animal exploitation.
              </li>
              <li>
                <strong>Rescue & Sanctuary:</strong> We proudly support the Blue
                Cross Safe Haven, providing a refuge for rescued animals.
              </li>
              <li>
                <strong>Food Advocacy:</strong> We promote plant-based living as
                a moral imperative.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Our Team */}
      <Section
        title="Our Team"
        subtitle="Meet the dedicated individuals leading our organization."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {/* Team Member 1 */}
          <div className="card hover:translate-y-[-5px]">
            <img
              src="/team-members/samaran.jpeg"
              alt="Samaran"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Samaran</h3>
              <p className="text-accent mb-4">Director!</p>
              <p className="mb-4">
                Samaran has been an animal rights activist for over 7 years and
                brings extensive experience in nonprofit leadership and campaign
                strategy.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="card hover:translate-y-[-5px]">
            <img
              src="/team-members/samaran.jpeg"
              alt="Samaran"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Samaran</h3>
              <p className="text-accent mb-4">Director!</p>
              <p className="mb-4">
                Samaran has been an animal rights activist for over 7 years and
                brings extensive experience in nonprofit leadership and campaign
                strategy.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="card hover:translate-y-[-5px]">
            <img
              src="/team-members/samaran.jpeg"
              alt="Samaran"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Samaran</h3>
              <p className="text-accent mb-4">Director!</p>
              <p className="mb-4">
                Samaran has been an animal rights activist for over 7 years and
                brings extensive experience in nonprofit leadership and campaign
                strategy.
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="card hover:translate-y-[-5px]">
            <img
              src="/team-members/samaran.jpeg"
              alt="Samaran"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Samaran</h3>
              <p className="text-accent mb-4">Director!</p>
              <p className="mb-4">
                Samaran has been an animal rights activist for over 7 years and
                brings extensive experience in nonprofit leadership and campaign
                strategy.
              </p>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="card hover:translate-y-[-5px]">
            <img
              src="/team-members/samaran.jpeg"
              alt="Samaran"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Samaran</h3>
              <p className="text-accent mb-4">Director!</p>
              <p className="mb-4">
                Samaran has been an animal rights activist for over 7 years and
                brings extensive experience in nonprofit leadership and campaign
                strategy.
              </p>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="card hover:translate-y-[-5px]">
            <img
              src="/team-members/samaran.jpeg"
              alt="Samaran"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Samaran</h3>
              <p className="text-accent mb-4">Director!</p>
              <p className="mb-4">
                Samaran has been an animal rights activist for over 7 years and
                brings extensive experience in nonprofit leadership and campaign
                strategy.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Impact */}
      <Section
        title="Our Impact"
        subtitle="Through strategic activism and dedicated advocacy, we've made significant progress for animals."
        dark={true}
      >
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary-light p-8 rounded-lg text-center">
            <div className="text-6xl font-bold text-accent mb-4">25+</div>
            <h3 className="text-xl font-bold mb-2">Campaigns</h3>
            <p>
              We've launched over 25 outreaches in Chennai, and educated people
              on how humans exploit animals.
            </p>
          </div>

          <div className="bg-primary-light p-8 rounded-lg text-center">
            <div className="text-6xl font-bold text-accent mb-4">10k+</div>
            <h3 className="text-xl font-bold mb-2">Animals Saved</h3>
            <p>
              Our direct actions and interventions have saved animals from
              exploitation and suffering by atleast us changing.
            </p>
          </div>

          <div className="bg-primary-light p-8 rounded-lg text-center">
            <div className="text-6xl font-bold text-accent mb-4">0</div>
            <h3 className="text-xl font-bold mb-2">Policy Wins</h3>
            <p>
              We've helped secure 0 major policy changes till now but we will
              try to improve protection for animals and limit exploitation by
              insisting to change government policies.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">ALN Collective Impact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Heart className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Many Local Outreaches</h4>
                  <p>
                    ALN members have conducted over 25+ street and digital
                    outreaches, sparking conversations and inspiring change in
                    their communities.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">
                    Rejecting All Animal-Derived Products
                  </h4>
                  <p>
                    Every ALN member has taken a stand by eliminating all
                    animal-derived food, fashion, and personal care items from
                    their lives.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">
                    Disrupting Cruelty in Our Surroundings
                  </h4>
                  <p>
                    From reporting abuse to intervening in live situations, ALN
                    activists actively prevent animal suffering in real time.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Inspiring Ethical Shifts</h4>
                  <p>
                    Through personal example and activism, our members have
                    helped hundreds of others rethink their relationship with
                    animals.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/outreach/outreach-main.png"
              alt="ALN members in action"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary text-secondary p-8 rounded-lg text-center">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-bold mb-4">Join an Event</h3>
            <p className="mb-6">
              Attend protests, workshops, and educational events to connect with
              our community.
            </p>
            <a href="/calendar" className="btn btn-primary">
              View Calendar
            </a>
          </div>

          <div className="bg-primary text-secondary p-8 rounded-lg text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-bold mb-4">Support Our Work</h3>
            <p className="mb-6">
              Donations provide the resources needed to continue our help to
              bluecross and outreaches.
            </p>
            <a href="/support" className="btn btn-primary">
              Donate Now
            </a>
          </div>

          <div className="bg-primary text-secondary p-8 rounded-lg text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-bold mb-4">Learn More</h3>
            <p className="mb-6">
              Explore our articles and resources to deepen your understanding of
              animal rights.
            </p>
            <a href="/articles" className="btn btn-primary">
              Read Articles
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
