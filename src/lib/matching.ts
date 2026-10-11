import type { Invitation, Job, Notification, Technician, User } from '../App';

export const seedUsers: User[] = [
  { id: 'employer-1', name: 'Maya Patel', email: 'maya@atlasops.io', role: 'employer', company: 'AtlasOps', location: 'Austin, TX' },
  { id: 'tech-1', name: 'Omar Hassan', email: 'omar@demo.com', role: 'technician', location: 'Austin, TX' },
  { id: 'tech-2', name: 'Priya Nair', email: 'priya@demo.com', role: 'technician', location: 'Seattle, WA' },
  { id: 'tech-3', name: 'Malik Reed', email: 'malik@demo.com', role: 'technician', location: 'Denver, CO' },
  { id: 'tech-4', name: 'Sofia Chen', email: 'sofia@demo.com', role: 'technician', location: 'Dallas, TX' },
  { id: 'tech-5', name: 'Carlos Morales', email: 'carlos@demo.com', role: 'technician', location: 'Chicago, IL' },
  { id: 'tech-6', name: 'Leila Ahmed', email: 'leila@demo.com', role: 'technician', location: 'Miami, FL' },
  { id: 'tech-7', name: 'Ari Patel', email: 'ari@demo.com', role: 'technician', location: 'Austin, TX' },
  { id: 'tech-8', name: 'Nadia Shah', email: 'nadia@demo.com', role: 'technician', location: 'Boston, MA' },
  { id: 'tech-9', name: 'Ethan Brooks', email: 'ethan@demo.com', role: 'technician', location: 'Phoenix, AZ' },
  { id: 'tech-10', name: 'Janelle Stone', email: 'janelle@demo.com', role: 'technician', location: 'New York, NY' },
  { id: 'admin-1', name: 'Ava Chen', email: 'ava@skillmatch.io', role: 'admin', company: 'SkillMatch', location: 'San Francisco, CA' }
];

export const seedTechnicians: Technician[] = [
  {
    id: 'tech-1',
    name: 'Omar Hassan',
    email: 'omar@demo.com',
    role: 'technician',
    headline: 'Cloud infrastructure engineer with enterprise migration experience',
    location: 'Austin, TX',
    city: 'Austin',
    travelRadiusKm: 120,
    availability: [{ day: 'Mon', start: '09:00', end: '17:00' }, { day: 'Wed', start: '09:00', end: '17:00' }],
    hourlyRate: 78,
    fixedPrice: 2500,
    responseTime: '3 hours',
    willingness: true,
    verified: true,
    rating: 4.8,
    reviewCount: 31,
    yearsExperience: 7,
    completedProjects: 18,
    skills: [
      { name: 'AWS', level: 95 },
      { name: 'Terraform', level: 90 },
      { name: 'Kubernetes', level: 88 },
      { name: 'CI/CD', level: 82 }
    ],
    certifications: [
      { name: 'AWS Solutions Architect', verified: true, status: 'verified' },
      { name: 'Kubernetes CKA', verified: true, status: 'verified' }
    ],
    portfolio: 'https://portfolio.example/omar',
    lastActive: '2 hours ago',
    distanceFromUserKm: 18
  },
  {
    id: 'tech-2',
    name: 'Priya Nair',
    email: 'priya@demo.com',
    role: 'technician',
    headline: 'Full-stack developer focused on secure web applications',
    location: 'Seattle, WA',
    city: 'Seattle',
    travelRadiusKm: 180,
    availability: [{ day: 'Tue', start: '10:00', end: '18:00' }, { day: 'Thu', start: '10:00', end: '18:00' }],
    hourlyRate: 90,
    fixedPrice: 3200,
    responseTime: '5 hours',
    willingness: true,
    verified: true,
    rating: 4.7,
    reviewCount: 26,
    yearsExperience: 8,
    completedProjects: 24,
    skills: [
      { name: 'React', level: 96 },
      { name: 'TypeScript', level: 95 },
      { name: 'Node.js', level: 88 },
      { name: 'PostgreSQL', level: 82 }
    ],
    certifications: [
      { name: 'AWS Cloud Practitioner', verified: true, status: 'verified' },
      { name: 'Google UX Design', verified: false, status: 'pending' }
    ],
    portfolio: 'https://portfolio.example/priya',
    lastActive: '1 day ago',
    distanceFromUserKm: 2380
  },
  {
    id: 'tech-3',
    name: 'Malik Reed',
    email: 'malik@demo.com',
    role: 'technician',
    headline: 'Electrical and automation specialist',
    location: 'Denver, CO',
    city: 'Denver',
    travelRadiusKm: 95,
    availability: [{ day: 'Mon', start: '08:00', end: '16:00' }, { day: 'Fri', start: '08:00', end: '16:00' }],
    hourlyRate: 72,
    fixedPrice: 2100,
    responseTime: '1 day',
    willingness: false,
    verified: true,
    rating: 4.5,
    reviewCount: 18,
    yearsExperience: 9,
    completedProjects: 15,
    skills: [
      { name: 'PLC', level: 88 },
      { name: 'Electrical Systems', level: 94 },
      { name: 'SCADA', level: 80 },
      { name: 'Safety Audits', level: 76 }
    ],
    certifications: [{ name: 'NFPA Safety', verified: true, status: 'verified' }],
    portfolio: 'https://portfolio.example/malik',
    lastActive: '12 hours ago',
    distanceFromUserKm: 1320
  },
  {
    id: 'tech-4',
    name: 'Sofia Chen',
    email: 'sofia@demo.com',
    role: 'technician',
    headline: 'AI automation consultant for process optimization',
    location: 'Dallas, TX',
    city: 'Dallas',
    travelRadiusKm: 220,
    availability: [{ day: 'Tue', start: '09:00', end: '17:00' }, { day: 'Thu', start: '09:00', end: '17:00' }, { day: 'Fri', start: '09:00', end: '14:00' }],
    hourlyRate: 96,
    fixedPrice: 3400,
    responseTime: '6 hours',
    willingness: true,
    verified: true,
    rating: 4.9,
    reviewCount: 42,
    yearsExperience: 10,
    completedProjects: 30,
    skills: [
      { name: 'Python', level: 94 },
      { name: 'Machine Learning', level: 88 },
      { name: 'Data Pipelines', level: 90 },
      { name: 'Power BI', level: 84 }
    ],
    certifications: [
      { name: 'Google Cloud Data Engineer', verified: true, status: 'verified' },
      { name: 'Azure AI Engineer', verified: true, status: 'verified' }
    ],
    portfolio: 'https://portfolio.example/sofia',
    lastActive: '2 hours ago',
    distanceFromUserKm: 280
  },
  {
    id: 'tech-5',
    name: 'Carlos Morales',
    email: 'carlos@demo.com',
    role: 'technician',
    headline: 'DevOps and site reliability engineer',
    location: 'Chicago, IL',
    city: 'Chicago',
    travelRadiusKm: 130,
    availability: [{ day: 'Mon', start: '08:30', end: '16:30' }, { day: 'Tue', start: '08:30', end: '16:30' }, { day: 'Wed', start: '08:30', end: '16:30' }],
    hourlyRate: 88,
    fixedPrice: 3100,
    responseTime: '4 hours',
    willingness: true,
    verified: true,
    rating: 4.6,
    reviewCount: 22,
    yearsExperience: 6,
    completedProjects: 16,
    skills: [
      { name: 'AWS', level: 86 },
      { name: 'Terraform', level: 82 },
      { name: 'Kubernetes', level: 84 },
      { name: 'Monitoring', level: 80 }
    ],
    certifications: [
      { name: 'AWS DevOps Engineer', verified: true, status: 'verified' },
      { name: 'Terraform Associate', verified: false, status: 'pending' }
    ],
    portfolio: 'https://portfolio.example/carlos',
    lastActive: '5 hours ago',
    distanceFromUserKm: 1000
  },
  {
    id: 'tech-6',
    name: 'Leila Ahmed',
    email: 'leila@demo.com',
    role: 'technician',
    headline: 'Cybersecurity analyst with infrastructure hardening expertise',
    location: 'Miami, FL',
    city: 'Miami',
    travelRadiusKm: 80,
    availability: [{ day: 'Wed', start: '09:00', end: '17:00' }, { day: 'Fri', start: '09:00', end: '17:00' }],
    hourlyRate: 95,
    fixedPrice: 3500,
    responseTime: '8 hours',
    willingness: true,
    verified: true,
    rating: 4.7,
    reviewCount: 29,
    yearsExperience: 8,
    completedProjects: 22,
    skills: [
      { name: 'Security Audits', level: 92 },
      { name: 'Network Security', level: 88 },
      { name: 'Endpoint Protection', level: 80 },
      { name: 'Penetration Testing', level: 81 }
    ],
    certifications: [
      { name: 'CISSP', verified: true, status: 'verified' },
      { name: 'CEH', verified: true, status: 'verified' }
    ],
    portfolio: 'https://portfolio.example/leila',
    lastActive: '8 hours ago',
    distanceFromUserKm: 1250
  },
  {
    id: 'tech-7',
    name: 'Ari Patel',
    email: 'ari@demo.com',
    role: 'technician',
    headline: 'Frontend engineer with accessibility expertise',
    location: 'Austin, TX',
    city: 'Austin',
    travelRadiusKm: 60,
    availability: [{ day: 'Mon', start: '09:00', end: '13:00' }, { day: 'Tue', start: '09:00', end: '17:00' }],
    hourlyRate: 68,
    fixedPrice: 2200,
    responseTime: '2 hours',
    willingness: true,
    verified: true,
    rating: 4.8,
    reviewCount: 35,
    yearsExperience: 5,
    completedProjects: 20,
    skills: [
      { name: 'React', level: 92 },
      { name: 'Accessibility', level: 97 },
      { name: 'TypeScript', level: 88 },
      { name: 'UI Design', level: 82 }
    ],
    certifications: [{ name: 'Certified Scrum Master', verified: true, status: 'verified' }],
    portfolio: 'https://portfolio.example/ari',
    lastActive: '30 minutes ago',
    distanceFromUserKm: 12
  },
  {
    id: 'tech-8',
    name: 'Nadia Shah',
    email: 'nadia@demo.com',
    role: 'technician',
    headline: 'Infrastructure architect with telecom systems background',
    location: 'Boston, MA',
    city: 'Boston',
    travelRadiusKm: 150,
    availability: [{ day: 'Thu', start: '09:00', end: '18:00' }, { day: 'Fri', start: '09:00', end: '18:00' }],
    hourlyRate: 110,
    fixedPrice: 4200,
    responseTime: '10 hours',
    willingness: true,
    verified: true,
    rating: 4.9,
    reviewCount: 38,
    yearsExperience: 12,
    completedProjects: 28,
    skills: [
      { name: 'Network Security', level: 90 },
      { name: 'Cloud Architecture', level: 93 },
      { name: 'Firewall', level: 88 },
      { name: 'Linux', level: 90 }
    ],
    certifications: [
      { name: 'Cisco CCNP', verified: true, status: 'verified' },
      { name: 'AWS Professional', verified: true, status: 'verified' }
    ],
    portfolio: 'https://portfolio.example/nadia',
    lastActive: '3 hours ago',
    distanceFromUserKm: 1850
  },
  {
    id: 'tech-9',
    name: 'Ethan Brooks',
    email: 'ethan@demo.com',
    role: 'technician',
    headline: 'Mobile and automation specialist',
    location: 'Phoenix, AZ',
    city: 'Phoenix',
    travelRadiusKm: 100,
    availability: [{ day: 'Tue', start: '08:00', end: '15:00' }, { day: 'Wed', start: '08:00', end: '15:00' }],
    hourlyRate: 64,
    fixedPrice: 1900,
    responseTime: '2 hours',
    willingness: true,
    verified: true,
    rating: 4.3,
    reviewCount: 17,
    yearsExperience: 4,
    completedProjects: 13,
    skills: [
      { name: 'Flutter', level: 86 },
      { name: 'React Native', level: 84 },
      { name: 'CI/CD', level: 76 },
      { name: 'Testing', level: 72 }
    ],
    certifications: [{ name: 'Google Mobile Development', verified: false, status: 'pending' }],
    portfolio: 'https://portfolio.example/ethan',
    lastActive: '6 hours ago',
    distanceFromUserKm: 870
  },
  {
    id: 'tech-10',
    name: 'Janelle Stone',
    email: 'janelle@demo.com',
    role: 'technician',
    headline: 'Senior data engineer and cloud transformation partner',
    location: 'New York, NY',
    city: 'New York',
    travelRadiusKm: 200,
    availability: [{ day: 'Mon', start: '09:00', end: '17:00' }, { day: 'Thu', start: '09:00', end: '17:00' }],
    hourlyRate: 105,
    fixedPrice: 3900,
    responseTime: '7 hours',
    willingness: true,
    verified: true,
    rating: 4.7,
    reviewCount: 27,
    yearsExperience: 11,
    completedProjects: 26,
    skills: [
      { name: 'Python', level: 92 },
      { name: 'PostgreSQL', level: 91 },
      { name: 'ETL', level: 90 },
      { name: 'AWS', level: 89 }
    ],
    certifications: [
      { name: 'AWS Data Analytics', verified: true, status: 'verified' },
      { name: 'dbt Fundamentals', verified: true, status: 'verified' }
    ],
    portfolio: 'https://portfolio.example/janelle',
    lastActive: '5 hours ago',
    distanceFromUserKm: 2100
  }
];

export const seedJobs: Job[] = [
  {
    id: 'job-1',
    title: 'Cloud Infrastructure Migration Lead',
    category: 'Infrastructure',
    description: 'Migrate a legacy AWS environment to Terraform-managed infrastructure and improve deployment automation for a growing SaaS platform. The selected technician should help define architecture and support CI/CD rollout.',
    location: 'Austin, TX',
    workArrangement: 'hybrid',
    deadline: '2026-11-20',
    durationDays: 28,
    budgetMin: 3500,
    budgetMax: 8000,
    paymentModel: 'fixed',
    availabilityRequirement: 'Available within 2 weeks for weekly office meetings and 3-day sprint cycles.',
    requiredSkills: [
      { name: 'AWS', minLevel: 80, priority: 'mandatory' },
      { name: 'Terraform', minLevel: 80, priority: 'mandatory' },
      { name: 'Kubernetes', minLevel: 75, priority: 'preferred' },
      { name: 'CI/CD', minLevel: 70, priority: 'preferred' }
    ],
    mandatoryCertifications: ['AWS Solutions Architect'],
    maxTravelDistanceKm: 120,
    experienceYears: 5
  },
  {
    id: 'job-2',
    title: 'Security Hardening Review',
    category: 'Cybersecurity',
    description: 'Assess firewall, endpoint, and identity posture for a rapidly growing distributed workforce. Recommend remediation and perform validation of controls.',
    location: 'Miami, FL',
    workArrangement: 'onsite',
    deadline: '2026-11-18',
    durationDays: 14,
    budgetMin: 2500,
    budgetMax: 6000,
    paymentModel: 'hourly',
    availabilityRequirement: 'Available for one week of on-site work in October.',
    requiredSkills: [
      { name: 'Security Audits', minLevel: 80, priority: 'mandatory' },
      { name: 'Network Security', minLevel: 75, priority: 'mandatory' },
      { name: 'Endpoint Protection', minLevel: 70, priority: 'preferred' }
    ],
    mandatoryCertifications: ['CISSP'],
    maxTravelDistanceKm: 100,
    experienceYears: 5
  }
];

export const seedNotifications: Notification[] = [
  {
    id: 'notification-1',
    title: 'New recommendation ready',
    message: 'Your job for Cloud Infrastructure Migration Lead has 3 eligible technicians.',
    read: false,
    type: 'job',
    createdAt: '2026-10-11T09:00:00Z'
  },
  {
    id: 'notification-2',
    title: 'Invitation sent',
    message: 'Invitation to Omar Hassan has been created for review.',
    read: false,
    type: 'invitation',
    createdAt: '2026-10-11T09:15:00Z'
  }
];

export const seedInvitations: Invitation[] = [
  {
    id: 'invite-1',
    jobId: 'job-1',
    technicianId: 'tech-1',
    employerId: 'employer-1',
    status: 'pending',
    createdAt: '2026-10-11T09:20:00Z'
  }
];
