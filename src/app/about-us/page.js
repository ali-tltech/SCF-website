import AboutContent from '@/components/About/AboutContent'
import React from 'react'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: {
    default: 'SCF Strategies || About Us',
    template: '%s | SCF Strategies'
  },
  description: 'Learn about SCF Strategies - Our mission, values, and commitment to excellence in financial solutions and strategic consulting',
  keywords: ['SCF', 'About Us', 'Company Profile', 'Financial Consultancy', 'Strategic Solutions',"founded in 2015","18 years of experience in scf"],
  authors: [{ name: 'SCF Strategies' }],
  creator: 'SCF Strategies',
  publisher: 'SCF Strategies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple.ico',
  },
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
    url: 'https://www.scfstrategies.com/about',
    siteName: 'SCF Strategies',
    title: 'About SCF Strategies',
    description: 'Learn about SCF Strategies - Our mission, values, and commitment to excellence in financial solutions and strategic consulting',
    images: [
      {
        url: '/images/ourstory.png',
        width: 630,
        height: 630,
        alt: 'SCF Strategies Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SCF Strategies',
    description: 'Learn about SCF Strategies - Our mission, values, and commitment to excellence in financial solutions and strategic consulting',
    images: ['/images/ourstory.png'],
    creator: '@scfstrategies',
  },
};

function AboutPage() {
  return <AboutContent/>
}

export default AboutPage