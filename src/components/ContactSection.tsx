import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <FadeInSection id="contact" className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Contact & Support
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            {t('contact.title').split(' ')[0]} {t('contact.title').split(' ')[1]} <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{t('contact.title').split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-10">{t('contact.info.title')}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">{t('contact.location.title')}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t('contact.location.address').split('\n').map((line, index) => (
                      <span key={index}>{line}<br /></span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">{t('contact.phone.title')}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t('contact.phone.customer')}<br />
                    {t('contact.phone.orders')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">{t('contact.email.title')}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t('contact.email.general')}<br />
                    {t('contact.email.support')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">{t('contact.hours.title')}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t('contact.hours.weekdays')}<br />
                    {t('contact.hours.saturday')}<br />
                    {t('contact.hours.sunday')}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-6 text-xl">{t('contact.why.title')}</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">24h</div>
                  <div className="text-gray-600 font-semibold">{t('contact.response.time')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">98%</div>
                  <div className="text-gray-600 font-semibold">{t('contact.satisfaction')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">{t('contact.form.title')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                    {t('contact.form.name')} {t('common.required')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-lg"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                    {t('contact.form.email')} {t('common.required')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-lg"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 mb-3">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-lg"
                  placeholder={t('contact.form.phone.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">
                  {t('contact.form.message')} {t('common.required')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-none text-lg"
                  placeholder={t('contact.form.message.placeholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white px-10 py-5 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xl flex items-center justify-center space-x-3"
              >
                <Send className="h-6 w-6" />
                <span>{t('contact.form.send')}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default ContactSection;