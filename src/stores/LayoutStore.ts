import { create } from 'zustand';

export interface IState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const useLayoutStore = create<IState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useLayoutStore;
