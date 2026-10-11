import { Activity, ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, CircleUserRound, Clock3, FileText, Gauge, MapPinned, MessageSquareText, ShieldCheck, Star, TrendingUp, Users, Zap } from 'lucide-react';

export type UserRole = 'employer' | 'technician' | 'admin';

export type SkillItem = {
  name: string;
  level: number;
  years?: number;
};

export type Certification = {
  name: string;
  verified: boolean;
  status: 'verified' | 'pending';
};

export type AvailabilityWindow = {
  day: string;
  start: string;
  end: string;
};

export type Technician = {
  id: string;
  name: string;
  email: string;
  role: 'technician';
  headline: string;
  profilePhoto?: string;
  location: string;
  city: string;
  travelRadiusKm: number;
  availability: AvailabilityWindow[];
  hourlyRate: number;
  fixedPrice: number;
  responseTime: string;
  willingness: boolean;
  verified: boolean;
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  completedProjects: number;
  skills: SkillItem[];
  certifications: Certification[];
  portfolio: string;
  lastActive: string;
  distanceFromUserKm?: number;
  reviews?: { reviewer: string; rating: number; comment: string }[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  company?: string;
  location?: string;
};

export type RequiredSkill = {
  name: string;
  minLevel: number;
  priority: 'mandatory' | 'preferred';
};

export type Job = {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  workArrangement: 'remote' | 'onsite' | 'hybrid';
  deadline: string;
  durationDays: number;
  budgetMin: number;
  budgetMax: number;
  paymentModel: 'hourly' | 'fixed' | 'negotiable';
  availabilityRequirement: string;
  requiredSkills: RequiredSkill[];
  mandatoryCertifications: string[];
  maxTravelDistanceKm?: number;
  experienceYears: number;
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  read: boolean;
  type: 'job' | 'invitation' | 'system';
  createdAt: string;
};

export type InvitationStatus = 'pending' | 'accepted' | 'declined' | 'expired';

export type Invitation = {
  id: string;
  jobId: string;
  technicianId: string;
  employerId: string;
  status: InvitationStatus;
  createdAt: string;
};

export const statsHighlight = [
  { label: 'Jobs created', value: '128', icon: BriefcaseBusiness },
  { label: 'Technicians matched', value: '4.8k', icon: Users },
  { label: 'Avg. response time', value: '14 hrs', icon: Clock3 },
  { label: 'Success rate', value: '92%', icon: TrendingUp }
];

export const featuredFeatures = [
  {
    title: 'Transparent scoring',
    description: 'Mandatory eligibility filters protect fairness before weighted rank calculations.',
    icon: Gauge
  },
  {
    title: 'Real job matching',
    description: 'Skills, budget, travel radius, certification, availability, and price are all evaluated.',
    icon: Zap
  },
  {
    title: 'Secure workflows',
    description: 'Role-based permissions, shortlists, notifications, and consent-based communication.',
    icon: ShieldCheck
  }
];

export const sampleUsers: User[] = [
  // Employers
  { id: 'employer-1', name: 'Maya Patel', email: 'maya@atlasops.io', role: 'employer', company: 'AtlasOps', location: 'Austin, TX' },
  { id: 'employer-2', name: 'David Kim', email: 'david@techcorp.io', role: 'employer', company: 'TechCorp Solutions', location: 'San Jose, CA' },
  { id: 'employer-3', name: 'Elena Rostova', email: 'elena@apexlogistics.com', role: 'employer', company: 'Apex Global Logistics', location: 'Chicago, IL' },
  { id: 'employer-4', name: 'Marcus Vance', email: 'marcus@vancecloud.net', role: 'employer', company: 'Vance Cloud Dynamics', location: 'Dallas, TX' },
  { id: 'employer-5', name: 'Rachel Green', email: 'rachel@greenfieldenergy.com', role: 'employer', company: 'Greenfield Renewable Energy', location: 'Denver, CO' },

  // Technicians
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
  { id: 'tech-11', name: 'Lucas Silva', email: 'lucas@demo.com', role: 'technician', location: 'Atlanta, GA' },
  { id: 'tech-12', name: 'Hannah Schmidt', email: 'hannah@demo.com', role: 'technician', location: 'Portland, OR' },
  { id: 'tech-13', name: 'Derrick Thorne', email: 'derrick@demo.com', role: 'technician', location: 'Houston, TX' },

  // Administrators
  { id: 'admin-1', name: 'Ava Chen', email: 'ava@skillmatch.io', role: 'admin', company: 'SkillMatch HQ', location: 'San Francisco, CA' },
  { id: 'admin-2', name: 'Robert Vance', email: 'robert@skillmatch.io', role: 'admin', company: 'SkillMatch Security & Compliance', location: 'New York, NY' },
  { id: 'admin-3', name: 'Zoe Martinez', email: 'zoe@skillmatch.io', role: 'admin', company: 'SkillMatch Platform Ops', location: 'Austin, TX' }
];

export const sampleTechnicians: Technician[] = [
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
    distanceFromUserKm: 18,
    reviews: [
      { reviewer: 'L. Flores', rating: 5, comment: 'Very reliable and detail-driven.' }
    ]
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
    distanceFromUserKm: 2380,
    reviews: [
      { reviewer: 'T. Gray', rating: 4, comment: 'Solid frontend development skills.' }
    ]
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
    certifications: [
      { name: 'NFPA Safety', verified: true, status: 'verified' }
    ],
    portfolio: 'https://portfolio.example/malik',
    lastActive: '12 hours ago',
    distanceFromUserKm: 1320,
    reviews: [{ reviewer: 'S. Lake', rating: 5, comment: 'Great on-site response and safety compliance.' }]
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
    distanceFromUserKm: 280,
    reviews: [{ reviewer: 'K. Sun', rating: 5, comment: 'Exceptional at turning messy processes into automation.' }]
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
    distanceFromUserKm: 1000,
    reviews: [{ reviewer: 'R. Wells', rating: 4, comment: 'Fast and organized with strong observability.' }]
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
    distanceFromUserKm: 1250,
    reviews: [{ reviewer: 'N. Burke', rating: 4, comment: 'Strong security instincts and helpful remediation.' }]
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
    certifications: [
      { name: 'Certified Scrum Master', verified: true, status: 'verified' }
    ],
    portfolio: 'https://portfolio.example/ari',
    lastActive: '30 minutes ago',
    distanceFromUserKm: 12,
    reviews: [{ reviewer: 'J. Ross', rating: 5, comment: 'Very polished and accessibility-focused.' }]
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
    distanceFromUserKm: 1850,
    reviews: [{ reviewer: 'A. Dillon', rating: 5, comment: 'Reliable and precise on complex infrastructure changes.' }]
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
    certifications: [
      { name: 'Google Mobile Development', verified: false, status: 'pending' }
    ],
    portfolio: 'https://portfolio.example/ethan',
    lastActive: '6 hours ago',
    distanceFromUserKm: 870,
    reviews: [{ reviewer: 'S. Lee', rating: 3, comment: 'Good execution though limited full-stack coverage.' }]
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
    distanceFromUserKm: 2100,
    reviews: [{ reviewer: 'L. Bailey', rating: 5, comment: 'Excellent data architecture work and communication.' }]
  },
  {
    id: 'tech-11',
    name: 'Lucas Silva',
    email: 'lucas@demo.com',
    role: 'technician',
    headline: 'IoT & Embedded Systems Engineer specializing in edge hardware',
    location: 'Atlanta, GA',
    city: 'Atlanta',
    travelRadiusKm: 140,
    availability: [{ day: 'Tue', start: '08:30', end: '16:30' }, { day: 'Thu', start: '08:30', end: '16:30' }],
    hourlyRate: 85,
    fixedPrice: 2800,
    responseTime: '4 hours',
    willingness: true,
    verified: true,
    rating: 4.9,
    reviewCount: 34,
    yearsExperience: 8,
    completedProjects: 23,
    skills: [
      { name: 'C++', level: 93 },
      { name: 'Python', level: 90 },
      { name: 'RTOS', level: 88 },
      { name: 'MQTT', level: 92 }
    ],
    certifications: [
      { name: 'CompTIA Security+', verified: true, status: 'verified' },
      { name: 'ARM Architecture Certified', verified: true, status: 'verified' }
    ],
    portfolio: 'https://portfolio.example/lucas',
    lastActive: '1 hour ago',
    distanceFromUserKm: 1500,
    reviews: [{ reviewer: 'M. Vance', rating: 5, comment: 'Phenomenal firmware and sensor network debugging.' }]
  },
  {
    id: 'tech-12',
    name: 'Hannah Schmidt',
    email: 'hannah@demo.com',
    role: 'technician',
    headline: 'Industrial Robotics & Mechatronics Field Specialist',
    location: 'Portland, OR',
    city: 'Portland',
    travelRadiusKm: 160,
    availability: [{ day: 'Mon', start: '09:00', end: '17:00' }, { day: 'Wed', start: '09:00', end: '17:00' }, { day: 'Fri', start: '09:00', end: '15:00' }],
    hourlyRate: 98,
    fixedPrice: 3600,
    responseTime: '5 hours',
    willingness: true,
    verified: true,
    rating: 4.8,
    reviewCount: 29,
    yearsExperience: 9,
    completedProjects: 21,
    skills: [
      { name: 'PLC', level: 95 },
      { name: 'Robotics', level: 92 },
      { name: 'Computer Vision', level: 86 },
      { name: 'Safety Audits', level: 90 }
    ],
    certifications: [
      { name: 'Fanuc Certified Robotics Professional', verified: true, status: 'verified' },
      { name: 'OSHA 30 Field Safety', verified: true, status: 'verified' }
    ],
    portfolio: 'https://portfolio.example/hannah',
    lastActive: '3 hours ago',
    distanceFromUserKm: 2800,
    reviews: [{ reviewer: 'G. Bennett', rating: 5, comment: 'Rapid turnaround on PLC diagnostics and safety sign-off.' }]
  },
  {
    id: 'tech-13',
    name: 'Derrick Thorne',
    email: 'derrick@demo.com',
    role: 'technician',
    headline: 'Principal Database Architect & High-Scale Systems Tuner',
    location: 'Houston, TX',
    city: 'Houston',
    travelRadiusKm: 180,
    availability: [{ day: 'Mon', start: '10:00', end: '18:00' }, { day: 'Tue', start: '10:00', end: '18:00' }, { day: 'Thu', start: '10:00', end: '18:00' }],
    hourlyRate: 115,
    fixedPrice: 4500,
    responseTime: '2 hours',
    willingness: true,
    verified: true,
    rating: 4.9,
    reviewCount: 45,
    yearsExperience: 14,
    completedProjects: 38,
    skills: [
      { name: 'PostgreSQL', level: 98 },
      { name: 'Redis', level: 94 },
      { name: 'Kafka', level: 91 },
      { name: 'Database Architecture', level: 97 }
    ],
    certifications: [
      { name: 'Oracle Certified Master', verified: true, status: 'verified' },
      { name: 'AWS Certified Database Specialist', verified: true, status: 'verified' }
    ],
    portfolio: 'https://portfolio.example/derrick',
    lastActive: '45 mins ago',
    distanceFromUserKm: 260,
    reviews: [{ reviewer: 'C. Ross', rating: 5, comment: 'Resolved severe latency bottleneck in under 48 hours.' }]
  }
];

export const sampleJobs: Job[] = [
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

export const sampleNotifications: Notification[] = [
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

export const sampleInvitations: Invitation[] = [
  {
    id: 'invite-1',
    jobId: 'job-1',
    technicianId: 'tech-1',
    employerId: 'employer-1',
    status: 'pending',
    createdAt: '2026-10-11T09:20:00Z'
  }
];

export const dashboardMetrics = [
  { label: 'Total jobs created', value: 34 },
  { label: 'Open jobs', value: 12 },
  { label: 'Recommended technicians', value: 68 },
  { label: 'Shortlisted candidates', value: 18 },
  { label: 'Pending invitations', value: 7 },
  { label: 'Accepted invitations', value: 11 }
];

export const adminMetrics = [
  { label: 'Registered users', value: 248 },
  { label: 'Verification requests', value: 16 },
  { label: 'Jobs this month', value: 54 },
  { label: 'Reported profiles', value: 4 },
  { label: 'Match config status', value: 'Active' }
];

export const keyIcons = {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleUserRound,
  Clock3,
  FileText,
  Gauge,
  MapPinned,
  MessageSquareText,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  Zap
};
