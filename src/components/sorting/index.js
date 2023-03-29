import React from "react";
import { useDispatch } from "react-redux";
import { setSortingType } from "../../redux/actions";
import { SectionTitle } from "../atoms/section-title";
import { StyledInput } from "./StyledSorting";

const Sorting = () => {
  const dispatch = useDispatch();

  const handleSortingForm = (e) => {
    e.preventDefault();
    dispatch(setSortingType(e.target.value));
    e.target.reset();
  };

  return (
    <form onClick={handleSortingForm}>
      <SectionTitle isFontSmall>Sort by:</SectionTitle>
      <p>
        <StyledInput
          type="radio"
          name="default"
          id="default"
          value="default"
          // checked="checked"
        />
        default
      </p>
      <p>
        <StyledInput
          type="radio"
          name="priceAscending"
          id="priceAscending"
          value="priceAscending"
        />
        price - ascending
      </p>
      <p>
        <StyledInput
          type="radio"
          name="priceDescending"
          id="priceDescending"
          value="priceDescending"
        />
        price - descending
      </p>
    </form>
  );
};

export default Sorting;
