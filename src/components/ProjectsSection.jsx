import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Brand Identity',
    category: 'Branding',
    year: '2024',
    img: 'https://framerusercontent.com/images/vDS2R7LCoOompxmBq9rV6LicTqI.webp',
  },
  {
    id: 2,
    title: 'Digital Campaign',
    category: 'Marketing',
    year: '2024',
    img: 'https://framerusercontent.com/images/qWafyJa8F6xJsc3zslvSVczRiac.webp',
  },
  {
    id: 3,
    title: 'Web Experience',
    category: 'Design',
    year: '2025',
    img: 'https://framerusercontent.com/images/vLFNQftWxn8GlWaCrxJpZKWD10.webp',
  },
]

export default function ProjectsSection() {
  return (
    <section style={{ padding: '120px 40px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '3px', marginBottom: '12px', fontWeight: 600 }}>
            SELECTED WORK
          </p>
          <h2 style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 'clamp(18px, 2.5vw, 30px)',
            color: '#fff', letterSpacing: '2px',
          }}>
            PROJECTS
          </h2>
        </motion.div>
        <motion.a
          href="/projects"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
          style={{
            fontSize: '12px', color: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '10px 20px', borderRadius: '100px',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          View all ({projects.length.toString().padStart(2, '0')})
        </motion.a>
      </div>

      {/* Project grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{ cursor: 'pointer', group: true }}
          >
            <div style={{
              position: 'relative', overflow: 'hidden', borderRadius: '12px',
              aspectRatio: '4/3', marginBottom: '16px',
              background: '#111',
            }}>
              <img
                src={p.img}
                alt={p.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', marginBottom: '4px' }}>{p.category}</p>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}>{p.title}</h3>
              </div>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{p.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
