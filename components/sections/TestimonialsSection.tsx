'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "TechFlow Solutions",
      content: "ReconFy has transformed how we track our profit margins. The AI-powered insights helped us identify over $50K in missing rebates within the first month.",
      avatar: "S"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "DataSync Inc",
      content: "The subscription management and real-time analytics have streamlined our entire business operations. We've seen a 30% increase in profit margins.",
      avatar: "M"
    },
    {
      name: "Emily Rodriguez",
      role: "Finance Director",
      company: "CloudTech Systems",
      content: "Finally, a platform that makes profit analysis simple and actionable. The multi-source data processing is exactly what we needed for our complex business model.",
      avatar: "E"
    }
  ]

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Trusted by Business
            <span className="gradient-text"> Leaders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how ReconFy is helping businesses optimize their profits and streamline operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
