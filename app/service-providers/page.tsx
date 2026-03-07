import type { Metadata } from 'next'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Service Providers - The Vama Stack',
  description: 'Vetted implementation partners with verifiable track records building agentic systems. Coming soon as I learn more from my own journey and the community.',
  openGraph: {
    title: 'Service Providers - The Vama Stack',
    description: 'Vetted implementation partners with verifiable track records building agentic systems. Coming soon as I learn more from my own journey and the community.',
    url: 'https://thevamastack.co',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Providers - The Vama Stack',
    description: 'Vetted implementation partners with verifiable track records building agentic systems. Coming soon as I learn more from my own journey and the community.',
  },
}

export default function ServiceProvidersPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="page-hero">
        <h1>Service Providers</h1>
      </div>

      <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}>
        <p style={{
          fontSize: '18px',
          color: 'var(--text-muted)',
          lineHeight: '1.8',
          marginBottom: '48px',
        }}>
          {'I\'m vetting implementation partners who build agentic systems for real clients. Coming soon once I\'ve gathered enough signal from my own ops and the community.'}
        </p>
        <EmailCapture />
      </div>
    </div>
  )
}
