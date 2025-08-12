# RECONFY - 3D Marketing Analytics Platform

A cutting-edge marketing website showcasing RECONFY's revolutionary 3D marketing analytics platform. Built with Next.js, Three.js, and Framer Motion for an immersive, interactive experience.

## 🚀 Features

### ✨ 3D Visualizations
- **Interactive 3D Logo**: Floating RECONFY logo with particle systems and geometric shapes
- **3D Dashboard Preview**: Interactive 3D charts and data visualizations
- **Floating Elements**: Background 3D shapes that respond to user interaction
- **Particle Systems**: Dynamic particle effects throughout the experience

### 🎨 Modern UI/UX
- **Glass Morphism**: Beautiful translucent elements with backdrop blur
- **Gradient Text**: Eye-catching gradient text effects
- **Smooth Animations**: Framer Motion-powered entrance and hover animations
- **Responsive Design**: Mobile-first approach with adaptive layouts

### 🔧 Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Three.js Integration**: WebGL-powered 3D graphics
- **Framer Motion**: Smooth animations and interactions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Poppins (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marketing-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
marketing-website/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main page component
├── components/                   # React components
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx      # Hero section with 3D logo
│   │   ├── FeaturesSection.tsx  # Features showcase
│   │   ├── DemoSection.tsx      # 3D dashboard demo
│   │   ├── PricingSection.tsx   # Pricing plans
│   │   ├── TestimonialsSection.tsx # Customer testimonials
│   │   └── CTASection.tsx       # Call-to-action section
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx           # Button component
│   │   └── LoadingSpinner.tsx   # Loading spinner
│   ├── Navigation.tsx           # Navigation bar
│   └── Footer.tsx               # Footer component
├── lib/                         # Utility functions
│   └── utils.ts                 # Class name utilities
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🎯 Key Components

### HeroSection
- Interactive 3D RECONFY logo
- Particle system background
- Geometric floating shapes
- Starfield effect
- Smooth scroll navigation

### FeaturesSection
- Grid of feature cards with 3D icons
- Hover animations and 3D rotations
- Background floating 3D elements
- Responsive grid layout

### DemoSection
- Interactive 3D dashboard preview
- Business metrics display
- Play button overlay
- Orbit controls for 3D interaction

### PricingSection
- 3D price cards with floating elements
- "Most Popular" badge
- Feature comparison
- Interactive hover effects

### TestimonialsSection
- Customer testimonial cards
- 3D background elements
- Star ratings
- Company information

### CTASection
- Email signup form
- Feature highlights
- Trust indicators
- Floating success metrics

## 🎨 Design System

### Colors
- **Primary**: Teal (#01a4b7, #018a9a)
- **Secondary**: Blue (#38bdf8, #0ea5e9)
- **Background**: Black (#000000)
- **Text**: White (#ffffff), Gray (#9ca3af)

### Typography
- **Display Font**: Poppins (Headings)
- **Body Font**: Inter (Body text)
- **Font Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Glass Morphism**: Translucent backgrounds with backdrop blur
- **Gradient Text**: Primary to secondary color gradients
- **3D Cards**: Interactive cards with perspective transforms
- **Floating Elements**: Subtle 3D background shapes

## 🚀 Performance Features

- **Lazy Loading**: Components load as they come into view
- **Optimized 3D**: Efficient Three.js rendering with proper cleanup
- **Smooth Animations**: Hardware-accelerated Framer Motion animations
- **Responsive Images**: Optimized for different screen sizes
- **Code Splitting**: Automatic Next.js code splitting

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive breakpoints
- **Touch Friendly**: Optimized for touch interactions
- **Adaptive Layouts**: Grid systems that adapt to screen size

## 🔧 Customization

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Follow the existing pattern for 3D elements and animations

### Modifying 3D Elements
- Edit the Three.js components in each section
- Adjust camera positions, lighting, and materials
- Modify animation speeds and intensities

### Styling Changes
- Update `tailwind.config.ts` for new colors or fonts
- Modify `app/globals.css` for custom CSS
- Use the existing design system classes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Environment Variables
No environment variables required for basic functionality.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Email: hello@reconfy.com
- Phone: +1 (555) 123-4567
- Location: San Francisco, CA

## 🙏 Acknowledgments

- **Three.js Community**: For the amazing 3D graphics library
- **Framer Motion**: For smooth animations and interactions
- **Tailwind CSS**: For the utility-first CSS framework
- **Next.js Team**: For the excellent React framework

---

**RECONFY** - Transforming marketing analytics through immersive 3D visualizations.

