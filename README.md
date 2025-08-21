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
- [Tour Packages](#tour-packages)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anukiw2002/JAKTravels.git
   cd JAKTravels
   ```

2. **For local development (optional):**
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server
   
   # Or using live-server for development
   npx live-server
   ```

3. **Access the website:**
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
- **💬 Live Chat Integration** - Instant customer support
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

### Features & Integrations
- **Responsive Design** - Mobile-first approach
- **CSS Animations** - Smooth transitions and scroll effects
- **Intersection Observer API** - Scroll-triggered animations
- **Google Analytics** - Visitor tracking and insights
- **Formspree** - Contact form handling
- **Social Media Integration** - Open Graph and Twitter Cards

### Deployment
- **GitHub Pages** - Static site hosting
- **Jekyll** - Static site generator
- **Custom Domain** - jaktravels.lk

## Tour Packages

### Available Packages

1. **🏛️ Classic Sri Lanka Tour**
   - Duration: 9-12 days
   - Highlights: Cultural heritage sites, ancient temples, colonial architecture
   - Price: Starting from $1,200 USD

2. **🦎 Wildlife & Nature Tour**
   - Duration: 10 days
   - Highlights: National parks, leopard tracking, elephant gathering, bird watching
   - Price: Starting from $1,500 USD

3. **🏖️ East Coast Adventure**
   - Duration: 8 days
   - Highlights: Pristine beaches, surfing, wildlife camping, coastal culture
   - Price: Starting from $1,000 USD

4. **🚴 Cycling & Camping Adventure**
   - Duration: 9 days
   - Highlights: Scenic cycling routes, camping experiences, diverse landscapes
   - Price: Starting from $900 USD

5. **🎨 Custom Adventure**
   - Duration: Flexible
   - Highlights: Personalized itineraries based on preferences
   - Price: Varies based on requirements

### Package Features
- **🏨 Luxury Accommodations** - Carefully selected hotels and resorts
- **🚗 Private Transportation** - Air-conditioned vehicles with professional drivers
- **👨‍🏫 Expert Guides** - English-speaking local guides with extensive knowledge
- **🍽️ Authentic Cuisine** - Traditional Sri Lankan meals and cultural dining experiences
- **🎫 All Inclusions** - Entrance fees, permits, and activity costs covered
- **🛡️ Safety First** - Comprehensive insurance and safety protocols

## Usage

### For Visitors
1. **Browse Packages** - Explore available tour options on the Tours page
2. **View Destinations** - Discover Sri Lankan attractions and activities
3. **Read Testimonials** - Check reviews from previous travelers
4. **Contact Us** - Get in touch for inquiries or custom requests
5. **Book Tours** - Use the booking forms to reserve your adventure

### Navigation Structure
- **Home** - Welcome page with overview and highlights
- **About Us** - Company information and mission
- **Tours** - Complete tour package listings
- **Destinations** - Popular Sri Lankan destinations
- **Testimonials** - Customer reviews and experiences
- **Contact Us** - Contact information and inquiry forms

### Key Features Usage
- **Interactive Booking Forms** - Fill out preferences for custom tours
- **Gallery Browsing** - View high-quality destination and experience photos
- **Mobile Navigation** - Hamburger menu for mobile-friendly browsing
- **Live Chat** - Instant communication with customer service

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

### Local Development
```bash
# Clone the repository
git clone https://github.com/Anukiw2002/JAKTravels.git

# Navigate to project directory
cd JAKTravels

# Start local server
python -m http.server 8000

# Access at http://localhost:8000
```

## Contributing

We welcome contributions to improve the JAK Travels website. Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/improvement`)
3. **Make your changes** with proper testing
4. **Commit your changes** (`git commit -am 'Add new feature'`)
5. **Push to the branch** (`git push origin feature/improvement`)
6. **Create a Pull Request**

### Development Guidelines
- Maintain responsive design principles
- Follow existing code style and structure
- Test across multiple browsers and devices
- Optimize images and assets for web
- Ensure accessibility standards compliance

## Contact

**JAK Travels**
- **Website:** [jaktravels.lk](https://jaktravels.lk)
- **Phone:** +94-705924395
- **Email:** info@jaktravels.lk
- **Address:** Sri Lanka

### Business Hours
- **Monday - Friday:** 9:00 AM - 6:00 PM (Sri Lankan Time)
- **Saturday:** 9:00 AM - 4:00 PM (Sri Lankan Time)
- **Sunday:** Available for emergencies

### Social Media
- **Facebook:** [JAK Travels Facebook](https://www.facebook.com/jaktravels)
- **Instagram:** [JAK Travels Instagram](https://www.instagram.com/jaktravels)

---

**Experience the magic of Sri Lanka with JAK Travels - Where every journey becomes an unforgettable story.**