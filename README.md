# JAK Travels - Authentic Sri Lankan Travel Experiences

JAK Travels is a comprehensive travel agency website specializing in authentic Sri Lankan tourism experiences. We offer expertly curated tours featuring cultural heritage sites, wildlife safaris, pristine beaches, and mountain adventures with customized itineraries and local insights.

## Description

JAK Travels is your gateway to discovering the vibrant heart of Sri Lanka. Our website provides a complete platform for travelers to explore and book immersive journeys that reveal the hidden treasures and timeless wonders of the beautiful island nation. From ancient cultural sites to pristine beaches, from misty mountains to wildlife sanctuaries, we curate experiences that capture the essence of Sri Lanka's magic.

The website features a modern, responsive design with smooth animations, interactive elements, and comprehensive tour packages that cater to various travel preferences and budgets.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Deployment](#deployment)

## Installation

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anukiw2002/JAKTravels.git
   cd JAKTravels
   ```
2. **Access the website:**
   - Open `index.html` directly in your browser, or
   - Navigate to `http://localhost:8000` if using a local server

### GitHub Pages Deployment
The website is configured for GitHub Pages deployment:
- Domain: `jaktravels.lk`
- Deployed via Jekyll with custom domain configuration
- Automatic deployment from the main branch

## Features

### Core Website Features
- **📱 Responsive Design** - Optimized for all devices and screen sizes
- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **⚡ Fast Loading** - Optimized images and efficient code structure
- **🔍 SEO Optimized** - Complete meta tags, structured data, and social media integration
- **📊 Analytics Integration** - Google Analytics for visitor tracking

### Travel Services Features
- **🏝️ Comprehensive Tour Packages** - Pre-designed tours for different interests
- **🎯 Custom Tour Planning** - Personalized itinerary creation
- **📋 Interactive Booking Forms** - Easy-to-use reservation system
- **🗺️ Interactive Maps** - Route visualization and destination mapping
- **📸 Rich Media Gallery** - High-quality images and visual content
- **💬 Customer Testimonials** - Real feedback from previous travelers
- **📞 24/7 Support** - Dedicated customer service contact options

### User Experience Features
- **🎭 Smooth Animations** - Scroll-triggered reveals and interactive elements
- **📱 Mobile-First Design** - Optimized mobile experience
- **🌐 Multi-page Navigation** - Intuitive site structure
- **🔄 Dynamic Content Loading** - Efficient page rendering

## Project Structure

```
JAKTravels/
├── index.html                 # Main landing page
├── styles.css                # Global styles
├── script.js                 # Main JavaScript functionality
├── _config.yml               # Jekyll configuration
├── CNAME                     # Custom domain configuration
│
├── css/                      # Stylesheets
│   ├── navbar.css
│   ├── hero.css
│   ├── landing-packages.css
│   ├── landing-gallery.css
│   ├── destinations.css
│   ├── testimonials.css
│   ├── packages.css
│   ├── custom.css
│   └── ...
│
├── js/                       # JavaScript files
│   ├── landing-welcome.js
│   ├── landing-packages.js
│   ├── landing-gallery.js
│   ├── packages.js
│   ├── chat.js
│   └── ...
│
├── html/                     # Page templates
│   ├── about-us.html
│   ├── tours.html
│   ├── destinations.html
│   ├── testimonials.html
│   ├── contactUs.html
│   ├── navbar.html
│   ├── footer.html
│   ├── packages/             # Tour package pages
│   │   ├── classic.html
│   │   ├── custom.html
│   │   ├── wildlife.html
│   │   ├── east coast.html
│   │   └── cycling and camping.html
│   └── destinations/         # Destination-specific pages
│
└── images/                   # Image assets
    ├── Hero images/
    ├── Package images/
    ├── Destination photos/
    └── UI elements/
```

## Technology Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality and animations
- **Font Awesome** - Icon library for UI elements
- **Google Fonts** - Typography (Poppins, Inter)

### Deployment
- **GitHub Pages** - Static site hosting
- **Jekyll** - Static site generator
- **Custom Domain** - jaktravels.lk

## Deployment

### GitHub Pages Setup
The website is deployed using GitHub Pages with the following configuration:

1. **Repository Settings**
   - Source: Deploy from main branch
   - Custom domain: jaktravels.lk
   - HTTPS enforcement enabled

2. **Jekyll Configuration** (_config.yml)
   ```yaml
   defaults:
     - scope:
         path: "**/*.mp4"
       values:
         video_type: "video/mp4"
   include: ["_*.mp4"]
   ```

3. **Domain Configuration** (CNAME)
   ```
   jaktravels.lk
   ```

---

**Experience the magic of Sri Lanka with JAK Travels - Where every journey becomes an unforgettable story.**
