import SEO from '../components/SEO';
import HeroCarousel from '../components/HeroCarousel';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import ProcessTimeline from '../components/ProcessTimeline';
import EquipmentCard from '../components/EquipmentCard';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { IMG } from '../utils/images';
import {
  Globe, Truck, Microscope, Headphones,
  ChevronRight, MessageCircle
} from 'lucide-react';
import { META_DEFAULTS, CAPABILITIES, TRUST_ITEMS, EQUIPMENT_CATEGORIES, PROCESS_STEPS, WHY_AZATECH, getWhatsAppLink } from '../utils/constants';

export default function Home() {
  return (
    <>
      <SEO title={META_DEFAULTS.home.title} description={META_DEFAULTS.home.description} />
      <HeroCarousel />

      <section className="bg-cream py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_ITEMS.map((item, i) => (
              <TrustItem key={item.title} title={item.title} description={item.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Introduction />
      <Capabilities />
      <EquipmentShowcase />
      <SupplyChainProcess />
      <GlobalSupplyStory />
      <IndustriesSection />
      <WhyAzatech />
      <CTABanner />
    </>
  );
}

function TrustItem({ title, description, index }: { title: string; description: string; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const icons = [Globe, Microscope, Truck, Headphones];
  const Icon = icons[index];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-3"
    >
      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={16} className="text-gold" />
      </div>
      <div>
        <h3 className="text-xs tracking-wider uppercase font-semibold text-navy mb-0.5">{title}</h3>
        <p className="text-xs text-gray-mid leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function Introduction() {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-4 inline-block">Who We Are</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-navy mb-6">
              A Supply Chain Built Around Your Requirement.
            </h2>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              Azatech Global Supply Chain Limited connects organizations with medical equipment, laboratory technology and specialized technology solutions while supporting the wider journey from sourcing to delivery.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-8">
              Our approach is simple: understand the requirement, identify suitable supply opportunities, coordinate the journey and help our clients move forward with confidence.
            </p>
            <CTAButton to="/about" variant="primary" icon={<ChevronRight size={16} />}>
              Discover Azatech
            </CTAButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={IMG.medicalProfessional}
                alt="Medical technology environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="OUR CAPABILITIES"
          title="More Than Supply. We Deliver Solutions."
          description="Getting the right equipment is only part of the journey. Azatech brings sourcing, supply-chain coordination, logistics and support together around your requirement."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={cap.title} {...cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ number, title, description, cta, link, index }: typeof CAPABILITIES[0] & { index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg transition-all duration-500 group"
    >
      <span className="text-3xl font-bold text-gold/30 mb-4 block">{number}</span>
      <h3 className="text-lg font-semibold text-navy mb-3">{title}</h3>
      <p className="text-sm text-gray-dark leading-relaxed mb-6">{description}</p>
      <CTAButton to={link} variant="ghost" icon={<ChevronRight size={14} />} className="text-navy hover:text-gold p-0 text-xs tracking-wider uppercase font-medium">
        {cta}
      </CTAButton>
    </motion.div>
  );
}

function EquipmentShowcase() {
  const featured = EQUIPMENT_CATEGORIES.slice(0, 6);
  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="MEDICAL TECHNOLOGY"
          title="Advanced Equipment. Practical Solutions."
          description="From diagnostic imaging to laboratory and clinical equipment, Azatech helps organizations explore equipment solutions aligned with their operational requirements."
          dark
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featured.map((eq) => (
            <EquipmentCard key={eq.name} {...eq} />
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/equipment" variant="secondary" icon={<ChevronRight size={16} />}>
            View All Equipment
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function SupplyChainProcess() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="From Source to Destination. We Keep Things Moving."
          description="A successful supply chain is about more than transportation. It is about connecting the right source, coordinating the journey and getting the right solution where it needs to be."
          alignment="left"
        />
        <div className="mt-12">
          <ProcessTimeline steps={PROCESS_STEPS as any} />
        </div>
      </div>
    </section>
  );
}

function GlobalSupplyStory() {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px]">
          <svg viewBox="0 0 800 500" className="w-full h-full">
            <circle cx="200" cy="200" r="80" fill="none" stroke="#c8a84e" strokeWidth="0.5" />
            <circle cx="600" cy="150" r="60" fill="none" stroke="#c8a84e" strokeWidth="0.5" />
            <circle cx="400" cy="350" r="50" fill="none" stroke="#c8a84e" strokeWidth="0.5" />
            <circle cx="150" cy="350" r="40" fill="none" stroke="#c8a84e" strokeWidth="0.5" />
            <circle cx="650" cy="320" r="45" fill="none" stroke="#c8a84e" strokeWidth="0.5" />
            <line x1="200" y1="200" x2="600" y2="150" stroke="#c8a84e" strokeWidth="0.3" opacity="0.5" />
            <line x1="600" y1="150" x2="400" y2="350" stroke="#c8a84e" strokeWidth="0.3" opacity="0.5" />
            <line x1="400" y1="350" x2="200" y2="200" stroke="#c8a84e" strokeWidth="0.3" opacity="0.5" />
            <line x1="200" y1="200" x2="150" y2="350" stroke="#c8a84e" strokeWidth="0.3" opacity="0.5" />
            <line x1="600" y1="150" x2="650" y2="320" stroke="#c8a84e" strokeWidth="0.3" opacity="0.5" />
            {[200, 600, 400, 150, 650].map((cx, i) => (
              [200, 150, 350, 350, 320].map((cy, j) => (
                i === j && <circle key={i} cx={cx} cy={cy} r={3} fill="#c8a84e" />
              ))
            ))}
          </svg>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-4 inline-block"
          >
            Global Reach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-6"
          >
            Local Understanding. Global Supply Opportunities.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed mb-8"
          >
            The modern supply chain connects markets, manufacturers, technology providers and end users across borders. Azatech is positioned to help organizations in Nigeria explore these connections and access equipment and technology solutions beyond conventional sourcing channels.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CTAButton href={getWhatsAppLink('I would like to discuss global supply opportunities.')} variant="secondary" icon={<ChevronRight size={16} />}>
              Discuss Your Requirement
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { title: 'Hospitals', desc: 'Medical equipment and technology solutions for healthcare facilities.' },
    { title: 'Medical Laboratories', desc: 'Laboratory and diagnostic technology solutions.' },
    { title: 'Diagnostic Centres', desc: 'Equipment solutions for imaging and diagnostic environments.' },
    { title: 'Clinics', desc: 'Equipment and technology requirements for clinical operations.' },
    { title: 'Healthcare Projects', desc: 'Supply support for new, expanding or upgrading facilities.' },
    { title: 'Organizations & Businesses', desc: 'Specialized technology and equipment sourcing.' },
  ];
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="INDUSTRIES"
          title="Solutions for the Organizations That Keep Essential Services Moving."
          alignment="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.title} {...ind} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-lg p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 group cursor-default"
    >
      <h3 className="text-base font-semibold text-navy mb-2 group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-sm text-gray-dark leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function WhyAzatech() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="WHY AZATECH"
          title="Why Organizations Choose a Supply Partner"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {WHY_AZATECH.map((item, i) => (
            <WhyCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ title, description, index }: { title: string; description: string; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-start gap-4"
    >
      <div className="w-1 h-10 bg-gold shrink-0 mt-1" />
      <div>
        <h3 className="text-base font-semibold text-navy mb-1">{title}</h3>
        <p className="text-sm text-gray-dark leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function CTABanner() {
  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src={IMG.portCranes}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
          Have a Requirement?<br />Let's Get It Moving.
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Tell Azatech what you need — from medical equipment and laboratory technology to specialized supply requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton href={getWhatsAppLink('I have a requirement I would like to discuss.')} variant="primary" icon={<MessageCircle size={16} />}>
            Talk to Us on WhatsApp
          </CTAButton>
          <CTAButton to="/request-quote" variant="secondary" icon={<ChevronRight size={16} />}>
            Request a Quote
          </CTAButton>
        </div>
      </div>
    </section>
  );
}