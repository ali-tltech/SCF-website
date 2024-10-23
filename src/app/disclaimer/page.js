import Head from 'next/head';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo.jsx';
import DisclaimerPage from '../../components/DisclaimerPage/DisclaimerPage.jsx';

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "SCF Strategies",
    "url": "https://www.scfstrategies.com",
    "description": "Disclaimer page for SCF Strategies outlining the limitations of liability, no warranties, and legal responsibilities related to the use of our website.",
    "sameAs": [
      "https://www.facebook.com/SCFStrategies",
      "https://www.instagram.com/SCFStrategies",
      "https://www.linkedin.com/company/scfstrategies",
      "https://www.youtube.com/user/SCFStrategies",
      "https://www.google.com/business/SCFStrategies"
    ]
  };

  return (
    <>
      <Head>
        <title>Disclaimer | SCF Strategies</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta 
          name="description" 
          content="Disclaimer for SCF Strategies: Understanding the limitations of warranties and liability. Learn about the terms governing the use of our website and the scope of our responsibilities." 
        />
        <meta 
          name="keywords" 
          content="SCF Strategies Disclaimer, Website Disclaimer, Legal Disclaimer, Limitation of Liability, No Warranties, Website Terms" 
        />
        <link rel="canonical" href="https://www.scfstrategies.com/disclaimer" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Disclaimer | SCF Strategies" />
        <meta 
          property="og:description" 
          content="Learn about SCF Strategies' website disclaimer including limitations of liability, no warranties, and legal responsibilities. Understand the terms of use for our website." 
        />
        <meta property="og:image" content="https://www.scfstrategies.com/images/disclaimer-banner.jpg" />
        <meta property="og:url" content="https://www.scfstrategies.com/disclaimer" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="Disclaimer | SCF Strategies" />
        <meta 
          name="twitter:description" 
          content="Understand the limitations and terms of use for SCF Strategies' website, including warranties, liabilities, and legal responsibilities." 
        />
        <meta name="twitter:image" content="https://www.scfstrategies.com/images/disclaimer-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Social Media Links */}
        <meta property="social:facebook" content="https://www.facebook.com/SCFStrategies" />
        <meta property="social:instagram" content="https://www.instagram.com/SCFStrategies" />
        <meta property="social:linkedin" content="https://www.linkedin.com/company/scfstrategies" />
        <meta property="social:youtube" content="https://www.youtube.com/user/SCFStrategies" />
        <meta property="social:googlemybusiness" content="https://www.google.com/business/SCFStrategies" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <AuroraBackgroundDemo 
          title={'Disclaimer'} 
          description={'Important information about our services'} 
          link={'Learn More'}
        />

        {/* Main Content */}
        <DisclaimerPage />
      </div>
    </>
  );
}