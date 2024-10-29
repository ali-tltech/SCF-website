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

      <AuroraBackgroundDemo title={'Contact Us'} description={'We Love to Hear From You!'} link={'Learn More'} />

      {/* Contact Form Section */}
      <div className="bg-primary max-w-7xl mx-auto  py-16 ">
        <div className="max-w-7xl mx-auto">

          <div className="relative z-10">
            <h2 className="subheading">Get in Touch</h2>
            <p className="paragraph">
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
                <h2 className="subheading">Send Us a Message</h2>
                <ContactForm />
              </div>

              <div className="rounded-lg shadow-lg overflow-hidden h-[500px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.6590285797247!2d-81.7236660247259!3d26.31823778538528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1b1c56f89aed%3A0x772ff27b29266953!2s28637%20San%20Lucas%20Ln%2C%20Bonita%20Springs%2C%20FL%2034135%2C%20USA!5e1!3m2!1sen!2sin!4v1730086910303!5m2!1sen!2sin"
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