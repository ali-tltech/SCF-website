// components/StatsSection.js
import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-blue-900  h-screen relative text-white py-16  bg-cover px-20"  style={{
        backgroundImage: "url('/images/LandingPage/funfacts-bg.jpg')",
      }}>
                <div className="absolute inset-0 bg-stone-950 opacity-60 z-10"></div>

      <div className="container absolute inset-0 flex flex-col justify-center items-center h-full mx-auto text-center z-20">
        {/* Header Section */}
        <h2 className="text-4xl font-bold mb-4">
          We Always Try To Understand Users Expectation
        </h2>
        <p className="max-w-xl mx-auto texl-2xl text-gray-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-black min-w-[300px] bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-green-400">180K</h3>
            <p className="mt-2">Downloaded</p>
          </div>
          <div className="bg-black min-w-[300px] bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-green-400">20K</h3>
            <p className="mt-2">Feedback</p>
          </div>
          <div className="bg-black min-w-[300px] bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-green-400">500+</h3>
            <p className="mt-2">Workers</p>
          </div>
          <div className="bg-black min-w-[300px] bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-green-400">70+</h3>
            <p className="mt-2">Contributors</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-opacity-10 border border-dashed w-fit flex  border-gray-400 p-4 justify-center gap-5 items-center rounded-lg text-center">
          <div><h3 className="text-xl text-start ">Have any question about us?</h3>
          <p className=" text-start">Don't hesitate to contact us</p></div>
          <button className="bg-purple-500 h-fit hover:bg-purple-600 text-white py-2 px-6 ">
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll to top button */}
     
    </section>
  );
};

export default StatsSection;
