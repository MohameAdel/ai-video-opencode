# Editorial Noir — Brand Color Specification

## 1. Creative Direction

**North Star:** "The Digital Curator" — A Premium Dark experience that feels authoritative yet breathable.

**Core Philosophy:**
- **Atmospheric Depth**: Base color `#131313` with light/shadow guiding the eye
- **Intentional Asymmetry**: Break the template look through offset elements
- **No-Line Rule**: Never use 1px solid borders for sectioning — use background color shifts instead
- **Glass & Gradient**: High-end feel via subtle gradients and glassmorphism

---

## 2. Primary Palette

| Token | Value | Use Case |
|-------|-------|----------|
| `primary` | `#00FF80` | High-impact actions, accents, vitality |
| `primary_container` | `#00331f` | Gradient start for CTAs |
| `primary_fixed_dim` | `#005229` | Gradient end for CTAs |
| `on_primary` | `#131313` | Text on primary |
| `on_primary_fixed` | `#131313` | Text on gradient buttons |

---

## 3. Surface Hierarchy (Nesting Principle)

| Token | Value | Use Case |
|-------|-------|----------|
| `surface` | `#131313` | Level 0 — Background (foundation of all screens) |
| `surface_container_low` | `#1a1919` | Level 1 — Sections |
| `surface_container` | `#201f1f` | Level 2 — Standard container |
| `surface_container_high` | `#292828` | Level 3 — Cards/Interaction |
| `surface_container_highest` | `#333232` | Level 4 — Elevated cards |
| `surface_container_lowest` | `#0e0e0e` | Deepest level |

---

## 4. Text & On-Colors

| Token | Value | Use Case |
|-------|-------|----------|
| `on_surface` | `#ffffff` | Primary text |
| `on_surface_variant` | `#a8a8a8` | Secondary/muted text |
| `on_surface_container` | `#e6e6e6` | Text on containers |
| `on_surface_container_high` | `#d4d4d4` | Text on elevated surfaces |

---

## 5. Outline & Ghost Border

| Token | Value | Use Case |
|-------|-------|----------|
| `outline_variant` | `rgba(255, 255, 255, 0.15)` | Ghost Border — container boundaries when needed |
| `outline` | `rgba(255, 255, 255, 0.3)` | Stronger outlines |

---

## 6. Semantic Colors

| Token | Value | Use Case |
|-------|-------|----------|
| `error` | `#ff6b6b` | Error states |
| `on_error` | `#131313` | Text on error |
| `success` | `#00FF80` | Use primary instead |
| `warning` | `#ffd93d` | Warning states |
| `info` | `#6bcbff` | Info states |

---

## 7. Typography Colors

**Headlines & Display:** Use `on_surface` (#ffffff) primarily
- **Command attention:** Use `primary` for secondary hooks
- **Guide flow:** Use `on_surface_variant` for supporting text

---

## 8. Component Color Rules

### Buttons

| Variant | Background | Border | Text |
|---------|------------|--------|------|
| Primary | Gradient: `primary_container` → `primary_fixed_dim` | None | `on_primary_fixed` (#131313) |
| Secondary | Transparent | Ghost Border (15%) | `on_surface` |

### Cards
- Background: `surface_container_highest`
- No dividers — use spacing instead

### Input Fields
- Background: `surface_container_low`
- Border: Ghost Border (15%)
- Focus Border: `primary` at 100%
- Focus Label: `primary`

---

## 9. Elevation & Ambient Shadows

**Glassmorphism (Floating Elements):**
```css
background: rgba(32, 31, 31, 0.8);
backdrop-filter: blur(20px);
```

**Atmospheric Shadows (if needed):**
- Blur: 40px - 80px
- Opacity: 4% - 8%
- Color: `rgba(255, 255, 255, 0.04)` to `rgba(255, 255, 255, 0.08)`

---

## 10. Quick Token Reference

| Token | Value | Use Case |
|-------|-------|----------|
| `background` | `#131313` | Foundation of all screens |
| `primary` | `#00FF80` | High-impact actions and accents |
| `surface_container` | `#201f1f` | Standard container level |
| `spacing-24` | `8.5rem` | Hero section vertical padding |
| `rounded-lg` | `0.5rem` | Standard corner radius for imagery |
| `rounded-sm` | `0.125rem` | Precision radius for interactive small bits |
| `radius-default` | `0.25rem` | Default roundedness for buttons |

---

## 11. Usage Guidelines

### DO
- Use `primary` sparingly (surgical strike)
- Use background color shifts for sectioning
- Apply gradients to main CTAs
- Use glassmorphism for floating navigation/overlays
- Overlap elements for depth and kinetic energy

### DON'T
- Use 1px solid borders to separate sections
- Use standard drop shadows
- Use `primary` for more than one CTA per viewport
- Clutter with unnecessary color
- Use pure black (#000) or white (#fff) for large areas

---

## 12. Tailwind Extension Example

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Surface Hierarchy
        surface: '#131313',
        'surface-container-low': '#1a1919',
        'surface-container': '#201f1f',
        'surface-container-high': '#292828',
        'surface-container-highest': '#333232',
        'surface-container-lowest': '#0e0e0e',
        
        // Primary
        primary: '#00FF80',
        'primary-container': '#00331f',
        'primary-fixed-dim': '#005229',
        'on-primary-fixed': '#131313',
        
        // Text
        'on-surface': '#ffffff',
        'on-surface-variant': '#a8a8a8',
        
        // Ghost Border
        'outline-variant': 'rgba(255, 255, 255, 0.15)',
      },
      boxShadow: {
        'glass': '0 0 40px rgba(0, 0, 0, 0.3)',
        'ambient': '0 40px 80px rgba(255, 255, 255, 0.06)',
      }
    }
  }
}
```
