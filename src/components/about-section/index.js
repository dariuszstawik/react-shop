import React from "react";
import Fade from "react-reveal/Fade";

import home1 from "../../assets/img/Home1.jpg";
import { DecoratedText } from "../atoms/decorated-text";
import { SectionParagraph } from "../atoms/section-paragraph";
import { SectionTitle } from "../atoms/section-title";
import {
  DescContainer,
  ImgContainer,
  StyledParagraph,
  StyledSectionTitle,
  StyledSectionWrapper,
} from "./StyledAboutSection";

const AboutSection = ({
  decoratedContent,
  title,
  img,
  isReverse,
  children,
}) => {
  return (
    <StyledSectionWrapper isReverse={isReverse}>
      {/* <{`Fade ${({isReverse}) => isReverse ?} right ${:} left`}>

      <Fade {({isReverse}) => isReverse ? "right": "left"}> */}
      <Fade left>
        <ImgContainer>
          <img src={img} />{" "}
        </ImgContainer>
      </Fade>
      <DescContainer>
        <DecoratedText>{decoratedContent}</DecoratedText>
        <SectionTitle>{title}</SectionTitle>
        <SectionParagraph>{children}</SectionParagraph>
      </DescContainer>
    </StyledSectionWrapper>
  );
};

export default AboutSection;
