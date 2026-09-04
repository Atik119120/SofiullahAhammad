export default function Footer() {
  const letters = 'SOFIULLAH'.split('')
  const marqueeItems = [...letters, ...letters, ...letters, ...letters]

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a', paddingTop: '60px' }}>
      {/* Top section */}
      <div style={{
        maxWidth: '1400px', margin: '0 auto', padding: '0 40px 60px',
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px',
      }}>
        {/* Left */}
        <div>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', marginBottom: '16px', fontWeight: 600 }}>
            STAY CONNECTED.
          </p>
          <a
            href="mailto:hi@sofiullah.com"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '14px', color: '#fff', letterSpacing: '1px', display: 'block', marginBottom: '24px',
            }}
          >
            HI@SOFIULLAH.COM
          </a>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', maxWidth: '280px' }}>
            At Sofiullah, we break boundaries to craft designs that stand out and deliver results.
            We blend creativity with strategy, turning bold ideas into digital experiences that captivate and inspire.
          </p>
          <p style={{ marginTop: '32px', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
            Made with Love by FTC Studio
          </p>
        </div>

        {/* Middle - Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '8px' }}>
          {['Home', 'About', 'Projects', 'Journal', 'Contact us'].map(item => (
            <a key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}
              style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 500, transition: 'color 0.2s' }}>
              {item}
            </a>
          ))}
        </div>

        {/* Right - Social */}
        <div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>Social Media</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['X', 'IG', 'in', 'YT'].map(s => (
              <div key={s} style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '10px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
              }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Big marquee */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid #1a1a1a', padding: '20px 0' }}>
        <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 'clamp(40px, 6vw, 80px)',
              color: 'rgba(194,194,194,0.6)',
              padding: '0 40px',
              letterSpacing: '4px',
            }}>
              Sofiullah
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        textAlign: 'center', padding: '20px',
        borderTop: '1px solid #1a1a1a',
        fontSize: '12px', color: 'rgba(255,255,255,0.3)',
      }}>
        ©2025 SOFIULLAH Studio. All right reserved.
      </div>
    </footer>
  )
}
