import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'vamabuilds -- The trusted filter for the agentic org space',
  description: 'Curated tools, leaders, and service providers for people building agentic organizations. Vetted, tested, and updated monthly.',
  openGraph: {
    title: 'vamabuilds',
    description: 'The trusted filter for the agentic org space.',
    url: 'https://vamabuilds.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
