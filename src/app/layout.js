import { Inter } from 'next/font/google';
import '../styles/globals.css';
import ClientLayout from './ClientLayout';

const inter = Inter({
  subsets: ['latin', 'cyrillic', 'greek'],
  display: 'swap',
  weight: '300'
});

// Separate viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5, // Allows more zoom flexibility
};

// Metadata configuration
export const metadata = {
  title: {
    default: 'SCF Strategies',
    template: '%s | SCF Strategies'
  },
  description: 'SCF Strategies - Expert Financial Solutions and Strategic Consulting',
  keywords: ['SCF', 'Strategies', 'Finance', 'Consulting', 'Business Strategy'],
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
    url: 'https://www.scfstrategies.com/',
    siteName: 'SCF Strategies',
    title: 'SCF Strategies',
    description: 'Expert Financial Solutions and Strategic Consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SCF Strategies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCF Strategies',
    description: 'Expert Financial Solutions and Strategic Consulting',
    images: ['/twitter-image.jpg'],
    creator: '@scfstrategies',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-gray-100 relative ${inter.className}`} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}