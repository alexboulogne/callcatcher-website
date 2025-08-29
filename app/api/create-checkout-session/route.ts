import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

export async function POST(request: NextRequest) {
  try {
    const { plan, billingCycle } = await request.json()

    // Define your Stripe product IDs - replace with your actual product IDs
    const products = {
      catch: {
        monthly: 'prod_SxPUjxtnXtZRpC',
        yearly: 'prod_SxPVHiFhCOJgSn',
      },
      engage: {
        monthly: 'prod_SxPWJs0Bkxd2sy',
        yearly: 'prod_SxPXf02jVFm8FF',
      },
      close: {
        monthly: 'prod_SxPYttHHmFamA6',
        yearly: 'prod_SxPYFsG9w2Lhq8',
      },
    }

    const priceId = products[plan as keyof typeof products][billingCycle as keyof typeof products.catch]

    if (!priceId) {
      return NextResponse.json(
        { error: 'Invalid plan or billing cycle' },
        { status: 400 }
      )
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/pricing`,
      metadata: {
        plan,
        billingCycle,
      },
      billing_address_collection: 'required',
      customer_email: undefined, // Will be collected during checkout
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
