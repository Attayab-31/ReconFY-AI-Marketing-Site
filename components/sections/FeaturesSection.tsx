'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { TrendingUp, Database, BarChart3, Percent, FileText, CreditCard } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Profit Calculation",
      description: "Advanced machine learning algorithms analyze your data to provide accurate profit calculations and identify optimization opportunities.",
      icon: "trending_up",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Source Data Processing",
      description: "Seamlessly process POS data, Spiff files, and VidaPay transactions in one unified platform for comprehensive insights.",
      icon: "database",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Commission Tracking & Optimization",
      description: "Track commissions across all channels and optimize your earnings with intelligent recommendations and automated workflows.",
      icon: "bar_chart",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Monitor your business performance with live dashboards, customizable reports, and actionable insights delivered in real-time.",
      icon: "percent",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Advanced Reporting & Insights",
      description: "Generate comprehensive reports with drill-down capabilities, trend analysis, and predictive analytics for better decision-making.",
      icon: "file_text",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Subscription Management",
      description: "Flexible subscription plans with automated billing, usage tracking, and seamless scaling as your business grows.",
      icon: "credit_card",
      color: "from-teal-500 to-green-500"
    }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trending_up': return <TrendingUp className="w-8 h-8 text-primary-400" />
      case 'database': return <Database className="w-8 h-8 text-primary-400" />
      case 'bar_chart': return <BarChart3 className="w-8 h-8 text-primary-400" />
      case 'percent': return <Percent className="w-8 h-8 text-primary-400" />
      case 'file_text': return <FileText className="w-8 h-8 text-primary-400" />
      case 'credit_card': return <CreditCard className="w-8 h-8 text-primary-400" />
      default: return <TrendingUp className="w-8 h-8 text-primary-400" />
    }
  }

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Powerful Features for Your
            <span className="gradient-text"> Business</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to optimize operations, maximize profits, and scale your business with confidence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mb-6">
                {getIcon(feature.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg">
            Start Your Free Trial
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
