import React from 'react';
import { Sparkles } from 'lucide-react';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';

const Catalogues = () => {
  return (
    <div className="min-h-screen bg-primary relative overflow-hidden">
      {/* Aurora background component */}
      <AuroraBackgroundDemo
        title="Resources"
        description="Your gateway to knowledge and tools"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
          <div className="flex items-center justify-center mb-6 relative">
            <Sparkles className="w-12 h-12 text-purple-600 mr-3 animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Resources Coming Soon!
            </h1>
            <Sparkles className="w-12 h-12 text-blue-600 ml-3 animate-pulse" />
            
            {/* Additional decorative sparkles */}
            <Sparkles className="absolute -top-8 left-1/4 w-6 h-6 text-purple-400 animate-bounce" />
            <Sparkles className="absolute -bottom-8 right-1/4 w-6 h-6 text-blue-400 animate-bounce" />
          </div>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            We&apos;re diligently working to bring you our new resources. 
            Stay tuned for updates and sneak peeks!
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Notify Me
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-50 text-purple-600 rounded-lg shadow-lg border border-purple-200 transition-all duration-300 transform hover:scale-105">
                Explore Other Sections
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Want to be the first to know? Sign up for our newsletter below!
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-10 transform translate-x-1/2" />
      </div>
    </div>
  );
};

export default Catalogues;