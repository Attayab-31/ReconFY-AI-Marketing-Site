'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function PricingSection() {
  const plans = [
    {
      name: "Free Trial",
      price: "Free",
      duration: "7 days",
      description: "Perfect for testing ReconFy's capabilities",
      features: [
        "7-day free trial",
        "Basic profit analysis",
        "File upload support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Monthly Plan",
      price: "$29.99",
      duration: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited profit analysis",
        "File upload support",
        "Download reports",
        "Email support"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Yearly Plan",
      price: "$299.99",
      duration: "per year",
      description: "Best value for established businesses",
      features: [
        "Unlimited profit analysis",
        "File upload support",
        "Download reports",
        "Priority support",
        "Charts access",
        "Reports access"
      ],
      popular: false,
      cta: "Save 17%"
    }
  ]

  return (
    <section id="pricing" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Choose Your
            <span className="gradient-text"> Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start with our 7-day free trial and scale as your business grows
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative p-8 rounded-2xl border ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border-primary-500/50' 
                  : 'bg-gray-800/30 border-gray-700/30'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.duration}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center bg-gray-800/20 rounded-2xl p-8 border border-gray-700/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">💳 Payment Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-2">7-Day Free Trial</div>
              <div className="text-gray-400">No credit card required</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-2">Secure Payments</div>
              <div className="text-gray-400">Stripe-powered processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-2">Cancel Anytime</div>
              <div className="text-gray-400">No hidden fees</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
