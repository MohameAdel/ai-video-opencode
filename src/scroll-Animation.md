# Framer Motion Neon Chevron Wave Animation Prompt

## Animation Description

The animation features a sequence of neon blue chevrons (arrowheads) against a dark background. The core effect is a "wave" of luminosity that travels from left to right across the chevrons. Each chevron individually pulses from a dimmed state to a peak brightness with an intense glow, and then back to a dimmed state. This pulsing is staggered, creating a smooth, continuous flow that gives the impression of forward momentum or a scanning light. The animation is seamlessly looped, providing an infinite rhythmic cycle.

## Implementation Details for Next.js with Framer Motion

### Goal

Implement the described neon chevron wave animation on a Next.js landing page using Framer Motion for animation and Tailwind CSS for styling.

### Technical Requirements

1.  **Next.js Application:** The animation should be integrated into a Next.js application.
2.  **Framer Motion:** Utilize Framer Motion for all animation logic.
3.  **Tailwind CSS:** Use Tailwind CSS for styling, including the neon glow effect.
4.  **SVG for Chevrons:** Each chevron should be an SVG element to ensure scalability and crisp rendering.

### Component Structure

#### 1. `Chevron` Component (e.g., `components/Chevron.tsx`)

*   This component will render a single SVG chevron.
*   It should accept `custom` props (for stagger index) and `variants` from Framer Motion.
*   The SVG path should define a simple chevron shape (e.g., `M5 5L35 30L5 55`).
*   Initial styling for the neon glow should be applied using Tailwind CSS `drop-shadow` for performance, with the `stroke` color set to a vibrant blue (e.g., `#3b82f6` - Tailwind's `blue-500`).

```tsx
// Example structure for Chevron.tsx
import { motion } from 'framer-motion';

interface ChevronProps {
  custom: number;
  variants: any; // Define more specific type if possible
}

const Chevron = ({ custom, variants }: ChevronProps) => (
  <motion.svg
    width="40"
    height="60"
    viewBox="0 0 40 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    custom={custom}
    variants={variants}
    initial="initial"
    animate="animate"
    className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" // Tailwind for initial glow
  >
    <path
      d="M5 5L35 30L5 55"
      stroke="#3b82f6" // Blue-500
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export default Chevron;
```

#### 2. `NeonArrowSequence` Component (e.g., `components/NeonArrowSequence.tsx` or directly in a page)

*   This component will act as the container for multiple `Chevron` components.
*   It should render a configurable number of chevrons (e.g., 10-12).
*   It will define the Framer Motion `variants` for the animation.
*   The container should be styled with Tailwind CSS to center the chevrons and provide a dark background.

```tsx
// Example structure for NeonArrowSequence.tsx
import { motion } from 'framer-motion';
import Chevron from './Chevron'; // Assuming Chevron.tsx is in the same directory

const chevronVariants = {
  initial: { 
    opacity: 0.2, 
    filter: "brightness(0.5) blur(1px)" 
  },
  animate: (i: number) => ({
    opacity: [0.2, 1, 0.2], // Pulse opacity
    filter: [
      "brightness(0.5) blur(1px)", 
      "brightness(1.5) blur(0px)", 
      "brightness(0.5) blur(1px)"
    ], // Pulse glow effect
    transition: {
      duration: 2, // Duration of one full pulse cycle
      repeat: Infinity, // Loop indefinitely
      delay: i * 0.15, // Staggered delay for wave effect
      ease: "easeInOut", // Smooth easing
    },
  }),
};

export default function NeonArrowSequence() {
  const arrowCount = 10; // Number of chevrons
  return (
    <div className="flex items-center justify-center bg-black h-48 w-full gap-2">
      {[...Array(arrowCount)].map((_, i) => (
        <Chevron key={i} custom={i} variants={chevronVariants} />
      ))}
    </div>
  );
}
```

### Framer Motion Specifics

*   **`motion.svg`:** Use this for animating the SVG elements.
*   **`variants`:** Define `initial` and `animate` states within a `variants` object for cleaner animation management.
*   **`custom` prop:** Pass the index (`i`) of each chevron as a `custom` prop to the `motion.svg` component. This allows the `animate` variant to access the index and calculate a unique `delay` for each chevron, creating the staggered wave effect.
*   **`transition` properties:**
    *   `duration`: Set to control the speed of each chevron's pulse.
    *   `repeat: Infinity`: Ensure the animation loops continuously.
    *   `delay`: Crucial for the staggered effect. Calculate as `i * some_small_value` (e.g., `i * 0.15`).
    *   `ease`: Use a smooth easing function like `easeInOut`.
*   **Keyframes:** Use array values for `opacity` and `filter` within the `animate` variant to define the pulse (e.g., `[0.2, 1, 0.2]` for opacity and corresponding values for `filter`).

### Styling and Performance Considerations

*   **Neon Glow:** While `filter: blur()` can create a glow, it can be performance-intensive. Prioritize using Tailwind's `drop-shadow` utility classes for a performant glow effect. If a more dynamic glow is required, consider animating `box-shadow` or `drop-shadow` properties if possible, or carefully animating `filter` with performance in mind.
*   **Responsiveness:** Ensure the container and SVG elements are responsive. Use flexible layouts (e.g., `flex-wrap` if needed) and relative units or `viewBox` scaling for the SVG to adapt to different screen sizes.
*   **Color Customization:** The blue color should be easily customizable to match brand guidelines.

### Deliverables

Provide the complete React/Next.js code for the `Chevron` and `NeonArrowSequence` components, 