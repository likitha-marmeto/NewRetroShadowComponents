import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Testimonials data
const testimonials = [
  {
    text: "The quality is simply amazing, brilliant. People always come and ask me about these shades.",
    name: "Alex",
    location: "New York",
  },
  {
    text: "They are really comfortable. I find them very efficient. They are not only stylish but they also protect my eyes with UV Coated and Polarized Lenses.",
    name: "Taylor",
    location: "Los Angeles",
  },
  // Add more testimonials here as needed
];

export default function Testimonials() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start pr-[15px] pl-[15px] space-y-2 md:space-y-0 md:space-x-8 p-4 md:p-10 mx-5">
      {/* Left side (title and description) */}
      <div className="">
        <h2 className="text-[25px] tracking-wide md:text-[42px] ">
          <span className="font-bold">Customers</span> stories
        </h2>
        <p className="text-black font-[400] tracking-wider leading-5 text-[12px] md:text-[14px] font-body mt-2">
          Discover our high-quality sunglasses designed for style and durability.
          Elevate your look with our wide selection of shades.
        </p>
      </div>

      {/* Right side (testimonial content) */}
      <div className="md:w-1/2 w-full flex flex-col items-center space-y-4">
        <Swiper
          navigation
          modules={[Navigation]}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col space-y-4">
                {/* Comma Icons */}
                <div className="flex justify-center md:justify-start mt-1 lg:justify-start space-x-0">
                <svg width="53" height="37" viewBox="0 0 53 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black/40">
               <path d="M43.5088 0.916992C43.0127 2.07454 42.5579 3.31478 42.1445 4.6377C41.8138 5.87793 41.6071 7.11816 41.5244 8.3584C41.5244 9.51595 41.7311 10.5908 42.1445 11.583C42.5579 12.4925 43.3021 13.2367 44.377 13.8154C46.5267 14.973 48.3457 16.4613 49.834 18.2803C51.4049 20.0166 52.1904 22.1663 52.1904 24.7295C52.1904 26.3005 51.901 27.7887 51.3223 29.1943C50.7435 30.5999 49.9167 31.8402 48.8418 32.915C47.8496 33.9072 46.6507 34.6927 45.2451 35.2715C43.8395 35.8503 42.3512 36.1396 40.7803 36.1396C37.6383 36.1396 34.9925 35.0234 32.8428 32.791C30.693 30.5586 29.5355 27.8714 29.3701 24.7295C29.1221 21.4222 29.5355 18.363 30.6104 15.5518C31.7679 12.6579 33.0908 10.1361 34.5791 7.98633C36.1501 5.83659 37.6797 4.10026 39.168 2.77734C40.6562 1.37174 41.6898 0.46224 42.2686 0.0488281C42.4339 0.13151 42.6406 0.255534 42.8887 0.420898L43.2607 0.792969C43.3434 0.875651 43.4261 0.916992 43.5088 0.916992ZM14.9834 0.916992C14.4873 2.07454 14.0326 3.31478 13.6191 4.6377C13.2884 5.87793 13.0817 7.11816 12.999 8.3584C12.999 9.51595 13.2057 10.5908 13.6191 11.583C14.0326 12.4925 14.7767 13.2367 15.8516 13.8154C18.0013 14.973 19.8203 16.4613 21.3086 18.2803C22.8796 20.0166 23.665 22.1663 23.665 24.7295C23.665 26.3005 23.3757 27.7887 22.7969 29.1943C22.2181 30.5999 21.3913 31.8402 20.3164 32.915C19.3242 33.9072 18.1253 34.6927 16.7197 35.2715C15.3141 35.8503 13.8258 36.1396 12.2549 36.1396C9.11296 36.1396 6.46712 35.0234 4.31738 32.791C2.16764 30.5586 1.01009 27.8714 0.844727 24.7295C0.59668 21.4222 1.01009 18.363 2.08496 15.5518C3.24251 12.6579 4.56543 10.1361 6.05371 7.98633C7.62467 5.83659 9.1543 4.10026 10.6426 2.77734C12.1309 1.37174 13.1644 0.46224 13.7432 0.0488281C13.9085 0.13151 14.1152 0.255534 14.3633 0.420898L14.7354 0.792969C14.818 0.875651 14.9007 0.916992 14.9834 0.916992Z" fill="currentColor"></path>
               </svg>
                </div>

                {/* Testimonial Text */}
                <div className="">
                <p className="text-left justify-center font-bold text-xl text-black/80 line-clamp-5 tracking-[0.03em] font-body ">
                  {testimonial.text}
                </p>
                </div>

                {/* Author Info */}
                <div className="text-left font-body text-[14px] tracking-wide leading-6 text-black">
                  <p className="italic" >{testimonial.name}</p>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </SwiperSlide> 
          ))}
        </Swiper>
      </div>
    </div>
  );
}
