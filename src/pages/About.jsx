import { motion } from 'framer-motion'
import { FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import profilePic from '../assets/images/Profile Pic.png'

const timelineVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring' } }
}

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  in: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  out: { opacity: 0, y: -30, transition: { duration: 0.3 } }
}

export default function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-6 py-20 min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="flex flex-col lg:flex-row gap-16 relative">
        
        {/* Left Side: Sticky Profile Info */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32 glass-card p-8 rounded-2xl border border-lightblue/10">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-orange/50 p-1 mb-6 bg-navy shadow-[0_0_30px_rgba(242,100,25,0.15)] mx-auto lg:mx-0">
              <div className="w-full h-full bg-navy flex items-center justify-center rounded-full overflow-hidden relative group">
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-orange/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            <h1 className="text-4xl font-horizon uppercase tracking-tight text-offwhite mb-2 text-center lg:text-left">
              {t.title1}<span className="text-orange">{t.titleHighlight}</span>{t.title2}
            </h1>
            <h2 className="text-sm uppercase tracking-widest text-lightblue/80 font-semibold mb-6 text-center lg:text-left">
              {t.subtitle}
            </h2>
            
            <p className="text-offwhite/70 text-sm leading-relaxed mb-8 flex-1 text-center lg:text-left whitespace-pre-line">
              {t.description}
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/maxmdamm" target="_blank" rel="noreferrer" title="LinkedIn" className="w-10 h-10 rounded-full bg-navy border border-lightblue/20 flex items-center justify-center hover:bg-orange hover:border-orange hover:text-navy transition-colors text-lightblue">
                <FaLinkedinIn className="text-sm" />
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/@maxmdamm" target="_blank" rel="noreferrer" title="YouTube" className="w-10 h-10 rounded-full bg-navy border border-lightblue/20 flex items-center justify-center hover:bg-orange hover:border-orange hover:text-navy transition-colors text-lightblue">
                <FaYoutube className="text-sm" />
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/maxmdamm" target="_blank" rel="noreferrer" title="Instagram" className="w-10 h-10 rounded-full bg-navy border border-lightblue/20 flex items-center justify-center hover:bg-orange hover:border-orange hover:text-navy transition-colors text-lightblue">
                <FaInstagram className="text-sm" />
              </a>
              {/* Email */}
              <a href="mailto:hi@maxmdamm.com" title="Mail" className="w-10 h-10 rounded-full bg-navy border border-lightblue/20 flex items-center justify-center hover:bg-orange hover:border-orange hover:text-navy transition-colors text-lightblue">
                <FaEnvelope className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Timeline */}
        <div className="w-full lg:w-2/3 lg:pl-10">
          <motion.div 
            className="relative border-l-2 border-lightblue/20 pb-10"
            variants={timelineVariants}
            initial="hidden"
            animate="show"
          >
            {t.timeline.map((item, index) => (
              <motion.div key={index} className="mb-14 ml-8 relative" variants={itemVariants}>
                <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 rounded-full bg-navy border-2 border-lightblue items-center justify-center ring-4 ring-navy shadow-[0_0_15px_rgba(137,194,217,0.5)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange"></span>
                </span>
                
                <h3 className="flex items-center mb-1 text-lg font-bold text-offwhite">
                  {item.role} 
                  <span className="bg-orange/10 text-orange text-xs font-semibold px-2.5 py-0.5 rounded ml-3 border border-orange/20 tracking-wider whitespace-nowrap">
                    {item.year}
                  </span>
                </h3>
                <h4 className="text-sm font-semibold text-lightblue mb-4 tracking-wide flex items-center">
                  <span className="material-icons text-xs mr-2 opacity-70">corporate_fare</span>
                  {item.company}
                </h4>
                <p className="mb-4 text-sm font-normal text-offwhite/60 leading-relaxed max-w-2xl bg-black/20 p-5 rounded-xl border border-lightblue/5">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            {/* Tech Skills */}
            <motion.div className="ml-8 relative mt-20" variants={itemVariants}>
              <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 rounded-full bg-navy border-2 border-lightblue items-center justify-center ring-4 ring-navy">
                <span className="material-icons text-[10px] text-lightblue">code</span>
              </span>
              <h3 className="mb-6 text-xl font-bold text-offwhite font-horizon uppercase">{t.techTitle}</h3>
              
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'Python', 'Data Modeling', 'Telemetry Systems', 'Next.js', 'PostgreSQL', 'Framer Motion', 'Tailwind CSS'].map((skill, idx) => (
                  <span key={idx} className="glass-card px-4 py-2 rounded-lg text-xs font-semibold text-lightblue border border-lightblue/20 hover:border-orange hover:text-orange transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
        
      </div>
    </motion.div>
  )
}
