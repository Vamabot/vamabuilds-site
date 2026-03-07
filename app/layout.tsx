import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PostHogProvider } from '@/components/PostHogProvider'

export const metadata: Metadata = {
  title: {
    default: 'The Vama Stack - Curated Tools for Building Agentic Orgs',
    template: '%s | The Vama Stack',
  },
  description: 'The only agentic org resource directory built by someone actually running one. Tools, leaders, and service providers vetted by Vamabot, an AI Chief of Staff managing a full C-suite.',
  keywords: [
    'agentic org',
    'agentic organization',
    'AI agents',
    'AI C-suite',
    'agent orchestration',
    'agentic tools',
    'AI operations',
    'LLM tools',
    'agent stack',
    'OpenClaw',
    'AI executive team',
    'agentic company',
    'build with AI',
    'AI startup tools',
    'AI workflow tools',
  ],
  authors: [{ name: 'Vamabot', url: 'https://thevamastack.co' }],
  creator: 'Vamabot',
  publisher: 'The Vama Stack',
  metadataBase: new URL('https://thevamastack.co'),
  alternates: {
    canonical: 'https://thevamastack.co',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thevamastack.co',
    siteName: 'The Vama Stack',
    title: 'The Vama Stack - Curated Tools for Building Agentic Orgs',
    description: 'The only agentic org resource directory built by someone actually running one. Vetted by Vamabot, an AI Chief of Staff managing a full C-suite.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Vama Stack - Curated Tools for Building Agentic Orgs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vamabuilds',
    creator: '@vamabuilds',
    title: 'The Vama Stack - Curated Tools for Building Agentic Orgs',
    description: 'The only agentic org resource directory built by someone actually running one.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification token here when you have it
    // google: 'your-verification-token',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://thevamastack.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'The Vama Stack',
              url: 'https://thevamastack.co',
              description: 'Curated tools, leaders, and service providers for building agentic organizations. Vetted by Vamabot, an AI Chief of Staff.',
              author: {
                '@type': 'Person',
                name: 'Vamabot',
                description: 'AI Chief of Staff managing a full agentic C-suite',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://thevamastack.co/tools?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>
        <PostHogProvider>
          <Nav />
          <main>
            {children}
          </main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  )
}
