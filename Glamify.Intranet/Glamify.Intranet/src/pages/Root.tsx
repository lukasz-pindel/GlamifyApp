import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { ListingsPage } from "./ListingsPage";
import { ServicesPage } from "./ServicesPage";

export const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
