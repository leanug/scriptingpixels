'use client'

import { FaSun, FaMoon } from 'react-icons/fa'
import { useThemeStore } from '@/store'

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useThemeStore()
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dracula' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-square btn-ghost"
      aria-label="Toggle Theme"
    >
      {
        theme === 'light' ? (
          <FaMoon size={18} />
        ) : (
          <FaSun size={18} />
        )
      }
      <span className="sr-only">Toggle Theme</span>
    </button>
  )
}

export default ThemeToggle
