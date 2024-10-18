'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname.endsWith('/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        gsap.to('nav', { color: 'white', duration: 0.2, backgroundColor: 'white' });
        gsap.to('.nav-link', { color: 'black', duration: 0.2 });
      } else {
        gsap.to('nav', { backgroundColor: 'transparent', duration: 0.2 });
        gsap.to('.nav-link', { color: `${isOpen ? 'white' : !isHome ? 'white' : 'white'}`, duration: 0.2 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, isHome]);

  useEffect(() => {
    console.log('Location changed to:', pathname);
    gsap.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 0.2 });
  }, [pathname]);

  const NavLink = ({ href, children, dropdown }) => (
    <div className="relative group">
      <Link 
        className={`nav-link p-1 border-b-2 text-sm font-light border-transparent hover:border-blue-500 transition-all duration-300 ${!isHome ? 'text-white' : 'text-white'} flex items-center`} 
        href={href}
      >
        {children}
        {dropdown && <FaChevronDown className="ml-1" />}
      </Link>
      {dropdown && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg border border-blue-600 bg-white  ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {dropdown}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-20 md:px-20 py-5 flex items-center justify-between bg-transparent transition-all duration-300">
      <div className="logo">
        <Link href="/">
          <Image src="/images/logo.png" alt="Company Logo" width={60} height={30} className="cursor-pointer" />
        </Link>
      </div>
      
      <div className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX size={30} className="text-black cursor-pointer" /> : <HiMenu size={30} className="text-white cursor-pointer" />}
      </div>

      <div className={`flex space-x-4 md:space-x-1 items-center sm:hidden transition-transform duration-300 ease-in-out md:flex-row flex-col absolute md:static right-0 top-0 md:top-auto md:transform-none transform ${
        isOpen ? 'translate-y-0 font-thin text-black' : '-translate-y-full'
      } md:translate-x-0 bg-stone-100 text-center flex flex-col items-center md:bg-transparent w-full md:w-auto md:flex gap-2 p-3 md:p-0`}>
        <NavLink href="/">Home</NavLink>
        <NavLink 
          href="#" 
          dropdown={
            <>
              <Link href="/consulting-service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Consulting</Link>
              <Link href="/advisory-service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Advisory</Link>
            </>
          }
        >
          Services
        </NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink 
          href="#" 
          dropdown={
            <>
              <Link href="/explore-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Explore 1</Link>
              <Link href="/explore-2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Explore 2</Link>
            </>
          }
        >
          Explore
        </NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}