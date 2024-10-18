'use client';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import ChatbotPreview from '@/components/chat/ChatBot';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  const pageRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Trigger GSAP animation on route change
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 1, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }
      );
    });

    return () => {
      ctx.revert(); // Cleanup GSAP on component unmount
      lenis.destroy(); // Cleanup Lenis on component unmount
    };
  }, [pathname]); // Re-run effect on route change

  return (
    <html lang="en">
      <body className="bg-gray-100 relative ">
        <Navbar />
        {/* <ChatbotPreview /> */}
        <main ref={pageRef} className="transition-opacity ease-in-out">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
