import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCurrentPageStore = create(
  devtools((set) => ({
    currentPage: "/",
    setCurrentPage: (page) => set({ currentPage: page }),
  })),
  "useCurrentPageStore"
);
