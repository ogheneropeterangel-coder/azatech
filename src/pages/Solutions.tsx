import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { IMG } from '../utils/images';
import { META_DEFAULTS, SOLUTION_ITEMS, getWhatsAppLink } from '../utils/constants';

export default function Solutions() {
  return (
    <>
      <SEO title={META_DEFAULTS.solutions.title} description={META_DEFAULTS.solutions.description} />

      <section className="relative h-[50vh] min-h-[400px] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.medicalProfessional} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-4 inline-block">
            Solutions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-3xl">
            One Requirement. Multiple Supply Possibilities.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-300 mt-4 max-w-xl">
            Whether you are equipping a laboratory, upgrading a diagnostic facility or sourcing specialized technology, Azatech helps you move from requirement to solution.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-20">
          {SOLUTION_ITEMS.map((item, i) => (
            <SolutionBlock key={item.title} {...item} index={i} />
          ))}
        </div>
      </section>

      <AfterSales />
    </>
  );
}

function SolutionBlock({ title, description, index }: { title: string; description: string; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const isReversed = index % 2 === 1;
  const images = [
    IMG.labGlassware,
    IMG.labTestTubes,
    IMG.radiology,
    IMG.globalNetwork,
    IMG.portCranes,
    IMG.surgery,
  ];

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
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
        <CTAButton href={getWhatsAppLink(`I would like to discuss your ${title.toLowerCase()} solutions.`)} variant="primary" icon={<ChevronRight size={16} />}>
          Discuss Your Requirement
        </CTAButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`aspect-[4/3] rounded-lg overflow-hidden ${isReversed ? 'lg:order-1' : ''}`}
      >
        <img src={images[index]} alt={title} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
}

function AfterSales() {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-4 inline-block">After-Sales Support</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
            The Delivery Is Not the End of the Journey.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Equipment creates value when it continues to perform. Our supply approach recognizes the importance of support beyond delivery, including maintenance and technical assistance where applicable.
          </p>
          <CTAButton href={getWhatsAppLink('I would like to ask about your after-sales support options.')} variant="secondary" icon={<MessageCircle size={16} />}>
            Ask About Support
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}