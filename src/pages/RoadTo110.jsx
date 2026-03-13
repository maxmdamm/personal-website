import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import bevelImg from '../assets/images/Bevel.png'
import waterImg from '../assets/images/Waterminder.png'
import thermomixImg from '../assets/images/Thermomix.png'
import mrtImg from '../assets/images/MRT-Bilder.png'

const imageMap = {
  BEVEL_DASHBOARD: bevelImg,
  WATER_LOGS: waterImg,
  MEAL_PREP_BAY: thermomixImg,
}

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  in: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  out: { opacity: 0, y: -30, transition: { duration: 0.3 } }
}

export default function RoadTo110() {
  const { language } = useLanguage()
  const t = translations[language].road
  
  const [expandedId, setExpandedId] = useState(null)

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-6 py-20 min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      
      {/* Hero Section */}
      <div className="text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-[#00ff88]/40 text-xs font-mono text-[#00ff88] mb-8 shadow-[0_0_15px_rgba(0,255,136,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_8px_rgba(0,255,136,1)]"></span>
            <span className="tracking-widest font-semibold">{t.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-horizon uppercase text-transparent bg-clip-text bg-gradient-to-br from-offwhite to-lightblue/80 drop-shadow-lg tracking-tighter mb-4">
            {t.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-lightblue/80 font-light max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </h2>
        </motion.div>
      </div>

      {/* 1. New Context Section */}
      <motion.section 
        className="mb-32 flex flex-col md:flex-row gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full md:w-1/2">
          {/* MRI Image */}
          <div className="aspect-square relative rounded-2xl overflow-hidden glass-card border border-lightblue/10 group shadow-2xl">
            <img src={mrtImg} alt="MRI Scan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500 pointer-events-none"></div>
            {/* Outline Glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-orange/30 transition-all pointer-events-none"></div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-orange font-semibold mb-2 font-mono">
              {t.contextTitle}
            </h3>
            <h4 className="text-3xl font-bold font-horizon uppercase tracking-wide text-offwhite">
              {t.contextSubtitle}
            </h4>
          </div>
          <p className="text-offwhite/70 text-lg leading-relaxed whitespace-pre-line">
            {t.contextDesc}
          </p>
        </div>
      </motion.section>

      {/* The System Features */}
      <motion.section
        className="mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold font-horizon uppercase tracking-wide mb-4">{t.systemTitle}</h3>
          <p className="text-lightblue/80 font-mono text-sm max-w-2xl mx-auto">
            {t.systemDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {t.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              className="glass-card p-8 rounded-2xl border border-lightblue/10 group hover:border-orange/40 transition-colors duration-300 relative overflow-hidden"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange/5 rounded-full blur-[30px] group-hover:bg-orange/10 transition-colors"></div>
              
              <div className="w-14 h-14 bg-navy/80 rounded-xl flex items-center justify-center border border-lightblue/20 shadow-lg text-lightblue mb-6 group-hover:text-orange transition-colors">
                <span className="material-icons text-3xl">{feature.icon}</span>
              </div>
              
              <h4 className="text-xl font-bold mb-3 text-offwhite group-hover:text-orange transition-colors">
                {feature.title}
              </h4>
              <p className="text-offwhite/60 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA + Badge */}
        <div className="flex flex-col items-center">
          <motion.a 
            href="https://www.notion.com/@maxmdamm"
            target="_blank"
            rel="noreferrer" 
            className="group relative px-10 py-5 font-bold text-navy bg-orange rounded-xl overflow-hidden shadow-[0_0_30px_rgba(242,100,25,0.4)] text-lg tracking-wide uppercase font-horizon mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              {t.cta}
              <span className="material-icons ml-3 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </motion.a>
          
          {/* 2. Notion Certified Badge */}
          <div className="flex items-center space-x-2 text-lightblue opacity-80 bg-lightblue/5 px-4 py-2 rounded-full border border-lightblue/10 cursor-default hover:opacity-100 transition-opacity">
            <span className="material-icons text-sm">verified</span>
            <span className="text-xs font-mono font-semibold tracking-wider">
              {t.certifiedBadge}
            </span>
          </div>
        </div>
      </motion.section>

      {/* 3. Telemetry Modules Accordion */}
      <motion.section
        className="mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold font-horizon uppercase tracking-wide mb-3">{t.modulesTitle}</h3>
          <p className="text-lightblue/70 font-mono text-sm max-w-2xl mx-auto">
            {t.modulesDesc}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.accordion.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div 
                key={item.id} 
                className={`glass-card rounded-xl border transition-colors duration-300 overflow-hidden ${isExpanded ? 'border-orange/50 bg-navy/90' : 'border-lightblue/10 hover:border-lightblue/30'}`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold font-horizon uppercase transition-colors ${isExpanded ? 'text-orange' : 'text-offwhite'}`}>
                    {item.title}
                  </span>
                  <motion.span 
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="material-icons text-lightblue"
                  >
                    expand_more
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 flex flex-col sm:flex-row gap-6 items-start border-t border-lightblue/10 mt-2">
                         {/* Mockup Placeholder */}
                        <div className="w-[150px] aspect-[9/19.5] bg-black/40 rounded-[20px] flex items-center justify-center border-4 border-navy shadow-[0_0_15px_rgba(0,0,0,0.5)] flex-shrink-0 relative overflow-hidden group mx-auto sm:mx-0 ring-1 ring-white/10">
                          {imageMap[item.imgAlias] ? (
                            <img src={imageMap[item.imgAlias]} alt={item.title} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-[9px] font-mono tracking-widest text-lightblue/40 uppercase relative z-10 group-hover:text-lightblue/80 transition-colors text-center px-2">[{item.imgAlias}]<br/><span className="text-[7px] opacity-70">IPHONE SCREEN</span></span>
                          )}
                        </div>
                        {/* Text */}
                        <div className="w-full sm:w-2/3 mt-2 sm:mt-0">
                          <p className="text-offwhite/80 leading-relaxed text-sm">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </motion.section>

      {/* 5. Mission Log / Video Section (Moved to Bottom) */}
      <motion.section 
        className="mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-8 border-b border-lightblue/10 pb-4">
          <h3 className="text-3xl font-bold font-horizon uppercase tracking-wide">{t.missionLog}</h3>
          <span className="font-mono text-sm text-lightblue/60">{t.latestUpload}</span>
        </div>

        <div className="w-full aspect-video relative rounded-2xl overflow-hidden glass-card group ring-1 ring-lightblue/20 shadow-2xl">
          <iframe 
            src="https://www.youtube.com/embed?listType=playlist&list=UUydtpCI3SZUJ8v6JgE6wE5A" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </motion.section>

    </motion.div>
  )
}
