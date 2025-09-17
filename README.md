# Modern WordPress Blocks

Custom Gutenberg blocks built with React, PHP, and modern CSS techniques (Grid, Flexbox, Custom Properties, Container Queries).

This project is a showcase of how I approach enterprise-grade WordPress development: responsive, accessible, reusable, and maintainable.

---

## Blocks Included

### 1. Testimonial Grid
- Responsive CSS Grid layout for client feedback  
- Dynamically adapts to container size (not just viewport)  
- Editable in Gutenberg (name, role, quote, avatar image)  
- Uses `clamp()` for fluid typography and CSS variables for theming  

### 2. Feature Grid
- Responsive grid/flexbox cards for skills and features  
- Supports icons/images, title, description, and CTA  
- Micro-interactions on hover (lift + shadow)  
- Scales fluidly — mobile-first, container-query aware  

### 3. Pricing Table
- Three-tier responsive pricing layout  
- Featured plan highlighted with accent color and scale  
- Uses semantic roles for accessibility  
- WCAG AA contrast, ARIA labels, keyboard-friendly  

### 4. FAQ Accordion
- Expand/collapse questions with keyboard + ARIA support  
- Vanilla JS frontend controller for accessible toggling  
- Smooth transitions, accent color for active state  

### 5. Hero CTA
- Two-column hero with image on one side, text + CTA buttons on other  
- Responsive `clamp()` typography, consistent dark theming  
- Pill-shaped buttons with brand accent color  
- Supports primary button (jump to section) and secondary button (WhatsApp contact)  

### 6. Content Slider
- Responsive carousel with Flexbox track + transform transitions  
- Prev/Next nav buttons (fixed size, accessible targets)  
- Slide content supports image, title, and readable description text  
- Larger body text for consistent legibility  

---

## Tech Stack

- WordPress Gutenberg (React, JSX, PHP block registration)  
- Modern CSS (Grid, Flexbox, Custom Properties, Container Queries)  
- SCSS preprocessing  
- Webpack / @wordpress/scripts build pipeline  
- Accessibility baked in (ARIA roles, WCAG 2.1 AA, semantic HTML)  

---

## Getting Started

Clone into your WordPress plugin directory:

```bash
git clone https://github.com/yourusername/modern-wordpress-blocks.git wp-content/plugins/modern-wordpress-blocks
cd wp-content/plugins/modern-wordpress-blocks
npm install
npm run build
