'use client'
import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // TODO: Wire to email service (ConvertKit, Beehiiv, etc.)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{
        padding: '16px 24px',
        background: '#0d1a0d',
        border: '1px solid #1a3a1a',
        borderRadius: '6px',
        color: '#6bcf6b',
        fontSize: '15px',
      }}>
        You are on the list.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        style={{
          flex: '1 1 240px',
          padding: '10px 16px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          color: 'var(--text)',
          fontSize: '15px',
          fontFamily: 'var(--font)',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 24px',
          background: 'var(--bg-navy)',
          border: '1px solid #1a2e5a',
          borderRadius: '6px',
          color: 'var(--text)',
          fontSize: '15px',
          fontFamily: 'var(--font)',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        Notify me
      </button>
    </form>
  )
}
