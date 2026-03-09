import { create } from "zustand";

export const SearchFilterStore = create((set) => ({
  searchWord: "",

  setSearchWord: (searchWord) => set({ searchWord }),

  resetFilters: () =>
    set({
      searchWord: "",
    }),
}));
