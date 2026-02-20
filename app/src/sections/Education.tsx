import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="education" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider rounded-full mb-6">
              Formación
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-impact text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-wide">
              EDUCACIÓN
            </h2>
          </ScrollReveal>
        </div>
        
        {/* Education Card */}
        <ScrollReveal delay={0.2}>
          <motion.div
            className="bg-new-black rounded-2xl p-8 md:p-12 border border-white/10 text-center"
            whileHover={prefersReducedMotion ? {} : {
              borderColor: 'rgba(255, 110, 0, 0.3)',
              scale: 1.02,
            }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange/10 rounded-full mb-6">
              <GraduationCap size={32} className="text-orange" />
            </div>
            
            {/* Degree */}
            <h3 className="font-impact text-2xl md:text-3xl uppercase text-white tracking-wide mb-2">
              Licenciatura en Informática
            </h3>
            
            {/* Institution */}
            <p className="font-mono text-lg text-white/70 mb-4">
              Universidad de Montevideo
            </p>
            
            {/* Status */}
            <div className="flex items-center justify-center gap-2 text-orange">
              <Calendar size={16} />
              <span className="font-mono text-sm uppercase tracking-wider">
                En curso
              </span>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
