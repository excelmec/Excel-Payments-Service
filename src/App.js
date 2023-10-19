import { Suspense, useEffect } from 'react'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from 'aos';
import Main from './components/Main'
import ScrollToTop from "./utils/ScrollToTop"
import { Navbar, Footer, Loader } from "./components";
import { LandingPage, AboutUsPage, ContactUsPage, TnC, PrivacyPolicy, Services, SuccessPage } from './pages'

import './App.css';

function App() {

  const [showMain, setShowMain] = useState(false);

  const handleRegisterClick = () => {
    setShowMain(true);
  }
  const navigateToMain = () => {
    setShowMain(true);
  }
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, [])
  
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
          <Route 
            path="/" 
            element={
              showMain 
                ? <Main />
                : <LandingPage handleRegisterClick={handleRegisterClick} />
            } 
          />
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/terms" element={<TnC />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;