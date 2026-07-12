export interface EventType {
  id: string;
  title: string;
  summary: string;
  date: string; // ISO format: YYYY-MM-DD
  place: string;
  image: string;
  link: string;
  status: 'recent' | 'upcoming';
  gallery?: string[]; // Optional gallery images for recent events
}

export const events: EventType[] = [
  // Recent Events
  {
    id: "1",
    title: "Activists Protest against Animal Captivity - Vandalur Zoo, Chennai",
    summary: "Animal Rights Activists in Chennai gathered in front of the (in)famous Vandalur Zoo to express opposition to animal captivity for human entertainment. We stood strong despite the Police trying to remove us from the area.",
    date: "2024-11-15",
    place: "Vandalur Zoo, Chennai",
    image: "/events/Vadalur%20Zoo%20/DSC_0012.JPG",
    link: "/events/1",
    status: "recent",
    gallery: [
      "/events/Vadalur%20Zoo%20/DSC_0012.JPG",
      "/events/Vadalur%20Zoo%20/DSC_0012.JPG",
      "/events/Vadalur%20Zoo%20/DSC_0012.JPG",
      "/events/Vadalur%20Zoo%20/DSC_0012.JPG"
    ]
  },
  {
    id: "2",
    title: "Protest against animals in captivity in front of Bannerghatta Zoo, Bangalore",
    summary: "We joined hands to protest the use of animals for human entertainment at Bannerghatta Zoo, Bengaluru. It was a day long protest, with activists actively speaking to visitors about the ethics of zoos.",
    date: "2024-10-22",
    place: "Bannerghatta Zoo, Bengaluru",
    image: "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20DSC_0432.JPG",
    link: "/events/2",
    status: "recent",
    gallery: [
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20DSC_0432.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20DSC_0432.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20DSC_0432.JPG",
      "/events/Bannerghatta%20Zoo%20Bengaluru%20/Copy%20of%20Copy%20of%20DSC_0432.JPG"
    ]
  },
  {
    id: "3",
    title: "Circle of Justice - Pondy Bazaar, Chennai",
    summary: "Activists stood shoulder to shoulder, holding display devices exposing the brutality of animal agriculture. Thousands watched in horror as they realized how cruel their daily choices were.",
    date: "2024-09-08",
    place: "Pondy Bazaar, Chennai",
    image: "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01742.JPG",
    link: "/events/3",
    status: "recent",
    gallery: [
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01742.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01742.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01742.JPG",
      "/events/Pondy%20Bazar%2029th%20/Copy%20of%20DSC01742.JPG"
    ]
  },
  {
    id: "4",
    title: "Hundreds Reached at Marina Beach Cube",
    summary: "Our latest Circle of Justice video outreach effort on Marina Beach saw tremendous engagement. Passersby engaged in deep conversations about the realities of the dairy and meat industries.",
    date: "2024-08-17",
    place: "Marina Beach, Chennai",
    image: "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02344.JPG",
    link: "/events/4",
    status: "recent",
    gallery: [
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02344.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02344.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02344.JPG",
      "/events/Chennai%20Inauguration,%20workshops%20and%20outreach%20/Copy%20of%20DSC02344.JPG"
    ]
  },
  // Upcoming Events
  {
    id: "5",
    title: "Chennai Outreach - Anna Tower Park",
    summary: "Join us as we stand against the cruelty inflicted on animals. Together, we'll raise awareness about the harsh realities of animal exploitation and advocate for true animal rights.",
    date: "2025-08-15",
    place: "Anna Tower Park, Chennai",
    image: "/outreach/outreach10.jpeg",
    link: "/events/5",
    status: "upcoming"
  },
  {
    id: "6",
    title: "Weekend Activism - Public Outreach",
    summary: "Be part of our weekly outreach program. Engage with the public, share the truth about animal exploitation, and help create awareness in your community.",
    date: "2025-08-22",
    place: "Anna Tower Park, Chennai",
    image: "/outreach/outreach3.jpeg",
    link: "/events/6",
    status: "upcoming"
  }
];
