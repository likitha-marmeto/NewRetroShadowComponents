import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const FeatureComponent = ({ features, bgColor, textColor = 'text-white' }) => {
  const swiperRef = useRef(null);

  return (
    <div className={`${bgColor} mt-3 py-4 md:mt-0 md:py-10`}>
      <div className="container ">
        {/* Desktop View: Features in Grid Format */}
        <div className={`hidden md:flex text-[14px] font-semibold md:text-[16px] justify-evenly ${textColor}`}>
          {features.map((feature, index) => (
            <div key={index} className="text-center px-8">
              <p>{feature}</p>
            </div>
          ))}
        </div>

        {/* Mobile View: Swiper with Navigation and Pagination */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="flex-1 color-black"
            style={{
              '--swiper-navigation-color': 'black',
            }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={`flex justify-center items-center mx-0 py-4 ${textColor}`}>
                  <p className="text-center">{feature}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
    </div>
  );
};

export default FeatureComponent;
