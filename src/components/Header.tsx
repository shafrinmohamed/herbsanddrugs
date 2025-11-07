import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Sparkles, Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const Header = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'si', name: 'සිංහල', flag: '🇱🇰' },
    { code: 'ta', name: 'தமிழ்', flag: '🇱🇰' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100 py-3' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className={`hidden lg:flex items-center justify-between py-3 text-sm text-gray-600 border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? 'opacity-0 h-0 overflow-hidden py-0' : 'opacity-100 h-auto'
        }`}>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+94 769 234 455</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@herbsanddrugs.lk</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-emerald-600 font-medium">
            <Sparkles className="h-4 w-4" />
            <span>{t('company.since')}</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">H&D</span>
            </div>
            <div className={`transition-all duration-300 ${isScrolled ? 'hidden lg:block' : 'block'}`}>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {t('company.name')}
              </h1>
              <p className="text-xs text-gray-500 font-medium">Healing through herbs, trusted by nature.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <button 
              onClick={() => {
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-semibold group ${
                isScrolled ? 'text-base' : 'text-lg'
              }`}
            >
              {t('nav.products')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-semibold group ${
                isScrolled ? 'text-base' : 'text-lg'
              }`}
            >
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-semibold group ${
                isScrolled ? 'text-base' : 'text-lg'
              }`}
            >
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className={`flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 font-semibold ${
                isScrolled ? 'text-base' : 'text-lg'
              }`}>
                <Globe className="h-5 w-5" />
                <span>{languages.find(lang => lang.code === language)?.flag}</span>
              </button>
              <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[150px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-full px-4 py-2 text-left hover:bg-emerald-50 transition-colors flex items-center space-x-3 ${
                      language === lang.code ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => {
                const message = encodeURIComponent("Hi! I'm interested in your herbal products. Could you please provide more information?");
                window.open(`https://wa.me/94769234455?text=${message}`, '_blank');
              }}
              className={`bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold ${
                isScrolled ? 'px-6 py-2 text-sm' : 'px-8 py-3 text-base'
              }`}
            >
              {t('nav.orderNow')}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-6">
              <button 
                onClick={() => {
                  const element = document.getElementById('products');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold text-lg text-left"
              >
                {t('nav.products')}
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold text-lg text-left"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold text-lg text-left"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="border-t border-gray-200 pt-6">
                <div className="text-gray-500 text-sm font-semibold mb-3">Language</div>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`p-3 rounded-lg text-center transition-colors ${
                        language === lang.code 
                          ? 'bg-emerald-100 text-emerald-600 border-2 border-emerald-200' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="text-lg mb-1">{lang.flag}</div>
                      <div className="text-xs font-medium">{lang.name}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const message = encodeURIComponent("Hi! I'm interested in your herbal products. Could you please provide more information?");
                  window.open(`https://wa.me/94769234455?text=${message}`, '_blank');
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 w-fit font-semibold"
              >
                {t('nav.orderNow')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;