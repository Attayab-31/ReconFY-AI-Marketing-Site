'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, Github } from 'lucide-react'
import MobileAssetFallback from '@/components/MobileAssetFallback'
import { getAppUrl } from '@/config/website'

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Profit Calculator', href: '#demo' },
      { name: 'Analytics Dashboard', href: '#features' },
      { name: 'Commission Tracking', href: '#features' },
      { name: 'Subscription Plans', href: '#pricing' }
    ],
    support: [
      { name: 'Documentation', href: '#' },
      { name: 'Contact Support', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: `${getAppUrl()}/privacy-policy` },
      { name: 'Terms of Service', href: `${getAppUrl()}/terms-of-service` }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'GitHub', href: '#', icon: '⌥' }
  ]

  const contactInfo = [
    { label: 'Email', value: 'hello@reconfy.com' },
    { label: 'Phone', value: '+1 (555) 123-4567' },
    { label: 'Address', value: '123 Business Ave, Tech City, TC 12345' }
  ]

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center text-center">
              <MobileAssetFallback
                src="/reconfy-logo.svg"
                alt="ReconFy Logo"
                width={204}
                height={204}
                priority
                className="w-24 h-24 mb-0"
                fallbackSrc="/placeholder.svg"
              />
              <p className="text-gray-400 max-w-xs -mt-3">
                Intelligent profit calculation and analytics platform. Transform your business with AI-powered insights.
              </p>
            </div>
            
            {/* Contact Info - Removed from here */}
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info - Centered at bottom */}
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-2">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="text-sm text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <span className="text-gray-500">{info.label}: </span>
                {info.value}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 ReconFy. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-lg font-bold"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
