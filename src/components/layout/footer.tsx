import { Github, Nextjs } from '@/components'

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 container mx-auto">
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
