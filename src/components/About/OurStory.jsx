'use client';
import React from 'react';

// Different wave pattern options as separate components for easy switching
const WavePatterns = {
  // Double Wave Pattern
  DoubleWave: () => (
    <path
      d="M0,40 C320,80 480,0 640,40 C800,80 960,0 1120,40 C1280,80 1440,0 1600,40 C1760,80 1920,0 1920,40 L1920,0 L0,0 Z"
      fill="#2563eb"
    />
  ),

  // Smooth Curves Pattern
  SmoothCurves: () => (
    <path
      d="M0,20 C480,100 960,0 1440,60 C1680,90 1800,30 1920,20 L1920,0 L0,0 Z"
      fill="#2563eb"
    />
  ),

  // Ripple Pattern
  Ripple: () => (
    <path
      d="M0,40 C160,20 320,60 480,40 C640,20 800,60 960,40 C1120,20 1280,60 1440,40 C1600,20 1760,60 1920,40 L1920,0 L0,0 Z"
      fill="#2563eb"
    />
  ),

  // Zigzag Pattern
  Zigzag: () => (
    <path
      d="M0,30 L240,60 L480,30 L720,60 L960,30 L1200,60 L1440,30 L1680,60 L1920,30 L1920,0 L0,0 Z"
      fill="#2563eb"
    />
  ),

  // Gentle Waves Pattern
  GentleWaves: () => (
    <path
      d="M0,40 Q480,80 960,40 Q1440,0 1920,40 L1920,0 L0,0 Z"
      fill="#2563eb"
    />
  )
};

const OurStory = () => {
  // Change the wave pattern by changing WaveComponent here
  // Options: DoubleWave, SmoothCurves, Ripple, Zigzag, GentleWaves
  const WaveComponent = WavePatterns.SmoothCurves; // Try changing this to other options!

  return (
    <div className="mt-8 text-black py-8 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative SVG Background */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg 
          className="absolute left-0 top-0 w-full opacity-5" 
          viewBox="0 0 1920 120" 
          preserveAspectRatio="xMidYMax slice"
        >
          <WaveComponent />
        </svg>
      </div> */}

      <div className=" max-w-7xl mx-auto relative">
        <h2 className="text-2xl md:text-4xl font-bold  text-center mb-8">Our Story</h2>
        <p className="text-start md:text-center text-gray-600 mb-12 ">
          Founded in 2015, SCF Strategies emerged from the recognition that traditional Supply Chain Finance providers typically offer either funding or technology, but rarely both in an integrated manner. With over 15 years of experience in originating, implementing, and managing Supplier Finance programs that exceed $150 billion in trading volume and yield more than $2 billion in outstanding results, we understand that success demands more than just funding and technology.
        </p>
        <p className="text-start md:text-center text-gray-600 mb-12">
          True value comes from integrating best practice processes with technology and funding capacity. We know that no amount of funding or sophisticated technology can compensate for poor practices, missed steps, or overlooked success factors.
        </p>
        <p className="text-start md:text-center text-gray-600 mb-12">
          Today, SCF Strategies is recognized as an industry leader in SCF consulting. Corporates, financial institutions, and Fintechs rely on our advisory and enablement services, built on actual in-depth program-level expertise. With over 100 SCF programs implemented globally, we&apos;ve learned from the challenges and mistakes to ensure you don&apos;t have to.
        </p>
        <p className="text-start md:text-center text-gray-600">
          Our proven approach and methodology have successfully assessed markets and implemented programs, unlocking billions in working capital and free cash flow for leading companies worldwide.
        </p>
      </div>
    </div>
  );
};

export default OurStory;