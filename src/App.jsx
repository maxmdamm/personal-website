import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import RoadTo110 from './pages/RoadTo110'
import Portfolio from './pages/Portfolio'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Background Decorator / Noise could go here */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #89c2d9 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lightblue/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[150px] pointer-events-none translate-y-1/4 -translate-x-1/4"></div>

      <Navbar />
      
      <main className="flex-1 z-10 w-full pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/road-to-110" element={<RoadTo110 />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
