import { create } from 'zustand'

interface ThemeStoreState {
  theme: string
  setTheme: (value: string) => void
}

export const useThemeStore = create<ThemeStoreState>((set) => ({
  theme: '',
  setTheme: (value) => set({ theme: value }) // Function to update darkMode
}))
