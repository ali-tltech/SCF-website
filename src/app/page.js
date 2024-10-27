import HomeContent from "@/components/Home/HomeContent";


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
        url: '/logo.png',
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
    images: ['/logo.png'],
    creator: '@scfstrategies',
  },
};

export default function HomePage() {
  return <HomeContent />;
}