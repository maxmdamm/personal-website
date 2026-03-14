import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full z-10 glass-card">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Copyright */}
        <div className="text-offwhite/80 hover:text-orange transition-colors duration-300 text-sm font-semibold tracking-wide flex items-center h-full cursor-default">
          © Max Damm 2026
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-6 h-full text-offwhite/80">
          <a href="https://instagram.com/maxmdamm" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://youtube.com/@maxmdamm" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors duration-300">
            <FaYoutube size={20} />
          </a>
          <a href="https://linkedin.com/in/maxmdamm" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors duration-300">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
