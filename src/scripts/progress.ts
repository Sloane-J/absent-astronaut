import { storage } from '../utils/storage';

interface Milestone {
  id: string;
  roadmapId: string;
  title: string;
  description: string;
  dueDate: string;
  status: "not-started" | "in-progress" | "completed" | "overdue";
  progress: number;
  priority: "low" | "medium" | "high";
}

interface Roadmap {
  id: string;
  title: string;
  description: string;
  category: string;
  targetDate: string;
  learningMethod: string;
  concepts: any[];
  schedule: any;
  resources?: string;
  status?: string;
  createdAt: string;
  updatedAt: string;
  milestones: Milestone[];
}

document.addEventListener('DOMContentLoaded', () => {
  const progressElements = document.querySelectorAll('.progress-bar');

  progressElements.forEach((element) => {
    const roadmapId = element.getAttribute('data-roadmap-id');
    const milestoneId = element.getAttribute('data-milestone-id');

    if (roadmapId && milestoneId) {
      const roadmap = storage.getRoadmapById(roadmapId);
      if (roadmap) {
        const milestone = roadmap.milestones.find(m => m.id === milestoneId);
        if (milestone) {
          updateProgressBar(element, milestone.progress);
        }
      }
    }
  });
});

function updateProgressBar(element: Element, progress: number) {
  element.setAttribute('style', `width: ${progress}%`);
  element.textContent = `${progress}%`;
}

// Example function to update milestone progress
export function updateMilestoneProgress(roadmapId: string, milestoneId: string, progress: number) {
  const roadmap = storage.getRoadmapById(roadmapId);
  if (roadmap) {
    const milestone = roadmap.milestones.find(m => m.id === milestoneId);
    if (milestone) {
      milestone.progress = progress;
      storage.updateMilestone(milestone);
      const progressBar = document.querySelector(`.progress-bar[data-milestone-id="${milestoneId}"]`);
      if (progressBar) {
        updateProgressBar(progressBar, progress);
      }
    }
  }
}