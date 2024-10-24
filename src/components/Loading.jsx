'use client'; // Add this to make it a client component

import { useEffect, useState } from 'react';

const Loading = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything on the server side
  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="200" height="150">
        <rect width="200" height="150" fill="white" />
        <g transform="translate(30, 30)">
          <rect x="0" y="0" width="35" height="40" fill="black">
            <animate 
              attributeName="height" 
              values="0;40" 
              dur="0.6s" 
              begin="0s" 
              fill="freeze" 
              key="rect1"
            />
          </rect>
          <text x="17.5" y="30" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" opacity="0">
            S
            <animate 
              attributeName="opacity" 
              values="0;1" 
              dur="0.3s" 
              begin="0.6s" 
              fill="freeze" 
              key="text1"
            />
          </text>
          <rect x="45" y="0" width="35" height="40" fill="black">
            <animate 
              attributeName="height" 
              values="0;40" 
              dur="0.6s" 
              begin="0.2s" 
              fill="freeze" 
              key="rect2"
            />
          </rect>
          <text x="62.5" y="30" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" opacity="0">
            C
            <animate 
              attributeName="opacity" 
              values="0;1" 
              dur="0.3s" 
              begin="0.8s" 
              fill="freeze" 
              key="text2"
            />
          </text>
          <rect x="90" y="0" width="35" height="40" fill="black">
            <animate 
              attributeName="height" 
              values="0;40" 
              dur="0.6s" 
              begin="0.4s" 
              fill="freeze" 
              key="rect3"
            />
          </rect>
          <text x="107.5" y="30" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" opacity="0">
            F
            <animate 
              attributeName="opacity" 
              values="0;1" 
              dur="0.3s" 
              begin="1s" 
              fill="freeze" 
              key="text3"
            />
          </text>
        </g>
        <text x="100" y="100" fontSize="20" fontWeight="bold" fill="black" textAnchor="middle" opacity="0">
          Strategies
          <animate 
            attributeName="opacity" 
            values="0;1" 
            dur="0.6s" 
            begin="1.2s" 
            fill="freeze" 
            key="text4"
          />
        </text>
      </svg>
    </div>
  );
};

export default Loading;