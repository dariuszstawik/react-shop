import React from "react";
import { StyledDecoratedText } from "./StyledDecoratedText";

export const DecoratedText = ({ isAlignedCenter, children }) => {
  return (
    <StyledDecoratedText isAlignedCenter={isAlignedCenter}>
      {children}
    </StyledDecoratedText>
  );
};
