import styled from "styled-components";

export const StyledPageHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  padding-top: 90px;
  padding-left: 100px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;
