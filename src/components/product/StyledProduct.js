import styled from "styled-components";

export const ProductContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
  }
`;
export const ProductContentContainer = styled.div`
  width: 40%;
  margin: 30px;
`;
