import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  width: 100%;
  min-height: 80%;
  padding: 30px 0;

  img {
    width: 100%;
    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      max-width: 750px;
      min-width: 580px;
    }
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    display: flex;
    flex-direction: ${({ isReverse }) => (isReverse ? "row-reverse" : "row")};
    padding-left: ${({ isReverse }) => (isReverse ? "40px" : "")};
  } ;
`;

export const ImgContainer = styled.div``;

export const DescContainer = styled.div`
  margin-left: 40px;
  margin-right: 100px;
`;
