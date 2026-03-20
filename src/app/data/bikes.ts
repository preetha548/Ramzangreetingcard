export interface Bike {
  id: string;
  name: string;
  brand: string;
  type: 'mountain' | 'road' | 'electric' | 'city' | 'hybrid' | 'bmx';
  description: string;
  image: string;
  pricePerDay: number;
  pricePerWeek: number;
  rating: number;
  reviews: number;
  specifications: {
    frameSize: string;
    weight: string;
    gears: string;
    brakes: string;
    wheelSize: string;
  };
  features: string[];
  available: boolean;
  location: string;
}

export const bikes: Bike[] = [
  {
    id: '1',
    name: 'Trail Blazer Pro',
    brand: 'Mountain Master',
    type: 'mountain',
    description: 'High-performance mountain bike perfect for challenging trails and rough terrain. Features advanced suspension and durable construction for the ultimate off-road experience.',
    image: 'https://images.unsplash.com/photo-1645520719499-6856445fe4ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjB0cmFpbCUyMGZvcmVzdHxlbnwxfHx8fDE3NzM5OTAwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    pricePerDay: 45,
    pricePerWeek: 250,
    rating: 4.8,
    reviews: 156,
    specifications: {
      frameSize: 'M, L, XL',
      weight: '13.5 kg',
      gears: '21-speed Shimano',
      brakes: 'Hydraulic Disc',
      wheelSize: '29"',
    },
    features: ['Front Suspension', 'Aluminum Frame', 'Tubeless Ready', 'Dropper Post'],
    available: true,
    location: 'Downtown Store',
  },
  {
    id: '2',
    name: 'Speedster Carbon',
    brand: 'RoadRacer',
    type: 'road',
    description: 'Lightweight carbon fiber road bike designed for speed and endurance. Perfect for long-distance rides and competitive cycling with aerodynamic design.',
    image: 'https://images.unsplash.com/photo-1720749407246-abceac18f730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY3ljbGluZyUyMGJpY3ljbGUlMjByYWNlfGVufDF8fHx8MTc3Mzk5MDA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    pricePerDay: 55,
    pricePerWeek: 300,
    rating: 4.9,
    reviews: 203,
    specifications: {
      frameSize: 'S, M, L',
      weight: '7.8 kg',
      gears: '22-speed Shimano 105',
      brakes: 'Dual Pivot Caliper',
      wheelSize: '700c',
    },
    features: ['Carbon Frame', 'Drop Handlebars', 'Clipless Pedals', 'Racing Geometry'],
    available: true,
    location: 'City Center',
  },
  {
    id: '3',
    name: 'E-Cruiser Urban',
    brand: 'ElectroBike',
    type: 'electric',
    description: 'Premium electric bike with powerful motor and long-lasting battery. Effortlessly cruise through the city with pedal-assist technology.',
    image: 'https://images.unsplash.com/photo-1730351607286-dadd17b1444e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGJpa2UlMjBjaXR5JTIwc3RyZWV0fGVufDF8fHx8MTc3Mzk5MDA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    pricePerDay: 65,
    pricePerWeek: 380,
    rating: 4.7,
    reviews: 128,
    specifications: {
      frameSize: 'M, L',
      weight: '22 kg',
      gears: '7-speed',
      brakes: 'Hydraulic Disc',
      wheelSize: '28"',
    },
    features: ['250W Motor', '50km Range', 'LCD Display', 'Integrated Lights', 'USB Charging'],
    available: true,
    location: 'Downtown Store',
  },
  {
    id: '4',
    name: 'Urban Commuter',
    brand: 'CityRide',
    type: 'city',
    description: 'Comfortable city bike perfect for daily commuting and leisurely rides. Features upright riding position and practical accessories.',
    image: 'https://images.unsplash.com/photo-1759252306884-0fb83f6a1b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWtlJTIwcmVudGFsJTIwc2hvcCUyMGJpY3ljbGVzfGVufDF8fHx8MTc3Mzk5MDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    pricePerDay: 25,
    pricePerWeek: 140,
    rating: 4.6,
    reviews: 94,
    specifications: {
      frameSize: 'M, L',
      weight: '15 kg',
      gears: '7-speed',
      brakes: 'V-Brake',
      wheelSize: '28"',
    },
    features: ['Rear Rack', 'Fenders', 'Chain Guard', 'Kickstand', 'Bell'],
    available: true,
    location: 'City Center',
  },
  {
    id: '5',
    name: 'Stunt Master BMX',
    brand: 'FreestylePro',
    type: 'bmx',
    description: 'Durable BMX bike built for tricks, jumps, and freestyle riding. Features reinforced frame and responsive handling for park and street riding.',
    image: 'https://images.unsplash.com/photo-1630483264540-474d1103d33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXglMjBiaWtlJTIwdXJiYW58ZW58MXx8fHwxNzczOTkwMDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    pricePerDay: 30,
    pricePerWeek: 160,
    rating: 4.5,
    reviews: 67,
    specifications: {
      frameSize: 'One Size',
      weight: '11 kg',
      gears: 'Single Speed',
      brakes: 'U-Brake',
      wheelSize: '20"',
    },
    features: ['Chromoly Frame', '360° Handlebars', 'Pegs', 'Reinforced Fork'],
    available: true,
    location: 'Skate Park Location',
  },
  {
    id: '6',
    name: 'All-Terrain Hybrid',
    brand: 'VersaRide',
    type: 'hybrid',
    description: 'Versatile hybrid bike combining the best of road and mountain bikes. Perfect for mixed terrain and everyday adventures.',
    image: 'https://images.unsplash.com/photo-1468352965811-8b57e9a0781f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2luZyUyMGFkdmVudHVyZSUyMHN1bnNldHxlbnwxfHx8fDE3NzM5OTAwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    pricePerDay: 35,
    pricePerWeek: 190,
    rating: 4.7,
    reviews: 112,
    specifications: {
      frameSize: 'S, M, L',
      weight: '12.5 kg',
      gears: '24-speed',
      brakes: 'Disc Brakes',
      wheelSize: '700c',
    },
    features: ['Suspension Fork', 'Flat Handlebars', 'Puncture-Resistant Tires', 'Bottle Cage'],
    available: true,
    location: 'Downtown Store',
  },
];

export interface Route {
  id: string;
  name: string;
  location: string;
  distance: string;
  difficulty: 'easy' | 'moderate' | 'hard' | 'expert';
  duration: string;
  elevation: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  highlights: string[];
  bestBikeType: string[];
}

export const routes: Route[] = [
  {
    id: '1',
    name: 'Coastal Paradise Trail',
    location: 'Pacific Coast',
    distance: '45 km',
    difficulty: 'moderate',
    duration: '3-4 hours',
    elevation: '450m',
    description: 'Scenic coastal route with breathtaking ocean views and charming seaside towns. Perfect mix of flat sections and gentle climbs.',
    image: 'https://images.unsplash.com/photo-1769293191463-e0d620e71860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwcm91dGUlMjBjb3VudHJ5c2lkZSUyMHNjZW5pY3xlbnwxfHx8fDE3NzM5OTAwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.8,
    reviews: 234,
    highlights: ['Ocean Views', 'Beach Access', 'Coastal Towns', 'Lighthouse'],
    bestBikeType: ['road', 'hybrid'],
  },
  {
    id: '2',
    name: 'Mountain Peak Challenge',
    location: 'Alpine Region',
    distance: '32 km',
    difficulty: 'hard',
    duration: '4-5 hours',
    elevation: '1200m',
    description: 'Challenging mountain trail with steep climbs and technical descents. Rewards riders with spectacular panoramic views.',
    image: 'https://images.unsplash.com/photo-1645520719499-6856445fe4ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjB0cmFpbCUyMGZvcmVzdHxlbnwxfHx8fDE3NzM5OTAwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.9,
    reviews: 187,
    highlights: ['Summit Views', 'Forest Trails', 'Alpine Meadows', 'Wildlife'],
    bestBikeType: ['mountain'],
  },
  {
    id: '3',
    name: 'City Explorer Loop',
    location: 'Downtown District',
    distance: '18 km',
    difficulty: 'easy',
    duration: '1-2 hours',
    elevation: '80m',
    description: 'Urban cycling route through historic neighborhoods, parks, and cultural landmarks. Family-friendly with bike lanes throughout.',
    image: 'https://images.unsplash.com/photo-1730351607286-dadd17b1444e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGJpa2UlMjBjaXR5JTIwc3RyZWV0fGVufDF8fHx8MTc3Mzk5MDA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.6,
    reviews: 156,
    highlights: ['Historic Sites', 'City Parks', 'Cafes & Restaurants', 'Street Art'],
    bestBikeType: ['city', 'electric', 'hybrid'],
  },
  {
    id: '4',
    name: 'Countryside Escape',
    location: 'Rural Valley',
    distance: '65 km',
    difficulty: 'moderate',
    duration: '4-5 hours',
    elevation: '600m',
    description: 'Peaceful countryside route through rolling hills, farmland, and picturesque villages. Perfect for a day trip.',
    image: 'https://images.unsplash.com/photo-1569577540898-7dba159634c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwdG91ciUyMGdyb3VwJTIwcmlkZXJzfGVufDF8fHx8MTc3Mzk5MDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    reviews: 198,
    highlights: ['Rolling Hills', 'Farm Views', 'Historic Villages', 'Local Markets'],
    bestBikeType: ['road', 'hybrid', 'electric'],
  },
];
