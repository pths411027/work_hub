import create from 'zustand';

export interface IState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
export const useLayoutStore = create<IState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
