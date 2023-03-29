import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navigation/navbar";
import Product from "../components/product/Product";
import { routes } from "../static/routes";
import AboutUs from "../views/about-us";
import Home from "../views/home";
import Products from "../views/products";
import SingleProduct from "../views/single-product";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.products} element={<Products />} />
        <Route path={routes.product} element={<SingleProduct />} />
        <Route path={routes.about} element={<AboutUs />} />
        <Route path={routes.contact} element="" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
