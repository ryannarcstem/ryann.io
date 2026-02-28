# Meridian

A fully functional, responsive e-commerce and blog website built with HTML, CSS, and JavaScript. Features a distinctive, elegant design with a refined aesthetic using Playfair Display and Work Sans typography.

## Features

### E-Commerce Functionality
- Product catalog with filtering by category
- Sorting options (price, name)
- Shopping cart with local storage persistence
- Add/remove items from cart
- Quantity management
- Cart summary with total calculation
- Responsive product grid

### Blog Section
- Featured blog post
- Blog post grid
- Category and date metadata
- Beautiful image layouts

### Design Features
- Distinctive typography (Playfair Display + Work Sans)
- Smooth animations and transitions
- Responsive design for all devices
- Mobile-friendly navigation
- Scroll effects
- Newsletter subscription
- Clean, minimalist aesthetic

## File Structure

```
meridian-website/
│
├── index.html          # Homepage
├── shop.html           # Products catalog page
├── blog.html           # Blog posts page
├── cart.html           # Shopping cart page
├── about.html          # About page
├── styles.css          # All CSS styles
├── script.js           # All JavaScript functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, animations
- **JavaScript (ES6+)** - Interactive functionality
- **Local Storage** - Cart persistence
- **Google Fonts** - Playfair Display & Work Sans

## How to Deploy on GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name your repository (e.g., `meridian-ecommerce`)
   - Make it public
   - Don't initialize with README

2. **Upload your files:**
   - Click "uploading an existing file"
   - Drag and drop all your files (HTML, CSS, JS)
   - Commit the changes

3. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Scroll to "Pages" section (left sidebar)
   - Under "Source", select "main" branch
   - Click Save
   - Your site will be live at: `https://yourusername.github.io/repositoryname/`

### Method 2: Using Git Command Line

1. **Initialize your local repository:**
```bash
cd your-project-folder
git init
git add .
git commit -m "Initial commit"
```

2. **Connect to GitHub:**
```bash
git remote add origin https://github.com/yourusername/repositoryname.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Follow step 3 from Method 1 above

## Deployment Checklist

Before deploying, ensure:

- [ ] All file paths are relative (no absolute paths)
- [ ] All files are in the root directory
- [ ] index.html is in the root (this is your homepage)
- [ ] No spaces in filenames
- [ ] All links between pages work correctly
- [ ] Images load properly (using external URLs or uploaded images)

## Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #2c2416;    /* Main dark color */
    --color-secondary: #8b7355;  /* Secondary brown */
    --color-accent: #c9a96e;     /* Gold accent */
    --color-light: #f5f1eb;      /* Light background */
    /* ... */
}
```

### Adding Products

Edit the `products` array in `script.js`:

```javascript
{
    id: 13,
    name: "Your Product Name",
    category: "furniture", // or "lighting", "decor", "textiles"
    price: 299,
    image: "your-image-url.jpg",
    featured: false,
    badge: "New" // optional
}
```

### Adding Blog Posts

Edit the `blogPosts` array in `script.js`:

```javascript
{
    id: 7,
    title: "Your Blog Post Title",
    excerpt: "A brief excerpt of your post...",
    date: "March 20, 2024",
    category: "Lifestyle",
    image: "your-image-url.jpg",
    featured: false
}
```

### Changing Fonts

Replace the Google Fonts link in all HTML files:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

Then update the CSS variables:

```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize images**: Use compressed images (recommended: WebP format)
2. **Lazy loading**: Already implemented for images
3. **Minimize CSS/JS**: Use minification tools before production
4. **CDN**: Consider using a CDN for fonts and images

## Features to Add (Future Enhancements)

- [ ] Product detail pages
- [ ] User authentication
- [ ] Payment integration (Stripe/PayPal)
- [ ] Search functionality
- [ ] Product reviews
- [ ] Wishlist feature
- [ ] Order history
- [ ] Backend integration
- [ ] Database for products
- [ ] Admin panel

## Known Limitations (Static Site)

Since this is a static website hosted on GitHub Pages:

- No real payment processing
- No user accounts/login
- Cart data stored in browser (not synced across devices)
- No order management
- No backend database

For full e-commerce functionality, you would need:
- Backend server (Node.js, Python, etc.)
- Database (MongoDB, PostgreSQL, etc.)
- Payment gateway integration
- Hosting with backend support (Heroku, AWS, etc.)

## Troubleshooting

**Issue: Site not loading on GitHub Pages**
- Ensure index.html is in the root directory
- Check that GitHub Pages is enabled in repository settings
- Wait 2-5 minutes after enabling GitHub Pages

**Issue: Images not loading**
- Verify image URLs are correct
- Check if external image sources allow hotlinking
- Consider uploading images to your repository

**Issue: Cart not working**
- Check browser console for errors
- Ensure JavaScript is enabled
- Clear browser cache and local storage

**Issue: Styling looks broken**
- Verify styles.css path is correct
- Check for CSS syntax errors
- Ensure Google Fonts are loading

## License

This project is open source and available for personal and commercial use.

## Credits

- **Design & Development**: Created with Claude
- **Fonts**: Google Fonts (Playfair Display, Work Sans)
- **Images**: Unsplash (placeholder images)

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the code comments
3. Open an issue on GitHub

## Live Demo

After deployment, your site will be available at:
`https://yourusername.github.io/repositoryname/`

---

**Happy selling!** 🛍️✨

For more information about GitHub Pages, visit: https://pages.github.com/
