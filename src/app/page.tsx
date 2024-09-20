import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-2.5 md:p-24">
      <section className="max-w-3xl text-center">
        <div className="avatar">
          <div className="w-28 rounded-full">
            <Image
              src={'/logo.png'} // Add the src attribute with the imported image
              alt="Logo" // Add the alt attribute for accessibility
              width={300} // Set the width of the image
              height={300} // Set the height of the image
              className="rounded-full" // Add any additional styling classes if needed
            />
          </div>
        </div>
        <h1 className="text-2xl md:text-6xl mt-2.5 text-white font-semibold">
          Coming soon
        </h1>
      </section>
    </div>
  )
}
