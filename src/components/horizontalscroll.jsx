import React from 'react';

const ProductTextSlider = ({ products }) => {
  return (
    <section className="section product_slide py-2 overflow-hidden">
      <div className="text_slide_main whitespace-nowrap overflow-hidden">
        <div className="product_slide left_right animate-marquee">
          {products.map((product, index) => (
            <span className="inline-flex mx-12 uppercase tracking-wider" key={index}>
              <a href={product.url} className="product_slide_link flex items-center gap-8 text-gray-700 hover:text-blue-600 transition duration-300">
                <img 
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  title={product.imageTitle}
                  loading="lazy"
                  className="w-15 h-15 object-cover transition-transform duration-300 hover:scale-90 rounded-full"
                />
                <span className="relative">
                  {product.title}
                  <span className="after:content-[''] after:absolute after:h-0.5 after:bg-blue-600 after:w-4/5 after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100 hover:after:w-full transition-all duration-300" />
                </span>
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// Define your products array here
const products = [
  {
    url: "/products/blue-full-rim-square-1",
    imageSrc: "//retro-shadow.myshopify.com/cdn/shop/files/elderly-man-with-chain-necklaces-posing_23-2149403115.jpg?v=1720005600&width=375",
    imageAlt: "Blue Full Rim Square",
    imageTitle: "Blue Full Rim Square",
    title: "Blue Full Rim Square",
  },
  {
    url: "/products/grey-transparent-full-rim-square",
    imageSrc: "//retro-shadow.myshopify.com/cdn/shop/files/elderly-man-with-chain-necklaces-posing_23-2149403120.jpg?v=1720090724&width=375",
    imageAlt: "Grey Transparent Full Rim Square",
    imageTitle: "Grey Transparent Full Rim Square",
    title: "Grey Transparent Full Rim Square",
  },
  // Add more products as needed
];

export default function App() {
  return <ProductTextSlider products={products} />;
}
