import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

export async function POST(request: NextRequest) {
  try {
    const { plan, billingCycle } = await request.json()
    
    console.log('Received request:', { plan, billingCycle })
    console.log('Stripe key exists:', !!process.env.STRIPE_SECRET_KEY)

    // Define your Stripe Price IDs
    const products = {
      catch: {
        monthly: 'price_1S1UfxGcY8j6tYdRcDbgSvdy',
        yearly: 'price_1S1UgSGcY8j6tYdRncIuveND',
      },
      engage: {
        monthly: 'price_1S1UhEGcY8j6tYdRYOjpv50L',
        yearly: 'price_1S1UiZGcY8j6tYdRjs9xjl6v',
      },
      close: {
        monthly: 'price_1S1Uj2GcY8j6tYdRNXF3ypuH',
        yearly: 'price_1S1UjZGcY8j6tYdRKSuY4epg',
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
      cancel_url: `${request.headers.get('origin')}/#pricing`,
      metadata: {
        plan,
        billingCycle,
      },
      billing_address_collection: 'required',
      customer_creation: 'always',
      phone_number_collection: {
        enabled: true,
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    })
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
