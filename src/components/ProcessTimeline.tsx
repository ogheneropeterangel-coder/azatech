import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

export default function ProcessTimeline({ steps }: { steps: ProcessStepProps[] }) {
  return (
    <div className="relative">
      <div className="absolute top-12 left-[18px] bottom-0 w-[2px] bg-gold/20 hidden md:block" />
      <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-5 md:gap-6 relative">
        {steps.map((step, i) => (
          <ProcessStep key={step.step} {...step} index={i} isLast={i === steps.length - 1} />
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ step, title, description, index, isLast }: ProcessStepProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative md:text-center group"
    >
      <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-3">
        <div className="relative z-10 w-10 h-10 rounded-full bg-navy border-2 border-gold flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-gold">{step}</span>
        </div>
        {!isLast && (
          <div className="hidden md:block absolute top-4 left-10 right-0">
            <ArrowRight size={16} className="text-gold/40 mx-auto" />
          </div>
        )}
        <div className="md:text-center">
          <h4 className="text-base font-semibold text-navy mb-1">{title}</h4>
          <p className="text-sm text-gray-dark leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}