'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import MobileAssetFallback from '@/components/MobileAssetFallback'
import { getAppUrl } from '@/config/website'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 80 // Account for header height (64px) + some padding
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <MobileAssetFallback
              src="/reconfy-logo.svg"
              alt="ReconFy Logo"
              width={204}
              height={204}
              priority
              className="w-40 h-40"
              fallbackSrc="/placeholder.svg"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => window.open(`${getAppUrl()}/login`, '_blank')}>
              Sign In
            </Button>
            <Button size="sm" onClick={() => window.open(getAppUrl(), '_blank')}>
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              className="text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  className="block w-full text-left text-gray-300 hover:text-white py-2 font-medium"
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="ghost" size="sm" className="w-full" onClick={() => window.open(`${getAppUrl()}/login`, '_blank')}>
                  Sign In
                </Button>
                <Button size="sm" className="w-full" onClick={() => window.open(getAppUrl(), '_blank')}>
                  Start Free Trial
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

