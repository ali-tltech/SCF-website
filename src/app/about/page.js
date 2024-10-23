import React from 'react';
import TeamCarousel from '@/components/TeamCarousal';
import Image from 'next/image';
import { FaKey, FaHandshake, FaTrophy, FaCheck, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import InfoCard from '@/components/About/InfoCard';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';

export default function About() {
  return (
    <>
      <AuroraBackgroundDemo title={'About Us'} description={'Know more about our mission, values, and team.'} link={'Learn More'} />
      <div className="bg-gray-50 mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-start space-y-8 md:space-y-0 max-w-6xl mx-auto px-4">
          <div className="relative w-full md:w-1/2 h-[70vh]">
            <Image
              src="/images/team-image.jpeg"
              alt="SCF Strategies team working"
              layout='fill'
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full text-base md:w-1/2 md:pl-8">
            <div className="flex items-center mb-4">
              <h2 className="text-3xl md:text-4xl text-gray-900 font-bold">Unlocking the Full Potential of Supply Chain Finance</h2>
            </div>
            <p className="text-gray-600 mb-4">
              At SCF Strategies, we're dedicated to transforming your Supply Chain Finance (SCF) programs into powerful engines of growth. Our mission is to bridge the gap between innovative technology and practical implementation, unlocking new opportunities and maximizing efficiency for your business.
            </p>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Core Values</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We believe in building strong, transparent relationships with our clients. Our commitment to integrity and partnership ensures that we work collaboratively to achieve your goals and drive sustainable success.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mt-16 bg-gray-50 text-black py-16 px-4 md:px-8 ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-center text-gray-600 mb-12">
              Founded in 2015, SCF Strategies emerged from the recognition that traditional Supply Chain Finance providers typically offer either funding or technology, but rarely both in an integrated manner. With over 15 years of experience in originating, implementing, and managing Supplier Finance programs that exceed $150 billion in trading volume and yield more than $2 billion in outstanding results, we understand that success demands more than just funding and technology.
            </p>
            <p className="text-center text-gray-600 mb-12">
              True value comes from integrating best practice processes with technology and funding capacity. We know that no amount of funding or sophisticated technology can compensate for poor practices, missed steps, or overlooked success factors.
            </p>
            <p className="text-center text-gray-600 mb-12">
              Today, SCF Strategies is recognized as an industry leader in SCF consulting. Corporates, financial institutions, and Fintechs rely on our advisory and enablement services, built on actual in-depth program-level expertise. With over 100 SCF programs implemented globally, we’ve learned from the challenges and mistakes to ensure you don’t have to.
            </p>
            <p className="text-center text-gray-600">
              Our proven approach and methodology have successfully assessed markets and implemented programs, unlocking billions in working capital and free cash flow for leading companies worldwide.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-16 bg-gray-50 text-black py-16 px-4 md:px-8 rounded-lg shadow-xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <FaTrophy className="text-4xl text-yellow-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
            </div>
            <p className="text-center mb-12">
              With over 100 globally recognized SCF and Reverse Factoring programs, SCF Strategies is your trusted partner for unparalleled expertise and results. Our team's in-depth knowledge and innovative approach set us apart as leaders in the field.
            </p>
            <h3 className="text-2xl font-bold mb-8 text-center">Why Choose SCF Strategies?</h3>
            <InfoCard />

            <div className="mt-12 text-center">
              <button className="bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-cyan-800 hover:shadow-lg">
                Learn More About Our Journey
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
