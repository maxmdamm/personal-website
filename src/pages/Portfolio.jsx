import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  out: { opacity: 0, scale: 0.98, transition: { duration: 0.3 } }
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4 } }
}

export default function Portfolio() {
  const { language } = useLanguage()
  const t = translations[language].portfolio

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-6 py-20 min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-horizon uppercase text-transparent bg-clip-text bg-gradient-to-r from-offwhite to-lightblue mb-4">
          {t.title}
        </h1>
        <p className="text-lightblue/70 max-w-2xl text-lg">
          {t.subtitle}
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {t.projects.map((project, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className={`glass-card rounded-2xl overflow-hidden group relative flex flex-col justify-end p-6 border border-lightblue/10 cursor-pointer ${project.span}`}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(137, 194, 217, 0.2)" }}
          >
            {/* Image Placeholder Background */}
            <div className={`absolute inset-0 z-0 ${project.imgClass} group-hover:scale-105 transition-transform duration-700 ease-in-out`}>
              <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors duration-300"></div>
              {/* Optional Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold font-horizon uppercase text-offwhite mb-2 group-hover:text-orange transition-colors">
                {project.title}
              </h3>
              
              <p className="text-offwhite/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-lightblue text-navy text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
