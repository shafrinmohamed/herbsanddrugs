import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ProductsPage from './components/ProductsPage';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <IntroSection />
      <ProductsPage />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;