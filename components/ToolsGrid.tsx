'use client'
import { useState } from 'react'

interface Tool {
  id: string
  name: string
  description: string
  url: string
  tags: string[]
  wouldWeUse: boolean
  addedDate: string
  reviewNote: string
}

export default function ToolsGrid({ tools }: { tools: Tool[] }) {
  const allTags = Array.from(new Set(tools.flatMap(t => t.tags)))
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag ? tools.filter(t => t.tags.includes(activeTag)) : tools

  return (
    <>
      <div className="filter-bar">
        <button
          className={`filter-btn${!activeTag ? ' active' : ''}`}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`filter-btn${activeTag === tag ? ' active' : ''}`}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map(tool => (
          <div key={tool.id} className="card">
            <div className="card-name">{tool.name}</div>
            <p className="card-description">{tool.description}</p>
            <div className="card-tags">
              {tool.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="card-footer">
              {tool.wouldWeUse && (
                <span className="badge-yes">Would we use it: Yes</span>
              )}
              <a
                href={tool.url}
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

      {filtered.length === 0 && (
        <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '15px' }}>
          No tools match that filter.
        </div>
      )}
    </>
  )
}
