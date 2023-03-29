import styled from "styled-components";

export const StyledSectionTitle = styled.h3`
  font-size: ${({ isFontSmall, theme }) =>
    isFontSmall ? "18px" : theme.fontSize.h3};

  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 10px 0;
  text-align: ${({ isAlignedCenter }) => isAlignedCenter && "center"};
`;
