'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import FAQItem from '../../components/faq/FAQItem';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';

const FAQPage = () => {
  const faqData = [
    {
      question: "How do permissions work in Google Play Instant?",
      answer: "Google Play Instant apps have limited permissions compared to full apps. They can only access a subset of device features and require explicit user consent for sensitive permissions. This ensures a balance between functionality and user privacy."
    },
    {
      question: "Is Smart Lock required for instant apps?",
      answer: "No, Smart Lock is not required for instant apps. However, it can enhance the user experience by allowing seamless sign-ins across devices. Instant apps can choose to implement Smart Lock to provide a more convenient authentication process."
    },
    {
      question: "Can I have multiple activities in a single feature?",
      answer: "Yes, you can have multiple activities within a single feature of an instant app. This allows for more complex user flows and richer functionality. However, it's important to keep the feature size within the allowed limits to ensure quick loading times."
    },
    {
      question: "Can I share resources between features?",
      answer: "Yes, you can share resources between features in an instant app. This is done through the base feature module, which contains common resources, code, and assets that can be accessed by all feature modules. This helps in reducing redundancy and keeping the app size optimized."
    },
  ];

  return (

    <div className="text-gray-800">
      <AuroraBackgroundDemo  title={'FAQs'} description={'Any questions? We have answers.'} link={'Learn More'}/>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-xl rounded-lg p-8"
        >
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;