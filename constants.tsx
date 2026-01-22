import React from 'react';
import { 
  Briefcase, 
  Code, 
  Users, 
  DollarSign, 
  PhoneCall, 
  Settings, 
  HeartPulse, 
  ShoppingCart, 
  GraduationCap, 
  Cpu,
  Globe,
  Award,
  ShieldCheck,
  Target
} from 'lucide-react';
import { ServiceCardProps } from './types.ts';

export const BRAND_NAME = "Arkayuga HR Consulting";

export const CORE_SERVICES: ServiceCardProps[] = [
  {
    id: 'permanent-staffing',
    title: 'Permanent & Contract Staffing',
    description: 'Expert matching of long-term talent and flexible workforce solutions to meet your evolving needs.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 'executive-search',
    title: 'Executive Search',
    description: 'Specialized headhunting for leadership roles, ensuring you find visionaries for your organization.',
    icon: <Award className="w-8 h-8" />,
  },
  {
    id: 'bulk-hiring',
    title: 'Bulk & Volume Hiring',
    description: 'Efficient, high-speed recruitment drives for startups, seasonal peaks, and new project expansions.',
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: 'hr-compliance',
    title: 'HR Policy & Compliance Support',
    description: 'Navigating regulatory landscapes with expert policy design and legal compliance frameworks.',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    id: 'payroll-consulting',
    title: 'Payroll & Workforce Consulting',
    description: 'Optimizing employee lifecycles through streamlined payroll systems and strategic consulting.',
    icon: <DollarSign className="w-8 h-8" />,
  }
];

export const SECTOR_SERVICES: ServiceCardProps[] = [
  {
    id: 'it-recruitment',
    title: 'IT / ITES Recruitment',
    description: 'Bridging the gap between cutting-edge tech talent and innovation-driven companies.',
    icon: <Code className="w-10 h-10" />,
    roles: ['Developers', 'QA Engineers', 'DevOps', 'Cloud Architects', 'Data Scientists'],
    benefits: ['Tech-specific screening', 'Fast hiring cycles', 'Startup to enterprise scaling']
  },
  {
    id: 'non-it-recruitment',
    title: 'Non-IT Recruitment',
    description: 'Finding the operational backbone for diverse business functions.',
    icon: <Briefcase className="w-10 h-10" />,
    roles: ['Admin', 'HR Professionals', 'Finance & Accounts', 'Operations Managers'],
    benefits: ['Reliable workforce', 'Cost-effective hiring', 'Cross-industry expertise']
  },
  {
    id: 'bfsi-recruitment',
    title: 'Banking & Insurance (BFSI)',
    description: 'Securing trustworthy talent for the critical financial services sector.',
    icon: <DollarSign className="w-10 h-10" />,
    roles: ['Relationship Managers', 'Credit Analysts', 'Insurance Advisors', 'Wealth Managers'],
    benefits: ['BFSI expertise', 'Verified candidates', 'Regulatory awareness']
  },
  {
    id: 'bpo-kpo-recruitment',
    title: 'BPO / KPO Recruitment',
    description: 'Fueling high-volume outsourcing with qualified, communicative professionals.',
    icon: <PhoneCall className="w-10 h-10" />,
    roles: ['Voice Agents', 'Non-Voice Specialists', 'Team Leads', 'Process Trainers'],
    benefits: ['High-volume hiring', 'Multilingual workforce', 'Training-ready candidates']
  },
  {
    id: 'manufacturing-recruitment',
    title: 'Manufacturing & Engineering',
    description: 'Sourcing skilled technicians and engineers for industrial excellence.',
    icon: <Settings className="w-10 h-10" />,
    roles: ['Production Engineers', 'Maintenance Techs', 'Quality Controllers', 'Plant Managers'],
    benefits: ['Skill validation', 'Safety & compliance focus', 'Industrial domain expertise']
  },
  {
    id: 'healthcare-recruitment',
    title: 'Healthcare Recruitment',
    description: 'Connecting compassionate care providers with top medical institutions.',
    icon: <HeartPulse className="w-10 h-10" />,
    roles: ['Doctors', 'Nurses', 'Lab Technicians', 'Hospital Administrators'],
    benefits: ['Credential-verified professionals', 'Ethical hiring', 'Specialist sourcing']
  },
  {
    id: 'retail-ecommerce-recruitment',
    title: 'Retail & E-commerce',
    description: 'Empowering the fast-paced world of retail with dynamic sales and logistics talent.',
    icon: <ShoppingCart className="w-10 h-10" />,
    roles: ['Store Managers', 'Sales Associates', 'Warehouse Staff', 'Logistics Coordinators'],
    benefits: ['Seasonal & bulk hiring', 'Quick deployment', 'Customer-centric talent']
  },
  {
    id: 'education-recruitment',
    title: 'Institutes & Education',
    description: 'Building the future by placing qualified educators in leading institutions.',
    icon: <GraduationCap className="w-10 h-10" />,
    roles: ['Teachers', 'Professors', 'Counselors', 'Academic Directors'],
    benefits: ['Qualification-verified hiring', 'Long-term faculty placement', 'Niche subject experts']
  },
  {
    id: 'sap-recruitment',
    title: 'SAP Recruitment Services',
    description: 'Specialized module-based sourcing for enterprise resource planning.',
    icon: <Cpu className="w-10 h-10" />,
    roles: ['SAP FICO', 'SAP MM', 'SAP SD', 'SAP HCM', 'SAP ABAP'],
    benefits: ['Module-specific recruiters', 'Contract & permanent staffing', 'Global SAP ecosystem access']
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Industry-focused Expertise",
    description: "Our recruiters are specialists in their respective domains, ensuring high-quality talent matches.",
    icon: <Target className="text-brand-gold w-6 h-6" />
  },
  {
    title: "Faster Turnaround",
    description: "We leverage a vast database and advanced sourcing tools to fill roles with quality candidates quickly.",
    icon: <Briefcase className="text-brand-gold w-6 h-6" />
  },
  {
    title: "Ethical & Transparent",
    description: "Integrity is at our core. We maintain full transparency with both clients and candidates.",
    icon: <ShieldCheck className="text-brand-gold w-6 h-6" />
  },
  {
    title: "Pan-India Network",
    description: "No matter where you are in India, our extensive talent network reaches every corner.",
    icon: <Globe className="text-brand-gold w-6 h-6" />
  },
  {
    title: "Customized Solutions",
    description: "From startups to large enterprises, we tailor our HR services to fit your specific scale.",
    icon: <Users className="text-brand-gold w-6 h-6" />
  }
];