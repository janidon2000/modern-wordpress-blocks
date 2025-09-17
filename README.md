# modern-wordpress-blocks
Custom WP Blocks for Crowd Favorite

# Modern WordPress Blocks

A collection of custom **Gutenberg blocks** built with **React, PHP, and modern CSS techniques** (Grid, Flexbox, custom properties, container queries).  
This repository showcases my approach to building **responsive, accessible, and scalable components** for enterprise WordPress projects.

---

## Blocks Included

### 1. Testimonial Grid
- Responsive **CSS Grid** layout.
- Dynamically adapts to **container size** (not just viewport).
- Editable via block editor with name, text, and photo fields.
- Uses `clamp()` for fluid typography and CSS variables for colors.

### 2. Feature Card
- Built with **Flexbox** and modern CSS.
- Supports image, title, description, and CTA button.
- **Micro-interactions** for hover states.
- Reusable and mobile-first design.

### 3. Pricing Table
- Structured with semantic table roles for accessibility.
- Uses **CSS custom properties** for theming (light/dark mode).
- Fully responsive and WCAG 2.1 AA compliant.
- Example of component-driven block development.

---

## Tech Stack

- WordPress Gutenberg (React + PHP block registration)
- Modern CSS (Grid, Flexbox, Custom Properties, Container Queries)
- SCSS Preprocessing
- Webpack/Vite for bundling
- Accessibility (ARIA roles, WCAG compliance)

---

## Getting Started

Clone this repo into your WordPress `plugins` folder:

```bash
git clone https://github.com/yourusername/modern-wordpress-blocks.git wp-content/plugins/modern-wordpress-blocks
cd modern-wordpress-blocks
npm install
npm run build
