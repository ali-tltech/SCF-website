// components/IndustriesSection.js
import React from "react";
import { FaIndustry, FaHospital, FaCar, FaUniversity, FaBuilding, FaPlane, FaShieldAlt, FaBitcoin } from "react-icons/fa";

const industries = [
  { icon: <FaIndustry />, title: "Manufacturing" },
  { icon: <FaHospital />, title: "Healthcare" },
  { icon: <FaCar />, title: "Automobile" },
  { icon: <FaUniversity />, title: "Banking" },
  { icon: <FaBuilding />, title: "Real Estate" },
  { icon: <FaPlane />, title: "Logistics" },
  { icon: <FaShieldAlt />, title: "Insurance" },
  { icon: <FaBitcoin />, title: "Capital Markets" },
];

const IndustriesSection = () => {
  return (
    <section className="bg-green-400 py-16 relative p-20">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
        <p className="text-white mb-8 max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center items-center mb-8">
          {/* Some kind of decorative line or element */}
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transform transition duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl text-gray-500">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Optional background design for visual effect */}
    </section>
  );
};

export default IndustriesSection;
