'use client';
import React, { useEffect } from "react";
import { FaLaptop, FaChartBar, FaCogs } from "react-icons/fa";
import Image from "next/image";
import StatsSection from "@/components/Home/StatsSection";
import IndustriesSection from "@/components/Home/IdrustieSection";
import RecentStories from "@/components/Home/StorySection";
import FreeTrialSection from "@/components/Home/FreeTrailSection";
import WhyChoose from "@/components/Home/WhyChoose";
import SolutionsSec from "@/components/SolutionsSec";
import WhatWeDo from "@/components/Home/WhatWeDo";
import TestimonialCarousel from "@/components/Home/Testimonials";
import OurStory from "@/components/Home/OurStory";
import DiscoverSection from "@/components/Home/DiscoverSection";
import CustomeButton from "../ui/CustomeButton";

// Your notes here...

export default function HomeContent() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative md:h-screen h-[80vh] bg-cover bg-center bg-[#ede8f5] overflow-hidden" 
     style={{ backgroundImage: "url('/images/LandingPage/background-3.jpg')" }} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" className="absolute">
  {/* Abstract Network Pattern (Top Right) */}
  <g opacity="0.15" fill="none" stroke="white" strokeWidth="1.5">
    <path d="M1200 100 L1300 150 L1400 100" />
    <path d="M1250 50 L1300 150 L1350 50" />
    <path d="M1300 150 L1300 250" />
    <circle cx="1300" cy="150" r="8" fill="white" />
    <circle cx="1200" cy="100" r="4" fill="white" />
    <circle cx="1400" cy="100" r="4" fill="white" />
    <circle cx="1250" cy="50" r="4" fill="white" />
    <circle cx="1350" cy="50" r="4" fill="white" />
    <circle cx="1300" cy="250" r="4" fill="white" />
  </g>

  {/* Rising Chart Pattern (Bottom Left) */}
  <g opacity="0.20" fill="none" stroke="white" strokeWidth="2">
    <path d="M50 600 C150 580, 200 500, 300 480 S450 450, 550 380" />
    <circle cx="150" cy="580" r="4" fill="white" />
    <circle cx="300" cy="480" r="4" fill="white" />
    <circle cx="450" cy="450" r="4" fill="white" />
    <circle cx="550" cy="380" r="4" fill="white" />
  </g>

  {/* Supply Chain Connection Lines (Middle) */}
  <g opacity="0.20" stroke="white" strokeWidth="1.5">
    <path d="M600 300 L700 300 L800 250 L900 350 L1000 300" strokeDasharray="5,5" />
    <circle cx="600" cy="300" r="6" fill="white" />
    <circle cx="700" cy="300" r="6" fill="white" />
    <circle cx="800" cy="250" r="6" fill="white" />
    <circle cx="900" cy="350" r="6" fill="white" />
    <circle cx="1000" cy="300" r="6" fill="white" />
  </g>

  {/* Abstract Shapes (Bottom Right) */}
  <g opacity="0.58" fill="white">
    <path d="M1100 600 L1150 550 L1200 600 Z" />
    <path d="M1200 650 L1250 600 L1300 650 Z" />
    <path d="M1300 600 L1350 550 L1400 600 Z" />
  </g>

  {/* Floating Elements (Top Left) */}
  <g opacity="0.20" fill="white">
    <rect x="100" y="100" width="20" height="20" transform="rotate(45 110 110)" />
    <rect x="150" y="80" width="15" height="15" transform="rotate(45 157.5 87.5)" />
    <rect x="200" y="120" width="25" height="25" transform="rotate(45 212.5 132.5)" />
  </g>

  {/* Currency Symbols Pattern (Scattered) */}
  <g opacity="0.20" fill="white" fontFamily="Arial" fontSize="24">
    <text x="900" y="150">$</text>
    <text x="950" y="200">€</text>
    <text x="850" y="180">£</text>
    <text x="920" y="120">¥</text>
  </g>
</svg>
  {/* Background SVG Container */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Insert the SVG here */}
  </div>
  
  <div className="absolute inset-0 bg-black opacity-10"></div>
  
  <div className="relative z-10 flex md:items-center max-w-7xl p-4 mx-auto md:justify-start items-end justify-end h-full">
    <div className="text-white w-full h-fit text-start flex flex-col gap-6 items-start justify-center mt-40 md:mt-20">
      <h1 className="md:text-5xl text-2xl font-bold mb-2">
        Unlocking Billions in Working Capital
      </h1>
      <p className="text-lg md:text-2xl font-light mb-4">
        Integrating Funding, Technology, and Best Practices for Supply Chain Finance Success
      </p>
      <CustomeButton title={"Get start"}/>
    </div>
  </div>
</div>


      {/* Other Sections */}
      <WhatWeDo />
      <DiscoverSection />
      <IndustriesSection />
      <RecentStories />
      <WhyChoose />
      <SolutionsSec />
      <OurStory />
      <TestimonialCarousel />
    </>
  );
}