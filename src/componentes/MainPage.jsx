import React from "react";
import { LandingPage } from './LandingPage'
import { NavBar } from './Navbar'
import { LanguageProvider } from "../contexts/LanguageContext";

export const MainPage = () => {
  return (
    <>
    <LanguageProvider>

    <NavBar/>
    <LandingPage/>
    
    </LanguageProvider>
    </>
  );
};
