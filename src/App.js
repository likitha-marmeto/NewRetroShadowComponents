import './App.css';
import ChooseYourStyle from './components/image-with-text-overlay';
import FeatureComponent from './components/multicolumnslide';
import CategorySection from './components/collectionlist';
import Banner from './components/textwithbutton';
import HorizontalScroll from './components/scrollingtext';
import BlogSection from './components/blogcard';
import BenefitsSection from './components/checkbenifits';
import BannerTextOverlay from './components/zoominimage';
import ImageCompare from './components/comparethelook';
import FAQAccordion from './components/faqaccordian';
import faqItems from './data/faqItems';
import Testimonials from './components/testimonials';
import ProductList from './components/featuredcollectionlist';
import RightHorizontalScroll from './components/lefttorightscroll';


function App() {
  const features = [
    'UV Protection',
    'Flexible frames',
    '80+ Frame options',
    'Scratch-proof',
  ];

  return (
    <>
      <ChooseYourStyle />
      <FeatureComponent 
        features={features} 
        bgColor="bg-black" // Change this to any Tailwind color class
        textColor="text-white"
      />
      <CategorySection />
      <Banner text="Enhance Your Style and Shield Your Eyes - Sunglasses Sale Now On!" bgColor="bg-cyan-500" />
      
      
      <ProductList></ProductList>
      <BannerTextOverlay></BannerTextOverlay>
      <HorizontalScroll></HorizontalScroll>
      <RightHorizontalScroll></RightHorizontalScroll>
      <ImageCompare
         leftImage="https://retro-shadow.myshopify.com/cdn/shop/files/2150670762.jpg?v=1720071228&width=1500"
         rightImage="https://retro-shadow.myshopify.com/cdn/shop/files/glasses-with-slightly-rounded-frame_23-2150670786.jpg?v=1720071164&width=1000"
         title="Compare the look"
         description="Discover the difference between our polarized and mirrored sunglasses. See clearly through stylish lenses designed for protection."
      />

      <BlogSection></BlogSection>
      <BenefitsSection></BenefitsSection>
      <Testimonials></Testimonials>
      <FAQAccordion items={faqItems} />
      

      
    </>
  );
}

export default App;
