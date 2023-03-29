import React from "react";
import { useSelector } from "react-redux";
import Button from "../atoms/button";
import { DecoratedText } from "../atoms/decorated-text";
import PageHeader from "../atoms/page-header";
import { SectionParagraph } from "../atoms/section-paragraph";
import { SectionTitle } from "../atoms/section-title";
import { StyledImg } from "../products-section/StyledProductsSection";
import { ProductContainer, ProductContentContainer } from "./StyledProduct";

const Product = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);

  return (
    <>
      <PageHeader content="Product"></PageHeader>
      <ProductContainer>
        <StyledImg isLarge src={selectedProduct.image}></StyledImg>
        <ProductContentContainer>
          <DecoratedText>{selectedProduct.category}</DecoratedText>
          <SectionTitle>{selectedProduct.name}</SectionTitle>
          <DecoratedText>Price: {selectedProduct.price} zł</DecoratedText>
          <SectionParagraph>
            Morbi tincidunt aliquet varius. Aliquam eget aliquam massa. Quisque
            sagittis lectus ut purus scelerisque, ac auctor arcu auctor. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In sed fringilla tortor. In hac habitasse platea
            dictumst. Morbi id tortor quam."
          </SectionParagraph>
          <Button>Add to cart</Button>
        </ProductContentContainer>
      </ProductContainer>
    </>
  );
};

export default Product;
