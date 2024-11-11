import React, { useState } from 'react';

const FAQAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto md:mx-12 lg:mx-38 xl:mx-40 md:p-12 lg:p-28 p-6">
      <h2 className=" text-[25px] md:text-[42px] text-gray-900 text-center mb-2">Faq</h2>
      <p className="text-center text-[12px] md:text-[14px] tracking-wider md:mx-8 text-black font-body  mb-6">
        Discover our brand's commitment to quality with our expertly crafted products.
        Welcome to a world of premium goods.
      </p>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className=" bg-[#f5f1ec] rounded-lg ">
            <button
              className={`w-full text-left text-[16px] md:text-[20px] lg:text-[20px] rounded-lg py-4 px-6 flex justify-between items-center  focus:outline-none ${
                activeIndex === index ? 'bg-[#f5f1ec] text-black' : 'bg-[#f9f7f6] text-[#675e5e]'
              }`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.question}</span>
              <span className="ml-2">
                {activeIndex === index ? (
                  // Minus icon when the item is open
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-qty-minus w-6 h-6" viewBox="0 0 18 18" fill="none">
                    <path d="M6 9H12M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  // Plus icon when the item is closed
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-qty-plus w-6 h-6" viewBox="0 0 18 18" fill="none">
                    <path d="M9 5.25V12.75M5.25 9H12.75M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-200 ${
                activeIndex === index ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <p className="md:pl-6 pr-8 tracking-wide px-6 pb-4 font-medium rounded-lg font-body text-[14px] bg-[#f5f1ec] text-black">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
