import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      className="inline-flex items-center gap-2 px-5 py-2 border border-white/30 rounded-full text-sm font-mono text-white/90 bg-transparent cursor-default"
      whileHover={prefersReducedMotion ? {} : {
        scale: 1.05,
        borderColor: '#ff6e00',
        backgroundColor: 'rgba(255, 110, 0, 0.1)',
      }}
      transition={{
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {icon && <span className="text-orange">{icon}</span>}
      {name}
    </motion.span>
  );
}
