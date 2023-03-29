import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../components/atoms/page-header";
import Category from "../../components/category";
import ProductList from "../../components/products-section/product-list";
import Search from "../../components/Search";
import Sorting from "../../components/sorting";
import { productsData } from "../../mockData";
import { closeMobileMenu, selectCategory } from "../../redux/actions";
import {
  ProductsAside,
  ProductsContainer,
  StyledProducts,
} from "./StyledProducts";

const Products = () => {
  const dispatch = useDispatch();

  return (
    <StyledProducts>
      <PageHeader content="Shop" />
      <ProductsContainer>
        <ProductList amount={productsData.length} />
        <ProductsAside>
          <Search />
          <Category></Category>
          <Sorting></Sorting>
        </ProductsAside>
      </ProductsContainer>
    </StyledProducts>
  );
};

export default Products;
