// Performance optimization utilities for smooth animations and 3D rendering

// Throttle function to limit function execution frequency
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T {
  let inThrottle: boolean
  return ((...args: any[]) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }) as T
}

// Debounce function to delay function execution
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T {
  let timeout: NodeJS.Timeout
  return ((...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }) as T
}

// RAF (RequestAnimationFrame) wrapper for smooth animations
export function rafThrottle<T extends (...args: any[]) => any>(func: T): T {
  let ticking = false
  return ((...args: any[]) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        func(...args)
        ticking = false
      })
      ticking = true
    }
  }) as T
}

// Intersection Observer options for performance
export const intersectionObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

// Performance monitoring utilities
export class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map()

  startTimer(label: string): void {
    if (typeof performance !== 'undefined') {
      performance.mark(`${label}-start`)
    }
  }

  endTimer(label: string): number {
    if (typeof performance !== 'undefined') {
      performance.mark(`${label}-end`)
      performance.measure(label, `${label}-start`, `${label}-end`)
      
      const measure = performance.getEntriesByName(label)[0]
      const duration = measure.duration
      
      if (!this.metrics.has(label)) {
        this.metrics.set(label, [])
      }
      this.metrics.get(label)!.push(duration)
      
      return duration
    }
    return 0
  }

  getAverageTime(label: string): number {
    const times = this.metrics.get(label)
    if (!times || times.length === 0) return 0
    
    const sum = times.reduce((acc, time) => acc + time, 0)
    return sum / times.length
  }

  clearMetrics(): void {
    this.metrics.clear()
  }
}

// Memory management utilities
export class MemoryManager {
  private static instance: MemoryManager
  private cleanupTasks: (() => void)[] = []

  static getInstance(): MemoryManager {
    if (!MemoryManager.instance) {
      MemoryManager.instance = new MemoryManager()
    }
    return MemoryManager.instance
  }

  addCleanupTask(task: () => void): void {
    this.cleanupTasks.push(task)
  }

  cleanup(): void {
    this.cleanupTasks.forEach(task => task())
    this.cleanupTasks = []
  }

  // Monitor memory usage (if available)
  getMemoryInfo(): { used: number; total: number } | null {
    if ('memory' in performance) {
      const memory = (performance as any).memory
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize
      }
    }
    return null
  }
}

// Animation frame rate monitoring
export class FrameRateMonitor {
  private frameCount = 0
  private lastTime = 0
  private fps = 0
  private isMonitoring = false

  start(): void {
    this.isMonitoring = true
    this.monitor()
  }

  stop(): void {
    this.isMonitoring = false
  }

  private monitor(): void {
    if (!this.isMonitoring) return

    const currentTime = performance.now()
    this.frameCount++

    if (currentTime - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime))
      this.frameCount = 0
      this.lastTime = currentTime
    }

    requestAnimationFrame(() => this.monitor())
  }

  getFPS(): number {
    return this.fps
  }
}

// 3D rendering optimization utilities
export const threeJSOptimizations = {
  // Canvas settings for better performance
  canvas: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance' as const,
    failIfMajorPerformanceCaveat: false,
    stencil: false,
    depth: true
  },

  // Camera settings for optimal viewing
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: [0, 0, 5] as [number, number, number]
  },

  // Lighting optimization
  lighting: {
    ambient: { intensity: 0.4 },
    directional: { intensity: 0.8, position: [10, 10, 10] as [number, number, number] },
    point: { intensity: 0.6, position: [5, 5, 5] as [number, number, number] }
  },

  // Geometry optimization
  geometry: {
    sphere: { segments: 12 },
    box: { segments: 1 },
    torus: { segments: 8 }
  }
}

// Scroll performance optimization
export const scrollOptimizations = {
  // Passive event listeners for better scroll performance
  passive: true,
  
  // Throttle scroll events
  throttleMs: 16, // ~60fps
  
  // Debounce scroll events for certain operations
  debounceMs: 100,
  
  // Use transform instead of top/left for animations
  useTransform: true,
  
  // Enable hardware acceleration
  enableHardwareAcceleration: true
}

// Device performance detection
export const devicePerformance = {
  // Check if device supports high-performance features
  supportsHighPerformance(): boolean {
    if (typeof navigator === 'undefined') return false
    
    const connection = (navigator as any).connection
    if (connection) {
      return connection.effectiveType === '4g' || connection.effectiveType === '5g'
    }
    
    return true // Assume high performance if we can't detect
  },

  // Check if device is mobile
  isMobile(): boolean {
    if (typeof window === 'undefined') return false
    
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  },

  // Get device pixel ratio for optimal rendering
  getPixelRatio(): number {
    if (typeof window === 'undefined') return 1
    
    const ratio = window.devicePixelRatio || 1
    return Math.min(ratio, 2) // Cap at 2x for performance
  }
}

// Export default performance monitor instance
export const performanceMonitor = new PerformanceMonitor()
export const memoryManager = MemoryManager.getInstance()
export const frameRateMonitor = new FrameRateMonitor()
