'use client'

import { motion } from 'framer-motion'
import { PhoneOff, DollarSign, Clock } from 'lucide-react'

export default function Stats() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Missed Calls Are More Expensive Than You Think
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customers switch providers, leads slip away, and thousands in revenue are lost every month. CallCatcher stops the bleed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneOff className="text-red-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">28%</h3>
            <p className="text-gray-600">of customer calls go unanswered</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-gray-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">$2,400</h3>
            <p className="text-gray-600">average revenue lost every month</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">78%</h3>
            <p className="text-gray-600">choose the first company that responds</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
