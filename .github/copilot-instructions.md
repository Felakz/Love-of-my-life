# Copilot Instructions for J&C Studios Website

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a modern React + TypeScript website for J&C Studios, a digital services company specializing in web development, logo design, video editing, visual identity, and technology consulting.

## Technology Stack
- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Fonts**: Inter (body) + Poppins (display)

## Design System
- **Color Palette**: 
  - Primary: Gold/Yellow (#f59e0b, #fbbf24, #fcd34d)
  - Secondary: Gray scales
  - Accent: Black, White
- **Typography**: Modern, clean, professional
- **Spacing**: Consistent spacing using Tailwind's system
- **Components**: Reusable, accessible, responsive

## Code Guidelines
1. **Components**: Use functional components with TypeScript
2. **Styling**: Tailwind CSS classes only
3. **Animations**: Framer Motion for smooth interactions
4. **Responsive**: Mobile-first approach
5. **Performance**: Optimize images and lazy load when possible
6. **Accessibility**: Include proper ARIA labels and semantic HTML

## File Structure
```
src/
├── components/          # Reusable UI components
├── sections/           # Page sections (Hero, Services, etc.)
├── assets/            # Static assets
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles + Tailwind imports
```

## Brand Guidelines
- **Tone**: Professional, creative, innovative
- **Style**: Modern, clean, premium
- **Target**: Businesses and entrepreneurs
- **Values**: Creativity, professionalism, quality, trust

## Common Patterns
- Use motion.div for animations
- Implement hover effects on interactive elements
- Gradient backgrounds and buttons
- Card-based layouts
- Consistent spacing and typography
- Mobile-responsive design patterns
