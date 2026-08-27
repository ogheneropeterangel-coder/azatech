import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { IMG } from '../utils/images';
import { META_DEFAULTS, getWhatsAppLink } from '../utils/constants';
import CTAButton from '../components/CTAButton';

export default function Contact() {
  return (
    <>
      <SEO title={META_DEFAULTS.contact.title} description={META_DEFAULTS.contact.description} />

      <section className="relative h-[50vh] min-h-[400px] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.globalNetwork} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.2em] uppercase font-medium text-gold mb-4 inline-block">
            Contact
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-2xl">
            Let's Start a Conversation.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-300 mt-4 max-w-xl">
            Whether you have a specific equipment requirement or need help exploring your supply options, our team is ready to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xs tracking-wider uppercase font-semibold text-navy mb-1">Phone / WhatsApp</h3>
                    <a href="tel:+2348060860749" className="text-lg text-gray-dark hover:text-gold transition-colors">+234 806 086 0749</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xs tracking-wider uppercase font-semibold text-navy mb-1">Email</h3>
                    <a href="mailto:azatechglobalsupplychain@gmail.com" className="text-lg text-gray-dark hover:text-gold transition-colors break-all">azatechglobalsupplychain@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <CTAButton href={getWhatsAppLink('I would like to start a conversation about my requirements.')} variant="primary" icon={<MessageCircle size={16} />}>
                  Chat With Us on WhatsApp
                </CTAButton>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy mb-6">Send Us a Message</h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}