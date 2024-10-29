'use client';
import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <div className="mt-8 text-black py-8 relative overflow-hidden ">
  <div className="max-w-6xl mx-auto relative">
    <h2 className="subheading">Our Story</h2>

    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Text Content - Left Side */}
      <div className="w-full md:w-1/2 space-y-6">
        <p className="text-gray-600 leading-relaxed text-lg">
          Founded in <strong>2015</strong>, <strong>SCF Strategies</strong> emerged from the recognition that traditional Supply Chain Finance providers typically offer either <strong>funding</strong> or <strong>technology</strong>, but rarely both in an integrated manner. <br /> With over <strong>15 years of experience</strong> in originating, implementing, and managing Supplier Finance programs that exceed <strong>$150 billion</strong> in trading volume and yield more than <strong>$2 billion</strong> in outstanding results.
        </p>

        <p className="text-gray-600 leading-relaxed text-lg">
          True value comes from integrating best practice processes with <strong>technology</strong> and <strong>funding capacity</strong>. <br /> We know that no amount of funding or sophisticated technology can compensate for poor practices, missed steps, or overlooked success factors. Today, <strong>SCF Strategies</strong> is recognized as an <strong>industry leader</strong> in SCF consulting.
        </p>
      </div>

      {/* Image - Right Side */}
      <div className="w-full md:w-1/2 h-[400px] relative">
        <Image
          src="/images/ourstory.png"
          alt="SCF Strategies Team"
          fill
          className="rounded-lg shadow-xl object-cover"
          priority
        />
      </div>
    </div>

    <p className="text-gray-600 mt-4 leading-relaxed text-lg">
      Corporates, financial institutions, and Fintechs rely on our <strong>advisory</strong> and <strong>enablement services</strong>, built on actual in-depth program-level expertise. <br /> With over <strong>100 SCF programs</strong> implemented globally, we&apos;ve learned from the challenges and mistakes to ensure you don&apos;t have to.
    </p>

    <p className="text-gray-600 mt-4 leading-relaxed text-lg">
      Our proven approach and methodology have successfully assessed markets and implemented programs, unlocking <strong>billions in working capital</strong> and <strong>free cash flow</strong> for leading companies worldwide.
    </p>
  </div>
</div>

  );
};

export default OurStory;