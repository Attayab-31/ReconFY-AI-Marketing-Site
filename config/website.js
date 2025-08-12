// ReconFy Marketing Website Configuration
// This file contains configuration variables for the marketing website

export const config = {
  appUrl: 'https://main.d2ukbtk1dng1se.amplifyapp.com',
  demoUrl: 'https://app.reconfy.com',
  
  // Alternative URLs (uncomment and modify as needed)
  // appUrl: 'https://reconfy.com/app',
  // appUrl: 'https://dashboard.reconfy.com',
  
  // Marketing website URL
  marketingUrl: 'https://reconfy.com',
  
  // Contact information
  contact: {
    email: 'hello@reconfy.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, Tech City, TC 12345'
  },
  
  // Social media links
  social: {
    twitter: 'https://twitter.com/reconfy',
    linkedin: 'https://linkedin.com/company/reconfy',
    github: 'https://github.com/reconfy'
  }
}

// Helper function to get the app URL
export const getAppUrl = () => config.appUrl

// Helper function to get the demo URL
export const getDemoUrl = () => config.demoUrl

// Helper function to get the marketing URL
export const getMarketingUrl = () => config.marketingUrl

export default config
