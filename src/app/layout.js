'use client';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import ChatbotPreview from '@/components/chat/ChatBot';
import Footer from '@/components/Footer';
import { Inter, Montserrat, Poppins } from '@next/font/google';
import { Toaster } from 'react-hot-toast';
import CookieConsent from '@/components/CookieConsent';
import Loading from '@/components/Loading';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Constants
const LOADING_DURATION = 1500; // 1.5 seconds in milliseconds

export default function RootLayout({ children }) {
  const pageRef = useRef();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Handle initial page load
  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setLoading(false);
        setIsFirstLoad(false);
      }, LOADING_DURATION);

      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  // Handle route changes and animations
  useEffect(() => {
    if (!isFirstLoad) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, LOADING_DURATION);

      return () => clearTimeout(timer);
    }
  }, [pathname, isFirstLoad]);

  // Setup Lenis smooth scroll
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

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle page transitions
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!loading) {
        gsap.fromTo(
          pageRef.current,
          { 
           
            y: 10 
          },
          { 
           
            y: 0, 
            duration: 0.8, 
            ease: 'power4.out',
            delay: 0.1 // Small delay after loading screen fades out
          }
        );
      }
    });

    return () => ctx.revert();
  }, [loading]);

  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body className="bg-gray-100 relative">
        {/* Loading Screen */}
        {loading && <Loading />}
        
        {/* Main Content */}
        <div className={`transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
          <ChatbotPreview />
          <main ref={pageRef} className="transition-opacity ease-in-out">
            {children}
          </main>
          <Toaster position="bottom-center" duration={500} />
          <CookieConsent />
          <Footer />
        </div>
      </body>
    </html>
  );
}