'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Search, Users, BookOpen } from 'lucide-react';

const AdvisoryServicesContent = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Strategic Go-to-Market Planning",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      content: [
        "Looking to enter the booming SCF market or enhance your current offerings? We'll help you craft a winning strategy:",
        "Market Assessment: Get a comprehensive analysis of market feasibility, competition, key players, and target sectors. We'll pinpoint your product's strengths and areas for improvement.",
        "Sales Plan: Develop a robust sales strategy, including market approach, client profiles, partnership opportunities, and key performance metrics. Our plan ensures a streamlined sales process and maximizes your success."
      ]
    },
    {
      title: "In-Depth Solution Audit",
      icon: <Search className="w-8 h-8 text-green-500" />,
      content: [
        "Is your SCF platform performing at its best? Our solution audit provides clarity:",
        "Platform Review: Determine if your solution is a Minimum Viable Product (MVP) or a leading-edge offering.",
        "Feature Analysis: Identify key strengths, differentiators, and limitations impacting your platform's effectiveness.",
        "Actionable Recommendations: Receive detailed insights and strategic recommendations to enhance your solution."
      ]
    },
    {
      title: "Expert Platform & Partner Selection",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      content: [
        "Choosing the right partners and technology is crucial for SCF success. We offer:",
        "Evaluation Process: Benefit from our rigorous evaluation criteria and scoring methodology to select the best origination, technology, and funding partners.",
        "Support Services: We assist with RFP preparation, response analysis, system demonstrations, reference checks, and contract negotiations to help you make informed decisions."
      ]
    },
    {
      title: "Navigating Accounting Challenges",
      icon: <BookOpen className="w-8 h-8 text-red-500" />,
      content: [
        "Implementing a Supply Chain Finance program can bring complex accounting issues. Our expertise helps you:",
        "Accounting Best Practices: Navigate the intricacies of accounting treatment with our expert guidance.",
        "Communication Templates: Utilize our templates for effective communication with auditors, ensuring a favorable opinion on your program."
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Supply Chain Finance Strategy</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Are you ready to take your Supply Chain Finance (SCF) initiatives to the next level? Partner with our experienced team to navigate challenges and seize growth opportunities in your SCF strategy.
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mb-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Advisory Services?</h3>

        {/* Accordion */}
        <div className="space-y-6">
          {accordionData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <div className="mr-4">{item.icon}</div>
                  <span className="text-xl font-semibold text-gray-800">{item.title}</span>
                </div>
                {activeAccordion === index ? 
                  <ChevronUp className="w-6 h-6 text-gray-500" /> : 
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                }
              </button>
              {activeAccordion === index && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  {item.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 mb-4 last:mb-0">{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-600 text-white rounded-lg p-12">
        <h4 className="text-3xl font-bold mb-4">Ready to elevate your SCF strategy?</h4>
        <p className="text-xl mb-8">Let's connect and explore how our Advisory Services can help you achieve your goals.</p>
        <button className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full transition-colors duration-200 text-lg">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default AdvisoryServicesContent;