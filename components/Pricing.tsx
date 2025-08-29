'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Loader2 } from 'lucide-react'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true)
  const [loading, setLoading] = useState<string | null>(null)

  // Clear loading state when component mounts (when returning from Stripe)
  useEffect(() => {
    setLoading(null)
  }, [])

  const handleCheckout = async (planName: string) => {
    setLoading(planName)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan: planName.toLowerCase(),
          billingCycle: isYearly ? 'yearly' : 'monthly',
        }),
      })

      const { sessionId } = await response.json()
      
      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(({ loadStripe }) => 
        loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      )
      
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId })
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(null)
    }
  }

  const plans = [
    {
      name: "Catch",
      monthly: "$99",
      yearlyMonthly: "$83",
      period: "/month",
      description: "Never lose another lead to a missed call.",
      features: [
        "Instant text back",
        "Email alerts",
        "Simple setup",
        "Caller + timestamp logging",
        "Protects revenue from lost customers"
      ],
      popular: false,
      cta: "Start Catching Calls"
    },
    {
      name: "Engage",
      monthly: "$179",
      yearlyMonthly: "$149",
      period: "/month",
      description: "Turn missed calls into real conversations.",
      features: [
        "Instant text back",
        "Email alerts",
        "Two-way texting",
        "Real-time chat",
        "Keep leads warm until you call back"
      ],
      popular: false,
      cta: "Start Engaging Leads"
    },
    {
      name: "Close",
      monthly: "$349",
      yearlyMonthly: "$299",
      period: "/month",
      description: "Book jobs and keep customers happy.",
      features: [
        "Your 24/7 virtual employee",
        "Books appointments",
        "Closes new leads",
        "Answers FAQ's",
        "No customer goes uncontacted"
      ],
      popular: true,
      cta: "Start Closing Jobs"
    }
  ] as const

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            No setup fees, no contracts.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-2">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly ? 'bg-white text-gray-900 shadow' : 'text-gray-600'
              }`}
              aria-pressed={!isYearly}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isYearly ? 'bg-white text-gray-900 shadow' : 'text-gray-600'
              }`}
              aria-pressed={isYearly}
            >
              Yearly
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {isYearly ? 'Save 17% (2 months free)' : 'Switch to yearly and save 17% (2 months free)'}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const displayPrice = isYearly ? plan.yearlyMonthly : plan.monthly
            const displayPeriod = isYearly ? `${plan.period} (billed yearly)` : plan.period
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-primary-500 scale-105' 
                    : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star size={14} />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{displayPrice}</span>
                    <span className="text-gray-600">{displayPeriod}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleCheckout(plan.name)}
                  disabled={loading === plan.name}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:opacity-50'
                  }`}
                >
                  {loading === plan.name ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      Processing...
                    </>
                  ) : (
                    plan.cta
                  )}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
