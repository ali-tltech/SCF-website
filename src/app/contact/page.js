"use client";
import React from "react";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        {/* Meta and SEO tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="SCF Strategies offers expert supply chain finance consulting services to optimize SCF programs. Our services include go-to-market strategies, solution audits, platform selection, and accounting treatment for optimal supply chain finance performance."
        />
        <meta
          name="keywords"
          content="Supply Chain Finance, SCF Consulting Services, SCF Platform, SCF Strategy, Supply Chain Finance Optimization, Working Capital, Supply Chain Finance Advisory, SCF Market, SCF Platform & Partner Selection, SCF Accounting Treatment"
        />
        <meta name="author" content="SCF Strategies" />
        <title>Expert Supply Chain Finance Consulting Services | SCF Strategies</title>
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Expert Supply Chain Finance Consulting Services | SCF Strategies"
        />
        <meta
          property="og:description"
          content="Unlock the full potential of your supply chain finance programs with SCF Strategies' expert advisory services. We offer go-to-market strategies, solution audits, platform selection, and SCF accounting treatment to optimize your SCF performance."
        />
        <meta
          property="og:image"
          content="https://www.scfstrategies.com/path/to/consulting-services-image.jpg"
        />
        <meta property="og:url" content="https://www.scfstrategies.com/consulting-services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SCF Strategies" />
      </Head>
      <div className='h-[50vh] w-full relative flex justify-center items-center text-white bg-white' style={{ backgroundImage: "url('/images/LandingPage/bg-14.jpg')"} }>
        <h1 className='font-bold text-[40px]'>Blogs</h1>
         </div>
      {/* Contact Page Content */}
      <div className="min-h-screen bg-stone-100 pt-20 flex items-center flex-col relative overflow-hidden md:px-20 px-2 justify-center py-10">
        <h1 className="absolute bottom-0 left-0 text-black text-opacity-5 z-0 px-10 text-[400px] font-extrabold">
          SCF
        </h1>

        <h1 className="text-5xl mt-10 font-bold mb-4 text-stone-800 text-center">Contact Us</h1>
        <div className="flex flex-wrap gap-8 z-10 w-full mt-6 justify-between text-center">
  {/* Mail Here */}
  <div className="flex-1 bg-white min-w-[300px] shadow-2xl p-6">
    <div className="text-green-600 text-3xl mb-4">📧</div>
    <h3 className="text-xl text-black font-semibold mb-2">Mail Here</h3>
    <p className="text-stone-600">admin@startp.com</p>
    <p className="text-stone-600">info@startp.com</p>
  </div>

  {/* Visit Here */}
  <div className="flex-1 bg-white min-w-[300px] shadow-2xl p-6">
    <div className="text-green-600 text-3xl mb-4">📍</div>
    <h3 className="text-xl text-black font-semibold mb-2">Visit Here</h3>
    <p className="text-stone-600">27 Division St, New York, NY 10002</p>
    <p className="text-stone-600">United States of America</p>
  </div>

  {/* Call Here */}
  <div className="flex-1 bg-white min-w-[300px] shadow-2xl p-6">
    <div className="text-green-600 text-3xl mb-4">📞</div>
    <h3 className="text-xl text-black font-semibold mb-2">Call Here</h3>
    <p className="text-stone-600">+123 456 7890</p>
    <p className="text-stone-600">+241 452 4526</p>
  </div>
</div>


        {/* Rest of the Contact Form and Map Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full  mt-10">
          <div className="bg-white relative rounded-lg shadow-lg p-8 bg-cover bg-center z-20">
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-1 text-stone-950">Get in Touch</h2>
              <p className="text-lg mb-6 text-stone-700">You can reach us anytime</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-2 border border-stone-300 bg-stone-50 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-2 border border-stone-300 bg-stone-50 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-stone-300 bg-stone-50 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex items-center">
                  <select className="w-20 px-2 py-2 border border-stone-300 bg-stone-50 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="+62">+62</option>
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full ml-2 px-4 py-2 border border-stone-300 bg-stone-50 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <textarea
                  placeholder="How can we help?"
                  rows="4"
                  className="w-full px-4 py-2 border border-stone-300 bg-stone-50 rounded-lg focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Location Information */}
          <div className="rounded-lg shadow-sm overflow-hidden p-2 bg-black bg-opacity-10">
           
          </div>

        </div>
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086667506151!2d-122.40143128468307!3d37.78799487975695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c24c2b9b7%3A0x37814ab64c93525c!2sSnappy%20Inc.!5e0!3m2!1sen!2sus!4v1635680350562!5m2!1sen!2sus"
              width="100%"
              height="600"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full m-10 rounded-lg"
            ></iframe>
      </div>
    </>
  );
}
