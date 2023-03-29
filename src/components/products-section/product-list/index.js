import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../../../mockData";
import { selectCategory, setSearchValue } from "../../../redux/actions";
import ProductView from "../../product-view";
import { StyledProductList } from "./StyledProductList";

const ProductList = ({ amount, isHomePage }) => {
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const selectedSearchValue = useSelector((state) => state.searchValue);
  const selectedSortingType = useSelector((state) => state.sortingType);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectCategory("all"));
  }, []);

  useEffect(() => {
    dispatch(setSearchValue(""));
  }, []);

  const filterProducts = () => {
    if (selectedSearchValue) {
      return productsData.filter((product) =>
        product.name.toUpperCase().includes(selectedSearchValue.toUpperCase())
      );
    } else if (selectedCategory !== "all") {
      return productsData.filter(
        (product) => product.category === selectedCategory
      );
    } else {
      return productsData;
    }
  };

  const sortProducts = () => {
    if (selectedSortingType === "default") {
      return filterProducts().sort((a, b) => {
        return a.id - b.id;
      });
    } else if (selectedSortingType === "priceAscending") {
      return filterProducts().sort((a, b) => {
        return a.price - b.price;
      });
    } else if (selectedSortingType === "priceDescending") {
      return filterProducts().sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      return filterProducts().sort((a, b) => {
        return a.id - b.id;
      });
    }
  };
  const showProducts = (amount) => {
    return sortProducts().map(
      (product, i) =>
        product.id < amount && (
          <li key={i}>
            <ProductView product={product} />
          </li>
        )
    );
  };

  return <StyledProductList>{showProducts(amount)}</StyledProductList>;
};

export default ProductList;
