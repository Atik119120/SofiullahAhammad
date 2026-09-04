import { motion } from 'framer-motion'

const posts = [
  {
    id: 1,
    title: 'The Future of Design Systems',
    category: 'Design',
    date: 'Aug 2025',
    img: 'https://framerusercontent.com/images/BYTBcqFikmPNhvjQYU7pi3ciyI.jpg',
    excerpt: 'Exploring how design systems are evolving in the age of AI and automation.',
  },
  {
    id: 2,
    title: 'Creating Bold Brand Identities',
    category: 'Branding',
    date: 'Jul 2025',
    img: 'https://framerusercontent.com/images/RRlaQhN002Od7y3IQySyvLv5WY.jpg',
    excerpt: 'What makes a brand identity truly unforgettable in a saturated market.',
  },
]

export default function JournalSection() {
  return (
    <section style={{
      padding: '80px 40px 120px',
      borderTop: '1px solid #1a1a1a',
      maxWidth: '1400px', margin: '0 auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '3px', marginBottom: '12px', fontWeight: 600 }}>
            LATEST THOUGHTS
          </p>
          <h2 style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 'clamp(18px, 2.5vw, 30px)',
            color: '#fff', letterSpacing: '2px',
          }}>
            JOURNAL
          </h2>
        </motion.div>
        <motion.a
          href="/journal"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
          style={{
            fontSize: '12px', color: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '10px 20px', borderRadius: '100px',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          View all ({posts.length.toString().padStart(2, '0')})
        </motion.a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '32px' }}>
        {posts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            style={{ cursor: 'pointer' }}
          >
            <div style={{
              overflow: 'hidden', borderRadius: '12px',
              aspectRatio: '16/9', marginBottom: '20px', background: '#111',
            }}>
              <img
                src={post.img} alt={post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '10px', alignItems: 'center' }}>
              <span style={{
                fontSize: '10px', padding: '3px 10px', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '100px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px',
              }}>
                {post.category}
              </span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{post.date}</span>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>{post.title}</h3>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7' }}>{post.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
