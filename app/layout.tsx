import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Zuri AI — Real-time Hotel Intelligence',
  description: 'Full control. Zero chaos. Real-time hotel intelligence. Automate tasks, secure your property, track revenue, and delight guests with AI-powered hotel operations.',
  keywords: ['hotel management', 'hotel AI', 'hospitality automation', 'hotel operations', 'property management', 'Zanzibar hotels'],
  authors: [{ name: 'Zuri AI' }],
  openGraph: {
    title: 'Zuri AI — Real-time Hotel Intelligence',
    description: 'Full control. Zero chaos. Automate your hotel operations with AI.',
    type: 'website',
    url: 'https://zuri.ai',
    siteName: 'Zuri AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zuri AI — Real-time Hotel Intelligence',
    description: 'Full control. Zero chaos. Automate your hotel operations with AI.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
