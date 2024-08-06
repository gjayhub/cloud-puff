import { create } from "zustand";

const ITEM_PER_PAGE = 15;

interface PaginationStoreState {
  start: number;
  end: number;
  itemsPerPage: number;
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
}

const usePaginationStore = create<PaginationStoreState>((set) => ({
  start: 0,
  end: ITEM_PER_PAGE,
  itemsPerPage: ITEM_PER_PAGE,
  setStart: (start) => set({ start }),
  setEnd: (end) => set({ end }),
}));

export default usePaginationStore;
