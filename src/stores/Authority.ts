import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StateCreator } from 'zustand/vanilla';

export interface IState {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  resetAccessToken: () => void;
}

const useAuthority = create<IState>(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken: string) => set(() => ({ accessToken })),
      resetAccessToken: () => set(() => ({ accessToken: null })),
    }),
    {
      name: 'authority',
    },
  ) as StateCreator<IState, [], []>,
);

export default useAuthority;
