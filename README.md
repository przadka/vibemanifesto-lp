# Vibe Manifesto Landing Page

A minimalist, high-performance static landing page for **Vibe Manifesto**. This page displays the **Manifesto for Vibe Development** in a clean, readable format with a modern aesthetic.

## Features

- Minimalist & modern design with clean typography
- Fast-loading with no build tools or large assets
- Fully responsive design that works on mobile and desktop
- Dark mode toggle (uses system preference by default, remembers user choice)
- Semantic HTML for SEO and accessibility

## Tech Stack

- HTML, CSS, and vanilla JavaScript
- Tailwind CSS for styling (via CDN)
- Alpine.js for interactivity (dark mode toggle)
- Google Fonts (Inter and Space Grotesk)

## How to Update the Page

### Modifying Content

1. Open the `index.html` file
2. Find the content you want to update in the appropriate section:
   - Header information is in the `<header>` section
   - Manifesto content is in the `<main id="manifesto">` section
   - Footer information is in the `<footer>` section

### Styling Changes

- All styling is done using Tailwind CSS utility classes
- Custom styles are in the `<style>` section of the `index.html` file
- Tailwind configuration is in the `<script>` tag at the top of the HTML file

### JavaScript Functionality

- The core functionality is in the `script.js` file
- Dark mode toggle is handled by Alpine.js in the HTML

## Deployment

This site is designed to be deployed to GitHub Pages:

1. Push changes to the `main` branch of your repository
2. GitHub Pages will automatically build and deploy the site

## Local Development

To work on this site locally:

1. Clone the repository
2. Open the project folder in your code editor
3. You can view the site by opening `index.html` in a web browser
4. No build tools or package installation is required

## Repository Structure

```
vibemanifesto-lp/
├── index.html      # Main HTML file with content and structure
├── script.js       # JavaScript for additional functionality
└── README.md       # This documentation file
```

## License

© 2025 The Vibe Coding Manifesto Authors

This declaration may be freely copied in any form, but only in its entirety with this notice.
