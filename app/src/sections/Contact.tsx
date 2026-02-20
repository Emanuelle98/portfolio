import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    name: 'Email',
    value: 'emanuelriveroo@gmail.com',
    href: 'mailto:emanuelriveroo@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    value: 'Conectemos',
    href: '#',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    value: 'Mis repos',
    href: '#',
    icon: Github,
  },
];

export function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange/5 via-transparent to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider rounded-full mb-6">
              Contacto
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-impact text-6xl md:text-7xl lg:text-8xl uppercase text-white tracking-wide">
              CONTACTEMOS
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="mt-6 font-mono text-lg text-white/60 max-w-xl mx-auto">
              ¿Tienes un proyecto en mente? Hablemos y veamos cómo puedo ayudarte.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <ScrollReveal key={link.name} delay={0.3 + index * 0.1}>
                <motion.a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group inline-flex items-center gap-3 px-6 py-4 bg-new-black border border-white/20 rounded-full text-white hover:border-orange hover:bg-orange/5 transition-all duration-300"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} className="text-orange" />
                  <span className="font-mono text-sm">{link.value}</span>
                  <ArrowUpRight 
                    size={16} 
                    className="text-white/50 group-hover:text-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                  />
                </motion.a>
              </ScrollReveal>
            );
          })}
        </div>
        
        {/* CTA */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <motion.a
              href="mailto:emanuelriveroo@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-orange text-black font-mono text-sm uppercase tracking-widest rounded-full hover:bg-yellow transition-colors duration-300"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar email
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
