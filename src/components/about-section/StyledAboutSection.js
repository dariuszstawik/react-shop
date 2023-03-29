import styled from "styled-components";
import { theme } from "../../styledComponents/theme";

export const StyledSectionWrapper = styled.div`
  width: 100vw;
  min-height: 80vh;
  padding: 30px 0;
  /* display: flex;
  flex-direction: row-reverse; */

  img {
    width: 100%;
    /* margin-right: 40px; */
    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      width: 750px;
      /* margin-right: 40px; */
    }
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    display: flex;
    flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
  } ;
`;

export const ImgContainer = styled.div``;

export const DescContainer = styled.div`
  margin-left: 40px;
  margin-right: 100px;
`;
