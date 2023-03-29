import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {fa-brands, fa-facebook} from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../atoms/logo";
import { SectionParagraph } from "../atoms/section-paragraph";
import { navbarData } from "../navigation/navbar/navbarData";
import {
  FbIcon,
  SocialMediaWrapper,
  StyledFooterNav,
  StyledFooterWrapper,
  StyledItem,
} from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledItem>
        <Logo />
        <SectionParagraph>
          Morbi nec nulla ac velit dignissim imperdiet! Mauris elementum, metus
          quis tincidunt pharetra, sapien quam gravida velit.
          {/* <p>Stay in contact: </p> */}
        </SectionParagraph>

        <SocialMediaWrapper>
          {/* <img
            className="icon"
            src="https://img.icons8.com/material-outlined/30/null/facebook-circled--v1.png"
          /> */}
          <img
            className="icon"
            src="https://img.icons8.com/material-outlined/30/null/facebook.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/material-outlined/30/null/instagram-new--v1.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/material-outlined/30/null/twitter.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/material-outlined/30/null/youtube-play--v1.png"
          />
          {/* <img
            className="icon"
            src="https://img.icons8.com/material/30/000000/facebook--v1.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/material/30/null/instagram-new--v1.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/material/30/null/twitter--v2.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/material/30/null/youtube-play--v1.png"
          /> */}
          {/* <img src="https://img.icons8.com/sf-regular/48/null/facebook.png" /> */}{" "}
          {/* <img
            className="icon"
            src="https://img.icons8.com/dotty/40/null/facebook.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/dotty/40/null/instagram-new.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/dotty/40/null/youtube-play.png"
          /> */}
          {/* <img
            className="icon"
            src="https://img.icons8.com/dotty/40/null/twitter.png"
          /> */}
        </SocialMediaWrapper>
      </StyledItem>
      <StyledItem>
        <StyledFooterNav>
          <h3>Shop</h3>
          {navbarData.map(({ path, content }, i) => {
            return (
              i < 3 && (
                <li key={i}>
                  <Link to={path}>{content}</Link>
                </li>
              )
            );
          })}
        </StyledFooterNav>
      </StyledItem>
      <StyledItem>
        <StyledFooterNav>
          <h3>Terms</h3>
          <li>Returns & Refunds</li>
          <li>Shipping & Delivery</li>
          <li>Privacy Policy</li>
        </StyledFooterNav>
      </StyledItem>

      <StyledItem>
        <StyledFooterNav>
          <h3>Contact</h3>
          {/* <li>Rajcza ul. Boczna 1</li> */}
          <li>office@krasulove.pl</li>
          <li>+48 255 52 25</li>
        </StyledFooterNav>
      </StyledItem>

      <StyledItem>
        <StyledFooterNav>
          <h3>Cart</h3>
          <li>Items</li>
          <li>Total price</li>
          {/* <li>Go to cart</li> */}
        </StyledFooterNav>
      </StyledItem>
    </StyledFooterWrapper>
  );
};

export default Footer;
