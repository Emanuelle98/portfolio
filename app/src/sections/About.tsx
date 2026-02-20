import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Users, MessageCircle, Lightbulb, BookOpen, RefreshCw, Eye } from 'lucide-react';

const softSkills = [
  { name: 'Trabajo en equipo', icon: Users },
  { name: 'Comunicación efectiva', icon: MessageCircle },
  { name: 'Resolución de problemas', icon: Lightbulb },
  { name: 'Aprendizaje continuo', icon: BookOpen },
  { name: 'Adaptabilidad', icon: RefreshCw },
  { name: 'Atención al detalle', icon: Eye },
];

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <span className="inline-block px-4 py-1 bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider rounded-full mb-6">
                Sobre mí
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-impact text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-tight tracking-wide">
                DESARROLLADOR
                <br />
                <span className="text-gradient">APASIONADO</span>
              </h2>
            </ScrollReveal>
          </div>
          
          {/* Right column - Content */}
          <div className="space-y-8">
            <ScrollReveal delay={0.2}>
              <p className="font-mono text-lg text-white/80 leading-relaxed">
                Soy un desarrollador full stack con pasión por crear experiencias web excepcionales. 
                Mi enfoque combina código limpio con diseño intuitivo, siempre buscando la mejor 
                solución para cada desafío.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="font-mono text-base text-white/60 leading-relaxed">
                Con experiencia en el desarrollo de sistemas internos y aplicaciones para clientes, 
                he aprendido la importancia de entender las necesidades del negocio y traducirlas 
                en soluciones técnicas eficientes. Mi background en QA me ha dado una perspectiva 
                única sobre la calidad y la atención al detalle.
              </p>
            </ScrollReveal>
            
            {/* Soft Skills */}
            <ScrollReveal delay={0.4}>
              <div className="pt-8">
                <h3 className="font-impact text-xl uppercase text-white/40 tracking-wide mb-6">
                  Habilidades Blandas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-sm font-mono text-white/80 bg-transparent cursor-default"
                        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          duration: 0.4,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                        whileHover={prefersReducedMotion ? {} : {
                          scale: 1.05,
                          borderColor: '#ff6e00',
                          backgroundColor: 'rgba(255, 110, 0, 0.1)',
                          color: '#ffffff',
                        }}
                      >
                        <Icon size={16} className="text-orange" />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
