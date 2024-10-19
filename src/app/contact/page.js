'use client';
import React from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const ContactPage = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  // Initialize react-hook-form with Yup
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Submit handler
  const onSubmit = (data) => {
    console.log(data);
    // Handle form data (e.g., send to API)
  };

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
      <div
        className="h-[60vh] w-full flex justify-center items-center text-white relative"
        style={{
          backgroundImage: "url('/images/LandingPage/bg-14.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="font-bold text-5xl md:text-6xl relative z-10 tracking-wide">Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="absolute top-0 left-0 text-gray-200 text-opacity-20 z-0 text-[20vw] font-extrabold leading-none">
            SCF
          </h1>

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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="First name"
                        {...register('firstName')}
                        className={`w-full px-4 py-3 border ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last name"
                        {...register('lastName')}
                        className={`w-full px-4 py-3 border ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      {...register('email')}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="flex items-center">
                    <select
                      className={`w-24 px-3 py-3 border ${
                        errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Phone number"
                      {...register('phoneNumber')}
                      className={`w-full ml-2 px-4 py-3 border ${
                        errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="How can we help?"
                      rows={4}
                      {...register('message')}
                      className={`w-full px-4 py-3 border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                  >
                    Contact Us Today
                    <span className="ml-2">➡️</span>
                  </button>
                </form>
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