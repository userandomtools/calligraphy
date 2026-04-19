import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://calligraphygeneratorai.com'),
  title: {
    default: 'Calligraphy Generator AI | Best Free Indic Font Converters',
    template: '%s | Calligraphy Generator AI'
  },
  description: 'Use our advanced Calligraphy Generator AI to create stunning Arabic, Hindi, and English art. Plus, lightning-fast Unicode to AMS, Shree Lipi, and Kruti Dev font converters.',
  keywords: ['calligraphy generator ai', 'arabic calligraphy', 'hindi calligraphy', 'unicode to ams', 'font converter', 'shree lipi', 'kruti dev', 'devlys'],
  authors: [{ name: 'Calligraphy Generator AI' }],
  creator: 'Calligraphy Generator AI',
  publisher: 'Calligraphy Generator AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calligraphygeneratorai.com',
    siteName: 'Calligraphy Generator AI',
    title: 'Calligraphy Generator AI | Best Free Indic Font Converters',
    description: 'Create stunning calligraphy art with AI. Convert Unicode to AMS, Shree Lipi, DevLys instantly.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calligraphy Generator AI',
    description: 'Create stunning calligraphy art with AI. Convert Unicode to AMS, Shree Lipi, DevLys instantly.',
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
