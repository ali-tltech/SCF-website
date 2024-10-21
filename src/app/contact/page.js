'use client';
import React from 'react';
import Head from 'next/head';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import ContactForm from '@/components/contact/ContactForm';
import { submitContact } from '../action';

const ContactPage = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
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

      {/* Hero Section */}
      
      <AuroraBackgroundDemo  title={'Contact Us'} description={'Elevate Your Supply Chain Finance Strategy'} link={'Learn More'}/>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 text-center">Get in Touch</h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              We're here to help. Reach out anytime.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Contact Info Cards */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <MdEmail className="text-blue-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-xl text-gray-800 font-semibold mb-2">Mail Us</h3>
                <p className="text-gray-600">contact@scfstrategies.com</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <MdLocationOn className="text-blue-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-xl text-gray-800 font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">27 Division St, New York, NY 10002</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <MdPhone className="text-blue-500 text-4xl mb-4 mx-auto" />
                <h3 className="text-xl text-gray-800 font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                <ContactForm />
              </div>

              <div className="rounded-lg shadow-lg overflow-hidden h-[500px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086667506151!2d-122.40143128468307!3d37.78799487975695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c24c2b9b7%3A0x37814ab64c93525c!2sSnappy%20Inc.!5e0!3m2!1sen!2sus!4v1635680350562!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;