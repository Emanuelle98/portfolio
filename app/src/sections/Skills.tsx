import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SkillBadge } from '@/components/SkillBadge';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud,
  FileCode,
  Palette,
  Layers,
  Box,
  GitBranch,
  Triangle,
  Table,
  HardDrive
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'TypeScript', icon: <FileCode size={14} /> },
      { name: 'React', icon: <Code2 size={14} /> },
      { name: 'Angular', icon: <Triangle size={14} /> },
      { name: 'CSS', icon: <Palette size={14} /> },
      { name: 'Tailwind CSS', icon: <Layers size={14} /> },
      { name: 'Next.js', icon: <Box size={14} /> },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: <Server size={14} /> },
      { name: 'Python', icon: <Code2 size={14} /> },
      { name: '.NET', icon: <Box size={14} /> },
    ],
  },
  {
    title: 'Bases de Datos',
    icon: Database,
    skills: [
      { name: 'SQL Server', icon: <Table size={14} /> },
      { name: 'PostgreSQL', icon: <Database size={14} /> },
      { name: 'MySQL', icon: <HardDrive size={14} /> },
      { name: 'MongoDB', icon: <Box size={14} /> },
      { name: 'Redis', icon: <Layers size={14} /> },
    ],
  },
  {
    title: 'DevOps',
    icon: Cloud,
    skills: [
      { name: 'Git', icon: <GitBranch size={14} /> },
      { name: 'AWS', icon: <Cloud size={14} /> },
      { name: 'Vercel', icon: <Triangle size={14} /> },
      { name: 'CI/CD', icon: <Layers size={14} /> },
    ],
  },
];

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider rounded-full mb-6">
              Tecnologías
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-impact text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-wide">
              HABILIDADES
            </h2>
          </ScrollReveal>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={category.title} delay={categoryIndex * 0.15}>
                <motion.div
                  className="bg-new-black rounded-2xl p-6 md:p-8 border border-white/10"
                  whileHover={prefersReducedMotion ? {} : {
                    borderColor: 'rgba(255, 110, 0, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-orange/10 rounded-lg">
                      <Icon size={20} className="text-orange" />
                    </span>
                    <h3 className="font-impact text-xl uppercase text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.15 + skillIndex * 0.05,
                          duration: 0.4,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      >
                        <SkillBadge name={skill.name} icon={skill.icon} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
