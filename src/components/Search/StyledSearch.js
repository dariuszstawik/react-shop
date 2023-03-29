import styled from "styled-components";

export const StyledForm = styled.form`
  /* margin-bottom: 50px; */
  /* background-color: ${({ theme }) => theme.colors.lightGray}; */
  /* padding: 5%; */
  /* border: 1px solid ${({ theme }) => theme.colors.lightGray}; */
`;

export const StyledSearchInput = styled.input`
  width: 60%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  /* background-color: ${({ theme }) => theme.colors.lightGray}; */
  margin-right: 5%;
  margin-bottom: 10px;
`;

export const StyledSearchIcon = styled.img`
  display: block;
  margin: auto;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    display: none;
  }
`;

export const StyledSearchContent = styled.span`
  display: none;
  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    display: block;
  }
`;
