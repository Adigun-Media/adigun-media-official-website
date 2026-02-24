export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Print" | "Web & Games" | "Media" | "Photography" | "Video";
  image: string;
  description: string;
  tools?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  image: string;
}

export interface ActivityNotification {
  id: string;
  name: string;
  service: string;
  timestamp: Date;
}

export interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}
