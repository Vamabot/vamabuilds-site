'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/tools', label: 'Tools' },
  { href: '/leaders', label: 'Leaders' },
  { href: '/service-providers', label: 'Service Providers' },
  { href: '/how-we-review', label: 'How We Review' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image src="/logo.png" alt="The Vama Stack" width={32} height={32} />
            The Vama Stack
          </Link>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/submit" className="nav-submit">
            Submit
          </Link>
        </div>
      </div>
    </nav>
  )
}
