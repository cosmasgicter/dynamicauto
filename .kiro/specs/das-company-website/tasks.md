# Implementation Plan: DAS Company Website

## Overview

Build the DAS company website as a Next.js 15 App Router application with Bun, Tailwind CSS v4, and Framer Motion. Implementation follows a bottom-up approach: project scaffolding → shared utilities and data → layout shell → individual pages → interactivity → SEO → optimization. All images from `das-images/` are copied to `public/images/` during setup.

## Tasks

- [x] 1. Project scaffolding and configuration
  - [x] 1.1 Initialize Next.js 15 project with Bun and configure Tailwind CSS v4
    - Run `bunx create-next-app@latest` with App Router, TypeScript, Tailwind CSS, ESLint
    - Install dependencies: `framer-motion`
    - Configure `tailwind.config.ts` with DAS brand colors (dark navy `#1a2332`, red/orange accent `#e63946`), mobile-first breakpoints (768px, 1024px)
    - Configure `next.config.ts` with image optimization settings (WebP, responsive sizes)
    - _Requirements: 1.6, 7.3_
  - [x] 1.2 Copy image assets and create image mapping constants
    - Copy all 20 images from `das-images/` to `public/images/`
    - Create `src/lib/constants.ts` with `IMAGE_ASSETS` record mapping logical names to file paths as defined in the design
    - Add `NAV_LINKS` array, `SERVICES` data array (all 7 services with id, title, descriptions, features, image paths), and `TEAM_MEMBERS` array
    - _Requirements: 9.1, 9.2, 9.3, 9.4_
  - [x] 1.3 Set up global styles and CSS animation utilities
    - Configure `src/styles/globals.css` with Tailwind directives, custom CSS keyframes for scroll-reveal (`fadeInUp`, `fadeIn`), mobile drawer slide animation, and `prefers-reduced-motion` media query to disable all animations
    - _Requirements: 7.1, 7.5_

- [x] 2. Shared components and utilities
  - [x] 2.1 Create CTAButton and SectionHeading shared components
    - Build `src/components/shared/CTAButton.tsx` with `primary` (red/orange bg, white text) and `secondary` (outlined) variants, `sm`/`md`/`lg` sizes, supporting both `href` (renders `<a>`) and `onClick` (renders `<button>`)
    - Build `src/components/shared/SectionHeading.tsx` for consistent section titles
    - _Requirements: 10.4, 1.6_
  - [x] 2.2 Create ImageWithFallback component
    - Build `src/components/ui/ImageWithFallback.tsx` wrapping Next.js `<Image>` with `onError` handler that swaps to a branded DAS logo placeholder
    - _Requirements: 4.5, 9.5_
  - [x] 2.3 Create ScrollReveal wrapper component
    - Build `src/components/shared/ScrollReveal.tsx` as a client component using `IntersectionObserver` to apply CSS `opacity` + `translateY` transitions when elements enter the viewport
    - Respect `prefers-reduced-motion` by checking `window.matchMedia` and skipping animation
    - _Requirements: 2.3, 7.1, 7.5_
  - [x] 2.4 Create TrustIndicators component
    - Build `src/components/shared/TrustIndicators.tsx` displaying stat counters (75+ years experience, vehicles serviced, certifications) with CSS count-up animation on scroll
    - _Requirements: 2.6, 10.5_
  - [x] 2.5 Create contact form validation utilities
    - Build `src/lib/validation.ts` with the `contactFormSchema` validation rules and a `validateField` / `validateForm` function as defined in the design data models
    - _Requirements: 6.2, 6.4_
  - [ ]* 2.6 Write property test for contact form validation
    - **Property 1: Valid inputs pass validation**
    - *For any* contact form data with name (2+ chars), valid email, valid phone (7-20 digit chars), non-empty service interest, and message (10-2000 chars), `validateForm` should return zero errors
    - **Validates: Requirements 6.2, 6.4**
  - [ ]* 2.7 Write property test for contact form validation — invalid inputs
    - **Property 2: Invalid inputs produce field-specific errors**
    - *For any* contact form data where at least one field violates its validation rule, `validateForm` should return a non-empty errors object containing an error message for each invalid field
    - **Validates: Requirements 6.4**

- [x] 3. Layout shell (Header, Footer, MobileDrawer)
  - [x] 3.1 Build Header component with responsive navigation
    - Create `src/components/layout/Header.tsx` as a server component shell with DAS logo and desktop nav links (Home, About, Services, Fleet Management, Contact)
    - Fixed position via `sticky top-0 z-50`, background opacity transition on scroll
    - Desktop: horizontal links | Mobile (<768px): hamburger icon button
    - _Requirements: 1.1, 1.5, 9.2_
  - [x] 3.2 Build MobileDrawer client component
    - Create `src/components/layout/MobileDrawer.tsx` with `"use client"` directive
    - Slide-in from right using CSS `transform: translateX()` transition within 300ms
    - Vertical nav links, close button, backdrop click to close, Escape key to close
    - Focus trap within drawer when open for accessibility
    - _Requirements: 1.2, 1.3_
  - [x] 3.3 Build Footer component
    - Create `src/components/layout/Footer.tsx` with contact info (phone, email, address, hours), quick nav links, social media icon links, DAS logo, and copyright
    - _Requirements: 1.4_
  - [x] 3.4 Wire layout shell into root layout
    - Update `src/app/layout.tsx` to include Header, Footer, and StickyMobileCTA
    - Set base HTML metadata, font loading, and global styles import
    - _Requirements: 1.1, 1.4_

- [x] 4. Checkpoint — Layout shell
  - Ensure the layout renders correctly on desktop and mobile viewports. Ensure all tests pass, ask the user if questions arise.

- [x] 5. Homepage implementation
  - [x] 5.1 Build HeroSection component
    - Create `src/components/home/HeroSection.tsx` with full-width background image (`heroBackground`), CSS gradient overlay, headline ("75+ Years of Cumulative Automotive Expertise"), tagline, and primary CTA button above the fold
    - _Requirements: 2.1, 10.1_
  - [x] 5.2 Build ServicesOverview component with ServiceCard
    - Create `src/components/services/ServiceCard.tsx` with image, title, short description, and link
    - Create `src/components/home/ServicesOverview.tsx` rendering a grid of ServiceCards (2 cols mobile, 3 cols desktop) from the `SERVICES` constant data
    - _Requirements: 2.2, 4.1_
  - [x] 5.3 Build WhyChooseDAS and HomeCTA components
    - Create `src/components/home/WhyChooseDAS.tsx` with 4-column grid (expertise, quality, trust, fleet specialization) with icons
    - Create `src/components/home/HomeCTA.tsx` with two CTA sections for quote request and appointment booking
    - _Requirements: 2.4, 2.5_
  - [x] 5.4 Build Testimonials component
    - Create `src/components/home/Testimonials.tsx` displaying client testimonials in a grid/carousel with quote text, client name, and company
    - _Requirements: 2.6_
  - [x] 5.5 Assemble homepage page.tsx
    - Wire `src/app/page.tsx` composing HeroSection, ServicesOverview, WhyChooseDAS, TrustIndicators, Testimonials, HomeCTA with ScrollReveal wrappers
    - Ensure mobile-first vertical stacking with Responsive_Layout
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 10.1, 10.5_

- [x] 6. About page implementation
  - [x] 6.1 Build CompanyStory and TeamSection components
    - Create `src/components/about/CompanyStory.tsx` with DAS company story, mission statement, core values, and prominent 75+ years experience callout
    - Create `src/components/about/TeamSection.tsx` rendering Team_Card components with team member photos, names, and roles from `TEAM_MEMBERS` data, animated into view with ScrollReveal
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 9.3_
  - [x] 6.2 Assemble About page
    - Wire `src/app/about/page.tsx` composing CompanyStory, TeamSection, and a CTA section encouraging contact
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [x] 7. Services page implementation
  - [x] 7.1 Build ServiceDetail component
    - Create `src/components/services/ServiceDetail.tsx` with service description, features list, relevant image from `das-images/`, and CTA to request a quote
    - _Requirements: 4.3, 4.4_
  - [x] 7.2 Assemble Services overview page
    - Wire `src/app/services/page.tsx` listing all 7 DAS services with ServiceCard grid linking to anchor sections, and ServiceDetail sections for each service with images from `IMAGE_ASSETS`
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 8. Fleet Management page implementation
  - [x] 8.1 Assemble Fleet Management page
    - Wire `src/app/fleet-management/page.tsx` with fleet service descriptions (maintenance scheduling, cost tracking, fleet diagnostics), relevant fleet images, business benefits section (cost savings, reduced downtime, dedicated account management), and dedicated business inquiry CTA
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 10.1_

- [x] 9. Contact page and form implementation
  - [x] 9.1 Build ContactForm client component with Server Action
    - Create `src/components/contact/ContactForm.tsx` with `"use client"` directive
    - Implement form fields: name, email, phone, service interest dropdown (from SERVICES), message textarea
    - Use `useActionState` with a Next.js Server Action for submission
    - Inline validation on blur using `validateField` from `lib/validation.ts`
    - Handle states: idle, submitting, success (confirmation message), error (retain form data, show error)
    - _Requirements: 6.2, 6.3, 6.4, 6.5_
  - [x] 9.2 Create contact form Server Action and API route
    - Create the Server Action in `src/app/contact/actions.ts` that validates form data server-side using `validateForm`, processes the submission, and returns success/error state
    - Create `src/app/api/contact/route.ts` as a POST endpoint for the contact form (optional API fallback)
    - _Requirements: 6.3, 6.5_
  - [x] 9.3 Build ContactInfo and MapEmbed components
    - Create `src/components/contact/ContactInfo.tsx` with phone (click-to-call `tel:`), email (click-to-email `mailto:`), address, operating hours using semantic `<address>` HTML
    - Create `src/components/contact/MapEmbed.tsx` with lazy-loaded Google Maps iframe using IntersectionObserver
    - _Requirements: 6.1, 6.6, 6.7_
  - [x] 9.4 Assemble Contact page
    - Wire `src/app/contact/page.tsx` composing ContactInfo, ContactForm, and MapEmbed
    - Ensure mobile layout shows click-to-call and click-to-email links prominently
    - _Requirements: 6.1, 6.2, 6.3, 6.6, 6.7_

- [x] 10. Checkpoint — All pages complete
  - Verify all 5 pages render correctly (Home, About, Services, Fleet Management, Contact). Verify contact form validation works. Ensure all tests pass, ask the user if questions arise.

- [x] 11. StickyMobileCTA and contextual CTA
  - [x] 11.1 Build StickyMobileCTA component
    - Create `src/components/shared/StickyMobileCTA.tsx` as a client component with fixed bottom bar on mobile (<768px) showing "Contact Us" button
    - Appears after scrolling past hero section using IntersectionObserver, hidden on desktop
    - _Requirements: 10.2_
  - [x] 11.2 Add contextual CTA on service pages
    - Add logic to Services and Fleet Management pages to show a contextual CTA after 50% scroll using IntersectionObserver on a midpoint sentinel element
    - _Requirements: 10.3_

- [x] 12. SEO and metadata
  - [x] 12.1 Create SEO metadata helpers and JSON-LD schemas
    - Build `src/lib/metadata.ts` with helper functions generating unique `Metadata` objects per page (title, description, Open Graph tags with images)
    - Build `src/lib/schemas.ts` with `generateLocalBusinessSchema()` returning JSON-LD `AutoRepair` structured data
    - _Requirements: 8.1, 8.2, 8.6_
  - [x] 12.2 Add metadata exports to all page files
    - Add `generateMetadata` or static `metadata` exports to each `page.tsx` (Home, About, Services, Fleet Management, Contact) with unique titles, descriptions, and OG images
    - Embed JSON-LD `<script type="application/ld+json">` in root layout or per-page
    - _Requirements: 8.1, 8.2, 8.3, 8.6_
  - [x] 12.3 Create sitemap.ts and robots.ts
    - Create `src/app/sitemap.ts` exporting a `sitemap()` function listing all public page URLs
    - Create `src/app/robots.ts` exporting a `robots()` function allowing all crawlers on all public pages
    - _Requirements: 8.4, 8.5_

- [x] 13. Performance optimization
  - [x] 13.1 Implement lazy loading and dynamic imports
    - Ensure all below-fold images use `loading="lazy"` via Next.js `<Image>` component
    - Use `next/dynamic` with `ssr: false` for non-critical client components (MapEmbed, Testimonials carousel, Framer Motion wrappers)
    - _Requirements: 7.2, 7.6_
  - [x] 13.2 Verify image optimization and reduced motion support
    - Confirm all images render via Next.js `<Image>` with responsive `sizes` attribute and WebP format
    - Confirm `prefers-reduced-motion` media query disables all CSS animations and ScrollReveal skips animation
    - Confirm all images have descriptive `alt` text
    - _Requirements: 7.3, 7.5, 9.5_

- [x] 14. Final checkpoint — Full integration
  - Verify all pages, navigation, contact form, SEO metadata, sitemap, robots.txt, image fallbacks, mobile drawer, sticky CTA, and scroll animations work end-to-end. Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate contact form validation logic which is the core testable business logic
- All images use the `ImageWithFallback` component for graceful error handling
- CSS animations are preferred over JS animations for performance on low-end devices
