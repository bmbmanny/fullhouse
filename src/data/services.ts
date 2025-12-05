import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Residential Moving',
    description: 'Professional home moving services with careful handling of your belongings. From studio apartments to large homes, we make your move stress-free.',
    icon: 'home',
    slug: 'residential-moving',
    features: [
      'Full packing and unpacking services',
      'Furniture disassembly and reassembly',
      'Careful handling of fragile items',
      'Local and long-distance moves',
      'Loading and unloading assistance',
      'Fully insured and licensed',
    ],
  },
  {
    id: '2',
    title: 'Commercial Moving',
    description: 'Efficient office and business relocation services with minimal downtime. We understand the importance of getting your business up and running quickly.',
    icon: 'building',
    slug: 'commercial-moving',
    features: [
      'Office furniture and equipment moving',
      'IT equipment handling',
      'After-hours and weekend scheduling',
      'Cubicle and workspace setup',
      'Warehouse and retail relocations',
      'Project management coordination',
    ],
  },
  {
    id: '3',
    title: 'Junk Removal',
    description: 'Fast and eco-friendly junk removal services. We haul away unwanted items, furniture, and debris, leaving your space clean and clutter-free.',
    icon: 'trash',
    slug: 'junk-removal',
    features: [
      'Same-day service available',
      'Furniture and appliance removal',
      'Construction debris cleanup',
      'Yard waste removal',
      'Estate cleanouts',
      'Eco-friendly disposal and recycling',
    ],
  },
  {
    id: '4',
    title: 'Packing Services',
    description: 'Professional packing services to ensure your items are protected during transport. We provide all materials and expert packing techniques.',
    icon: 'box',
    slug: 'packing-services',
    features: [
      'High-quality packing materials',
      'Specialized packing for fragile items',
      'Custom crating for valuables',
      'Labeling and inventory services',
      'Unpacking services available',
      'Wardrobe boxes for clothing',
    ],
  },
];
