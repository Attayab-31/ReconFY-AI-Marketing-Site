'use client'

import React, { useEffect, useState } from 'react'
import { mobileDevConfig, mobileDevHelpers } from '@/config/mobile-dev'

interface MobileDevHelperProps {
  children: React.ReactNode
}

export default function MobileDevHelper({ children }: MobileDevHelperProps) {
  const [isMobileSimulation, setIsMobileSimulation] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<'online' | 'offline'>('online')
  const [deviceType, setDeviceType] = useState<string>('unknown')
  const [performanceMetrics, setPerformanceMetrics] = useState({
    fps: 0,
    memory: 0,
    networkLatency: 0,
  })

  useEffect(() => {
    // Force online status for local development
    mobileDevHelpers.forceOnline()
    
    // Detect if we're in mobile simulation mode
    const checkMobileSimulation = () => {
      const simulated = mobileDevHelpers.isMobileSimulation()
      setIsMobileSimulation(simulated)
      setDeviceType(mobileDevHelpers.getDeviceType())
    }

    // Check connection status
    const updateConnectionStatus = () => {
      setConnectionStatus(navigator.onLine ? 'online' : 'offline')
    }

    // Monitor performance
    const monitorPerformance = () => {
      if (mobileDevConfig.performance.monitorFPS) {
        // Simple FPS monitoring
        let frameCount = 0
        let lastTime = performance.now()
        
        const countFPS = () => {
          frameCount++
          const currentTime = performance.now()
          
          if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
            setPerformanceMetrics(prev => ({ ...prev, fps }))
            frameCount = 0
            lastTime = currentTime
          }
          
          requestAnimationFrame(countFPS)
        }
        
        countFPS()
      }

      if (mobileDevConfig.performance.monitorMemory && 'memory' in performance) {
        const memory = (performance as any).memory
        setPerformanceMetrics(prev => ({
          ...prev,
          memory: Math.round(memory.usedJSHeapSize / 1024 / 1024), // Convert to MB
        }))
      }
    }

    // Listen for online/offline events
    window.addEventListener('online', updateConnectionStatus)
    window.addEventListener('offline', updateConnectionStatus)
    window.addEventListener('resize', checkMobileSimulation)
    
    // Check initially
    checkMobileSimulation()
    updateConnectionStatus()
    
    // Start performance monitoring
    if (mobileDevConfig.debug.logPerformance) {
      monitorPerformance()
    }

    // Cleanup
    return () => {
      window.removeEventListener('online', updateConnectionStatus)
      window.removeEventListener('offline', updateConnectionStatus)
      window.removeEventListener('resize', checkMobileSimulation)
    }
  }, [])

  // Show connection status in development
  if (process.env.NODE_ENV === 'development' && isMobileSimulation) {
    return (
      <div className="relative">
        {/* Connection Status Banner */}
        <div className={`fixed top-0 left-0 right-0 z-[60] p-2 text-center text-sm font-medium ${
          connectionStatus === 'online' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {connectionStatus === 'online' 
            ? '🟢 Mobile Simulation: Online' 
            : '🔴 Mobile Simulation: Offline - Check Network Connection'
          }
        </div>
        
        {/* Mobile Simulation Info */}
        <div className="fixed top-12 left-4 z-[60] bg-black/80 backdrop-blur-md rounded-lg p-3 text-white text-xs max-w-xs">
          <div className="font-semibold mb-2">📱 Mobile Dev Mode</div>
          <div className="space-y-1 text-gray-300">
            <div>Device: {deviceType}</div>
            <div>Width: {window.innerWidth}px</div>
            <div>Height: {window.innerHeight}px</div>
            <div>User Agent: {navigator.userAgent.substring(0, 50)}...</div>
            
            {mobileDevConfig.debug.logPerformance && (
              <div className="mt-2 pt-2 border-t border-gray-600">
                <div className="font-semibold text-yellow-400">Performance:</div>
                <div>FPS: {performanceMetrics.fps}</div>
                <div>Memory: {performanceMetrics.memory}MB</div>
              </div>
            )}
            
            <div className="text-yellow-400 mt-2">
              💡 Use "npm run mobile-sim" for better mobile testing
            </div>
          </div>
        </div>

        {children}
      </div>
    )
  }

  return <>{children}</>
}
