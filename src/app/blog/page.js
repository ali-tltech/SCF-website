import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Security Risks of Changing Package Owners',
      author: 'Admin',
      date: 'March 15, 2022',
      image: '/images/LandingPage/discover.jpg', // Replace with your image
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
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
    {
      title: 'Tips to Protecting Your Business and Family',
      author: 'Smith',
      date: 'March 15, 2022',
      image: '/images/LandingPage/discover.jpg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more blog posts here
  ];

  const popularPosts = [
    'Making Peace With The Feast Or Famine Of Freelancing',
    'I Used The Web For A Day On A 50 MB Budget',
    'How To Create A Responsive Popup Gallery',
  ];

  const categories = ['Business', 'Privacy', 'Technology', 'Tips'];
  const tags = ['Space', 'Gamma', 'Travel', 'Smart', 'Marketing'];

  return (
    <div className="container mx-auto text-stone-800 py-8 pt-40 px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Posts Section */}
        <div className="lg:col-span-2">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white shadow-md overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-green-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-blue-500 hover:underline">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="space-y-8">
          {/* Search */}
          <div className="border border-green-500 items-center bg-green-500 flex ">
           
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2    focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="h-full w-fit flex justify-center items-center px-5 text-white bg-green-500 "><FaSearch/></div>
          </div>

          {/* Popular Posts */}
          <div className="bg-white p-6  shadow-md">
            <h4 className="text-lg font-semibold mb-4">Popular Posts</h4>
            <ul>
              {popularPosts.map((post, index) => (
                <li key={index} className="mb-2 gap-2 justify-center items-center w-fit  flex">
                                 <img src={"/images/LandingPage/discover.jpg"} alt="hello " className=" h-20 w-20 object-cover" />
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
                <li key={index} className="mb-2 gap-2 justify-center items-center w-fit  flex">
                 <div className="p-1 bg-green-500 h-fit"></div> <a href="#" className="text-stone-700 hover:underline">{category}</a>
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
  );
};

export default Blog;
