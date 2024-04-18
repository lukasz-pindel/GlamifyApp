import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { FaqPage } from "./FaqPage";
import {ContactUsPage} from "./ContactPage";
import { AboutUsPage } from "./AboutUsPage";

export const Root: React.FC = () => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  };