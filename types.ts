import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  priceRange?: string;
}

export interface Doctor {
  name: string;
  role: string;
  qualification: string;
  image: string;
  bio: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}