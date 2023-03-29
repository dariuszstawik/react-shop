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
        decoratedContent="Tasty and fresh greens"
        title="Modern farming"
        img={home1}
      >
        Sed ut perspiciatis aperiam unde omnis istetus error volupta dolorem
        que, totam rem unde omnis. Lorem ipsum incididunt ut labore et dolore
        magna aliqua dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad dolore
        magna aliqua minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo.
      </AboutSection>
      <AdvantagesSection />
      <ProductsSection />
    </>
  );
};

export default Home;
