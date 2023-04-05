import styled from "styled-components";

export const StyledFooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.lightGray};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;

  min-height: 300px;
  padding: 50px 80px;
  padding-bottom: 60px;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    display: grid;
    grid-template-columns: 40% repeat(3, 1fr);
    grid-column-gap: 50px;
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
  padding: 0;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  .icon {
    margin-top: 7px;
    margin-right: 30px;
  }
`;
