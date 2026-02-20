import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  Brain, 
  Zap, 
  Layout, 
  Server, 
  Sparkles,
  Cpu,
  Bot,
  Code
} from 'lucide-react';

const interests = [
  {
    title: 'Inteligencia Artificial',
    description: 'Apasionado por el potencial de la IA. Experimento con LLMs, prompts engineering y herramientas de IA para optimizar flujos de desarrollo.',
    icon: Brain,
    featured: true,
    technologies: ['ChatGPT', 'Claude', 'GitHub Copilot', 'Midjourney'],
  },
  {
    title: 'UI/UX Design',
    description: 'Me interesa crear interfaces intuitivas y experiencias de usuario memorables. Diseño con atención al detalle.',
    icon: Layout,
    featured: false,
    technologies: ['Figma', 'Design Systems', 'Prototipado'],
  },
  {
    title: 'Performance Web',
    description: 'Optimización de aplicaciones para carga rápida y experiencia fluida. Core Web Vitals y métricas de rendimiento.',
    icon: Zap,
    featured: false,
    technologies: ['Lighthouse', 'Webpack', 'Code Splitting'],
  },
  {
    title: 'Arquitectura de Software',
    description: 'Diseño de sistemas escalables y mantenibles. Patrones de diseño y mejores prácticas.',
    icon: Server,
    featured: false,
    technologies: ['Microservicios', 'Clean Architecture', 'DDD'],
  },
];

const aiTools = [
  { name: 'ChatGPT', icon: Bot },
  { name: 'Claude', icon: Sparkles },
  { name: 'GitHub Copilot', icon: Code },
  { name: 'Cursor', icon: Cpu },
];

export function Interests() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="interests" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background glow for AI section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider rounded-full mb-6">
              Mi dirección
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-impact text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-wide">
              ÁREAS DE <span className="text-gradient">INTERÉS</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="mt-6 font-mono text-base text-white/60 max-w-2xl mx-auto">
              Temas que me apasionan y en los que invierto tiempo para seguir creciendo profesionalmente.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Featured: AI Section */}
        <ScrollReveal delay={0.3}>
          <motion.div
            className="relative bg-gradient-to-br from-orange/20 via-new-black to-yellow/10 rounded-3xl p-8 md:p-12 border border-orange/30 mb-8 overflow-hidden"
            whileHover={prefersReducedMotion ? {} : {
              borderColor: 'rgba(255, 110, 0, 0.5)',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative flex flex-col md:flex-row gap-8 items-start">
              {/* Icon */}
              <div className="flex-shrink-0">
                <motion.div
                  className="w-20 h-20 bg-orange rounded-2xl flex items-center justify-center"
                  animate={prefersReducedMotion ? {} : {
                    boxShadow: [
                      '0 0 20px rgba(255, 110, 0, 0.3)',
                      '0 0 40px rgba(255, 110, 0, 0.5)',
                      '0 0 20px rgba(255, 110, 0, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Brain size={40} className="text-black" />
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-impact text-2xl md:text-3xl uppercase text-white tracking-wide">
                    Inteligencia Artificial
                  </h3>
                  <span className="px-3 py-1 bg-orange text-black text-xs font-mono uppercase tracking-wider rounded-full">
                    Destacado
                  </span>
                </div>
                
                <p className="font-mono text-base text-white/80 leading-relaxed mb-6 max-w-2xl">
                  Estoy muy al tanto de todo lo que sucede en el mundo de la IA. Experimento constantemente 
                  con nuevas herramientas, sigo de cerca los avances de LLMs y busco formas de integrar 
                  la inteligencia artificial en mis flujos de trabajo para ser más productivo y creativo.
                </p>
                
                {/* AI Tools */}
                <div className="flex flex-wrap gap-3">
                  {aiTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <span
                        key={tool.name}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 border border-orange/30 rounded-full text-sm font-mono text-white/90"
                      >
                        <Icon size={14} className="text-orange" />
                        {tool.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
        
        {/* Other Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.filter(i => !i.featured).map((interest, index) => {
            const Icon = interest.icon;
            return (
              <ScrollReveal key={interest.title} delay={0.4 + index * 0.1}>
                <motion.div
                  className="bg-new-black rounded-2xl p-6 border border-white/10 h-full"
                  whileHover={prefersReducedMotion ? {} : {
                    borderColor: 'rgba(255, 110, 0, 0.3)',
                    y: -4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-orange/10 rounded-xl mb-4">
                    <Icon size={24} className="text-orange" />
                  </span>
                  
                  <h3 className="font-impact text-lg uppercase text-white tracking-wide mb-3">
                    {interest.title}
                  </h3>
                  
                  <p className="font-mono text-sm text-white/60 leading-relaxed mb-4">
                    {interest.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {interest.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
        
        {/* Quote */}
        <ScrollReveal delay={0.7}>
          <div className="mt-12 text-center">
            <blockquote className="font-mono text-lg text-white/40 italic">
              "La IA no reemplazará a los desarrolladores, pero los desarrolladores que usen IA 
              reemplazarán a los que no la usen."
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
