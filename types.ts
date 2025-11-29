import { LucideIcon } from 'lucide-react';

export interface Mistake {
  id: number;
  title: string;
  problem: string;
  fixTitle: string;
  fixDescription: string;
  icon: LucideIcon;
  stats?: string;
  color: string;
}

export interface ChartData {
  name: string;
  hoursLost: number;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
