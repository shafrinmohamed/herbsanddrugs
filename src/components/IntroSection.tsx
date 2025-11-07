import React from 'react';
import { Leaf, Heart, Shield, Sparkles, ArrowDown } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { useLanguage } from '../contexts/LanguageContext';

const IntroSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: t('intro.feature1.title'),
      description: t('intro.feature1.desc')
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('intro.feature2.title'),
      description: t('intro.feature2.desc')
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('intro.feature3.title'),
      description: t('intro.feature3.desc')
    }
  ];

  return (
    <FadeInSection className="py-32 bg-gradient-to-br from-white via-emerald-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-lg font-semibold mb-8 shadow-lg">
            <Sparkles className="h-5 w-5 mr-3" />
            {t('intro.welcome')}
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            {t('intro.title').split(' ').slice(0, -2).join(' ')}{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              {t('intro.title').split(' ').slice(-2).join(' ')}
            </span>
          </h1>
          
          <p className="text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
            {t('intro.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => {
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white px-12 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xl"
            >
              {t('intro.exploreProducts')}
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-emerald-500 text-emerald-600 px-12 py-5 rounded-full hover:bg-emerald-50 hover:scale-105 transition-all duration-300 font-bold text-xl"
            >
              {t('intro.learnStory')}
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center">
            <div className="animate-bounce">
              <ArrowDown className="h-8 w-8 text-emerald-500" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mt-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-white/20 hover:scale-105"
            >
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-white/90 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">25+</div>
              <div className="text-gray-600 font-semibold text-lg">{t('intro.stats.years')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">50K+</div>
              <div className="text-gray-600 font-semibold text-lg">{t('intro.stats.customers')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">4</div>
              <div className="text-gray-600 font-semibold text-lg">{t('intro.stats.products')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">100%</div>
              <div className="text-gray-600 font-semibold text-lg">{t('intro.stats.natural')}</div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default IntroSection;