import { actionTypes } from "./actionTypes";

export const toggleMobileMenu = () => {
  return {
    type: actionTypes.TOGGLE_MOBILE_MENU,
  };
};

export const closeMobileMenu = () => {
  return {
    type: actionTypes.CLOSE_MOBILE_MENU,
  };
};

export const selectCategory = (payload) => {
  return {
    type: actionTypes.SELECT_CATEGORY,
    payload,
  };
};

export const selectProduct = (payload) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload,
  };
};

export const increaseReferencesIndex = () => {
  return {
    type: actionTypes.INCREASE_REFERENCES_INDEX,
  };
};

export const decreaseReferencesIndex = () => {
  return {
    type: actionTypes.DECREASE_REFERENCES_INDEX,
  };
};

export const setSearchValue = (payload) => {
  return {
    type: actionTypes.SET_SEARCH_VALUE,
    payload,
  };
};

export const setSortingType = (payload) => {
  return {
    type: actionTypes.SET_SORTING_TYPE,
    payload,
  };
};
