'use client'

import { motion } from 'framer-motion'
import { MessageSquare, User, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap size={32} className="text-primary-600" />,
      title: "Onboard",
      description: "We connect your phone system to our platform in minutes.",
    },
    {
      icon: <MessageSquare size={32} className="text-accent-600" />,
      title: "Recover",
      description: "Every missed call triggers an instant text back, so the customer never feels ignored.",
    },
    {
      icon: <User size={32} className="text-gray-600" />,
      title: "Grow",
      description: "Keep more leads, satisfy current customers, and watch your revenue climb.",
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to ensure no customer is ever lost to a missed call
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gray-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Catch Every Lead</h4>
            <p className="text-sm text-gray-600">Stop losing jobs to competitors when you can’t answer the phone.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Keep Customers Happy</h4>
            <p className="text-sm text-gray-600">Every customer feels acknowledged and cared for.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Protect Ad Spend</h4>
            <p className="text-sm text-gray-600">Missed calls burn the money you paid to make the phone ring.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Proven ROI</h4>
            <p className="text-sm text-gray-600">One saved job pays for your subscription.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
