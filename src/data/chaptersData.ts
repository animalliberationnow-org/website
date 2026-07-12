export interface ChapterType {
  id: string;
  name: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  contactEmail: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    x?: string;
  };
  image: string;
  activities: string[];
}

export const chapters: ChapterType[] = [
  {
    id: "bengaluru",
    name: "Animal Liberation Now! Bengaluru",
    city: "Bengaluru",
    country: "India",
    coordinates: {
      lat: 12.9716,
      lng: 77.5946
    },
    description: "ALN! Bengaluru is a grassroots activist collective dedicated to ending animal exploitation through direct action, public outreach, and community education. We organize regular street campaigns, protests, and awareness programs across the city.",
    contactEmail: "bengaluru@animalliberationnow.org",
    socialMedia: {
      instagram: "https://www.instagram.com/aln.bengaluru",
      facebook: "https://www.facebook.com/alnbengaluru"
    },
    image: "/outreach/outreach10.jpeg",
    activities: [
      "Weekly street outreach programs",
      "Circle of Justice events",
      "Institutional lectures and workshops",
      "Protests against animal captivity",
      "Activist training sessions"
    ]
  },
  {
    id: "chennai",
    name: "Animal Liberation Now! Chennai",
    city: "Chennai",
    country: "India",
    coordinates: {
      lat: 13.0827,
      lng: 80.2707
    },
    description: "ALN! Chennai is the founding chapter of Animal Liberation Now!, established to challenge speciesism and advocate for complete animal liberation. We lead the movement through consistent activism, investigations, and community building.",
    contactEmail: "chennai@animalliberationnow.org",
    socialMedia: {
      instagram: "https://www.instagram.com/animalliberationnow",
      facebook: "https://www.facebook.com/animalliberationnowofficial"
    },
    image: "/outreach/outreach3.jpeg",
    activities: [
      "Regular public outreach campaigns",
      "Demonstrations and protests",
      "Animal rights investigations",
      "Educational workshops",
      "Community networking events"
    ]
  }
];
