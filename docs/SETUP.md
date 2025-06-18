# Setup Guide

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

3. **For development**
   ```bash
   # Use a local server for better development experience
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have it installed)
   npx serve .
   ```

## Customization

### Adding New Images
1. Place images in `assets/images/`
2. Update HTML references
3. Optimize images for web (recommended: WebP format)

### Modifying Colors
1. Edit CSS custom properties in `assets/css/styles.css`
2. Look for `:root` and `[data-theme="dark"]` sections
3. Update color variables as needed

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `assets/css/styles.css`
3. Add any necessary JavaScript in `assets/js/index.js`

## File Structure Details

- **index.html**: Main HTML file with semantic structure
- **assets/css/styles.css**: All styling including responsive design
- **assets/js/index.js**: JavaScript for interactivity and animations
- **assets/images/**: All image assets
- **docs/**: Documentation files

## Performance Optimization

- Images are optimized and properly sized
- CSS uses efficient selectors
- JavaScript is minimal and optimized
- Font loading is optimized with font-display

## Browser Testing

Test the website on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Chrome Mobile)
- Tablet devices
- Different screen sizes and orientations