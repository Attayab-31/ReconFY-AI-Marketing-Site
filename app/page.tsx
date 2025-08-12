'use client'

import { Suspense } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import DemoSection from '@/components/sections/DemoSection'
import PricingSection from '@/components/sections/PricingSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <DemoSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <PricingSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <CTASection />
      </Suspense>
      
      <Footer />
    </main>
  )
}
