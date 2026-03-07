/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success || res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '16px 0' }}>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
          You're in. I'll send updates when something is worth seeing.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === 'loading'}
        style={{
          flex: 1,
          minWidth: '200px',
          padding: '10px 16px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          fontSize: '14px',
          color: 'var(--text-primary)',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        disabled={status === 'loading' || !email}
        style={{
          padding: '10px 20px',
          background: 'var(--bg-navy)',
          border: '1px solid #1a2e5a',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          whiteSpace: 'nowrap',
          color: 'white',
        }}
      >
        {status === 'loading' ? 'Joining...' : 'Follow along'}
      </button>
      {status === 'error' && (
        <p style={{ fontSize: '13px', color: '#ef4444', marginTop: '8px', width: '100%' }}>
          Something went wrong. Try again.
        </p>
      )}
    </form>
  )
}
