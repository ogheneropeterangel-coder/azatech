import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronRight } from 'lucide-react';
import { IMG } from '../utils/images';
import { META_DEFAULTS, getWhatsAppLink } from '../utils/constants';

const industries = [
  { title: 'Hospitals', description: 'Medical equipment and technology solutions for healthcare facilities.', image: IMG.doctor },
  { title: 'Medical Laboratories', description: 'Laboratory and diagnostic technology solutions.', image: IMG.labTestTubes },
  { title: 'Diagnostic Centres', description: 'Equipment solutions for imaging and diagnostic environments.', image: IMG.radiology },
  { title: 'Clinics', description: 'Equipment and technology requirements for clinical operations.', image: IMG.medicalProfessional },
  { title: 'Healthcare Projects', description: 'Supply support for new, expanding or upgrading facilities.', image: IMG.surgery },
  { title: 'Organizations & Businesses', description: 'Specialized technology and equipment sourcing based on operational requirements.', image: IMG.globalNetwork },
];

export default function Industries() {
  return (
    <>
      <SEO title={META_DEFAULTS.industries.title} description={META_DEFAULTS.industries.description} />

      <section className="relative h-[50vh] min-h-[400px] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.medicalProfessional} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-4 inline-block">
            Industries
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-3xl">
            Solutions for the Organizations That Keep Essential Services Moving.
          </motion.h1>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-24">
          {industries.map((industry, i) => (
            <IndustryBlock key={industry.title} {...industry} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

function IndustryBlock({ title, description, image, index }: { title: string; description: string; image: string; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className={isReversed ? 'lg:order-2' : ''}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-gold mb-3 inline-block">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">{title}</h3>
        <p className="text-base text-gray-dark leading-relaxed mb-6">{description}</p>
        <CTAButton href={getWhatsAppLink(`I would like to discuss solutions for ${title.toLowerCase()}.`)} variant="primary" icon={<ChevronRight size={16} />}>
          Discuss Your Requirement
        </CTAButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`aspect-[4/3] rounded-lg overflow-hidden ${isReversed ? 'lg:order-1' : ''}`}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
}