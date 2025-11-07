import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'si' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translations = getTranslations();
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const getTranslations = () => ({
  en: {
    // Header
    'company.name': 'Herbs & Drugs',
    'company.tagline': 'Healing through herbs, trusted by nature.',
    'company.since': 'Natural Healing Solutions Since 2025',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.orderNow': 'Order Now',
    
    // Intro Section
    'intro.welcome': 'Welcome to Natural Healing',
    'intro.title': 'Experience the Power of Herbal Medicine',
    'intro.subtitle': 'Discover our premium collection of herbal remedies, carefully crafted to provide natural relief for your everyday health concerns. From headaches to foot care, we have the perfect solution for you.',
    'intro.exploreProducts': 'Explore Our Products',
    'intro.learnStory': 'Learn Our Story',
    'intro.feature1.title': '100% Natural',
    'intro.feature1.desc': 'Pure herbal ingredients sourced from nature\'s finest',
    'intro.feature2.title': 'Trusted Relief',
    'intro.feature2.desc': '25+ years of proven effectiveness and customer satisfaction',
    'intro.feature3.title': 'Safe & Gentle',
    'intro.feature3.desc': 'No harsh chemicals, suitable for daily use',
    'intro.stats.years': 'Years of Excellence',
    'intro.stats.customers': 'Happy Customers',
    'intro.stats.products': 'Premium Products',
    'intro.stats.natural': 'Natural Ingredients',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Discover our range of premium herbal solutions, each carefully crafted to address specific health concerns with the power of natural ingredients and traditional wisdom.',
    'products.premium': 'Premium Herbal Solutions',
    'products.natural': '100% Natural & Herbal',
    'products.orderProduct': 'Order',
    'products.learnMore': 'Learn More',
    'products.cta.title': 'Ready to Experience Natural Relief?',
    'products.cta.subtitle': 'Join thousands of satisfied customers who trust our herbal solutions for their health and wellness needs.',
    'products.cta.shopAll': 'Shop All Products',
    'products.cta.contact': 'Contact Us',
    
    // Product Details
    'product.fix.name': 'FIX',
    'product.fix.tagline': 'Roll away the pain – Naturally',
    'product.fix.subtitle': 'Fast-acting herbal oil roll-on for instant relief from headaches, migraines & cold.',
    'product.fix.features': '100% natural | Quick relief | Refreshing aroma',
    'product.fix.description': 'FIX is a 100% herbal oil roll-on, specially crafted to bring quick relief from headaches, migraines, and nasal congestion. It\'s powered by a potent blend of essential herbal oils that work together to relax the nerves, reduce pressure, and open up blocked sinuses.',
    'product.fix.benefit1': 'Fast-acting',
    'product.fix.benefit2': 'Easy-to-use roll-on',
    'product.fix.benefit3': 'Non-greasy, refreshing aroma',
    'product.fix.benefit4': 'Safe for daily use',
    'product.fix.idealFor': 'Busy professionals, students, and anyone prone to stress-induced headaches or seasonal colds.',
    
    'product.healaid.name': 'HealAid',
    'product.healaid.tagline': 'Heal your heels – the herbal way.',
    'product.healaid.subtitle': 'Deeply moisturizing herbal cream to repair cracked heels and restore softness.',
    'product.healaid.features': 'Heals | Nourishes | Softens',
    'product.healaid.description': 'HealAid is a deeply nourishing herbal cream designed to heal cracked heels, dry soles, and rough feet. Enriched with powerful natural moisturizers and skin-repairing botanicals, it restores softness and strength to tired, damaged feet.',
    'product.healaid.benefit1': 'Soothes and softens',
    'product.healaid.benefit2': 'Repairs skin cracks naturally',
    'product.healaid.benefit3': 'Non-sticky, quickly absorbing',
    'product.healaid.benefit4': 'Gentle herbal formula',
    'product.healaid.idealFor': 'Those suffering from cracked feet due to long hours of standing, dry weather, or skin conditions.',
    
    'product.varicura.name': 'VariCura',
    'product.varicura.tagline': 'Cool the burn. Calm your legs.',
    'product.varicura.subtitle': 'Herbal cream that soothes burning sensation and discomfort from varicose veins.',
    'product.varicura.features': 'Cools | Relieves | Supports circulation',
    'product.varicura.description': 'VariCura is a soothing herbal remedy that provides relief from burning sensation and discomfort caused by varicose veins. With a blend of circulation-boosting herbs and cooling agents, it helps calm the skin, reduce inflammation, and ease tired legs.',
    'product.varicura.benefit1': 'Cools and comforts',
    'product.varicura.benefit2': 'Promotes healthy circulation',
    'product.varicura.benefit3': 'Reduces burning and heaviness',
    'product.varicura.benefit4': '100% natural formulation',
    'product.varicura.idealFor': 'Individuals with varicose veins, standing jobs, or leg discomfort from poor circulation.',
    
    'product.actyon.name': 'ACTYON',
    'product.actyon.tagline': 'Move freely. Ease the pain.',
    'product.actyon.subtitle': 'Herbal formula that relieves muscle stiffness and joint discomfort for smooth, active movement.',
    'product.actyon.features': 'Soothes | Relaxes | Restores mobility',
    'product.actyon.description': 'Rediscover the freedom to move with ACTYON, a luxurious Ayurvedic formulation designed to soothe tired muscles and stiff joints. Blending time-honored herbs with therapeutic essential oils, it works deep within to ease pain, calm inflammation, and restore balance to your body\'s natural rhythm.',
    'product.actyon.benefit1': 'Deep-penetrating, non-greasy texture',
    'product.actyon.benefit2': 'Relieves soreness and joint discomfort',
    'product.actyon.benefit3': 'Supports flexibility and circulation',
    'product.actyon.benefit4': 'Crafted for daily self-care and recovery',
    'product.actyon.idealFor': 'Wellness enthusiasts, yoga practitioners, fitness lovers, and anyone seeking natural, holistic relief from everyday body strain.',
    
    // About
    'about.title': 'About Herbs & Drugs Pvt Ltd',
    'about.story': 'Our Story & Values',
    'about.company.story1': 'For over 25 years, Herbs & Drugs Pvt Ltd has been at the forefront of natural healing solutions, combining traditional herbal wisdom with modern pharmaceutical expertise to create effective, safe therapeutic products.',
    'about.company.story2': 'Our flagship products represent decades of research and development in natural pain relief. We understand that health concerns can significantly impact your quality of life, which is why we\'ve dedicated ourselves to creating solutions that work.',
    'about.company.story3': 'Every bottle is manufactured in our state-of-the-art facility, following strict quality control measures and using only the finest natural ingredients sourced from trusted suppliers around the world.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To provide safe, effective, and affordable natural healing solutions that improve the quality of life for people worldwide. We are committed to harnessing the power of traditional herbal medicine, backed by modern research and manufacturing standards, to create products that truly make a difference in people\'s daily health and wellness journey.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To become the world\'s most trusted name in natural herbal remedies, leading the transformation towards holistic healthcare solutions. We envision a future where natural healing is accessible to everyone, where our products serve as the first choice for those seeking gentle yet effective alternatives to conventional medicine, promoting wellness and vitality across all communities.',
    'about.values.title': 'Our Core Values',
    'about.values.subtitle': 'The principles that guide everything we do in our mission to provide natural healing solutions',
    'about.value1.title': 'Health First',
    'about.value1.desc': 'Your wellbeing is our top priority in everything we create',
    'about.value2.title': 'Research Backed',
    'about.value2.desc': 'Every formula is scientifically tested and proven effective',
    'about.value3.title': 'Quality Assured',
    'about.value3.desc': 'Premium ingredients meeting the highest industry standards',
    'about.value4.title': 'Global Reach',
    'about.value4.desc': 'Trusted by customers worldwide for natural healing solutions',
    'about.certifications.title': 'Certifications & Standards',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.support': 'Contact & Support',
    'contact.subtitle': 'Have questions about our products or need assistance with your order? We\'re here to help you find the natural relief you deserve.',
    'contact.info.title': 'Contact Information',
    'contact.location.title': 'Our Location',
    'contact.location.address': '173/1 Batupitiya\nKandy, Sri Lanka',
    'contact.phone.title': 'Phone Numbers',
    'contact.phone.customer': 'Customer Service: +94 769 234 455',
    'contact.phone.orders': 'Orders & Support: +94 769 234 455',
    'contact.email.title': 'Email Addresses',
    'contact.email.general': 'General Inquiries: info@herbsanddrugs.lk',
    'contact.email.support': 'Customer Support: support@herbsanddrugs.lk',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekdays': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact.hours.saturday': 'Saturday: 10:00 AM - 4:00 PM',
    'contact.hours.sunday': 'Sunday: Closed',
    'contact.why.title': 'Why Choose Us?',
    'contact.response.time': 'Response Time',
    'contact.satisfaction': 'Customer Satisfaction',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.phone.placeholder': '+94 769 234 455',
    'contact.form.message.placeholder': 'Tell us how we can help you...',
    
    // Footer
    'footer.company.desc': 'For over 25 years, we\'ve been dedicated to providing natural, effective healing solutions. Our products represent our commitment to quality and your wellbeing.',
    'footer.quicklinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.faqs': 'FAQs',
    'footer.testimonials': 'Testimonials',
    'footer.contact.us': 'Contact Us',
    'footer.copyright': '© 2024 Herbs & Drugs Pvt Ltd. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.shipping': 'Shipping Info',
    
    // Common
    'common.idealFor': 'Ideal For:',
    'common.reviews': 'reviews',
    'common.required': '*'
  },
  
  si: {
    // Header
    'company.name': 'හර්බ්ස් ඇන්ඩ් ඩ්‍රග්ස්',
    'company.tagline': 'ඔසු මගින් සුව කිරීම, ස්වභාවධර්මයෙන් විශ්වාසදායක.',
    'company.since': '2025 සිට ස්වභාවික සුව කිරීමේ විසඳුම්',
    'nav.products': 'නිෂ්පාදන',
    'nav.about': 'අප ගැන',
    'nav.contact': 'සම්බන්ධතා',
    'nav.orderNow': 'දැන් ඇණවුම් කරන්න',
    
    // Intro Section
    'intro.welcome': 'ස්වභාවික සුව කිරීමට සාදරයෙන් පිළිගනිමු',
    'intro.title': 'ඔසු වෛද්‍ය විද්‍යාවේ බලය අත්විඳින්න',
    'intro.subtitle': 'ඔබේ එදිනෙදා සෞඛ්‍ය ගැටලු සඳහා ස්වභාවික සහනයක් ලබා දීම සඳහා ප්‍රවේශමෙන් සාදන ලද අපගේ ප්‍රිමියම් ඔසු ප්‍රතිකාර එකතුව සොයා ගන්න. හිසරදයේ සිට පාද රැකවරණය දක්වා, ඔබට පරිපූර්ණ විසඳුම අප සතුව ඇත.',
    'intro.exploreProducts': 'අපගේ නිෂ්පාදන ගවේෂණය කරන්න',
    'intro.learnStory': 'අපගේ කතාව ඉගෙන ගන්න',
    'intro.feature1.title': '100% ස්වභාවික',
    'intro.feature1.desc': 'ස්වභාවධර්මයේ හොඳම ප්‍රභවයන්ගෙන් ලබාගත් පිරිසිදු ඔසු අමුද්‍රව්‍ය',
    'intro.feature2.title': 'විශ්වාසදායක සහනය',
    'intro.feature2.desc': 'වසර 25+ ක ඔප්පු වූ ඵලදායිත්වය සහ පාරිභෝගික තෘප්තිය',
    'intro.feature3.title': 'ආරක්ෂිත සහ මෘදු',
    'intro.feature3.desc': 'කටුක රසායනික ද්‍රව්‍ය නොමැත, දෛනික භාවිතයට සුදුසුයි',
    'intro.stats.years': 'වසරක විශිෂ්ටත්වය',
    'intro.stats.customers': 'සතුටු පාරිභෝගිකයින්',
    'intro.stats.products': 'ප්‍රිමියම් නිෂ්පාදන',
    'intro.stats.natural': 'ස්වභාවික අමුද්‍රව්‍ය',
    
    // Products
    'products.title': 'අපගේ නිෂ්පාදන',
    'products.subtitle': 'ස්වභාවික අමුද්‍රව්‍ය සහ සාම්ප්‍රදායික ප්‍රඥාවේ බලයෙන් නිශ්චිත සෞඛ්‍ය ගැටලු විසඳීම සඳහා ප්‍රවේශමෙන් සාදන ලද අපගේ ප්‍රිමියම් ඔසු විසඳුම් පරාසය සොයා ගන්න.',
    'products.premium': 'ප්‍රිමියම් ඔසු විසඳුම්',
    'products.natural': '100% ස්වභාවික සහ ඔසු',
    'products.orderProduct': 'ඇණවුම්',
    'products.learnMore': 'තව දැනගන්න',
    'products.cta.title': 'ස්වභාවික සහනය අත්විඳීමට සූදානම්ද?',
    'products.cta.subtitle': 'ඔවුන්ගේ සෞඛ්‍ය සහ සුවතා අවශ්‍යතා සඳහා අපගේ ඔසු විසඳුම් විශ්වාස කරන දහස් ගණන් සතුටු පාරිභෝගිකයින් සමඟ එක්වන්න.',
    'products.cta.shopAll': 'සියලුම නිෂ්පාදන මිලදී ගන්න',
    'products.cta.contact': 'අප සමඟ සම්බන්ධ වන්න',
    
    // Product Details
    'product.fix.name': 'ෆික්ස්',
    'product.fix.tagline': 'වේදනාව ස්වභාවිකව පෙරළන්න',
    'product.fix.subtitle': 'හිසරදය, ඉරුවාරදය සහ සෙම්ප්‍රතිශ්‍යාවෙන් ක්ෂණික සහනයක් සඳහා වේගයෙන් ක්‍රියා කරන ඔසු තෙල් රෝල්-ඔන්.',
    'product.fix.features': '100% ස්වභාවික | ඉක්මන් සහනය | ප්‍රබෝධමත් සුවඳ',
    'product.fix.description': 'ෆික්ස් යනු 100% ඔසු තෙල් රෝල්-ඔන් එකක් වන අතර, හිසරදය, ඉරුවාරදය සහ නාසික තදබදයෙන් ඉක්මන් සහනයක් ලබා දීම සඳහා විශේෂයෙන් සාදන ලදී. එය ස්නායු ලිහිල් කිරීමට, පීඩනය අඩු කිරීමට සහ අවහිර වූ සයිනස් විවෘත කිරීමට එකට ක්‍රියා කරන අත්‍යවශ්‍ය ඔසු තෙල්වල ප්‍රබල මිශ්‍රණයකින් බලගන්වයි.',
    'product.fix.benefit1': 'වේගයෙන් ක්‍රියා කරන',
    'product.fix.benefit2': 'භාවිතයට පහසු රෝල්-ඔන්',
    'product.fix.benefit3': 'තෙල් නොවන, ප්‍රබෝධමත් සුවඳ',
    'product.fix.benefit4': 'දෛනික භාවිතයට ආරක්ෂිත',
    'product.fix.idealFor': 'කාර්යබහුල වෘත්තිකයන්, සිසුන් සහ ආතතියෙන් ඇතිවන හිසරදයට හෝ සෘතුමය සෙම්ප්‍රතිශ්‍යාවට ගොදුරු වන ඕනෑම කෙනෙකුට.',
    
    'product.healaid.name': 'හීල්ඒඩ්',
    'product.healaid.tagline': 'ඔබේ විලුඹ සුව කරන්න - ඔසු ක්‍රමයෙන්.',
    'product.healaid.subtitle': 'ඉරිතැලුණු විලුඹ අලුත්වැඩියා කිරීමට සහ මෘදුකම ප්‍රතිෂ්ඨාපනය කිරීමට ගැඹුරින් තෙතමනය කරන ඔසු ක්‍රීම්.',
    'product.healaid.features': 'සුව කරයි | පෝෂණය කරයි | මෘදු කරයි',
    'product.healaid.description': 'හීල්ඒඩ් යනු ඉරිතැලුණු විලුඹ, වියළි පාද සහ රළු පාද සුව කිරීම සඳහා නිර්මාණය කරන ලද ගැඹුරින් පෝෂණය කරන ඔසු ක්‍රීම් එකකි. ප්‍රබල ස්වභාවික තෙතමනය කරන්නන් සහ සම අලුත්වැඩියා කරන උද්භිද විද්‍යාවෙන් පොහොසත් වූ එය වෙහෙසට පත් වූ, හානියට පත් වූ පාදවල මෘදුකම සහ ශක්තිය ප්‍රතිෂ්ඨාපනය කරයි.',
    'product.healaid.benefit1': 'සමනය කරයි සහ මෘදු කරයි',
    'product.healaid.benefit2': 'සම ඉරිතැලීම් ස්වභාවිකව අලුත්වැඩියා කරයි',
    'product.healaid.benefit3': 'ඇලෙන සුළු නොවන, ඉක්මනින් අවශෝෂණය වන',
    'product.healaid.benefit4': 'මෘදු ඔසු සූත්‍රය',
    'product.healaid.idealFor': 'දිගු වේලාවක් සිටගෙන සිටීම, වියළි කාලගුණය හෝ සම රෝග හේතුවෙන් ඉරිතැලුණු පාද ඇති අයට.',
    
    'product.varicura.name': 'වරිකියුරා',
    'product.varicura.tagline': 'දැවිල්ල සිසිල් කරන්න. ඔබේ කකුල් සන්සුන් කරන්න.',
    'product.varicura.subtitle': 'වරිකෝස් නහර වලින් ඇතිවන දැවිල්ල සහ අපහසුතාවය සමනය කරන ඔසු ක්‍රීම්.',
    'product.varicura.features': 'සිසිල් කරයි | සහනය දෙයි | රුධිර සංසරණයට සහාය වේ',
    'product.varicura.description': 'වරිකියුරා යනු වරිකෝස් නහර වලින් ඇතිවන දැවිල්ල සහ අපහසුතාවයෙන් සහනයක් ලබා දෙන සමනකාරී ඔසු ප්‍රතිකාරයකි. රුධිර සංසරණය වැඩි දියුණු කරන ඔසු සහ සිසිල් කරන කාරකවල මිශ්‍රණයක් සමඟ, එය සම සන්සුන් කිරීමට, දැවිල්ල අඩු කිරීමට සහ වෙහෙසට පත් කකුල් සමනය කිරීමට උපකාරී වේ.',
    'product.varicura.benefit1': 'සිසිල් කරයි සහ සැනසීම ලබා දෙයි',
    'product.varicura.benefit2': 'සෞඛ්‍ය සම්පන්න රුධිර සංසරණය ප්‍රවර්ධනය කරයි',
    'product.varicura.benefit3': 'දැවිල්ල සහ බරින් සිටීම අඩු කරයි',
    'product.varicura.benefit4': '100% ස්වභාවික සූත්‍රය',
    'product.varicura.idealFor': 'වරිකෝස් නහර ඇති පුද්ගලයින්, සිටගෙන වැඩ කරන රැකියා හෝ දුර්වල රුධිර සංසරණයෙන් කකුල් අපහසුතාවයට ගොදුරු වන අයට.',
    
    'product.actyon.name': 'ඇක්ටියන්',
    'product.actyon.tagline': 'නිදහසේ චලනය වන්න. වේදනාව සමනය කරන්න.',
    'product.actyon.subtitle': 'සුමට, ක්‍රියාකාරී චලනය සඳහා මාංශ පේශි දැඩිකම සහ සන්ධි අපහසුතාවය සමනය කරන ඔසු සූත්‍රය.',
    'product.actyon.features': 'සමනය කරයි | ලිහිල් කරයි | චලනය ප්‍රතිෂ්ඨාපනය කරයි',
    'product.actyon.description': 'ඇක්ටියන් සමඟ චලනය කිරීමේ නිදහස නැවත සොයා ගන්න, වෙහෙසට පත් මාංශ පේශි සහ දැඩි සන්ධි සමනය කිරීම සඳහා නිර්මාණය කරන ලද සුඛෝපභෝගී ආයුර්වේද සූත්‍රයකි. කාලයෙන් පරීක්ෂා වූ ඔසු ප්‍රතිකාරක අත්‍යවශ්‍ය තෙල් සමඟ මිශ්‍ර කරමින්, එය වේදනාව සමනය කිරීමට, දැවිල්ල සන්සුන් කිරීමට සහ ඔබේ ශරීරයේ ස්වභාවික රිද්මයට සමතුලිතතාවය ප්‍රතිෂ්ඨාපනය කිරීමට ගැඹුරින් ක්‍රියා කරයි.',
    'product.actyon.benefit1': 'ගැඹුරට විනිවිද යන, තෙල් නොවන වයනය',
    'product.actyon.benefit2': 'වේදනාව සහ සන්ධි අපහසුතාවය සමනය කරයි',
    'product.actyon.benefit3': 'නම්‍යශීලිත්වය සහ රුධිර සංසරණයට සහාය වේ',
    'product.actyon.benefit4': 'දෛනික ස්වයං රැකවරණය සහ ප්‍රතිසාධනය සඳහා සාදන ලදී',
    'product.actyon.idealFor': 'සුවතා ලෝලීන්, යෝග අභ්‍යාසකරුවන්, යෝග්‍යතා ලෝලීන් සහ එදිනෙදා ශරීර ආතතියෙන් ස්වභාවික, සමස්ත සහනයක් සොයන ඕනෑම කෙනෙකුට.',
    
    // About
    'about.title': 'හර්බ්ස් ඇන්ඩ් ඩ්‍රග්ස් ප්‍රයිවට් ලිමිටඩ් ගැන',
    'about.story': 'අපගේ කතාව සහ වටිනාකම්',
    'about.company.story1': 'වසර 25කට වැඩි කාලයක්, හර්බ්ස් ඇන්ඩ් ඩ්‍රග්ස් ප්‍රයිවට් ලිමිටඩ් ස්වභාවික සුව කිරීමේ විසඳුම්වල ප්‍රමුඛස්థානයේ සිට ඇත, සාම්ප්‍රදායික ඔසු ප්‍රඥාව නවීන ඖෂධ විශේෂඥතාව සමඟ ඒකාබද්ධ කරමින් ඵලදායී, ආරක්ෂිත ප්‍රතිකාරක නිෂ්පාදන නිර්මාණය කරයි.',
    'about.company.story2': 'අපගේ ප්‍රමුඛ නිෂ්පාදන ස්වභාවික වේදනා සහනයේ දශක ගණනක පර්යේෂණ සහ සංවර්ධනය නියෝජනය කරයි. සෞඛ්‍ය ගැටලු ඔබේ ජීවන තත්ත්වයට සැලකිය යුතු ලෙස බලපෑ හැකි බව අපි තේරුම් ගනිමු, එම නිසා අපි ක්‍රියා කරන විසඳුම් නිර්මාණය කිරීමට කැපවී සිටිමු.',
    'about.company.story3': 'සෑම බෝතලයක්ම අපගේ අති නවීන පහසුකම්වල නිෂ්පාදනය කරනු ලබන අතර, දැඩි ගුණාත්මක පාලන ක්‍රමවේද අනුගමනය කරමින් සහ ලොව පුරා විශ්වාසදායක සැපයුම්කරුවන්ගෙන් ලබාගත් හොඳම ස්වභාවික අමුද්‍රව්‍ය පමණක් භාවිතා කරයි.',
    'about.mission.title': 'අපගේ මෙහෙවර',
    'about.mission.text': 'ලොව පුරා මිනිසුන්ගේ ජීවන තත්ත්වය වැඩි දියුණු කරන ආරක්ෂිත, ඵලදායී සහ දැරිය හැකි ස්වභාවික සුව කිරීමේ විසඳුම් සැපයීම. නවීන පර්යේෂණ සහ නිෂ්පාදන ප්‍රමිතීන්ගෙන් පිටුබලය ලබන සාම්ප්‍රදායික ඔසු වෛද්‍ය විද්‍යාවේ බලය උපයෝගී කර ගැනීමට අපි කැපවී සිටිමු, මිනිසුන්ගේ දෛනික සෞඛ්‍ය සහ සුවතා ගමනේ සැබවින්ම වෙනසක් ඇති කරන නිෂ්පාදන නිර්මාණය කිරීමට.',
    'about.vision.title': 'අපගේ දැක්ම',
    'about.vision.text': 'ස්වභාවික ඔසු ප්‍රතිකාරවල ලොව වඩාත්ම විශ්වාසදායක නම බවට පත්වීම, සමස්ත සෞඛ්‍ය සේවා විසඳුම් දෙසට පරිවර්තනයට නායකත්වය දීම. ස්වභාවික සුව කිරීම සෑම කෙනෙකුටම ප්‍රවේශ විය හැකි, අපගේ නිෂ්පාදන සාම්ප්‍රදායික වෛද්‍ය විද්‍යාවට මෘදු නමුත් ඵලදායී විකල්ප සොයන අයගේ පළමු තේරීම ලෙස සේවය කරන, සියලුම ප්‍රජාවන් හරහා සුවතාව සහ ජීවනීයත්වය ප්‍රවර්ධනය කරන අනාගතයක් අපි දකිමු.',
    'about.values.title': 'අපගේ මූලික වටිනාකම්',
    'about.values.subtitle': 'ස්වභාවික සුව කිරීමේ විසඳුම් සැපයීමේ අපගේ මෙහෙවරේ දී අපි කරන සෑම දෙයකම මග පෙන්වන මූලධර්ම',
    'about.value1.title': 'සෞඛ්‍යය පළමුව',
    'about.value1.desc': 'අපි නිර්මාණය කරන සෑම දෙයකම ඔබේ යහපැවැත්ම අපගේ ප්‍රමුඛ ප්‍රමුඛතාවයයි',
    'about.value2.title': 'පර්යේෂණ පිටුබලය',
    'about.value2.desc': 'සෑම සූත්‍රයක්ම විද්‍යාත්මකව පරීක්ෂා කර ඔප්පු කරන ලද ඵලදායී',
    'about.value3.title': 'ගුණාත්මකභාවය සහතික',
    'about.value3.desc': 'ඉහළම කර්මාන්ත ප්‍රමිතීන් සපුරාලන ප්‍රිමියම් අමුද්‍රව්‍ය',
    'about.value4.title': 'ගෝලීය ව්‍යාප්තිය',
    'about.value4.desc': 'ස්වභාවික සුව කිරීමේ විසඳුම් සඳහා ලොව පුරා පාරිභෝගිකයින්ගේ විශ්වාසය',
    'about.certifications.title': 'සහතික සහ ප්‍රමිතීන්',
    
    // Contact
    'contact.title': 'සම්බන්ධ වන්න',
    'contact.support': 'සම්බන්ධතා සහ සහාය',
    'contact.subtitle': 'අපගේ නිෂ්පාදන ගැන ප්‍රශ්න ඇත්ද හෝ ඔබේ ඇණවුම සමඟ සහාය අවශ්‍යද? ඔබ ලැබිය යුතු ස්වභාවික සහනය සොයා ගැනීමට අපි මෙහි සිටිමු.',
    'contact.info.title': 'සම්බන්ධතා තොරතුරු',
    'contact.location.title': 'අපගේ ස්ථානය',
    'contact.location.address': '173/1 බටුපිටිය\nකන්දි, ශ්‍රී ලංකාව',
    'contact.phone.title': 'දුරකථන අංක',
    'contact.phone.customer': 'පාරිභෝගික සේවය: +94 769 234 455',
    'contact.phone.orders': 'ඇණවුම් සහ සහාය: +94 769 234 455',
    'contact.email.title': 'විද්‍යුත් තැපැල් ලිපින',
    'contact.email.general': 'සාමාන්‍ය විමසීම්: info@herbsanddrugs.lk',
    'contact.email.support': 'පාරිභෝගික සහාය: support@herbsanddrugs.lk',
    'contact.hours.title': 'ව්‍යාපාරික වේලාවන්',
    'contact.hours.weekdays': 'සඳුදා - සිකුරාදා: පෙ.ව. 9:00 - ප.ව. 6:00',
    'contact.hours.saturday': 'සෙනසුරාදා: පෙ.ව. 10:00 - ප.ව. 4:00',
    'contact.hours.sunday': 'ඉරිදා: වසා ඇත',
    'contact.why.title': 'ඇයි අපව තෝරා ගන්නේ?',
    'contact.response.time': 'ප්‍රතිචාර කාලය',
    'contact.satisfaction': 'පාරිභෝගික තෘප්තිය',
    'contact.form.title': 'අපට පණිවිඩයක් යවන්න',
    'contact.form.name': 'සම්පූර්ණ නම',
    'contact.form.email': 'විද්‍යුත් තැපැල් ලිපිනය',
    'contact.form.phone': 'දුරකථන අංකය',
    'contact.form.message': 'පණිවිඩය',
    'contact.form.send': 'පණිවිඩය යවන්න',
    'contact.form.name.placeholder': 'ඔබේ සම්පූර්ණ නම',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.phone.placeholder': '+94 769 234 455',
    'contact.form.message.placeholder': 'අපට ඔබට උදව් කළ හැකි ආකාරය කියන්න...',
    
    // Footer
    'footer.company.desc': 'වසර 25කට වැඩි කාලයක්, අපි ස්වභාවික, ඵලදායී සුව කිරීමේ විසඳුම් සැපයීමට කැපවී සිටිමු. අපගේ නිෂ්පාදන ගුණාත්මකභාවය සහ ඔබේ යහපැවැත්ම සඳහා අපගේ කැපවීම නියෝජනය කරයි.',
    'footer.quicklinks': 'ඉක්මන් සබැඳි',
    'footer.home': 'මුල් පිටුව',
    'footer.faqs': 'නිතර අසන ප්‍රශ්න',
    'footer.testimonials': 'සාක්ෂි',
    'footer.contact.us': 'අප සමඟ සම්බන්ධ වන්න',
    'footer.copyright': '© 2024 හර්බ්ස් ඇන්ඩ් ඩ්‍රග්ස් ප්‍රයිවට් ලිමිටඩ්. සියලුම හිමිකම් ඇවිරිණි.',
    'footer.privacy': 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය',
    'footer.terms': 'සේවා කොන්දේසි',
    'footer.shipping': 'නැව්ගත කිරීමේ තොරතුරු',
    
    // Common
    'common.idealFor': 'සුදුසු වන්නේ:',
    'common.reviews': 'සමාලෝචන',
    'common.required': '*'
  },
  
  ta: {
    // Header
    'company.name': 'ஹெர்ப்ஸ் & ட்ரக்ஸ்',
    'company.tagline': 'மூலிகைகள் மூலம் குணப்படுத்துதல், இயற்கையால் நம்பப்படுகிறது.',
    'company.since': '2025 முதல் இயற்கை குணப்படுத்தும் தீர்வுகள்',
    'nav.products': 'தயாரிப்புகள்',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.contact': 'தொடர்பு',
    'nav.orderNow': 'இப்போது ஆர்டர் செய்யுங்கள்',
    
    // Intro Section
    'intro.welcome': 'இயற்கை குணப்படுத்துதலுக்கு வரவேற்கிறோம்',
    'intro.title': 'மூலிகை மருத்துவத்தின் சக்தியை அனுபவியுங்கள்',
    'intro.subtitle': 'உங்கள் அன்றாட சுகாதார கவலைகளுக்கு இயற்கை நிவாரணம் வழங்க கவனமாக வடிவமைக்கப்பட்ட எங்கள் பிரீமியம் மூலிகை சிகிச்சைகளின் தொகுப்பைக் கண்டறியுங்கள். தலைவலியிலிருந்து கால் பராமரிப்பு வரை, உங்களுக்கு சரியான தீர்வு எங்களிடம் உள்ளது.',
    'intro.exploreProducts': 'எங்கள் தயாரிப்புகளை ஆராயுங்கள்',
    'intro.learnStory': 'எங்கள் கதையைக் கற்றுக்கொள்ளுங்கள்',
    'intro.feature1.title': '100% இயற்கை',
    'intro.feature1.desc': 'இயற்கையின் சிறந்த மூலங்களிலிருந்து பெறப்பட்ட தூய மூலிகை பொருட்கள்',
    'intro.feature2.title': 'நம்பகமான நிவாரணம்',
    'intro.feature2.desc': '25+ ஆண்டுகள் நிரூபிக்கப்பட்ட செயல்திறன் மற்றும் வாடிக்கையாளர் திருப்தி',
    'intro.feature3.title': 'பாதுகாப்பான மற்றும் மென்மையான',
    'intro.feature3.desc': 'கடுமையான இரசாயனங்கள் இல்லை, தினசரி பயன்பாட்டிற்கு ஏற்றது',
    'intro.stats.years': 'ஆண்டுகள் சிறப்பு',
    'intro.stats.customers': 'மகிழ்ச்சியான வாடிக்கையாளர்கள்',
    'intro.stats.products': 'பிரீமியம் தயாரிப்புகள்',
    'intro.stats.natural': 'இயற்கை பொருட்கள்',
    
    // Products
    'products.title': 'எங்கள் தயாரிப்புகள்',
    'products.subtitle': 'இயற்கை பொருட்கள் மற்றும் பாரம்பரிய ஞானத்தின் சக்தியுடன் குறிப்பிட்ட சுகாதார கவலைகளை நிவர்த்தி செய்ய கவனமாக வடிவமைக்கப்பட்ட எங்கள் பிரீமியம் மூலிகை தீர்வுகளின் வரம்பைக் கண்டறியுங்கள்.',
    'products.premium': 'பிரீமியம் மூலிகை தீர்வுகள்',
    'products.natural': '100% இயற்கை மற்றும் மூலிகை',
    'products.orderProduct': 'ஆர்டர்',
    'products.learnMore': 'மேலும் அறிக',
    'products.cta.title': 'இயற்கை நிவாரணத்தை அனுபவிக்க தயாரா?',
    'products.cta.subtitle': 'அவர்களின் சுகாதாரம் மற்றும் நல்வாழ்வு தேவைகளுக்காக எங்கள் மூலிகை தீர்வுகளை நம்பும் ஆயிரக்கணக்கான திருப்தியான வாடிக்கையாளர்களுடன் சேருங்கள்.',
    'products.cta.shopAll': 'அனைத்து தயாரிப்புகளையும் வாங்குங்கள்',
    'products.cta.contact': 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
    
    // Product Details
    'product.fix.name': 'ஃபிக்ஸ்',
    'product.fix.tagline': 'வலியை இயற்கையாக உருட்டி விடுங்கள்',
    'product.fix.subtitle': 'தலைவலி, ஒற்றைத் தலைவலி மற்றும் சளியிலிருந்து உடனடி நிவாரணத்திற்காக வேகமாக செயல்படும் மூலிகை எண்ணெய் ரோல்-ஆன்.',
    'product.fix.features': '100% இயற்கை | விரைவான நிவாரணம் | புத்துணர்ச்சியூட்டும் நறுமணம்',
    'product.fix.description': 'ஃபிக்ஸ் என்பது 100% மூலிகை எண்ணெய் ரோல்-ஆன் ஆகும், இது தலைவலி, ஒற்றைத் தலைவலி மற்றும் நாசி நெரிசலிலிருந்து விரைவான நிவாரணம் வழங்க சிறப்பாக வடிவமைக்கப்பட்டுள்ளது. இது நரம்புகளை தளர்த்த, அழுத்தத்தை குறைக்க மற்றும் அடைக்கப்பட்ட சைனஸ்களை திறக்க ஒன்றாக வேலை செய்யும் அத்தியாவசிய மூலிகை எண்ணெய்களின் சக்திவாய்ந்த கலவையால் இயக்கப்படுகிறது.',
    'product.fix.benefit1': 'வேகமாக செயல்படும்',
    'product.fix.benefit2': 'பயன்படுத்த எளிதான ரோல்-ஆன்',
    'product.fix.benefit3': 'எண்ணெய் இல்லாத, புத்துணர்ச்சியூட்டும் நறுமணம்',
    'product.fix.benefit4': 'தினசரி பயன்பாட்டிற்கு பாதுகாப்பானது',
    'product.fix.idealFor': 'பிஸியான தொழில் வல்லுநர்கள், மாணவர்கள் மற்றும் மன அழுத்தத்தால் ஏற்படும் தலைவலி அல்லது பருவகால சளிக்கு ஆளாகும் எவருக்கும்.',
    
    'product.healaid.name': 'ஹீலெய்ட்',
    'product.healaid.tagline': 'உங்கள் குதிகால்களை குணப்படுத்துங்கள் - மூலிகை வழியில்.',
    'product.healaid.subtitle': 'வெடித்த குதிகால்களை சரிசெய்து மென்மையை மீட்டெடுக்க ஆழமாக ஈரப்பதமூட்டும் மூலிகை கிரீம்.',
    'product.healaid.features': 'குணப்படுத்துகிறது | ஊட்டமளிக்கிறது | மென்மையாக்குகிறது',
    'product.healaid.description': 'ஹீலெய்ட் என்பது வெடித்த குதிகால்கள், வறண்ட உள்ளங்கால்கள் மற்றும் கரடுமுரடான கால்களை குணப்படுத்த வடிவமைக்கப்பட்ட ஆழமாக ஊட்டமளிக்கும் மூலிகை கிரீம் ஆகும். சக்திவாய்ந்த இயற்கை ஈரப்பதமூட்டிகள் மற்றும் தோல் சரிசெய்யும் தாவரவியல் நிறைந்த இது, சோர்வான, சேதமடைந்த கால்களுக்கு மென்மை மற்றும் வலிமையை மீட்டெடுக்கிறது.',
    'product.healaid.benefit1': 'அமைதிப்படுத்துகிறது மற்றும் மென்மையாக்குகிறது',
    'product.healaid.benefit2': 'தோல் வெடிப்புகளை இயற்கையாக சரிசெய்கிறது',
    'product.healaid.benefit3': 'ஒட்டாத, விரைவாக உறிஞ்சும்',
    'product.healaid.benefit4': 'மென்மையான மூலிகை சூத்திரம்',
    'product.healaid.idealFor': 'நீண்ட நேரம் நிற்பது, வறண்ட காலநிலை அல்லது தோல் நோய்களால் வெடித்த கால்களால் பாதிக்கப்பட்டவர்களுக்கு.',
    
    'product.varicura.name': 'வரிக்யூரா',
    'product.varicura.tagline': 'எரிச்சலை குளிர்விக்கவும். உங்கள் கால்களை அமைதிப்படுத்தவும்.',
    'product.varicura.subtitle': 'வரிகோஸ் நரம்புகளால் ஏற்படும் எரிச்சல் உணர்வு மற்றும் அசௌகரியத்தை அமைதிப்படுத்தும் மூலிகை கிரீம்.',
    'product.varicura.features': 'குளிர்விக்கிறது | நிவாரணம் அளிக்கிறது | இரத்த ஓட்டத்தை ஆதரிக்கிறது',
    'product.varicura.description': 'வரிக்யூரா என்பது வரிகோஸ் நரம்புகளால் ஏற்படும் எரிச்சல் உணர்வு மற்றும் அசௌகரியத்திலிருந்து நிவாரணம் வழங்கும் அமைதிப்படுத்தும் மூலிகை சிகிச்சையாகும். இரத்த ஓட்டத்தை அதிகரிக்கும் மூலிகைகள் மற்றும் குளிர்விக்கும் முகவர்களின் கலவையுடன், இது தோலை அமைதிப்படுத்த, வீக்கத்தை குறைக்க மற்றும் சோர்வான கால்களை ஆற்ற உதவுகிறது.',
    'product.varicura.benefit1': 'குளிர்விக்கிறது மற்றும் ஆறுதல் அளிக்கிறது',
    'product.varicura.benefit2': 'ஆரோக்கியமான இரத்த ஓட்டத்தை ஊக்குவிக்கிறது',
    'product.varicura.benefit3': 'எரிச்சல் மற்றும் கனத்தை குறைக்கிறது',
    'product.varicura.benefit4': '100% இயற்கை சூத்திரம்',
    'product.varicura.idealFor': 'வரிகோஸ் நரம்புகள் உள்ளவர்கள், நிற்கும் வேலைகள் அல்லது மோசமான இரத்த ஓட்டத்தால் கால் அசௌகரியம் உள்ளவர்களுக்கு.',
    
    'product.actyon.name': 'ஆக்ஷன்',
    'product.actyon.tagline': 'சுதந்திரமாக நகருங்கள். வலியை குறைக்கவும்.',
    'product.actyon.subtitle': 'மென்மையான, செயலில் இயக்கத்திற்காக தசை விறைப்பு மற்றும் மூட்டு அசௌகரியத்தை நிவர்த்தி செய்யும் மூலிகை சூத்திரம்.',
    'product.actyon.features': 'அமைதிப்படுத்துகிறது | தளர்த்துகிறது | இயக்கத்தை மீட்டெடுக்கிறது',
    'product.actyon.description': 'ஆக்ஷனுடன் நகரும் சுதந்திரத்தை மீண்டும் கண்டறியுங்கள், சோர்வான தசைகள் மற்றும் கடினமான மூட்டுகளை அமைதிப்படுத்த வடிவமைக்கப்பட்ட ஒரு ஆடம்பரமான ஆயுர்வேத சூத்திரம். காலப்போக்கில் நிரூபிக்கப்பட்ட மூலிகைகளை சிகிச்சை அத்தியாவசிய எண்ணெய்களுடன் கலந்து, இது வலியை குறைக்க, வீக்கத்தை அமைதிப்படுத்த மற்றும் உங்கள் உடலின் இயற்கை தாளத்திற்கு சமநிலையை மீட்டெடுக்க ஆழமாக வேலை செய்கிறது.',
    'product.actyon.benefit1': 'ஆழமாக ஊடுருவும், எண்ணெய் இல்லாத அமைப்பு',
    'product.actyon.benefit2': 'வலி மற்றும் மூட்டு அசௌகரியத்தை நிவர்த்தி செய்கிறது',
    'product.actyon.benefit3': 'நெகிழ்வுத்தன்மை மற்றும் இரத்த ஓட்டத்தை ஆதரிக்கிறது',
    'product.actyon.benefit4': 'தினசரி சுய பராமரிப்பு மற்றும் மீட்புக்காக வடிவமைக்கப்பட்டது',
    'product.actyon.idealFor': 'நல்வாழ்வு ஆர்வலர்கள், யோகா பயிற்சியாளர்கள், உடற்பயிற்சி ஆர்வலர்கள் மற்றும் அன்றாட உடல் அழுத்தத்திலிருந்து இயற்கை, முழுமையான நிவாரணம் தேடும் எவருக்கும்.',
    
    // About
    'about.title': 'ஹெர்ப்ஸ் & ட்ரக்ஸ் பிரைவேட் லிமிடெட் பற்றி',
    'about.story': 'எங்கள் கதை மற்றும் மதிப்புகள்',
    'about.company.story1': '25 ஆண்டுகளுக்கும் மேலாக, ஹெர்ப்ஸ் & ட்ரக்ஸ் பிரைவேட் லிமிடெட் இயற்கை குணப்படுத்தும் தீர்வுகளின் முன்னணியில் உள்ளது, பாரம்பரிய மூலிகை ஞானத்தை நவீன மருந்து நிபுணத்துவத்துடன் இணைத்து பயனுள்ள, பாதுகாப்பான சிகிச்சை தயாரிப்புகளை உருவாக்குகிறது.',
    'about.company.story2': 'எங்கள் முதன்மை தயாரிப்புகள் இயற்கை வலி நிவாரணத்தில் பல தசாப்த கால ஆராய்ச்சி மற்றும் மேம்பாட்டை பிரதிநிதித்துவப்படுத்துகின்றன. சுகாதார கவலைகள் உங்கள் வாழ்க்கைத் தரத்தை கணிசமாக பாதிக்கும் என்பதை நாங்கள் புரிந்துகொள்கிறோம், அதனால்தான் வேலை செய்யும் தீர்வுகளை உருவாக்குவதற்கு நாங்கள் அர்ப்பணித்துள்ளோம்.',
    'about.company.story3': 'ஒவ்வொரு பாட்டிலும் எங்கள் அதிநவீன வசதியில் தயாரிக்கப்படுகிறது, கடுமையான தர கட்டுப்பாட்டு நடவடிக்கைகளைப் பின்பற்றி, உலகம் முழுவதும் நம்பகமான சப்ளையர்களிடமிருந்து பெறப்பட்ட சிறந்த இயற்கை பொருட்களை மட்டுமே பயன்படுத்துகிறது.',
    'about.mission.title': 'எங்கள் நோக்கம்',
    'about.mission.text': 'உலகம் முழுவதும் உள்ள மக்களின் வாழ்க்கைத் தரத்தை மேம்படுத்தும் பாதுகாப்பான, பயனுள்ள மற்றும் மலிவு விலையில் இயற்கை குணப்படுத்தும் தீர்வுகளை வழங்குவது. நவீன ஆராய்ச்சி மற்றும் உற்பத்தி தரங்களால் ஆதரிக்கப்படும் பாரம்பரிய மூலிகை மருத்துவத்தின் சக்தியைப் பயன்படுத்துவதற்கு நாங்கள் உறுதிபூண்டுள்ளோம், மக்களின் தினசரி சுகாதாரம் மற்றும் நல்வாழ்வு பயணத்தில் உண்மையிலேயே மாற்றத்தை ஏற்படுத்தும் தயாரிப்புகளை உருவாக்க.',
    'about.vision.title': 'எங்கள் பார்வை',
    'about.vision.text': 'இயற்கை மூலிகை மருந்துகளில் உலகின் மிகவும் நம்பகமான பெயராக மாறுவது, முழுமையான சுகாதார தீர்வுகளுக்கான மாற்றத்தை வழிநடத்துவது. இயற்கை குணப்படுத்துதல் அனைவருக்கும் அணுகக்கூடியதாக இருக்கும் எதிர்காலத்தை நாங்கள் கற்பனை செய்கிறோம், எங்கள் தயாரிப்புகள் வழக்கமான மருத்துவத்திற்கு மென்மையான ஆனால் பயனுள்ள மாற்றுகளைத் தேடுபவர்களுக்கு முதல் தேர்வாக சேவை செய்கின்றன, அனைத்து சமூகங்களிலும் நல்வாழ்வு மற்றும் உயிர்ச்சக்தியை ஊக்குவிக்கின்றன.',
    'about.values.title': 'எங்கள் முக்கிய மதிப்புகள்',
    'about.values.subtitle': 'இயற்கை குணப்படுத்தும் தீர்வுகளை வழங்கும் எங்கள் நோக்கத்தில் நாங்கள் செய்யும் அனைத்தையும் வழிநடத்தும் கொள்கைகள்',
    'about.value1.title': 'சுகாதாரம் முதலில்',
    'about.value1.desc': 'நாங்கள் உருவாக்கும் எல்லாவற்றிலும் உங்கள் நல்வாழ்வு எங்கள் முதன்மை முன்னுரிமை',
    'about.value2.title': 'ஆராய்ச்சி ஆதரவு',
    'about.value2.desc': 'ஒவ்வொரு சூத்திரமும் அறிவியல் பூர்வமாக சோதிக்கப்பட்டு நிரூபிக்கப்பட்ட பயனுள்ளது',
    'about.value3.title': 'தர உத்தரவாதம்',
    'about.value3.desc': 'மிக உயர்ந்த தொழில்துறை தரங்களை பூர்த்தி செய்யும் பிரீமியம் பொருட்கள்',
    'about.value4.title': 'உலகளாவிய அணுகல்',
    'about.value4.desc': 'இயற்கை குணப்படுத்தும் தீர்வுகளுக்காக உலகம் முழுவதும் வாடிக்கையாளர்களால் நம்பப்படுகிறது',
    'about.certifications.title': 'சான்றிதழ்கள் மற்றும் தரங்கள்',
    
    // Contact
    'contact.title': 'தொடர்பில் இருங்கள்',
    'contact.support': 'தொடர்பு மற்றும் ஆதரவு',
    'contact.subtitle': 'எங்கள் தயாரிப்புகள் பற்றி கேள்விகள் உள்ளதா அல்லது உங்கள் ஆர்டருக்கு உதவி தேவையா? நீங்கள் தகுதியான இயற்கை நிவாரணத்தைக் கண்டறிய நாங்கள் இங்கே இருக்கிறோம்.',
    'contact.info.title': 'தொடர்பு தகவல்',
    'contact.location.title': 'எங்கள் இடம்',
    'contact.location.address': '173/1 பதுபிட்டிய\nகண்டி, இலங்கை',
    'contact.phone.title': 'தொலைபேசி எண்கள்',
    'contact.phone.customer': 'வாடிக்கையாளர் சேவை: +94 769 234 455',
    'contact.phone.orders': 'ஆர்டர்கள் மற்றும் ஆதரவு: +94 769 234 455',
    'contact.email.title': 'மின்னஞ்சல் முகவரிகள்',
    'contact.email.general': 'பொது விசாரணைகள்: info@herbsanddrugs.lk',
    'contact.email.support': 'வாடிக்கையாளர் ஆதரவு: support@herbsanddrugs.lk',
    'contact.hours.title': 'வணிக நேரங்கள்',
    'contact.hours.weekdays': 'திங்கள் - வெள்ளி: காலை 9:00 - மாலை 6:00',
    'contact.hours.saturday': 'சனிக்கிழமை: காலை 10:00 - மாலை 4:00',
    'contact.hours.sunday': 'ஞாயிறு: மூடப்பட்டுள்ளது',
    'contact.why.title': 'ஏன் எங்களைத் தேர்வு செய்ய வேண்டும்?',
    'contact.response.time': 'பதில் நேரம்',
    'contact.satisfaction': 'வாடிக்கையாளர் திருப்தி',
    'contact.form.title': 'எங்களுக்கு ஒரு செய்தி அனுப்புங்கள்',
    'contact.form.name': 'முழு பெயர்',
    'contact.form.email': 'மின்னஞ்சல் முகவரி',
    'contact.form.phone': 'தொலைபேசி எண்',
    'contact.form.message': 'செய்தி',
    'contact.form.send': 'செய்தி அனுப்பு',
    'contact.form.name.placeholder': 'உங்கள் முழு பெயர்',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.phone.placeholder': '+94 769 234 455',
    'contact.form.message.placeholder': 'நாங்கள் உங்களுக்கு எப்படி உதவ முடியும் என்று சொல்லுங்கள்...',
    
    // Footer
    'footer.company.desc': '25 ஆண்டுகளுக்கும் மேலாக, நாங்கள் இயற்கை, பயனுள்ள குணப்படுத்தும் தீர்வுகளை வழங்குவதற்கு அர்ப்பணித்துள்ளோம். எங்கள் தயாரிப்புகள் தரம் மற்றும் உங்கள் நல்வாழ்வுக்கான எங்கள் உறுதிப்பாட்டை பிரதிநிதித்துவப்படுத்துகின்றன.',
    'footer.quicklinks': 'விரைவு இணைப்புகள்',
    'footer.home': 'முகப்பு',
    'footer.faqs': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    'footer.testimonials': 'சாட்சியங்கள்',
    'footer.contact.us': 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
    'footer.copyright': '© 2024 ஹெர்ப்ஸ் & ட்ரக்ஸ் பிரைவேட் லிமிடெட். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    'footer.privacy': 'தனியுரிமை கொள்கை',
    'footer.terms': 'சேவை விதிமுறைகள்',
    'footer.shipping': 'ஷிப்பிங் தகவல்',
    
    // Common
    'common.idealFor': 'ஏற்றது:',
    'common.reviews': 'மதிப்புரைகள்',
    'common.required': '*'
  }
});