import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageCircle } from 'lucide-react';
import { IMG } from '../utils/images';
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
              <p className="text-lg text-gray-dark leading-relaxed mb-6">
                Azatech Global Supply Chain Limited is focused on making access to medical equipment, laboratory technology and specialized technology solutions more straightforward for organizations in Nigeria and beyond.
              </p>
              <p className="text-base text-gray-dark leading-relaxed">
                We believe supply should be more than a transaction. It should be a coordinated journey — from understanding the requirement to identifying supply opportunities, moving equipment and supporting the client beyond delivery.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={IMG.labGlassware} alt="Laboratory technology" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <VisionMission />

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