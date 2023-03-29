import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledFooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.lightGray};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  min-height: 300px;
  padding: 50px 80px;
  padding-bottom: 60px;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: 35% repeat(4, 16%);
    grid-column-gap: 25px;
  }
`;

export const StyledItem = styled.div`
  :first-child {
    margin-top: 4%;
    margin-right: 6%;
  }
`;

export const StyledFooterNav = styled.ul`
  list-style: none;
  line-height: 2.5em;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  .icon {
    margin-top: 7px;
    margin-right: 30px;
  }
`;
