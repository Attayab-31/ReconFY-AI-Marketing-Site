'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { getAppUrl } from '@/config/website'
import { Check, Loader2 } from 'lucide-react'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const features = [
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Get instant insights into your profit margins and performance metrics'
    },
    {
      icon: '🚀',
      title: 'AI-Powered Insights',
      description: 'Leverage machine learning for predictive profit optimization'
    },
    {
      icon: '💼',
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business strategies'
    }
  ]

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSuccess(true)
    
    // Reset form
    setEmail('')
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
    }, 3000)
  }

  return (
    <section id="cta" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Optimize Your{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Profits?
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of businesses already using ReconFy to streamline operations 
            and maximize their bottom line. Start your free trial today.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 glass rounded-xl"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" onClick={() => window.open(getAppUrl(), '_blank')}>
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </motion.div>

        {/* Email Signup */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-400">
              Get the latest insights and updates delivered to your inbox
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              disabled={isLoading}
              required
            />
            <Button 
              type="submit" 
              size="lg" 
              className="whitespace-nowrap min-w-[120px]"
              disabled={isLoading || !email.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Subscribing...
                </>
              ) : isSuccess ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Subscribed!
                </>
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
          
          {/* Success Message */}
          {isSuccess && (
            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <p className="text-green-400 text-sm">
                ✅ Thank you for subscribing! You'll receive updates soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
