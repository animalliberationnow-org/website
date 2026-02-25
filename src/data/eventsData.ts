export interface EventType {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  type: 'outreach' | 'workshop' | 'fundraiser' | 'conference';
}

export const events: EventType[] = [
  {
    id: '1',
    title: 'Chennai Outreach',
    date: '2025-04-27',
    time: '4:00 PM - 7:00 PM',
    location: 'Anna Tower Park, Chennai',
    description: 'Join us as we stand against the cruelty inflicted on animals.Together, we’ll raise awareness about the harsh realities of animal exploitation and advocate for true animal rights',
    image: '/outreach/outreach10.jpeg',
    type: 'outreach'
  },
  {
    id: '2',
    title: 'Chennai Outreach',
    date: '2025-05-04',
    time: '4:00 PM - 7:00 PM',
    location: 'Anna Tower Park, Chennai',
    description: 'Join us as we stand against the cruelty inflicted on animals.Together, we’ll raise awareness about the harsh realities of animal exploitation and advocate for true animal rights',
    image: '/outreach/outreach3.jpeg',
    type: 'outreach'
  },
  {
    id: '3',
    title: 'Chennai Outreach',
    date: '2025-05-11',
    time: '4:00 PM - 7:00 PM',
    location: 'Anna Tower Park, Chennai',
    description: 'Join us as we stand against the cruelty inflicted on animals.Together, we’ll raise awareness about the harsh realities of animal exploitation and advocate for true animal rights',
    image: '/outreach/outreach4.jpeg',
    type: 'outreach'
  },
  {
    id: '4',
    title: 'Chennai Outreach',
    date: '2025-05-18',
    time: '4:00 PM - 7:00 PM',
    location: 'Anna Tower Park, Chennai',
    description: 'Join us as we stand against the cruelty inflicted on animals.Together, we’ll raise awareness about the harsh realities of animal exploitation and advocate for true animal rights',
    image: '/outreach/outreach5.jpeg',
    type: 'outreach'
  },
  {
    id: '5',
    title: 'Chennai Outreach',
    date: '2025-05-25',
    time: '4:00 PM - 7:00 PM',
    location: 'Anna Tower Park, Chennai',
    description: 'Join us as we stand against the cruelty inflicted on animals.Together, we’ll raise awareness about the harsh realities of animal exploitation and advocate for true animal rights',
    image: '/outreach/outreach6.jpeg',
    type: 'outreach'
  },
  {
    id: '6',
    title: 'Chennai Outreach',
    date: '2025-06-01',
    time: '4:00 PM - 7:00 PM',
    location: 'Anna Tower Park, Chennai',
    description: 'Join us as we stand against the cruelty inflicted on animals.Together, we’ll raise awareness about the harsh realities of animal exploitation and advocate for true animal rights',
    image: '/outreach/outreach7.jpeg',
    type: 'outreach'
  },
];