import * as React from "react";
import { HomePageContent } from "../components/home/HomePageContent";
import { useAuth } from "../context/AuthContext";
import { HomePageLoginCard } from "../components/home/HomePageLoginCard";

export const HomePage: React.FC = () => {
  const { user } = useAuth();
  return (
    user ? <HomePageContent /> : <HomePageLoginCard />
  );
};
