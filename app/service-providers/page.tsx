import type { Metadata } from 'next'
import providersData from '@/data/service-providers.json'

export const metadata: Metadata = {
  title: 'Service Providers -- vamabuilds',
  description: 'Vetted consultants and implementation partners for building agentic systems.',
}

export default function ServiceProvidersPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div style={{ padding: '0 0 48px', borderBottom: '1px solid var(--border)', marginBottom: '48px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: '700', letterSpacing: '-0.03em', lineHeight: '1.15', marginBottom: '16px' }}>
          Service Providers
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: '1.7' }}>
          Consultants and implementation partners with verifiable track records. This is the highest-stakes
          category. Every listing includes an affiliation disclosure. References were checked or documented
          track records were reviewed. We would consider hiring each of these providers.
        </p>
        <div style={{
          marginTop: '24px',
          padding: '16px 20px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          fontSize: '14px',
          color: 'var(--text-muted)',
          maxWidth: '600px',
        }}>
          <strong style={{ color: 'var(--text)' }}>Disclosure standard:</strong> Every service provider listing
          includes who submitted it and their affiliation. Self-submissions are tagged. There are no anonymous
          listings in this category.
        </div>
      </div>

      {/* TODO: Connect to Airtable
          Replace providersData with a fetch from Airtable base:
          const records = await airtable('AppBaseId').table('ServiceProviders').select({ view: 'Published' }).all()
      */}

      <div className="grid">
        {providersData.map(provider => (
          <div key={provider.id} className="card">
            <div className="card-name">{provider.name}</div>
            <div style={{ fontSize: '13px', color: '#7ea8f8', marginBottom: '12px', fontWeight: '500' }}>
              {provider.specialty}
            </div>
            <p className="card-description">{provider.description}</p>

            {provider.trackRecord && (
              <div style={{
                padding: '10px 14px',
                background: '#0a0a0a',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                fontSize: '13px',
                color: 'var(--text-muted)',
                marginBottom: '16px',
                lineHeight: '1.5',
              }}>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Track record: </span>
                {provider.trackRecord}
              </div>
            )}

            <div className="card-footer">
              {provider.affiliationTag && (
                <span className="tag" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {provider.affiliationTag}
                </span>
              )}
              <a
                href={provider.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Visit &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
