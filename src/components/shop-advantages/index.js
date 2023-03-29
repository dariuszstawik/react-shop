import React from "react";
import {
  StyledDeliverySvg,
  StyledImgWrapper,
  StyledItemContent,
  StyledItemWrapper,
  StyledParagraph,
  StyledPaymentSvg,
  StyledSatisfactionSvg,
  StyledSectionWrapper,
  StyledSproutSvg,
  StyledTitle,
} from "./StyledShopAdvantages";
import { Fade } from "react-reveal";

const AdvantagesSection = () => {
  return (
    <StyledSectionWrapper>
      <StyledItemWrapper>
        <StyledImgWrapper>
          <Fade bottom>
            <StyledDeliverySvg />
          </Fade>
        </StyledImgWrapper>
        <StyledItemContent>
          <StyledTitle>Free shipping</StyledTitle>
          <StyledParagraph>
            Vestibulum mauris mauris, rutrum in ullamcorper non, semper non
            nisi.
          </StyledParagraph>
        </StyledItemContent>
      </StyledItemWrapper>

      <StyledItemWrapper>
        <StyledImgWrapper>
          <Fade bottom>
            <StyledSatisfactionSvg />
          </Fade>
        </StyledImgWrapper>
        <StyledItemContent>
          <StyledTitle>97% satisfied clients</StyledTitle>
          <StyledParagraph>
            Pellentesque vehicula rutrum urna, ac eleifend enim eleifend
            pharetra.
          </StyledParagraph>
        </StyledItemContent>
      </StyledItemWrapper>

      <StyledItemWrapper>
        <StyledImgWrapper>
          <Fade bottom>
            <StyledSproutSvg />
          </Fade>
        </StyledImgWrapper>
        <StyledItemContent>
          <StyledTitle>Fresh and organic</StyledTitle>

          <StyledParagraph>
            In nisi nibh, convallis sit amet ligula ac, facilisis varius justo.
          </StyledParagraph>
        </StyledItemContent>
      </StyledItemWrapper>

      <StyledItemWrapper>
        <StyledImgWrapper>
          <Fade bottom>
            <StyledPaymentSvg />
          </Fade>
        </StyledImgWrapper>
        <StyledItemContent>
          <StyledTitle>Easy payment</StyledTitle>

          <StyledParagraph>
            Suspendisse egestas diam sapien, ut fermentum eros laoreet eget.{" "}
          </StyledParagraph>
        </StyledItemContent>
      </StyledItemWrapper>
    </StyledSectionWrapper>
  );
};

export default AdvantagesSection;
