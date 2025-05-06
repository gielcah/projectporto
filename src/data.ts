import { ArtworkType, CommissionType } from './types';

export const artworks: ArtworkType[] = [
  {
    id: '1',
    title: 'Spirit Guardian',
    description: 'A mystical character design featuring a forest spirit guardian.',
    imageUrl: 'https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg',
    category: 'character',
    year: '2023'
  },
  {
    id: '2',
    title: 'Cityscape Dreams',
    description: 'Futuristic anime-style cityscape with neon lights.',
    imageUrl: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    category: 'background',
    year: '2023'
  },
  {
    id: '3',
    title: 'Battle Ready',
    description: 'Dynamic action pose of a warrior character with special effects.',
    imageUrl: 'https://images.pexels.com/photos/6976779/pexels-photo-6976779.jpeg',
    category: 'illustration',
    year: '2022'
  },
  {
    id: '4',
    title: 'Ocean Whispers',
    description: 'Serene character design with ocean-themed elements.',
    imageUrl: 'https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg',
    category: 'character',
    year: '2022'
  },
  {
    id: '5',
    title: 'Mystic Forest',
    description: 'Detailed fantasy forest environment with magical elements.',
    imageUrl: 'https://images.pexels.com/photos/1654695/pexels-photo-1654695.jpeg',
    category: 'background',
    year: '2023'
  },
  {
    id: '6',
    title: 'Urban Legend',
    description: 'Character design based on modern urban fantasy concept.',
    imageUrl: 'https://images.pexels.com/photos/6976752/pexels-photo-6976752.jpeg',
    category: 'character',
    year: '2023'
  },
  {
    id: '7',
    title: 'Cherry Blossom Journey',
    description: 'Seasonal illustration featuring cherry blossoms and a wandering character.',
    imageUrl: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg',
    category: 'illustration',
    year: '2022'
  },
  {
    id: '8',
    title: 'Cyber Dreams',
    description: 'Cyberpunk character design with glowing neon elements.',
    imageUrl: 'https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg',
    category: 'character',
    year: '2023'
  }
];

export const commissionTypes: CommissionType[] = [
  {
    id: 'character',
    name: 'Character Design',
    description: 'Fully rendered character designs based on your description or reference. Includes a front view and optional profile or back view, as well as color palette and simple background.',
    includes: [
      'High-resolution character design (full body)',
      'Color variations (up to 2)',
      'Simple background',
      'Character profile sheet',
      'Commercial rights available for additional fee'
    ],
    pricing: [
      { type: 'Basic (one pose)', amount: 150 },
      { type: 'Standard (two poses)', amount: 250 },
      { type: 'Deluxe (full reference sheet)', amount: 350 }
    ],
    turnaround: '7-10 business days from approval of initial sketch',
    sampleImage: 'https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg'
  },
  {
    id: 'illustration',
    name: 'Full Illustration',
    description: 'Detailed illustration with character(s) in a scene with background. Perfect for cover art, promotional materials, or personal projects requiring a complete scene.',
    includes: [
      'High-resolution artwork (4000x3000px min)',
      'Up to 2 characters (additional characters at extra cost)',
      'Detailed background',
      'Process work (sketches and WIPs)',
      'Commercial rights available for additional fee'
    ],
    pricing: [
      { type: 'Single character + simple background', amount: 300 },
      { type: 'Two characters + detailed background', amount: 450 },
      { type: 'Complex scene (3+ characters)', amount: 600 }
    ],
    turnaround: '14-21 business days depending on complexity',
    sampleImage: 'https://images.pexels.com/photos/6976779/pexels-photo-6976779.jpeg'
  },
  {
    id: 'environment',
    name: 'Environment Art',
    description: 'Detailed environment and background art for your project. Can be created with or without characters, focusing on creating atmospheric and immersive scenes.',
    includes: [
      'High-resolution artwork (4000x2250px min)',
      'Multiple perspective options',
      'Day/night variations available',
      'Process work (sketches and WIPs)',
      'Commercial rights available for additional fee'
    ],
    pricing: [
      { type: 'Simple environment', amount: 200 },
      { type: 'Detailed environment', amount: 350 },
      { type: 'Complex scene with multiple elements', amount: 500 }
    ],
    turnaround: '10-14 business days depending on complexity',
    sampleImage: 'https://images.pexels.com/photos/1654695/pexels-photo-1654695.jpeg'
  },
  {
    id: 'chibi',
    name: 'Chibi Art',
    description: 'Cute, stylized chibi versions of characters. Perfect for emotes, stickers, profile pictures, and merchandise.',
    includes: [
      'High-resolution artwork',
      'Transparent background',
      'Up to 3 expressions for the same character',
      'Simple colored background options',
      'Commercial rights available for additional fee'
    ],
    pricing: [
      { type: 'Single chibi character', amount: 75 },
      { type: 'Chibi couple/pair', amount: 130 },
      { type: 'Chibi emotion set (6 expressions)', amount: 200 }
    ],
    turnaround: '3-5 business days',
    sampleImage: 'https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg'
  }
];