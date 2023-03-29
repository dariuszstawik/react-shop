import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import heroImg from "../../assets/img/hero.jpg";
import hero2Img from "../../assets/img/hero2.jpg";
import { StyledSliderContainer } from "./StyledSlider";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <StyledSliderContainer>
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
        <div>
          <img src={heroImg} alt="img1" />
        </div>

        <div>
          <img src={hero2Img} alt="img1" />
        </div>
      </AutoplaySlider>
    </StyledSliderContainer>
  );
};

export default Slider;
