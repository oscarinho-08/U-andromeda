export interface TestimonialCard {
    img: string;
    name: string;
    career: string;
    description: string;
    bgGradient: string;
}

export const TESTIMONIALS_CARDS: TestimonialCard[] = [
    {
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'John Doe',
      career: 'Software Engineer',
      description: 'This is a fantastic product! It has changed the way I work.',
      bgGradient: 'from-fuchsia-500 via-rose-500 to-red-500'
    },
    {
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jane Smith',
      career: 'Product Manager',
      description: 'An amazing experience! Highly recommend to everyone.',
      bgGradient: 'from-indigo-500 via-purple-600 to-fuchsia-500'
    },
    {
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Alice Johnson',
      career: 'UX Designer',
      description: 'A game changer in the industry. Love it!',
      bgGradient: 'from-sky-400 via-cyan-500 to-teal-500'
    },
]

// | Nombre     | Clases Tailwind                                 |
// | ---------- | ----------------------------------------------- |
// | Fucsia Pop | `from-fuchsia-500 via-rose-500 to-red-500`      |
// | Andrómeda  | `from-indigo-500 via-purple-600 to-fuchsia-500` |
// | Fresh Sky  | `from-sky-400 via-cyan-500 to-teal-500`         |
// | Sunset     | `from-orange-400 via-pink-500 to-red-600`       |
