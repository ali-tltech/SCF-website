import React from 'react';
import TeamCarousel from '@/components/TeamCarousal';
import Image from 'next/image';
import { FaKey, FaHandshake, FaTrophy, FaCheck, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import InfoCard from '@/components/About/InfoCard';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import OurStory from '@/components/About/OurStory';
import Head from 'next/head';
import { IntroSection } from '@/components/About/IntroSection';
import CustomeButton from '@/components/ui/CustomeButton';


export default function AboutContent() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="SCF Strategies: Unlocking the full potential of Supply Chain Finance with expertise, advanced technology, and a proven track record. Learn more about our journey and why industry leaders trust us." />
        <meta name="keywords" content="Supply Chain Finance, SCF Strategies, SCF Consulting, Supply Chain Finance Expertise, SCF Solutions, Industry Leaders, Global Clients" />
        <title>About Us | SCF Strategies</title>
        <link rel="canonical" href="https://www.scfstrategies.com/about-us" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us | SCF Strategies" />
        <meta property="og:description" content="Discover how SCF Strategies unlocks the full potential of Supply Chain Finance with expert consulting and advanced solutions. Learn about our expertise and core values." />
        <meta property="og:image" content="https://www.scfstrategies.com/images/team-image.jpeg" />
        <meta property="og:url" content="https://www.scfstrategies.com/about-us" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="About Us | SCF Strategies" />
        <meta name="twitter:description" content="Unlock the potential of your Supply Chain Finance programs with SCF Strategies. Learn about our expertise, core values, and why industry leaders choose us." />
        <meta name="twitter:image" content="https://www.scfstrategies.com/images/team-image.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Social Media Links */}
        <meta property="social:facebook" content="https://www.facebook.com/SCFStrategies" />
        <meta property="social:instagram" content="https://www.instagram.com/SCFStrategies" />
        <meta property="social:linkedin" content="https://www.linkedin.com/company/scfstrategies" />
        <meta property="social:youtube" content="https://www.youtube.com/user/SCFStrategies" />
        <meta property="social:googlemybusiness" content="https://www.google.com/business/SCFStrategies" />
        {/* Schema Markup for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Head>


      <AuroraBackgroundDemo title={'About Us'} description={'Know more about our mission, values and team.'} link={'Learn More'} />
      <div className="bg-primary  max-w-7xl mx-auto  py-12">
        <IntroSection />

        {/* Our Story Section */}
        <OurStory />

        {/* Expertise Section */}
        <div className="mt-8  text-black py-8 px-4 md:px-8 rounded-lg ">
          <div className="max-w-7xl mx-auto">
            <div className=" mb-8">
              <h2 className="subheading">Our Expertise</h2>
            </div>
            <p className="paragraph mb-12">
              With over 100 globally recognized SCF and Reverse Factoring programs, SCF Strategies is your trusted partner for unparalleled expertise and results.<br/>
              Our team&apos;s in-depth knowledge and innovative approach set us apart as leaders in the field.
            </p>
            <InfoCard />

            <div className="mt-12 text-center relative z-10">
              <CustomeButton title={'Learn More About Our Journey'} link={'/contact-us'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
