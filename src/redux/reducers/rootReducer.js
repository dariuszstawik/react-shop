import { referencesData } from "../../components/references-section/referencesData";

const initialState = {
  isMobileMenuActive: false,
  products: [],
  selectedCategory: "all",
  selectedProduct: "",
  referencesIndex: 0,
  searchValue: "",
  sortingType: "default",
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE_MOBILE_MENU":
      return {
        ...state,
        isMobileMenuActive: !state.isMobileMenuActive,
      };

    case "CLOSE_MOBILE_MENU":
      return {
        ...state,
        isMobileMenuActive: false,
      };

    case "SELECT_CATEGORY":
      return {
        ...state,
        selectedCategory: payload,
      };

    case "SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: payload,
      };

    case "INCREASE_REFERENCES_INDEX":
      return {
        ...state,
        referencesIndex:
          state.referencesIndex === referencesData.length - 1
            ? 0
            : state.referencesIndex + 1,
      };

    case "DECREASE_REFERENCES_INDEX":
      return {
        ...state,
        referencesIndex:
          state.referencesIndex === 0
            ? referencesData.length - 1
            : state.referencesIndex - 1,
      };

    case "SET_SEARCH_VALUE":
      return {
        ...state,
        searchValue: payload,
      };

    case "SET_SORTING_TYPE":
      return {
        ...state,
        sortingType: payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
