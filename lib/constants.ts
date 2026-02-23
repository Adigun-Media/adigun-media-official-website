import { Service, PortfolioItem, Testimonial } from './types'

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Print Design',
    description: 'Stunning print materials including branding, packaging, and collateral that make lasting impressions',
    icon: '📋',
  },
  {
    id: '2',
    title: 'Web Design',
    description: 'Modern, responsive websites that engage users and drive conversions across all devices',
    icon: '🌐',
  },
  {
    id: '3',
    title: 'Motion Graphics',
    description: 'Captivating animations and motion design that bring your message to life',
    icon: '✨',
  },
  {
    id: '4',
    title: 'Photography',
    description: 'Professional photography capturing your brand story with artistic excellence',
    icon: '📸',
  },
  {
    id: '5',
    title: 'Video Production',
    description: 'Compelling video content from concept to final cut, optimized for all platforms',
    icon: '🎬',
  },
  {
    id: '6',
    title: 'Brand Strategy',
    description: 'Comprehensive brand positioning and strategy to elevate your market presence',
    icon: '🎯',
  },
]

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'TechVision Branding',
    category: 'Print',
    image: '/portfolio-1.jpg',
    description: 'Complete brand identity system for tech startup',
    tools: ['Adobe Creative Suite', 'InDesign'],
  },
  {
    id: '2',
    title: 'EcoFlow Website',
    category: 'Web',
    image: '/portfolio-2.jpg',
    description: 'E-commerce platform redesign for sustainable products',
    tools: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: '3',
    title: 'Brand Film 2024',
    category: 'Video',
    image: '/portfolio-3.jpg',
    description: '60-second brand film for luxury fashion',
    tools: ['Cinema 4D', 'After Effects', 'Premiere Pro'],
  },
  {
    id: '4',
    title: 'Urban Photography Series',
    category: 'Photography',
    image: '/portfolio-4.jpg',
    description: 'Commercial photography collection for travel magazine',
    tools: ['Canon EOS R5', 'Lightroom', 'Photoshop'],
  },
  {
    id: '5',
    title: 'GlobalReach Campaign',
    category: 'Media',
    image: '/portfolio-5.jpg',
    description: 'Multi-channel marketing campaign assets',
    tools: ['Figma', 'Adobe XD', 'Illustrator'],
  },
  {
    id: '6',
    title: 'Motion Design Reel',
    category: 'Media',
    image: '/portfolio-6.jpg',
    description: 'Collection of motion graphics for various clients',
    tools: ['After Effects', 'Cinema 4D', 'Blender'],
  },
  {
    id: '7',
    title: 'Elegant Print Packaging',
    category: 'Print',
    image: '/portfolio-7.jpg',
    description: 'Luxury packaging design for cosmetics brand',
    tools: ['Adobe InDesign', 'Illustrator'],
  },
  {
    id: '8',
    title: 'Web App Development',
    category: 'Web',
    image: '/portfolio-8.jpg',
    description: 'SaaS dashboard with real-time analytics',
    tools: ['React', 'TypeScript', 'Node.js'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Chioma Okonkwo',
    role: 'CEO',
    company: 'TechVision Inc',
    message:
      'ADIGUN MEDIA transformed our brand identity. Their creative approach and attention to detail exceeded all expectations. Highly recommended!',
    image: '/testimonial-1.jpg',
  },
  {
    id: '2',
    name: 'Kofi Mensah',
    role: 'Marketing Director',
    company: 'EcoFlow Solutions',
    message:
      'The website redesign increased our conversions by 45%. The team was professional, responsive, and truly understood our vision.',
    image: '/testimonial-2.jpg',
  },
  {
    id: '3',
    name: 'Amara Nwosu',
    role: 'Creative Director',
    company: 'Luxury Fashion Co',
    message:
      'Their video production quality is outstanding. Every frame tells our story perfectly. Best investment we made in content.',
    image: '/testimonial-3.jpg',
  },
  {
    id: '4',
    name: 'Ahmed Hassan',
    role: 'Founder',
    company: 'Digital Innovations Ltd',
    message:
      'Professional, creative, and results-driven. ADIGUN MEDIA delivered excellence across all touchpoints. Truly world-class.',
    image: '/testimonial-4.jpg',
  },
]

export const TRUSTED_COMPANIES = [
  'TechCorp Global',
  'Digital Innovations',
  'Luxury Fashion Co',
  'EcoFlow Solutions',
  'Global Reach Media',
  'Innovation Labs',
]

export const NIGERIAN_NAMES = [
  'Chioma',
  'Kofi',
  'Amara',
  'Ahmed',
  'Zainab',
  'Emeka',
  'Aisha',
  'Tunde',
  'Ifeanyi',
  'Naomi',
  'Kwame',
  'Blessing',
  'Adeyemi',
  'Chinedu',
  'Abigail',
]

export const SERVICE_NAMES = [
  'Print Design',
  'Web Design',
  'Motion Graphics',
  'Photography',
  'Video Production',
  'Brand Strategy',
  'UI/UX Design',
  'Content Creation',
  'Social Media',
  'Consulting',
]

export const ABOUT_CONTENT = {
  intro:
    'ADIGUN MEDIA is a creative powerhouse based in Lagos, Nigeria, dedicated to delivering world-class design and media solutions that transform brands.',
  mission:
    'We believe in the power of creativity to solve problems and inspire action. Our mission is to help brands tell their stories in the most compelling and authentic way possible.',
  vision:
    'To be the most innovative and trusted creative partner for brands across Africa and beyond, setting new standards in design excellence.',
  story: `Founded in 2015, ADIGUN MEDIA started as a small team of passionate creatives with a big vision. Over the years, we've grown into a full-service creative agency, working with startups, established brands, and global corporations.
    
    Our multidisciplinary team brings together expertise in design, technology, strategy, and storytelling. We don't just create beautiful work—we create meaningful solutions that drive real business results.
    
    With offices in Lagos and partnerships across Africa, we're positioned to understand local contexts while maintaining global standards of excellence.`,
  team: [
    {
      name: 'Akin Adigun',
      role: 'Founder & Creative Director',
      bio: '15+ years of creative direction experience, passionate about brand innovation',
    },
    {
      name: 'Tunde Okafor',
      role: 'Head of Design',
      bio: 'Award-winning designer with expertise in brand identity and digital design',
    },
    {
      name: 'Ife Adebayo',
      role: 'Video Director',
      bio: 'Emmy-nominated video producer with experience in broadcast and commercial production',
    },
  ],
}
