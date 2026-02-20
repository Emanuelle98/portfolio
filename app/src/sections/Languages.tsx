import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Globe, MessageCircle } from 'lucide-react';

const languages = [
  {
    name: 'Español',
    level: 'Nativo',
    description: 'Lengua materna',
    progress: 100,
  },
  {
    name: 'Inglés',
    level: 'Técnico - Intermedio',
    description: 'Lectura de documentación, comunicación técnica',
    progress: 70,
  },
];

export function Languages() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="languages" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider rounded-full mb-6">
              Comunicación
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-impact text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-wide">
              IDIOMAS
            </h2>
          </ScrollReveal>
        </div>
        
        {/* Languages Cards */}
        <div className="space-y-6">
          {languages.map((language, index) => (
            <ScrollReveal key={language.name} delay={0.2 + index * 0.15}>
              <motion.div
                className="bg-new-black rounded-2xl p-6 md:p-8 border border-white/10"
                whileHover={prefersReducedMotion ? {} : {
                  borderColor: 'rgba(255, 110, 0, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  {/* Icon and Name */}
                  <div className="flex items-center gap-4 min-w-[200px]">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-orange/10 rounded-xl">
                      {index === 0 ? (
                        <Globe size={24} className="text-orange" />
                      ) : (
                        <MessageCircle size={24} className="text-orange" />
                      )}
                    </span>
                    <div>
                      <h3 className="font-impact text-xl uppercase text-white tracking-wide">
                        {language.name}
                      </h3>
                      <span className="inline-block px-3 py-0.5 bg-orange/20 text-orange text-xs font-mono uppercase tracking-wider rounded-full mt-1">
                        {language.level}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/60 font-mono text-sm flex-grow">
                    {language.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="w-full md:w-32">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-orange to-yellow rounded-full"
                        initial={prefersReducedMotion ? {} : { width: 0 }}
                        whileInView={{ width: `${language.progress}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + index * 0.2,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
