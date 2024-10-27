import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import ConsultingServiceContent from '@/components/services/ConsultingServicesContent';
import WaveComponent from '@/components/ui/WaveComponent';
import Head from 'next/head';

const ConsultingServices = () => {
  return (
    <>
    <Head>
      {/* Meta Tags for SEO */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="SCF Strategies offers expert supply chain finance consulting services to optimize SCF programs. Our services include go-to-market strategies, solution audits, platform selection, and accounting treatment for optimal supply chain finance performance." />
      <meta name="keywords" content="Supply Chain Finance, SCF Consulting Services, SCF Platform, SCF Strategy, Supply Chain Finance Optimization, Working Capital, Supply Chain Finance Advisory, SCF Market, SCF Platform & Partner Selection, SCF Accounting Treatment" />
      <meta name="author" content="SCF Strategies" />

      {/* Title Tag for SEO */}
      <title>Expert Supply Chain Finance Consulting Services | SCF Strategies</title>

      {/* Open Graph Meta Tags for Social Sharing */}
      <meta property="og:title" content="Expert Supply Chain Finance Consulting Services | SCF Strategies" />
      <meta property="og:description" content="Unlock the full potential of your supply chain finance programs with SCF Strategies' expert advisory services. We offer go-to-market strategies, solution audits, platform selection, and SCF accounting treatment to optimize your SCF performance." />
      <meta property="og:image" content="https://www.scfstrategies.com/images/team-image.jpeg" />
      <meta property="og:url" content="https://www.scfstrategies.com/consulting-services" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SCF Strategies" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Expert Supply Chain Finance Consulting Services | SCF Strategies" />
      <meta name="twitter:description" content="Unlock the full potential of your supply chain finance programs with SCF Strategies' expert advisory services. We offer go-to-market strategies, solution audits, platform selection, and SCF accounting treatment." />
      <meta name="twitter:image" content="https://www.scfstrategies.com/images/team-image.jpeg" />

      {/* Canonical Link */}
      <link rel="canonical" href="https://www.scfstrategies.com/consulting-services" />

      {/* Structured Data for Service (Schema.org) */}
      <script type="application/ld+json">
        {`
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Supply Chain Finance Consulting",
            "provider": {
                "@type": "Organization",
                "name": "SCF Strategies",
                "url": "https://www.scfstrategies.com",
                "logo": "https://www.scfstrategies.com/images/logo.png"
            },
            "description": "SCF Strategies offers expert supply chain finance consulting services including go-to-market strategies, solution audits, platform selection, and SCF accounting treatment to optimize SCF programs and improve performance.",
            "offers": {
                "@type": "Offer",
                "url": "https://www.scfstrategies.com/consulting-services"
            }
        }
        `}
      </script>
      {/* Social Media Links */}
      <meta property="fb:page_id" content="YOUR_FACEBOOK_PAGE_ID" />
      <meta property="instagram:profile" content="https://www.instagram.com/YOUR_INSTAGRAM_PROFILE" />
      <meta property="linkedin:profile" content="https://www.linkedin.com/company/YOUR_LINKEDIN_PAGE" />
      <meta property="youtube:channel" content="https://www.youtube.com/channel/YOUR_YOUTUBE_CHANNEL_ID" />
      <meta property="google:mybusiness" content="https://www.google.com/maps/place/YOUR_BUSINESS_ID" />
    </Head>


      <div className="bg-primary">
        <AuroraBackgroundDemo title={'Consulting Services'} description={'Where Expertise Meets Innovation in Supply Chain Finance'} link={'Learn More'} />
        <ConsultingServiceContent />
        <WaveComponent />
      </div>
    </>
  );
};

export default ConsultingServices;