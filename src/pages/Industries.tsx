import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronRight } from 'lucide-react';
import { IMG, IMG_IBB } from '../utils/images';
import { META_DEFAULTS, getWhatsAppLink } from '../utils/constants';

const industries = [
  {
    title: 'Hospitals',
    description:
      'Hospitals depend on reliable diagnostic and clinical equipment to deliver quality care, day in and day out. When a department is being set up, upgraded or expanded, the right equipment has to be in place — and it has to keep performing.',
    points: [
      'Imaging and diagnostic equipment for radiology and imaging departments.',
      'Clinical and critical-care equipment for treatment environments.',
      'Sourcing support for new builds, upgrades and facility expansion.',
      'Coordination from supplier to your facility, with after-sales support.',
    ],
    image: IMG.doctor,
  },
  {
    title: 'Medical Laboratories',
    description:
      'Laboratories rely on precision analyzers and reliable workflows to deliver accurate results on time. From a single analyzer to a fully equipped lab, the equipment must match the testing your lab actually carries out.',
    points: [
      'Analyzers and specialized laboratory equipment for your testing menu.',
      'Help identifying equipment that matches your lab workflows and volumes.',
      'Supply coordination for new laboratories and capacity expansion.',
      'Ongoing support where applicable, so equipment keeps serving your lab.',
    ],
    image: IMG.labTestTubes,
  },
  {
    title: 'Diagnostic Centres',
    description:
      'Diagnostic centres are defined by the reliability of the technology behind them. Patients and referring clinicians rely on equipment that is accurate, dependable and available — every single time.',
    points: [
      'Imaging, laboratory and point-of-care equipment for diagnostic services.',
      'Guidance on equipment suited to your centre\u2019s focus and case volumes.',
      'Supply coordination, delivery and installation support.',
      'After-sales assistance to protect uptime and long-term performance.',
    ],
    image: IMG.radiology,
  },
  {
    title: 'Clinics',
    description:
      'Clinics need practical, dependable equipment that fits the way care is delivered on the ground. The right technology keeps daily operations smooth and helps clinicians serve patients with confidence.',
    points: [
      'Equipment matched to the scope of care your clinic provides.',
      'Solutions that fit the size and workflow of smaller facilities.',
      'Sourcing, coordination and delivery handled end to end.',
      'Support that continues beyond the point of delivery.',
    ],
    image: IMG.medicalProfessional,
  },
  {
    title: 'Healthcare Projects',
    description:
      'New builds and expansion projects demand tight coordination — getting the right equipment to the right place at the right time. We support projects from planning around your equipment needs through sourcing, logistics and installation.',
    points: [
      'Equipment planning and sourcing for new and expanding facilities.',
      'Coordination across multiple departments and equipment categories.',
      'Logistics management from source to project site.',
      'Installation support and after-sales assistance.',
    ],
    image: IMG.surgery,
  },
  {
    title: 'Organizations & Businesses',
    description:
      'Beyond healthcare facilities, organizations and businesses across sectors have specialized equipment and technology requirements. We help connect those requirements to appropriate supply opportunities.',
    points: [
      'Specialized equipment and technology sourcing for operational needs.',
      'Global supply connections beyond local markets.',
      'Supply-chain coordination from requirement to delivery.',
      'Professional communication and dependable follow-through.',
    ],
    image: IMG_IBB.organisations,
  },
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

function IndustryBlock({ title, description, points, image, index }: { title: string; description: string; points: string[]; image: string; index: number }) {
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
        <ul className="space-y-3 mb-8">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-gray-dark leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
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