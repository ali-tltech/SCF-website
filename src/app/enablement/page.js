'use client';
import React from 'react';
import Image from 'next/image';
import { FaGlobe, FaSearch, FaHandshake, FaMoneyBillWave, FaArrowRight, FaChartLine } from 'react-icons/fa';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';

const ServiceItem = ({ icon: Icon, title, description, isEven }) => (
  <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} py-12 `}>
    <div className={`w-full md:w-1/3 flex justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'} mb-6 md:mb-0`}>
      <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center">
        <Icon className="text-3xl text-cyan-600" />
      </div>
    </div>
    <div className="w-full md:w-2/3 md:px-8">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <button className="mt-4 text-cyan-600 font-semibold inline-flex items-center group">
        Learn More
        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const EnablementPage = () => {
  const services = [
    {
      icon: FaGlobe,
      title: "Go-to-Market Strategy for Supply Chain Finance",
      description: "Break into the SCF market with confidence. Our go-to-market strategies are tailored to position you effectively, leveraging data-driven insights and industry best practices."
    },
    {
      icon: FaSearch,
      title: "Supply Chain Finance Solution Audit",
      description: "Ensure your SCF platform and services are performing at their peak. Our comprehensive solution audit delves into every aspect of your current SCF setup, identifying gaps, inefficiencies, and opportunities."
    },
    {
      icon: FaHandshake,
      title: "SCF Platform & Partner Selection",
      description: "Selecting the right SCF platform and partners is crucial for a successful strategy. We guide you through the complexities of choosing the most suitable technology and strategic partners."
    },
    {
      icon: FaMoneyBillWave,
      title: "SCF Accounting Treatment",
      description: "Navigate the financial intricacies of supply chain finance with our expert support. We offer comprehensive guidance on accounting treatments, ensuring compliance with the latest regulations."
    }
  ];

  return (
    <div className="bg-gray-100">
    
      <AuroraBackgroundDemo  title={'Solutions & Enablement'} description={'Expert Supply Chain Finance Consulting Services'} link={'Learn More'}/>

      {/* Main Content */}
      <div className=" mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unlock the Full Potential of Your Supply Chain Finance Programs
            </h2>
            <p className="text-gray-600 mb-6">
              At SCF Strategies, our supply chain finance consulting services go beyond standard advisory. We provide insightful and innovative solutions that address the unique challenges of your SCF programs.
            </p>
            <button className="bg-cyan-600 text-white font-semibold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-cyan-700">
              Learn More
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/solution.jpg"
                alt="Consulting Services"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="rounded-lg">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} isEven={index % 2 !== 0} />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Transformative Supply Chain Finance Strategies for Sustainable Success
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Our consulting services provide a roadmap to tangible results. By optimizing your SCF programs, we help you enhance cash flow, improve working capital, and strengthen supplier relationships.
          </p>
          <div className="flex justify-center">
            <button className="bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-cyan-700">
              Contact Us
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnablementPage;
