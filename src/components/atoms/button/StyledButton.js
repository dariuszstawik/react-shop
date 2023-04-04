import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ isSmall }) => (isSmall ? "30%" : "150px")};
  height: ${({ isSmall }) => (isSmall ? "40px" : "60px")};
  text-transform: uppercase;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
`;
