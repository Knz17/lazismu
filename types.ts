import React from 'react';
export type Language = 'id' | 'tr' | 'en';

export interface MultiLanguageString {
  id: string;
  tr: string;
  en: string;
}

export interface Article {
  id: number;
  image: string;
  date: MultiLanguageString;
  title: MultiLanguageString;
  summary: MultiLanguageString;
  content: MultiLanguageString;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: MultiLanguageString;
  caption: MultiLanguageString;
}

export interface Program {
    id: number;
    icon: React.ElementType;
    title: MultiLanguageString;
    description: MultiLanguageString;
}
