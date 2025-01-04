export interface Concept {
  title: string;
}

export interface Schedule {
  lessonDuration: number;
  breakDuration: number;
  availableDays: string[];
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  category: string;
  targetDate: string;
  learningMethod: string;
  concepts: Concept[];
  schedule: Schedule;
  resources?: string;
  status: 'not-started' | 'in-progress' | 'completed';
  createdAt: string;
  updatedAt?: string;
}
