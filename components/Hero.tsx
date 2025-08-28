'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  const businessNames = [
    "The Happy Plumbers",
    "Sal's Climate Control", 
    "Andy's Pest Solutions",
    "Gabby's Electrical Co",
    "Roger's Roofing Guys",
    "Greener Landscaping",
    "Ann's Cleaners Group",
    "Trusted Garage Door",
    "Anthony's Pool & Spa"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % businessNames.length)
    }, 3500) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [businessNames.length])

  return (
    <section className="section-padding pt-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Floating Phone Emojis */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 left-4 md:left-10 text-3xl md:text-4xl pointer-events-none"
        style={{
          animation: 'float 6s ease-in-out infinite, rotate 8s linear infinite'
        }}
      >
        📱
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-40 right-4 md:right-16 text-2xl md:text-3xl pointer-events-none"
        style={{
          animation: 'float 8s ease-in-out infinite reverse, rotate 6s linear infinite'
        }}
      >
        📞
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-32 left-4 md:left-20 text-4xl md:text-5xl pointer-events-none"
        style={{
          animation: 'float 7s ease-in-out infinite, rotate 10s linear infinite'
        }}
      >
        📲
      </motion.div>

      {/* Additional scattered phone emojis */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-56 left-1/4 md:left-1/4 text-xl md:text-2xl pointer-events-none"
        style={{
          animation: 'float 9s ease-in-out infinite, rotate 12s linear infinite'
        }}
      >
        📱
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-24 right-1/4 md:right-1/3 text-2xl md:text-3xl pointer-events-none"
        style={{
          animation: 'float 5s ease-in-out infinite reverse, rotate 7s linear infinite'
        }}
      >
        📞
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-20 right-4 md:right-1/4 text-3xl md:text-4xl pointer-events-none"
        style={{
          animation: 'float 11s ease-in-out infinite, rotate 9s linear infinite'
        }}
      >
        📲
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute top-1/2 left-2 md:left-8 text-xl md:text-2xl pointer-events-none"
        style={{
          animation: 'float 8s ease-in-out infinite reverse, rotate 11s linear infinite'
        }}
      >
        📱
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-1/3 right-2 md:right-8 text-2xl md:text-3xl pointer-events-none"
        style={{
          animation: 'float 10s ease-in-out infinite, rotate 8s linear infinite'
        }}
      >
        📞
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Never Lose Another Customer to a{' '}
              <span className="gradient-text">Missed Call</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              CallCatcher instantly texts back your missed calls so you keep the lead, 
              protect your reputation, and grow your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <a 
              href="#pricing"
              className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
            >
              Start Catching Calls Today
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>

        {/* Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Missed Call</div>
                  <div className="font-medium">(555) 123-4567</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">Auto-reply sent:</div>
                <div className="text-gray-900">
                  "Hi! Thanks for calling{' '}
                  <span className="font-semibold text-primary-600">
                    <motion.span
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block"
                    >
                      {businessNames[currentIndex]}
                    </motion.span>
                  </span>
                  . We missed your call but we're here to help. 
                  What can we do for you today?"
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
