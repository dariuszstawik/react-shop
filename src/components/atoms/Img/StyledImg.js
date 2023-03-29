import styled from "styled-components";

export const StyledImg = styled.img`
  /* width: 220px; */
  width: ${({ isLarge }) => (isLarge ? "500px" : "220px")};
  border: ${({ isLarge }) => isLarge && "1px solid gray"};
`;
