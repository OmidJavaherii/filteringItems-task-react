import { create } from "zustand";

interface FilterSelection {
  [filterId: number]: number[];
}

interface FilterState {
  selectedCategoryId: number | null;
  selectedFilters: FilterSelection;
  setCategory: (id: number | null) => void;
  toggleOption: (filterId: number, optionId: number) => void;
  setFromURL: (categoryId: number | null, filters: FilterSelection) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedCategoryId: null,
  selectedFilters: {},

  setCategory: (id) => set({ selectedCategoryId: id }),

  toggleOption: (filterId, optionId) =>
    set((state) => {
      const currentOptions = state.selectedFilters[filterId] || [];
      const exists = currentOptions.includes(optionId);
      const newOptions = exists
        ? currentOptions.filter((id) => id !== optionId)
        : [...currentOptions, optionId];
      return {
        selectedFilters: {
          ...state.selectedFilters,
          [filterId]: newOptions,
        },
      };
    }),

  setFromURL: (categoryId, filters) =>
    set({ selectedCategoryId: categoryId, selectedFilters: filters }),

  resetFilters: () => set({ selectedCategoryId: null, selectedFilters: {} }),
}));