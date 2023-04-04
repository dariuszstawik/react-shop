import React from "react";
import PageHeader from "../../components/atoms/page-header";
import Category from "../../components/category";
import ProductList from "../../components/products-section/product-list";
import Search from "../../components/Search";
import Sorting from "../../components/sorting";
import { productsData } from "../../mockData";
import {
  ProductsAside,
  ProductsContainer,
  StyledProducts,
} from "./StyledProducts";

const Products = () => {
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
