import React from 'react';
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Youtube, 
  FileText, 
  Link as LinkIcon,
  Globe,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Investors', href: '/investors' },
    { name: 'Newsroom', href: '/news' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const industries = [
    { name: 'Banking & Finance', href: '/industries/banking' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Technology', href: '/industries/technology' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' }
  ];

  const services = [
    { name: 'Digital Transformation', href: '/services/digital' },
    { name: 'Cloud Services', href: '/services/cloud' },
    { name: 'Cybersecurity', href: '/services/security' },
    { name: 'AI & Analytics', href: '/services/ai-analytics' },
    { name: 'Consulting', href: '/services/consulting' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <LinkIcon className="w-4 h-4 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <a href={industry.href} className="hover:text-white transition-colors">
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="hover:text-white transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <select className="bg-transparent border border-gray-600 rounded px-2 py-1">
                <option value="global">Global</option>
                <option value="asia">Asia Pacific</option>
                <option value="europe">Europe</option>
                <option value="americas">Americas</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {currentYear} Your Company Name. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                Terms of Use
              </a>
              <a href="/disclaimer" className="hover:text-white transition-colors flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-lg transition-colors"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;