import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import Image from 'next/image'

type HeaderProps = {
  action: ReactNode
}

export const Header: FC<HeaderProps> = ({ action }) => {
  return (
    <header className="navbar py-6 container mx-auto">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            src={'/logo.png'}
            alt="Logo"
            width={24}
            height={24}
          />
          ScriptingPixels
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 flex items-center gap-4">
          <li className="hidden sm:block">
            <a href="https://www.youtube.com/@scriptingpixels">
              <Image
                src={'/youtube.svg'} // Add the src attribute with the imported image
                alt="Logo" // Add the alt attribute for accessibility
                width={40} // Set the width of the image
                height={40} // Set the height of the image
              />
            </a>
          </li>
          <li>
            <Link 
              className="font-semibold text-sm" 
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              className="font-semibold text-sm" 
              href="/tags"
            >
              Tags
            </Link>
          </li>
          <li>{action}</li>
        </ul>
      </div>
    </header>
  )
}