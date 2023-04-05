import styled from "styled-components";

export const StyledReferencesContainer = styled.div`
  width: 70%;
  min-height: 30%;
  position: relative;
`;

export const ReferencesWrapper = styled.div`
  min-width: 50%;
  min-height: 380px;
  margin: auto;
  margin-bottom: 40px;
  padding-top: 40px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  position: relative;
  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    max-width: 60%;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledArrow = styled.button`
  font-size: 50px;
  background-color: white;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightGray};
  transform: ${({ isRight }) => (isRight ? "rotate(-90deg)" : "rotate(90deg)")};
`;

export const StyledUl = styled.ul`
  list-style: none;
  width: 66.7%;
  min-height: 230px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin: auto;
  padding: 0;
  .isActive {
    transform: translateY(-230px);
    visibility: visible;
  }
`;

export const StyledLi = styled.li`
  text-align: center;
  visibility: hidden;
  position: absolute;
  top: 0;
  transition: transform 1s ease-in-out;
`;
