import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CallCatcher - Never Lose Another Customer to a Missed Call',
  description: 'CallCatcher instantly texts back your missed calls so you keep the lead, protect your reputation, and grow your business.',
  keywords: 'missed calls, lead recovery, SMS automation, home services, customer communication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

