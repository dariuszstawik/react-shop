import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, setSearchValue } from "../../redux/actions";
import { SectionTitle } from "../atoms/section-title";
import { StyledSelect } from "./StyledCategory";

const Category = () => {
  const dispatch = useDispatch();

  // const selectedCategory = useSelector((state) => state.selectedCategory);

  const handleForm = (e) => {
    dispatch(selectCategory(e.target.value));
    dispatch(setSearchValue(""));
  };

  return (
    <form>
      <label>
        <SectionTitle isFontSmall>Select category</SectionTitle>
      </label>
      <StyledSelect onChange={handleForm} name="todoPriority" id="todoPriority">
        <option value="all">all</option>
        <option value="milk">milk</option>
        <option value="cheese">cheese</option>
        <option value="vegetables">vegetables</option>
        <option value="flavoring">flavoring</option>
      </StyledSelect>
    </form>
  );
};

export default Category;
