import Image from 'next/image';
import React, { useState } from 'react';
const DiscoverSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-fit grid grid-cols-1 md:grid-cols-2 gap-4 p-8 md:px-20 overflow-hidden bg-gray-50">
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

    
      <div className="relative flex justify-end  items-center h-full">
       
        <svg className="absolute top-0 left-0 w-32 h-32 text-black opacity-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" 
                  className={`transform transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" 
                  className={`transform transition-transform duration-500 delay-100 ${isHovered ? 'scale-90' : 'scale-100'}`} />
        </svg>

      
        <div className=" transform  transition-transform duration-500 ">
          <div className="relative group">
            <div className="absolute inset-0  opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <Image
      src={"/images/Landingpage/discover.jpg"}
      alt="Picture of the author"
      width={500} 
      height={500} 
      blurDataURL="data:..." 
      placeholder="blur"
    />
          </div>
        </div>

        
     
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col justify-center  items-start text-black p-6 z-10"
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}>
        {/* Decorative SVG */}
        <svg className="absolute top-0 right-0 w-24 h-24 text-black opacity-10" viewBox="0 0 100 100">
          <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="none" stroke="currentColor" strokeWidth="2"
                className={`transform transition-all duration-700 ${isHovered ? 'scale-110 opacity-50' : 'scale-100 opacity-20'}`} />
        </svg>

        <h2 className="text-3xl font-bold mb-4 transform transition-all duration-500 hover:translate-x-2">
          Engaging New Audiences through Smart Approach
        </h2>
        
        <p className="mb-6 relative">
          <span className="absolute -left-4 top-0 w-1 h-full bg-white opacity-50 transform origin-top transition-transform duration-500"></span>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which don&apos;t look even slightly believable.
          If you are going to use a passage.
        </p>

        <button className="group relative bg-white text-teal-500 font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 hover:bg-opacity-90 hover:transform hover:-translate-y-1">
          <span className="relative z-10">DISCOVER MORE</span>
          <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DiscoverSection;
