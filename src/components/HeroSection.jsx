import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const HERO_IMAGE = 'https://i.postimg.cc/KcDnQ16P/Screenshot-2026-09-04-101135.png'
const UNICORN_PROJECT = 'YnADGzDD7LGB9cUocyyN'

const heroName = 'SOFIULLAH'.split('')

export default function HeroSection() {
  const unicornRef = useRef(null)

  useEffect(() => {
    // Init Unicorn Studio wave effect
    const timer = setTimeout(() => {
      if (window.UnicornStudio && unicornRef.current) {
        try {
          window.UnicornStudio.addScene({
            elementId: 'unicorn-canvas',
            projectId: UNICORN_PROJECT,
            fps: 60,
            scale: 1,
            dpi: 1,
          })
        } catch(e) { console.warn('Unicorn Studio init failed', e) }
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } }
  }
  const letterVariants = {
    hidden: { opacity: 0, y: 60, rotate: 5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section style={{
      position: 'relative', width: '100%', minHeight: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden',
    }}>
      {/* LEFT — Portrait with wave overlay */}
      <div style={{ position: 'relative', height: '100vh' }}>
        <img
          src={HERO_IMAGE}
          alt="Sofiullah"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        />
        {/* Unicorn Studio wave canvas */}
        <div
          id="unicorn-canvas"
          ref={unicornRef}
          data-us-project={UNICORN_PROJECT}
          style={{
            position: 'absolute', inset: 0, zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        {/* Bottom gradient */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', zIndex: 3,
          background: 'linear-gradient(to top, #0a0a0a, transparent)',
        }} />
      </div>

      {/* RIGHT — Text content */}
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '120px 60px 60px 60px', position: 'relative',
      }}>
        {/* BIG pixel name — animated letter by letter */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 'clamp(28px, 4vw, 52px)',
            color: '#fff',
            lineHeight: 1.2,
            letterSpacing: '4px',
            marginBottom: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0',
          }}
        >
          {heroName.map((letter, i) => (
            <motion.span key={i} variants={letterVariants} style={{ display: 'inline-block' }}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '9px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '3px',
            marginBottom: '40px',
          }}
        >
          DESIGN STUDIO · LONDON
        </motion.h5>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: '1.8',
            maxWidth: '380px',
            marginBottom: '48px',
          }}
        >
          A bold, modern portfolio designed for creatives. With sleek design, smooth interactions,
          and full customizability — built to showcase work with style and impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
        >
          <a href="/projects" style={{
            background: '#fff', color: '#000',
            padding: '14px 28px', borderRadius: '100px',
            fontSize: '13px', fontWeight: 600,
            transition: 'all 0.2s',
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            View Projects
          </a>
          <a href="/about" style={{
            border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
            padding: '14px 28px', borderRadius: '100px',
            fontSize: '13px', fontWeight: 500,
            transition: 'all 0.2s',
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            About Me
          </a>
        </motion.div>
      </div>

      {/* Vertical scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 10,
      }}>
        <div style={{
          width: '1px', height: '60px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))',
          animation: 'fadeInUp 1.5s ease infinite',
        }} />
      </div>
    </section>
  )
}
