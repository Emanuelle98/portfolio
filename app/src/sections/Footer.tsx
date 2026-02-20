import { motion } from 'framer-motion';
import { Heart, Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p 
            className="font-mono text-sm text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} Emanuelle Rivero
          </motion.p>
          
          {/* Made with love */}
          <motion.p 
            className="flex items-center gap-2 font-mono text-sm text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hecho con 
            <Heart size={14} className="text-orange fill-orange" /> 
            y mucho 
            <Coffee size={14} className="text-orange" />
          </motion.p>
          
          {/* Back to top */}
          <motion.a
            href="#hero"
            className="font-mono text-sm text-white/40 hover:text-orange transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Volver arriba ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
