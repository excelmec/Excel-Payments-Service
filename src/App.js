import { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from 'aos';

import { Navbar, Footer, Loader } from "./components";
import { LandingPage } from './pages'

import './App.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, [])
  
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;