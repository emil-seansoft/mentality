import React, { useState } from 'react';

function SocialLinksAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="border border-gray-300 rounded-lg">
        <button
          className="text-left px-2 py-2 text-white rounded-t-lg focus:outline-none" // Adjusted padding
          style={{ backgroundColor: '#333333' }}
          onClick={toggleAccordion}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm">Social Links</span> {/* Adjusted font size */}
            <svg
              className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} // Adjusted icon size
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-4 py-3" style={{ backgroundColor: '#333333' }}>
            <a href="https://dexscreener.com/solana/9ymen6enbr3zd4rtvmocbnvck5ltkh8yn2zdxj17jwtw" target="_blank" rel="noopener noreferrer" className="block text-white mb-2">
              Chart
            </a>
            <a href="https://t.me/+YD9ox3ckONQ3M2Vl" target="_blank" rel="noopener noreferrer" className="block text-white mb-2">
              Telegram
            </a>
            <a href="https://x.com/mentalitysolana/" target="_blank" rel="noopener noreferrer" className="block text-white mb-2">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialLinksAccordion;