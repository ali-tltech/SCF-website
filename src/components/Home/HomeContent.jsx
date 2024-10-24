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

// Your notes here...

export default function HomeContent() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative md:h-screen h-[80vh] bg-cover bg-center  overflow-hidden"
        style={{
          backgroundImage: "url('/images/LandingPage/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 max-w-7xl bg-black opacity-10"></div>
        <div className="relative z-10 flex md:items-center md:px-20 p-5 md:justify-start items-end justify-end h-full">
          <div className="text-white w-full h-fit text-start flex flex-col gap-6 items-start justify-center mt-40 md:mt-20">
            <h1 className="md:text-4xl text-2xl font-bold mb-2">
              Leading Big Data <br />
              <span className="text-blue-100">Analytics Company</span>
            </h1>
            <p className="text-lg md:text-2xl font-light mb-4">
              Bridging the Gap Between <br /> Technology and Practical Implementation
            </p>
            <button className="px-3 py-2 rounded-full h-fit w-fit bg-blue-700">
              Learn more
            </button>
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