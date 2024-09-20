import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

import { Dribbble, Github } from '@/components'

interface HeaderProps {
  action: ReactNode
}

export const Header: FC<HeaderProps> = ({ action }) => {
  return (
    <header className="navbar py-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Leandro Ubilla
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 flex items-center gap-4">
          <li>
            <a
              className="btn btn-ghost"
              href="https://www.feedbackrealm.com/b/40735753-personal-website"
            >
              Feedback
            </a>
          </li>
          <li className="hidden sm:block">
            <a href="https://dribbble.com/leanug">
              <Dribbble className="w-8 h-8 fill-current" />
            </a>
          </li>
          <li className="hidden sm:block">
            <a href="https://github.com/leanug">
              <Github className="w-8 h-8 fill-current" />
            </a>
          </li>
          <li>{action}</li>
        </ul>
      </div>
    </header>
  )
}
