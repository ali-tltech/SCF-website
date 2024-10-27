'use client';
import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import CustomeButton from '@/components/ui/CustomeButton';

// Custom SVG Icons as Components
const ProgramDesignIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0891b2"> {/* Using cyan-600 color */}
    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
  </svg>
);

const SupplierIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0891b2">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm8-2h-2v-2h2v2zm0-4h-2V6h2v2z"/>
  </svg>
);

const EnablementIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0891b2">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0891b2">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
  </svg>
);

const ServiceItem = ({ icon: Icon, title, description, isEven }) => (
  <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} py-10`}>
    <div className={`w-full md:w-1/3 flex justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'} mb-6 md:mb-0`}>
      <div className="w-20 h-20 rounded-full bg-black   flex items-center justify-center">
        <Icon className="text-black" />
      </div>
    </div>
    <div className="w-full md:w-2/3 md:px-8">
      <h3 className="text-3xl font-bold text-title mb-3">{title}</h3>
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
      icon: ProgramDesignIcon,
      title: "Program Design",
      description: "Transform your SCF programs with meticulously crafted designs that aim for optimal results. We tailor our approach to address your specific needs, creating robust programs that enhance efficiency, scalability, and impact."
    },
    {
      icon: SupplierIcon,
      title: "Supplier Onboarding",
      description: "Streamline and simplify your supplier onboarding process through multiple channels. Our comprehensive management solutions ensure that new suppliers are seamlessly integrated into your SCF programs."
    },
    {
      icon: EnablementIcon,
      title: "Sales & Operations Enablement",
      description: "Equip your teams with the tools and strategies needed to excel in a competitive landscape. Our enablement services focus on boosting team performance and operational efficiency."
    },
    {
      icon: AnalyticsIcon,
      title: "Working Capital Analytics",
      description: "Leverage advanced data and analytics to optimize your working capital. Our working capital analytics services provide actionable insights and benchmark comparisons for informed decision-making."
    }
  ];

  return (
    <div className="bg-gray-100">
      <AuroraBackgroundDemo title={'Solutions & Enablement'} description={'Expert Supply Chain Finance Consulting Services'} link={'Learn More'}/>

      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Empowering Your SCF Programs to Reach New Heights
            </h2>
            <p className="text-gray-600 mb-6">
              At SCF Strategies, we focus on delivering innovative and practical solutions that drive real results, ensuring that your SCF programs not only meet but exceed expectations.
            </p>
        <CustomeButton title={"Learn more"}/>
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

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <div className="rounded-lg">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} isEven={index % 2 !== 0} />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Driving Real Results with Our Solutions
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Our solutions are designed to deliver tangible results. By optimizing your SCF programs, you can improve cash flow, enhance working capital efficiency, and strengthen supplier relationships. Our data-driven strategies and expert guidance ensure that your SCF programs are equipped to achieve sustainable growth and a competitive advantage in the marketplace.
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