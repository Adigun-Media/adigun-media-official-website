# ADIGUN MEDIA - Architecture & Implementation Guide

## Overview

This document explains the technical architecture of the ADIGUN MEDIA website, how components work together, and provides guidance for future developers maintaining or extending the codebase.

---

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx           # Root layout with dark mode setup
│   ├── page.tsx             # Main page combining all sections
│   └── globals.css          # Global styles and CSS variables
├── components/
│   ├── header.tsx           # Navigation header
│   ├── hero.tsx             # Hero section with animations
│   ├── services.tsx         # Services grid
│   ├── trusted-by.tsx       # Client logos section
│   ├── portfolio.tsx        # Filterable portfolio grid
│   ├── testimonials.tsx     # Carousel testimonials
│   ├── about.tsx            # About company section
│   ├── contact.tsx          # Contact form
│   ├── footer.tsx           # Footer with links
│   └── activity-popup.tsx   # Real-time activity notifications
├── lib/
│   ├── types.ts             # TypeScript interfaces
│   └── constants.ts         # All static content data
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.mjs          # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
├── PRD.md                   # Product Requirements Document
└── ARCHITECTURE.md          # This file
```

---

## Core Technologies

### Frontend Framework
- **Next.js 16**: React meta-framework with App Router for routing and rendering
- **React 19**: UI library for component-based architecture
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework

### Animation & Interaction
- **Framer Motion**: Declarative animation library for smooth transitions and entrance effects
- **Lucide React**: SVG icon library for consistent iconography

### Development Tools
- **pnpm**: Fast, disk-space-efficient package manager
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting

---

## Design System Architecture

### Color Tokens (CSS Variables)

The design system uses CSS custom properties (variables) for consistent theming. All colors are defined in `app/globals.css`:

```css
:root {
  --background: oklch(0.08 0 0);      /* Deep dark navy #0B0F19 */
  --foreground: oklch(0.95 0 0);      /* White text */
  --accent: oklch(0.65 0.18 70);      /* Gold/yellow accent */
  --secondary: oklch(0.12 0 0);       /* Card backgrounds */
  --border: oklch(0.2 0 0);           /* Subtle borders */
  --muted-foreground: oklch(0.65 0); /* Dimmed text */
}
```

**Why OkLCH?**
- Perceptually uniform color space
- Better readability guarantees
- Easier to create color variants
- Superior color harmony

### Responsive Design

Mobile-first approach using Tailwind breakpoints:
- **Mobile**: 320px+ (no prefix)
- **Tablet**: 768px+ (`md:`)
- **Desktop**: 1024px+ (`lg:`)
- **Large Desktop**: 1280px+ (`xl:`)

Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column mobile, 2 tablet, 3 desktop */}
</div>
```

---

## Data Architecture

### Type Definitions (`lib/types.ts`)

All TypeScript interfaces are centralized for type safety:

```typescript
interface Service {
  id: string
  title: string
  description: string
  icon: string
}

interface PortfolioItem {
  id: string
  title: string
  category: 'Print' | 'Web' | 'Media' | 'Photography' | 'Video'
  image: string
  description: string
  tools?: string[]
}

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  message: string
  image: string
}

interface FormData {
  name: string
  email: string
  service: string
  message: string
}
```

**Benefits:**
- Compile-time type checking
- IDE autocomplete support
- Self-documenting code
- Prevents runtime errors

### Content Constants (`lib/constants.ts`)

All static content is centralized in one file for easy updates:

- **SERVICES**: 6 service offerings with descriptions
- **PORTFOLIO_ITEMS**: 8 portfolio items with categories and tools
- **TESTIMONIALS**: 4 client testimonials
- **TRUSTED_COMPANIES**: 6 brand names for credibility
- **NIGERIAN_NAMES**: 15 names for activity popups
- **SERVICE_NAMES**: 10 service variations for activity popups
- **ABOUT_CONTENT**: Mission, vision, story, and team data

**Design Pattern**: Data-driven UI
- Content updates don't require code changes
- Easy to add/remove items
- Single source of truth
- Scalable to database integration

---

## Component Architecture

### Component Hierarchy

```
App (page.tsx)
├── Header (sticky navigation)
├── Hero (introduction)
├── Services (feature showcase)
├── TrustedBy (credibility)
├── Portfolio (work examples)
├── Testimonials (carousel)
├── About (company story)
├── Contact (lead capture)
└── Footer (footer links)
└── ActivityPopup (corner notifications)
```

### Component Patterns

#### 1. **Client Components** (`'use client'`)
Used for interactivity and state management:
- `Header`: Mobile menu state
- `Hero`: Entrance animations
- `Portfolio`: Category filtering
- `Testimonials`: Carousel logic
- `Contact`: Form handling
- `ActivityPopup`: Notification generation

#### 2. **Server Components** (Default)
Used when no interactivity needed:
- Static sections like `Services`, `About`
- Used with `whileInView` for scroll animations

#### 3. **Reusable Patterns**

**Section Header Pattern:**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-12"
>
  <h2 className="text-4xl font-bold text-foreground mb-4">Title</h2>
  <p className="text-muted-foreground">Subtitle</p>
</motion.div>
```

**Grid Pattern:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (...))}
</div>
```

**Hover Card Pattern:**
```jsx
<div className="group p-8 rounded-lg border border-border hover:border-accent transition-all">
  <h3 className="group-hover:text-accent">Title</h3>
</div>
```

---

## Animation Architecture

### Framer Motion Integration

All animations use Framer Motion's declarative approach:

#### 1. **Entrance Animations**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Content
</motion.div>
```

#### 2. **Scroll-Triggered Animations**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

#### 3. **Staggered Animations**
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

#### 4. **Hover Animations**
```jsx
<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
  Hover me
</motion.div>
```

**Performance Notes:**
- Animations use `transform` and `opacity` (GPU accelerated)
- No layout-triggering animations
- Reduced motion respected via `prefers-reduced-motion`
- 60fps target maintained

---

## Feature Implementation Details

### 1. Header Navigation

**File:** `components/header.tsx`

**How It Works:**
1. Fixed header with `className="fixed top-0 w-full z-50"`
2. Mobile menu state managed with `useState`
3. Conditional rendering: desktop nav vs mobile menu
4. Smooth transitions on active state

**Key Features:**
- Semi-transparent backdrop with blur effect
- Mobile hamburger menu with slide-out animation
- Logo links to home
- CTA button with consistent styling

**Extensibility:**
```jsx
// Add more nav links
const navLinks = [
  { href: '#section', label: 'Label' }
]
```

### 2. Portfolio Filtering

**File:** `components/portfolio.tsx`

**How It Works:**
1. `activeCategory` state tracks selected filter
2. `filteredItems` computed from `PORTFOLIO_ITEMS`
3. Buttons update category on click
4. Grid re-renders with matched items

**Code Pattern:**
```jsx
const [activeCategory, setActiveCategory] = useState('All')
const filteredItems = activeCategory === 'All' 
  ? PORTFOLIO_ITEMS 
  : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory)
```

**Performance:**
- Filtering happens client-side (instant)
- Small dataset (8 items) makes this efficient
- For larger datasets, consider server-side filtering

### 3. Testimonials Carousel

**File:** `components/testimonials.tsx`

**How It Works:**
1. `current` state tracks active slide (0-3)
2. `useEffect` sets up auto-rotation interval
3. Arrow buttons and dot indicators allow manual navigation
4. Pause/Play button controls auto-play

**Code Pattern:**
```jsx
useEffect(() => {
  if (!isAutoPlay) return
  
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  }, 5000)
  
  return () => clearInterval(interval)
}, [isAutoPlay])
```

**Carousel Logic:**
```jsx
const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
```

**Animations:**
- Fade and slide transitions with `AnimatePresence`
- Smooth carousel rotation every 5 seconds
- Manual controls reset auto-play timer

### 4. Contact Form

**File:** `components/contact.tsx`

**Form State:**
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  service: '',
  message: ''
})
const [submitted, setSubmitted] = useState(false)
const [isLoading, setIsLoading] = useState(false)
```

**Validation:**
- Client-side: HTML5 `required` attributes
- Email input type for format validation
- Could be extended with Zod/React Hook Form

**Form Submission Flow:**
1. Form submit handler prevents default
2. `isLoading` state shows spinner
3. Simulated 1.5s delay (replace with actual API call)
4. On success: show success message for 3 seconds
5. Reset form for next submission

**Backend Integration:**
Currently simulates submission. To add real functionality:
```jsx
// Replace this:
await new Promise((resolve) => setTimeout(resolve, 1500))

// With actual API call:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

### 5. Activity Popup

**File:** `components/activity-popup.tsx`

**How It Works:**
1. Generates random activity every 4 seconds
2. Activity has 5-second lifespan before auto-dismiss
3. Max 3 notifications visible at once
4. Manual dismiss with X button

**Random Generation:**
```jsx
const generateRandomActivity = () => {
  const randomName = NIGERIAN_NAMES[Math.floor(Math.random() * NIGERIAN_NAMES.length)]
  const randomService = SERVICE_NAMES[Math.floor(Math.random() * SERVICE_NAMES.length)]
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    name: randomName,
    service: randomService,
    timestamp: new Date()
  }
}
```

**State Management:**
```jsx
const [activities, setActivities] = useState([])

// Auto-dismiss after 5 seconds
onAnimationComplete={() => {
  setTimeout(() => removeActivity(activity.id), 5000)
}}
```

**Real-World Integration:**
Replace `generateRandomActivity()` with real WebSocket events:
```jsx
// Connect to real activity feed
useEffect(() => {
  const socket = io('wss://your-api.com')
  socket.on('new-activity', (activity) => {
    setActivities(prev => [activity, ...prev].slice(0, 3))
  })
  return () => socket.disconnect()
}, [])
```

---

## State Management Strategy

### Current Approach
- **React State** with `useState` for local component state
- **No global state manager** (not needed for current scope)
- Lift state to parent when sharing between components

### Scalability Path
As app grows, consider:
1. **React Context** for theme/settings
2. **Zustand** for light global state
3. **TanStack Query** for server state
4. **Redux** if complex state mutations needed

---

## Performance Optimization

### Current Optimizations
1. **Code Splitting**: Next.js automatically splits components
2. **Image Optimization**: Next.js `<Image>` component (ready when images added)
3. **CSS Minimization**: Tailwind purges unused CSS
4. **Animation Optimization**: GPU-accelerated transforms and opacity only
5. **Lazy Loading**: Framer Motion `whileInView` (lazy animates)

### Lighthouse Optimization Checklist
- [ ] Generate images with `next/image`
- [ ] Add meta tags and Open Graph
- [ ] Implement `dns-prefetch` for external resources
- [ ] Minify and cache assets
- [ ] Monitor Core Web Vitals with web-vitals package

---

## Deployment & Environment Setup

### Environment Variables
Currently no environment variables required. When adding backend:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

### Deployment Platforms
- **Vercel** (recommended): `vercel deploy`
- **GitHub Pages**: `next export`
- **AWS**, **Netlify**, **Railway**: Standard Next.js deployment

### Build Command
```bash
npm run build  # or pnpm build
npm run start  # or pnpm start
```

---

## Extending the Codebase

### Adding a New Section

1. **Create Component** (`components/new-section.tsx`):
```jsx
'use client'

export function NewSection() {
  return (
    <section id="new-section" className="py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
      </div>
    </section>
  )
}
```

2. **Add Data** to `lib/constants.ts`:
```tsx
export const NEW_ITEMS = [
  { id: '1', title: 'Item', ... }
]
```

3. **Add Types** to `lib/types.ts`:
```tsx
export interface NewItem {
  id: string
  title: string
  // ...
}
```

4. **Import in** `app/page.tsx`:
```jsx
import { NewSection } from '@/components/new-section'

// In JSX:
<NewSection />
```

### Adding Dark/Light Mode

The site is currently dark-only. To add light mode:

1. Remove `className="dark"` from `app/layout.tsx`
2. Add theme toggle component
3. Use `prefers-color-scheme` CSS media query for system theme
4. Consider using `next-themes` package

---

## Testing Strategy

### Manual Testing Checklist
- [ ] All sections load without errors
- [ ] Responsive design on mobile (375px), tablet (768px), desktop (1920px)
- [ ] Form submission works end-to-end
- [ ] Portfolio filtering works for all categories
- [ ] Testimonial carousel advances properly
- [ ] Activity popups appear and dismiss
- [ ] All links are functional
- [ ] No console errors or warnings
- [ ] Animations smooth at 60fps

### Accessibility Testing
- [ ] Run axe DevTools audit
- [ ] Test keyboard navigation (Tab, Enter, Arrow keys)
- [ ] Verify color contrast ratios (4.5:1 minimum)
- [ ] Test with screen reader (NVDA, JAWS)
- [ ] Check heading hierarchy
- [ ] Verify form labels and ARIA attributes

### Performance Testing
```bash
# Lighthouse CLI
npx lighthouse https://your-site.com --view
```

Target scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

---

## Troubleshooting Common Issues

### Components Not Rendering
- Check `'use client'` directive for interactive components
- Verify all imports use correct paths (`@/components/...`)
- Ensure component is exported and imported in page

### Styling Issues
- Verify Tailwind classes are spelled correctly
- Check if custom colors are defined in `globals.css`
- Look for conflicting CSS in console
- Clear `.next` folder and rebuild

### Animation Stuttering
- Ensure only `transform` and `opacity` properties animate
- Check for layout-causing animations
- Monitor GPU usage in DevTools Performance tab
- Consider reducing animation complexity on mobile

### Form Not Submitting
- Check browser console for errors
- Verify form fields have `name` attributes
- Check `required` attribute validation
- Test in different browsers

---

## Future Development

### Planned Features
1. **Blog Integration**: Next.js MDX for blog posts
2. **CMS Integration**: Headless CMS (Sanity, Contentful)
3. **API Backend**: Node.js/Express for form submissions
4. **Database**: PostgreSQL or MongoDB for data storage
5. **Authentication**: NextAuth.js for user accounts
6. **Payment Processing**: Stripe integration for quotes

### Code Improvements
1. Add unit tests with Jest and React Testing Library
2. Add E2E tests with Playwright or Cypress
3. Implement proper error boundaries
4. Add logging with Sentry
5. Set up CI/CD pipeline with GitHub Actions

---

## Resources & Documentation

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Key Concepts Explained
- **Server Components**: Render on server, send HTML to client
- **Client Components**: Run in browser, can use hooks
- **App Router**: File-based routing system in Next.js 13+
- **OkLCH Color Space**: Perceptually uniform color space

---

## Contact & Support

For questions or updates to this documentation:
- Check commit history in git
- Review PRD.md for feature specifications
- Reach out to project maintainer

---

**Document Version:** 1.0  
**Last Updated:** February 2025  
**Status:** APPROVED

This architecture is designed to be maintainable, scalable, and developer-friendly. Follow these patterns when extending the codebase.
