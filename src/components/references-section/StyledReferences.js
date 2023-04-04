import styled from "styled-components";

export const StyledReferencesContainer = styled.div`
  width: 70%;
  height: 30vh;
  position: relative;
`;

export const ReferencesWrapper = styled.div`
  width: 60%;
  height: 330px;
  margin: auto;
  margin-bottom: 100px;
  padding-top: 40px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  position: relative;
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
  transform: ${({ right }) => (right ? "rotate(-90deg)" : "rotate(90deg)")};
`;

export const StyledUl = styled.ul`
  list-style: none;
  width: 66.7%;
  height: 200px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin: auto;
  padding: 0;
  .isActive {
    transform: translateY(-200px);
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
