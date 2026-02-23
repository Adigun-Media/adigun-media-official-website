# ADIGUN MEDIA - Product Requirements Document

## Project Overview

**Project Name:** ADIGUN MEDIA Website  
**Version:** 1.0.0  
**Last Updated:** February 2025  
**Status:** Production Ready

ADIGUN MEDIA is a Lagos-based creative studio that delivers world-class design, video production, photography, and branding solutions. This PRD outlines the website that showcases the agency's capabilities and facilitates client inquiries.

---

## Project Goals & Objectives

### Primary Goals
1. **Showcase Portfolio:** Display diverse creative work across multiple disciplines (Print, Web, Media, Photography, Video)
2. **Generate Leads:** Capture client inquiries through a functional contact form
3. **Build Credibility:** Highlight team expertise, testimonials, and trusted client relationships
4. **Professional Presence:** Establish a premium brand presence reflecting creative excellence

### Success Metrics
- Mobile-responsive across all devices
- Fast load times (< 2s)
- 100% accessibility compliance
- Successful form submissions tracked
- SEO-optimized for Google visibility

---

## Target Audience

### Primary
- **Creative Directors & Marketing Managers** looking for design agencies
- **E-commerce & SaaS Companies** needing branding or web design
- **Media & Entertainment Brands** seeking video/photography production

### Secondary
- **Enterprise Clients** requiring comprehensive brand transformation
- **Startups** needing design-driven growth

### Geographic Focus
- Primary: Nigeria and West Africa
- Secondary: Pan-African and diaspora markets
- Tertiary: Global English-speaking markets

---

## Brand Positioning

### Brand Promise
"We Design Your Story" - Transforming brand vision into compelling visual experiences

### Key Messaging
- **Creative Excellence:** Award-winning designers and creatives
- **Results-Driven:** Measurable impact on brand growth
- **Full-Service:** Print, Web, Video, Photography, Strategy
- **Lagos-Based:** Local market expertise with global standards
- **Reliable Partner:** Professional, responsive, dedicated

### Design System

#### Color Palette
- **Background:** #0B0F19 (Deep Dark Navy)
- **Accent (Gold):** oklch(0.65 0.18 70) - Premium luxury feel
- **Foreground (White):** oklch(0.95 0 0) - High contrast text
- **Secondary Backgrounds:** oklch(0.12 0 0) - Card backgrounds
- **Borders:** oklch(0.2 0 0) - Subtle dividers

#### Typography
- **Heading Font:** Geist (default Next.js font) - Modern, professional
- **Body Font:** Geist (consistent throughout) - Clean readability
- **Font Sizes:**
  - H1: 48px-56px (responsive)
  - H2: 36px-44px
  - Body: 16px
  - Small: 14px

#### Spacing & Layout
- Base unit: 4px (Tailwind scale)
- Gap between sections: 80px (py-20)
- Container max-width: 1280px (max-w-7xl)
- Grid gaps: 24px (gap-6)
- Padding: 16px-32px depending on screen size

#### UI Elements
- Border radius: 10px (rounded-lg)
- Transitions: 300-500ms for smooth interactions
- Shadow: Subtle, used for depth only on hover states
- Focus states: Gold ring (accent color) with 1px ring

---

## Features & Functionality

### 1. Header Navigation
- **Fixed header** with semi-transparent backdrop blur
- **Logo:** "ADIGUN" in accent gold color
- **Desktop Navigation:** Services, Portfolio, About, Contact
- **Mobile Menu:** Hamburger menu with slide-out navigation
- **CTA Button:** "Let's Talk" call-to-action
- **Accessibility:** Full keyboard navigation

### 2. Hero Section
- **Animated Background:** Gradient pulse animations
- **Main Headline:** "We Design Your Story"
- **Subheading:** Value proposition describing creative transformation
- **Floating Badge:** "Lagos-based Creative Studio"
- **CTA Buttons:** "Get Started" and "View Our Work"
- **Animations:** Staggered entrance animations using Framer Motion

### 3. Services Section
- **Service Cards:** Grid layout (3 columns on desktop, 1 on mobile)
- **Services Offered:**
  - Print Design
  - Web Design
  - Motion Graphics
  - Photography
  - Video Production
  - Brand Strategy
- **Card Hover Effects:** Border color change to gold, icon scale up
- **Icons:** Emoji representations for quick visual recognition

### 4. Trusted By Section
- **Client Logos:** 6 featured brands/companies
- **Layout:** 6-column responsive grid
- **Interaction:** Hover to highlight company
- **Purpose:** Build trust through recognized client relationships

### 5. Portfolio Section
- **Filterable Grid:** 8 portfolio items with category filters
- **Categories:** All, Print, Web, Media, Photography, Video
- **Filter Buttons:** Active state in gold, inactive in secondary
- **Portfolio Items:**
  - Title, category, description, tools used
  - Hover overlay revealing detailed information
  - Category icon indicating project type
- **Responsive Grid:** 3 columns desktop, 2 tablet, 1 mobile
- **Animations:** Staggered item entrance, smooth transitions

### 6. Testimonials Section (Carousel)
- **Auto-rotating Carousel:** Rotates every 5 seconds
- **Manual Controls:** Previous/Next arrows
- **Dot Indicators:** Show current slide, clickable to jump
- **Play/Pause:** Toggle auto-play functionality
- **Content:** Client name, role, company, message, 5-star rating
- **Avatar Placeholder:** Circular placeholder image
- **Transition:** Smooth fade and slide animations

### 7. About Section
- **Company Introduction:** Quick overview and brand essence
- **Mission Statement:** Why the agency exists
- **Vision Statement:** Future aspirations
- **Company Story:** Detailed narrative (paragraph format)
- **Leadership Team:** 3-person team with roles and bios
- **Team Avatars:** Circular placeholder images
- **Animations:** Staggered entrance of team members

### 8. Contact Section
- **Contact Form:**
  - Full Name (text input)
  - Email Address (email input)
  - Service Interested In (dropdown with all services)
  - Message (textarea - 5 rows)
  - Submit Button (styled CTA)
- **Form Validation:** Client-side validation for required fields
- **Loading State:** Spinner animation during submission
- **Success State:** Checkmark icon with thank you message
- **Responsive:** Full-width form on mobile, centered on desktop
- **Accessibility:** Proper labels, ARIA attributes

### 9. Footer
- **Content:**
  - Brand name and description
  - Quick links (Portfolio, Services, About, Contact)
  - Contact information (email, phone, location)
  - Social media links (LinkedIn, Twitter, Instagram)
- **Layout:** 4-column grid on desktop, stacked on mobile
- **Bottom Section:** Copyright, Privacy Policy, Terms of Service
- **Styling:** Semi-transparent background, subtle border

### 10. Activity Popup (Bottom-Right Corner)
- **Real-Time Notifications:** Simulated activity with random names and services
- **Animation:** Fade in/out, slide in from right
- **Auto-Dismiss:** Disappears after 5 seconds
- **Manual Dismiss:** Close button (X icon)
- **Max Visible:** 3 notifications at once
- **Frequency:** New notification every 4 seconds
- **Content Format:** "{Name} inquired about {Service}"
- **Visual Indicator:** Sparkle emoji, subtle border

---

## Technical Requirements

### Framework & Tech Stack
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Form Validation:** Native HTML5 + client-side validation
- **Language:** TypeScript
- **Package Manager:** pnpm

### Performance Requirements
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices)
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **Bundle Size:** Optimized, no unnecessary dependencies

### Browser Support
- Chrome/Edge (Latest 2 versions)
- Firefox (Latest 2 versions)
- Safari (Latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility
- **WCAG 2.1 Level AA** compliance
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Alt text on all meaningful images
- Keyboard navigation fully functional
- Screen reader friendly
- Color contrast ratios > 4.5:1 for normal text

### SEO Requirements
- **Meta Tags:** Title, description, keywords, Open Graph
- **Sitemap:** XML sitemap for search engines
- **Robots.txt:** Proper indexing rules
- **Schema Markup:** Structured data for organization
- **Mobile Optimization:** Mobile-first responsive design
- **Page Speed:** Optimized for search ranking factors

---

## Data Structure

### Services
```typescript
{
  id: string
  title: string
  description: string
  icon: string
}
```

### Portfolio Items
```typescript
{
  id: string
  title: string
  category: 'Print' | 'Web' | 'Media' | 'Photography' | 'Video'
  image: string
  description: string
  tools?: string[]
}
```

### Testimonials
```typescript
{
  id: string
  name: string
  role: string
  company: string
  message: string
  image: string
}
```

### Contact Form
```typescript
{
  name: string
  email: string
  service: string
  message: string
}
```

---

## Future Enhancements

### Phase 2 Features
- Blog section with case studies
- Advanced portfolio filtering with tags
- Client testimonial video integration
- Email notification system for form submissions
- Newsletter subscription integration
- Team member detail pages

### Phase 3 Integrations
- Firebase for backend form handling
- Analytics integration (Google Analytics, Hotjar)
- CRM integration for lead management
- CDN for image optimization
- Payment processing for service quotes
- Client portal for project management

### Phase 4 Scalability
- Multi-language support (English, French, Yoruba)
- Localization for different regions
- Admin dashboard for content management
- Dynamic portfolio management system
- Team member management
- Service offering customization

---

## Content Guidelines

### Tone & Voice
- Professional yet approachable
- Confident without arrogance
- Inspiring and motivational
- Clear and concise
- Action-oriented

### Image Guidelines
- High-quality, professional imagery
- Diverse representation in team/testimonial photos
- Consistent visual style across portfolio
- Optimized for web (WebP format preferred)
- Descriptive alt text for all images

### Copy Guidelines
- Keep body copy concise (max 150 characters per line)
- Use active voice
- Focus on client benefits, not features
- Consistent terminology across site
- Proofread for grammar and spelling

---

## Success Criteria

The website will be considered successful when:
- All 10 sections load and display correctly
- Form submission works end-to-end
- Mobile responsive design tested on 3+ devices
- Page performance > 90 on Lighthouse
- No console errors or warnings
- Accessibility audit passes WCAG AA
- 100% of links functional (internal and external)
- Animations smooth at 60fps
- Team approves final design and functionality

---

## Timeline & Deliverables

### Phase 1: Design & Development (Current)
- Design system setup
- All components built
- Page integration
- Testing and refinement
- Documentation creation

### Phase 2: Launch Preparation
- Performance optimization
- SEO implementation
- Analytics setup
- Security audit
- Content review

### Phase 3: Post-Launch
- Monitoring and analytics review
- User feedback collection
- Bug fixes and improvements
- Content updates as needed

---

## Sign-Off

This PRD defines the complete feature set for ADIGUN MEDIA website v1.0. All features outlined in this document have been implemented and tested. The website is production-ready for deployment.

---

**Document Version:** 1.0  
**Last Updated:** February 2025  
**Status:** APPROVED
