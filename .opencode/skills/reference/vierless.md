# VIERLESS Reference — Design Analysis

**Source:** https://vierless.de/en

## 1. Visual Overview

- **Theme:** Premium Dark with high contrast
- **Aesthetic:** High-end agency, editorial curation feel
- **Vibe:** Authoritative, clean, sophisticated

---

## 2. Color Palette

| Element | Value | Usage |
|---------|-------|-------|
| Background | `#0d0d0d` | Deep black, foundation |
| Surface | `#1a1a1a` | Card backgrounds, sections |
| Surface Elevated | `#262626` | Hover states, elevated elements |
| Primary Accent | `#00FF80` | CTAs, highlights, links |
| Text Primary | `#ffffff` | Headlines, main content |
| Text Secondary | `#a0a0a0` | Muted text, descriptions |
| Text Tertiary | `#666666` | Small labels, captions |

---

## 3. Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Hero Headline | Sans-serif (bold) | 700+ | 4-5rem |
| Section Headlines | Sans-serif | 600+ | 2.5-3rem |
| Subheadlines | Sans-serif | 500 | 1.25-1.5rem |
| Body Text | Sans-serif | 400 | 1rem |
| Labels/Captions | Sans-serif | 400 | 0.75-0.875rem |

**Key Typography Rules:**
- Tight letter-spacing on large headlines
- High contrast between headings and body
- Generous line-height for readability

---

## 4. Layout Principles

### Spacing
- Generous vertical padding (80-120px between sections)
- Wide margins on desktop (80-120px)
- Tight spacing within component groups (16-24px)

### Grid
- Max content width: ~1400px
- 12-column grid system
- Case studies: 2-3 column grid with large imagery

### Visual Hierarchy
1. Hero: Full-width imagery + overlay text
2. CTAs: Gradient buttons with primary accent
3. Content: Alternating image/text layouts
4. Cards: Large thumbnail + title + description

---

## 5. Component Patterns

### Buttons
- **Primary:** Solid white or primary accent, black text
- **Secondary:** Outlined, white border, white text
- **Hover:** Subtle background shift, scale transform

### Cards (Case Studies)
- Large edge-to-edge imagery
- Overlay text on hover or below image
- Category tags (small, rounded)
- "View case study" link/button

### Navigation
- Minimal, fixed or sticky
- Logo + links + CTA
- Often transparent on hero, solid on scroll

### Testimonials
- Profile photo (circular or rounded square)
- Quote text
- Name + role + company
- Star ratings when applicable

---

## 6. Imagery & Graphics

- **Hero:** Full-width product mockups, team photos
- **Case Studies:** Large "16:9" aspect ratio images
- **Icons:** Minimal line icons, accent colored
- **Badges:** Award logos, partner badges (monochrome)

---

## 7. Interactions & Motion

- Smooth scroll behavior
- Fade-in on scroll for sections
- Subtle hover transforms on cards (scale, opacity)
- Button hover: background shift + slight scale

---

## 8. Section Patterns

### Hero
- Large headline (command attention)
- Subheadline (value proposition)
- Primary CTA + secondary link
- Full-width background image or solid color

### Stats/Trust
- Grid of stats or client logos
- "Trusted by" section with company logos
- Award badges

### Services
- 3-4 column grid
- Icon + title + description
- Optional "Learn more" link

### Case Studies
- Large image + title + category
- 2-3 column grid
- "View all" CTA at bottom

### Testimonials
- Carousel or grid
- Quote + person details
- Video thumbnail option

### Process/Steps
- Numbered steps (01, 02, 03...)
- Title + description per step
- Optional icon or illustration

### FAQ
- Accordion pattern
- Question + expandable answer

### Footer
- Multi-column (Links, Contact, Social)
- Newsletter signup
- Legal links

---

## 9. Key Design Rules

### DO
- Use deep black background (#0d0d0d)
- Apply primary accent sparingly (#00FF80)
- Large typography for headlines
- Full-width hero sections
- High-quality imagery
- Gradient CTAs
- Minimal navigation

### DON'T
- Use mid-gray backgrounds
- Overcrowd content
- Use too many colors
- Standard stock photo aesthetics
- Generic gradients

---

## 10. Tailwind Token Mapping

```javascript
// Colors
colors: {
  background: '#0d0d0d',
  surface: '#1a1a1a',
  'surface-elevated': '#262626',
  primary: '#00FF80',
  'on-primary': '#0d0d0d',
  'on-surface': '#ffffff',
  'on-surface-secondary': '#a0a0a0',
  'on-surface-tertiary': '#666666',
}

// Spacing
spacing: {
  section: '6rem - 7.5rem', // 96-120px
  content: '5rem', // 80px
  component: '1.5rem - 2rem', // 24-32px
}
```

---

## 11. Comparison to Editorial Noir

| Aspect | Editorial Noir | VIERLESS |
|--------|----------------|----------|
| Background | #131313 | #0d0d0d |
| Primary | #00FF80 | #00FF80 |
| Typography | Plus Jakarta Sans | Similar bold sans |
| Layout | Editorial, asymmetric | Grid-based, clean |
| Cards | Overlapping elements | Flat, large imagery |
| Glassmorphism | Yes | Minimal |

**Key Alignment:**
- Both use deep black backgrounds
- Both use neon green (#00FF80) as primary accent
- Both emphasize large typography
- Both favor minimal, premium aesthetic
- Both use generous whitespace
