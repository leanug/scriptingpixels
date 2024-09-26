'use client'

import { ReactNode } from 'react'

import { useTheme } from '@/hooks'
import { useThemeStore } from '@/store'

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  useTheme()
  const { theme } = useThemeStore()
  return <div data-theme={theme}>{children}</div>
}

export default ThemeProvider