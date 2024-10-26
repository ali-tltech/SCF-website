import Head from 'next/head';
import Image from 'next/image';
import AdvisoryServicesContent from '../../components/services/AdvisoryServicesContent';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import WaveComponent from '@/components/ui/WaveComponent';

const AdvisoryServices = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SCF Strategies",
    "url": "https://www.scfstrategies.com",
    "logo": "https://www.scfstrategies.com/images/logo.png",
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
        <title>Advisory Services | SCF Strategies</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Elevate your Supply Chain Finance strategy with our expert Advisory Services. We offer strategic go-to-market planning, in-depth solution audits, platform and partner selection, and guidance on accounting treatment to help you succeed." />
        <meta name="keywords" content="Supply Chain Finance Advisory Services, SCF Strategy Consulting, Go-to-Market Strategy, Solution Audit, Platform Selection, Accounting Treatment, Supply Chain Finance Optimization" />
        <link rel="canonical" href="https://www.scfstrategies.com/advisory-services" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Advisory Services | SCF Strategies" />
        <meta property="og:description" content="Transform your Supply Chain Finance strategy with our comprehensive Advisory Services. From strategic planning to solution audits and partner selection, our experts are here to guide you." />
        <meta property="og:image" content="https://www.scfstrategies.com/images/advisory-services-banner.jpg" />
        <meta property="og:url" content="https://www.scfstrategies.com/advisory-services" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="Advisory Services | SCF Strategies" />
        <meta name="twitter:description" content="Enhance your SCF strategy with our expert Advisory Services. We provide go-to-market strategy, solution audits, platform selection, and accounting guidance. Contact us today!" />
        <meta name="twitter:image" content="https://www.scfstrategies.com/images/advisory-services-banner.jpg" />
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

      <div className="bg-primary">
        {/* Hero Section */}
        <AuroraBackgroundDemo title={'Advisory Services'} description={'Elevate Your Supply Chain Finance Strategy'} link={'Learn More'} />

        {/* Main Content */}
        <AdvisoryServicesContent />
        {/* <WaveComponent/ > */}
      </div>
    </>
  );
};

export default AdvisoryServices;