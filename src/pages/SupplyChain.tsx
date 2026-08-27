import SEO from '../components/SEO';
import ProcessTimeline from '../components/ProcessTimeline';
import CTAButton from '../components/CTAButton';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageCircle } from 'lucide-react';
import { IMG } from '../utils/images';
import { META_DEFAULTS, PROCESS_STEPS, getWhatsAppLink } from '../utils/constants';

export default function SupplyChain() {
  return (
    <>
      <SEO title={META_DEFAULTS['supply-chain'].title} description={META_DEFAULTS['supply-chain'].description} />

      <section className="relative h-[50vh] min-h-[400px] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.portCranes} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-4 inline-block">
            Supply Chain
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-3xl">
            From Source to Destination. We Keep Things Moving.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-300 mt-4 max-w-xl">
            A successful supply chain is about more than transportation. It is about connecting the right source, coordinating the journey and getting the right solution where it needs to be.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <ProcessTimeline steps={PROCESS_STEPS as any} />
          </div>
        </div>
      </section>

      <SupplyChainDetails />

      <section className="py-16 bg-gold">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Need Supply Chain Support?</h2>
          <p className="text-base text-navy/70 max-w-xl mx-auto mb-8">
            Let Azatech help coordinate your equipment supply journey from source to delivery.
          </p>
          <CTAButton href={getWhatsAppLink('I need supply chain support for my equipment requirements.')} variant="primary" icon={<MessageCircle size={16} />}>
            Discuss Your Requirement
          </CTAButton>
        </div>
      </section>
    </>
  );
}

function SupplyChainDetails() {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Sourcing', desc: 'Identifying the right equipment and technology from appropriate suppliers across global markets.' },
            { title: 'Coordination', desc: 'Managing the logistics, documentation and communication throughout the supply process.' },
            { title: 'Delivery & Support', desc: 'Ensuring equipment reaches its destination and providing support beyond the point of delivery.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-lg p-8 border border-gray-100"
            >
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-gold mb-3 inline-block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
              <p className="text-sm text-gray-dark leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}