import styled from "styled-components";
import "react-awesome-slider/dist/styles.css";

export const StyledSliderContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    height: 100vh;
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    height: 100vh;
  }

  &::after {
    content: "Natural, fresh and locally sourced";
    width: 70vw;
    font-size: 20px;

    height: 50px;

    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    text-align: center;
    color: white;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    @media (min-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 40px;
      top: 50%;
    }

    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      font-size: 50px;
      top: 50%;
    }
  }
`;
