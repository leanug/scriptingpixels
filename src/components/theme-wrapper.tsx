'use client'

import { ReactNode } from 'react'

import { useTheme } from '@/hooks'
import { useThemeStore } from '@/store'

interface ThemeWrapperProps {
  children: ReactNode
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  useTheme()
  const { theme } = useThemeStore()

  return <div data-theme={theme}>{children}</div>
}
