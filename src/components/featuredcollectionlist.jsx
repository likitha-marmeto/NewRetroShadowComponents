import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import image1 from '../assets/featuredcollectionimages/image1.jpg';
import image2 from '../assets/featuredcollectionimages/image2.jpg';
import image3 from '../assets/featuredcollectionimages/image3.jpg';
import image4 from '../assets/featuredcollectionimages/image4.jpg';

const ProductCard = ({ image, badge, oldPrice, newPrice, name, isOutOfStock }) => (
  <div className="relative bg-white  overflow-hidden">
    {/* Badge */}
    {badge && (
      <div className={`absolute top-2 left-2 px-4 py-1 text-sm font-body font-semibold rounded ${isOutOfStock ? 'bg-white text-black' : 'bg-[#01A4C1] text-white'}`}>
        {badge}
      </div>
    )}

    {/* Product Image */}
    <img src={image} alt={name} className="w-full h-[350px] object-cover" />

    {/* Plus Icon */}
<div className="group absolute bottom-[6rem] lg:bottom-[8rem] right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow">
  <button className="text-3xl text-black transition-transform duration-300 transform group-hover:rotate-90">
    +
  </button>
</div>


    {/* Product Details */}
    <div className="p-4">
      <div className="flex items-center space-x-2">
        {oldPrice && <span className="text-[13px] text-black font-body line-through">{oldPrice}</span>}
        <span className="text-[13px] font-body text-black">{newPrice}</span>
      </div>
      <h3 className="mt-2 text-gray-700 font-semibold">{name}</h3>
      {isOutOfStock && <p className="text-red-600 font-semibold mt-1">Out of stock</p>}
    </div>
  </div>
);

const ProductList = () => {
  const products = [
    { image: image1, badge: 'SALE', oldPrice: '€278', newPrice: '€200', name: 'Black Blue Full Rim Rectangle' },
    { image: image2, badge: 'SALE', oldPrice: '€100', newPrice: '€90', name: 'Grey Transparent Full Rim Cat Eye' },
    { image: image3, badge: 'SALE', oldPrice: '€85', newPrice: '€78', name: 'Blue Full Rim Square Eyeglasses' },
    { image: image4, badge: 'SOLD OUT', oldPrice: '€67', newPrice: '€45', name: 'Silver Black Full Rim Geometric', isOutOfStock: true },
  ];

  return (
    <div className="lg:px-8 lg:py-4">
      {/* People's Pick Section */}
      <div className="lg:px-8 px-4 py-4 mb-4 text-left text-[25px] lg:text-[42px] font-body tracking-wide font-[400] text-black">
        People's pick
        <div className="text-black text-[14px] font-[400] font-body tracking-wide">10+ frame options</div>
      </div>

      {/* Category Selector */}
      <div className="lg:px-8 px-4 py-4">
        <div className="flex space-x-4 mb-8">
          <button className="px-6 py-3 bg-black text-[14px] text-white rounded-full">Women</button>
          <button className="px-6 py-3 border border-gray-300 text-[14px] text-gray-700 rounded-full">Men</button>
          <button className="px-6 py-3 border border-gray-300 text-[14px] text-gray-700 rounded-full">Sunglasses</button>
        </div>

        {/* Product Grid for Desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Swiper for Mobile View */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1.3}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
