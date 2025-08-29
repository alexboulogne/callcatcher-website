'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const sessionId = urlParams.get('session_id')

    if (sessionId) {
      // You can fetch session details here if needed
      setSession({ id: sessionId })
    }
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle className="text-green-600" size={32} />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to CallCatcher!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Your subscription has been activated successfully. You'll receive a confirmation email shortly with your login details.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Check your email for next steps</li>
            <li>• Complete the in-email onboarding form</li>
            <li>• Start catching those missed calls!</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
          >
            Return to Homepage
            <ArrowRight size={16} />
          </Link>
          
          <a
            href="mailto:alex@pioneerdigital.marketing"
            className="block text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Need help? Contact Support
          </a>
        </div>
      </motion.div>
    </div>
  )
}
