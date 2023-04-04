import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: 80px 0;
`;

export const StyledSectionHeader = styled.div``;

export const StyledImg = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  width: ${({ isLarge }) => (isLarge ? "500px" : "220px")};
`;
