import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CallCatcher - Never Lose Another Customer to a Missed Call',
  description: 'CallCatcher instantly texts back your missed calls so you keep the lead, protect your reputation, and grow your business.',
  keywords: 'missed calls, lead recovery, SMS automation, home services, customer communication',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'CallCatcher - Never Lose Another Customer to a Missed Call',
    description: 'CallCatcher instantly texts back your missed calls so you keep the lead, protect your reputation, and grow your business.',
    url: 'https://callcatcher-website.vercel.app',
    siteName: 'CallCatcher',
    images: [
      {
        url: 'https://callcatcher-website.vercel.app/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'CallCatcher - Never Lose Another Customer to a Missed Call',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CallCatcher - Never Lose Another Customer to a Missed Call',
    description: 'CallCatcher instantly texts back your missed calls so you keep the lead, protect your reputation, and grow your business.',
    images: ['https://callcatcher-website.vercel.app/og-image.svg'],
    creator: '@founderalexb',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EHV72V19PV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EHV72V19PV');
            `,
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

