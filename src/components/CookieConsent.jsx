import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show cookie popup after 5 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  const handleAccept = () => {
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className={`cookie-popup fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white z-50 ${visible ? 'show' : ''}`}>
      <div className="container mx-auto flex justify-center items-center gap-8">
        <p className="text-sm">
        We use cookies on this site to enhance your user experience. By clicking the Accept button,  you agree to us doing so.        </p>
        <div className="flex space-x-4">
          <button 
            onClick={handleAccept} 
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Accept
          </button>
          <button 
            onClick={handleClose} 
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
