import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getWhatsAppLink } from '../utils/constants';
import { EQUIPMENT_IMAGES, EQUIPMENT_ITEM_IMAGES } from '../utils/images';
import CTAButton from './CTAButton';

interface EquipmentCardProps {
  name: string;
  category: string;
  description: string;
  image?: string;
}

export default function EquipmentCard({ name, category, description, image }: EquipmentCardProps) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const imgSrc = image || EQUIPMENT_ITEM_IMAGES[name] || EQUIPMENT_IMAGES[category] || EQUIPMENT_IMAGES['Medical Imaging'];
  const whatsAppMsg = `I am interested in learning more about:\n\nEquipment: ${name}\n\nI would like to receive more information about availability, specifications and supply options.\n\nThank you.`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500"
    >
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent z-10" />
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
        />
        <span className="absolute top-4 left-4 z-20 bg-gold text-navy text-[10px] tracking-wider uppercase font-medium px-3 py-1 rounded-sm">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy mb-2">{name}</h3>
        <p className="text-sm text-gray-dark leading-relaxed mb-5">{description}</p>
        <CTAButton
          href={getWhatsAppLink(whatsAppMsg)}
          variant="ghost"
          icon={<Info size={14} />}
          className="text-navy hover:text-gold p-0 text-xs tracking-wider uppercase font-medium"
        >
          Request Information
        </CTAButton>
      </div>
    </motion.div>
  );
}