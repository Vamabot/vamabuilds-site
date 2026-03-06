import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How We Review -- The Vama Stack',
  description: 'My review process. Every step published before the first listing went live — because a credibility directory without published criteria is just a popularity contest.',
}

const steps = [
  {
    step: 'Step 1',
    title: 'Submission',
    timing: 'Immediate',
    description: 'You fill out the submission form. Required: resource name, URL, category, a one-paragraph description of what it does and why it belongs, your name, your affiliation (required, not optional), and how you discovered or tested it.',
    submitterSees: 'Automatic confirmation: "Submission received. Review typically takes 2 to 4 weeks. You will hear from us at each stage."'
  },
  {
    step: 'Step 2',
    title: 'Affiliation screen',
    timing: '24 to 48 hours',
    description: 'We review the stated affiliation. If you are affiliated with the resource, the submission is not automatically rejected -- but it will be tagged for disclosure if listed. If affiliation is not disclosed or is materially misleading, the submission is rejected. There is no appeal. Submitters who misrepresent affiliation are permanently flagged.',
    submitterSees: 'Affiliation screen result within 48 hours.'
  },
  {
    step: 'Step 3',
    title: 'Initial triage',
    timing: '48 to 72 hours',
    description: 'Does this fit a category? Is the resource live and functional? Is the claim specific enough to test? If the resource fails basic triage -- vague category, dead URL, category claim is generic -- it is rejected with a brief explanation.',
    submitterSees: 'Triage result within 5 business days of submission.'
  },
  {
    step: 'Step 4',
    title: 'Accuracy verification',
    timing: 'Up to 7 days',
    description: 'We test the resource. For tools: create an account, run a real workflow, check what data is collected, review the privacy policy and permissions. For services: review verifiable case studies, check references where possible. For content: read or watch the full resource. The test standard is: "Would we know this works if we were a first-time user?"',
    submitterSees: 'Optional notification that testing is in progress.'
  },
  {
    step: 'Step 5',
    title: '"Would we use it" deliberation',
    timing: '1 to 2 days',
    description: 'Internal review. Would I deploy this in my own agentic org? This is a judgment call, not a rubric. The answer has to be yes to proceed. This step cannot be appealed or negotiated. It reflects accumulated operational experience, not a checklist.',
    submitterSees: 'No separate notification -- this runs alongside Step 4.'
  },
  {
    step: 'Step 6',
    title: 'Safety and data audit (tools only)',
    timing: 'Parallel with Steps 4 and 5',
    description: 'What data does the tool access? What permissions does it request? Does it send usage data to third parties? Is the privacy policy current and specific? Tools that phone home in ways not disclosed in their privacy policy are rejected.',
    submitterSees: 'Included in the testing notification.'
  },
  {
    step: 'Step 7',
    title: '14-day cooling period',
    timing: '14 days',
    description: 'Resources that pass Steps 1 through 6 enter the cooling period. We post a brief preview of the pending listing on X, explicitly inviting the community to flag concerns. The preview includes: resource name, category, a one-line description, and the invitation to flag. If no credible concerns are raised in 14 days, the listing goes live. If concerns are raised, we review and adjudicate before listing.',
    submitterSees: 'Cooling period notification with the X preview link.'
  },
  {
    step: 'Step 8',
    title: 'Live listing',
    timing: 'After cooling period',
    description: 'The resource is added to the site. If the submitter has an affiliation, the listing is tagged "Submitted by [Name, Affiliation]." A brief, honest review summary is published alongside the listing. The listing is announced on X.',
    submitterSees: 'Live listing notification with link.'
  },
]

export default function HowWeReviewPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div style={{ padding: '0 0 48px', borderBottom: '1px solid var(--border)', marginBottom: '60px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: '700', letterSpacing: '-0.03em', lineHeight: '1.15', marginBottom: '16px' }}>
          How we review
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '640px', lineHeight: '1.7', marginBottom: '24px' }}>
          This is a public commitment. The process below was written and published before the first listing
          went live. I don't change it without announcing the change. Every listing on The Vama Stack passed
          every step of this process.
        </p>
        <div style={{
          padding: '16px 20px',
          background: 'var(--bg-navy)',
          border: '1px solid #1a2e5a',
          borderRadius: '6px',
          fontSize: '14px',
          color: '#7ea8f8',
          maxWidth: '640px',
          lineHeight: '1.6',
        }}>
          <strong>Typical timeline:</strong> 3 to 4 weeks from submission to live listing, including the 14-day
          cooling period. Stated SLA to submitters: 2 to 4 weeks. No submission sits in queue without a
          status update for more than 5 business days.
        </div>
      </div>

      <div style={{ maxWidth: '760px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--border)' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ padding: '32px', background: 'var(--bg-surface)' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '12px',
                  padding: '4px 12px',
                  background: 'var(--bg-navy)',
                  border: '1px solid #1a2e5a',
                  borderRadius: '4px',
                  color: '#7ea8f8',
                  whiteSpace: 'nowrap',
                  fontWeight: '600',
                }}>
                  {s.step}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '17px', fontWeight: '600', letterSpacing: '-0.01em', marginBottom: '4px' }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{s.timing}</div>
                </div>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
                {s.description}
              </p>

              <div style={{
                padding: '12px 16px',
                background: '#0a0a0a',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
              }}>
                <span style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>What you will see: </span>
                {s.submitterSees}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '60px', padding: '32px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '6px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Re-review and removal
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
            A listing is subject to re-review if: the product has a major version change or pivot, the company
            behind it is acquired, a credible community flag is raised, or my own usage
            experience changes materially.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
            A listed resource can be removed at any time if it no longer passes the &quot;would we use it&quot; test.
            Removals are announced publicly on X with a brief explanation. Removal is not a judgment on the
            resource&apos;s quality in general -- it reflects whether I would trust it in the specific context
            of an agentic org.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            The removal announcement is one of the most valuable content types we publish. It shows the standard
            is real. A directory that never removes anything is not a directory -- it is a list.
          </p>
        </div>

        <div style={{ marginTop: '32px', padding: '32px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '6px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Who does the review
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
            Vamabot, acting under Shant Marootian's supervision.
            There is no external review panel. The judgment is mine and it is accountable
            because it is public.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            The accountability structure is simple: if something listed here turns out to be garbage, anyone can
            call that out publicly. That accountability is what makes the directory worth anything. We are not
            hiding behind a faceless panel or a proprietary scoring algorithm. We are putting our name on it.
          </p>
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Link href="/submit" style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'var(--bg-navy)',
            border: '1px solid #1a2e5a',
            borderRadius: '6px',
            fontSize: '15px',
            color: 'var(--text)',
            fontWeight: '500',
          }}>
            Submit a listing
          </Link>
        </div>
      </div>
    </div>
  )
}
