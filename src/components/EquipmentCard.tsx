import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getWhatsAppLink } from '../utils/constants';
import { EQUIPMENT_IMAGES, EQUIPMENT_ITEM_GALLERY, EQUIPMENT_ITEM_IMAGES } from '../utils/images';
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
  const gallery = EQUIPMENT_ITEM_GALLERY[name];
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
        {gallery ? (
          <ImageCarousel images={gallery} alt={name} />
        ) : (
          <img
            src={imgSrc}
            alt={`${name} - ${category} medical and laboratory equipment`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          />
        )}
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

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={images[current]}
          alt={alt}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-5 bg-gold' : 'w-1.5 bg-white/70'
            }`}
            aria-label={`View image ${i + 1} of ${alt}`}
          />
        ))}
      </div>
    </div>
  );
}