import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import { productsData } from "../../mockData";

import { selectProduct } from "../../redux/actions";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const params = useParams();

  const linkedProduct = params.productId;
  const product = productsData.find((product) => product.id === linkedProduct);

  useEffect(() => {
    dispatch(selectProduct(product));
  }, []);

  return (
    <div>
      <Product />
    </div>
  );
};

export default SingleProduct;
