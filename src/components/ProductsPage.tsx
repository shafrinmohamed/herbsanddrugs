import React, { useState } from 'react';
import { CheckCircle, Zap, Shield, Leaf, Heart, ArrowRight, Star, Activity } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductsPage = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const { t } = useLanguage();

  const handleWhatsAppOrder = (productName: string) => {
    const message = `Hi! I'm interested in ordering ${productName}. Could you please provide more details about pricing and availability?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/94769234455?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    {
      id: 1,
      name: t('product.fix.name'),
      tagline: t('product.fix.tagline'),
      subtitle: t('product.fix.subtitle'),
      features: t('product.fix.features'),
      description: t('product.fix.description'),
      benefits: [
        t('product.fix.benefit1'),
        t('product.fix.benefit2'),
        t('product.fix.benefit3'),
        t('product.fix.benefit4')
      ],
      idealFor: t('product.fix.idealFor'),
      image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-emerald-500 via-emerald-600 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      icon: <Zap className="h-8 w-8" />,
      rating: 4.9,
      reviews: 1247
    },
    {
      id: 2,
      name: t('product.healaid.name'),
      tagline: t('product.healaid.tagline'),
      subtitle: t('product.healaid.subtitle'),
      features: t('product.healaid.features'),
      description: t('product.healaid.description'),
      benefits: [
        t('product.healaid.benefit1'),
        t('product.healaid.benefit2'),
        t('product.healaid.benefit3'),
        t('product.healaid.benefit4')
      ],
      idealFor: t('product.healaid.idealFor'),
      image: "https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 via-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      icon: <Heart className="h-8 w-8" />,
      rating: 4.8,
      reviews: 892
    },
    {
      id: 3,
      name: t('product.varicura.name'),
      tagline: t('product.varicura.tagline'),
      subtitle: t('product.varicura.subtitle'),
      features: t('product.varicura.features'),
      description: t('product.varicura.description'),
      benefits: [
        t('product.varicura.benefit1'),
        t('product.varicura.benefit2'),
        t('product.varicura.benefit3'),
        t('product.varicura.benefit4')
      ],
      idealFor: t('product.varicura.idealFor'),
      image: "https://images.pexels.com/photos/3985168/pexels-photo-3985168.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 via-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      icon: <Leaf className="h-8 w-8" />,
      rating: 4.7,
      reviews: 634
    },
    {
      id: 4,
      name: t('product.actyon.name'),
      tagline: t('product.actyon.tagline'),
      subtitle: t('product.actyon.subtitle'),
      features: t('product.actyon.features'),
      description: t('product.actyon.description'),
      benefits: [
        t('product.actyon.benefit1'),
        t('product.actyon.benefit2'),
        t('product.actyon.benefit3'),
        t('product.actyon.benefit4')
      ],
      idealFor: t('product.actyon.idealFor'),
      image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-orange-500 via-orange-600 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      icon: <Activity className="h-8 w-8" />,
      rating: 4.8,
      reviews: 756
    }
  ];

  return (
    <FadeInSection id="products" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            {t('products.premium')}
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {t('products.title').split(' ')[0]} <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{t('products.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16 lg:space-y-32">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''} group`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.bgColor} rounded-3xl transform transition-all duration-500 ${hoveredProduct === product.id ? 'scale-105 rotate-1' : 'scale-100'}`}></div>
                <div className="relative z-10 p-4 lg:p-8">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={`w-full h-auto rounded-2xl shadow-2xl transition-all duration-500 ${hoveredProduct === product.id ? 'scale-105' : 'scale-100'}`}
                  />
                </div>
                
                {/* Floating elements */}
                <div className={`hidden lg:block absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${product.color} rounded-full opacity-10 animate-pulse`}></div>
                <div className={`hidden lg:block absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br ${product.color} rounded-full opacity-10 animate-pulse delay-1000`}></div>
                
                {/* Product highlight card */}
                <div className={`absolute top-4 lg:top-12 -left-2 lg:-left-8 bg-white/95 backdrop-blur-lg p-3 lg:p-6 rounded-2xl shadow-xl border border-white/20 transition-all duration-300 ${hoveredProduct === product.id ? 'scale-110' : 'scale-100'}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {product.icon}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm lg:text-lg">{product.name}</div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4 lg:space-y-8">
                  <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${product.color} bg-opacity-10 text-gray-700 rounded-full text-sm font-semibold`}>
                    ✨ {t('products.natural')}
                  </div>
                  
                  <div className="text-xl lg:text-3xl xl:text-4xl font-bold text-emerald-600 italic">
                    "{product.tagline}"
                  </div>
                  
                  <h3 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    {product.name}
                  </h3>

                  <h4 className="text-lg lg:text-2xl xl:text-3xl text-gray-700 font-semibold leading-relaxed mb-4">
                    {product.subtitle}
                  </h4>
                  
                  <div className="text-lg font-semibold text-emerald-600 bg-emerald-50 px-6 py-3 rounded-full inline-block">
                    {product.features}
                  </div>

                  <p className="text-base lg:text-xl text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {product.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-4 bg-white p-4 lg:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 font-semibold text-sm lg:text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100">
                  <h5 className="font-bold text-gray-900 mb-4 flex items-center text-lg lg:text-xl">
                    <Shield className="h-6 w-6 text-emerald-500 mr-3" />
                    {t('common.idealFor')}
                  </h5>
                  <p className="text-gray-600 text-sm lg:text-lg leading-relaxed">{product.idealFor}</p>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col gap-4 lg:gap-6">
                  <button 
                    onClick={() => handleWhatsAppOrder(product.name)}
                    className={`bg-gradient-to-r ${product.color} text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg lg:text-xl flex items-center justify-center space-x-3 group`}
                  >
                    <span>{t('products.orderProduct')} {product.name}</span>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button 
                    onClick={() => handleWhatsAppOrder(product.name)}
                    className="border-2 border-emerald-500 text-emerald-600 px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:bg-emerald-50 hover:scale-105 transition-all duration-300 font-bold text-lg lg:text-xl"
                  >
                    {t('products.learnMore')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-32 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 xl:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-6">{t('products.cta.title')}</h3>
            <p className="text-lg lg:text-2xl mb-8 lg:mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              {t('products.cta.subtitle')}
          </p>
          <div className="flex flex-col gap-4 lg:gap-6 justify-center">
            <button 
              onClick={() => handleWhatsAppOrder('All Products')}
              className="bg-white text-emerald-600 px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg lg:text-xl"
            >
              {t('products.cta.shopAll')}
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:bg-white hover:text-emerald-600 hover:scale-105 transition-all duration-300 font-bold text-lg lg:text-xl"
            >
              {t('products.cta.contact')}
            </button>
          </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default ProductsPage;