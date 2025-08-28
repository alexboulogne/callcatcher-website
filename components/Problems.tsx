'use client'

import { motion } from 'framer-motion'
import { PhoneOff, UserX } from 'lucide-react'

export default function Problems() {
  return (
    <section id="problems" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The Two Biggest Problems We Solve
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problem 1: Lost Leads */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <PhoneOff className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Lost Leads</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              When customers call and get no answer, they move on to your competitors. 
              Each missed call is a potential job walking out the door.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Customers call multiple businesses</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">First to respond often wins the job</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Missed calls = lost revenue</span>
              </div>
            </div>
          </motion.div>

          {/* Problem 2: Poor Customer Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <UserX className="text-orange-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Poor Customer Experience</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Even current customers feel ignored when their calls go unanswered. 
              This damages your reputation and hurts repeat business.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Customers expect immediate response</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Silence feels like being ignored</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Damages trust and reputation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
