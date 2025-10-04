import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../types';

interface HeaderProps {
    onDonateClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDonateClick }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', key: 'nav_home' },
    { href: '#about', key: 'nav_about' },
    { href: '#programs', key: 'nav_programs' },
    { href: '#news', key: 'nav_news' },
    { href: '#gallery', key: 'nav_gallery' },
    { href: '#contact', key: 'nav_contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src="/assets/logo.png" alt="Lazismu Turkey Logo" className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.key} href={link.href} className="text-gray-700 hover:text-[#00a95a] transition-colors font-medium">{t(link.key)}</a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="appearance-none bg-transparent border-gray-300 rounded-md py-1 pl-3 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00a95a] font-medium"
            >
              <option value="id">ID</option>
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>
          </div>
          <button onClick={onDonateClick} className="hidden sm:block bg-[#ff6600] text-white px-5 py-2 rounded-full hover:bg-[#e65c00] transition-transform duration-300 hover:scale-105 shadow">
            {t('donate_button')}
          </button>
          <button className="lg:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center p-4 space-y-4">
            {navLinks.map(link => (
              <a key={link.key} href={link.href} className="text-gray-700 hover:text-[#00a95a] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>{t(link.key)}</a>
            ))}
             <button onClick={() => { onDonateClick(); setIsMenuOpen(false); }} className="w-full text-center bg-[#ff6600] text-white px-5 py-2 rounded-full hover:bg-[#e65c00] transition-transform duration-300 hover:scale-105 shadow">
              {t('donate_button')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;