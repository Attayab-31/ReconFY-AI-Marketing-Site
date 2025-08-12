'use client'

import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-24 h-24 border-4 border-primary-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute top-2 left-2 w-20 h-20 border-4 border-primary-400 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* RECONFY text */}
        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-primary-400 font-display font-semibold text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          RECONFY
        </motion.div>
      </div>
    </div>
  )
}

