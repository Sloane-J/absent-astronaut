export type Priority = "low" | "medium" | "high";
export type Status = "not-started" | "in-progress" | "completed" | "overdue";

export interface Milestone {
  id: string;
  roadmapId: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  status: Status;
  progress: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MilestoneFormData {
  title: string; // Changed from optional
  description: string; // Changed from optional
  dueDate: string; // Changed to string for form handling
  priority: Priority; // Changed from optional
  status: Status; // Changed from optional
  progress: number; // Changed from optional
}

export interface MilestoneValidation {
  title: boolean;
  description: boolean;
  dueDate: boolean;
  priority: boolean;
  status: boolean;
  progress: boolean;
}

// Add validation helper type
export type ValidationErrors = Partial<Record<keyof MilestoneFormData, string>>;

// Add conversion helper
export interface MilestoneInput extends Omit<MilestoneFormData, "dueDate"> {
  dueDate: Date;
}
