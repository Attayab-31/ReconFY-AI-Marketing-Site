'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { TrendingUp, TrendingDown, BarChart3, DollarSign } from 'lucide-react'
import MobileAssetFallback from '@/components/MobileAssetFallback'

export default function DemoSection() {
  const metrics = [
    {
      label: "Profit Margin",
      value: "23.4%",
      change: "+5.2%",
      trend: "up",
      description: "Increased from last month"
    },
    {
      label: "Commission Revenue",
      value: "$12,847",
      change: "+12.3%",
      trend: "up",
      description: "Monthly commission earnings"
    },
    {
      label: "Data Files Processed",
      value: "2,847",
      change: "+8.7%",
      trend: "up",
      description: "POS, Spiff, and VidaPay files"
    },
    {
      label: "Missing Rebates",
      value: "$3,421",
      change: "-15.2%",
      trend: "down",
      description: "Identified and recovered"
    }
  ]

  return (
    <section id="demo" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            See ReconFy in
            <span className="gradient-text"> Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the power of intelligent profit analysis with our interactive dashboard preview
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Dashboard Preview */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Profit Analytics Dashboard</h3>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              {/* Dashboard Image */}
              <div className="bg-gray-700/50 rounded-lg h-48 mb-6 flex items-center justify-center overflow-hidden">
                <MobileAssetFallback
                  src="/dashboard.png"
                  alt="ReconFy Dashboard Preview"
                  width={400}
                  height={200}
                  priority
                  className="w-full h-full object-cover object-top rounded-lg"
                  fallbackSrc="/placeholder.svg"
                />
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-400">$45.2K</div>
                  <div className="text-gray-400 text-sm">Monthly Revenue</div>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">18.7%</div>
                  <div className="text-gray-400 text-sm">Profit Growth</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="bg-gray-800/20 border border-gray-700/30 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">{metric.label}</span>
                    <div className={`flex items-center space-x-1 ${
                      metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="text-sm font-medium">{metric.change}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-gray-500 text-sm">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Removed Try Dashboard Demo button and description */}
        </motion.div>
      </div>
    </section>
  )
}
