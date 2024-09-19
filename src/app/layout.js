'use client'
import '../styles/globals.css'; // Correct import path for Tailwind CSS
import Navbar from '../components/Navbar';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation'; // Use this to detect route changes

export default function RootLayout({ children }) {
  const pageRef = useRef();
  const pathname = usePathname();

  // Trigger GSAP animation on route change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current, 
        { opacity: 1, y: -50 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'powe4.out' }
      );
    });

    return () => ctx.revert(); // Cleanup GSAP on component unmount
  }, [pathname]); // Re-run effect on route change

  return (
    <html lang="en">
      <body className="bg-gray-100 "> {/* You can style the body with Tailwind CSS */}
        <Navbar />
        <main ref={pageRef} className="transition-opacity ease-in-out">
          {children}
        </main>
      </body>
    </html>
  );
}
