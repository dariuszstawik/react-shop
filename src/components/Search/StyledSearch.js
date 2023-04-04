import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const StyledForm = styled.form``;

export const StyledSearchInput = styled.input`
  width: 60%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  margin-right: 5%;
  margin-bottom: 10px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  display: block;
  margin: auto;
  font-size: 16px !important;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    display: none !important;
  }
`;

export const StyledSearchContent = styled.span`
  display: none;
  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    display: block;
  }
`;
