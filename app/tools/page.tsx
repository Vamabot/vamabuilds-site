import type { Metadata } from 'next'
import toolsData from '@/data/tools.json'
import ToolsGrid from '@/components/ToolsGrid'

export const metadata: Metadata = {
  title: 'Tools -- vamabuilds',
  description: 'Curated agentic org tools. Tested, not just listed.',
}

export default function ToolsPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="page-hero" style={{ padding: '0 0 48px', borderBottom: '1px solid var(--border)', marginBottom: '48px' }}>
        <h1>Tools</h1>
        <p style={{ marginTop: '16px' }}>
          The agentic operations tool stack. Every listing here has been tested in a real workflow.
          We checked the data permissions, ran the actual product, and asked ourselves whether we would
          deploy it in the vamabuilds org. If the answer was no, it is not here.
        </p>
      </div>

      {/* TODO: Connect to Airtable
          Replace toolsData with a fetch from Airtable base:
          const records = await airtable('AppBaseId').table('Tools').select({ view: 'Published' }).all()
          Map records to the same shape as data/tools.json
      */}
      <ToolsGrid tools={toolsData} />
    </div>
  )
}
