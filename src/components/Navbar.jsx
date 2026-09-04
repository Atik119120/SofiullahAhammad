import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact us', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
      padding: '20px 40px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', background: 'transparent',
      backdropFilter: 'blur(0px)',
    }}>
      {/* Logo */}
      <Link to="/" style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '11px', color: '#fff', letterSpacing: '2px',
      }}>
        SOFIULLAH
      </Link>

      {/* Desktop nav */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: pathname === link.to ? '#fff' : 'rgba(255,255,255,0.6)',
              letterSpacing: '0.5px',
              transition: 'color 0.2s',
              borderBottom: pathname === link.to ? '1px solid #fff' : 'none',
              paddingBottom: '2px',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA button */}
      <a
        href="mailto:hi@sofiullah.com"
        style={{
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '100px',
          padding: '8px 20px',
          fontSize: '12px',
          fontWeight: 500,
          color: '#fff',
          transition: 'all 0.2s',
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        Get in touch
      </a>
    </nav>
  )
}
