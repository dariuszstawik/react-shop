import styled from "styled-components";

export const StyledProducts = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-rows: "";
    grid-template-columns: auto auto;
  }
`;

export const ProductsAside = styled.div`
  min-width: 400px;
  margin-top: 40px;
  padding: 0 70px;
  /* background-color: ${({ theme }) => theme.colors.lightGray}; */
  grid-row: 1 / span 1;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    grid-row: "";
    grid-column: 2 / span 1;
  }
`;
