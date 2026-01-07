// Mock Data for ECA Cleaning Portal - Australian Market

export const mockServices = [
  {
    id: 1,
    name: 'Regular Cleaning',
    description: 'Our regular cleaning services offer a consistent and reliable solution to keep your home spotless week after week.',
    duration: '2-3 hours',
    pricePerHour: 45,
    basePrice: 89,
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
    discount: 30,
    inclusions: ['Dusting all surfaces', 'Vacuuming & mopping', 'Bathroom cleaning', 'Kitchen cleaning', 'Bed making'],
    exclusions: ['Inside oven', 'Inside fridge', 'Windows exterior']
  },
  {
    id: 2,
    name: 'Deep Cleaning',
    description: 'Intensive cleaning including baseboards, inside cabinets, appliances, and hard-to-reach areas for a thorough refresh.',
    duration: '4-6 hours',
    pricePerHour: 55,
    basePrice: 199,
    icon: '✨',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400',
    discount: 20,
    inclusions: ['All regular cleaning', 'Inside oven & fridge', 'Baseboards', 'Light fixtures', 'Cabinet fronts'],
    exclusions: ['Carpet shampooing', 'External windows']
  },
  {
    id: 3,
    name: 'Kitchen Cleaning',
    description: 'The heart of your home deserves special attention. Comprehensive kitchen deep clean including appliances.',
    duration: '2-3 hours',
    pricePerHour: 50,
    basePrice: 129,
    icon: '🍳',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    discount: 35,
    inclusions: ['All surfaces', 'Inside oven', 'Inside fridge', 'Stovetop', 'Rangehood', 'Sink & taps'],
    exclusions: ['Pantry organisation']
  },
  {
    id: 4,
    name: 'Window Cleaning',
    description: 'Crystal-clear windows enhance your home\'s appearance and let natural light shine through beautifully.',
    duration: '1-3 hours',
    pricePerHour: 60,
    basePrice: 99,
    icon: '🪟',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400',
    discount: 25,
    inclusions: ['Interior windows', 'Exterior windows', 'Window sills', 'Tracks cleaning', 'Fly screens'],
    exclusions: ['Second storey exterior (extra charge)']
  },
  {
    id: 5,
    name: 'Bathroom Cleaning',
    description: 'A clean bathroom is essential for hygiene and comfort. Professional sanitisation and deep clean service.',
    duration: '1-2 hours',
    pricePerHour: 50,
    basePrice: 79,
    icon: '🚿',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400',
    discount: 30,
    inclusions: ['Toilet sanitisation', 'Shower/bath', 'Vanity & mirrors', 'Floor mopping', 'Grout cleaning'],
    exclusions: ['Mould treatment (extra)']
  },
  {
    id: 6,
    name: 'Commercial Cleaning',
    description: 'Professional cleaning solutions for offices, retail spaces, and commercial properties of all sizes.',
    duration: '2-4 hours',
    pricePerHour: 55,
    basePrice: 149,
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
    discount: 20,
    inclusions: ['Office desks', 'Common areas', 'Kitchen/breakroom', 'Restrooms', 'Floor care'],
    exclusions: ['Carpet shampooing', 'High dusting']
  },
  {
    id: 7,
    name: 'End of Lease / Bond Clean',
    description: 'Complete cleaning to get your bond back. We guarantee satisfaction or re-clean free.',
    duration: '4-8 hours',
    pricePerHour: 50,
    basePrice: 299,
    icon: '📦',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    discount: 15,
    inclusions: ['All rooms deep cleaned', 'Oven & rangehood', 'All windows', 'Carpets vacuumed', 'Garage swept'],
    exclusions: ['Carpet steam clean (add-on)', 'Pest control']
  },
  {
    id: 8,
    name: 'Carpet Cleaning',
    description: 'Professional carpet steam cleaning to remove stains, odours, and allergens from your carpets.',
    duration: '2-4 hours',
    pricePerHour: 65,
    basePrice: 149,
    icon: '🧹',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400',
    discount: 20,
    inclusions: ['Steam cleaning', 'Stain treatment', 'Deodorising', 'Quick dry technology'],
    exclusions: ['Furniture moving', 'Permanent stain removal']
  }
];

export const mockAddOns = [
  { id: 1, name: 'Inside Oven', price: 45 },
  { id: 2, name: 'Inside Fridge', price: 35 },
  { id: 3, name: 'Interior Windows (per window)', price: 10 },
  { id: 4, name: 'Laundry & Ironing', price: 40 },
  { id: 5, name: 'Balcony/Patio', price: 30 },
  { id: 6, name: 'Garage Sweep', price: 25 },
  { id: 7, name: 'Organising (per hour)', price: 55 },
  { id: 8, name: 'Eco-Friendly Products', price: 15 }
];

export const mockPricingPlans = [
  {
    id: 1,
    name: 'Start Plan',
    pricePerHour: 45,
    features: ['Flexible booking', 'Choose your tasks', 'Professional staff', 'Eco-friendly cleaning', 'No hidden charges', 'Same-day availability'],
    popular: false
  },
  {
    id: 2,
    name: 'Standard Plan',
    pricePerHour: 55,
    features: ['All Start features', 'Priority booking', 'Dedicated cleaner', 'Quality guarantee', '10% recurring discount', 'Free rescheduling'],
    popular: true
  },
  {
    id: 3,
    name: 'Premium Plan',
    pricePerHour: 65,
    features: ['All Standard features', 'Same cleaner always', 'Premium products', '24hr support', '15% recurring discount', 'Free add-ons monthly'],
    popular: false
  }
];

export const serviceAreas = [
  'Brisbane CBD', 'South Brisbane', 'Fortitude Valley', 'New Farm', 'Teneriffe',
  'West End', 'Paddington', 'Milton', 'Toowong', 'Indooroopilly',
  'Gold Coast', 'Surfers Paradise', 'Broadbeach', 'Southport', 'Robina',
  'Ipswich', 'Logan', 'Redlands', 'Moreton Bay', 'Sunshine Coast'
];

export const mockBookings = [
  {
    id: 'BK-2024-001',
    clientId: 'CL001',
    clientName: 'Sarah Thompson',
    clientEmail: 'sarah.t@email.com',
    clientPhone: '0412 345 678',
    cleanerId: 'CLN001',
    cleanerName: 'Maria Santos',
    service: 'Regular Cleaning',
    serviceId: 1,
    date: '2024-12-20',
    time: '09:00',
    duration: '3 hours',
    address: '42 Queen Street, Brisbane QLD 4000',
    propertyType: 'Apartment',
    bedrooms: 2,
    bathrooms: 1,
    status: 'Confirmed',
    price: 135,
    paymentStatus: 'Paid',
    addOns: ['Inside Fridge'],
    notes: 'Please focus on kitchen. Entry code: 1234',
    recurring: 'weekly',
    createdAt: '2024-12-15T10:30:00Z'
  },
  {
    id: 'BK-2024-002',
    clientId: 'CL002',
    clientName: 'Michael Chen',
    clientEmail: 'mchen@email.com',
    clientPhone: '0423 456 789',
    cleanerId: 'CLN002',
    cleanerName: 'Ana Rodriguez',
    service: 'Deep Cleaning',
    serviceId: 2,
    date: '2024-12-22',
    time: '10:00',
    duration: '5 hours',
    address: '156 Adelaide Street, Brisbane QLD 4000',
    propertyType: 'House',
    bedrooms: 4,
    bathrooms: 2,
    status: 'Pending',
    price: 275,
    paymentStatus: 'Deposit Paid',
    addOns: ['Inside Oven', 'Inside Fridge'],
    notes: 'First deep clean. Dog in backyard.',
    recurring: null,
    createdAt: '2024-12-16T14:20:00Z'
  },
  {
    id: 'BK-2024-003',
    clientId: 'CL003',
    clientName: 'Emily Watson',
    clientEmail: 'emily.w@email.com',
    clientPhone: '0434 567 890',
    cleanerId: 'CLN001',
    cleanerName: 'Maria Santos',
    service: 'End of Lease / Bond Clean',
    serviceId: 7,
    date: '2024-12-18',
    time: '08:00',
    duration: '6 hours',
    address: '88 Boundary Street, West End QLD 4101',
    propertyType: 'Apartment',
    bedrooms: 2,
    bathrooms: 1,
    status: 'Completed',
    price: 350,
    paymentStatus: 'Paid',
    addOns: ['Carpet Steam Clean'],
    notes: 'Bond clean - need receipt for agent',
    recurring: null,
    createdAt: '2024-12-10T09:00:00Z'
  },
  {
    id: 'BK-2024-004',
    clientId: 'CL004',
    clientName: 'David Wilson',
    clientEmail: 'dwilson@business.com',
    clientPhone: '0445 678 901',
    cleanerId: 'CLN003',
    cleanerName: 'Sofia Martinez',
    service: 'Commercial Cleaning',
    serviceId: 6,
    date: '2024-12-21',
    time: '18:00',
    duration: '3 hours',
    address: '200 Creek Street, Brisbane QLD 4000',
    propertyType: 'Office',
    bedrooms: 0,
    bathrooms: 2,
    status: 'Confirmed',
    price: 165,
    paymentStatus: 'Paid',
    addOns: [],
    notes: 'After hours cleaning. Security will let you in.',
    recurring: 'weekly',
    createdAt: '2024-12-14T16:45:00Z'
  },
  {
    id: 'BK-2024-005',
    clientId: 'CL001',
    clientName: 'Sarah Thompson',
    clientEmail: 'sarah.t@email.com',
    clientPhone: '0412 345 678',
    cleanerId: null,
    cleanerName: null,
    service: 'Window Cleaning',
    serviceId: 4,
    date: '2024-12-28',
    time: '11:00',
    duration: '2 hours',
    address: '42 Queen Street, Brisbane QLD 4000',
    propertyType: 'Apartment',
    bedrooms: 2,
    bathrooms: 1,
    status: 'Pending Assignment',
    price: 120,
    paymentStatus: 'Unpaid',
    addOns: [],
    notes: 'Interior and exterior windows - ground floor only',
    recurring: null,
    createdAt: '2024-12-17T11:30:00Z'
  }
];

export const mockClients = [
  {
    id: 'CL001',
    name: 'Sarah Thompson',
    email: 'sarah.t@email.com',
    phone: '0412 345 678',
    addresses: [
      { id: 1, label: 'Home', address: '42 Queen Street, Brisbane QLD 4000', isDefault: true }
    ],
    joinDate: '2024-01-15',
    totalBookings: 24,
    totalSpent: 2160,
    status: 'Active',
    preferences: {
      ecoFriendly: true,
      petFriendly: false,
      preferredDay: 'Friday',
      preferredTime: 'Morning',
      notes: 'Prefers Maria as cleaner'
    }
  },
  {
    id: 'CL002',
    name: 'Michael Chen',
    email: 'mchen@email.com',
    phone: '0423 456 789',
    addresses: [
      { id: 1, label: 'Home', address: '156 Adelaide Street, Brisbane QLD 4000', isDefault: true }
    ],
    joinDate: '2024-03-22',
    totalBookings: 8,
    totalSpent: 890,
    status: 'Active',
    preferences: {
      ecoFriendly: false,
      petFriendly: true,
      preferredDay: 'Saturday',
      preferredTime: 'Afternoon',
      notes: 'Has a friendly dog'
    }
  },
  {
    id: 'CL003',
    name: 'Emily Watson',
    email: 'emily.w@email.com',
    phone: '0434 567 890',
    addresses: [
      { id: 1, label: 'Old Address', address: '88 Boundary Street, West End QLD 4101', isDefault: false },
      { id: 2, label: 'New Home', address: '22 Park Road, Milton QLD 4064', isDefault: true }
    ],
    joinDate: '2024-02-10',
    totalBookings: 15,
    totalSpent: 1450,
    status: 'Active',
    preferences: {
      ecoFriendly: true,
      petFriendly: false,
      preferredDay: 'Wednesday',
      preferredTime: 'Morning',
      notes: ''
    }
  },
  {
    id: 'CL004',
    name: 'David Wilson',
    email: 'dwilson@business.com',
    phone: '0445 678 901',
    addresses: [
      { id: 1, label: 'Office', address: '200 Creek Street, Brisbane QLD 4000', isDefault: true }
    ],
    joinDate: '2024-04-05',
    totalBookings: 32,
    totalSpent: 5280,
    status: 'Active',
    preferences: {
      ecoFriendly: false,
      petFriendly: false,
      preferredDay: 'Weekday',
      preferredTime: 'After Hours',
      notes: 'Commercial client - weekly service'
    }
  },
  {
    id: 'CL005',
    name: 'Jennifer Lee',
    email: 'jlee@email.com',
    phone: '0456 789 012',
    addresses: [
      { id: 1, label: 'Home', address: '15 Surfers Paradise Blvd, Surfers Paradise QLD 4217', isDefault: true }
    ],
    joinDate: '2024-05-18',
    totalBookings: 6,
    totalSpent: 540,
    status: 'Active',
    preferences: {
      ecoFriendly: true,
      petFriendly: true,
      preferredDay: 'Monday',
      preferredTime: 'Morning',
      notes: 'Gold Coast area'
    }
  }
];

export const mockCleaners = [
  {
    id: 'CLN001',
    name: 'Maria Santos',
    email: 'maria.s@eca.com.au',
    phone: '0411 111 222',
    joinDate: '2023-06-15',
    rating: 4.9,
    reviewCount: 156,
    totalJobs: 245,
    totalEarnings: 18375,
    status: 'Active',
    skills: ['Regular Cleaning', 'Deep Cleaning', 'End of Lease', 'Window Cleaning'],
    availability: 'Full-time',
    areas: ['Brisbane CBD', 'South Brisbane', 'West End', 'New Farm'],
    bio: 'Professional cleaner with 5+ years experience. Detail-oriented and reliable.'
  },
  {
    id: 'CLN002',
    name: 'Ana Rodriguez',
    email: 'ana.r@eca.com.au',
    phone: '0422 222 333',
    joinDate: '2023-08-20',
    rating: 4.8,
    reviewCount: 132,
    totalJobs: 198,
    totalEarnings: 14850,
    status: 'Active',
    skills: ['Deep Cleaning', 'Commercial Cleaning', 'Carpet Cleaning'],
    availability: 'Full-time',
    areas: ['Brisbane CBD', 'Fortitude Valley', 'Milton', 'Paddington'],
    bio: 'Specialising in deep cleans and commercial properties.'
  },
  {
    id: 'CLN003',
    name: 'Sofia Martinez',
    email: 'sofia.m@eca.com.au',
    phone: '0433 333 444',
    joinDate: '2023-09-10',
    rating: 4.7,
    reviewCount: 98,
    totalJobs: 156,
    totalEarnings: 11700,
    status: 'Active',
    skills: ['Commercial Cleaning', 'Regular Cleaning', 'Kitchen Cleaning'],
    availability: 'Part-time',
    areas: ['Brisbane CBD', 'Toowong', 'Indooroopilly'],
    bio: 'Evening and weekend availability. Great for commercial clients.'
  },
  {
    id: 'CLN004',
    name: 'Carmen Lopez',
    email: 'carmen.l@eca.com.au',
    phone: '0444 444 555',
    joinDate: '2024-01-05',
    rating: 4.9,
    reviewCount: 67,
    totalJobs: 89,
    totalEarnings: 6675,
    status: 'Active',
    skills: ['Regular Cleaning', 'Bathroom Cleaning', 'End of Lease'],
    availability: 'Full-time',
    areas: ['Gold Coast', 'Surfers Paradise', 'Broadbeach', 'Southport'],
    bio: 'Gold Coast specialist. Attention to detail guaranteed.'
  },
  {
    id: 'CLN005',
    name: 'Isabella Nguyen',
    email: 'isabella.n@eca.com.au',
    phone: '0455 555 666',
    joinDate: '2024-02-14',
    rating: 4.6,
    reviewCount: 45,
    totalJobs: 67,
    totalEarnings: 5025,
    status: 'Active',
    skills: ['Window Cleaning', 'Deep Cleaning', 'Regular Cleaning'],
    availability: 'Part-time',
    areas: ['Logan', 'Ipswich', 'Redlands'],
    bio: 'Servicing southern Brisbane suburbs.'
  }
];

export const mockAvailableJobs = [
  {
    id: 'BK-2024-005',
    service: 'Window Cleaning',
    clientName: 'Sarah Thompson',
    date: '2024-12-28',
    time: '11:00',
    duration: '2 hours',
    address: '42 Queen Street, Brisbane QLD 4000',
    suburb: 'Brisbane CBD',
    payment: 120,
    distance: '2.1 km'
  },
  {
    id: 'BK-2024-006',
    service: 'Regular Cleaning',
    clientName: 'Robert Brown',
    date: '2024-12-26',
    time: '09:00',
    duration: '3 hours',
    address: '67 Edward Street, Brisbane QLD 4000',
    suburb: 'Brisbane CBD',
    payment: 135,
    distance: '1.8 km'
  },
  {
    id: 'BK-2024-007',
    service: 'Deep Cleaning',
    clientName: 'Lisa Anderson',
    date: '2024-12-27',
    time: '10:00',
    duration: '5 hours',
    address: '33 Merthyr Road, New Farm QLD 4005',
    suburb: 'New Farm',
    payment: 275,
    distance: '3.5 km'
  }
];

export const mockStats = {
  totalClients: 156,
  totalCleaners: 24,
  totalBookings: 1847,
  monthlyRevenue: 48500,
  pendingBookings: 12,
  completedBookings: 1798,
  activeCleaners: 22,
  avgRating: 4.8,
  repeatCustomerRate: 78
};

// Helper functions
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-AU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

export const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

export const getBookingsByStatus = (status) => {
  return mockBookings.filter(booking => booking.status === status);
};

export const getClientById = (id) => {
  return mockClients.find(client => client.id === id);
};

export const getCleanerById = (id) => {
  return mockCleaners.find(cleaner => cleaner.id === id);
};

export const getServiceById = (id) => {
  return mockServices.find(service => service.id === id);
};
