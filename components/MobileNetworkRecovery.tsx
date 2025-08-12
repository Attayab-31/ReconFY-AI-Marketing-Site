'use client'

import React, { useEffect, useState } from 'react'

export default function MobileNetworkRecovery() {
  const [isMobileSimulation, setIsMobileSimulation] = useState(false)
  const [networkStatus, setNetworkStatus] = useState<'online' | 'offline' | 'recovering'>('online')
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    // Detect mobile simulation
    const checkMobileSimulation = () => {
      const userAgent = navigator.userAgent
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      const isSimulated = window.innerWidth < 768 && !isMobile
      setIsMobileSimulation(isSimulated)
    }

    // Network status monitoring
    const updateNetworkStatus = () => {
      if (navigator.onLine) {
        setNetworkStatus('online')
        setRetryCount(0)
      } else {
        setNetworkStatus('offline')
      }
    }

    // Enhanced network recovery for mobile simulation
    const attemptNetworkRecovery = () => {
      if (isMobileSimulation && networkStatus === 'offline') {
        setNetworkStatus('recovering')
        
        // Try to force network status update
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          // Override network status for local development
          Object.defineProperty(navigator, 'onLine', {
            writable: true,
            value: true,
          })
          
          // Force a network status update
          window.dispatchEvent(new Event('online'))
          
          setTimeout(() => {
            setNetworkStatus('online')
          }, 1000)
        }
      }
    }

    // Listen for network events
    window.addEventListener('online', updateNetworkStatus)
    window.addEventListener('offline', updateNetworkStatus)
    window.addEventListener('resize', checkMobileSimulation)
    
    // Check initially
    checkMobileSimulation()
    updateNetworkStatus()

    // Set up recovery attempts
    const recoveryInterval = setInterval(() => {
      if (networkStatus === 'offline' && retryCount < 5) {
        setRetryCount(prev => prev + 1)
        attemptNetworkRecovery()
      }
    }, 2000)

    return () => {
      window.removeEventListener('online', updateNetworkStatus)
      window.removeEventListener('offline', updateNetworkStatus)
      window.removeEventListener('resize', checkMobileSimulation)
      clearInterval(recoveryInterval)
    }
  }, [isMobileSimulation, networkStatus, retryCount])

  // Show network recovery UI only in mobile simulation
  if (!isMobileSimulation || networkStatus === 'online') {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-red-600 text-white p-3 text-center">
      <div className="flex items-center justify-center space-x-2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        <span className="text-sm font-medium">
          {networkStatus === 'recovering' 
            ? `Attempting to reconnect... (${retryCount}/5)`
            : 'Network connection lost. Attempting to reconnect...'
          }
        </span>
      </div>
      
      {networkStatus === 'offline' && retryCount >= 5 && (
        <div className="mt-2 text-xs">
          <button 
            onClick={() => {
              setRetryCount(0)
              setNetworkStatus('recovering')
              window.location.reload()
            }}
            className="bg-white text-red-600 px-3 py-1 rounded text-xs font-medium hover:bg-gray-100 transition-colors"
          >
            Force Reload
          </button>
        </div>
      )}
    </div>
  )
}
