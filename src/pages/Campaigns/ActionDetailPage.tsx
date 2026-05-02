import { useParams, Link } from "react-router-dom";
import { HiArrowLeft, HiCalendar, HiMapPin } from "react-icons/hi2";
import Hero from "../../components/UI/Hero";
import Section from "../../components/UI/Section";

const actionsData = {
  "1": {
    title: "Activists Protest against Animal Captivity",
    location: "Vandalur Zoo, Chennai",
    date: "2026-04-15",
    summary: "Animal Rights Activists in Chennai gathered in front of the (in)famous Vandalur Zoo to express opposition to animal captivity for human entertainment. We stood strong despite the Police trying to remove us from the area.",
    content: "Zoos are systems of slavery and lifelong imprisonment. During this action, activists educated hundreds of visitors about the ethical implications of animal captivity. Despite police attempts to disperse the peaceful protest, the activists stood their ground and successfully distributed over 500 informational leaflets.",
    mainImage: "/events/Vadalur%20Zoo%20/DSC_0012.JPG",
    gallery: [
      "/events/Vadalur%20Zoo%20/DSC_0012.JPG",
      "/events/Vadalur%20Zoo%20/DSC_0020%20(1).JPG",
      "/events/Vadalur%20Zoo%20/DSC_0025%20(1).JPG",
      "/events/Vadalur%20Zoo%20/DSC_0035%20(1).JPG",
      "/events/Vadalur%20Zoo%20/DSC_0036.JPG",
      "/events/Vadalur%20Zoo%20/DSC_0046.JPG",
      "/events/Vadalur%20Zoo%20/DSC_0052%20(1).JPG"
    ]
  },
  "2": {
    title: "Protest against animals in captivity",
    location: "Bannerghatta Zoo, Bangalore",
    date: "2026-03-22",
    summary: "We joined hands to protest the use of animals for human entertainment at Bannerghatta Zoo, Bengaluru. It was a day long protest, with activists actively speaking to visitors about the ethics of zoos.",
    content: "A day-long direct action where our volunteers engaged in Socratic dialogue with families visiting the zoo. We highlighted how animals are captured or bred into confinement, removed from their natural social structures, and displayed for human entertainment. The response was overwhelming, with many families choosing not to buy tickets after understanding the reality.",
    mainImage: "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20DSC_0432.JPG",
    gallery: [
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20DSC_0432.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20DSC_0433.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20DSC_0453.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20IMG_2027.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20IMG_2036.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20IMG_2046.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20IMG_2058.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20DSC.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20DSC00986.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20DSC01035.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20DSC01081.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20DSC01138.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20DSC01139.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20DSC01220.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20DSC01245.JPG"
    ]
  },
  "3": {
    title: "Circle of Justice",
    location: "Pondy Bazaar, Chennai",
    date: "2026-02-10",
    summary: "Activists stood shoulder to shoulder, holding display devices exposing the brutality of animal agriculture. Thousands watched in horror as they realized how cruel their daily choices were.",
    content: "The Circle of Justice is one of our most powerful outreach methods. By standing in a tight formation holding screens showing standard industry practices, we create an unignorable truth right in the middle of high-foot-traffic areas. Over 100 deep conversations were had with bystanders, many of whom committed to transitioning to a vegan lifestyle.",
    mainImage: "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01742.JPG",
    gallery: [
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01742.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01745.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01746.JPG",
      "/events/Pondy%20Bazar%2029th%20/DSC01747.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01750.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01751.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01758.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01763.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01765.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01781.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01789.JPG"
    ]
  },
  "4": {
    title: "Hundreds Reached at Marina Beach Cube",
    location: "Marina Beach, Chennai",
    date: "2026-01-05",
    summary: "Our latest outreach effort on Marina Beach saw tremendous engagement. Passersby engaged in deep conversations about the realities of the dairy and meat industries.",
    content: "Marina Beach is always bustling. We set up a highly visible Cube of Truth. Our out-reach specialists spoke to hundreds of people about the dairy industry, khal bachcha, and the realities of egg production. The visual impact against the backdrop of the beach made this one of our most successful events of the year.",
    mainImage: "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02001.JPG",
    gallery: [
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02001.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02018.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02062.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02094.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02150.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02151.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02162.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02189.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02243.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02344.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02393.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02401.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02404.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02418.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02459.JPG"
    ]
  }
};

const ActionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const action = id ? actionsData[id as keyof typeof actionsData] : null;

  if (!action) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center text-text-main">
        <div className="text-center">
          <h2 className="text-4xl font-black mb-4">Action Record Not Found</h2>
          <Link to="/" className="btn btn-primary">Return to Base</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary min-h-screen">
      <Hero
        title={action.title}
        subtitle={action.summary}
        backgroundImage={action.mainImage}
        centered={true}
      />

      <Section dark={true} className="pt-10">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-accent hover:text-text-main font-bold uppercase tracking-widest text-sm mb-12 transition-colors">
            <HiArrowLeft className="mr-2" /> Back to Operations
          </Link>

          <div className="flex flex-wrap gap-6 mb-12 border-b border-glass-border pb-8">
            <div className="flex items-center text-text-muted font-bold tracking-wider uppercase text-sm">
              <HiMapPin className="mr-2 text-accent h-5 w-5" /> {action.location}
            </div>
            <div className="flex items-center text-text-muted font-bold tracking-wider uppercase text-sm">
              <HiCalendar className="mr-2 text-accent h-5 w-5" /> {new Date(action.date).toLocaleDateString()}
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-text-muted mb-20 leading-relaxed font-medium">
            <p>{action.content}</p>
          </div>

          <h3 className="text-3xl font-black uppercase text-text-main mb-10 tracking-tight drop-shadow-glow-white">Mission Gallery</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {action.gallery.map((img, idx) => (
              <div key={idx} className="glass-panel p-2 rounded-3xl overflow-hidden hover:shadow-neon transition-shadow">
                <img src={img} alt={`Gallery image ${idx + 1}`} className="w-full h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ActionDetailPage;
