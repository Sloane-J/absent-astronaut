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
  const roadmapContainerElement = document.getElementById('roadmaps-container');
  const roadmapSummaryElement = document.getElementById('roadmap-summary');
  const createRoadmapButton = document.getElementById('create-roadmap-button');
  const roadmaps = storage.getAllRoadmaps();

  // Calculate additional properties for each roadmap
  const enhancedRoadmaps = roadmaps.map(roadmap => {
    const totalMilestones = roadmap.milestones.length;
    const completedMilestones = roadmap.milestones.filter(m => m.status === 'completed').length;
    const progress = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0;

    return {
      ...roadmap,
      totalMilestones,
      completedMilestones,
      progress
    };
  });

  // Populate the roadmap container
  if (roadmapContainerElement) {
    if (enhancedRoadmaps.length > 0) {
      roadmapContainerElement.innerHTML = enhancedRoadmaps.map(roadmap => `
        <div class="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
          <h3 class="text-lg font-semibold text-white">${roadmap.title}</h3>
          <p class="text-gray-400 text-sm mb-4">${roadmap.description}</p>
          <div class="flex justify-between text-sm text-gray-400">
            <span>Progress: ${roadmap.progress.toFixed(2)}%</span>
            <span>${roadmap.completedMilestones}/${roadmap.totalMilestones} Milestones</span>
          </div>
        </div>
      `).join('');
    } else {
      roadmapContainerElement.innerHTML = `
        <div class="col-span-full text-center py-12 bg-gray-800/50 rounded-xl">
          <p class="text-gray-400">No roadmaps found. Create a new roadmap to get started.</p>
        </div>
      `;
    }
  }

  // Display a summary of roadmaps
  if (roadmapSummaryElement) {
    const totalRoadmaps = enhancedRoadmaps.length;
    const completedRoadmaps = enhancedRoadmaps.filter(r => r.status === 'completed').length;
    const inProgressRoadmaps = enhancedRoadmaps.filter(r => r.status === 'in-progress').length;

    roadmapSummaryElement.innerHTML = `
      <p>Total Roadmaps: ${totalRoadmaps}</p>
      <p>Completed Roadmaps: ${completedRoadmaps}</p>
      <p>In Progress Roadmaps: ${inProgressRoadmaps}</p>
    `;
  }

  // Handle create roadmap button click
  if (createRoadmapButton) {
    createRoadmapButton.addEventListener('click', () => {
      window.location.href = '/roadmap/create';
    });
  }
});