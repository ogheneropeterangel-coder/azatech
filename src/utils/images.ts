// Centralized image map for the Azatech website.
// Each topic maps to a verified, freely-usable Unsplash image.
// Swap these URLs for licensed brand photography when supplied by the client.

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  // Medical imaging / radiology (MRI, CT, X-Ray)
  mri: u('photo-1579684385127-1ef15d508118', 1600),
  ctScanner: u('photo-1551601651-2a8555f1a136', 1200),
  xray: u('photo-1559757175-5700dde675bc', 1200),
  radiology: u('photo-1505751172876-fa1923c5c528', 1200),

  // Laboratory
  labTestTubes: u('photo-1532187863486-abf9dbad1b69', 1200),
  labGlassware: u('photo-1582719508461-905c673771fd', 1200),
  labMicroscope: u('photo-1576086213369-97a306d36557', 1200),
  microscopeDetail: u('photo-1551190822-a9333d879b1f', 1200),

  // Clinical / healthcare
  doctor: u('photo-1576091160399-112ba8d25d1d', 1200),
  surgery: u('photo-1516069677018-378515003435', 1200),
  stethoscope: u('photo-1516549655169-df83a0774514', 1200),
  medicalProfessional: u('photo-1579154204601-01588f351e67', 1600),

  // Logistics / supply chain
  containerShip: u('photo-1494412574643-ff11b0a5c1c3', 1600),
  portCranes: u('photo-1601584115197-04ecc0da31d7', 1600),
  warehouse: u('photo-1578575437130-527eed3abbec', 1600),
  cargoFreight: u('photo-1601612628452-9e99ced43524', 1600),

  // Global / world
  globalNetwork: u('photo-1451187580459-43490279c0fa', 1600),
  globalMap: u('photo-1526778548025-fa2f459cd5c1', 1600),
};

// Supplier / product photography (ibb.co)
export const IMG_IBB = {
  automaticRefractometer: 'https://i.ibb.co/d4W00k43/AUTO-REFRACTOMETERS.png',
  elisaAnalyzer: 'https://i.ibb.co/60g4FXGz/AUTOMATED-ELISA-ANALYZERS.png',
  tool: 'https://i.ibb.co/0pvymzJf/tool.png',
  dsa: 'https://i.ibb.co/MyMGqJj0/dsa.png',
  organisations: 'https://i.ibb.co/7xcSpxCp/orgai-nisation.png',
};

// About page carousel images
export const ABOUT_IMAGES = [
  'https://i.ibb.co/F4Bhytfw/aboutpage5.png',
  'https://i.ibb.co/spmCK5Xp/aboutpage4.png',
  'https://i.ibb.co/1tMDY5FF/aboutpage3.png',
  'https://i.ibb.co/TqhqWYYc/aboutpage2.png',
  'https://i.ibb.co/F4pZfHNW/aboutpage1.png',
];

// Equipment category -> representative image
export const EQUIPMENT_IMAGES: Record<string, string> = {
  'Medical Imaging': IMG.radiology,
  'Laboratory & Diagnostics': IMG.labTestTubes,
  'Clinical Equipment': IMG.doctor,
  'Ophthalmic Equipment': IMG.stethoscope,
};

// Specific equipment -> representative image
export const EQUIPMENT_ITEM_IMAGES: Record<string, string> = {
  'MRI / NMR Systems': IMG.mri,
  'CT Systems': IMG.ctScanner,
  'Digital X-Ray Systems': IMG.xray,
  'Color Doppler': IMG.radiology,
  'DSA Systems': IMG_IBB.dsa,
  'Anesthesia Machines': IMG.surgery,
  'Hemodialysis Equipment': IMG.doctor,
  'Automatic Refractometers': IMG_IBB.automaticRefractometer,
  'Slit Lamps': IMG.stethoscope,
  'Automated ELISA Analyzers': IMG_IBB.elisaAnalyzer,
};

// Equipment items that show multiple product photos in a mini carousel
export const EQUIPMENT_ITEM_GALLERY: Record<string, string[]> = {
  'Automated ELISA Analyzers': [IMG_IBB.elisaAnalyzer, IMG_IBB.tool],
};

// Homepage hero carousel slides
export const HERO_SLIDES = [
  {
    image: IMG.containerShip,
    headerImage: IMG.globalNetwork,
  },
  {
    image: IMG.radiology,
    headerImage: IMG.mri,
  },
  {
    image: IMG.cargoFreight,
    headerImage: IMG.portCranes,
  },
  {
    image: IMG.labTestTubes,
    headerImage: IMG.labMicroscope,
  },
];
