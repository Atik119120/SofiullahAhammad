import { Link } from 'react-router-dom'

export default function ComingSoon({ page }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Space Grotesk', sans-serif",
      padding: '20px',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '11px',
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: '3px',
        marginBottom: '20px',
      }}>
        COMING SOON
      </p>
      <h1 style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 'clamp(24px, 4vw, 48px)',
        marginBottom: '24px',
        letterSpacing: '2px',
      }}>
        {page.toUpperCase()}
      </h1>
      <p style={{
        color: 'rgba(255,255,255,0.6)',
        maxWidth: '400px',
        lineHeight: '1.6',
        marginBottom: '40px',
      }}>
        This page content will be provided soon. All navigation routes are active.
      </p>
      <Link to="/" style={{
        background: '#fff',
        color: '#000',
        padding: '14px 32px',
        borderRadius: '100px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '14px',
      }}>
        Back to Home
      </Link>
    </div>
  )
}
