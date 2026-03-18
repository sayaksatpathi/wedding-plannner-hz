import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1770301312269-a511f773619c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBjZXJlbW9ueSUyMGdvbGRlbiUyMGhvdXJ8ZW58MXx8fHwxNzczODUyNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(13,10,8,0.15) 0%, rgba(13,10,8,0.55) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Decorative Line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 80 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="mx-auto mb-6 h-[1px]"
          style={{ backgroundColor: 'var(--gold-primary)' }}
        />

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="mb-8 uppercase text-xs tracking-[0.15em]"
          style={{
            fontFamily: 'var(--font-poppins)',
            color: 'var(--gold-primary)',
            fontWeight: 500
          }}
        >
          Luxury Wedding Studio · Est. 2015
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: '0.02em'
          }}
        >
          Crafting Your <br />
          Dream Wedding
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 text-lg"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.75
          }}
        >
          Where every detail tells your love story.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #F0E0A0, #C9A84C)',
              fontFamily: 'var(--font-poppins)',
              fontWeight: 500,
              fontSize: '14px',
              minWidth: '200px'
            }}
          >
            Book Consultation
          </a>
          
          <a
            href="#services"
            className="px-8 py-4 rounded-full text-white border transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)]"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.8)',
              borderWidth: '1px',
              fontFamily: 'var(--font-poppins)',
              fontWeight: 500,
              fontSize: '14px',
              minWidth: '200px'
            }}
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span 
          className="uppercase text-[10px] tracking-[0.2em]"
          style={{
            fontFamily: 'var(--font-poppins)',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 300
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
