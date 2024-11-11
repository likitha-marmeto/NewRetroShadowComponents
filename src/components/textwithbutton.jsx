import React from 'react';

const Banner = ({ text, buttonText = 'EXPLORE NOW' }) => {
  return (
    <div
      className="flex flex-col items-center justify-center pl-15 pr-15 pt-27 pb-27 h-52 md:h-[173.2px] text-white"
      style={{ backgroundColor: '#01a4c1' }}
    >
      <h2
        className="text-[12px] md:text-[15px] font-bold font-body h-[43.1875px] w-[350px]  text-center  leading-[21.6px] tracking-[0.6px] opacity-80 mb-12 md:mb-3 md:items-center md:w-[768px] lg:w-[1024px] md:whitespace-nowrap"
      >
        {text}
      </h2>
      <div className="relative group">
        <button
          className="relative z-10 w-[181px] h-[46px] px-6 py-2 font-body font-medium text-[14px] tracking-[.1rem] leading-[1.6] bg-white border-[1px] border-white rounded-[4px] overflow-hidden group transition-transform duration-300 text-black"
          style={{ 
            color: '#01a4c1',
            transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.2, 1)'
                }}
        >
          <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
            {buttonText}
          </span>
          <span className="absolute inset-0 bg-black transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-[cubic-bezier(0.7, 0, 0.2, 1)]"></span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
