import type { Metadata } from 'next'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Service Providers -- vamabuilds',
  description: 'Vetted implementation partners for building agentic systems. Coming soon.',
}

export default function ServiceProvidersPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div style={{ padding: '0 0 48px', borderBottom: '1px solid var(--border)', marginBottom: '80px' }}>
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 44px)',
          fontWeight: '700',
          letterSpacing: '-0.03em',
          lineHeight: '1.15',
          marginBottom: '16px',
        }}>
          Service Providers
        </h1>
      </div>

      <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}>
        <p style={{
          fontSize: '18px',
          color: 'var(--text-muted)',
          lineHeight: '1.8',
          marginBottom: '48px',
        }}>
          {"We're vetting implementation partners who build agentic systems for real clients. Coming soon as we learn more from our own journey and community."}
        </p>
        <EmailCapture placeholder="Get notified when we add vetted providers" />
      </div>
    </div>
  )
}
