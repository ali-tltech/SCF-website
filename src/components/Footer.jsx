import React, { useState } from 'react';
import { SiGooglemybusiness } from "react-icons/si";
import Link from 'next/link';
import {
  FileText,
  Link as LinkIcon,
  Globe,
  ChevronUp
} from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { subscribeToNewsletter } from '@/app/action';
import XIcon from './ui/XIcon';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(email);
      await subscribeToNewsletter(email);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact-us' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Clients', href: '/clients' }
  ];

  const services = [
    { name: 'Advisory Service', href: '/advisory-service' },
    { name: 'Consulting Service', href: '/consulting-service' }
  ];

  const resources = [
    { name: 'Blogs', href: '/blog' },
    { name: 'Resource Center', href: '/resource-center' },
    { name: 'Solutions & Enablement', href: '/enablement' },
    { name: 'Frequently Asked Questions', href: '/faqs' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Use', href: '/terms-and-conditions' },
    { name: 'Disclaimer', href: '/disclaimer' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4 flex items-center">
              <LinkIcon className="w-4 h-4 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-400 text-lg  transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-blue-400 text-lg transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4 flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link href={resource.href} className="hover:text-blue-400 text-lg transition-colors">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div>
            {/* Newsletter Signup Section */}
            <h3 className="text-white text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form
              className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 mb-6"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {/* Social Links Section */}
            <h3 className="text-white text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex  space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100063586296486" target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ericriddlescf?igsh=MXMxaTkxZmhka2Q4Zw==" target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/scfstrategies/?viewAsMember=true" target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a href="https://x.com/SCFStrategies" target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <XIcon className="w-6 h-6" />
              </a>
              <a href="" target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <SiGooglemybusiness className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className=" text-gray-400  py-4  text-lg order-3 md:order-1 flex items-center space-x-2">
              <Image src="https://www.tltechnologies.net/assets/logo-D0OpDRUY.svg" width={60} height={60} alt="TL Technologies Logo" className="h-10 w-10" />

              <Link href={"https://connect.tltechnologies.net/"}> Developed by TL Technologies</Link>
            </div>

            <div className="text-lg text-gray-400 order-2 md:order-2">
              © {currentYear} SCF Strategies. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm order-1 md:order-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-lg flex items-center"
                >
                  <FileText className="w-4 h-4 mr-1" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-lg transition-colors"
      >
        <ChevronUp className="w-6 h-6" />
      </button> */}
    </footer>
  );
};

export default Footer;
