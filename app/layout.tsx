import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Vama Stack',
  description: 'Curated tools, leaders, and service providers for people building agentic organizations. Vetted, tested, and updated monthly.',
  openGraph: {
    title: 'The Vama Stack',
    description: 'The agentic org stack, curated.',
    url: 'https://thevamastack.co',
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
