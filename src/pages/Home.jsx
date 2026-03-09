import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  out: { opacity: 0, y: -20, transition: { duration: 0.3 } }
}

const cardContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
}

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language].home

  return (
    <motion.div 
      className="min-h-[85vh] flex flex-col justify-center items-center px-6 relative"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      
      <div className="max-w-5xl mx-auto w-full text-center mb-20 z-10">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-horizon uppercase text-transparent bg-clip-text bg-gradient-to-br from-offwhite via-offwhite to-lightblue drop-shadow-xl tracking-tighter"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          {t.title}
        </motion.h1>
        
        <motion.h2 
          className="text-lg md:text-xl lg:text-2xl mt-4 font-light text-lightblue/80 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t.subtitle1}<span className="text-orange font-semibold">{t.subtitleHighlight}</span>
        </motion.h2>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl z-10"
        variants={cardContainerVariants}
        initial="hidden"
        animate="show"
      >
        {t.cards.map((card, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <Link to={card.link} className="block h-full outline-none">
              <motion.div 
                className="h-full glass-card p-8 rounded-2xl cursor-pointer flex flex-col h-[280px] justify-between relative overflow-hidden group border border-lightblue/10"
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(242, 100, 25, 0.2)",
                  borderColor: "rgba(242, 100, 25, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center border border-lightblue/20 shadow-lg text-lightblue group-hover:text-orange group-hover:-rotate-[-5deg] transition-all duration-300 z-10">
                  <span className="material-icons text-3xl">{card.icon}</span>
                </div>
                
                <div className="z-10 mt-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-orange transition-colors duration-300">{card.title}</h3>
                  <p className="text-offwhite/60 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <motion.div 
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 text-orange"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="material-icons">arrow_forward</span>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
    </motion.div>
  )
}
