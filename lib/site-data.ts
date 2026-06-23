export const SITE = {
  name: 'MG Signage',
  tagline: 'Signage That Makes Your Brand Visible',
  phone: '+91 8958454669',
  phoneHref: 'tel:+918958454669',
  whatsapp: '918958454669',
  whatsappHref: 'https://wa.me/918958454669',
  email: 'hello@mgsignage.site',
  emailHref: 'mailto:hello@mgsignage.site',
  address: {
    line1: '9 Parsoliwala, New Cantt Road',
    line2: 'Dehradun, Uttarakhand',
    postal: '248001, India',
  },
  founded: 2016,
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Brands', href: '#brands' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export const WHY_CHOOSE = [
  {
    title: 'Industry Experience Since 2016',
    description:
      'Nearly a decade of hands-on work delivering signage and branding projects of every scale.',
    icon: 'CalendarClock',
  },
  {
    title: 'Premium Fabrication Quality',
    description:
      'Precision fabrication using quality materials built to perform outdoors and indoors for years.',
    icon: 'Hammer',
  },
  {
    title: 'Professional Installation',
    description:
      'Trained installation teams handle on-site execution safely, cleanly and on schedule.',
    icon: 'HardHat',
  },
  {
    title: 'Pan India Project Execution',
    description:
      'From a single storefront to multi-city rollouts, we execute reliably across states.',
    icon: 'MapPinned',
  },
] as const

export const SERVICES = [
  { title: 'Acrylic Letter Boards', icon: 'Type' },
  { title: 'SS Letter Boards', icon: 'Sparkles' },
  { title: 'Liquid Letter Signage', icon: 'Droplets' },
  { title: 'Glow Sign Boards', icon: 'Lightbulb' },
  { title: 'Flex Boards', icon: 'Layers' },
  { title: 'Logo Fabrication', icon: 'Shapes' },
  { title: 'ACP Panelling', icon: 'LayoutPanelTop' },
  { title: 'LED Screens', icon: 'MonitorPlay' },
  { title: 'Visiting Cards', icon: 'CreditCard' },
  { title: 'Sunboard Vinyl Branding', icon: 'StickyNote' },
  { title: 'Unipoles', icon: 'Signpost' },
  { title: 'Router Cutting Boards', icon: 'Scissors' },
  { title: 'Indoor Branding', icon: 'Building2' },
  { title: 'Outdoor Branding', icon: 'Megaphone' },
  { title: 'Complete Signage Solutions', icon: 'PackageCheck' },
] as const

export const PROJECTS = [
  {
    src: '/work/makemytrip-wayfinding.jpeg',
    title: 'MakeMyTrip',
    category: 'Corporate Branding',
  },
  {
    src: '/work/hotel-virendra.jpeg',
    title: 'Hotel Virendra',
    category: 'ACP Signage',
  },
  {
    src: '/work/liquor-mart.jpeg',
    title: 'Mo. Liquor Mart',
    category: 'LED Signage',
  },
  {
    src: '/work/queen-of-hills.jpeg',
    title: 'Queen of Hills',
    category: 'Outdoor Branding',
  },
  {
    src: '/work/panwar-sweets.jpeg',
    title: 'Panwar Sweets & Dairy',
    category: 'Glow Sign Board',
  },
  {
    src: '/work/doon-knitwears.jpeg',
    title: 'Doon Knitwears',
    category: 'Retail Branding',
  },
  {
    src: '/work/shoeniques.jpeg',
    title: 'Shoeniques',
    category: 'LED Signage',
  },
  {
    src: '/work/eltham-bakery.jpeg',
    title: 'Eltham Bakery',
    category: 'Indoor Branding',
  },
  {
    src: '/work/radha-soami-bakers.jpeg',
    title: 'Radha Soami Bakers',
    category: 'ACP Signage',
  },
  {
    src: '/work/wine-and-beer.jpeg',
    title: 'Wine & Beer',
    category: 'Glow Sign Board',
  },
  {
    src: '/work/bhutani-infra.jpeg',
    title: 'Bhutani Infra',
    category: 'Corporate Branding',
  },
  {
    src: '/work/i-love-gauchar.jpeg',
    title: 'I Love Gauchar',
    category: 'Outdoor Branding',
  },
  {
    src: '/work/rasa-restaurant.jpeg',
    title: 'RASA Restaurant',
    category: 'Restaurant Branding',
  },
  {
    src: '/work/madras-hot-chips.jpeg',
    title: 'Madras Hot Chips',
    category: 'Retail Branding',
  },
] as const

export const BRANDS = [
  { name: 'MakeMyTrip', src: '/logos/makemytrip.png' },
  { name: 'Jockey', src: '/logos/jockey.png' },
  { name: 'Aurelia', src: '/logos/aurelia.png' },
  { name: 'Mee n Moms', src: '/logos/meenmoms.png' },
] as const

export const COVERAGE = [
  'Dehradun',
  'Haridwar',
  'Rishikesh',
  'Roorkee',
  'Chakrata',
  'Champawat',
  'Tehri',
  'Uttarkashi',
  'Bareilly',
  'Chandigarh',
  'Bangalore',
  'Chennai',
  'Thiruvananthapuram',
  'Varanasi',
  'Nepal Border Region',
] as const
