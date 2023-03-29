import React from "react";
import { StyledButton } from "./StyledButton";

const Button = ({ isSmall, children }) => {
  return <StyledButton isSmall={isSmall}>{children}</StyledButton>;
};

export default Button;
