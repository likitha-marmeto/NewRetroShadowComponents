
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import menImage from "../assets/collectionimages/collectionimage1.jpg";
import womenImage from "../assets/collectionimages/collectionimage2.jpg";
import kidsImage from "../assets/collectionimages/collectionimage3.jpg";

const categories = [
  { title: "Men", imgSrc: menImage },
  { title: "Women", imgSrc: womenImage },
  { title: "Kids", imgSrc: kidsImage },
];

const CategoryCard = ({ title, imgSrc }) => (
  <div className="card-wrapper relative overflow-hidden cursor-pointer group w-full sm:w-[45%] sm:h-[45%] md:h-[288px] md:w-[288px] lg:w-[350px]   lg:h-[350px]   h-[300px] ">
    <div className="media relative overflow-hidden h-full">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />

      
      <div className="absolute inset-0 opacity-0 bg-white rounded-[35%] scale-50 translate-x-full translate-y-full group-hover:opacity-20 group-hover:scale-125 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:transition-transform duration-300 ease-in-out"></div>
      {/* <div className="diagonal-overlay absolute inset-0 bg-gradient-to-tr from-white to-transparent rounded-[35%] opacity-0 scale-50 translate-x-full translate-y-full group-hover:opacity-90 group-hover:scale-125 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-400 ease-in-out"></div> */}
      {/* Arrow with Icon Wrap Styling */}
      <div className="icon-wrap absolute bottom-4 left-4 sm:opacity-0 sm:translate-x-[-100%] group-hover:translate-x-0 group-hover:opacity-100 sm:group-hover:translate-y-2 sm:transition-all duration-400 ease-in-out">
        <div className="icon-bg w-10 h-10 inline-flex items-center justify-center bg-black  rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 26 26"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
    <div className="absolute top-4 left-4 text-white text-[18px] md:text-[28px] font-bold z-10">{title}</div>
  </div>
);

const CategorySection = () => {
  return (
    <section className=" py-10 px-4 md:px-12">
      <h2 className="text-[25px] md:text-[42px] font-bold mb-4 pl-4 text-left">
        Pick your style, <span className="font-normal">We have many</span>
      </h2>
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
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryCard title={category.title} imgSrc={category.imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategorySection;
