import React from 'react';
import TeamCarousel from '@/components/TeamCarousal';
import Image from 'next/image';
import { FaKey, FaHandshake, FaTrophy, FaCheck, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import InfoCard from '@/components/About/InfoCard';

export default function About() {
  return (
    <>
      <div className='h-[50vh] w-full relative flex   justify-center items-center text-white backdrop-blur-lg bg-white' style={{ backgroundImage: "url('/images/LandingPage/bg-14.jpg')" }}>
        <h1 className='font-bold text-[40px] top-10'>About Us</h1>
      </div>
      <div className="bg-white mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-start space-y-8 md:space-y-0 max-w-6xl mx-auto px-4">
          <div className="relative w-full md:w-1/2 h-[70vh]">
            <Image
              src="/images/agency-about-img.0d3d0b65.jpg"
              alt="SCF Strategies team working"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent"></div>
          </div>
          <div className="w-full text-base md:w-1/2 md:pl-8">
            <div className="flex items-center mb-4">
              {/* <FaKey className="text-3xl text-yellow-500 mr-3" /> */}
              <h2 className="text-3xl md:text-4xl text-gray-900 font-bold">Unlocking the Full Potential of Supply Chain Finance</h2>
            </div>
            <p className="text-gray-600 mb-4">
              At SCF Strategies, we're dedicated to transforming your Supply Chain Finance (SCF) programs into powerful engines of growth. Our mission is to bridge the gap between innovative technology and practical implementation, unlocking new opportunities and maximizing efficiency for your business.
            </p>
            <div className="flex items-center mb-4">
              {/* <FaHandshake className="text-2xl text-blue-500 mr-3" /> */}
              <h3 className="text-xl font-semibold text-gray-800">Core Values</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We believe in building strong, transparent relationships with our clients. Our commitment to integrity and partnership ensures that we work collaboratively to achieve your goals and drive sustainable success.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-16 bg-white text-black py-16 px-4 md:px-8 rounded-lg shadow-xl">
          <div className="max-w-6xl mx-auto">
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