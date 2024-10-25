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
  const radius = 300;
  const totalItems = industries.length;
  
  const getPosition = (index) => {
    const angle = (index * (360 / totalItems) - 90) * (Math.PI / 180);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="bg-[#eeeeee] w-full">
      {/* Mobile Layout (display below lg breakpoint) */}
      <section className="lg:hidden py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Industries We Serve</h2>
          <p className="text-black mb-8 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform duration-300 hover:scale-105"
            >
              <div className="text-4xl text-blue-500">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{industry.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Circle Layout (display above lg breakpoint) */}
      <section className="hidden lg:block relative mx-auto max-w-[1550px] text-black h-[900px]">
        {/* Center Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-center z-10 w-full max-w-md">
          <h2 className="text-4xl font-bold text-black mb-4">Industries We Serve</h2>
      <p className="max-w-3xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, recusandae repudiandae amet impedit iure quidem modi cumque delectus omnis natus, provident perspiciatis beatae soluta maxime harum alias accusamus, labore eveniet!</p>
        </div>

        {/* Industry Cards Container */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0">
          {industries.map((industry, index) => {
            const { x, y } = getPosition(index);
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 z-20 -translate-y-1/2"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                }}
              >
                <div className="bg-white p-4 rounded-lg shadow-lg w-48 flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-110">
                  <div className="text-4xl text-blue-500">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{industry.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-dashed z-10 border-gray-300 rounded-full opacity-50" />
      </section>
    </div>
  );
};

export default IndustriesSection;