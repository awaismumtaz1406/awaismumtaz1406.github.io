export interface SocialLink {
  label: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  roleTag: string;
  tagline: string;
  bio: string;
  avatar: string;
  location: string;
  contact: {
    email: string;
    phone: string;
  };
  socials: SocialLink[];
}

export interface ClientWork {
  title: string;
  client: string;
  clientRole: string;
  liveUrl: string;
  period: string;
  highlights: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
}

export interface CodeSnippet {
  language: string;
  title: string;
  code: string;
}

export interface ArchitectureDetails {
  headline: string;
  challenge: string;
  decision: string;
  systemPipeline: string[];
  keyTradeoff: string;
  codeSnippet: CodeSnippet;
  metrics: {
    value: string;
    label: string;
    detail: string;
  }[];
}

export interface Project {
  id: string;
  categoryBadge: string;
  title: string;
  badge: string;
  summary?: string;
  tags: string[];
  description: string;
  live: string;
  github: string;
  isFlagship?: boolean;
  architecture?: ArchitectureDetails;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets?: string[];
  metric?: {
    value: string;
    label: string;
  };
  certificate?: string;
  recommendation?: string;
}

export interface Leadership {
  role: string;
  institution: string;
  detail: string;
  image: string;
  metric?: {
    value: string;
    label: string;
  };
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  coursework: string[];
  keyFocus: string;
  detail: string;
  metrics?: {
    value: string;
    label: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  file: string;
}

export interface StatMetric {
  value: string;
  label: string;
  sublabel: string;
}

export interface PortfolioData {
  resumeUrl: string;
  personal: PersonalInfo;
  heroMetrics: StatMetric[];
  clientWork: ClientWork;
  projects: Project[];
  experience: ExperienceItem[];
  leadership: Leadership;
  education: EducationItem[];
  certifications: CertificationItem[];
}

export interface ActiveCertModal {
  title: string;
  certId?: string;
  assetPath: string;
  date?: string;
  issuer?: string;
}

export interface ActiveArchitectureModal {
  project: Project;
}
