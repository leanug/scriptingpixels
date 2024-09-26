import { siteConfig } from "@/config/site"
import Link from "next/link"

export const Footer: React.FC = () => {
  const pages = siteConfig.navigation
  return (
    <footer className="py-8 container mx-auto text-center">
      {
        pages ? (
          <>
            <span className="text-lg font-semibold uppercase">Pages</span>
            <nav className="space-x-3">
              {pages.map(page => 
                <Link href={page.url}>{page.title}</Link>
              )}
            </nav>
          </>
        ) : null
      }
      <nav>

      </nav>
      
      <ul className="flex flex-col md:flex-row justify-start items-center gap-5 ">
        <li>
          <span>
            Built by&nbsp;
            <a className="link font-semibold" href="https://github.com/leanug">
              leanug
            </a>
          </span>
        </li>
      </ul>
    </footer>
  )
}