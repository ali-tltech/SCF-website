'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';

const PrivacyPolicyPage = () => {
  const privacyContent = [
    {
      title: "Information We Collect",
      description: `We collect both personal and non-personal information to provide better services and improve our offerings.
        Personal Information:
        - Name, email address, phone number, and business details provided through contact forms, registration, or email communication.
        - Payment information if engaging in any of our services.
        
        Non-Personal Information:
        - Data on your interactions with our website, including IP address, browser type, referring website, and pages viewed.`
    },
    {
      title: "How We Use Your Information",
      description: `We use your information for the following purposes:
        - Service Delivery: To communicate with you, provide the services requested, and respond to inquiries.
        - Improvement of Services: To improve our website, services, and offerings based on feedback and user behavior.
        - Marketing: With your consent, we may send you marketing communications or updates on our services. You can opt out at any time.
        - Legal Compliance: To comply with legal obligations, enforce our policies, and protect our business interests.`
    },
    {
      title: "Sharing Your Information",
      description: `We do not sell, trade, or otherwise transfer your personal information to third parties except:
        - Service Providers: Trusted partners who assist us in operating our website, conducting our business, or servicing clients, as long as they agree to keep this information confidential.
        - Legal Obligations: In cases where disclosure is required by law, legal processes, or to protect our rights.`
    },
    {
      title: "Data Security",
      description: `We take appropriate security measures to protect your personal data from unauthorized access, disclosure, or destruction. These measures include encryption, secure servers, and access control protocols. However, no data transmission over the internet can be guaranteed as 100% secure.`
    },
    {
      title: "Data Retention",
      description: `We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. If you wish to request deletion of your data, you can contact us, and we will remove your data unless legally obligated to retain it.`
    },
    {
      title: "Your Rights",
      description: `You have the right to:
        - Access: Request access to the personal information we hold about you.
        - Rectification: Request correction of inaccurate or incomplete data.
        - Deletion: Request deletion of your personal data under certain circumstances.
        - Objection: Object to the processing of your data for direct marketing purposes.`
    },
    {
      title: "Cookies Policy",
      description: `Our website uses cookies to enhance the user experience and gather information about user activity. Cookies are small files placed on your device. You can disable cookies through your browser settings, though some features may not function properly.`
    },
    {
      title: "Third-Party Links",
      description: `Our website may contain links to third-party websites. These sites have their own privacy policies, and we are not responsible for their practices.`
    },
    {
      title: "Updates to This Policy",
      description: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.`
    },
    {
      title: "Contact Us",
      description: `If you have any questions regarding this Privacy Policy or how we handle your data, please contact us at:
        SCF Strategies
        📧 Email: contact@scfstrategies.com
        📞 Phone: +1 (203) 470-9377
        📍 Bonita Springs, FL`
    }
  ];

  return (
    <div className="text-gray-800">
      <AuroraBackgroundDemo title={'Privacy Policy'} description={'Learn more about how we handle your data'} link={'Learn More'}/>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg p-8"
        >
          {privacyContent.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-700 whitespace-pre-line">{section.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
