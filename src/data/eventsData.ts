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
  // Recent Events (sorted by date, newest first)
  {
    id: "1",
    title: "Lalbagh Outreach - Animal Rights Advocacy",
    summary: "Activists in Bengaluru gathered at Lalbagh West Gate for an outreach session. Through meaningful conversations with passersby, they spoke about the oppression and gross injustices inflicted upon non-human animals. The engagement inspired someone to immediately recognize the gravity of the issue and join the movement instantly!",
    date: "2026-07-11",
    place: "Lalbagh West Gate, Bengaluru",
    image: "/events/20260711-bangalore/bangalore-01.webp",
    link: "/activism/1",
    status: "recent",
    gallery: [
      "/events/20260711-bangalore/bangalore-01.webp",
      "/events/20260711-bangalore/bangalore-03.webp",
      "/events/20260711-bangalore/bangalore-05.webp",
      "/events/20260711-bangalore/bangalore-07.webp",
      "/events/20260711-bangalore/bangalore-09.webp",
      "/events/20260711-bangalore/bangalore-11.webp"
    ]
  },
  {
    id: "2",
    title: "Fish Oppression Demonstration - Street Play",
    summary: "Animal Liberation Now! Bengaluru took to the streets with an eye-catching demonstration highlighting the oppression humans inflict on fishes. Activists painted their faces and lay on the ground under nets, reminding onlookers of the immense suffering we subject marine life to. The demonstration concluded with a powerful street play.",
    date: "2026-07-05",
    place: "Rajarajeshwari Nagar, Bengaluru",
    image: "/events/20260705-bangalore-fishnet-rajarajeswarinagar/bangalore-fishnet-rajarajeswarinagar-01.webp",
    link: "/activism/2",
    status: "recent",
    gallery: [
      "/events/20260705-bangalore-fishnet-rajarajeswarinagar/bangalore-fishnet-rajarajeswarinagar-01.webp",
      "/events/20260705-bangalore-fishnet-rajarajeswarinagar/bangalore-fishnet-rajarajeswarinagar-03.webp",
      "/events/20260705-bangalore-fishnet-rajarajeswarinagar/bangalore-fishnet-rajarajeswarinagar-05.webp",
      "/events/20260705-bangalore-fishnet-rajarajeswarinagar/bangalore-fishnet-rajarajeswarinagar-07.webp",
      "/events/20260705-bangalore-fishnet-rajarajeswarinagar/bangalore-fishnet-rajarajeswarinagar-09.webp",
      "/events/20260705-bangalore-fishnet-rajarajeswarinagar/bangalore-fishnet-rajarajeswarinagar-11.webp",
      "/events/20260705-bangalore-fishnet-rajarajeswarinagar/bangalore-fishnet-rajarajeswarinagar-13.webp",
      "/events/20260705-bangalore-fishnet-rajarajeswarinagar/bangalore-fishnet-rajarajeswarinagar-15.webp"
    ]
  },
  {
    id: "3",
    title: "Cage Demonstration - Pondy Bazaar",
    summary: "Animal Liberation Now! Chennai carried out a powerful cage demonstration in the bustling street of Pondy Bazaar. Activists engaged dozens of people, holding them accountable for their participation in animal oppression and encouraging reflection on their choices.",
    date: "2026-07-05",
    place: "Pondy Bazaar, Chennai",
    image: "/events/20260705-chennai-pondybazaar/chennai-pondybazaar-01.webp",
    link: "/activism/3",
    status: "recent",
    gallery: [
      "/events/20260705-chennai-pondybazaar/chennai-pondybazaar-01.webp",
      "/events/20260705-chennai-pondybazaar/chennai-pondybazaar-03.webp",
      "/events/20260705-chennai-pondybazaar/chennai-pondybazaar-05.webp",
      "/events/20260705-chennai-pondybazaar/chennai-pondybazaar-07.webp",
      "/events/20260705-chennai-pondybazaar/chennai-pondybazaar-09.webp",
      "/events/20260705-chennai-pondybazaar/chennai-pondybazaar-11.webp",
      "/events/20260705-chennai-pondybazaar/chennai-pondybazaar-13.webp"
    ]
  },
  {
    id: "4",
    title: "National Animal Rights Day 2026 (NARD)",
    summary: "Activists organized the 16th edition of National Animal Rights Day at Swami Sivananda Salai, Triplicane, Chennai. They paid tribute to the often forgotten non-human victims and signed the Declaration of Animal Rights. The event featured powerful speeches, poems, and songs about the struggle for animal liberation.",
    date: "2026-06-07",
    place: "Swami Sivananda Salai, Triplicane, Chennai",
    image: "/events/20260607-chennai-nard2026/chennai-nard2026-01.webp",
    link: "/activism/4",
    status: "recent",
    gallery: [
      "/events/20260607-chennai-nard2026/chennai-nard2026-01.webp",
      "/events/20260607-chennai-nard2026/chennai-nard2026-03.webp",
      "/events/20260607-chennai-nard2026/chennai-nard2026-05.webp",
      "/events/20260607-chennai-nard2026/chennai-nard2026-07.webp",
      "/events/20260607-chennai-nard2026/chennai-nard2026-09.webp"
    ]
  },
  // Upcoming Events
  {
    id: "5",
    title: "Coimbatore Chapter Inauguration - Activism Workshop & Outreach",
    summary: "We're hosting an activism workshop followed by a street outreach to inaugurate our Coimbatore Chapter. This session will empower activists to unlock their full potential and become an unstoppable force for animal rights.",
    date: "2026-07-19",
    place: "Shakthi Dental Hospital, Ganapathy, Coimbatore",
    image: "/events/20260719-coimbatore-innaugration/coimbatore-innaugration-01.webp",
    link: "/activism/5",
    status: "upcoming"
  }
];
