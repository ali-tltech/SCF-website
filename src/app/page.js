"use client"
import React, { useEffect } from "react";
import { FaLaptop, FaChartBar, FaCogs } from "react-icons/fa";

import Image from "next/image";
import StatsSection from "@/components/Home/StatsSection";
import IndustriesSection from "@/components/Home/IdrustieSection";
import RecentStories from "@/components/Home/StorySection";
import FreeTrialSection from "@/components/Home/FreeTrailSection";
import WhyChoose from "@/components/Home/WhyChoose";
import SolutionsSec from "@/components/SolutionsSec";


  // <======================================== NOTES START ==============================================>

  // Libraries used :   "tailwind-css" for css
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code: npm run dev
  // First install all dependencies :- npm intsall
  // Then run the code :- npm run dev

  // created date : 06-MAY-2024 || created by : Murthasa Ali  || module : 1 ||
  // modified date : 10/09/2024 || modified by : Murthasa ALi || module : 1 ||
  // modified date : 12/09/2024 || modified by : Murthasa Ali ck  || module : 1 ||

  // Technical summary(Pre-setups) created date/by :  Murthasa Ali ||
  // Domain :   || 
  // Hosting :   ||
  // SSL :   ||
  // Database :  ||

  // Phase summary :   || created date/by :  Ali  ||
  // Phase 1 :  SetUps ||
  // Phase 2 :  Development/Main page creation ||
  // Phase 3 :  Production  ||

  // <======================================== NOTES END ==============================================>


export default function Home() {
 

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative md:h-screen h-[60vh]  bg-fill bg-end overflow-hidden"
        style={{
          backgroundImage: "url('/images/LandingPage/hero.jpg')",
        }}
      >
      {/* <svg  className="h-1/2 absolute -bottom-16 -right-20 z-20 opacity-20 w-auto " width="135" height="135" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M115.432 134.986C109.144 134.986 101.676 133.217 93.2255 129.582C76.7178 122.605 58.5396 109.635 41.9336 93.0289C25.3276 76.423 12.3573 58.2448 5.38081 41.7371C-1.69393 25.0328 -1.79224 12.0625 5.08598 5.08601C11.9642 -1.79221 25.0329 -1.69395 41.7371 5.38079C58.2448 12.3573 76.4229 25.3276 93.0289 41.9336C109.635 58.5396 122.605 76.7177 129.582 93.2255C136.657 109.93 136.755 122.9 129.877 129.877C126.437 133.217 121.524 134.986 115.432 134.986ZM19.5303 1.6469C13.9295 1.6469 9.40951 3.21906 6.26518 6.26513C-7.19648 19.7268 9.31125 58.1466 43.1128 91.8498C76.8161 125.553 115.236 142.061 128.697 128.697C135.084 122.311 134.888 109.93 128.108 93.815C121.23 77.5038 108.358 59.5222 91.9481 43.1127C75.5386 26.7033 57.4588 13.8312 41.2458 6.95295C32.7954 3.41558 25.5242 1.6469 19.5303 1.6469Z" fill="#7D7CF9"/>
<path d="M103.15 132.333C83.8908 132.333 58.3432 119.952 36.6277 98.2367C5.18437 66.7935 -6.60691 27.2928 10.2939 10.3921C27.2929 -6.60695 66.6953 5.18428 98.1386 36.7258C113.369 51.9562 124.472 69.3482 129.484 85.8559C134.495 102.56 132.726 116.317 124.472 124.571C119.264 129.877 111.895 132.333 103.15 132.333ZM31.8129 4.20167C23.3625 4.20167 16.386 6.65818 11.5713 11.5712C-4.73992 27.8824 7.05124 66.3022 37.905 97.1559C52.9388 112.19 70.1344 123.097 86.3473 128.108C102.462 133.021 115.629 131.35 123.49 123.49C131.35 115.629 133.021 102.462 128.108 86.3473C123.195 70.1343 112.19 52.8405 97.156 37.9049C82.1221 22.8711 64.9265 11.9642 48.7136 6.95296C42.5232 5.08602 36.9224 4.20167 31.8129 4.20167Z" fill="#8C6FED"/>
<path d="M89.5898 130.663C86.0524 130.663 82.3186 130.368 78.4865 129.582C61.9787 126.536 45.2745 117.299 31.4198 103.543C17.5651 89.7863 8.3286 72.9838 5.38079 56.4761C2.33472 39.8701 5.97035 25.3276 15.6981 15.6981C35.5467 -4.15047 75.0473 2.92427 103.543 31.518C132.137 60.1118 139.211 99.5141 119.363 119.363C111.797 126.732 101.479 130.663 89.5898 130.663ZM45.471 5.97034C34.2694 5.97034 24.1485 9.50771 16.779 16.779C7.54249 26.0154 4.00512 40.0667 6.95293 56.1813C9.90074 72.3943 19.0389 88.8037 32.5988 102.364C46.1588 115.924 62.5682 125.062 78.7812 128.01C94.8958 130.957 108.849 127.42 118.184 118.184C137.443 98.9246 130.368 60.5048 102.364 32.5989C85.0698 15.3051 63.7474 5.97034 45.471 5.97034Z" fill="#9C61E2"/>
<path d="M74.9492 129.68C57.8519 129.68 40.0667 122.605 26.212 108.751C0.566028 83.1047 -1.79212 43.6041 20.906 20.9059C43.6041 -1.79218 83.1047 0.467812 108.751 26.212C121.131 38.5928 128.599 54.6092 129.582 71.2152C130.564 87.8212 125.062 103.052 114.057 114.155C103.543 124.571 89.4917 129.68 74.9492 129.68ZM60.0135 6.85473C45.864 6.85473 32.2059 11.866 22.0851 21.9868C-0.0234852 44.0954 2.33479 82.5151 27.3912 107.572C52.4475 132.628 90.8673 134.986 112.976 112.878C123.686 102.167 129.091 87.3299 128.108 71.2152C127.125 55.0023 119.854 39.4771 107.768 27.2929C94.1098 13.8312 76.6195 6.85473 60.0135 6.85473Z" fill="#AB54D6"/>
<path d="M60.0135 129.68C45.3727 129.68 31.4198 124.57 20.9059 114.057C-1.89045 91.2602 0.4677 51.8579 26.2119 26.212C51.8578 0.566021 91.3585 -1.79223 114.057 20.9059C136.853 43.7023 134.495 83.1047 108.751 108.751C94.8958 122.605 77.1107 129.68 60.0135 129.68ZM74.9491 6.85468C58.2448 6.85468 40.8528 13.7329 27.2929 27.2928C2.23648 52.3492 -0.121789 90.769 21.9868 112.878C44.0953 134.986 82.5151 132.628 107.571 107.571C132.628 82.5151 134.986 44.0953 112.878 21.9868C102.658 11.866 89.0986 6.85468 74.9491 6.85468Z" fill="#BB47CB"/>
<path d="M45.3726 130.663C33.3849 130.663 23.0676 126.732 15.5998 119.363C5.97032 109.733 2.23643 95.1907 5.28249 78.5847C8.32856 62.077 17.565 45.3727 31.3215 31.518C59.9152 2.92427 99.3176 -4.15047 119.166 15.6981C139.015 35.5467 131.94 75.0473 103.346 103.543C89.4915 117.397 72.7873 126.634 56.2796 129.582C52.644 130.27 48.91 130.663 45.3726 130.663ZM89.4915 5.97034C71.2151 5.97034 49.8926 15.3051 32.5988 32.5989C19.0389 46.1588 9.90068 62.5683 6.95287 78.7812C4.00506 94.8959 7.54243 108.849 16.7789 118.184C26.0154 127.42 40.0666 130.957 56.1812 128.01C72.3942 125.062 88.8037 115.924 102.364 102.364C130.269 74.4577 137.344 36.038 118.184 16.779C110.814 9.50771 100.693 5.97034 89.4915 5.97034Z" fill="#CA3ABF"/>
<path d="M31.7146 132.333C23.0677 132.333 15.5998 129.877 10.2938 124.57C-6.70523 107.571 5.08605 68.1691 36.6276 36.7258C68.0709 5.28247 107.571 -6.50876 124.472 10.392C141.471 27.391 129.68 66.7934 98.1385 98.2367C76.5212 119.952 51.0719 132.333 31.7146 132.333ZM103.15 4.20161C98.0402 4.20161 92.3411 5.08596 86.3473 6.9529C70.1343 11.8659 52.8405 22.8711 37.9049 37.9049C22.8711 52.9387 11.9642 70.1343 6.95292 86.3472C2.03991 102.462 3.7104 115.629 11.5712 123.49C19.432 131.35 32.5989 133.021 48.7135 128.108C64.9265 123.195 82.2203 112.19 97.1559 97.1558C112.19 82.122 123.097 64.9265 128.108 48.7135C133.021 32.5988 131.35 19.432 123.49 11.5711C118.478 6.65812 111.6 4.20161 103.15 4.20161Z" fill="#DA2CB4"/>
<path d="M19.5303 134.986C13.4382 134.986 8.52509 133.316 5.08598 129.877C-1.79224 122.998 -1.69393 109.93 5.38081 93.2255C12.3573 76.7177 25.3276 58.5396 41.9336 41.9336C58.5396 25.3276 76.7178 12.3573 93.2255 5.38079C109.93 -1.69395 122.9 -1.79221 129.877 5.08601C136.853 11.9642 136.657 25.0328 129.582 41.7371C122.605 58.2448 109.635 76.423 93.0289 93.0289C76.4229 109.635 58.2448 122.605 41.7371 129.582C33.2867 133.119 25.819 134.986 19.5303 134.986ZM115.334 1.6469C97.3525 1.6469 68.857 17.3685 43.1128 43.1127C26.7033 59.5222 13.8312 77.6021 6.95295 93.815C0.172994 109.831 -0.121763 122.212 6.36342 128.697C12.8486 135.183 25.1311 134.888 41.2458 128.108C57.557 121.23 75.5386 108.358 91.9481 91.9481C125.651 58.2448 142.159 19.825 128.796 6.36339C125.455 3.1208 120.935 1.6469 115.334 1.6469Z" fill="#E91FA8"/>
</svg> */}


             
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 flex md:items-center md:top-32 md:px-20 p-5 md:justify-start items-end justify-center h-full  mx-auto">
          <div className="text-white w-full text-center flex flex-col items-center  md:mb-10 mb-20">
          <svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  className="  opacity-65 z-20 p-3 h-40"
  style={{
    backgroundColor: 'transparent',
    animation: 'smooth-spin 10s linear infinite', // Add smooth rotation
  }}
>
  <path
    id="circlePath"
    d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
    fill="none" /* Ensure no fill for the path */
    stroke="transparent" /* Hide the circle path */
  />
  <text fill="white" fontSize="10">
    <textPath href="#circlePath">
      SCF STRATEGIES ⭐ EMPOWER YOUR BUSINESS
    </textPath>
  </text>
</svg>
            <h1 className="md:text-6xl text-3xl font-bold mb-2">
            Leading Big Data <br /><span className="text-blue-700"> Analytics Company </span>
            </h1>
            <p className="text-xl md:text-3xl font-light mb-4">
            Bridging the Gap Between Technology and Practical Implementation
            </p>
            <button
              style={{
                backgroundImage:
                  "linear-gradient(to left top, #555555, #5f5f5f, #686868, #727272, #7c7c7c, #7c7c7c, #7c7c7c, #7c7c7c, #737373, #696969, #606060, #575757)",
              }}
              className="px-3 py-2 rounded-lg h-full border w-fit border-white"
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
        // <StatsSection/>
        <IndustriesSection/>
        <RecentStories/>
        {/* <FreeTrialSection/> */}
        <WhyChoose/>
        <SolutionsSec/>
    </>
  );
}
