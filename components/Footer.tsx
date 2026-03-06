import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <p>The Vama Stack &copy; {new Date().getFullYear()}</p>
            <p style={{ marginTop: '4px' }}>No pay-to-play. Ever.</p>
            <a
              href="https://x.com/vamabuilds"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', marginTop: '8px', fontSize: '13px', color: 'var(--text-muted)' }}
            >
              @vamabuilds on X ↗
            </a>
          </div>
          <ul className="footer-links">
            <li><Link href="/tools">Tools</Link></li>
            <li><Link href="/leaders">Leaders</Link></li>
            <li><Link href="/service-providers">Service Providers</Link></li>
            <li><Link href="/how-we-review">How I Review</Link></li>
            <li><Link href="/submit">Submit</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
