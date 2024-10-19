import React from 'react';
import { Send, HelpCircle, MessageSquare } from 'lucide-react';
import FAQItem from '../../components/faq/FAQItem';

const FAQPage = () => {
  const faqData = [
    {
      question: "How do permissions work in Google Play Instant?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Is Smart Lock required for instant apps?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Can I have multiple activities in a single feature?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "Can I share resources between features?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ];

  return (
    <div className="text-gray-800">
      <div className="h-[40vh] w-full relative flex flex-col justify-center items-center bg-cover bg-center" 
           style={{ backgroundImage: "url('/images/LandingPage/bg-14.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center text-white">
          <div className="flex items-center justify-center">
            <HelpCircle size={48} className="mr-4 text-blue-500" />
            <h1 className="text-4xl font-bold">FAQs</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-16">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <MessageSquare size={28} className="mr-2 text-green-500" />
            Ask Your Question
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded text-gray-800"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 border border-gray-300 rounded text-gray-800"
              />
            </div>
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full p-3 border border-gray-300 rounded text-gray-800"
            />
            <textarea
              placeholder="Write your message..."
              rows={4}
              className="w-full p-3 border border-gray-300 rounded text-gray-800"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded flex items-center hover:bg-green-600 transition-colors"
            >
              <Send size={18} className="mr-2" />
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;