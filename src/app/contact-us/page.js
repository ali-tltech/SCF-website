'use client';
import React from 'react';
import Head from 'next/head';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import ContactForm from '@/components/contact/ContactForm';
import { submitContact } from '../action';
import { Mail, MapPin, Phone } from 'lucide-react';
import WaveComponent from '@/components/ui/WaveComponent';

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

      <AuroraBackgroundDemo title={'Contact Us'} description={'Elevate Your Supply Chain Finance Strategy'} link={'Learn More'} />

      {/* Contact Form Section */}
      <div className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 text-center">Get in Touch</h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              We&apos;re here to help. Reach out anytime.
            </p>

            <div className="space-y-6 mt-4 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
                            {/* Email Card */}
                            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                                    <p className="text-gray-600">contact@scfstrategies.com</p>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <Phone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                                    <p className="text-gray-600">+1 (203) 470-9377</p>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200 hover:scale-105">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <MapPin className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                                    <p className="text-gray-600">Bonita Springs, FL</p>
                                </div>
                            </div>
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
        <WaveComponent />
      </div>
    </>
  );
};

export default ContactPage;