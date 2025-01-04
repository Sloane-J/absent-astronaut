// filepath: /src/utils/storage.ts
interface Schedule 
{
  lessonDuration: number;
  breakDuration: number;
  availableDays: string[];
}

interface Concept {
  title: string;
}

interface Roadmap {
  id: string;
  title: string;
  description: string;
  category: string;
  targetDate: string;
  learningMethod: string;
  concepts: Concept[];
  schedule: Schedule;
  resources?: string;
  status?: string;
  createdAt: string;
  updatedAt: string;
  milestones: Milestone[]; // Added milestones array
}

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


export const storage = {
  saveRoadmap(roadmap: Roadmap) {
    const roadmaps = this.getAllRoadmaps();
    roadmap.milestones = roadmap.milestones || []; // Initialize empty milestones array
    roadmaps.push(roadmap);
    localStorage.setItem("roadmaps", JSON.stringify(roadmaps));
  },


  getAllRoadmaps(): Roadmap[] {
    return JSON.parse(localStorage.getItem("roadmaps") || "[]");
  },

  getRoadmapById(id: string): Roadmap | undefined {
    return this.getAllRoadmaps().find((r) => r.id === id);
  },

  updateRoadmap(updatedRoadmap: Roadmap) {
    const roadmaps = this.getAllRoadmaps();
    const index = roadmaps.findIndex((r) => r.id === updatedRoadmap.id);
    if (index !== -1) {
      roadmaps[index] = updatedRoadmap;
      localStorage.setItem("roadmaps", JSON.stringify(roadmaps));
    }
  },

  deleteRoadmap(id: string) {
    const roadmaps = this.getAllRoadmaps();
    const filtered = roadmaps.filter((r) => r.id !== id);
    localStorage.setItem("roadmaps", JSON.stringify(filtered));
  },

   // New milestone methods
  saveMilestone(milestone: Milestone) {
    const roadmap = this.getRoadmapById(milestone.roadmapId);
    if (roadmap) {
      roadmap.milestones = roadmap.milestones || [];
      roadmap.milestones.push(milestone);
      this.updateRoadmap(roadmap);
    }
  },

  getMilestonesByRoadmapId(roadmapId: string): Milestone[] {
    const roadmap = this.getRoadmapById(roadmapId);
    return roadmap?.milestones || [];
  },

  getMilestoneById(roadmapId: string, milestoneId: string): Milestone | undefined {
    const milestones = this.getMilestonesByRoadmapId(roadmapId);
    return milestones.find(m => m.id === milestoneId);
  },

  updateMilestone(updatedMilestone: Milestone) {
    const roadmap = this.getRoadmapById(updatedMilestone.roadmapId);
    if (roadmap) {
      const index = roadmap.milestones.findIndex(m => m.id === updatedMilestone.id);
      if (index !== -1) {
        roadmap.milestones[index] = updatedMilestone;
        this.updateRoadmap(roadmap);
      }
    }
  },

  deleteMilestone(roadmapId: string, milestoneId: string) {
    const roadmap = this.getRoadmapById(roadmapId);
    if (roadmap) {
      roadmap.milestones = roadmap.milestones.filter(m => m.id !== milestoneId);
      this.updateRoadmap(roadmap);
    }
  }
};
