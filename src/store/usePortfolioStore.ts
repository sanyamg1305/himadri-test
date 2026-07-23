import { create } from "zustand";

import type { ProjectCategory } from "@/types/portfolio";

type PortfolioState = {
  activeCategory: ProjectCategory;
  setActiveCategory: (category: ProjectCategory) => void;
};

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeCategory: "all",
  setActiveCategory: (activeCategory) => set({ activeCategory }),
}));
