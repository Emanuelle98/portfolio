import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  index?: number;
}

export function ProjectCard({ 
  title, 
  description, 
  tech, 
  link,
  index = 0 
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative bg-new-black rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={prefersReducedMotion ? {} : {
        y: -12,
        borderColor: 'rgba(255, 110, 0, 0.5)',
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative p-8 md:p-10 h-full flex flex-col min-h-[320px]">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <h3 className="font-impact text-3xl md:text-4xl uppercase text-white tracking-wide group-hover:text-orange transition-colors duration-300">
            {title}
          </h3>
          <motion.div
            className="text-white/50 group-hover:text-orange transition-colors duration-300"
            whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 45 }}
          >
            <ExternalLink size={24} />
          </motion.div>
        </div>
        
        {/* Description */}
        <p className="text-white/70 font-mono text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-xs font-mono text-white/80 group-hover:border-orange/30 group-hover:bg-orange/5 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
        
        {/* Hover line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange to-yellow"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
    </motion.a>
  );
}
