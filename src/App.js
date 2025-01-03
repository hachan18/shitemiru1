// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection'; // HeroSection.jsはそのままでインポート
import ServicesSection from './components/ServicesSection';
import SuccessStories from './components/SuccessStories';
import DetailsSection from './components/DetailsSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css'; // すべてのスタイルがここにまとめられている

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <SuccessStories />
      <DetailsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
