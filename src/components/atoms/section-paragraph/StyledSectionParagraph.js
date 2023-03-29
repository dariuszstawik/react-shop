import styled from "styled-components";

export const StyledSectionParagraph = styled.p`
  line-height: 1.7;
  text-align: ${({ isAlignedCenter }) => isAlignedCenter && "center"};
`;
