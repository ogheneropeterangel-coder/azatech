import SEO from '../components/SEO';
import EquipmentCard from '../components/EquipmentCard';
import { motion } from 'framer-motion';
import { EQUIPMENT_CATEGORIES, getWhatsAppLink, META_DEFAULTS } from '../utils/constants';
import CTAButton from '../components/CTAButton';
import { IMG } from '../utils/images';
import { MessageCircle } from 'lucide-react';

export default function Equipment() {
  return (
    <>
      <SEO title={META_DEFAULTS.equipment.title} description={META_DEFAULTS.equipment.description} />

      <section className="relative h-[50vh] min-h-[400px] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.radiology} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-4 inline-block">
            Equipment
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-3xl">
            Medical Equipment & Diagnostic Technology
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-300 mt-4 max-w-xl">
            Explore equipment categories and tell us what your facility requires.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 mb-12">
            {['All', 'Medical Imaging', 'Laboratory & Diagnostics', 'Clinical Equipment', 'Ophthalmic Equipment'].map((cat) => (
              <button key={cat} className="px-4 py-2 text-xs tracking-wider uppercase font-medium border border-gray-200 rounded-md hover:border-gold hover:text-gold transition-all duration-300 text-gray-mid">
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPMENT_CATEGORIES.map((eq) => (
              <EquipmentCard key={eq.name} {...eq} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-base text-gray-dark max-w-xl mx-auto mb-8">
            Tell us about your specific equipment requirement and we will explore supply options for you.
          </p>
          <CTAButton href={getWhatsAppLink('I am looking for specific equipment. Please help me find what I need.')} variant="primary" icon={<MessageCircle size={16} />}>
            Speak With Azatech
          </CTAButton>
        </div>
      </section>
    </>
  );
}