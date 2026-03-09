import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language].nav

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.road, path: '/road-to-110' },
    { name: t.portfolio, path: '/portfolio' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-card border-b border-lightblue/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold font-horizon tracking-widest text-offwhite hover:text-orange transition-colors flex shrink-0 mr-4">
          MD<span className="text-orange">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center justify-center flex-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className="relative group text-sm font-semibold tracking-wide"
              >
                <span className={`transition-colors duration-300 ${isActive ? 'text-orange' : 'text-offwhite/80 group-hover:text-offwhite'}`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-orange"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Right Nav (Flag Toggle + Mobile Menu Icon) */}
        <div className="flex items-center space-x-4 shrink-0">
          <button 
            onClick={toggleLanguage} 
            className="text-2xl hover:scale-110 transition-transform focus:outline-none"
            title={language === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
          >
            {language === 'de' ? '🇬🇧' : '🇩🇪'}
          </button>

          <button 
            className="md:hidden text-offwhite hover:text-orange transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-icons">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className={`text-sm font-semibold tracking-wide ${isActive ? 'text-orange' : 'text-offwhite/80'}`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
