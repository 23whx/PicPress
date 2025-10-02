import { useLanguageStore } from '@/store/useLanguageStore';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useLanguageStore((state) => state.t);

  return (
    <nav className="flex gap-3 items-center">
      <LanguageSwitcher />
      <a
        href="/about"
        className="px-4 py-2 rounded-xl bg-brand-accent/50 hover:bg-brand-accent transition-colors"
      >
        {t.nav.about}
      </a>
    </nav>
  );
}

