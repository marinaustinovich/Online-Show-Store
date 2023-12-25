import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "../footer";
import { Header } from "../header";
import MainPage from "pages/main-page/main-page";
import AboutPage from "pages/about-page/about-page";
import ContactsPage from "pages/contacts-page/contacts-page";
import CatalogPage from "pages/catalog-page/catalog-page";

export const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog/" element={<CatalogPage />} />
      <Route path="/about/" element={<AboutPage />} />
      <Route path="/contacts/" element={<ContactsPage />} />
    </Routes>
    <Footer />
  </div>
);
