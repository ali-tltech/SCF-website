import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { BsCalendar2Date } from 'react-icons/bs';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Tips to Protecting Your Business and Family',
      author: 'Smith',
      date: 'March 15, 2022',
      image: '/images/LandingPage/discover.jpg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Tips to Protecting Your Business and Family',
      author: 'Smith',
      date: 'March 15, 2022',
      image: '/images/LandingPage/discover.jpg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more blog posts here...
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
      <div className="text-stone-800 py-10 flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl gap-8">
          {/* Blog Posts Section */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white relative shadow-sm rounded-2xl border overflow-hidden">
                  <div className="relative h-72 w-full">
                    <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="w-full h-full" />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 flex gap-2 text-xs">
                      <BsCalendar2Date className="text-blue-700" /> {post.author} / {post.date}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-blue-600">{post.title}</h3>
                    <p className="mt-1 text-gray-600">{post.excerpt}</p>
                    <button href="#" className="mt-1 inline-block bg-white absolute p-3 top-3 right-3 z-10 text-indigo-500 hover:underline">
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
            <div className="border border-[#096bd8] items-center bg-[#096bd8] flex">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
