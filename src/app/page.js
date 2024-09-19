"use client"
import React, { useEffect } from "react";
import { FaLaptop, FaChartBar, FaCogs } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register the ScrollTrigger plugin


export default function Home() {
 

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-start overflow-hidden"
        style={{
          backgroundImage: "url('/images/LandingPage/hero.jpg')",
        }}
      >
        <Image
              src="/images/LandingPage/graph.png" // Ensure you provide a valid src
              alt="Image 2"
              width={500} // Add width
              height={300} // Add height
              className="h-1/2 absolute -bottom-16 -right-20 z-20 opacity-70 w-auto "
            />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex md:items-end md:px-20 p-5 md:justify-start items-end justify-center h-full  mx-auto">
          <div className="text-white max-w-lg md:mb-10 mb-20">
            <h1 className="md:text-5xl text-2xl font-bold mb-2">
              Leading Big Data Analytics Company
            </h1>
            <p className="text-sm md:text-lg font-light mb-4">
              Offers tailored support to clients, helping them determine strategic objectives and manage working capital impact in their SCF programs.
            </p>
            <button
              style={{
                backgroundImage:
                  "linear-gradient(to left top, #555555, #5f5f5f, #686868, #727272, #7c7c7c, #7c7c7c, #7c7c7c, #7c7c7c, #737373, #696969, #606060, #575757)",
              }}
              className="px-3 py-2 rounded-lg h-full border border-white"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* New Section (What We Do) */}
      <div className="second-screen bg-white md:px-20 text-stone-700 py-16">
        <div className="max-w-8xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-stone-950">What We Do</h2>
          <p className="text-lg mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
            <div className="flex flex-col items-center border border-stone-300 rounded-lg h-full p-5 shadow-sm shadow-black">
              <div className="bg-green-500 p-4 rounded-full ">
                <FaLaptop size={40} color="white" /> {/* Research Icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <ul className="text-blue-500 space-y-2">
                <li>Market Research</li>
                <li>Investment Research</li>
              </ul>
              <a href="#" className="text-blue-500 mt-4 flex items-center">
                Read More &rarr;
              </a>
            </div>

            <div className="flex flex-col items-center border border-stone-300 mb-10 rounded-lg h-full p-5 shadow-sm shadow-black">
              <div className="bg-green-500 p-4 rounded-full ">
                <FaChartBar size={40} color="white" /> {/* Analytics Icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <ul className="text-blue-500 space-y-2">
                <li>Data Analytics</li>
                <li>Business Intelligence</li>
              </ul>
              <a href="#" className="text-blue-500 mt-4 flex items-center">
                Read More &rarr;
              </a>
            </div>

            <div className="flex flex-col items-center border border-stone-300 rounded-lg h-full p-5 shadow-sm shadow-black">
              <div className="bg-green-500 p-4 rounded-full ">
                <FaCogs size={40} color="white" /> {/* Technology Icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology</h3>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <ul className="text-blue-500 space-y-2">
                <li>Intelligence Automation</li>
                <li>Quality Engineering</li>
              </ul>
              <a href="#" className="text-blue-500 mt-4 flex items-center">
                Read More &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Images Section */}
      </div>
        <div className="images-section relative md:px-20  grid grid-cols-1 md:grid-cols-2 gap-4 min-  p-8" style={{backgroundImage:"linear-gradient(to right top, #6ba6f2, #36b8f9, #00c9f7, #00d7eb, #34e3da, #45e9cf, #5ceec2, #75f3b4, #6df5aa, #66f7a0, #62f994, #5ffb87)"}}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative flex justify-center items-center h-[500px]">
            <div className="absolute top-0 left-0 transform translate-x-4 translate-y-4">
            <Image
              src="/images/LandingPage/discover-2.png" // Ensure you provide a valid src
              alt="Image 2"
              width={500} // Add width
              height={300} // Add height
              className="h-1/2 w-auto "
            />
            </div>
            <div className="absolute bottom-0 right-0 transform -translate-x-4 -translate-y-4" style={{ backgroundImage: "url(/images/LandingPage/discover-2.png)" }}>
              <Image
                src="/images/LandingPage/discover.jpg"
                alt="Image 1"
                width={500} // Add width
                height={300} // Add height
                className="h-1/2 w-auto "
              />
            </div>
          </div>

          <div className="flex z-20 flex-col justify-center items-start text-white p-6">
            <h2 className="text-3xl font-bold mb-4">Engaging New Audiences through Smart Approach</h2>
            <p className="mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              If you are going to use a passage.
            </p>
            <button className="bg-white text-teal-500 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              DISCOVER MORE
            </button>
          </div>
        </div>
    </>
  );
}
