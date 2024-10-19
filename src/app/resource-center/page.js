import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import React from 'react';

const ResourceCenter = () => {
  return (
    <div>
      {/* Hero Section */}
      <AuroraBackgroundDemo  title={'Resource Center'} description={' Find the best resources for your SCF programs'} link={'Learn More'}/>

      {/* Main Resource Section */}
      <div className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 text-zinc-800'>
            Your Hub for Supply Chain Finance Insights
          </h2>
          <p className='text-lg md:text-xl mb-12 text-gray-700'>
            📚 Welcome to Your Ultimate Resource Hub for Supply Chain Finance Insights
          </p>

          <p className='text-gray-700 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed'>
            Dive into a wealth of knowledge and expertise at SCF Strategies. Our Resource Center is designed to provide you with valuable information, cutting-edge research, and practical tools to enhance your understanding and execution of Supply Chain Finance (SCF) strategies. From comprehensive whitepapers to insightful case studies, we equip you with the resources you need to stay ahead in the dynamic world of SCF.
          </p>

          {/* Resources Content */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Whitepapers & Reports */}
            <div className='bg-white shadow-lg rounded-lg p-6 text-left'>
              <h3 className='text-2xl font-bold mb-4 text-zinc-800'>
                📄 Whitepapers & Reports
              </h3>
              <p className='text-gray-600 font-semibold text-base leading-relaxed'>
                In-Depth Analysis and Industry Reports
              </p>
              <p className='mt-4 text-gray-600 text-base leading-relaxed'>
                Access our collection of detailed whitepapers and industry reports. These documents offer thorough analyses and strategic insights into the latest trends and developments in Supply Chain Finance, helping you make informed decisions and stay ahead of the curve.
              </p>
            </div>

            {/* Blog & Articles */}
            <div className='bg-white shadow-lg rounded-lg p-6 text-left'>
              <h3 className='text-2xl font-bold mb-4 text-zinc-800'>
                📝 Blog & Articles
              </h3>
              <p className='text-gray-600  font-semibold  text-base leading-relaxed'>
                Expert Opinions and Practical Advice
              </p>
              <p className='mt-4 text-gray-600 text-base leading-relaxed'>
                Explore our blog for regular updates, expert opinions, and practical advice on SCF. Our articles cover a wide range of topics, from emerging trends and best practices to practical tips for optimizing your SCF programs.
              </p>
            </div>

            {/* Case Studies */}
            <div className='bg-white shadow-lg rounded-lg p-6 text-left'>
              <h3 className='text-2xl font-bold mb-4 text-zinc-800'>
                📊 Case Studies
              </h3>
              <p className='text-gray-600  font-semibold  text-base leading-relaxed'>
                Real-World Success Stories
              </p>
              <p className='mt-4 text-gray-600  text-base leading-relaxed'>
                Learn from real-world examples of successful SCF implementations. Our case studies showcase how leading companies have transformed their supply chain finance strategies, offering valuable lessons and inspiration for your own initiatives.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className='mt-12'>
            <a
              href='#'
              className='inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition'>
              ➡️ Explore Our Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCenter;
