import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  width: 100vw;
  min-height: 80vh;
  padding: 80px 0;
  /* display: flex; */
  /* flex-direction: row-reverse; */
`;

export const StyledSectionHeader = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center; */
`;

// export const StyledProductList = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: space-between;
// `;

export const StyledImg = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  width: ${({ isLarge }) => (isLarge ? "500px" : "220px")};
  /* border: ${({ isLarge }) => isLarge && "1px solid gray"}; */
`;
