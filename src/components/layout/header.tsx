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
    <header className="navbar py-3 px-2.5 lg:px-6 mx-auto border-b border-b-gray-300 border-opacity-40">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost font-bold text-lg">
          <Image
            src={'/scriptingpixelslogo.svg'}
            alt="Logo"
            width={28}
            height={28}
          />
          ScriptingPixels
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 flex items-center">
          {siteConfig.navigation.map(page => (
            <li key={page.url} className="md:block hidden">
              <Link className="btn btn-ghost" href={page.url}>
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