import { create } from "zustand";

export const JobFilterStore = create((set) => ({
  category: "",
  location: "",

  setCategory: (category) => set({ category }),
  setLocation: (location) => set({ location }),

  resetFilters: () =>
    set({
      category: "",
      location: "",
    }),
}));
