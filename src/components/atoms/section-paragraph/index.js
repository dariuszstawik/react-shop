import React from "react";
import { StyledSectionParagraph } from "./StyledSectionParagraph";

export const SectionParagraph = ({ children, isAlignedCenter }) => {
  return (
    <StyledSectionParagraph isAlignedCenter={isAlignedCenter}>
      {children}
    </StyledSectionParagraph>
  );
};
