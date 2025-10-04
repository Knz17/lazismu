import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t('contact_title')}</h2>
          <p className="text-lg text-gray-600 mt-2">{t('contact_subtitle')}</p>
          <div className="w-24 h-1 bg-[#00a95a] mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Address */}
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-[#00a95a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('contact_address')}</h3>
              <p className="text-gray-600">{t('contact_address_value')}</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-[#00a95a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('contact_email')}</h3>
              <a href="mailto:info@lazismuturkey.org" className="text-gray-600 hover:text-[#00a95a]">info@lazismuturkey.org</a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-[#00a95a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('contact_phone')}</h3>
              <a href="tel:+901234567890" className="text-gray-600 hover:text-[#00a95a]">+90 123 456 7890</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;