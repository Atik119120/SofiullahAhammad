import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<ComingSoon page="About" />} />
      <Route path="/projects" element={<ComingSoon page="Projects" />} />
      <Route path="/journal" element={<ComingSoon page="Journal" />} />
      <Route path="/contact" element={<ComingSoon page="Contact us" />} />
    </Routes>
  )
}
