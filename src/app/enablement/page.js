'use client';
import React from 'react';
import { FaCogs, FaUserCheck, FaChartLine, FaWallet } from 'react-icons/fa'; // Import appropriate icons from react-icons

const services = [
  {
    id: 1,
    icon: <FaCogs size={40} />,
    title: 'Program Design',
    description:
      'Transform your SCF programs with meticulously crafted designs that aim for optimal results. We tailor our approach to address your specific needs, creating robust programs that enhance efficiency, scalability, and impact. Our goal is to design programs that drive sustainable success and growth.',
  },
  {
    id: 2,
    icon: <FaUserCheck size={40} />,
    title: 'Supplier Onboarding',
    description:
      'Streamline and simplify your supplier onboarding process through multiple channels. Our comprehensive management solutions ensure that new suppliers are seamlessly integrated into your SCF programs, reducing onboarding time and enhancing overall program efficiency.',
  },
  {
    id: 3,
    icon: <FaChartLine size={40} />,
    title: 'Sales & Operations Enablement',
    description:
      'Equip your teams with the tools and strategies needed to excel in a competitive landscape. Our enablement services focus on boosting team performance and operational efficiency, helping you stay ahead in the fast-paced SCF market.',
  },
  {
    id: 4,
    icon: <FaWallet size={40} />,
    title: 'Working Capital Analytics',
    description:
      'Leverage advanced data and analytics to optimize your working capital. Our working capital analytics services provide actionable insights and benchmark comparisons, allowing you to make informed decisions and enhance financial performance.',
  },
];

const EnablementPage = () => {
  return (
    <div className="min-h-screen bg-stone-200 text-black md:p-20 md:pt-40 p-2 ">
      <div>
        <h1 className="text-6xl text-black font-bold mb-5">
          Empowering Your SCF Programs for Success
        </h1>
        <h2 className="text-2xl text-black font-thin">
          Bridging the Gap Between Technology and Practical Implementation
        </h2>
      </div>
      <div
        className="h-[68vh] mt-5 bg-center bg-cover relative flex items-end rounded-xl p-1"
        style={{ backgroundImage: "url('/images/LandingPage/hero.jpg')" }}
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-5 right-5 opacity-65 z-20 p-3 h-40"
          style={{
            backgroundColor: 'transparent',
            animation: 'smooth-spin 10s linear infinite', // Add smooth rotation
          }}
        >
          <path
            id="circlePath"
            d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
            fill="none" /* Ensure no fill for the path */
            stroke="transparent" /* Hide the circle path */
          />
          <text fill="white" fontSize="10">
            <textPath href="#circlePath">
              SCF STRATEGIES ⭐ EMPOWER YOUR BUSINESS
            </textPath>
          </text>
        </svg>



        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-xl"></div>
        <p className="max-w-5xl text-2xl p-5 text-white z-50 relative">
          <span className="text-6xl  font-bold strokeme">@ SCF Strategies,</span> <br />
          <span className="text-3xl">we empower your SCF programs to reach new heights. </span>
          <br />
          <span className="text-4xl text-white text-opacity-50 leading-8">Our solutions and enablement services are designed to enhance every aspect of your supply chain finance strategy, from program design to operational excellence.</span>
          <br /> We focus on delivering innovative and practical solutions that drive real results, ensuring that your SCF programs not only meet but exceed expectations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 mt-10 gap-4">
        <div className="flex flex-col items-center justify-center  bg-opacity-20 p-8 rounded-lg">
          <h1 className="text-5xl font-medium">Services We Offered</h1>
        </div>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`group relative flex flex-col items-start p-8 rounded-lg shadow-lg ${(index + 1) >= 3 ? 'bg-purple-500 bg-opacity-10' : 'bg-stone-500 bg-opacity-10'
              } hover:cursor-pointer`} // Using group to enable group-hover for child elements
          >
            {/* Blurred custom white div */}
            <div className="absolute top-8 right-8  font-bold text-3xl z-20 text-opacity-35 text-black h-10 flex justify-center items-center w-10 rounded-full border border-dashed border-black">{index + 1}</div>
            <div className="absolute inset-0 bg-white bg-opacity-80 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg z-10"></div>

            {/* Service Icon and Content */}
            <div className="mb-4 text-blue-600 z-20">{service.icon}</div>
            <h3 className="text-3xl font-bold mb-2 z-20 ">{service.title}</h3>
            <p className="text-lg text-start font-light z-20 p-4 bg-white">{service.description}</p>
          </div>
        ))}



        <div className="flex flex-col items-center justify-center gap-3  bg-opacity-20 p-8 rounded-lg">
          <p className="text-3xl text-center font-semibold">Ready to elevate your SCF programs?</p>
          <p className="text-center"> Explore our enablement solutions and see how we can help you achieve exceptional results. Contact us today to start your journey toward enhanced supply chain finance success.</p>
          <button className="text-xl font-medium text-blue-500 p-2 rounded-full bg-stone-100 hover:border-blue-500 border">Discover Our Enablement Solutions</button>
        </div>

      </div>
    </div>
  );
};

export default EnablementPage;
