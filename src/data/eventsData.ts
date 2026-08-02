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
  // Set for posters/flyers: the detail page shows the image whole instead of
  // cropping it to a fixed banner height.
  poster?: boolean;
}

export const events: EventType[] = [
  // Recent Events (sorted by date, newest first)
  {
    id: "6",
    title: "Anna Nagar Tower Park Outreach",
    summary: "During this outreach, conversations were initiated without any screens or posters. The outreach was a successful one, with many honest conversations. Some even agreed to boycott all animal products immediately.",
    date: "2026-07-26",
    place: "Anna Nagar Tower Park, Chennai",
    image: "/events/20260726-chennai-anna-nagar-tower-park/thumb.webp",
    link: "/activism/6",
    status: "recent",
    gallery: [
      "/events/20260726-chennai-anna-nagar-tower-park/chennai-01.webp",
      "/events/20260726-chennai-anna-nagar-tower-park/chennai-02.webp",
      "/events/20260726-chennai-anna-nagar-tower-park/chennai-03.webp",
      "/events/20260726-chennai-anna-nagar-tower-park/chennai-04.webp",
      "/events/20260726-chennai-anna-nagar-tower-park/chennai-05.webp"
    ]
  },
  {
    id: "7",
    title: "Inaugural Workshop & Street Outreach - Coimbatore",
    summary: "Animal Liberation Now! Coimbatore started off with a stupendous workshop on understanding Animal Liberation and reflecting it in street outreach conversations, covering the need for effective and responsible animal rights activism. It was truly inspiring to know that people from all across the state attended the workshop. The passionate activists in Coimbatore conducted a street outreach near Kumaraswamy Lake. Several of these activists had traveled quite some distance to be here. They engaged the public in meaningful conversations applying the ideas and concepts learnt from the workshop.",
    date: "2026-07-19",
    place: "Kumaraswamy Lake, Coimbatore",
    image: "/events/20260719-coimbatore-inauguration/thumb.webp",
    link: "/activism/7",
    status: "recent",
    gallery: [
      "/events/20260719-coimbatore-inauguration/coimbatore-inauguration-02.webp",
      "/events/20260719-coimbatore-inauguration/coimbatore-inauguration-04.webp",
      "/events/20260719-coimbatore-inauguration/coimbatore-inauguration-05.webp",
      "/events/20260719-coimbatore-inauguration/coimbatore-inauguration-06.webp",
      "/events/20260719-coimbatore-inauguration/coimbatore-inauguration-07.webp"
    ]
  },
  {
    id: "1",
    title: "Lalbagh Outreach - Animal Rights Advocacy",
    summary: "Activists in Bengaluru gathered at Lalbagh West Gate for an outreach session. Through meaningful conversations with passersby, they spoke about the oppression and gross injustices inflicted upon non-human animals. The engagement inspired someone to immediately recognize the gravity of the issue and join the movement instantly!",
    date: "2026-07-11",
    place: "Lalbagh West Gate, Bengaluru",
    image: "/events/20260711-bangalore-lalbagh/thumb.webp",
    link: "/activism/1",
    status: "recent",
    gallery: [
      "/events/20260711-bangalore-lalbagh/bangalore-01.webp",
      "/events/20260711-bangalore-lalbagh/bangalore-03.webp",
      "/events/20260711-bangalore-lalbagh/bangalore-05.webp",
      "/events/20260711-bangalore-lalbagh/bangalore-07.webp",
      "/events/20260711-bangalore-lalbagh/bangalore-09.webp",
      "/events/20260711-bangalore-lalbagh/bangalore-11.webp"
    ]
  },
  {
    id: "2",
    title: "Fish Oppression Demonstration - Street Play",
    summary: "Animal Liberation Now! Bengaluru took to the streets with an eye-catching demonstration highlighting the oppression humans inflict on fishes. Activists painted their faces and lay on the ground under nets, reminding onlookers of the immense suffering we subject marine life to. The demonstration concluded with a powerful street play.",
    date: "2026-07-05",
    place: "Rajarajeshwari Nagar, Bengaluru",
    image: "/events/20260705-bangalore-fishnet-rajarajeswarinagar/thumb.webp",
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
  // Upcoming Events
  {
    id: "8",
    title: "Street Outreach - Media Tree, Race Course",
    summary: "Animal Liberation Now! Coimbatore returns to the streets for a public outreach at Media Tree, Race Course. Activists will engage passersby in honest conversations about the oppression of non-human animals and the choices that sustain it.",
    date: "2026-08-02",
    place: "Media Tree, Race Course, Coimbatore",
    image: "/events/20260802-coimbatore/thumb.webp",
    link: "/activism/8",
    status: "upcoming",
    poster: true
  },
  {
    id: "9",
    title: "Protest - Aavin Milk Production Unit",
    summary: "Activists will gather outside the Aavin milk production unit in Sholinganallur to protest the exploitation of cows and their calves by the dairy industry, and to confront the violence hidden behind everyday dairy products.",
    date: "2026-08-15",
    place: "Aavin Milk Production Unit, Sholinganallur",
    image: "/events/20260815-chennai/thumb.webp",
    link: "/activism/9",
    status: "upcoming",
    poster: true
  }
];
