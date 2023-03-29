import styled from "styled-components";

export const StyledDecoratedText = styled.h6`
  font-family: "Cormorant", serif;
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: 500;
  font-style: italic;
  margin: 10px 0;
  text-align: ${({ isAlignedCenter }) => isAlignedCenter && "center"};
`;
