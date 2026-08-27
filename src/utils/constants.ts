export const WHATSAPP_NUMBER = '2348060860749';

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SITE_URL = 'https://azatechglobalsupplychainlimited.com';

export const SITE_NAME = 'Azatech Global Supply Chain Limited';

export const CONTACT_EMAIL = 'azatechglobalsupplychain@gmail.com';

export const CONTACT_PHONE_DISPLAY = '+234 806 086 0749';

export const CONTACT_PHONE_TEL = '+2348060860749';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.jpg`;

export function buildWhatsAppMessage(message: string): string {
  const base = 'Hello Azatech Global Supply Chain Limited,';
  return `${encodeURIComponent(base)}\n\n${encodeURIComponent(message)}`;
}

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage(message)}`;
}

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Equipment', path: '/equipment' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Supply Chain', path: '/supply-chain' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
];

export const CAPABILITIES = [
  {
    number: '01',
    title: 'Medical Equipment',
    description: 'Access medical equipment and diagnostic technologies designed to support modern healthcare environments.',
    cta: 'Explore Equipment',
    link: '/equipment',
  },
  {
    number: '02',
    title: 'Laboratory Technology',
    description: 'Source laboratory and diagnostic equipment for facilities seeking reliable technology solutions.',
    cta: 'Explore Solutions',
    link: '/solutions',
  },
  {
    number: '03',
    title: 'Global Sourcing',
    description: 'Connect with international supply opportunities for specialized equipment and technology requirements.',
    cta: 'Discuss Your Requirement',
    link: '/contact',
  },
  {
    number: '04',
    title: 'Supply Chain & Logistics',
    description: 'Support the journey from sourcing and coordination through movement and delivery.',
    cta: 'Learn More',
    link: '/supply-chain',
  },
];

export const EQUIPMENT_CATEGORIES = [
  { name: 'MRI / NMR Systems', category: 'Medical Imaging', description: 'Advanced magnetic resonance imaging systems for diagnostic excellence.' },
  { name: 'CT Systems', category: 'Medical Imaging', description: 'Computed tomography systems for detailed cross-sectional imaging.' },
  { name: 'Digital X-Ray Systems', category: 'Medical Imaging', description: 'Modern digital radiography solutions for precise diagnostics.' },
  { name: 'Color Doppler', category: 'Medical Imaging', description: 'Ultrasound systems with color Doppler capabilities.' },
  { name: 'DSA Systems', category: 'Medical Imaging', description: 'Digital subtraction angiography for vascular imaging.' },
  { name: 'Anesthesia Machines', category: 'Clinical Equipment', description: 'Anesthesia delivery systems for surgical environments.' },
  { name: 'Hemodialysis Equipment', category: 'Clinical Equipment', description: 'Dialysis machines for renal care facilities.' },
  { name: 'Automatic Refractometers', category: 'Ophthalmic Equipment', description: 'Automated refractometry for vision assessment.' },
  { name: 'Slit Lamps', category: 'Ophthalmic Equipment', description: 'Ophthalmic examination microscopes for anterior segment evaluation.' },
  { name: 'Automated ELISA Analyzers', category: 'Laboratory & Diagnostics', description: 'Enzyme-linked immunosorbent assay analyzers for laboratory testing.' },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Source', description: 'Identify the required equipment or technology.' },
  { step: '02', title: 'Connect', description: 'Explore suitable suppliers and supply opportunities.' },
  { step: '03', title: 'Coordinate', description: 'Organize the supply and logistics journey.' },
  { step: '04', title: 'Deliver', description: 'Move the solution toward its destination.' },
  { step: '05', title: 'Support', description: 'Continue the relationship beyond delivery where applicable.' },
];

export const INDUSTRIES = [
  { title: 'Hospitals', description: 'Medical equipment and technology solutions for healthcare facilities.', icon: 'Hospital' },
  { title: 'Medical Laboratories', description: 'Laboratory and diagnostic technology solutions.', icon: 'FlaskConical' },
  { title: 'Diagnostic Centres', description: 'Equipment solutions for imaging and diagnostic environments.', icon: 'Scan' },
  { title: 'Clinics', description: 'Equipment and technology requirements for clinical operations.', icon: 'Stethoscope' },
  { title: 'Healthcare Projects', description: 'Supply support for new, expanding or upgrading facilities.', icon: 'Building2' },
  { title: 'Organizations & Businesses', description: 'Specialized technology and equipment sourcing based on operational requirements.', icon: 'Globe' },
];

export const TRUST_ITEMS = [
  { title: 'Global Connection', description: 'Connecting supply opportunities across markets.', icon: 'Globe' },
  { title: 'Medical Technology', description: 'Medical and laboratory equipment solutions.', icon: 'Microscope' },
  { title: 'Smart Logistics', description: 'A structured approach to supply and delivery.', icon: 'Truck' },
  { title: 'After-Sales Support', description: 'Support beyond the point of delivery.', icon: 'Headphones' },
];

export const WHY_AZATECH = [
  { title: 'Requirement-Led', description: 'We start with what you actually need.' },
  { title: 'Global Perspective', description: 'We look beyond a single source when exploring supply opportunities.' },
  { title: 'Efficiency', description: 'We aim to make the path from requirement to delivery more straightforward.' },
  { title: 'Professional Communication', description: 'Clear communication throughout the process.' },
  { title: 'Long-Term Support', description: 'Our relationship should extend beyond a transaction.' },
];

export const SOLUTION_ITEMS = [
  { title: 'Equipment Sourcing', description: 'Identifying and connecting with appropriate equipment suppliers for your specific requirements.' },
  { title: 'Laboratory Solutions', description: 'Comprehensive laboratory technology sourcing from diagnostic analyzers to specialized lab equipment.' },
  { title: 'Medical Technology', description: 'Medical equipment and technology solutions for healthcare facilities of all scales.' },
  { title: 'Global Supply', description: 'International supply chain connections to access equipment and technology beyond local markets.' },
  { title: 'Logistics Coordination', description: 'Managing the movement of equipment from source to destination with professional coordination.' },
  { title: 'After-Sales Support', description: 'Support beyond delivery, including maintenance and technical assistance where applicable.' },
];

export const META_DEFAULTS = {
  home: {
    path: '/',
    title: 'Azatech Global Supply Chain Limited | Medical & Laboratory Equipment Supplier in Nigeria',
    description: 'Azatech Global Supply Chain Limited is a medical equipment and laboratory equipment supplier in Nigeria, offering sourcing, supply-chain coordination and delivery of diagnostic equipment and medical technology solutions.',
  },
  about: {
    path: '/about',
    title: 'About Azatech | Medical Technology Solutions & Global Supply Chain in Nigeria',
    description: 'Learn how Azatech Global Supply Chain Limited helps hospitals, laboratories and organizations source medical and laboratory equipment with professional supply-chain coordination and support.',
  },
  equipment: {
    path: '/equipment',
    title: 'Medical & Laboratory Equipment for Nigeria | Azatech Global Supply Chain',
    description: 'Explore medical imaging, laboratory, diagnostic and clinical equipment from Azatech — a medical equipment supplier and sourcing partner for healthcare facilities in Nigeria.',
  },
  solutions: {
    path: '/solutions',
    title: 'Medical Technology & Equipment Sourcing Solutions | Azatech Nigeria',
    description: 'Azatech provides equipment sourcing, laboratory technology solutions, global supply connections and logistics coordination for medical equipment in Nigeria.',
  },
  'supply-chain': {
    path: '/supply-chain',
    title: 'Global Supply Chain & Logistics for Medical Equipment | Azatech Nigeria',
    description: 'Azatech coordinates the journey from medical equipment sourcing through logistics and delivery — connecting Nigeria to global supply opportunities with professional support.',
  },
  industries: {
    path: '/industries',
    title: 'Industries We Serve | Medical & Laboratory Equipment | Azatech Nigeria',
    description: 'Azatech serves hospitals, medical laboratories, diagnostic centres, clinics and healthcare projects across Nigeria with medical equipment and laboratory technology solutions.',
  },
  contact: {
    path: '/contact',
    title: 'Contact Azatech | Laboratory Equipment Supplier in Nigeria',
    description: 'Contact Azatech Global Supply Chain Limited for medical equipment, laboratory equipment and technology solutions. Reach our team by phone or WhatsApp at 0806 086 0749.',
  },
  quote: {
    path: '/request-quote',
    title: 'Request a Quote | Medical & Laboratory Equipment | Azatech Nigeria',
    description: 'Request a quote from Azatech for medical equipment, laboratory technology or specialized supply-chain solutions. Share your requirement and we will respond promptly.',
  },
};