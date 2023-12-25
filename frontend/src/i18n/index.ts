import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru';
import en from './locales/en';

export const defaultNS = 'common';

export const resources = {
    en,
    ru,
};

export const initializeI18next = () => {
    return i18next.use(LanguageDetector).init({
        returnObjects: true,
        fallbackLng: ['ru'],
        supportedLngs: ['en', 'ru'],
        debug: false,
        resources,
        defaultNS,
        detection: {
            order: ['cookie'],
            lookupQuerystring: 'lng',
            lookupCookie: 'language',
        },
    });
}

