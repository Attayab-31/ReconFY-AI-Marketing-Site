'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface MobileAssetFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  fallbackSrc?: string
}

export default function MobileAssetFallback({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fallbackSrc = '/placeholder.svg'
}: MobileAssetFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setImgSrc(src)
    setHasError(false)
    setIsLoading(true)
  }, [src])

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
      console.warn(`Failed to load image: ${src}, using fallback`)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // For mobile simulation, try to preload the image
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      const img = new window.Image()
      img.onload = () => {
        setImgSrc(src)
        setIsLoading(false)
      }
      img.onerror = () => {
        console.warn(`Preload failed for: ${src}`)
      }
      img.src = src
    }
  }, [src])

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-xs">Loading...</div>
        </div>
      )}
      
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        // Mobile-specific optimizations
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      
      {hasError && (
        <div className="absolute inset-0 bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="text-sm mb-1">⚠️ Image failed to load</div>
            <div className="text-xs">Using fallback</div>
          </div>
        </div>
      )}
    </div>
  )
}
