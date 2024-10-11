import Link from "next/link"
import Image from 'next/image'

import { FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa'

import { siteConfig } from "@/config/site"

export const Footer: React.FC = () => {
  const pages = siteConfig.navigation

  return (
    <footer className="py-8 container space-y-6 mx-auto text-center">
      <Image
        src={'/logo.png'}
        alt="Logo"
        width={28}
        height={28}
        className="mx-auto"
      />
      <p className="flex items-center justify-center gap-3">
        Fix errors: <a
          href={siteConfig.siteGithub}
          className="btn btn-ghost border border-gray-600"
        >
          <FaGithub size={24} />
          Source
        </a>
      </p>
      <div className="flex space-x-4 justify-center">
        <a
          href={siteConfig.socialLinks.github}
        >
          <FaGithub size={24} />
        </a>
        <a
          href={siteConfig.socialLinks.youtube}
        >
          <FaYoutube size={24} />
        </a>
        <a
          href={siteConfig.socialLinks.instagram}
        >
          <FaInstagram size={24} />
        </a>
      </div>
      {
        pages ? (
          <div>
            <span className="text-lg font-semibold uppercase">Pages</span>
            <nav className="space-x-3 mt-3">
              {pages.map(page => 
                <Link href={page.url}>{page.title}</Link>
              )}
            </nav>
          </div>
        ) : null
      }
      <div className="mt-4">
        <span>
          Built by&nbsp;
          <a className="link font-semibold" href={siteConfig.author.website}>
            {siteConfig.author.userName}
          </a>
        </span>
      </div>
    </footer>
  )
}