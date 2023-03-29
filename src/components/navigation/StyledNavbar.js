import styled, { css } from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const StyledLi = styled.li`
  list-style: none;
  a {
    display: inline-block;
    margin: 20px;
    color: black;
    text-decoration: none;
  }
`;

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  z-index: 3;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  font-size: 30px;
  letter-spacing: 0.2em; ;
`;

export const StyledLinksContainer = styled.ul`
  display: none;

  ${({ isActive }) =>
    isActive &&
    css`
      display: flex;
      flex-direction: column;
      background-color: white;
      width: 200px;
      position: absolute;
      right: -30px;
      top: 70px;
    `}
  margin: auto 30px;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    display: flex;
  } ;
`;

export const StyledHamburger = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    display: none;
  } ;
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: ${({ theme }) => theme.colors.darkGray} !important;
`;
