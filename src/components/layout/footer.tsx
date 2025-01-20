import Link from "next/link"
import Image from 'next/image'

import { FaGithub, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa'

import { siteConfig } from "@/config/site"

export const Footer: React.FC = () => {
  const pages = siteConfig.navigation

  return (
    <footer className="py-12 container space-y-6 mx-auto text-center">
      <p className="flex items-center justify-center gap-3">
        Fix errors: <a
          href={siteConfig.siteGithub}
          className="btn"
        >
          <FaGithub size={24} />
          Source
        </a>
      </p>
      <div className="flex space-x-2 justify-center">
        <a
          className="btn btn-ghost btn-square"
          href={siteConfig.socialLinks.github}
        >
          <FaGithub size={24} />
        </a>
        <a
          className="btn btn-ghost btn-square"
          href={siteConfig.socialLinks.youtube}
        >
          <FaYoutube size={24} />
        </a>
        <a
          className="btn btn-ghost btn-square"
          href={siteConfig.socialLinks.instagram}
        >
          <FaInstagram size={24} />
        </a>
        <a
          className="btn btn-ghost btn-square"
          href={siteConfig.socialLinks.twitter}
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  )
}