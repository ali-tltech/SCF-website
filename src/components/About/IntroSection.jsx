import Image from 'next/image'
import React from 'react'

export const IntroSection = () => {
  return (
<div className="mt-4 text-black py-4 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
          Unlocking the Full Potential of Supply Chain Finance
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image - Left Side */}
          <div className="w-full md:w-1/2 h-[500px] relative">
            <Image 
              src="/images/team-image.jpeg"
              alt="SCF Strategies Team" 
              fill
              className="rounded-lg shadow-xl object-cover"
              priority
            />
          </div>
          
          {/* Text Content - Right Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              At SCF Strategies, we&apos;re dedicated to transforming your Supply Chain Finance (SCF) programs into powerful engines of growth. Our mission is to bridge the gap between innovative technology and practical implementation, unlocking new opportunities and maximizing efficiency for your business.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Core Values</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in building strong, transparent relationships with our clients. Our commitment to integrity and partnership ensures that we work collaboratively to achieve your goals and drive sustainable success.
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Our proven approach and methodology have successfully unlocked billions in working capital and free cash flow for leading companies worldwide. With over 100 SCF programs implemented globally, we've learned from the challenges to ensure you don't have to.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
