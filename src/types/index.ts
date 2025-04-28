export interface Skill {
  name: string;
  category: string;
  progress: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  overview: string;
  challenges: string[];
  methodology: string;
  keyOutcomes: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  logo: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies?: string[];
  companyLogo?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verificationLink?: string;
}

export interface Achievement {
  id: number;
  title: string;
  period: string;
  description: string;
  image: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}