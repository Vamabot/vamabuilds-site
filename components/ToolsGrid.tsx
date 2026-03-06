'use client'
import { useState } from 'react'

interface Tool {
  id: string
  name: string
  description: string
  url: string
  tags: string[]
  categories: string[]
  addedDate: string
  reviewNote: string
}

const TYPE_FILTERS = ['All', 'Free', 'Paid', 'Open Source']
const CATEGORY_FILTERS = ['All', 'Orchestration', 'Brains', 'Deployment', 'Comms', 'Dev Tools', 'Payments']

const FILTER_LABEL_STYLE: React.CSSProperties = {
  fontSize: '11px',
  color: 'var(--text-muted)',
  marginBottom: '8px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
}

export default function ToolsGrid({ tools }: { tools: Tool[] }) {
  const [activeType, setActiveType] = useState<string>('All')
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered = tools.filter(t => {
    const typeMatch = activeType === 'All' || t.tags.includes(activeType)
    const catMatch = activeCategory === 'All' || t.categories.includes(activeCategory)
    return typeMatch && catMatch
  })

  return (
    <>
      {/* Filter row 1: Type */}
      <div style={{ marginBottom: '12px' }}>
        <div style={FILTER_LABEL_STYLE}>Type</div>
        <div className="filter-bar">
          {TYPE_FILTERS.map(tag => (
            <button
              key={tag}
              className={`filter-btn${activeType === tag ? ' active' : ''}`}
              onClick={() => setActiveType(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Filter row 2: Function */}
      <div style={{ marginBottom: '40px' }}>
        <div style={FILTER_LABEL_STYLE}>Function</div>
        <div className="filter-bar">
          {CATEGORY_FILTERS.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
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
              {tool.categories.map(cat => (
                <span
                  key={cat}
                  className="tag"
                  style={{ borderColor: '#1a3a5c', color: '#7ea8f8' }}
                >
                  {cat}
                </span>
              ))}
            </div>
            <div className="card-footer">
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
