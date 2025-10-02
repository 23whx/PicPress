import { create } from 'zustand';
import type { Language, Translations } from '@/lib/i18n';
import { detectLanguage, getTranslation } from '@/lib/i18n';

interface LanguageState {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

// 从 localStorage 加载保存的语言
function loadSavedLanguage(): Language {
  if (typeof localStorage === 'undefined') return detectLanguage();
  
  const saved = localStorage.getItem('picpress-language');
  if (saved && ['en', 'zh', 'ja', 'ko', 'ar'].includes(saved)) {
    return saved as Language;
  }
  
  return detectLanguage();
}

export const useLanguageStore = create<LanguageState>((set) => {
  const initialLanguage = loadSavedLanguage();
  
  // 初始化时设置 HTML 属性
  if (typeof document !== 'undefined') {
    document.documentElement.lang = initialLanguage;
    document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr';
  }
  
  return {
    language: initialLanguage,
    t: getTranslation(initialLanguage),
    setLanguage: (lang: Language) => {
      // 保存到 localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('picpress-language', lang);
      }
      
      // 更新 HTML lang 属性
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
        // 阿拉伯语需要 RTL
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      }
      
      set({
        language: lang,
        t: getTranslation(lang),
      });
    },
  };
});

