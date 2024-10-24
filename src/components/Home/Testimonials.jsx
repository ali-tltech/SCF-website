import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Working with SCF Strategies transformed our approach to supply chain finance. Their team brought not only deep industry knowledge but also a hands-on, practical approach to implementation. Thanks to their guidance, we optimized our SCF program and improved cash flow significantly.",
      author: "CFO, Global Retail Corporation",
      rating: 5
    },
    {
      text: "SCF Strategies went above and beyond in helping us implement a reverse factoring program that delivered real, measurable results. Their expertise in supplier onboarding and working capital analysis was instrumental in the success of our initiative.",
      author: "Head of Procurement, Leading Manufacturing Firm",
      rating: 5
    },
    {
      text: "We partnered with SCF Strategies for an audit of our existing SCF platform, and the insights they provided were invaluable. They not only identified gaps but gave us clear, actionable recommendations to improve performance. Their team's professionalism and dedication were outstanding.",
      author: "CEO, Fintech Company",
      rating: 5
    },
    {
      text: "SCF Strategies made a complex process feel seamless. From evaluating potential partners to managing our go-to-market strategy, they were with us every step of the way. The team's industry experience was clearly evident, and we've seen incredible improvements in both our supplier relationships and cash flow.",
      author: "Treasurer, International Bank",
      rating: 5
    },
    {
      text: "SCF Strategies helped us launch our Supply Chain Finance program with precision and expertise. Their ability to align cross-functional teams and navigate the challenges of accounting treatment was a game-changer for us. They're not just consultants – they're true partners in success.",
      author: "VP of Finance, Global Logistics Company",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Background SVG Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <svg className="w-16 h-2 mx-auto" viewBox="0 0 60 8">
            <rect width="60" height="8" fill="#2563eb" rx="4" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large Quote SVG */}
          <Quote className="absolute -top-6 -left-8 w-16 h-16 text-blue-100" />
          
          {/* Testimonial Card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg md:text-xl mb-6 ">
              &quot;{testimonials[currentIndex].text}&quot;
              </p>
              
              {/* Author */}
              <p className="text-blue-700 font-bold text-2xl">
                 {testimonials[currentIndex].author}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
            <div className="flex justify-between">
              <button 
                onClick={handlePrev}
                className="transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button 
                onClick={handleNext}
                className="transform translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;