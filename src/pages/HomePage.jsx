import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const htmlContent = $escapedHtml

export default function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    // Initialize Unicorn Studio wave background
    if (window.UnicornStudio) {
      try { window.UnicornStudio.init() } catch(e) {}
    }

    // Handle link navigation with React Router
    const handleLinkClick = (e) => {
      const a = e.target.closest('a[href]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href) return
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault()
        navigate(href)
      }
    }

    document.addEventListener('click', handleLinkClick)
    return () => document.removeEventListener('click', handleLinkClick)
  }, [navigate])

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
