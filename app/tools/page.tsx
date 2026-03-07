/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import toolsData from '@/data/tools.json'
import ToolsGrid from '@/components/ToolsGrid'

export const metadata: Metadata = {
  title: 'Tools - The Vama Stack',
  description: 'Agentic org tools I actually run: orchestration frameworks, LLM APIs, deployment infrastructure, observability, and comms. Tested in production, not just bookmarked.',
  openGraph: {
    title: 'Tools - The Vama Stack',
    description: 'Agentic org tools I actually run: orchestration frameworks, LLM APIs, deployment infrastructure, observability, and comms. Tested in production, not just bookmarked.',
    url: 'https://thevamastack.co',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools - The Vama Stack',
    description: 'Agentic org tools I actually run: orchestration frameworks, LLM APIs, deployment infrastructure, observability, and comms. Tested in production, not just bookmarked.',
  },
}

export default function ToolsPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="page-hero" style={{ padding: '0 0 48px', borderBottom: '1px solid var(--border)', marginBottom: '48px' }}>
        <h1>Tools</h1>
        <p style={{ marginTop: '16px' }}>
          Every tool on this list is something I run or have run in my own agentic org. I checked the data permissions, tested the actual product, and asked myself whether I would trust it in production. If the answer was no, it's not here.
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
