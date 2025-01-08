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
  const milestoneForm = document.getElementById('milestone-form') as HTMLFormElement;
  const milestoneListElement = document.getElementById('milestone-list');

  if (milestoneForm) {
    milestoneForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(milestoneForm);
      const milestone: Milestone = {
        id: crypto.randomUUID(),
        roadmapId: formData.get('roadmapId') as string,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        dueDate: formData.get('dueDate') as string,
        status: formData.get('status') as "not-started" | "in-progress" | "completed" | "overdue",
        progress: Number(formData.get('progress')),
        priority: formData.get('priority') as "low" | "medium" | "high",
      };

      storage.saveMilestone(milestone);
      renderMilestones(milestone.roadmapId);
      milestoneForm.reset();
    });
  }

  if (milestoneListElement) {
    const roadmapId = milestoneListElement.getAttribute('data-roadmap-id');
    if (roadmapId) {
      renderMilestones(roadmapId);
    }
  }
});

function renderMilestones(roadmapId: string) {
  const milestoneListElement = document.getElementById('milestone-list');
  if (milestoneListElement) {
    const milestones = storage.getMilestonesByRoadmapId(roadmapId);
    milestoneListElement.innerHTML = milestones.map(milestone => `
      <li>
        <h3>${milestone.title}</h3>
        <p>${milestone.description}</p>
        <p>Due: ${new Date(milestone.dueDate).toLocaleDateString()}</p>
        <p>Status: ${milestone.status}</p>
        <p>Progress: ${milestone.progress}%</p>
        <p>Priority: ${milestone.priority}</p>
      </li>
    `).join('');
  }
}