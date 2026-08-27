import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageCircle, ChevronLeft, ChevronRight, Target, Globe, Gauge, Headphones, HeartHandshake } from 'lucide-react';
import { IMG, ABOUT_IMAGES } from '../utils/images';
import { META_DEFAULTS, getWhatsAppLink } from '../utils/constants';

export default function About() {
  return (
    <>
      <SEO title={META_DEFAULTS.about.title} description={META_DEFAULTS.about.description} />

      <section className="relative h-[50vh] min-h-[400px] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.radiology} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-4 inline-block">
            About
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-2xl">
            Connecting Needs to Solutions.
          </motion.h1>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-3 inline-block">Who We Are</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-navy mb-6">
                A Partner That Makes Access to the Right Equipment Simpler.
              </h2>
              <p className="text-lg text-gray-dark leading-relaxed mb-6">
                Azatech Global Supply Chain Limited works across medical equipment, laboratory technology and specialized technology solutions — connecting organizations in Nigeria and beyond to the equipment their work depends on.
              </p>
              <p className="text-base text-gray-dark leading-relaxed mb-6">
                We believe supply should be more than a transaction. It should be a coordinated journey — from understanding the requirement, to identifying supply opportunities, to moving equipment and supporting the client beyond delivery.
              </p>
              <p className="text-base text-gray-dark leading-relaxed">
                By combining global supply connections with a requirement-led approach, we help facilities move from a clear need to a working solution with confidence.
              </p>
            </div>
            <AboutCarousel />
          </div>
        </div>
      </section>

      <VisionMission />

      <WhyChooseUs />

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="OUR VALUES" title="The Principles That Guide Us" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {['Integrity', 'Reliability', 'Efficiency', 'Professionalism', 'Innovation', 'Partnership'].map((value, i) => (
              <ValueCard key={value} value={value} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function AboutCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + ABOUT_IMAGES.length) % ABOUT_IMAGES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current}
          src={ABOUT_IMAGES[current]}
          alt="Azatech Global Supply Chain - medical equipment and laboratory technology operations"
          custom={direction}
          initial={{ x: direction > 0 ? '100%' : '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? '-100%' : '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur text-navy rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => paginate(1)}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur text-navy rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {ABOUT_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              i === current ? 'w-6 bg-gold' : 'w-1.5 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function VisionMission() {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <section className="py-20 lg:py-28 bg-navy text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-3 inline-block">Our Vision</span>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
              To become a trusted supply-chain partner connecting Nigeria to quality medical, laboratory and technology solutions from global markets.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-3 inline-block">Our Mission</span>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
              To simplify access to reliable equipment and technology through professional sourcing, efficient supply-chain coordination and dependable customer support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const enriched = [
    {
      title: 'Requirement-Led',
      icon: Target,
      description:
        'We do not start with a product catalogue. We start with what you actually need — the function, the setting and the outcome — then work back to the right supply route.',
    },
    {
      title: 'Global Perspective',
      icon: Globe,
      description:
        'We look beyond a single source when exploring supply opportunities, giving your organization more options across international markets.',
    },
    {
      title: 'Efficiency',
      icon: Gauge,
      description:
        'We aim to make the path from requirement to delivery more straightforward — coordinating sourcing, logistics and handover so you can focus on your work.',
    },
    {
      title: 'Professional Communication',
      icon: Headphones,
      description:
        'Clear, dependable communication throughout the process. You always know where your requirement stands and what happens next.',
    },
    {
      title: 'Long-Term Support',
      icon: HeartHandshake,
      description:
        'Our relationship is built to extend beyond a transaction, with support after delivery where applicable so the equipment keeps delivering value.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="WHY CHOOSE US"
          title="Why Organizations Work With Azatech"
          description="Sourcing equipment is about more than finding a supplier. It is about working with a partner who understands your requirement, coordinates the journey and stays with you after delivery."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {enriched.map((item, i) => (
            <WhyCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ title, icon: Icon, description, index }: { title: string; icon: typeof Target; description: string; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-cream rounded-lg p-6 border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center mb-4">
        <Icon size={16} className="text-gold" />
      </div>
      <h3 className="text-sm font-semibold text-navy mb-2">{title}</h3>
      <p className="text-xs text-gray-dark leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ValueCard({ value, index }: { value: string; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-lg p-6 text-center border border-gray-100 hover:border-gold/30 transition-all duration-300"
    >
      <div className="w-8 h-0.5 bg-gold mx-auto mb-4" />
      <h3 className="text-sm font-semibold text-navy">{value}</h3>
    </motion.div>
  );
}

function CTABanner() {
  return (
    <section className="py-16 lg:py-20 bg-gold">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Ready to Start a Conversation?</h2>
        <p className="text-base text-navy/70 max-w-xl mx-auto mb-8">
          Whether you have a specific equipment requirement or need help exploring your supply options, our team is ready to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton href={getWhatsAppLink('I would like to start a conversation about my requirements.')} variant="primary" icon={<MessageCircle size={16} />}>
            Chat With Us on WhatsApp
          </CTAButton>
          <CTAButton to="/contact" variant="ghost" className="text-navy border border-navy hover:bg-navy hover:text-white">
            Contact Us
          </CTAButton>
        </div>
      </div>
    </section>
  );
}