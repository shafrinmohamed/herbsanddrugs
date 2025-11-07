import React, { useState } from 'react';
import { Award, Globe, Heart, Microscope, Sparkles, Users, Target } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health First",
      description: "Your wellbeing is our top priority in everything we create"
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Research Backed",
      description: "Every formula is scientifically tested and proven effective"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Premium ingredients meeting the highest industry standards"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Trusted by customers worldwide for natural healing solutions"
    }
  ];

  return (
    <FadeInSection id="about" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Our Story & Values
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Herbs & Drugs</span> Pvt Ltd
          </h2>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="space-y-8 text-gray-600 leading-relaxed">
              <p className="text-xl">
                {t('about.company.story1')}
              </p>
              <p className="text-lg">
                {t('about.company.story2')}
              </p>
              <p className="text-lg">
                {t('about.company.story3')}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">25+</div>
                <div className="text-gray-600 font-semibold">Years of Excellence</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-600 font-semibold">Countries Served</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.pexels.com/photos/3985168/pexels-photo-3985168.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Herbal manufacturing" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">ISO Certified</div>
              <div className="text-sm text-gray-600 font-semibold">Quality Manufacturing</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">{t('about.mission.title')} & {t('about.vision.title')}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-gray-900">{t('about.mission.title')}</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.mission.text')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-gray-900">{t('about.vision.title')}</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.vision.text')}
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">{t('about.values.title')}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group border border-gray-100"
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-emerald-600 transition-all duration-300 ${hoveredValue === index ? 'scale-110 shadow-lg' : 'scale-100'}`}>
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{t(`about.value${index + 1}.title`)}</h4>
                <p className="text-gray-600 leading-relaxed text-lg">{t(`about.value${index + 1}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-32 bg-white rounded-3xl p-12 lg:p-16 shadow-xl border border-gray-100">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {t('about.certifications.title')}
          </h3>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-bold text-gray-900 text-xl">ISO 9001:2015</div>
              <div className="text-gray-600 font-semibold">Quality Management</div>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-bold text-gray-900 text-xl">GMP Certified</div>
              <div className="text-gray-600 font-semibold">Good Manufacturing</div>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-bold text-gray-900 text-xl">FDA Approved</div>
              <div className="text-gray-600 font-semibold">Safety Standards</div>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-bold text-gray-900 text-xl">Organic Certified</div>
              <div className="text-gray-600 font-semibold">Natural Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default AboutSection;