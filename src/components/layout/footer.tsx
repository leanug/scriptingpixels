import { Github, Nextjs } from '@/components'

export const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <ul className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        <li>
          <a
            href="https://github.com/leanug/v2"
            className="flex gap-1.5 items-center"
          >
            <Github className="w-6 h-6 fill-current" /> Source
          </a>
        </li>
        <li className="flex gap-1.5 items-center">
          <Nextjs className="w-6 h-6 fill-current" /> Built with Next
        </li>
      </ul>
    </footer>
  )
}
