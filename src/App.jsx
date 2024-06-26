import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage, Home, Layout } from "./router";
import { Shop } from "./screen/shop/Shop";
import { ProductDeatils } from "./screen/product/ProductDeatils";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />

          <Route
            path="/product-details/:productId"
            element={
              <Layout>
                <ProductDeatils />
              </Layout>
            }
          />

          <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
