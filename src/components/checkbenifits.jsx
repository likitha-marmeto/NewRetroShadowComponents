import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BenefitsSection = () => {
  const benefitsData = [
    {
      imgSrc: 'https://retro-shadow.myshopify.com/cdn/shop/files/protection.png?v=1720098254&width=2000',
      title: 'UV Protection',
      description:
        'Shield your eyes from harmful UV rays in style with our collection of trendy sunglasses. Protect your vision with fashion-forward options.',
    },
    {
      imgSrc: 'https://retro-shadow.myshopify.com/cdn/shop/files/glasses_1.png?v=1720098513&width=2000',
      title: 'Flexible frames',
      description:
        'Experience the ultimate comfort and style with our flexible frames sunglasses. Designed for durability without sacrificing fashion.',
    },
    {
      imgSrc: 'https://retro-shadow.myshopify.com/cdn/shop/files/light-eyeglasses.png?v=1720098749&width=2000',
      title: '80+ Frame options',
      description:
        'Explore sunglasses with a wide range of styles and designs featuring 80+ frame options to suit all preferences. Get the perfect pair.',
    },
  ];

  return (
    <div className="bg-[#f5f1ec] py-8 px-4">
      <h2 className="text-[25px] md:text-[42px] tracking-wide text-center pl-6 pr-6 ">
        Check the <span className="font-bold">benefits</span>
      
      <p className="text-center text-[12px] md:text-[14px] tracking-wide font-body my-4 text-black">
        Discover the Scientific Benefits of UV Protection in Sunglasses.
      </p>
      </h2>

      {/* Desktop layout */}
      <div className="hidden md:flex justify-evenly  p-16 gap-12">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="flex flex-col items-start text-left">
            <div className="mb-8">
              <img src={benefit.imgSrc} alt={`${benefit.title} Icon`} className="w-12 h-12" />
            </div>
            <h3 className="font-semibold font-body text-[16px]">{benefit.title}</h3>
            <p className="font-medium -tracking-wider text-[14px] text-[#121212] font-body mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile layout with Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
        >
          {benefitsData.map((benefit, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-left text-left px-8 py-8">
                <img src={benefit.imgSrc} alt={`${benefit.title} Icon`} className="w-12 h-12 mb-8" />
                <h3 className="font-semibold text-[14px]">{benefit.title}</h3>
                <p className="font-medium tracking-wide text-[12px] text-black font-body mt-2">{benefit.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BenefitsSection;
