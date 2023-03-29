import React from "react";
import { DecoratedText } from "../atoms/decorated-text";
import { SectionParagraph } from "../atoms/section-paragraph";
import { SectionTitle } from "../atoms/section-title";
import ProductList from "./product-list";
import {
  StyledSectionHeader,
  StyledSectionWrapper,
} from "./StyledProductsSection";

const ProductsSection = () => {
  return (
    <StyledSectionWrapper>
      <StyledSectionHeader>
        <DecoratedText isAlignedCenter>Most popular products</DecoratedText>
        <SectionTitle isAlignedCenter>Organic products</SectionTitle>
        <SectionParagraph isAlignedCenter>
          Sed ut perspiciatis aperiam unde omnis istetus error volupta dolorem
          que laudantium, totam rem.
        </SectionParagraph>
      </StyledSectionHeader>

      <ProductList amount={5} isHomePage />
    </StyledSectionWrapper>
  );
};

export default ProductsSection;
