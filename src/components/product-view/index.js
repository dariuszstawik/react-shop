import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct } from "../../redux/actions";
import { DecoratedText } from "../atoms/decorated-text";
import { SectionTitle } from "../atoms/section-title";
import { StyledImg } from "../products-section/StyledProductsSection";
import {
  DecoratedTextSpan,
  ProductWrapper,
  StyledCartIcon,
  StyledContentWrapper,
  StyledImgWrapper,
} from "./StyledProductsView";
import { Fade } from "react-reveal";

const ProductView = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/product/${product.name}/${product.id}`}
      onClick={() => dispatch(selectProduct(product))}
    >
      <Fade bottom>
        <ProductWrapper>
          <StyledImgWrapper>
            <StyledImg src={product.image}></StyledImg>

            <DecoratedTextSpan>
              <DecoratedText isAlignedCenter>{product.category}</DecoratedText>
            </DecoratedTextSpan>

            <StyledCartIcon />
          </StyledImgWrapper>
          <StyledContentWrapper>
            {/* <DecoratedText alignCenter>{product.category}</DecoratedText> */}
            <SectionTitle isAlignedCenter isFontSmall>
              {product.name}
            </SectionTitle>
            <DecoratedText isAlignedCenter>{product.price} zł</DecoratedText>
          </StyledContentWrapper>
        </ProductWrapper>
      </Fade>
    </Link>
  );
};

export default ProductView;
