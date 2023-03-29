import React from "react";
import { Link } from "react-router-dom";
import {
  StyledHamburger,
  StyledLi,
  StyledLinksContainer,
  StyledLogoContainer,
  StyledNav,
} from "../StyledNavbar";
import { navbarData } from "./navbarData";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { closeMobileMenu, toggleMobileMenu } from "../../../redux/actions";
import Logo from "../../atoms/logo";

const Navbar = () => {
  const selectedIsMobileMenuActive = useSelector(
    (state) => state.isMobileMenuActive
  );
  const dispatch = useDispatch();

  return (
    <StyledNav>
      <StyledLogoContainer>
        <Logo />
      </StyledLogoContainer>
      <StyledLinksContainer isActive={selectedIsMobileMenuActive}>
        {navbarData.map(({ path, content }, i) => {
          return (
            <StyledLi key={i}>
              <Link to={path} onClick={() => dispatch(closeMobileMenu())}>
                {content}{" "}
              </Link>
            </StyledLi>
          );
        })}
      </StyledLinksContainer>
      <StyledHamburger>
        {selectedIsMobileMenuActive ? (
          <CloseIcon
            fontSize="large"
            onClick={() => dispatch(toggleMobileMenu())}
          />
        ) : (
          <MenuIcon
            fontSize="large"
            onClick={() => dispatch(toggleMobileMenu())}
          />
        )}
      </StyledHamburger>
    </StyledNav>
  );
};

export default Navbar;
