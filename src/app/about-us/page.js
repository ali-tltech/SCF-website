import React from 'react';
import TeamCarousel from '@/components/TeamCarousal';
import Image from 'next/image';
import { FaKey, FaHandshake, FaTrophy, FaCheck, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import InfoCard from '@/components/About/InfoCard';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import OurStory from '@/components/About/OurStory';
import Head from 'next/head';


export default function About() {
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
            <meta property="og:image" content="https://www.scfstrategies.com/images/images/team-image.jpeg" />
            <meta property="og:url" content="https://www.scfstrategies.com/about-us" />
            <meta property="og:type" content="website" />
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:title" content="About Us | SCF Strategies" />
            <meta name="twitter:description" content="Unlock the potential of your Supply Chain Finance programs with SCF Strategies. Learn about our expertise, core values, and why industry leaders choose us." />
            <meta name="twitter:image" content="https://www.scfstrategies.com/images/images/team-image.jpeg" />
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
    

      <AuroraBackgroundDemo title={'About Us'} description={'Know more about our mission, values, and team.'} link={'Learn More'} />
      <div className="bg-gradient-to-b from-white to-gray-50 mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-start space-y-8 md:space-y-0 max-w-6xl mx-auto px-4">
          <div className="relative w-full md:w-1/2 h-[70vh]">
            <Image
              src="/images/team-image.jpeg"
              alt="SCF Strategies team working"
              layout='fill'
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full text-base md:w-1/2 md:pl-8">
            <div className="flex items-center mb-4">
              <h2 className="text-3xl md:text-4xl text-gray-900 font-bold">Unlocking the Full Potential of Supply Chain Finance</h2>
            </div>
            <p className="text-gray-600 mb-4">
              At SCF Strategies, we're dedicated to transforming your Supply Chain Finance (SCF) programs into powerful engines of growth. Our mission is to bridge the gap between innovative technology and practical implementation, unlocking new opportunities and maximizing efficiency for your business.
            </p>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Core Values</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We believe in building strong, transparent relationships with our clients. Our commitment to integrity and partnership ensures that we work collaboratively to achieve your goals and drive sustainable success.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
      <OurStory/>

        {/* Expertise Section */}
        <div className="mt-8 bg-gradient-to-b from-white to-gray-50 text-black py-8 px-4 md:px-8 rounded-lg ">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
            </div>
            <p className="text-center mb-12">
              With over 100 globally recognized SCF and Reverse Factoring programs, SCF Strategies is your trusted partner for unparalleled expertise and results. Our team's in-depth knowledge and innovative approach set us apart as leaders in the field.
            </p>
            <h3 className="text-2xl font-bold mb-8 text-center">Why Choose SCF Strategies?</h3>
            <InfoCard />

            <div className="mt-12 text-center">
              <button className="bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-cyan-800 hover:shadow-lg">
                Learn More About Our Journey
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
