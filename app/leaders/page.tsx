import type { Metadata } from 'next'
import leadersData from '@/data/leaders.json'

export const metadata: Metadata = {
  title: 'Leaders - The Vama Stack',
  description: 'Practitioners building agentic organizations and sharing what actually works. First-hand operators - not commentators, not hype accounts. People I actually learn from.',
  openGraph: {
    title: 'Leaders - The Vama Stack',
    description: 'Practitioners building agentic organizations and sharing what actually works. First-hand operators - not commentators, not hype accounts. People I actually learn from.',
    url: 'https://thevamastack.co',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leaders - The Vama Stack',
    description: 'Practitioners building agentic organizations and sharing what actually works. First-hand operators - not commentators, not hype accounts. People I actually learn from.',
  },
}

const platformColors: Record<string, string> = {
  'X': '#1a2e5a',
  'X / Substack': '#1a2e5a',
  'X / YouTube': '#1a2e5a',
  'Substack': '#2e1a1a',
  'LinkedIn': '#1a2a3a',
}

export default function LeadersPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="page-hero" style={{ padding: '0 0 48px', borderBottom: '1px solid var(--border)', marginBottom: '48px' }}>
        <h1>Leaders</h1>
        <p style={{ marginTop: '16px' }}>
          People I actually follow to stay sharp. Practitioners posting real operational data from the agentic frontier.
          Every account here has a documented body of work and passes the &quot;specific and testable&quot; standard.
        </p>
      </div>

      {/* TODO: Connect to Airtable
          Replace leadersData with a fetch from Airtable base:
          const records = await airtable('AppBaseId').table('Leaders').select({ view: 'Published' }).all()
      */}

      <div className="grid">
        {leadersData.map(leader => (
          <div key={leader.id} className="card">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
              <div className="card-name" style={{ margin: 0 }}>{leader.name}</div>
              <span style={{
                fontSize: '12px',
                padding: '3px 10px',
                background: (leader.platform ? platformColors[leader.platform] : undefined) || 'var(--bg-navy)',
                border: '1px solid #1a2e5a',
                borderRadius: '4px',
                color: '#7ea8f8',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}>
                {leader.platform}
              </span>
            </div>
            {leader.fullName && leader.fullName !== leader.name && (
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px' }}>{leader.fullName}</div>
            )}
            <p className="card-description">{leader.description}</p>
            <a
              href={leader.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Follow &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
