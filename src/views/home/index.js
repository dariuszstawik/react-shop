import React from "react";
import { useDispatch } from "react-redux";
import AboutSection from "../../components/about-section";
import ProductsSection from "../../components/products-section";
import AdvantagesSection from "../../components/shop-advantages";
import Slider from "../../components/slider";
import home1 from "../../assets/img/Home1.jpg";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Slider />
      <AboutSection
        decoratedContent="Eat tasty and fresh"
        title="Welcome to Krasulove"
        img={home1}
      >
        Photos on this website under Creative Commons License by:
        <ul>
          <li>
            {" "}
            <a href="https://www.flickr.com/photos/jobeca/47368834172/">
              Jarr1942
            </a>
          </li>
          <li>
            <a href="https://www.flickr.com/photos/nicholas_t/19596429944/">
              Nicholas_T
            </a>
          </li>
          <li>
            <a href="https://www.flickr.com/photos/almostsummersky/30068146102/">
              Katie Wheeler
            </a>
          </li>
          <li>
            <a href="https://www.flickr.com/photos/usaid-biodiversity-forestry/4325611549/">
              USAID Biodiversity & Forestry
            </a>
          </li>
        </ul>
      </AboutSection>
      <AdvantagesSection />
      <ProductsSection />
    </>
  );
};

export default Home;
