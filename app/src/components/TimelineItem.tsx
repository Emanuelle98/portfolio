import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  side: 'left' | 'right';
  index: number;
}

export function TimelineItem({ 
  title, 
  company, 
  period, 
  description, 
  side,
  index 
}: TimelineItemProps) {
  const prefersReducedMotion = useReducedMotion();
  
  const slideDirection = side === 'left' ? -100 : 100;
  
  return (
    <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${side === 'right' ? 'md:text-right' : ''}`}>
      {/* Timeline dot */}
      <motion.div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-orange rounded-full z-10 hidden md:block"
        initial={prefersReducedMotion ? {} : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.2,
          duration: 0.5,
          ease: [0.23, 1, 0.32, 1]
        }}
      >
        <span className="absolute inset-0 bg-orange rounded-full animate-pulse-glow" />
      </motion.div>
      
      {/* Content */}
      <motion.div
        className={`${side === 'right' ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'}`}
        initial={prefersReducedMotion ? {} : { 
          opacity: 0, 
          x: slideDirection 
        }}
        whileInView={{ 
          opacity: 1, 
          x: 0 
        }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.23, 1, 0.32, 1],
        }}
      >
        <div className="bg-new-black rounded-2xl p-6 md:p-8 border border-white/10 hover:border-orange/50 transition-colors duration-300">
          <span className="inline-block px-4 py-1 bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider rounded-full mb-4">
            {period}
          </span>
          <h3 className="font-impact text-2xl md:text-3xl uppercase text-white mb-1 tracking-wide">
            {title}
          </h3>
          <p className="text-white/60 font-mono text-sm mb-4">{company}</p>
          <ul className={`space-y-2 ${side === 'right' ? 'md:ml-0' : ''}`}>
            {description.map((item, i) => (
              <li 
                key={i} 
                className="text-white/80 font-mono text-sm leading-relaxed flex items-start gap-2"
              >
                <span className="text-orange mt-1">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      
      {/* Empty space for alternating layout */}
      <div className={`hidden md:block ${side === 'right' ? 'md:order-1' : 'md:order-2'}`} />
    </div>
  );
}
