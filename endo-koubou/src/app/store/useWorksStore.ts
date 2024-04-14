import create from "zustand";
import { ProductionType } from "@/app/interface/work";

interface WorksState {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  selectedTab: ProductionType;
  setSelectedTab: (tab: ProductionType) => void;
}

const useWorksStore = create<WorksState>((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set(() => ({ currentPage: page })),
  selectedTab: "舞台制作",
  setSelectedTab: (tab: ProductionType) => set(() => ({ selectedTab: tab })),
}));

export default useWorksStore;
