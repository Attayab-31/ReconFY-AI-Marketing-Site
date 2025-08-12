// Mobile Development Configuration
// This file contains settings to help with mobile development and testing

export const mobileDevConfig = {
  // Development server settings
  devServer: {
    hostname: '0.0.0.0',
    port: 3000,
    mobilePort: 3001,
    simulationPort: 3002,
  },
  
  // Mobile simulation settings
  simulation: {
    // Breakpoints for mobile testing
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1200,
    },
    
    // User agent overrides for testing
    userAgents: {
      iphone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
      android: 'Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36',
      ipad: 'Mozilla/5.0 (iPad; CPU OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    },
    
    // Network simulation settings
    network: {
      // Simulate different network conditions
      conditions: {
        fast: { latency: 10, bandwidth: 10000 },
        slow: { latency: 100, bandwidth: 1000 },
        offline: { latency: 0, bandwidth: 0 },
      },
      
      // Override network status for local development
      overrideOnline: true,
    },
  },
  
  // Performance monitoring for mobile
  performance: {
    // Monitor frame rate
    monitorFPS: true,
    
    // Monitor memory usage
    monitorMemory: true,
    
    // Monitor network requests
    monitorNetwork: true,
    
    // Performance thresholds
    thresholds: {
      fps: 30,
      memory: 50, // MB
      networkTimeout: 5000, // ms
    },
  },
  
  // Debug settings
  debug: {
    // Show mobile simulation info
    showSimulationInfo: true,
    
    // Log network requests
    logNetwork: true,
    
    // Log performance metrics
    logPerformance: true,
    
    // Show connection status
    showConnectionStatus: true,
  },
}

// Helper functions for mobile development
export const mobileDevHelpers = {
  // Check if we're in mobile simulation mode
  isMobileSimulation: () => {
    if (typeof window === 'undefined') return false
    
    const userAgent = navigator.userAgent
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    const isSimulated = window.innerWidth < 768 && !isMobile
    
    return isSimulated
  },
  
  // Get current device type
  getDeviceType: () => {
    if (typeof window === 'undefined') return 'unknown'
    
    const width = window.innerWidth
    if (width < 768) return 'mobile'
    if (width < 1024) return 'tablet'
    return 'desktop'
  },
  
  // Simulate network conditions
  simulateNetwork: (condition) => {
    if (typeof window === 'undefined') return
    
    const { latency, bandwidth } = mobileDevConfig.simulation.network.conditions[condition] || {}
    
    if (latency !== undefined) {
      // Override navigator.connection for testing
      if (navigator.connection) {
        Object.defineProperty(navigator.connection, 'rtt', {
          writable: true,
          value: latency,
        })
      }
    }
  },
  
  // Force online status for local development
  forceOnline: () => {
    if (typeof window === 'undefined') return
    
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      Object.defineProperty(navigator, 'onLine', {
        writable: true,
        value: true,
      })
    }
  },
}

export default mobileDevConfig
