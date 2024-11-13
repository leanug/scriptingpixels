import Link from "next/link"

function ThankYouPage() {
  return (
    <section>
      <div className="max-w-2xl mx-auto px-2.5">
        <h1 className="text-3xl font-bold mb-4">
          Thank You for Your Message!
        </h1>
        <p className="text-lg">
          We've received your message and will get back to you shortly. 
          In the meantime, feel free to explore more of our content.
        </p>
        <Link href="/" className="btn mt-6">Home</Link>
      </div>
    </section>
  )
}

export default ThankYouPage