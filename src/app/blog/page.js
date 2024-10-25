import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { BsCalendar2Date } from 'react-icons/bs';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Roundtable on Supply Chain Finance at TXF in New York',
      author: 'SCF Strategies',
      date: 'September 17, 2018',
      image: '/images/LandingPage/discover.jpg',
      excerpt: 'SCF Strategies participated in the TXF Conference in New York, discussing emerging trends and the impact of trade dynamics.',
    },
    {
      title: 'SCF Strategies at the BAFT Supply Chain Finance Bootcamp',
      author: 'SCF Strategies',
      date: 'September 17, 2018',
      image: '/images/LandingPage/discover.jpg',
      excerpt: 'SCF Strategies attended the BAFT Bootcamp, focusing on technological innovations and best practices in SCF programs.',
    },
    {
      title: '4 Key Success Factors for Effective Supply Chain Finance',
      author: 'SCF Strategies',
      date: 'October 30, 2018',
      image: '/images/LandingPage/discover.jpg',
      excerpt: 'This post outlines four essential success factors for SCF programs, including setting clear targets and selecting the right structure.',
    },
    {
      title: "Supplier Onboarding - It's Not as Tough as You Think",
      author: 'SCF Strategies',
      date: 'October 6, 2018',
      image: '/images/LandingPage/discover.jpg',
      excerpt: 'An introduction to the importance of effective supplier onboarding in SCF, highlighting challenges and best practices.',
    },
    {
      title: 'Filling a Critical Need in Supply Chain Finance',
      author: 'SCF Strategies',
      date: 'September 25, 2018',
      image: '/images/LandingPage/discover.jpg',
      excerpt: 'SCF Strategies emphasizes the need for comprehensive knowledge in SCF, showcasing a case study on supplier engagement.',
    }
  ];

  const popularPosts = [
    'Making Peace With The Feast Or Famine Of Freelancing',
    'I Used The Web For A Day On A 50 MB Budget',
    'How To Create A Responsive Popup Gallery',
  ];

  const categories = ['Business', 'Privacy', 'Technology', 'Tips'];
  const tags = ['Space', 'Gamma', 'Travel', 'Smart', 'Marketing'];

  return (
    <>
      <AuroraBackgroundDemo title={'Blogs'} description={'Elevate Your Supply Chain Finance Strategy'} link={'Learn More'} />
      <div className="text-stone-800 py-10 flex justify-center bg-indigo-100 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1  lg:grid-cols-3  gap-8">
          {/* Blog Posts Section */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
  <div key={index} className="bg-white relative shadow-sm rounded-2xl border overflow-hidden">
    <div className="relative h-72 w-full">
      <Image src={`/images/blog/${index + 1}.png`} alt={post.title} layout="fill" objectFit="cover" className="w-full h-full" />
    </div>
    <div className="p-4">
      <p className="text-gray-500 flex gap-2 text-xs">
        <BsCalendar2Date className="text-blue-700" /> {post.author} / {post.date}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-blue-600">{post.title}</h3>
      <p className="mt-1 text-gray-600">{post.excerpt}</p>
      <button className="mt-1 inline-block bg-white absolute p-3 top-3 right-3 z-10 text-indigo-500 hover:underline">
        +
      </button>
    </div>
  </div>
))}

            </div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-8">
            {/* Search */}
            <div className="border border-[#096bd8] rounded-lg items-center  shadow-md bg-[#096bd8] flex">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 focus:outline-none focus:ring-2 rounded-lg rounded-e-none focus:ring-blue-500"
              />
              <div className="h-full w-fit flex justify-center items-center px-5 text-white bg-[#096bd8]">
                <FaSearch />
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-6 shadow-md">
              <h4 className="text-lg font-semibold mb-4">Popular Posts</h4>
              <ul>
                {popularPosts.map((post, index) => (
                  <li key={index} className="mb-2 gap-2 justify-center items-center w-fit flex">
                    <Image src={'/images/LandingPage/discover.jpg'} alt="Popular Post" width={200} height={200} className="h-20 w-20 object-cover" />
                    <a href="#" className="text-blue-500 hover:underline">{post}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="mb-2 gap-2 justify-center items-center w-fit flex">
                    <div className="p-1 bg-[#096bd8] h-fit"></div>
                    <a href="#" className="text-stone-700 hover:underline">{category}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
