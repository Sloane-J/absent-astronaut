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
  const roadmapForm = document.getElementById('roadmap-form') as HTMLFormElement;
  const roadmapListElement = document.getElementById('roadmap-list');

  if (roadmapForm) {
    roadmapForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(roadmapForm);
      const roadmap: Roadmap = {
        id: crypto.randomUUID(),
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        targetDate: formData.get('targetDate') as string,
        learningMethod: formData.get('learningMethod') as string,
        concepts: [],
        schedule: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        milestones: [],
      };

      storage.saveRoadmap(roadmap);
      renderRoadmaps();
      roadmapForm.reset();
    });
  }

  if (roadmapListElement) {
    renderRoadmaps();
  }
});

function renderRoadmaps() {
  const roadmapListElement = document.getElementById('roadmap-list');
  if (roadmapListElement) {
    const roadmaps = storage.getAllRoadmaps();
    roadmapListElement.innerHTML = roadmaps.map(roadmap => `
      <li>
        <h3>${roadmap.title}</h3>
        <p>${roadmap.description}</p>
        <p>Category: ${roadmap.category}</p>
        <p>Target Date: ${new Date(roadmap.targetDate).toLocaleDateString()}</p>
        <button onclick="deleteRoadmap('${roadmap.id}')">Delete</button>
      </li>
    `).join('');
  }
}

function deleteRoadmap(id: string) {
  storage.deleteRoadmap(id);
  renderRoadmaps();
}