import React, { useEffect, useRef, useState } from 'react';

// Custom hook to replace react-intersection-observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: options.threshold || 0.1,
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold]);

  return [ref, isInView];
};

const OurStory = () => {
  const [ref, inView] = useInView();

  return (
    <section className="min-h-screen bg-white py-20 relative overflow-hidden">
      {/* Background SVG Patterns */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 100 100" className="text-blue-500">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Story</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div ref={ref} className="space-y-12">
          {/* Founded Section */}
          <div className={`transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 flex-shrink-0">
                <svg className="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Founded in 2015</h3>
                <p className="text-gray-600 leading-relaxed">
                  SCF Strategies emerged from the recognition that traditional Supply Chain Finance providers typically offer either funding or technology, but rarely both in an integrated manner.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 flex-shrink-0">
                <svg className="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Industry Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  With over 15 years of experience in originating, implementing, and managing Supplier Finance programs that exceed $150 billion in trading volume and yield more than $2 billion in outstanding results.
                </p>
              </div>
            </div>
          </div>

          {/* Today Section */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 flex-shrink-0">
                <svg className="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Today</h3>
                <p className="text-gray-600 leading-relaxed">
                  SCF Strategies is recognized as an industry leader in SCF consulting. With over 100 SCF programs implemented globally, we've learned from the challenges and mistakes to ensure you don't have to.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-1000 delay-700`}>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-500 mb-2">100+</div>
            <div className="text-gray-600">SCF Programs Implemented</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-500 mb-2">$150B+</div>
            <div className="text-gray-600">Trading Volume</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-500 mb-2">$2B+</div>
            <div className="text-gray-600">Outstanding Results</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;