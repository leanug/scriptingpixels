'use client'

import { useThemeStore } from '@/store'
import { useEffect, useRef } from 'react'

const THEME_KEY: string = 'leanug_theme' // Define the key for localStorage

interface ThemeStore {
  theme: string
  setTheme: (value: string) => void
}

export function useTheme(): void {
  const { theme, setTheme }: ThemeStore = useThemeStore()
  const firstRender = useRef(true)

  useEffect((): void => {
    const setupTheme = (): void => {
      // Check for previous localStorage saves
      if (
        firstRender.current &&
        typeof window !== 'undefined' &&
        localStorage
      ) {
        const storedTheme: string = localStorage.getItem(THEME_KEY) ?? 'dark'
        setTheme(storedTheme)
      }
    }

    theme === '' && setupTheme()
    firstRender.current = false
  }, [setTheme, theme])

  // Function to update localStorage when theme value changes
  useEffect((): void => {
    if (!firstRender.current && typeof window !== 'undefined' && localStorage) {
      localStorage.setItem(THEME_KEY, theme.toString())
    }
  }, [theme])
}
