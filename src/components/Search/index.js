import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/actions";
import Button from "../atoms/button";
import { SectionTitle } from "../atoms/section-title";
import {
  StyledForm,
  StyledSearchContent,
  StyledSearchIcon,
  StyledSearchInput,
} from "./StyledSearch";

const Search = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchValue(""));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(e.target.q.value));
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleForm}>
      <label for="site-search">
        <SectionTitle isFontSmall>Search products</SectionTitle>{" "}
      </label>

      <StyledSearchInput type="search" id="site-search" name="q" />

      <Button isSmall type="submit">
        <StyledSearchIcon src="https://img.icons8.com/material-outlined/24/null/search--v1.png" />
        <StyledSearchContent>search</StyledSearchContent>
      </Button>
    </StyledForm>
  );
};

export default Search;
