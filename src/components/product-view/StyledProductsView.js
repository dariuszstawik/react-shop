import styled from "styled-components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ProductWrapper = styled.div`
  width: 220px;
  margin: 30px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledImgWrapper = styled.div`
  position: relative;
`;

export const DecoratedTextSpan = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  position: absolute;
  top: 7%;
  left: 0;
  padding: 0 10%;
  z-index: 1;
`;

export const StyledContentWrapper = styled.div`
  padding: 5% 0;
`;

export const StyledImg = styled.img``;

export const StyledCartIcon = styled(AddShoppingCartIcon)`
  position: absolute;
  top: 87%;
  left: 75%;
  color: ${({ theme }) => theme.colors.darkGray} !important;
  cursor: pointer;
  z-index: 1;
  /* &::after {
    content: "";
    color: gray !important;
    background-color: gray !important;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50% !important;
    z-index: 4 !important;
  } */
`;
