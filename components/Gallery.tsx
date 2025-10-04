import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { galleryImages } from '../data/gallery';

const Gallery: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="gallery" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t('gallery_title')}</h2>
          <div className="w-24 h-1 bg-[#00a95a] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative overflow-hidden rounded-lg shadow-lg group aspect-w-4 aspect-h-3">
              <img src={image.src} alt={image.alt[language]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                <div className="p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h3 className="font-bold text-lg">{image.caption[language]}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;