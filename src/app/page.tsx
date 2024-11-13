import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <div className="max-w-3xl mx-auto px-2.5">
        <div className="space-y-6 text-balance text-center">
          <h1 className="text-xl md:text-5xl mt-2.5 font-semibold">
            Building stuff, one pixel at a time.
          </h1>
          <p className="text-lg md:text-2xl font-medium opacity-75">
            Get actionable insights into coding, broken down by the numbers.
          </p>
          <div className="text-xl flex flex-row gap-3 justify-center">
            <a 
              className="btn btn-error w-32 text-white" 
              href="https://www.youtube.com/@scriptingpixels"
            >
              YouTube
            </a>
            <Link className="btn btn-ghost w-32" href="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
