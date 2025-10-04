import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { articles } from '../data/articles';
import type { Article } from '../types';

const NewsModal: React.FC<{ article: Article; onClose: () => void }> = ({ article, onClose }) => {
  const { language, t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <img src={article.image} alt={article.title[language]} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">{article.title[language]}</h2>
          <p className="text-sm text-gray-500 mb-6">{article.date[language]}</p>
          <div className="text-gray-700 leading-relaxed prose" dangerouslySetInnerHTML={{ __html: article.content[language] }}></div>
          <button
            onClick={onClose}
            className="mt-8 bg-[#ff6600] text-white px-6 py-2 rounded-full hover:bg-[#e65c00] transition-colors"
          >
            {t('close_modal')}
          </button>
        </div>
      </div>
    </div>
  );
};

const News: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  // Display only the first 2 articles, can be changed later
  const displayedArticles = articles.slice(0, 2);

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t('news_title')}</h2>
          <div className="w-24 h-1 bg-[#00a95a] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayedArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
              <img src={article.image} alt={article.title[language]} className="w-full h-56 object-cover" />
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-gray-500 mb-2">{article.date[language]}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title[language]}</h3>
                <p className="text-gray-600 flex-grow">{article.summary[language]}</p>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="mt-4 text-[#00a95a] font-semibold self-start hover:text-[#008348] transition-colors"
                >
                  {t('read_more')} &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedArticle && <NewsModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
    </section>
  );
};

export default News;