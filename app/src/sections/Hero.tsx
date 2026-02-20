import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AnimatedText } from '@/components/AnimatedText';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial animate-gradient" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={prefersReducedMotion ? {} : {
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Role badge */}
        <motion.div
          className="mb-8"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block px-6 py-2 bg-orange text-black font-mono text-sm uppercase tracking-widest rounded-full">
            Full Stack Developer
          </span>
        </motion.div>
        
        {/* Main title */}
        <h1 className="font-impact text-[12vw] md:text-[10vw] lg:text-[8vw] uppercase leading-[0.9] tracking-wide text-white mb-6">
          <AnimatedText text="EMANUELLE" delay={0.4} staggerDelay={0.08} />
          <br />
          <AnimatedText text="RIVERO" delay={0.8} staggerDelay={0.08} />
        </h1>
        
        {/* Subtitle */}
        <motion.p
          className="font-mono text-base md:text-lg text-white/60 lowercase tracking-wide max-w-xl mx-auto"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          estudiante de informática & desarrollador apasionado por crear experiencias web excepcionales
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-mono text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conóceme
            <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={18} />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/40"
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
