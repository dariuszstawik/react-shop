import React from "react";
import { StyledSectionTitle } from "./StyledSectionTitle";

export const SectionTitle = ({ isAlignedCenter, isFontSmall, children }) => {
  return (
    <StyledSectionTitle
      isAlignedCenter={isAlignedCenter}
      isFontSmall={isFontSmall}
    >
      {children}
    </StyledSectionTitle>
  );
};
