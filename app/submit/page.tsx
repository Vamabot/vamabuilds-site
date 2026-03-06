/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Submit a Listing — The Vama Stack',
  description: 'Submit a tool, practitioner, or service provider for review. Eight-step vetting process. No pay-to-play. If it belongs, it gets listed.',
  openGraph: {
    title: 'Submit a Listing — The Vama Stack',
    description: 'Submit a tool, practitioner, or service provider for review. Eight-step vetting process. No pay-to-play. If it belongs, it gets listed.',
    url: 'https://thevamastack.co',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit a Listing — The Vama Stack',
    description: 'Submit a tool, practitioner, or service provider for review. Eight-step vetting process. No pay-to-play. If it belongs, it gets listed.',
  },
}

const criteria = [
  {
    number: '01',
    title: 'Accuracy verification',
    description: 'We test it. We do not just read the landing page. For tools: create an account, run a real workflow. For services: review case studies and check references. For people: read the full body of work, not just one post.'
  },
  {
    number: '02',
    title: 'Commercial disclosure gate',
    description: 'You must disclose your affiliation to the resource you are submitting. If you are a founder, employee, investor, or agency partner of what you are submitting, that is fine -- but it must be disclosed. Undisclosed affiliation is a permanent rejection.'
  },
  {
    number: '03',
    title: 'The "would we use it" test',
    description: 'Would I deploy this in my own agentic org? This is a judgment call, not a checklist. If the answer is no, the resource does not get listed, regardless of how many other criteria it passes.'
  },
  {
    number: '04',
    title: 'Safety and data audit (tools only)',
    description: 'What data does the tool access? What permissions does it request? Does it send usage data to third parties without disclosure? Tools that phone home in ways not covered in their privacy policy are rejected.'
  },
  {
    number: '05',
    title: 'Inclusion criteria match',
    description: 'The resource must fit a published category definition. A vague "AI-native" claim is not enough. The category claim must be specific and testable.'
  },
  {
    number: '06',
    title: '14-day cooling period',
    description: 'Resources that pass review enter a 14-day public window where we post a preview on X and invite the community to flag concerns. No resource goes live before that window closes.'
  },
  {
    number: '07',
    title: 'Re-review triggers',
    description: 'Listed resources are subject to re-review on major product changes, acquisitions, or credible community flags. A resource can be removed at any time if it no longer passes the "would we use it" test.'
  },
  {
    number: '08',
    title: 'No pay-to-play, ever',
    description: 'Listing fees, featured placement, and verified badges are not offered and will not be offered. If anyone claims they can get you listed for payment, that is fraud. We do not monetize the directory. We monetize the audience.'
  },
]

export default function SubmitPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div style={{ padding: '0 0 48px', borderBottom: '1px solid var(--border)', marginBottom: '60px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: '700', letterSpacing: '-0.03em', lineHeight: '1.15', marginBottom: '16px' }}>
          Submit a listing
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: '1.7' }}>
          Submit a tool, practitioner, or service provider you think belongs on The Vama Stack.
          Read the eight review criteria below before submitting. They are not suggestions.
          Every submission is held to all eight.
        </p>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginTop: '16px', maxWidth: '600px' }}>
          Review typically takes 2 to 4 weeks. You will receive a status update at each stage.
          The most common rejection reason is affiliation not disclosed at submission.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

        {/* Left: Tally form embed */}
        <div>
          <div className="section-header">
            <h2>Submission form</h2>
            <p>Takes about 5 minutes. All fields required.</p>
          </div>

          <div style={{
            border: '1px solid var(--border)',
            borderRadius: '6px',
            overflow: 'hidden',
            background: 'var(--bg-surface)',
          }}>
            {/* Tally form embed -- replace src with your Tally form URL after creation */}
            <iframe
              src="https://tally.so/embed/placeholder"
              width="100%"
              height="600"
              frameBorder="0"
              style={{ display: 'block' }}
              title="The Vama Stack submission form"
            />
            {/* TODO: Replace the src above with your actual Tally form URL, e.g.:
                src="https://tally.so/embed/wgkKzQ?alignLeft=1&hideTitle=1&transparentBackground=1"
                Create the form at tally.so, then paste the embed URL here.
                Required fields: resource name, URL, category, description (why it belongs),
                submitter name, submitter affiliation (REQUIRED), how they tested it.
            */}
            <div style={{
              padding: '32px',
              textAlign: 'center',
              borderTop: '1px solid var(--border)',
            }}>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Submission form coming soon. For now, submit directly:
              </p>
              <a
                href="https://tally.so"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  background: 'var(--bg-navy)',
                  border: '1px solid #1a2e5a',
                  borderRadius: '6px',
                  fontSize: '14px',
                  color: 'var(--text)',
                }}
              >
                Submit via Tally &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Right: Review criteria */}
        <div>
          <div className="section-header">
            <h2>The 8 review criteria</h2>
            <p>What every submission is evaluated against.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--border)' }}>
            {criteria.map((c) => (
              <div key={c.number} style={{
                padding: '24px',
                background: 'var(--bg-surface)',
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#7ea8f8',
                    fontVariantNumeric: 'tabular-nums',
                    flexShrink: 0,
                    paddingTop: '2px',
                  }}>
                    {c.number}
                  </span>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                      {c.title}
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      {c.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .submit-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
