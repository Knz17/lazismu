import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t('about_title')}</h2>
          <p className="text-lg text-gray-600 mt-2">{t('about_intro')}</p>
          <div className="w-24 h-1 bg-[#00a95a] mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">{t('about_p1')}</p>
          <p className="text-lg leading-relaxed">{t('about_p2')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;