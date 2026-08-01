# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-08-01

### Added
- ✨ **Multi-page Architecture:** Created fully responsive routes for Home, About, Menu, Lodging, Gallery, and Contact pages.
- 🖼️ **Dynamic Gallery:** Implemented a masonry image grid with a lightbox viewer fetching images from local assets.
- 🍽️ **Restaurant Menu:** Built a categorized menu with veg/non-veg toggles, search functionality, and detailed dish modals.
- 🌐 **Marathi Content:** Integrated authentic, localized Marathi copywriting across all pages.
- ⭐ **Google Reviews Section:** Added an automated, visually stunning masonry grid for displaying customer reviews.
- 🔍 **SEO Optimization:** Integrated React Helmet Async and dynamic JSON-LD structured data for local search visibility.
- 📱 **Mobile UX:** Implemented a floating action bar, bottom sheets, and centered mobile navigation for optimal touch interactions.

### Changed
- 🎨 **Brand Identity:** Updated design system to use the signature Red, White, Gold, and Charcoal color palette.
- 🚀 **Performance:** Replaced stock images with optimized local `.png` and `.webp` assets, saving significant bandwidth.

### Fixed
- 🐛 **Scroll Behavior:** Implemented a global `ScrollToTop` component to fix the issue where navigating to new pages maintained the previous scroll position.
- 🐛 **Vite Config:** Resolved a Node.js `__dirname` deprecation warning by utilizing `import.meta.dirname`.
