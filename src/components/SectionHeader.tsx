import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, alignment = 'center', dark = false }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div ref={ref} className={`mb-12 ${alignment === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`inline-block text-xs tracking-[0.2em] uppercase font-medium mb-4 ${dark ? 'text-gold' : 'text-gold'}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${dark ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className={`mt-6 text-lg leading-relaxed max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-gray-dark'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}