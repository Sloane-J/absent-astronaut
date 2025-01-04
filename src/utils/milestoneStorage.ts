import type { Milestone } from "../types/milestone";

interface MilestoneStorageService {
  getMilestones(roadmapId: string): Milestone[];
  getMilestoneById(
    roadmapId: string,
    milestoneId: string
  ): Milestone | undefined;
  saveMilestone(milestone: Milestone): void;
  updateMilestone(milestone: Milestone): void;
  deleteMilestone(roadmapId: string, milestoneId: string): void;
}


export const milestoneStorage: MilestoneStorageService = {
  getMilestones(roadmapId: string): Milestone[] {
    const stored = localStorage.getItem(`milestones-${roadmapId}`);
    if (!stored) return [];
    return JSON.parse(stored).map((m: any) => ({
      ...m,
      dueDate: new Date(m.dueDate),
      createdAt: new Date(m.createdAt),
      updatedAt: new Date(m.updatedAt),
    }));
  },

  getMilestoneById(
    roadmapId: string,
    milestoneId: string
  ): Milestone | undefined {
    const milestones = this.getMilestones(roadmapId);
    return milestones.find((m) => m.id === milestoneId);
  },

  saveMilestone(milestone: Milestone): void {
    const milestones = this.getMilestones(milestone.roadmapId);
    const existingIndex = milestones.findIndex((m) => m.id === milestone.id);

    const milestoneWithDates = {
      ...milestone,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    if (existingIndex !== -1) {
      milestones[existingIndex] = milestoneWithDates;
    } else {
      milestones.push(milestoneWithDates);
    }

    localStorage.setItem(
      `milestones-${milestone.roadmapId}`,
      JSON.stringify(milestones)
    );
  },

  updateMilestone(milestone: Milestone): void {
    const milestones = this.getMilestones(milestone.roadmapId);
    const index = milestones.findIndex((m) => m.id === milestone.id);

    if (index !== -1) {
      milestones[index] = {
        ...milestone,
        updatedAt: new Date(),
      };
      localStorage.setItem(
        `milestones-${milestone.roadmapId}`,
        JSON.stringify(milestones)
      );
    }
  },

  deleteMilestone(roadmapId: string, milestoneId: string): void {
    const milestones = this.getMilestones(roadmapId);
    const filteredMilestones = milestones.filter((m) => m.id !== milestoneId);
    localStorage.setItem(
      `milestones-${roadmapId}`,
      JSON.stringify(filteredMilestones)
    );
  },
};
