'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Keep losing jobs to competitors… or catch every call, protect reputation, and grow without extra staff.
          </h2>
          
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of home service businesses that never miss a customer call.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#pricing"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
            >
              Start Catching Calls Today
              <ArrowRight size={20} />
            </a>
            <a 
              href="https://calendly.com/alexboulogne/callcatcher-demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary-100 transition-colors font-medium flex items-center gap-2"
            >
              <Phone size={20} />
              Schedule a Demo
            </a>
          </div>

          <p className="text-primary-200 mt-6 text-sm">
            One saved job pays for your subscription.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
