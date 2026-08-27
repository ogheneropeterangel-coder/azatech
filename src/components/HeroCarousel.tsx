import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { getWhatsAppLink } from '../utils/constants';
import { IMG } from '../utils/images';
import CTAButton from './CTAButton';

const slides = [
  {
    image: IMG.globalNetwork,
    eyebrow: 'CONNECT • MOVE • DELIVER',
    headline: 'Global Supply. Smarter Solutions. Delivered.',
    paragraph: 'Connecting organizations to medical equipment, laboratory technology and specialized solutions through a smarter supply-chain experience.',
    cta1: { label: 'Request a Quote', to: '/request-quote' },
    cta2: { label: 'Talk to Us on WhatsApp', href: getWhatsAppLink('I would like to discuss a medical equipment / technology supply requirement.') },
  },
  {
    image: IMG.mri,
    eyebrow: 'MEDICAL TECHNOLOGY',
    headline: 'Technology That Moves Healthcare Forward.',
    paragraph: 'Source advanced medical and laboratory equipment for hospitals, laboratories, diagnostic centres and healthcare projects.',
    cta1: { label: 'Explore Equipment', to: '/equipment' },
    cta2: { label: 'Talk to Us', href: getWhatsAppLink('I am interested in your medical equipment and technology solutions.') },
  },
  {
    image: IMG.portCranes,
    eyebrow: 'SUPPLY CHAIN',
    headline: 'From Source to Destination.',
    paragraph: 'We help simplify the journey from equipment sourcing to supply-chain coordination, delivery and support.',
    cta1: { label: 'Discuss Your Requirement', href: getWhatsAppLink('I would like to discuss my equipment supply requirement.') },
    cta2: { label: 'Learn More', to: '/supply-chain' },
  },
  {
    image: IMG.labMicroscope,
    eyebrow: 'SOLUTIONS',
    headline: 'Your Requirement. Our Supply Network.',
    paragraph: 'Tell us what you need and let us help you explore the right equipment and technology solution.',
    cta1: { label: 'Start a Conversation', href: getWhatsAppLink('I would like to start a conversation about my equipment requirements.') },
    cta2: { label: 'Explore Solutions', to: '/solutions' },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 + i * 0.12 },
    }),
  };

  const slide = slides[current];

  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[800px] overflow-hidden bg-navy">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent z-10" />
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.02)', transition: 'transform 8s ease-out' }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <motion.span
              key={`eyebrow-${current}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-block text-[11px] tracking-[0.25em] uppercase text-gold font-medium mb-5"
            >
              {slide.eyebrow}
            </motion.span>

            <motion.h1
              key={`headline-${current}`}
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6"
            >
              {slide.headline}
            </motion.h1>

            <motion.p
              key={`para-${current}`}
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mb-8"
            >
              {slide.paragraph}
            </motion.p>

            <motion.div
              key={`cta-${current}`}
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <CTAButton to={slide.cta1.to} href={slide.cta1.href} variant="primary" icon={<ChevronRight size={16} />}>
                {slide.cta1.label}
              </CTAButton>
              <CTAButton to={slide.cta2.to} href={slide.cta2.href} variant="secondary">
                {slide.cta2.label}
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 lg:right-12 z-20 flex items-center gap-4">
        <span className="text-sm text-white/60 font-mono">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-0.5 transition-all duration-500 ${
                i === current ? 'w-8 bg-gold' : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}