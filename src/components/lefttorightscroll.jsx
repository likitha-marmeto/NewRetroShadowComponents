import React from "react";
import { scrollingTextItems } from "../data/scrollingTextData";

const RightHorizontalScroll = () => {
  return (
    <div className="relative overflow-hidden w-full py-4">
      <div className="flex animate-scroll-left-to-right space-x-12">
        {scrollingTextItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 group transition-transform duration-300"
          >
            <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.text}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-150"
              />
            </div>
            <p className="text-[32px] lg:text-[42px] tracking-widest text-black/75 uppercase whitespace-nowrap group-hover:text-black group-hover:underline decoration-1 underline-offset-[15px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightHorizontalScroll;
