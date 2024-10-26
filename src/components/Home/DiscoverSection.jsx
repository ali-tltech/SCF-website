import Image from 'next/image';
import React, { useState } from 'react';
import CustomeButton from '../ui/CustomeButton';
const DiscoverSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-fit grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-7xl mx-auto  w-fit  overflow-hidden bg-primary">
      {/* Animated SVG Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" 
                  className={`transform origin-center transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`} />
        </svg>
      </div>

    
      <div className=" flex justify-center w-full rounded-3xl   items-center h-full" style={{backgroundImage:`url('/images/Landingpage/discover.jpg')`}}>
       
      

      
        <div className=" transform  transition-transform duration-500 ">
          <div className="relative group">
            <div className="absolute inset-0  opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        =
          </div>
        </div>

        
     
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col justify-center  items-start text-black p-6 z-10"
         >
        {/* Decorative SVG */}
        <svg className="absolute top-0 right-0 w-24 h-24 text-black opacity-10" viewBox="0 0 100 100">
          <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="none" stroke="currentColor" strokeWidth="2"
                className={`transform transition-all duration-700 ${isHovered ? 'scale-110 opacity-50' : 'scale-100 opacity-20'}`} />
        </svg>

        <h2 className="text-4xl font-bold mb-4 text-title ">
          Engaging New Audiences through Smart Approach
        </h2>
        
        <p className="mb-6 relative">
  <span className="absolute -left-4 text-lg top-0 w-1 h-full bg-white opacity-50 transform origin-top transition-transform duration-500"></span>
  Unlock working capital and optimize your supply chain with our innovative financing solutions. <br /> We bridge the gap between suppliers and buyers, enabling faster payments, stronger supplier relationships, and improved cash flow management. <br /> Our platform empowers businesses of all sizes to thrive in today&apos;s dynamic market.
</p>

       <CustomeButton title={"Discover more"}/>
      </div>
    </div>
  );
};

export default DiscoverSection;
