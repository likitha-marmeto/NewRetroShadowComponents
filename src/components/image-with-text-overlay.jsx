import React from "react";
import backgroundImage from '../assets/main-slider-min.jpg';
import '../index.css'; // Ensure global styles are imported if needed

const ChooseYourStyle = () => {
  return (
    <div 
      className="relative w-full h-screen text-white bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Banner Box Wrapper */}
      <div className="flex flex-col justify-center items-center pb-10 pl-9 pr-9 md:items-start max-w-[37rem] mx-auto relative z-10 top-1/2 transform -translate-y-1/2 text-center md:text-left md:pl-12  md:translate-x-0 lg:translate-x-[-45%] ">
        
        {/* Heading */}
        <h1 className="text-center md:text-left md:heading font-normal mb-5 text-[25px] md:text-[48px] break-words">
          Choose your style
        </h1>

        {/* Subheading */}
        <p className="text-[13px] font-normal font-body md:subheadingfont  break-words mb-6 max-w-[35rem] text-center md:text-[14px] md:text-left"
        >
          Explore our new latest shapes of sunglasees and frames and get modern look with it.
        </p>
        
        {/* Button */}
        <button 
          className="relative z-10 w-[152.28px] h-[46px] px-6 py-2 font-body font-medium text-[14px] tracking-[.1rem] leading-[1.6] bg-white border-[1px] border-white rounded-[4px] overflow-hidden group transition-transform duration-300 text-black"
          style={{ transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.2, 1)' }}
        >
          <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
            SHOP NOW
          </span>
          <span className="absolute inset-0 bg-black transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-[cubic-bezier(0.7, 0, 0.2, 1)]"></span>
        </button>
      </div>
    </div>
  );
};

export default ChooseYourStyle;
