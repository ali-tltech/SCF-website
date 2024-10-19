'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import FAQItem from '../../components/faq/FAQItem';

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
    <div className="text-gray-800 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="h-[40vh] w-full relative flex flex-col justify-center items-center bg-cover bg-center" 
           style={{ backgroundImage: "url('/images/LandingPage/bg-14.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10 text-center text-white"
        >
          <div className="flex items-center justify-center">
            <HelpCircle size={48} className="mr-4 text-blue-500" />
            <h1 className="text-5xl font-bold">FAQs</h1>
          </div>
        </motion.div>
      </div>

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