import React, { useEffect, useRef, useState, useCallback } from 'react';
import 'tailwindcss/tailwind.css';
import promoImage from '../assets/imagewithtextoverlay.jpg';

const BannerTextOverlay = () => {
  const ref = useRef(null);
  const initialZoom = 1.096;
  const maxZoom = 1.5;
  const [scale, setScale] = useState(initialZoom);

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect();
      if (top <= window.innerHeight && bottom >= 0) {
        const scrollDistance = Math.max(0, window.innerHeight - top);
        const newScale = Math.min(initialZoom + (scrollDistance / window.innerHeight) * 0.2, maxZoom);
        setScale(newScale);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div ref={ref} className="relative overflow-hidden flex items-center justify-start h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full">
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <img
          src={promoImage}
          alt="Promotional"
          className="w-full h-full object-cover mx-4 lg:mx-8"
        />
      </div>

      <div className="relative z-10 flex items-start max-w-lg p-4 md:p-10 lg:p-12 bg-white/70 backdrop-blur-lg rounded-lg mx-4 lg:mx-8">
        <div>
          <h3 className="text-gray-800 text-base md:text-lg font-semibold">
            Get your vision now
          </h3>
          <p className="text-gray-900 text-lg md:text-2xl font-bold mt-3">
            Get 10% off.
          </p>
          <button className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerTextOverlay;
