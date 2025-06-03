'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf } from 'lucide-react' // Tambahkan impor ini

export default function SplashScreen({ onComplete }) {
  // Kode splash screen
  
  return (
    <AnimatePresence>
        <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onAnimationComplete={onComplete}
      >
        <div className="relative">
          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="relative z-10"
          >
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center"
              >
                <Leaf className="w-10 h-10 text-white" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl font-bold text-white"
              >
                AgriTech
              </motion.span>
            </div>
          </motion.div>
  
          {/* Circular Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 2 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-40 h-40 rounded-full border-2 border-green-500 opacity-20" />
          </motion.div>
  
          {/* Radial Gradient Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
            style={{
              background:
                "radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(0,0,0,0) 70%)",
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}