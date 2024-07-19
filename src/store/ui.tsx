import { create } from "zustand";

type UIState = {
  showNav: boolean;
  setShowNav: (showNav: boolean) => void;
};

export const useUIStore = create<UIState>()((set) => ({
  showNav: false,
  setShowNav: (showNav: boolean) => set({ showNav }),
}));
