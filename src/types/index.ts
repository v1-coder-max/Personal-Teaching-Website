export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  topics: string[];
}

export interface Course {
  icon: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  description: string;
  topics: string[];
  color: string;
}

export interface Testimonial {
  name: string;
  topic: string;
  rating: number;
  text: string;
  location: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  content: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}
