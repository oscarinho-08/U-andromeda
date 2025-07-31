export interface TestimonialCard {
    img: string;
    name: string;
    career: string;
    description: string;
}

export const TESTIMONIALS_CARDS: TestimonialCard[] = [
    {
      img: '"https://randomuser.me/api/portraits/women/44.jpg"',
      name: 'John Doe',
      career: 'Software Engineer',
      description: 'This is a fantastic product! It has changed the way I work.',
    },
    {
      img: '"https://randomuser.me/api/portraits/women/44.jpg"',
      name: 'Jane Smith',
      career: 'Product Manager',
      description: 'An amazing experience! Highly recommend to everyone.',
    },
    {
      img: '"https://randomuser.me/api/portraits/women/44.jpg"',
      name: 'Alice Johnson',
      career: 'UX Designer',
      description: 'A game changer in the industry. Love it!',
    },
]