import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { motion } from 'framer-motion';
import { IMG } from '../utils/images';
import { META_DEFAULTS, getWhatsAppLink } from '../utils/constants';
import CTAButton from '../components/CTAButton';
import { MessageCircle } from 'lucide-react';

export default function RequestQuote() {
  return (
    <>
      <SEO title={META_DEFAULTS.quote.title} description={META_DEFAULTS.quote.description} />

      <section className="relative h-[50vh] min-h-[400px] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.radiology} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-4 inline-block">
            Request a Quote
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-2xl">
            Tell Us What You Need.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-300 mt-4 max-w-xl">
            Give us a few details about your requirement and our team can begin the conversation.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 lg:p-12 border border-gray-100 shadow-sm">
              <QuoteForm />
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-gray-mid mb-4">Prefer to reach us directly?</p>
              <CTAButton href={getWhatsAppLink('I would like to discuss a medical equipment / technology supply requirement.')} variant="secondary" icon={<MessageCircle size={16} />}>
                Chat With Us on WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}