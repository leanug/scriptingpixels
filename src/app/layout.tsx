import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

import { Header, Footer, ThemeController, ThemeWrapper } from '@/components'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ScriptingPixels',
  description: `
    Learn front-end development, Webflow tips, and TypeScript tricks on 
    the ScriptingPixels blog. Tutorials, guides, and insights for modern web 
    developers.
  `
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeWrapper>
          <div className={`flex flex-col min-h-screen font-inter`}>
            <Header action={<ThemeController />} />
            <main className={`flex-1`}>{children}</main>
            <Footer />
          </div>
        </ThemeWrapper>
      </body>
    </html>
  )
}
