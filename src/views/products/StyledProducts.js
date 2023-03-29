import styled from "styled-components";

export const StyledProducts = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const ProductsAside = styled.div`
  margin-top: 40px;
  margin-right: 30px;
  padding-left: 5%;
  /* background-color: ${({ theme }) => theme.colors.lightGray}; */
`;
