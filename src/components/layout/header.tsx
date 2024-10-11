import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import Image from 'next/image'

import { siteConfig } from "@/config/site"
import Menu from '@/containers/layout/menu'

type HeaderProps = {
  action: ReactNode
}

export const Header: FC<HeaderProps> = ({ action }) => {
  return (
    <header className="navbar py-6 container mx-auto">
      <div className="flex-1">
        <Link href="/" className="flex flex-row items-center gap-2 text-xl">
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
                width={38} // Set the width of the image
                height={38} // Set the height of the image
              />
            </a>
          </li>
            {siteConfig.navigation.map(page => (
              <li key={page.url} className="md:block hidden">
                <Link className="font-medium" href={page.url}>
                  {page.title}
                </Link>
              </li>
            ))}
          <li className="md:block hidden">{action}</li>
          <li className="block md:hidden"><Menu /></li>
        </ul>
      </div>
    </header>
  )
}