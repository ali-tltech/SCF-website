"use client";
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { BsCalendar2Date } from 'react-icons/bs';
import Link from 'next/link';
import AuroraBackgroundDemo from '../auroraBackground/AuroraDemo';

// Skeleton Loading Component
const BlogCardSkeleton = () => {
  return (
    <div className="bg-slate-200 relative p-4 shadow-lg rounded-2xl overflow-hidden">
      <div className="relative h-72 w-full bg-gray-400 animate-pulse rounded-2xl" />
      <div className="p-3 space-y-3">
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-gray-400 animate-pulse rounded-full" />
          <div className="w-32 h-4 bg-gray-400 animate-pulse rounded" />
        </div>
        <div className="w-full h-6 bg-gray-400 animate-pulse rounded" />
        <div className="w-full h-4 bg-gray-400 animate-pulse rounded" />
        <div className="w-40 h-4 bg-gray-400 animate-pulse rounded" />
      </div>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`} passHref>
      <div className="bg-white relative p-4 shadow-lg rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <div className="relative h-72 w-full">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className=" py-2">
          <p className="text-gray-600 flex gap-2 text-xs">
            <BsCalendar2Date className="text-black" />
            {post.author} / {post.date}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-title line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-3 text-gray-700 text-xs line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

// Search Component
const SearchBar = ({ onSearch }) => {
  return (
    <div className="rounded-lg items-center shadow-md p-1 bg-black flex">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 focus:outline-none focus:ring-2 rounded-lg rounded-e-none"
      />
      <div className="h-full w-fit flex justify-center items-center px-5 text-white bg-black">
        <FaSearch />
      </div>
    </div>
  );
};

// Main Blog Content Component
const BlogContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const blogPosts = [
    {
      id: 'roundtable-txf-ny-2018',
      title: 'Roundtable on Supply Chain Finance at TXF in New York',
      author: 'SCF Strategies',
      date: 'September 17, 2018',
      category:"Trade Dynamics",
      image: '/images/blog/1.png',
      excerpt: 'SCF Strategies participated in the TXF Conference in New York, discussing emerging trends and the impact of trade dynamics.',
    },
    {
      id: 'baft-scf-bootcamp-2018',
      title: 'SCF Strategies at the BAFT Supply Chain Finance Bootcamp',
      author: 'SCF Strategies',
      date: 'September 17, 2018',
      image: '/images/blog/2.png',
      excerpt: 'SCF Strategies attended the BAFT Bootcamp, focusing on technological innovations and best practices in SCF programs.',
    },
    {
      id: '4-key-success-factors-scf',
      title: '4 Key Success Factors for Effective Supply Chain Finance',
      author: 'SCF Strategies',
      date: 'October 30, 2018',
      image: '/images/blog/3.png',
      excerpt: 'This post outlines four essential success factors for SCF programs, including setting clear targets and selecting the right structure.',
    },
    {
      id: 'supplier-onboarding-guide',
      title: 'Supplier Onboarding - It&apos;s Not as Tough as You Think',
      author: 'SCF Strategies',
      date: 'October 6, 2018',
      image: '/images/blog/4.png',
      excerpt: 'An introduction to the importance of effective supplier onboarding in SCF, highlighting challenges and best practices.',
    },
    {
      id: 'critical-need-scf-2018',
      title: 'Filling a Critical Need in Supply Chain Finance',
      author: 'SCF Strategies',
      date: 'September 25, 2018',
      image: '/images/blog/5.png',
      excerpt: 'SCF Strategies emphasizes the need for comprehensive knowledge in SCF, showcasing a case study on supplier engagement.',
    }
  ];

  const popularPosts = [
    'Making Peace With The Feast Or Famine Of Freelancing',
    'I Used The Web For A Day On A 50 MB Budget',
    'How To Create A Responsive Popup Gallery',
  ];

  const categories = [
    'Supply Chain Finance',
    'Working Capital',
    'Trade Finance',
    'Case Studies',
    'Industry News',
    'Best Practices'
  ];
  
  const tags = [
    'Supplier Onboarding',
    'Risk Management',
    'Technology',
    'Banking',
    'Dynamic Discounting',
    'Procurement',
    'KYC/AML',
    'Sustainability',
    'Platform Selection',
    'Cross-border Trade',
    'Invoice Finance',
    'Treasury'
  ];
  
  const handleSearch = (value) => {
    setSearchTerm(value);
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 1000);
  };

  const displayPosts = searchTerm ? filteredPosts : blogPosts;

  return (
    <>
      <AuroraBackgroundDemo
        title={'Blogs'} 
        description={'Elevate Your Supply Chain Finance Strategy'} 
        link={'Learn More'} 
      />
      <div className="text-stone-800 py-10 flex justify-center max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Search Bar on top for mobile */}
          <div className="lg:hidden order-first mb-8 w-full">
            <SearchBar onSearch={handleSearch} />
          </div>
    
          {/* Blog Posts Section */}
          <div className="lg:col-span-2">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {isLoading ? (
                // Show skeletons while loading
                Array.from({ length: 4 }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))
              ) : displayPosts.length > 0 ? (
                // Show filtered results
                displayPosts.map((post, index) => (
                  <BlogCard key={index} post={post} />
                ))
              ) : (
                // Show no results message
                <div className="col-span-2 text-center py-10">
                  <h3 className="text-xl font-semibold text-gray-600">No posts found matching &quot;{searchTerm}&quot;</h3>
                </div>
              )}
            </div>
          </div>
    
          {/* Sidebar Section */}
          <div className="space-y-8 order-last lg:order-none">
            
            {/* Search Bar for desktop view */}
            <div className="hidden lg:block">
              <SearchBar onSearch={handleSearch} />
            </div>
    
            {/* Popular Posts */}
            <div className="bg-white p-6 shadow-md">
              <h4 className="text-lg font-semibold mb-4">Popular Posts</h4>
              <ul>
                {popularPosts.map((post, index) => (
                  <li key={index} className="mb-2 gap-2 justify-center items-center w-fit flex">
                    <Image src={'/images/LandingPage/discover.jpg'} alt="Popular Post" width={200} height={200} className="h-20 w-20 object-cover" />
                    <Link href="/popularposts" className="text-blue-500 hover:underline">{post}</Link>
                  </li>
                ))}
              </ul>
            </div>
    
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="mb-2 text-gray-700">
                    <Link href="/blog/categories" className="text-gray-700 hover:text-blue-500">{category}</Link>
                  </li>
                ))}
              </ul>
            </div>
    
            {/* Tags */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">Tags</h4>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <Link key={index} href="/blog/categories" className="mr-2 mb-2 inline-block px-3 py-1 text-sm bg-gray-200 rounded-full hover:bg-gray-300">{tag}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;