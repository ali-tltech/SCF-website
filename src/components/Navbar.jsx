'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons for hamburger menu and close
import { usePathname } from 'next/navigation'; // Import usePathname instead of useRouter
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For toggling navbar on small screens
  const pathname = usePathname(); // Get the current pathname

  // Determine if the current route is the Contact page
  const isHome = pathname.endsWith('/');

  useEffect(() => {
    // Function to handle scroll effects
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        gsap.to('nav', { color: `${!isHome ? 'white' : 'blue'}`, duration: 0.2, backgroundColor: 'white' });
        gsap.to('.nav-link', { color: 'black', duration: 0.2 });
      } else {
        gsap.to('nav', { backgroundColor: 'transparent', duration: 0.2 });
        gsap.to('.nav-link', { color: `${isOpen ? 'black' : !isHome ? 'blue' : 'white'}`, duration: 0.2 });
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, isHome]);

  // Track location change using pathname
  useEffect(() => {
    console.log('Location changed to:', pathname);

    // You can perform additional logic here when the route changes
    // Example: Animate elements or update state

    // Optional: Add any gsap animations or other effects you want to run on location change
    gsap.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 0.2 });

  }, [pathname]); // This useEffect runs whenever `pathname` changes

  return (
    <nav className="fixed top-0 w-full z-20 md:px-20 py-5 flex items-center justify-between bg-transparent transition-all duration-300">
      <div className="logo">
        <Link href="/">
          <Image
            src="/images/logo.png" // Logo in the public/images folder
            alt="Company Logo"
            width={60}
            height={30}
            className="cursor-pointer"
          />
        </Link>
      </div>
      
      {/* Hamburger icon */}
      <div className="md:hidden  z-20" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX size={30} className="text-black cursor-pointer" /> : <HiMenu size={30} className="text-white cursor-pointer" />}
      </div>

      {/* Navbar Links */}
      <div
        className={`flex space-x-4 md:space-x-6 items-center sm:hidden transition-transform duration-300 ease-in-out md:flex-row flex-col  absolute md:static right-0 top-0 md:top-auto md:transform-none transform ${
          isOpen ? 'translate-y-0 font-thin text-black' : '-translate-y-full'
        } md:translate-x-0 bg-stone-100 text-center flex flex-col items-center md:bg-transparent w-full md:w-auto md:flex gap-2 p-3 md:p-0`}
      >
        <Link className={`nav-link p-1 border-b-2 text-sm font-light border-transparent hover:border-blue-500 transition-all duration-300 ${!isHome ? 'text-black' : ''}`} href="/">
          Home
        </Link>
        <Link className={`nav-link p-1 border-b-2 text-sm font-light border-transparent hover:border-blue-500 transition-all duration-300 ${!isHome ? 'text-black' : ''}`} href="/about">
          About Us
        </Link>
        <Link className={`nav-link p-1 border-b-2 text-sm font-light border-transparent hover:border-blue-500 transition-all duration-300 ${!isHome ? 'text-black' : ''}`} href="/enablement">
          Solutions & Enablement
        </Link>
        <Link className={`nav-link p-1 border-b-2 text-sm font-light border-transparent hover:border-blue-500 transition-all duration-300 ${!isHome ? 'text-black' : ''}`} href="/resources">
          Our Clients
        </Link>
        <Link className={`nav-link p-1 border-b-2 text-sm font-light border-transparent hover:border-blue-500 transition-all duration-300 ${!isHome ? 'text-black' : ''}`} href="/blog">
          Blog
        </Link>
        <Link className={`nav-link p-1 border-b-2 text-sm font-light border-transparent hover:border-blue-500 transition-all duration-300 ${!isHome ? 'text-black' : ''}`} href="/explore-more">
          Resource Center
        </Link>
      </div>
    </nav>
  );
}
