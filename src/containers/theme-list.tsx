'use client'

import React, { ChangeEvent } from 'react'
import { useThemeStore } from '@/store'

const ThemeList: React.FC = () => {
  const { theme, setTheme } = useThemeStore()

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedTheme: string = event.target.value
    setTheme(selectedTheme)
  }

  return (
    <ul className="p-3 space-y-1">
      <li>
        <input
          onChange={handleThemeChange}
          checked={theme === 'light'}
          type="radio"
          name="theme-options"
          className="btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Light Theme"
          value="light"
        />
        <span>Light</span>
      </li>
      <li>
        <input
          onChange={handleThemeChange}
          checked={theme === 'dark'}
          type="radio"
          name="theme-options"
          className="btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Dark Theme"
          value="dark"
        />
        <span>Dark</span>
      </li>
      <li>
        <input
          onChange={handleThemeChange}
          checked={theme === 'dracula'}
          type="radio"
          name="theme-options"
          className="btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Dracula Theme"
          value="dracula"
        />
        <span>Dracula</span>
      </li>
    </ul>
  )
}

export default ThemeList
