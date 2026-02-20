import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TimelineItem } from '@/components/TimelineItem';

const experiences = [
  {
    title: 'Analista en Desarrollo',
    company: 'Tienda Inglesa',
    period: '2023 - Presente',
    description: [
      'Desarrollo de sistemas internos y aplicaciones para clientes',
      'Stack: Angular, .NET, SQL Server',
      'Trabajo en equipo ágil, colaboración con stakeholders',
      'Implementación de nuevas funcionalidades y mantenimiento',
    ],
    side: 'right' as const,
  },
  {
    title: 'QA Tester',
    company: 'Tienda Inglesa',
    period: '2021 - 2023',
    description: [
      'Pruebas manuales de sistemas internos',
      'Automatización de pruebas con herramientas especializadas',
      'Documentación de bugs y procesos de calidad',
      'Colaboración con el equipo de desarrollo',
    ],
    side: 'left' as const,
  },
];

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider rounded-full mb-6">
              Trayectoria
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-impact text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-wide">
              EXPERIENCIA
            </h2>
          </ScrollReveal>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Center line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-orange via-yellow to-orange"
              initial={prefersReducedMotion ? {} : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformOrigin: 'top', height: '100%' }}
            />
          </div>
          
          {/* Timeline items */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.title}
                {...exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
