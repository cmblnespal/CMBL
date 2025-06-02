import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import SkipToContent from './components/common/SkipToContent'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Research = lazy(() => import('./pages/Research'))
const People = lazy(() => import('./pages/People'))
const Publications = lazy(() => import('./pages/Publications'))
const News = lazy(() => import('./pages/News'))
const Join = lazy(() => import('./pages/Join'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <>
      <SkipToContent />
      <Header />
      <main id="main-content" className="min-h-screen">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/people" element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/news" element={<News />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App 