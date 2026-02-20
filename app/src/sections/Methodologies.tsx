import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  Users, 
  GitBranch, 
  CheckCircle, 
  Code2, 
  Layers,
  Figma,
  Terminal,
  Workflow
} from 'lucide-react';

const methodologies = [
  {
    title: 'Metodologías Ágiles',
    items: ['Scrum', 'Kanban', 'Sprints'],
    icon: Users,
  },
  {
    title: 'Control de Versiones',
    items: ['Git', 'Git Flow', 'Code Reviews'],
    icon: GitBranch,
  },
  {
    title: 'Buenas Prácticas',
    items: ['Clean Code', 'SOLID', 'DRY'],
    icon: CheckCircle,
  },
  {
    title: 'Testing',
    items: ['Unit Testing', 'Integration Tests', 'QA'],
    icon: Code2,
  },
];

const tools = [
  {
    name: 'Figma',
    description: 'Diseño de interfaces',
    icon: Figma,
  },
  {
    name: 'Postman',
    description: 'Testing de APIs',
    icon: Terminal,
  },
  {
    name: 'Jira / Trello',
    description: 'Gestión de proyectos',
    icon: Workflow,
  },
  {
    name: 'VS Code',
    description: 'Editor principal',
    icon: Layers,
  },
];

export function Methodologies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="methodologies" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider rounded-full mb-6">
              Cómo trabajo
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-impact text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-wide">
              METODOLOGÍAS
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="mt-6 font-mono text-base text-white/60 max-w-2xl mx-auto">
              Herramientas y prácticas que aplico en mi día a día para entregar código de calidad.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Methodologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {methodologies.map((method, index) => {
            const Icon = method.icon;
            return (
              <ScrollReveal key={method.title} delay={0.3 + index * 0.1}>
                <motion.div
                  className="bg-new-black rounded-2xl p-6 border border-white/10 h-full"
                  whileHover={prefersReducedMotion ? {} : {
                    borderColor: 'rgba(255, 110, 0, 0.3)',
                    y: -4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-orange/10 rounded-lg">
                      <Icon size={20} className="text-orange" />
                    </span>
                    <h3 className="font-impact text-lg uppercase text-white tracking-wide">
                      {method.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {method.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-xs font-mono text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
        
        {/* Tools Section */}
        <ScrollReveal delay={0.5}>
          <div className="bg-new-black rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="font-impact text-xl uppercase text-white tracking-wide mb-6 text-center">
              Herramientas que uso
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange/30 transition-colors duration-300"
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      duration: 0.4,
                    }}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  >
                    <Icon size={28} className="text-orange" />
                    <div className="text-center">
                      <p className="font-mono text-sm text-white font-medium">
                        {tool.name}
                      </p>
                      <p className="font-mono text-xs text-white/50">
                        {tool.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
