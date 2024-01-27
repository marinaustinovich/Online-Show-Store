import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

import { Footer } from "../footer";
import { Header } from "../header";
import MainPage from "pages/main-page/main-page";
import AboutPage from "pages/about-page/about-page";
import ContactsPage from "pages/contacts-page/contacts-page";
import CatalogPage from "pages/catalog-page/catalog-page";
import ProductPage from "pages/product-page/product-page";
import ErrorPage from "pages/404-page/404-page";
import { Column, Wrapper } from "components/common";
import { Banner } from "../banner";
import CartPage from "pages/cart-page/cart-page";
import { useEffectOnce } from "hooks";
import { useAppDispatch } from "store";
import { productsActions } from "store/products/slice";
import { getCart } from "utils";

import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffectOnce(() => {
    const cart = getCart();
    dispatch(productsActions.setCart(cart ?? []));
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        pauseOnHover={true}
        theme="light"
      />
      <Header />

      <main className="container">
        <Wrapper>
          <Column>
            <Banner />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/catalog/" element={<CatalogPage />} />
              <Route path="/about/" element={<AboutPage />} />
              <Route path="/contacts/" element={<ContactsPage />} />
              <Route path="/cart/" element={<CartPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/404-page/" element={<ErrorPage />} />
            </Routes>
          </Column>
        </Wrapper>
      </main>

      <Footer />
    </>
  );
};
