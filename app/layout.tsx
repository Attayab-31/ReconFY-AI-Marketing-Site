import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import MobileDevHelper from '@/components/MobileDevHelper'
import MobileNetworkRecovery from '@/components/MobileNetworkRecovery'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'ReconFy - Intelligent Profit Calculation & Analytics Platform | Start Free Trial',
  description: 'ReconFy revolutionizes profit analysis with AI-powered calculations, real-time analytics, and subscription management. Process POS data, track commissions, and optimize profits with our comprehensive SaaS platform. Start your 7-day free trial today.',
  keywords: [
    'profit calculation',
    'profit analysis',
    'commission tracking',
    'POS data processing',
    'business analytics',
    'profit optimization',
    'subscription management',
    'SaaS platform',
    'business intelligence',
    'financial analytics',
    'profit margins',
    'business operations',
    'data visualization',
    'profit tracking software',
    'business profit tools'
  ],
  authors: [{ name: 'ReconFy Team' }],
  creator: 'ReconFy',
  publisher: 'ReconFy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://reconfy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ReconFy - Intelligent Profit Calculation & Analytics Platform',
    description: 'Transform your business with AI-powered profit analysis, real-time analytics, and comprehensive subscription management. Start your 7-day free trial today.',
    url: 'https://reconfy.com',
    siteName: 'ReconFy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ReconFy - Profit Calculation Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReconFy - Intelligent Profit Calculation & Analytics Platform',
    description: 'Transform your business with AI-powered profit analysis and real-time analytics. Start your free trial today.',
    images: ['/twitter-image.jpg'],
    creator: '@reconfy',
    site: '@reconfy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Business Software',
  classification: 'SaaS Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent external script errors
              window.addEventListener('error', function(e) {
                if (e.message.includes('distanceMeter.calcXPos') || 
                    e.message.includes('this.distanceMeter.calcXPos')) {
                  e.preventDefault();
                  console.warn('Prevented distanceMeter error:', e.message);
                  return false;
                }
              });
              
              // Enhanced mobile development support
              if (typeof window !== 'undefined') {
                // Fix for mobile simulation network issues
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                  // Override network status for local development
                  Object.defineProperty(navigator, 'onLine', {
                    writable: true,
                    value: true
                  });
                  
                  // Enhanced network simulation fixes
                  if (window.innerWidth < 768) {
                    // Force online status in mobile simulation
                    navigator.onLine = true;
                    
                    // Override fetch for mobile simulation
                    const originalFetch = window.fetch;
                    window.fetch = function(...args) {
                      // If it's a localhost request in mobile simulation, force success
                      if (args[0] && typeof args[0] === 'string' && 
                          (args[0].includes('localhost') || args[0].includes('127.0.0.1'))) {
                        return Promise.resolve(new Response('{}', { status: 200 }));
                      }
                      return originalFetch.apply(this, args);
                    };
                  }
                  
                  // Fix for mobile simulation refresh issues
                  window.addEventListener('beforeunload', function(e) {
                    if (window.innerWidth < 768) {
                      // Prevent default behavior in mobile simulation
                      e.preventDefault();
                      e.returnValue = '';
                    }
                  });
                }
                
                window.addEventListener('load', function() {
                  // Clean up any problematic global variables
                  if (window.Runner && typeof window.Runner === 'object') {
                    try {
                      if (window.Runner.prototype && window.Runner.prototype.adjustDimensions) {
                        const originalAdjustDimensions = window.Runner.prototype.adjustDimensions;
                        window.Runner.prototype.adjustDimensions = function() {
                          try {
                            if (this.distanceMeter && typeof this.distanceMeter.calcXPos === 'function') {
                              return originalAdjustDimensions.apply(this, arguments);
                            } else {
                              console.warn('distanceMeter.calcXPos not available, skipping adjustDimensions');
                              return;
                            }
                          } catch (err) {
                            console.warn('Error in adjustDimensions:', err);
                          }
                        };
                      }
                    } catch (err) {
                      console.warn('Could not patch Runner.adjustDimensions:', err);
                    }
                  }
                });
              }
            `
          }}
        />
      </head>
      <body className="antialiased bg-black text-white overflow-x-hidden">
        <MobileNetworkRecovery />
        <MobileDevHelper>
          {children}
        </MobileDevHelper>
      </body>
    </html>
  )
}

