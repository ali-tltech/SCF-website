"use client";
import React from "react";

export default function ContactPage() {
  return (
    <>
    <div className="min-h-screen  bg-blue-50 pt-10 flex h-fit items-center flex-col relative overflow-hidden md:px-20 px-2 justify-center py-10">
        <h1 className="absolute bottom-0 left-0 text-black text-opacity-5 z-0 px-10 text-[400px] font-extrabold">SCF</h1>
      <div className="  grid grid-cols-1  md:grid-cols-2 gap-8 z-10">
        {/* Contact Information */}
        <div className="flex flex-col justify-center ">
          <h1 className="text-5xl mt-10 font-bold mb-4 text-stone-800">Contact Us</h1>
          <p className="text-lg mb-6 text-stone-500">
            Email, call, or complete the form to learn how Snappy can solve your messaging problem.
          </p>
          <div className="text-lg text-stone-800 mb-4">
            <p>info@snappy.io</p>
            <p>321-221-231</p>
          </div>
          <a href="#" className="text-blue-500 underline mb-6">
            Customer Support
          </a>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-semibold  text-blue-600">Customer Support</h3>
              <p className="text-stone-600 text-sm">
                Our support team is available around the clock to address any concerns or queries you may have.
              </p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-semibold  text-blue-600">Feedback and Suggestions</h3>
              <p className="text-stone-600 text-sm">
                We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.
              </p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-semibold  text-blue-600">Media Inquiries</h3>
              <p className="text-stone-600 text-sm">
                For media-related questions or press inquiries, please contact us at media@snappyapp.com.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-10">
          <h2 className="text-3xl font-bold mb-4 text-stone-800">Get in Touch</h2>
          <p className="text-lg mb-6 text-stone-600">You can reach us anytime</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-stone-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.25V6a3 3 0 013-3h12a3 3 0 013 3v2.25"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 12h7.5M8.25 15h7.5M12 18h0"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 12h3"
                  />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex">
              <select className="w-20 px-2 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="+62">+62</option>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full ml-2 px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="How can we help?"
              rows="4"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-stone-500 mt-4">
            By contacting us, you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
      
    </div>
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Map Section */}
        <div className="rounded-lg h-[400px] shadow-sm overflow-hidden p-[2px] bg-black bg-opacity-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086667506151!2d-122.40143128468307!3d37.78799487975695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c24c2b9b7%3A0x37814ab64c93525c!2sSnappy%20Inc.!5e0!3m2!1sen!2sus!4v1635680350562!5m2!1sen!2sus"
            width="100%"
            height=""
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full rounded-lg "
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Our Location</h2>
          <h1 className="text-4xl font-bold mb-6 text-blue-600">Connecting Near and Far</h1>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Headquarters</h3>
          <p className="text-gray-600 mb-6 text-sm">
            Snappy Inc.<br />
            123 Tech Boulevard, Suite 456<br />
            San Francisco, CA 12345<br />
            United States
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Open Google Maps
          </a>
        </div>
      </div>
    </div>
    </>

  );
}
