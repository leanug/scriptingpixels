import type { Metadata } from 'next'
import './globals.css'

import { siteConfig } from '@/config/site'
import { Header, Footer, Spacer } from '@/components/layout'
import ThemeToggle from '@/containers/buttons/theme-toggle'
import ThemeProvider from '@/components/providers/theme-provider'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`scroll-pt-[3.5rem]`}>
        <ThemeProvider>
          <div className={`flex flex-col min-h-dvh font-sans bg-base-200`}>
            <Header action={<ThemeToggle />} />
            <Spacer size="medium" />
            <main className={`flex-1`}>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
