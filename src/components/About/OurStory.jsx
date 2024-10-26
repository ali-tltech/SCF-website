'use client';
import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <div className="mt-8 text-black py-8 px-4 md:px-8 relative overflow-hidden ">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">Our Story</h2>
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content - Left Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded in 2015, SCF Strategies emerged from the recognition that traditional Supply Chain Finance providers typically offer either funding or technology, but rarely both in an integrated manner. With over 15 years of experience in originating, implementing, and managing Supplier Finance programs that exceed $150 billion in trading volume and yield more than $2 billion in outstanding results.
            </p>
            
            <p className="text-gray-600  leading-relaxed text-lg">
              True value comes from integrating best practice processes with technology and funding capacity. We know that no amount of funding or sophisticated technology can compensate for poor practices, missed steps, or overlooked success factors. Today, SCF Strategies is recognized as an industry leader in SCF consulting.
            </p>
            
            <p className="text-gray-600  leading-relaxed text-lg">
              Our proven approach and methodology have successfully assessed markets and implemented programs, unlocking billions in working capital and free cash flow for leading companies worldwide. With over 100 SCF programs implemented globally, we&apos;ve learned from the challenges and mistakes to ensure you don&apos;t have to.
            </p>
          </div>
          
          {/* Image - Right Side */}
          <div className="w-full md:w-1/2 h-[500px] relative">
            <Image 
              src="/images/team-image.jpeg"
              alt="SCF Strategies Team" 
              fill
              className="rounded-lg shadow-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;