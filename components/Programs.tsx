import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Program } from '../types';

// SVG Icons as React Components
const BookIcon: React.FC<{className: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const HeartIcon: React.FC<{className: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.318-7.318a4.5 4.5 0 010-6.364z" />
    </svg>
);

const GlobeIcon: React.FC<{className: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375m-6.375 5.25h6.375M5.25 6.75h.008v.008H5.25V6.75zm0 5.25h.008v.008H5.25v-.008zm0 5.25h.008v.008H5.25v-.008zm13.5-10.5h.008v.008h-.008V6.75zm0 5.25h.008v.008h-.008v-.008zm0 5.25h.008v.008h-.008v-.008z" />
    </svg>
);

const programsData: Program[] = [
    {
        id: 1,
        icon: BookIcon,
        title: { id: 'Program Pendidikan', tr: 'Eğitim Programları', en: 'Education Programs' },
        description: { id: 'Memberikan beasiswa dan bantuan perlengkapan sekolah untuk pelajar yang membutuhkan.', tr: 'İhtiyaç sahibi öğrencilere burs ve okul malzemeleri yardımı sağlıyoruz.', en: 'Providing scholarships and school supplies for students in need.' },
    },
    {
        id: 2,
        icon: HeartIcon,
        title: { id: 'Program Kesehatan', tr: 'Sağlık Programları', en: 'Health Programs' },
        description: { id: 'Menyediakan layanan kesehatan gratis dan bantuan medis bagi masyarakat kurang mampu.', tr: 'Düşük gelirli topluluklara ücretsiz sağlık hizmetleri ve tıbbi yardım sunuyoruz.', en: 'Offering free health services and medical aid to underprivileged communities.' },
    },
    {
        id: 3,
        icon: GlobeIcon,
        title: { id: 'Program Kemanusiaan', tr: 'İnsani Yardım Programları', en: 'Humanitarian Programs' },
        description: { id: 'Bantuan darurat, distribusi makanan, dan dukungan untuk pengungsi dan korban bencana.', tr: 'Acil yardım, gıda dağıtımı ve mülteciler ile afetzedelere destek sağlıyoruz.', en: 'Emergency relief, food distribution, and support for refugees and disaster victims.' },
    }
];

const Programs: React.FC = () => {
    const { language, t } = useLanguage();

    return (
        <section id="programs" className="py-20 gradient-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t('programs_title')}</h2>
                    <div className="w-24 h-1 bg-[#00a95a] mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programsData.map(program => (
                        <div key={program.id} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex justify-center items-center mb-6">
                                <div className="bg-green-100 p-4 rounded-full">
                                    <program.icon className="h-10 w-10 text-[#00a95a]" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title[language]}</h3>
                            <p className="text-gray-600">{program.description[language]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;