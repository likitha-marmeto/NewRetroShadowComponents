import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import images directly
import image1 from '../assets/blogpostimages/image1.jpg';
import image2 from '../assets/blogpostimages/image2.jpg';
import image3 from '../assets/blogpostimages/image3.jpg';

const BlogCard = ({ image, title, description }) => (
  <div className="relative flex items-center overflow-hidden shadow-lg w-full h-full">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 "></div>
    <div className="absolute bottom-0 w-full p-5 text-left backdrop-blur-custom bg-black/60 duration-300">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white line-clamp-2 md:line-clamp-3 font-body">{description}</p>
    </div>
  </div>
);

const BlogSection = () => {
  const blogPosts = [
    {
      image: image1,
      title: '6 Important Benefits of Sunglasses for Seniors This Summer',
      description: 'Summer is nearly upon us. As you take measures to protect your skin from the sun\'s harmful rays, you must not forget...',
    },
    {
      image: image2,
      title: 'Rediscover The Joy Of Reading: Crystal-Clear Comfort With Specsmakers',
      description: 'Rediscover The Joy Of Reading: Crystal-Clear Comfort Have you ever noticed yourself holding reading materials farther...',
    },
    {
      image: image3,
      title: 'Sunglasses for Every Season: Styles and Tips',
      description: 'The ultimate destination for stylish and protective eyewear, also guides you on the latest eyewear and how to make the best...',
    },
  ];

  return (
    <div className="text-center py-12">
      <h2 className="text-3xl text-[25px] md:font-bold mb-2">
        From the <span className="font-bold">blog</span>
      </h2>
      <p className="text-black text-[12px] tracking-wide font-body">Read our articles</p>
      <button className="mt-4 font-body text-[14px] tracking-wider text-black underline ">View all</button>

      {/* Desktop and Tablet View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="w-full h-[459px] max-w-[413.33px] max-h-[459px]"
          >
            <BlogCard image={post.image} title={post.title} description={post.description} />
          </div>
        ))}
      </div>

     
      <div className="block md:hidden mt-8">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="w-[273px] h-[303px] ml-4 mr-0">
                <BlogCard image={post.image} title={post.title} description={post.description} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSection;
