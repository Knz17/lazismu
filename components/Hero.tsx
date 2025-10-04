
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
    onDonateClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDonateClick }) => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">{t('hero_title')}</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">{t('hero_subtitle')}</p>
        <button onClick={onDonateClick} className="bg-[#ff6600] text-white px-8 py-3 rounded-full hover:bg-[#e65c00] transition-transform duration-300 hover:scale-105 text-lg font-semibold shadow-lg">
          {t('donate_button')}
        </button>
      </div>
    </section>
  );
};

export default Hero;