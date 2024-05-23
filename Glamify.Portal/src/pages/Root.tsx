import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { FaqPage } from "./FaqPage"
import { ContactUsPage } from "./ContactPage"
import { AboutUsPage } from "./AboutUsPage"
import { BarbersList } from "./categories/barbers/BarbersList"
import { NailSalonsList } from "./categories/nailSalons/NailSalonsList"
import { MassagesList } from "./categories/massages/MassagesList"
import ProfilePage from "./ProfilePage"
import { SpaList } from "./categories/SPAs/SpaList"

export const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/barbers" element={<BarbersList />} />
        <Route path="/spas" element={<SpaList />} />
        <Route path="/nailSalons" element={<NailSalonsList />} />
        <Route path="/massages" element={<MassagesList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
